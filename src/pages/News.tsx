import PageHero from "@/components/layout/PageHero";

export default function News() {
  return (
    <>
      <PageHero kicker="News" title="Stories from campus">
        Celebrations, achievements, and announcements from the EAK community.
      </PageHero>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-semibold text-brand-900">
          News page placeholder
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          Article list with category filters and a featured story will be implemented
          in the next step.
        </p>
      </section>
    </>
  );
}
