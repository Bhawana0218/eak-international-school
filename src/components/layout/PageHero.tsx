import type { ReactNode } from "react";

type PageHeroProps = {
  kicker: string;
  title: ReactNode;
  children?: ReactNode;
};

export default function PageHero({ kicker, title, children }: PageHeroProps) {
  return (
    <section className="border-b border-border bg-gradient-to-b from-brand-50 to-background">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-600">{kicker}</p>
        <h1 className="mt-3 max-w-3xl font-heading text-4xl font-semibold tracking-tight text-brand-900 sm:text-5xl">
          {title}
        </h1>
        {children && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{children}</p>}
      </div>
    </section>
  );
}
