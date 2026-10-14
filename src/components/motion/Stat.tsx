import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "./hooks";

const NUMERIC = /-?\d[\d,]*/;

type StatProps = {
  value: string;
  className?: string;
};

export default function Stat({ value, className }: StatProps) {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const match = value.match(NUMERIC);
    if (!match || match.index !== 0) {
      node.textContent = value;
      return;
    }

    const target = parseInt(match[0].replace(/,/g, ""), 10);
    const prefix = value.slice(0, match.index);
    const suffix = value.slice(match.index + match[0].length);

    if (reduced || typeof IntersectionObserver === "undefined") {
      node.textContent = value;
      return;
    }

    node.textContent = `${prefix}0${suffix}`;

    let frame = 0;
    let started = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || started) return;
          started = true;
          observer.unobserve(entry.target);
          const start = performance.now();
          const duration = 1400;
          const step = (now: number) => {
            const progress = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - progress, 3);
            node.textContent = `${prefix}${Math.round(target * eased).toLocaleString()}${suffix}`;
            if (progress < 1) frame = requestAnimationFrame(step);
          };
          frame = requestAnimationFrame(step);
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [reduced, value]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
