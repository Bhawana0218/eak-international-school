import PageHero from "@/components/layout/PageHero";
import { Medal, Music, Palette, Trophy } from "lucide-react";

const clubs = [
  { icon: Trophy, title: "Sports Academies", text: "Football, basketball, cricket, swimming, athletics and chess with professional coaches." },
  { icon: Music, title: "Music and Stage", text: "Choir, orchestra, theatre troupe and annual winter concert on the lawns." },
  { icon: Palette, title: "Arts and Media", text: "Painting, photography, podcast studio and design lab exhibitions each term." },
  { icon: Medal, title: "Houses and Leadership", text: "Four houses, student council, MUN, community service and house cups." },
];

export default function StudentLife() {
  return (
    <div>
      <PageHero kicker="Student Life" title="Beyond the classroom">
        Clubs, teams, houses, and stage lights — there is always something happening on campus.
      </PageHero>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {clubs.map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-card p-7">
              <span className="grid size-11 place-items-center rounded-xl bg-brand-800 text-gold-400">
                <c.icon className="size-5" />
              </span>
              <h2 className="mt-4 font-heading text-lg font-semibold text-brand-900">{c.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-3xl bg-brand-950 p-8 text-white sm:p-10">
          <h2 className="font-heading text-2xl font-semibold">A week at EAK</h2>
          <div className="mt-6 grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-white/10 p-5"><p className="font-semibold text-gold-400">Monday</p><p className="mt-1 text-brand-200">Morning circle, lab day and house huddle</p></div>
            <div className="rounded-2xl bg-white/10 p-5"><p className="font-semibold text-gold-400">Wednesday</p><p className="mt-1 text-brand-200">Club hour, swimming and library period</p></div>
            <div className="rounded-2xl bg-white/10 p-5"><p className="font-semibold text-gold-400">Friday</p><p className="mt-1 text-brand-200">Showcase assembly and inter-house match</p></div>
            <div className="rounded-2xl bg-white/10 p-5"><p className="font-semibold text-gold-400">Saturday</p><p className="mt-1 text-brand-200">Tournaments, MUN training and art open house</p></div>
          </div>
        </div>
      </section>
    </div>
  );
}
