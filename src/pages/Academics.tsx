import { useState } from "react";
import PageHero from "@/components/layout/PageHero";
import { Blocks, FlaskConical, GraduationCap, Palette, PencilRuler, Trophy } from "lucide-react";

const stages = [
  {
    id: "primary",
    label: "Primary G1–5",
    title: "Strong roots, joyful routines",
    points: ["Phonics and Singapore Maths daily", "Weekly library, music and swimming", "Reading mentors and show-and-tell Fridays", "No formal exams till Grade 3, skill portfolios"],
    subjects: ["English", "Mathematics", "EVS", "Hindi", "Art", "Music", "PE", "Computing"],
  },
  {
    id: "middle",
    label: "Middle G6–8",
    title: "From curiosity to capability",
    points: ["Separate sciences with weekly lab work", "Third language: French, Sanskrit or German", "Robotics and design electives", "Inter-house sports and MUN juniors"],
    subjects: ["English", "Maths", "Physics", "Chemistry", "Biology", "History", "Geography", "AI"],
  },
  {
    id: "secondary",
    label: "Secondary G9–10",
    title: "Board mastery with mentoring",
    points: ["Structured board prep with revision clinics", "Olympiad and NTSE tracks", "Career psychometrics and counselling", "Community service certification"],
    subjects: ["English", "Maths", "Physics", "Chemistry", "Biology", "SST", "IT", "PE"],
  },
  {
    id: "senior",
    label: "Senior G11–12",
    title: "Future launchpad",
    points: ["Science, Commerce and Humanities streams", "JEE, NEET, SAT, CLAT and CUET support", "Internships and research capstone", "University counselling for 20+ countries"],
    subjects: ["Physics", "Chemistry", "Maths", "Biology", "Accounts", "Economics", "Psychology", "CS"],
  },
];

const methods = [
  { icon: PencilRuler, title: "Concept-first lessons", text: "Hook, explore, explain and apply in every 40-minute period with exit tickets." },
  { icon: FlaskConical, title: "Lab and studio learning", text: "Weekly experiments, maker challenges and field studies across subjects." },
  { icon: Blocks, title: "Personal learning plans", text: "Term goals, mentor check-ins and parent dashboards for visible growth." },
];

export default function Academics() {
  const [active, setActive] = useState(stages[0]);
  return (
    <div>
      <PageHero
        kicker="Academics"
        title="A curriculum built for every learner"
        image="https://th.bing.com/th/id/OIP.Q8MapzF1ZFQWkg14bZTufgHaEK?w=255&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
      >
        From first words to final exams, every stage is designed to challenge and inspire.
      </PageHero>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3">
          {stages.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActive(s)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                active.id === s.id ? "bg-brand-800 text-gold-400" : "border border-border bg-card text-brand-900 hover:bg-accent"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-8 rounded-3xl border border-border bg-card p-8 sm:p-10 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-semibold text-brand-900">{active.title}</h2>
            <ul className="mt-6 space-y-3">
              {active.points.map((p) => (
                <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-1.5 size-2 shrink-0 rounded-full bg-gold-500" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-lagoon-600">Core subjects</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {active.subjects.map((sub) => (
                <span key={sub} className="rounded-full bg-paper-100 px-4 py-2 text-sm font-medium text-brand-900">
                  {sub}
                </span>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-brand-950 p-6 text-sm text-brand-100">
              Assessment is continuous: weekly checks, term examinations, portfolios and
              parent-teacher reviews with clear next steps for every learner.
            </div>
          </div>
        </div>
      </section>
      <section className="border-y border-border bg-paper-100">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-semibold text-brand-900">How we teach</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {methods.map((m) => (
              <div key={m.title} className="rounded-2xl border border-border bg-card p-7">
                <span className="grid size-11 place-items-center rounded-xl bg-brand-800 text-gold-400">
                  <m.icon className="size-5" />
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold text-brand-900">{m.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{m.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-brand-950 p-8 text-white">
              <Palette className="size-6 text-gold-400" />
              <h3 className="mt-3 font-heading text-xl font-semibold">Co-curricular program</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-200">
                40 clubs across music, dance, theatre, coding, astronomy, photography,
                entrepreneurship and community service with graded showcases each term.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8">
              <Trophy className="size-6 text-gold-600" />
              <h3 className="mt-3 font-heading text-xl font-semibold text-brand-900">Academic achievements</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>98% first division in Class 10 and 12 boards 2026</li>
                <li>City rank 2 in Mathematics and Science Olympiads</li>
                <li>Regional robotics champions, qualified for internationals</li>
                <li>Best Delegation at Hillcrest MUN with 9 awards</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 flex items-center gap-3 rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground">
            <GraduationCap className="size-6 shrink-0 text-brand-800" />
            Curriculum follows national board framework enriched with Cambridge-style inquiry,
            phonics, Singapore Maths and senior career pathways.
          </div>
        </div>
      </section>
    </div>
  );
}
