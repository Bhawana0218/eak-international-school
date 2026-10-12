import PageHero from "@/components/layout/PageHero";

export default function Academics() {
  return (
    <>
      <PageHero kicker="Academics" title="A curriculum built for every learner">
        From first words to final exams, every stage is designed to challenge and
        inspire.
      </PageHero>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-semibold text-brand-900">
          Academics page placeholder
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          School-level tabs, subject cards, STEM and arts highlights, and learning
          support sections will be implemented in the next step.
        </p>
      </section>
    </>
  );
}
