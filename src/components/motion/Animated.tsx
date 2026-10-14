import type { ReactNode } from "react";
import { useReveal } from "./useReveal";

type AnimatedProps = {
  children: ReactNode;
  as?: "div" | "li" | "article" | "figure";
  className?: string;
  delay?: number;
  distance?: number;
  direction?: "up" | "left" | "right";
  variant?: "up" | "media" | "mask";
  lift?: boolean;
};

export default function Animated({
  children,
  as = "div",
  className,
  delay = 0,
  distance = 26,
  direction = "up",
  variant = "up",
  lift = false,
}: AnimatedProps) {
  const props = useReveal({ className, delay, distance, direction, variant, lift });

  if (variant === "mask") {
    return (
      <span {...props}>
        <span className="reveal-mask-inner">{children}</span>
      </span>
    );
  }
  if (as === "li") return <li {...props}>{children}</li>;
  if (as === "article") return <article {...props}>{children}</article>;
  if (as === "figure") return <figure {...props}>{children}</figure>;
  return <div {...props}>{children}</div>;
}
