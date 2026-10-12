import PageHero from "@/components/layout/PageHero";

export default function StudentLife() {
  return (
    <>
      <PageHero kicker="Student Life" title="Beyond the classroom">
        Clubs, teams, houses, and stage lights — there is always something happening
        on campus.
      </PageHero>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-semibold text-brand-900">
          Student life page placeholder
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          Club directory, sports and arts showcases, house system, and photo gallery
          will be implemented in the next step.
        </p>
      </section>
    </>
  );
}
