import PageHero from "@/components/layout/PageHero";

export default function About() {
  return (
    <>
      <PageHero kicker="About" title="Our story, our promise">
        Thirty years of academic rigor, creative courage, and care.
      </PageHero>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-semibold text-brand-900">
          About page placeholder
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          Mission, vision, history timeline, leadership, and accreditation sections
          will be implemented in the next step.
        </p>
      </section>
    </>
  );
}
