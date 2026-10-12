import { Link } from "react-router-dom";
import PageHero from "@/components/layout/PageHero";

export default function NotFound() {
  return (
    <PageHero kicker="404" title="This page wandered off the campus map">
      <span>
        The page you are looking for does not exist or has moved.{" "}
        <Link to="/" className="font-semibold text-brand-700 underline underline-offset-4">
          Return home
        </Link>
      </span>
    </PageHero>
  );
}
