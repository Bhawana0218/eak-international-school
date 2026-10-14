import { useEffect, useRef, useState } from "react";

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return;
    const list = window.matchMedia(query);
    const onChange = (event: MediaQueryListEvent) => setMatches(event.matches);
    setMatches(list.matches);
    list.addEventListener("change", onChange);
    return () => list.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}

export function usePrefersReducedMotion() {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}

/**
 * Cinematic hero parallax: as the hero scrolls out of view, its background
 * image drifts down slightly and scales up, handing off to the next section.
 * Writes directly to element styles (no React re-renders), skips reduced
 * motion, and cleans up on unmount.
 */
export function useHeroParallax<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || typeof window === "undefined") return;
    const img = root.querySelector<HTMLElement>(".hero-bg");
    if (!img) return;
    const mqReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;
    let queued = false;

    const render = () => {
      queued = false;
      if (mqReduced.matches) {
        img.style.transform = "";
        return;
      }
      const rect = root.getBoundingClientRect();
      const height = Math.max(rect.height, 1);
      const progress = Math.min(Math.max(-rect.top / height, 0), 1);
      img.style.transform = `translate3d(0, ${(progress * 18).toFixed(2)}%, 0) scale(${(1.02 + progress * 0.1).toFixed(4)})`;
    };

    const request = () => {
      if (queued) return;
      queued = true;
      raf = requestAnimationFrame(render);
    };

    const onChange = () => {
      if (mqReduced.matches) img.style.transform = "";
      else request();
    };

    request();
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request);
    mqReduced.addEventListener("change", onChange);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
      mqReduced.removeEventListener("change", onChange);
      img.style.transform = "";
    };
  }, []);

  return ref;
}

/**
 * Scroll-linked shrink for sticky-stacked cards (Wix-style stacked cards).
 * While an earlier card is pinned and the next card scrolls over it, the
 * earlier card scales down slightly for a layered storytelling feel.
 * Writes directly to element styles (no React re-renders), only on desktop
 * without reduced motion, and cleans everything up on unmount.
 */
export function useStackShrink<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || typeof window === "undefined") return;
    const mqDesktop = window.matchMedia("(min-width: 1024px)");
    const mqReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;
    let queued = false;
    let tops: number[] = [];

    const cards = () => Array.from(root.querySelectorAll<HTMLElement>("[data-stack]"));

    const measure = () => {
      tops = cards().map((card) => {
        const top = parseFloat(window.getComputedStyle(card).top);
        return Number.isFinite(top) ? top : 96;
      });
    };

    const render = () => {
      queued = false;
      if (!mqDesktop.matches || mqReduced.matches) return;
      const vh = window.innerHeight;
      const list = cards();
      list.forEach((card, index) => {
        if (index === list.length - 1) {
          card.style.transform = "";
          return;
        }
        const top = tops[index] ?? 96;
        const rect = card.getBoundingClientRect();
        const stuck = Math.min(Math.max((top - rect.top) / vh, 0), 1);
        const scale = 1 - 0.07 * Math.min(stuck * 2.5, 1);
        card.style.transformOrigin = "center top";
        card.style.transform = scale < 1 ? `scale(${scale.toFixed(4)})` : "";
      });
    };

    const request = () => {
      if (queued) return;
      queued = true;
      raf = requestAnimationFrame(render);
    };

    const reset = () => {
      cards().forEach((card) => {
        card.style.transform = "";
      });
    };

    const onChange = () => {
      if (!mqDesktop.matches || mqReduced.matches) {
        reset();
      } else {
        measure();
        request();
      }
    };

    measure();
    request();
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", onChange);
    mqDesktop.addEventListener("change", onChange);
    mqReduced.addEventListener("change", onChange);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", onChange);
      mqDesktop.removeEventListener("change", onChange);
      mqReduced.removeEventListener("change", onChange);
      reset();
    };
  }, []);

  return ref;
}
