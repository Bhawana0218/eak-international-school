import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  Bell,
  BookOpen,
  Bus,
  FlaskConical,
  HeartHandshake,
  Library,
  Medal,
  Microscope,
  Quote,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";
import Animated from "@/components/motion/Animated";
import HorizontalStory from "@/components/motion/HorizontalStory";
import Stat from "@/components/motion/Stat";
import { useMediaQuery, useStackShrink } from "@/components/motion/hooks";
import { events, news, notices, stats, testimonials } from "@/data/school";
import "./home.css";

const heroCards = [
  {
    icon: BookOpen,
    value: "A+",
    label: "Rated curriculum with 98% board distinction",
    tone: "bg-gradient-to-br from-gold-400 to-gold-600 text-brand-950",
    iconTone: "",
  },
  {
    icon: Trophy,
    value: "47 medals",
    label: "National and state podiums this year",
    tone: "bg-white text-brand-900",
    iconTone: "text-gold-600",
  },
  {
    icon: Users,
    value: "24:1",
    label: "Student-teacher ratio with mentors",
    tone: "bg-lagoon-500 text-white",
    iconTone: "",
  },
  {
    icon: Library,
    value: "28k books",
    label: "Grand library and innovation studios",
    tone: "bg-brand-800 text-white",
    iconTone: "text-gold-400",
  },
];

const whyChoose = [
  {
    icon: BookOpen,
    title: "Concept-first teaching",
    text: "Small classes of 24 with daily doubt clinics and personal learning plans for every child.",
  },
  {
    icon: FlaskConical,
    title: "STEM and innovation",
    text: "Robotics, AI and design labs from Grade 3 with national championship mentoring.",
  },
  {
    icon: Trophy,
    title: "Sports excellence",
    text: "12-acre sports complex with professional coaching in 9 disciplines and swimming.",
  },
  {
    icon: HeartHandshake,
    title: "Care and counselling",
    text: "Dedicated counsellors, learning support and career guidance from Grade 8 onward.",
  },
  {
    icon: Users,
    title: "Global exposure",
    text: "MUN, exchange programs, Olympiads and university counselling for 20+ countries.",
  },
  {
    icon: Medal,
    title: "Values and leadership",
    text: "House system, community service and student council build character and voice.",
  },
];

const campusPanels = [
  {
    tag: "Greenfield campus",
    title: "Twelve acres of green space",
    text: "Forest trails, gardens and quiet reading corners sit beside modern learning blocks.",
    tone: "bg-gradient-to-br from-brand-700 to-brand-950",
    image: "https://i.pinimg.com/originals/38/3a/9e/383a9e38e30a672f571bb84f71a12e4a.jpg",
    alt: "Green school campus with gardens and modern learning blocks",
  },
  {
    tag: "Innovation block",
    title: "Eight studios for making",
    text: "Robotics, AI, design and media studios are open to every grade from middle school.",
    tone: "bg-gradient-to-br from-lagoon-600 to-brand-900",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/bd594b150180813.62f5cffe3414f.jpg",
    alt: "Innovation block studios for robotics and design",
  },
  {
    tag: "Sports complex",
    title: "Fields, courts and a pool",
    text: "Professional coaching across nine disciplines with an all-weather athletics track.",
    tone: "bg-gradient-to-br from-brand-800 to-brand-950",
    image: "https://tse3.mm.bing.net/th/id/OIP.lxJzeDMtQOIUQDn7fKeRqQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    alt: "Sports complex with fields, courts and pool",
  },
];

const achievements = [
  { icon: Award, value: "100%", label: "Class 10 pass with first division" },
  { icon: Trophy, value: "47", label: "National and state sports medals 2025-26" },
  { icon: Medal, value: "Top 3", label: "City rank in inter-school MUN and Olympiads" },
  { icon: Microscope, value: "12", label: "Patents and published student research papers" },
];

