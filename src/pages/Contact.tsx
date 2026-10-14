import { useState } from "react";
import PageHero from "@/components/layout/PageHero";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const channels = [
  { icon: MapPin, title: "Visit", lines: ["12 Meridian Avenue, Greenfield District", "Hillcrest, HC 40210"] },
  { icon: Phone, title: "Call", lines: ["+1 (555) 014-2200", "+1 (555) 014-2201"] },
  { icon: Mail, title: "Email", lines: ["admissions@eakinternational.edu", "info@eakinternational.edu"] },
  { icon: Clock, title: "Office hours", lines: ["Mon – Fri: 8:00 AM – 4:30 PM", "Sat: 9:00 AM – 12:30 PM"] },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div>
      <PageHero
        kicker="Contact"
        title="We would love to hear from you"
        image="https://th.bing.com/th/id/OIP.MqsfHl7vN66DYRksx8VjLwHaEK?w=320&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
      >
        Visit our campus, call the front office, or send a message — we reply within one school day.
      </PageHero>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-card p-7">
              <span className="grid size-11 place-items-center rounded-xl bg-brand-800 text-gold-400">
                <c.icon className="size-5" />
              </span>
              <h2 className="mt-4 font-heading text-lg font-semibold text-brand-900">{c.title}</h2>
              {c.lines.map((l) => (
                <p key={l} className="mt-1 text-sm text-muted-foreground">{l}</p>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-8 sm:p-10">
            <h2 className="font-heading text-2xl font-semibold text-brand-900">Send a message</h2>
            {sent ? (
              <p className="mt-6 rounded-2xl bg-paper-100 p-6 text-sm text-brand-900">
                Thank you for reaching out. Our front office will respond within one school day.
              </p>
            ) : (
              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <input required placeholder="Full name" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-600" />
                  <input required placeholder="Phone" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-600" />
                </div>
                <input required type="email" placeholder="Email address" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-600" />
                <select className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" defaultValue="Admission inquiry">
                  {["Admission inquiry", "Campus tour", "Transport query", "Careers", "Feedback"].map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
                <textarea required rows={5} placeholder="How can we help?" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-600" />
                <button type="submit" className="w-full rounded-full bg-brand-800 px-6 py-3.5 text-sm font-semibold text-gold-400 hover:bg-brand-700">
                  Send Message
                </button>
              </form>
            )}
          </div>
          <div className="overflow-hidden rounded-3xl bg-brand-950 p-8 text-white sm:p-10">
            <h2 className="font-heading text-2xl font-semibold">Find us on the map</h2>
            <p className="mt-2 text-sm text-brand-200">Two minutes from Greenfield Metro, Gate 2 for visitors.</p>
            <div className="mt-6 grid min-h-64 place-items-center rounded-2xl bg-white/10 p-10 text-center">
              <div>
                <MapPin className="mx-auto size-8 text-gold-400" />
                <p className="mt-3 font-heading text-xl font-semibold">EAK International School</p>
                <p className="mt-1 text-sm text-brand-200">12 Meridian Avenue, Greenfield District</p>
                <p className="mt-4 inline-block rounded-full bg-gold-500 px-5 py-2 text-sm font-semibold text-brand-950">Open in Maps</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Facebook", "Instagram", "YouTube", "X"].map((s) => (
                <span key={s} className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-brand-100">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
