import PageHero from "@/components/layout/PageHero";
import { Compass, Eye, Heart, Quote } from "lucide-react";
import { stats } from "@/data/school";

const values = [
  { icon: Heart, title: "Compassion", text: "Service weeks, buddy programs and inclusive classrooms in every grade." },
  { icon: Compass, title: "Courage", text: "Stage exposure, debates and design challenges that reward trying." },
  { icon: Eye, title: "Curiosity", text: "Inquiry labs, Socratic seminars and independent research from Grade 6." },
];

const timeline = [
  { year: "1998", title: "A 60-student beginning", text: "Founded in Greenfield with a vision for joyful rigour and a 200-book library." },
  { year: "2006", title: "Senior school launch", text: "First Class 10 batch scores 100% first division and wins zonal athletics." },
  { year: "2014", title: "Innovation and sports leap", text: "Sports complex, swimming pool and robotics program open to all students." },
  { year: "2021", title: "Global classrooms", text: "Exchange partnerships, MUN circuit wins and university placements in 12 countries." },
  { year: "2026", title: "Innovation Block opens", text: "Eight new studios for AI, media, design and research with community evenings." },
];

const leaders = [
  { initials: "SP", name: "Dr. Sunita Prabhakar", role: "Principal" },
  { initials: "RK", name: "Rajesh Khanna", role: "Vice Principal, Academics" },
  { initials: "AL", name: "Anita Lawrence", role: "Head, Early Years" },
  { initials: "VM", name: "Vikram Menon", role: "Director, Sports" },
];

export default function About() {
  return (
    <div>
      <PageHero
        kicker="About"
        title="Our story, our promise"
        image="https://th.bing.com/th/id/OIP.QmrArAjiTswUxfcbOSrEQwAAAA?w=209&h=176&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
      >
        Thirty years of academic rigor, creative courage, and care for 2,400 learners.
      </PageHero>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-semibold text-brand-900">A school parents trust, children love</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              EAK International School began in 1998 as a neighbourhood primary school with
              sixty students. Today our 12-acre Greenfield campus brings together early years,
              primary, middle and senior schools under one philosophy: high expectations with
              high warmth.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Classrooms average 24 students, every child has a mentor teacher, and learning
              extends to forest trails, innovation studios, pools, courts and community
              libraries across the city.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-5">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-border bg-card p-5">
                  <dd className="font-heading text-2xl font-semibold text-brand-900">{s.value}</dd>
                  <dd className="mt-1 text-sm text-muted-foreground">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="rounded-3xl bg-brand-950 p-8 text-white sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-400">Vision and mission</p>
            <h3 className="mt-3 font-heading text-2xl font-semibold">To raise capable, kind and curious leaders</h3>
            <p className="mt-4 leading-relaxed text-brand-200">
              Our mission is to combine conceptual mastery with character: daily mentoring,
              project-based learning and honest assessment that helps every learner grow
              term after term.
            </p>
            <div className="mt-8 space-y-4">
              {values.map((v) => (
                <div key={v.title} className="flex gap-4 rounded-2xl bg-white/10 p-5">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-gold-500 text-brand-950">
                    <v.icon className="size-5" />
                  </span>
                  <div>
                    <p className="font-semibold">{v.title}</p>
                    <p className="mt-1 text-sm text-brand-200">{v.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="border-y border-border bg-paper-100">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-semibold text-brand-900">Milestones that shaped us</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {timeline.map((t) => (
              <div key={t.year} className="rounded-2xl border border-border bg-card p-6">
                <p className="font-heading text-2xl font-semibold text-gold-600">{t.year}</p>
                <p className="mt-2 font-semibold text-brand-900">{t.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 rounded-3xl border border-border bg-card p-8 sm:p-12 lg:grid-cols-[280px_1fr]">
          <div className="mx-auto flex size-48 flex-col items-center justify-center rounded-full bg-gradient-to-br from-brand-800 to-brand-600 text-center text-white">
            <span className="font-heading text-5xl font-semibold">SP</span>
            <span className="mt-2 text-xs uppercase tracking-[0.15em] text-brand-200">Principal</span>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-600">Principal's message</p>
            <Quote className="mt-4 size-7 text-gold-500" />
            <blockquote className="mt-3 font-heading text-2xl font-medium leading-snug text-brand-900">
              We measure success not only by marks but by the questions our students dare to
              ask, the teams they lift, and the communities they serve.
            </blockquote>
            <p className="mt-4 text-sm text-muted-foreground">
              Dr. Sunita Prabhakar has led EAK for eleven years, previously heading curriculum
              research and teacher training. Under her leadership the school earned national
              recognition for innovation, inclusion and sports education.
            </p>
          </div>
        </div>
        <h2 className="mt-14 font-heading text-3xl font-semibold text-brand-900">Campus leadership</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((l) => (
            <div key={l.name} className="rounded-2xl border border-border bg-card p-6 text-center">
              <span className="mx-auto grid size-16 place-items-center rounded-full bg-brand-800 font-heading text-xl font-semibold text-gold-400">
                {l.initials}
              </span>
              <p className="mt-4 font-semibold text-brand-900">{l.name}</p>
              <p className="text-sm text-muted-foreground">{l.role}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-3xl bg-brand-950 p-8 text-white sm:p-10">
          <h2 className="font-heading text-2xl font-semibold">Campus overview</h2>
          <div className="mt-6 grid gap-6 text-sm sm:grid-cols-2 lg:grid-cols-4">
            <div><p className="font-heading text-xl font-semibold text-gold-400">12 acres</p><p className="mt-1 text-brand-200">Green campus with forest trail and gardens</p></div>
            <div><p className="font-heading text-xl font-semibold text-gold-400">72 + 8</p><p className="mt-1 text-brand-200">Smart classrooms and innovation studios</p></div>
            <div><p className="font-heading text-xl font-semibold text-gold-400">800-seat</p><p className="mt-1 text-brand-200">Auditorium, amphitheatre and sports complex</p></div>
            <div><p className="font-heading text-xl font-semibold text-gold-400">100%</p><p className="mt-1 text-brand-200">CCTV-monitored safe campus with infirmary</p></div>
          </div>
        </div>
      </section>
    </div>
  );
}
