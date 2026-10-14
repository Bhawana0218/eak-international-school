import { useEffect, useRef } from "react";
import { useMediaQuery, usePrefersReducedMotion } from "./hooks";

export type StoryPanel = {
  tag: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
};

type HorizontalStoryProps = {
  kicker: string;
  title: string;
  intro: string;
  panels: StoryPanel[];
};

const tints = [
  "from-brand-700 to-brand-950",
  "from-lagoon-600 to-brand-900",
  "from-gold-500 to-gold-700",
  "from-brand-600 to-brand-950",
  "from-lagoon-500 to-brand-800",
  "from-brand-800 to-brand-950",
];

export default function HorizontalStory({ kicker, title, intro, panels }: HorizontalStoryProps) {
  const reduced = usePrefersReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const enabled = isDesktop && !reduced;

  const outerRef = useRef<HTMLElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const barRef = useRef<HTMLSpanElement | null>(null);
  const countRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const outer = outerRef.current;
    const sticky = stickyRef.current;
    const track = trackRef.current;
    const viewport = viewportRef.current;
    if (!outer || !sticky || !track || !viewport) return;

    let travel = 0;
    let offset = 0;
    let frame = 0;
    let queued = false;

    const measure = () => {
      offset = parseFloat(window.getComputedStyle(sticky).top) || 0;
      travel = Math.max(0, track.scrollWidth - viewport.clientWidth);
      outer.style.height = `${sticky.offsetHeight + travel}px`;
    };

    const applyProgress = () => {
      queued = false;
      if (travel <= 0) return;
      const rect = outer.getBoundingClientRect();
      const span = Math.max(1, rect.height - sticky.offsetHeight);
      const progress = Math.min(1, Math.max(0, (offset - rect.top) / span));

      track.style.transform = `translate3d(${(-progress * travel).toFixed(2)}px, 0, 0)`;

      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${progress.toFixed(4)})`;
      }

      if (countRef.current) {
        const current = Math.min(panels.length, Math.floor(progress * panels.length) + 1);
        const label = `${String(current).padStart(2, "0")} / ${String(panels.length).padStart(2, "0")}`;
        if (countRef.current.textContent !== label) countRef.current.textContent = label;
      }
    };

    const request = () => {
      if (queued) return;
      queued = true;
      frame = requestAnimationFrame(applyProgress);
    };

    const onResize = () => {
      measure();
      request();
    };

    measure();
    applyProgress();
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", onResize);

    // Re-measure when panel/viewport widths settle (fonts, layout shifts).
    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(onResize);
      ro.observe(track);
      ro.observe(viewport);
    }

    return () => {
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", onResize);
      ro?.disconnect();
      cancelAnimationFrame(frame);
      outer.style.height = "";
      track.style.transform = "";
    };
  }, [enabled, panels.length]);

  return (
    <section ref={outerRef} className="relative bg-brand-950 text-white">
      <div
        ref={stickyRef}
        className={enabled ? "sticky top-16 h-[calc(100svh-4rem)] overflow-hidden" : "py-14 sm:py-16"}
      >
        <div className="mx-auto flex h-full max-w-7xl flex-col px-4 py-10 sm:px-6 lg:px-8">
          <div className="shrink-0">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-400">{kicker}</p>
            <h2 className="mt-3 max-w-2xl font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              {title}
            </h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-brand-200">{intro}</p>
            <div className="mt-6 flex items-center gap-4">
              <span className="h-1 w-full max-w-xs overflow-hidden rounded-full bg-white/15">
                <span
                  ref={barRef}
                  className="block h-full w-full origin-left rounded-full bg-gold-500"
                  style={{ transform: "scaleX(0)" }}
                />
              </span>
              <span ref={countRef} className="text-xs font-semibold tracking-[0.2em] text-brand-300">
                {`01 / ${String(panels.length).padStart(2, "0")}`}
              </span>
            </div>
          </div>

          <div
            ref={viewportRef}
            className={enabled ? "mt-8 min-h-0 flex-1 overflow-hidden" : "mt-8 overflow-x-auto pb-2"}
          >
            <div
              ref={trackRef}
              className={
                enabled
                  ? "flex h-full w-max items-stretch gap-6 will-change-transform"
                  : "flex w-max snap-x snap-mandatory gap-4"
              }
            >
              {panels.map((panel, index) => (
                <article
                  key={panel.title}
                  className="group flex w-[78vw] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 sm:w-[60vw] lg:w-[24rem]"
                >
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">
                      {panel.tag}
                    </span>
                    <h3 className="mt-3 font-heading text-2xl font-semibold">{panel.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-brand-200">{panel.text}</p>
                  </div>
                  <div
                    className={`relative mt-6 h-40 shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br sm:h-44 ${
                      tints[index % tints.length]
                    }`}
                  >
                    <img
                      src={panel.image}
                      alt={panel.imageAlt}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-950/20 to-transparent" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
