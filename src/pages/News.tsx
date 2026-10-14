import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "@/components/layout/PageHero";
import { ArrowRight, Search } from "lucide-react";
import { events, news, notices } from "@/data/school";

const categories = ["All", "Notice", "Exam", "Holiday", "Circular", "Competition", "Sports", "Admission", "Event"];

export default function News() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [visible, setVisible] = useState(6);

  const filteredNotices = useMemo(() => {
    return notices.filter((n) => {
      const matchCat = category === "All" || n.category === category;
      const q = query.toLowerCase();
      const matchQ = n.title.toLowerCase().includes(q) || n.excerpt.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [query, category]);

  return (
    <div>
      <PageHero
        kicker="News and Events"
        title="Stories from campus"
        image="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlMTRfc2NlbmVfb2ZfM2RfaWxsdXN0cmF0aW9uX291dHNpZGVfYV9oaWdoX3NjaG9vbF85OGZjNDc1ZS01NjYxLTQwYmMtODg2My00Nzc5NzJiMGYyOTNfMS5qcGc.jpg"
      >
        Celebrations, achievements, circulars and announcements from the EAK community.
      </PageHero>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  category === c ? "bg-brand-800 text-gold-400" : "border border-border bg-card text-brand-900 hover:bg-accent"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <label className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 lg:w-80">
            <Search className="size-4 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search notices and circulars"
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </label>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredNotices.slice(0, visible).map((n) => (
            <article key={n.id} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-3 text-xs font-semibold">
                <span className="rounded-full bg-brand-800 px-3 py-1 text-gold-400">{n.category}</span>
                <span className="text-muted-foreground">{n.date}</span>
              </div>
              <h3 className="mt-3 font-heading text-lg font-semibold text-brand-900">{n.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{n.excerpt}</p>
            </article>
          ))}
        </div>
        {filteredNotices.length === 0 && (
          <p className="mt-8 rounded-2xl border border-border bg-card p-8 text-center text-sm text-muted-foreground">
            No notices match your search. Try a different keyword or category.
          </p>
        )}
        {visible < filteredNotices.length && (
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setVisible((v) => v + 3)}
              className="rounded-full border border-border bg-card px-8 py-3 text-sm font-semibold text-brand-900 hover:bg-accent"
            >
              Load More
            </button>
          </div>
        )}
      </section>
      <section className="border-y border-border bg-paper-100">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-semibold text-brand-900">Upcoming events and competitions</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {events.map((e) => (
              <article key={e.id} className="flex gap-4 rounded-2xl border border-border bg-card p-6">
                <div className="grid size-16 shrink-0 place-items-center rounded-xl bg-gold-500 text-center text-brand-950">
                  <div>
                    <p className="text-[11px] font-bold tracking-widest">{e.month}</p>
                    <p className="font-heading text-xl font-semibold leading-none">{e.day}</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-brand-900">{e.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{e.description}</p>
                  <p className="mt-1 text-xs font-semibold text-lagoon-600">{e.venue} · {e.date}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="font-heading text-3xl font-semibold text-brand-900">Latest stories</h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {news.map((a) => (
            <Link key={a.slug} to={`/news/${a.slug}`} className="group rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-lg">
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-lagoon-600">{a.category}</span>
              <h3 className="mt-2 font-heading text-lg font-semibold text-brand-900 group-hover:text-brand-600">{a.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{a.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-800">
                Read story
                <ArrowRight className="size-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
