import PageHero from "@/components/layout/PageHero";

export default function Faculty() {
  return (
    <>
      <PageHero kicker="Faculty" title="Learn from the best">
        Our educators bring decades of classroom experience, research, and real-world
        practice to every lesson.
      </PageHero>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-semibold text-brand-900">
          Faculty page placeholder
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          Staff directory with department filters and profile cards will be
          implemented in the next step.
        </p>
      </section>
    </>
  );
}
