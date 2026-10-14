import type { ReactNode } from "react";

type PageHeroProps = {
  kicker: string;
  title: ReactNode;
  image?: string;
  children?: ReactNode;
};

export default function PageHero({ kicker, title, image, children }: PageHeroProps) {
  return (
    <section className={`relative isolate overflow-hidden border-b border-border ${image ? "bg-brand-950" : "bg-gradient-to-b from-brand-50 to-background"}`}>
      {image && (
        <>
          <img
            src={image}
            alt=""
            aria-hidden="true"
            fetchPriority="high"
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-950/85 via-brand-950/70 to-brand-950/45" />
        </>
      )}
      <div className={`relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${image ? "flex min-h-[20rem] flex-col justify-center py-20 sm:min-h-[24rem] sm:py-24" : "py-20 sm:py-24"}`}>
        <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${image ? "text-gold-300" : "text-gold-600"}`}>{kicker}</p>
        <h1 className={`mt-3 max-w-3xl font-heading text-4xl font-semibold tracking-tight sm:text-5xl ${image ? "text-white" : "text-brand-900"}`}>
          {title}
        </h1>
        {children && <p className={`mt-5 max-w-2xl text-lg leading-relaxed ${image ? "text-brand-100" : "text-muted-foreground"}`}>{children}</p>}
      </div>
    </section>
  );
}