const stages = [
  {
    id: "primary",
    tag: "Primary · G1–5",
    title: "Joyful foundations",
    text: "Phonics-rich literacy, Singapore Maths, weekly forest school and reading mentors.",
    focus: ["Phonics daily", "Maths labs", "Reading mentors"],
  },
  {
    id: "middle",
    tag: "Middle · G6–8",
    title: "Curiosity to capability",
    text: "Lab sciences, third language, robotics electives and inter-house leagues.",
    focus: ["Lab sciences", "Third language", "Robotics"],
  },
  {
    id: "secondary",
    tag: "Secondary · G9–10",
    title: "Board mastery",
    text: "Structured board prep, Olympiad tracks, career psychometrics and mentoring.",
    focus: ["Board prep", "Olympiads", "Counselling"],
  },
  {
    id: "senior",
    tag: "Senior · G11–12",
    title: "Future launchpad",
    text: "Science, Commerce and Humanities with SAT, JEE, NEET, CLAT and portfolio support.",
    focus: ["Three streams", "Entrance prep", "University guidance"],
  },
];

const facilities = [
  {
    icon: Sparkles,
    title: "Smart Classrooms",
    text: "72 digital classrooms with interactive panels and visualisers.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Students learning in a bright classroom",
  },
  {
    icon: Microscope,
    title: "Science Labs",
    text: "Physics, chemistry, biology and composite labs for experiential learning.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Science laboratory glassware and equipment",
  },
  {
    icon: Library,
    title: "Grand Library",
    text: "28,000 books, reading pods, research zone and author visits.",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Tall bookshelves in a quiet library",
  },
  {
    icon: Bus,
    title: "Safe Transport",
    text: "42 GPS-tracked buses with trained attendants on every route.",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80",
    imageAlt: "School bus parked outdoors",
  },
];

const experiencePanels = [
  {
    tag: "Learning",
    title: "Concept-first classrooms",
    text: "Classes of 24 with daily doubt clinics, exit tickets and personal learning plans for every child.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Students learning together in a bright classroom",
  },
  {
    tag: "Innovation",
    title: "Robotics, AI and design",
    text: "Eight studios where middle and senior students prototype, code and pitch real projects.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Student working on a technology project",
  },
  {
    tag: "Creativity",
    title: "Music, art and theatre",
    text: "Choir, orchestra, dance and stage productions with two showcase evenings every term.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Colorful art materials arranged for a creative project",
  },
  {
    tag: "Sport",
    title: "Coaching in nine disciplines",
    text: "Football, cricket, basketball, swimming and athletics led by professional coaches.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Athlete running on a track",
  },
  {
    tag: "Wellbeing",
    title: "Counselling and mentoring",
    text: "Dedicated counsellors, learning support and a mentor teacher attached to every child.",
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Students spending time together outdoors",
  },
  {
    tag: "Community",
    title: "Service and leadership",
    text: "House system, student council and city-wide community service drives led by students.",
    image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Volunteers working together on a community project",
  },
];

const marqueeItems = [
  "Learn with Courage",
  "28+ Years of Excellence",
  "2,400+ Students",
  "98% Board Pass Rate",
  "47 Sports Medals",
  "Admissions Open 2027–28",
];

function MarqueeStrip() {
  const chunk = (dup: boolean) => (
    <div className={`flex shrink-0 items-center${dup ? " marquee-chunk-dup" : ""}`} aria-hidden={dup || undefined}>
      {marqueeItems.map((item) => (
        <span key={`${dup ? "dup-" : ""}${item}`} className="flex items-center whitespace-nowrap">
          <span className="mx-6 text-sm font-bold uppercase tracking-[0.18em]">{item}</span>
          <span className="inline-block size-1.5 rotate-45 bg-brand-950/50" />
        </span>
      ))}
    </div>
  );
  return (
    <div className="marquee border-y border-gold-600/40 bg-gold-500 py-3.5 text-brand-950" aria-hidden="true">
      <div className="marquee-track">
        {chunk(false)}
        {chunk(true)}
      </div>
    </div>
  );
}

