import { useParams } from "react-router-dom";
import PageHero from "@/components/layout/PageHero";

export default function NewsArticle() {
  const { slug } = useParams();

  return (
    <PageHero kicker="News" title={slug ?? "Article"}>
      Full article content will be implemented in the next step.
    </PageHero>
  );
}
