import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GraduationCap, Menu, X } from "lucide-react";
import Logo from "@/components/layout/Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/academics", label: "Academics" },
  { to: "/admissions", label: "Admissions" },
  { to: "/faculty", label: "Faculty" },
  { to: "/student-life", label: "Student Life" },
  { to: "/news", label: "News" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85"
          : "border-transparent bg-background"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {links
            .filter((link) => link.label !== "Home")
            .map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-brand-800 text-gold-500"
                      : "text-foreground hover:bg-accent hover:text-accent-foreground"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/admissions"
            className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-4 py-2 text-sm font-semibold text-brand-950 transition-colors hover:bg-gold-400"
          >
            <GraduationCap className="size-4" />
            Apply Now
          </Link>
        </div>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid size-10 place-items-center rounded-lg text-foreground transition-colors hover:bg-accent lg:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-4 pb-4 pt-2 lg:hidden" aria-label="Mobile">
          <ul className="space-y-1">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                      isActive ? "bg-brand-800 text-gold-500" : "text-foreground hover:bg-accent"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <Link
                to="/admissions"
                onClick={() => setOpen(false)}
                className="block rounded-lg bg-gold-500 px-3 py-2.5 text-center text-sm font-semibold text-brand-950"
              >
                Apply Now
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
