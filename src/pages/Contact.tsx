import PageHero from "@/components/layout/PageHero";

export default function Contact() {
  return (
    <>
      <PageHero kicker="Contact" title="We would love to hear from you">
        Visit our campus, call the front office, or send a message — we reply within
        one school day.
      </PageHero>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-semibold text-brand-900">
          Contact page placeholder
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          Contact details, campus map, and enquiry form will be implemented in the
          next step.
        </p>
      </section>
    </>
  );
}
