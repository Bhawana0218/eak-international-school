import { useCallback, useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { usePrefersReducedMotion } from "./hooks";

type RevealOptions = {
  delay?: number;
  distance?: number;
  direction?: "up" | "left" | "right";
  variant?: "up" | "media" | "mask";
  lift?: boolean;
  className?: string;
};

export function useReveal({
  delay = 0,
  distance = 26,
  direction = "up",
  variant = "up",
  lift = false,
  className = "",
}: RevealOptions = {}) {
  const reduced = usePrefersReducedMotion();
  const [node, setNode] = useState<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  const attach = useCallback((element: HTMLElement | null) => {
    setNode(element);
  }, []);

  useEffect(() => {
    if (reduced || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    // Refs attach before effects, but the callback-ref state update is async,
    // so the first run still sees node === null. Wait for the real node instead
    // of revealing immediately — otherwise every card would animate on page
    // load and scroll-triggered reveals would never occur.
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setVisible(true);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [node, reduced]);

  const classes = [variant === "media" ? "reveal-media" : variant === "mask" ? "reveal-mask" : "reveal"];
  if (lift) classes.push("reveal-lift");
  if (visible) classes.push("is-visible");
  if (className) classes.push(className);

  const style =
    variant === "media"
      ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties)
      : ({
          "--reveal-x": `${direction === "left" ? -56 : direction === "right" ? 56 : 0}px`,
          "--reveal-y": `${direction === "up" ? distance : 0}px`,
          "--reveal-delay": `${delay}ms`,
        } as CSSProperties);

  return { ref: attach, className: classes.join(" "), style };
}
