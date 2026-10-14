import PageHero from "@/components/layout/PageHero";
import {
  BedDouble,
  Bus,
  ConciergeBell,
  Cpu,
  Dumbbell,
  HeartPulse,
  Library,
  Microscope,
  Music,
  Presentation,
} from "lucide-react";

const groups = [
  {
    title: "Learning spaces",
    items: [
      { icon: Presentation, name: "72 Smart Classrooms", text: "Interactive panels, visualisers, acoustic design and daylight-first seating." },
      { icon: Microscope, name: "4 Science Laboratories", text: "Physics, chemistry, biology and composite labs with weekly experiments." },
      { icon: Cpu, name: "2 Computer and AI Labs", text: "120 workstations, coding curriculum from Grade 1 and robotics kits." },
      { icon: Library, name: "Grand Library", text: "28,000 books, research zone, storytelling corner and monthly author visits." },
    ],
  },
  {
    title: "Sports, arts and life",
    items: [
      { icon: Dumbbell, name: "Sports Complex", text: "Football field, cricket nets, basketball courts, pool and athletics track." },
      { icon: Music, name: "Auditorium and Amphitheatre", text: "800-seat auditorium, open-air theatre, music rooms and dance studios." },
      { icon: ConciergeBell, name: "Cafeteria", text: "Nutritionist-designed vegetarian menu with allergy-aware counters." },
      { icon: HeartPulse, name: "Medical Centre", text: "Full-time nurse, visiting doctor, counselling rooms and health records." },
    ],
  },
  {
    title: "Safety and convenience",
    items: [
      { icon: Bus, name: "Transport", text: "42 GPS-tracked buses, trained attendants, live parent alerts on every route." },
      { icon: BedDouble, name: "Day Boarding", text: "Supervised prep halls, meals and activity clubs till 6 PM for working parents." },
    ],
  },
];

const gallery = [
  {
    label: "Innovation Block",
    detail: "8 studios",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=85",
    alt: "Student working with technology in an innovation studio",
  },
  {
    label: "Swimming Pool",
    detail: "25 metre",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1000&q=85",
    alt: "Clear blue swimming pool",
  },
  {
    label: "Football Field",
    detail: "FIFA-size",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1000&q=85",
    alt: "Football field ready for a match",
  },
  {
    label: "Grand Library",
    detail: "28k books",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1000&q=85",
    alt: "Bookshelves in a spacious library",
  },
  {
    label: "Auditorium",
    detail: "800 seats",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1000&q=85",
    alt: "Stage ready for a performance",
  },
  {
    label: "Science Wing",
    detail: "4 labs",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=85",
    alt: "Science laboratory equipment",
  },
];

export default function Facilities() {
  return (
    <div>
      <PageHero
        kicker="Facilities"
        title="Infrastructure that inspires"
        image="https://www.bing.com/th/id/OIP.BbvqJy25uxsWyASCYwr76QHaEO?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2"
      >
        Twelve acres of studios, labs, fields and quiet corners designed for joyful learning.
      </PageHero>
      <section className="mx-auto max-w-7xl space-y-12 px-4 py-14 sm:px-6 lg:px-8">
        {groups.map((g) => (
          <div key={g.title}>
            <h2 className="font-heading text-2xl font-semibold text-brand-900">{g.title}</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {g.items.map((f) => (
                <div key={f.name} className="rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-lg">
                  <span className="grid size-11 place-items-center rounded-xl bg-brand-800 text-gold-400">
                    <f.icon className="size-5" />
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-brand-900">{f.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
      <section className="border-y border-border bg-paper-100">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-semibold text-brand-900">Campus gallery</h2>
          <p className="mt-2 text-muted-foreground">A glimpse of everyday spaces across the Greenfield campus.</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((g, i) => (
              <div
                key={g.label}
                className={`group relative flex min-h-64 flex-col justify-end overflow-hidden rounded-3xl text-white shadow-[0_18px_40px_-24px_rgba(11,21,38,0.65)] ${
                  i % 3 === 0
                    ? "bg-gradient-to-br from-brand-800 to-brand-950"
                    : i % 3 === 1
                      ? "bg-gradient-to-br from-lagoon-600 to-brand-800"
                      : "bg-gradient-to-br from-gold-500 to-gold-700"
                }`}
              >
                <img
                  src={g.image}
                  alt={g.alt}
                  loading="lazy"
                  decoding="async"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/15 to-transparent transition-colors duration-300 group-hover:from-brand-950/95" />
                <div className="relative p-6 transition-transform duration-300 group-hover:-translate-y-1">
                  <p className="font-heading text-2xl font-semibold">{g.label}</p>
                  <p className="mt-1 text-sm text-white/80">{g.detail} · Greenfield Campus</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-5 rounded-3xl bg-brand-950 p-8 text-white sm:grid-cols-3 sm:p-10">
            <div><p className="font-heading text-2xl font-semibold text-gold-400">100% CCTV</p><p className="mt-1 text-sm text-brand-200">Monitored corridors, buses and entries</p></div>
            <div><p className="font-heading text-2xl font-semibold text-gold-400">RO + Solar</p><p className="mt-1 text-sm text-brand-200">Safe water and 40% solar-powered campus</p></div>
            <div><p className="font-heading text-2xl font-semibold text-gold-400">Fire + Drill Safe</p><p className="mt-1 text-sm text-brand-200">Monthly safety drills and trained staff</p></div>
          </div>
        </div>
      </section>
    </div>
  );
}
