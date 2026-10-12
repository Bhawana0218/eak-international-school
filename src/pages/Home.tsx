import PageHero from "@/components/layout/PageHero";

export default function Home() {
  return (
    <>
      <PageHero kicker="Welcome to EAK" title="Where curiosity becomes excellence">
        Nurturing fearless learners from kindergarten through grade 12 in a community
        that celebrates every question.
      </PageHero>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-semibold text-brand-900">
          Home page placeholder
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          Hero background, animated headline, trust bar, statistics, program bento,
          testimonials, news preview, and call-to-action sections will be implemented
          in the next step.
        </p>
      </section>
    </>
  );
}
