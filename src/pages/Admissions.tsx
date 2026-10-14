import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "@/components/layout/PageHero";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  ClipboardCheck,
  FileText,
  MessagesSquare,
  PartyPopper,
  PhoneCall,
} from "lucide-react";

const steps = [
  { icon: PhoneCall, title: "Enquiry", text: "Submit the online enquiry or visit the admissions desk for a counselling call." },
  { icon: FileText, title: "Application", text: "Complete the application form and upload documents within seven days." },
  { icon: MessagesSquare, title: "Interaction", text: "Child interaction and parent conversation with grade coordinators." },
  { icon: ClipboardCheck, title: "Selection", text: "Decisions shared within five working days on email and phone." },
  { icon: PartyPopper, title: "Enrollment", text: "Confirm seat with fee payment and attend orientation day." },
];

const dates = [
  { event: "Applications open", date: "1 Sep 2026" },
  { event: "Early Years interaction rounds", date: "Oct – Nov 2026" },
  { event: "Grade 11 aptitude and counselling", date: "15 Nov 2026" },
  { event: "First offer list", date: "5 Dec 2026" },
  { event: "Orientation Day", date: "28 Mar 2027" },
];

const faqs = [
  { q: "What is the age criterion for kindergarten?", a: "Children should be 3+ for Nursery, 4+ for K1 and 5+ for K2 as on 31 March 2027. Relaxation up to 60 days is considered on interaction." },
  { q: "Is there an entrance test?", a: "Grades 1 to 5 have playful readiness checks. Grades 6 to 11 have written assessments in English, Maths and Science followed by interaction." },
  { q: "What documents are required?", a: "Birth certificate, previous report card, transfer certificate (Grade 2 onward), address proof, photographs and vaccination record for early years." },
  { q: "Is school transport available in my area?", a: "42 GPS-tracked buses cover Greenfield, Hillcrest, Lakeview and Riverside. Share your location with the transport desk for confirmation." },
  { q: "Are scholarships available?", a: "Merit, sports and arts scholarships offer 25% to 100% tuition support from Grade 6 based on assessment and trials." },
];

export default function Admissions() {
  const [open, setOpen] = useState(0);
  const [sent, setSent] = useState(false);
  return (
    <div>
      <PageHero
        kicker="Admissions"
        title="Begin your EAK journey"
        image="https://th.bing.com/th/id/OIP.ro7YY3Y0iv49UTeEh6j9EAHaEJ?w=326&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
      >
        Five clear steps from enquiry to enrolment, guided by our admissions team every day of the week.
      </PageHero>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-semibold text-brand-900">Admission process</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl border border-border bg-card p-6">
              <span className="absolute right-4 top-4 font-heading text-3xl font-semibold text-brand-100">0{i + 1}</span>
              <span className="grid size-11 place-items-center rounded-xl bg-brand-800 text-gold-400">
                <s.icon className="size-5" />
              </span>
              <h3 className="mt-4 font-heading text-lg font-semibold text-brand-900">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-7">
            <h3 className="flex items-center gap-2 font-heading text-xl font-semibold text-brand-900">
              <BadgeCheck className="size-5 text-lagoon-600" />
              Eligibility criteria
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Nursery: 3+ years, K1: 4+ years, K2: 5+ years</li>
              <li>Grade 1: 6+ years with kindergarten readiness</li>
              <li>Grades 2–9: previous grade pass with interaction</li>
              <li>Grade 11: 70% in Grade 10 pre-boards, stream counselling</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-7">
            <h3 className="flex items-center gap-2 font-heading text-xl font-semibold text-brand-900">
              <FileText className="size-5 text-lagoon-600" />
              Required documents
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Birth certificate and address proof</li>
              <li>Previous year report card and transfer certificate</li>
              <li>Four photographs of child, two of parents</li>
              <li>Vaccination record for early years applicants</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-brand-950 p-7 text-white">
            <h3 className="flex items-center gap-2 font-heading text-xl font-semibold">
              <CalendarDays className="size-5 text-gold-400" />
              Important dates
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {dates.map((d) => (
                <li key={d.event} className="flex items-center justify-between gap-3 border-b border-white/10 pb-3">
                  <span className="text-brand-100">{d.event}</span>
                  <span className="font-semibold text-gold-400">{d.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="border-y border-border bg-paper-100">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-heading text-3xl font-semibold text-brand-900">Frequently asked questions</h2>
            <div className="mt-6 space-y-3">
              {faqs.map((f, i) => (
                <div key={f.q} className="overflow-hidden rounded-2xl border border-border bg-card">
                  <button
                    type="button"
                    onClick={() => setOpen(open === i ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-brand-900"
                  >
                    {f.q}
                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand-800 text-gold-400">
                      {open === i ? "−" : "+"}
                    </span>
                  </button>
                  {open === i && <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-brand-950 p-8 text-white sm:p-10">
            <h2 className="font-heading text-2xl font-semibold">Admission inquiry form</h2>
            <p className="mt-2 text-sm text-brand-200">Our counsellor calls back within one working day.</p>
            {sent ? (
              <div className="mt-6 rounded-2xl bg-white/10 p-6 text-sm">
                Thank you. Your inquiry has been noted. Our admissions team will contact you shortly to schedule a campus tour.
              </div>
            ) : (
              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <input required placeholder="Parent name" className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-brand-300" />
                  <input required placeholder="Phone number" className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-brand-300" />
                </div>
                <input required placeholder="Email address" type="email" className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-brand-300" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <select className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white" defaultValue="Grade 1">
                    {["Nursery", "K1", "K2", "Grade 1", "Grade 6", "Grade 9", "Grade 11"].map((g) => (
                      <option key={g} className="text-black">{g}</option>
                    ))}
                  </select>
                  <input placeholder="City / Area" className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-brand-300" />
                </div>
                <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-sm font-semibold text-brand-950 hover:bg-gold-400">
                  Request Callback
                  <ArrowRight className="size-4" />
                </button>
              </form>
            )}
            <Link to="/contact" className="mt-5 inline-block text-sm font-semibold text-gold-400">
              Prefer to visit? See contact and office hours
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
