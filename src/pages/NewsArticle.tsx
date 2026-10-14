import { Link, useParams } from "react-router-dom";
import PageHero from "@/components/layout/PageHero";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { news } from "@/data/school";

export default function NewsArticle() {
  const { slug } = useParams();
  const article = news.find((n) => n.slug === slug) ?? news[0];
  const others = news.filter((n) => n.slug !== article.slug).slice(0, 3);

  return (
    <div>
      <PageHero kicker={article.category} title={article.title}>
        {article.date} · EAK International School · Hillcrest Campus
      </PageHero>
      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <Link to="/news" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-800 hover:text-brand-600">
          <ArrowLeft className="size-4" />
          Back to News and Events
        </Link>
        <div className="mt-6 rounded-3xl bg-gradient-to-br from-brand-800 to-brand-950 p-10 text-white sm:p-14">
          <p className="font-heading text-2xl font-medium leading-snug">{article.excerpt}</p>
        </div>
        <p className="mt-8 leading-relaxed text-muted-foreground">{article.body}</p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          The story above reflects everyday learning at EAK where teachers, coaches and
          mentors work together to help students discover strengths, practise discipline
          and celebrate progress with families. Photographs, certificates and match
          reports are shared with parents through class channels every week.
        </p>
        <h2 className="mt-12 font-heading text-2xl font-semibold text-brand-900">More stories</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {others.map((o) => (
            <Link key={o.slug} to={`/news/${o.slug}`} className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg">
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-lagoon-600">{o.category}</span>
              <p className="mt-2 font-semibold text-brand-900">{o.title}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-800">
                Read
                <ArrowRight className="size-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