export default function Home() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const stackRef = useStackShrink<HTMLDivElement>();
  const [activeStage, setActiveStage] = useState(0);
  const stageRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    if (!isDesktop || typeof IntersectionObserver === "undefined") return;
    const nodes = stageRefs.current.filter((node): node is HTMLLIElement => Boolean(node));
    if (nodes.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = nodes.indexOf(entry.target as HTMLLIElement);
          if (index >= 0) setActiveStage(index);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [isDesktop]);

  const stage = stages[activeStage];

  return (
    <div className="overflow-x-clip">
      <section className="relative overflow-hidden bg-brand-950 text-white">
        <div className="hero-fade absolute inset-0 bg-gradient-to-br from-brand-800 via-brand-950 to-brand-900" />
        <div className="hero-grid pointer-events-none absolute inset-0 opacity-40" />
        <div className="hero-float absolute -right-24 -top-24 size-96 rounded-full bg-gold-500/20 blur-3xl" />
        <div className="hero-float absolute -bottom-32 -left-16 size-96 rounded-full bg-lagoon-500/20 blur-3xl" style={{ animationDelay: "1.8s" }} />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <p className="hero-rise inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-300 backdrop-blur-sm" style={{ animationDelay: "80ms" }}>
              <Sparkles className="size-3.5" />
              Admissions open 2027–28
            </p>
            <h1 className="mt-6 font-heading text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              <span className="hero-title-line block" style={{ animationDelay: "180ms" }}>Where curiosity</span>
              <span className="hero-title-line hero-title-accent block" style={{ animationDelay: "320ms" }}>becomes excellence</span>
            </h1>
            <p className="hero-rise mt-5 max-w-xl text-lg leading-relaxed text-brand-100" style={{ animationDelay: "300ms" }}>
              EAK International School is a premium K–12 community in Hillcrest nurturing
              fearless learners from kindergarten through Grade 12 with academic rigour,
              sporting spirit and creative courage.
            </p>
            <div className="hero-rise mt-8 flex flex-wrap gap-4" style={{ animationDelay: "420ms" }}>
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-brand-950 transition-colors hover:bg-gold-400"
              >
                Apply Now
                <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Discover EAK
              </Link>
            </div>
            <dl className="hero-rise mt-10 grid max-w-lg grid-cols-2 gap-6 border-t border-white/15 pt-8 sm:grid-cols-4 lg:max-w-none" style={{ animationDelay: "560ms" }}>
              {stats.map((item) => (
                <div key={item.label}>
                  <dt className="sr-only">{item.label}</dt>
                  <dd className="font-heading text-2xl font-semibold text-gold-400">
                    <Stat value={item.value} />
                  </dd>
                  <dd className="mt-1 text-xs leading-snug text-brand-200">{item.label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative mx-auto w-full max-w-2xl lg:pl-5">
            <div className="hero-image-frame relative">
              <div className="hero-image-outline absolute -inset-3 rounded-[2rem] border border-gold-400/30" />
              <div className="hero-image-reveal relative overflow-hidden rounded-3xl border border-white/15 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.65)]">
                <img
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=85"
                  alt="Students sharing a moment together at school"
                  fetchPriority="high"
                  className="hero-image-drift aspect-[4/3] w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-950/30 via-transparent to-white/10" />
              </div>
             
            </div>
            <div className="relative z-10 -mt-7 grid grid-cols-2 gap-3 px-2 sm:gap-4 sm:px-4">
              {heroCards.map((card, index) => (
                <div
                  key={card.value}
                  className={`hero-pop lift flex min-h-36 flex-col rounded-2xl p-5 sm:p-6 ${card.tone}`}
                  style={{ animationDelay: `${340 + index * 90}ms` }}
                >
                  <card.icon className={`size-8 ${card.iconTone}`} />
                  <p className="mt-3 font-heading text-2xl font-semibold sm:text-3xl">{card.value}</p>
                  <p className="mt-1 text-sm opacity-90">{card.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <MarqueeStrip />

      <section className="border-y border-border bg-paper-100">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Animated direction="left">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-600">About the school</p>
              <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-brand-900 sm:text-4xl">
                <Animated variant="mask" delay={150}>Rooted in values since 1998</Animated>
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Founded by educators with a library of 200 books and 60 students, EAK today
                serves 2,400 learners across a 12-acre green campus. Our motto, Learn with
                Courage, lives in daily morning circles, student-led assemblies and community
                classrooms that extend beyond walls.
              </p>
            </Animated>
            <dl className="mt-8 grid grid-cols-2 gap-5">
              {stats.map((item, index) => (
                <Animated key={item.label} delay={index * 70} className="rounded-2xl border border-border bg-card p-5">
                  <dd className="font-heading text-2xl font-semibold text-brand-900">
                    <Stat value={item.value} />
                  </dd>
                  <dd className="mt-1 text-sm text-muted-foreground">{item.label}</dd>
                </Animated>
              ))}
            </dl>
            <Animated delay={120}>
              <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-800 hover:text-brand-600">
                Read more about us
                <ArrowRight className="size-4" />
              </Link>
            </Animated>
          </div>
          <div ref={stackRef} className="space-y-6">
            {campusPanels.map((panel, index) => (
              <div
                key={panel.title}
                data-stack
                className="lg:sticky"
                style={{ top: `calc(6rem + ${index * 1.5}rem)` }}
              >
                <Animated
                  delay={index * 90}
                  direction="right"
                  lift
                  className="relative flex min-h-[48vh] flex-col justify-end overflow-hidden rounded-3xl p-8 shadow-[0_24px_50px_-24px_rgba(11,21,38,0.55)]"
                >
                <div className={`absolute inset-0 ${panel.tone}`} />
                <img
                  src={panel.image}
                  alt={panel.alt}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-950/85 via-brand-950/25 to-transparent" />
                <div className="relative">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">{panel.tag}</span>
                  <h3 className="mt-2 font-heading text-2xl font-semibold text-white">{panel.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-brand-100">{panel.text}</p>
                  </div>
                </Animated>
              </div>
            ))}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((item, index) => (
                <Animated key={item.label} delay={index * 70} lift className="h-full rounded-2xl bg-brand-950 p-6 text-white">
                  <item.icon className="size-6 text-gold-400" />
                  <p className="mt-3 font-heading text-2xl font-semibold">
                    <Stat value={item.value} />
                  </p>
                  <p className="mt-1 text-xs leading-snug text-brand-200">{item.label}</p>
                </Animated>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <Animated direction="left" className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-600">Why choose us</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-brand-900 sm:text-4xl">
            <Animated variant="mask" delay={150}>A school designed around your child</Animated>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Parents choose EAK for visible learning growth, safe joyful campuses and honest
            communication at every step.
          </p>
        </Animated>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((item, index) => (
            <Animated key={item.title} delay={index * 70} lift className="h-full rounded-2xl border border-border bg-card p-7">
              <span className="grid size-11 place-items-center rounded-xl bg-brand-800 text-gold-400">
                <item.icon className="size-5" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-semibold text-brand-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </Animated>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Animated direction="left" className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-600">Academic excellence</p>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-brand-900 sm:text-4xl">
              <Animated variant="mask" delay={150}>One journey, four confident stages</Animated>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Keep scrolling as each stage of the journey takes shape, from first words to
              final exams.
            </p>
          </Animated>
          <Link to="/academics" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-brand-800 hover:bg-accent">
            Explore academics
            <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-12 lg:grid lg:grid-cols-[minmax(0,25rem)_minmax(0,1fr)] lg:gap-12">
          <div className="hidden lg:block">
            <div className="rounded-3xl border border-border bg-card p-8 lg:sticky lg:top-24">
              <div key={stage.id} className="panel-swap">
                <div className="flex items-center gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand-800 font-heading text-lg font-semibold text-gold-400">
                    {String(activeStage + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-lagoon-600">{stage.tag}</span>
                </div>
                <h3 className="mt-6 font-heading text-2xl font-semibold text-brand-900">{stage.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{stage.text}</p>
                <ul className="mt-6 space-y-3">
                  {stage.focus.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 flex items-center gap-2">
                {stages.map((item, index) => (
                  <span
                    key={item.id}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      index === activeStage ? "w-8 bg-gold-500" : "w-3 bg-border"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          <ol className="space-y-6">
            {stages.map((item, index) => (
              <li
                key={item.id}
                ref={(node) => {
                  stageRefs.current[index] = node;
                }}
              >
                <Animated delay={index * 80} className="h-full">
                  <div
                    className={`rounded-2xl border border-border bg-card p-7 transition-opacity duration-500 ${
                      isDesktop && index !== activeStage ? "opacity-60" : "opacity-100"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-xs font-bold uppercase tracking-[0.15em] text-lagoon-600">{item.tag}</span>
                      <span className="font-heading text-3xl font-semibold text-brand-100">{`0${index + 1}`}</span>
                    </div>
                    <h3 className="mt-3 font-heading text-xl font-semibold text-brand-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.focus.map((focus) => (
                        <span key={focus} className="rounded-full bg-paper-100 px-3 py-1 text-xs font-medium text-brand-800">
                          {focus}
                        </span>
                      ))}
                    </div>
                  </div>
                </Animated>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <HorizontalStory
        kicker="The EAK experience"
        title="Where learning, creativity and sport meet"
        intro="Scroll on to move through the moments that shape an EAK student, from concept-first classrooms to stage lights and stadium roars."
        panels={experiencePanels}
      />

      <section className="bg-brand-950 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <Animated direction="left" className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-400">School facilities</p>
              <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                <Animated variant="mask" delay={150}>A campus built for exploration</Animated>
              </h2>
            </Animated>
            <Link to="/facilities" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/20">
              View all facilities
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {facilities.map((item, index) => (
              <Animated
                key={item.title}
                delay={index * 80}
                lift
                className="h-full overflow-hidden rounded-2xl border border-white/10 bg-white/10 text-white backdrop-blur hover:border-white/30"
              >
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  loading="lazy"
                  decoding="async"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                  className="aspect-[16/10] w-full object-cover"
                />
                <div className="p-6">
                  <item.icon className="size-6 text-gold-400" />
                  <h3 className="mt-4 font-heading text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-200">{item.text}</p>
                </div>
              </Animated>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-10 rounded-3xl border border-border bg-card p-8 sm:p-12 lg:grid-cols-[280px_1fr]">
          <Animated direction="right" className="relative mx-auto size-48 shrink-0 overflow-hidden rounded-full lg:size-56">
            <div className="grid h-full w-full place-items-center bg-gradient-to-br from-brand-800 to-brand-600 text-center text-white">
              <span>
                <span className="block font-heading text-5xl font-semibold">SP</span>
                <span className="mt-2 block text-xs uppercase tracking-[0.15em] text-brand-200">Principal</span>
              </span>
            </div>
          </Animated>
          <div>
            <Animated direction="left">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-600">Principal's message</p>
              <Quote className="mt-4 size-7 text-gold-500" />
              <blockquote className="mt-3 font-heading text-2xl font-medium leading-snug text-brand-900">
                Every child arrives with a question. Our work is to protect that question,
                deepen it with knowledge, and turn it into confident action for the world.
              </blockquote>
              <p className="mt-5 text-sm font-semibold text-brand-900">Dr. Sunita Prabhakar</p>
              <p className="text-sm text-muted-foreground">Principal, M.Ed., 22 years in K–12 leadership</p>
              <Link to="/about" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-800 hover:text-brand-600">
                Meet our leadership
                <ArrowRight className="size-4" />
              </Link>
            </Animated>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-paper-100">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="flex items-center justify-between">
              <h2 className="flex items-center gap-2 font-heading text-2xl font-semibold text-brand-900">
                <Bell className="size-5 text-gold-600" />
                Latest news and notices
              </h2>
              <Link to="/news" className="inline-flex items-center gap-1 text-sm font-semibold text-brand-800">
                View all
                <ArrowRight className="size-4" />
              </Link>
            </div>
            <ul className="mt-6 space-y-4">
              {notices.slice(0, 4).map((item, index) => (
                <Animated as="li" key={item.id} delay={index * 70} className="rounded-2xl border border-border bg-card p-5">
                  <div className="flex items-center gap-3 text-xs font-semibold">
                    <span className="rounded-full bg-brand-800 px-3 py-1 text-gold-400">{item.category}</span>
                    <span className="text-muted-foreground">{item.date}</span>
                  </div>
                  <p className="mt-2 font-semibold text-brand-900">{item.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.excerpt}</p>
                </Animated>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-semibold text-brand-900">Upcoming events</h2>
            <ul className="mt-6 space-y-4">
              {events.slice(0, 3).map((item, index) => (
                <Animated as="li" key={item.id} delay={index * 70} className="flex gap-4 rounded-2xl border border-border bg-card p-5">
                  <div className="grid size-16 shrink-0 place-items-center rounded-xl bg-gold-500 text-center text-brand-950">
                    <div>
                      <p className="text-[11px] font-bold tracking-widest">{item.month}</p>
                      <p className="font-heading text-xl font-semibold leading-none">{item.day}</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-brand-900">{item.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                    <p className="mt-1 text-xs font-semibold text-lagoon-600">{item.venue}</p>
                  </div>
                </Animated>
              ))}
            </ul>
            <Link to="/news" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-800">
              See full calendar
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <Animated direction="left" className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-600">Testimonials</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-brand-900 sm:text-4xl">
            <Animated variant="mask" delay={150}>Loved by parents, remembered by alumni</Animated>
          </h2>
        </Animated>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <Animated as="figure" key={item.name} delay={index * 80} lift className="h-full rounded-2xl border border-border bg-card p-7">
              <Quote className="size-6 text-gold-500" />
              <blockquote className="mt-4 text-sm leading-relaxed text-brand-900">{item.text}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full bg-brand-800 text-sm font-semibold text-gold-400">
                  {item.initials}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-brand-900">{item.name}</span>
                  <span className="block text-xs text-muted-foreground">{item.role}</span>
                </span>
              </figcaption>
            </Animated>
          ))}
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {news.slice(0, 3).map((item, index) => (
            <Animated key={item.slug} delay={index * 80} lift className="h-full">
              <Link to={`/news/${item.slug}`} className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7">
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-lagoon-600">{item.category}</span>
                <h3 className="mt-2 font-heading text-lg font-semibold text-brand-900 group-hover:text-brand-600">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.excerpt}</p>
                <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-brand-800">
                  Read story
                  <ArrowRight className="size-4" />
                </span>
              </Link>
            </Animated>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <Animated className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-800 to-brand-950 p-10 text-center text-white sm:p-16">
          <div className="absolute -left-20 -top-20 size-64 rounded-full bg-gold-500/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 size-64 rounded-full bg-lagoon-500/20 blur-3xl" />
          <div className="relative">
            <h2 className="font-heading text-3xl font-semibold sm:text-4xl"><Animated variant="mask" delay={150}>Give your child the EAK advantage</Animated></h2>
            <p className="mx-auto mt-4 max-w-2xl text-brand-200">
              Book a campus tour, meet our counsellors and see joyful learning in action.
              Limited seats for 2027–28 across Early Years and Grade 11.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/admissions" className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-8 py-3.5 text-sm font-semibold text-brand-950 hover:bg-gold-400">
                Start Admission Inquiry
                <ArrowRight className="size-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10">
                Book Campus Tour
              </Link>
            </div>
          </div>
        </Animated>
      </section>
    </div>
  );
}
