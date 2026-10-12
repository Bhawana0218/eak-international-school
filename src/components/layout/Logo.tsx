import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="EAK International School home">
      <span className="grid size-10 place-items-center rounded-xl bg-brand-800 font-heading text-xl font-semibold text-gold-500">
        E
      </span>
      <span className="leading-tight">
        <span className="block font-heading text-lg font-semibold tracking-tight text-brand-900">
          EAK International
        </span>
        <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          School
        </span>
      </span>
    </Link>
  );
}
