import { useState } from "react";
import PageHero from "@/components/layout/PageHero";

const staff = [
  { name: "Dr. Sunita Prabhakar", role: "Principal", dept: "Leadership", initials: "SP" },
  { name: "Rajesh Khanna", role: "Vice Principal, Academics", dept: "Leadership", initials: "RK" },
  { name: "Meera Nair", role: "Head of Science", dept: "Science", initials: "MN" },
  { name: "Arjun Patel", role: "Mathematics Lead", dept: "Mathematics", initials: "AP" },
  { name: "Sarah Thomas", role: "English Coordinator", dept: "Languages", initials: "ST" },
  { name: "Kavita Rao", role: "Primary Coordinator", dept: "Primary", initials: "KR" },
  { name: "Vikram Menon", role: "Director of Sports", dept: "Sports", initials: "VM" },
  { name: "Neha Gupta", role: "Art and Design Head", dept: "Arts", initials: "NG" },
  { name: "David Chen", role: "Robotics Mentor", dept: "Innovation", initials: "DC" },
];

const depts = ["All", "Leadership", "Science", "Mathematics", "Languages", "Primary", "Sports", "Arts", "Innovation"];

export default function Faculty() {
  const [dept, setDept] = useState("All");
  const list = staff.filter((s) => dept === "All" || s.dept === dept);
  return (
    <div>
      <PageHero kicker="Faculty" title="Learn from the best">
        Our educators bring decades of classroom experience, research, and real-world practice to every lesson.
      </PageHero>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2">
          {depts.map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setDept(d)}
              className={`rounded-full px-4 py-2 text-sm font-semibold ${dept === d ? "bg-brand-800 text-gold-400" : "border border-border bg-card text-brand-900 hover:bg-accent"}`}
            >
              {d}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((s) => (
            <div key={s.name} className="rounded-2xl border border-border bg-card p-7 text-center">
              <span className="mx-auto grid size-16 place-items-center rounded-full bg-brand-800 font-heading text-xl font-semibold text-gold-400">
                {s.initials}
              </span>
              <p className="mt-4 font-semibold text-brand-900">{s.name}</p>
              <p className="text-sm text-muted-foreground">{s.role}</p>
              <span className="mt-3 inline-block rounded-full bg-paper-100 px-3 py-1 text-xs font-semibold text-brand-800">{s.dept}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
