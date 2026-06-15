import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Backpack,
  GraduationCap,
  Users,
  BookOpen,
  Sparkles,
  Heart,
  HandHeart,
  Building2,
  Calendar,
  Mail,
  Phone,
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import heroImg from "@/assets/hero-students.jpg";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";
import eventCollege from "@/assets/event-college.jpg";
import eventSupplies from "@/assets/event-supplies.jpg";
import eventMentor from "@/assets/event-mentor.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Caring and Nurturing | Empowering Youth Through Education" },
      { name: "description", content: "Caring and Nurturing is a nonprofit organization dedicated to supporting K4-12 students through mentoring programs, school supplies, college tours, and educational opportunities." },
      { property: "og:title", content: "Caring and Nurturing | Empowering Youth Through Education" },
      { property: "og:description", content: "Together... Yes We Can. Mentoring, school supplies, and college tours for K4-12 students." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const navLinks = [
  { label: "Mission", href: "#mission" },
  { label: "Programs", href: "#programs" },
  { label: "Impact", href: "#impact" },
  { label: "Events", href: "#events" },
  { label: "Get Involved", href: "#involved" },
  { label: "Contact", href: "#contact" },
];

const programs = [
  { icon: Backpack, emoji: "🎒", title: "School Supply Drives", desc: "Providing book bags filled with essential school supplies for students in need.", tint: "from-pink-50 to-pink-100", accent: "bg-brand-pink" },
  { icon: Users, emoji: "🤝", title: "Mentoring Programs", desc: "Connecting students with positive role models who guide, inspire, and listen.", tint: "from-blue-50 to-blue-100", accent: "bg-brand-blue" },
  { icon: GraduationCap, emoji: "🎓", title: "College Tours", desc: "Helping students explore higher education and visualize their future on campus.", tint: "from-green-50 to-green-100", accent: "bg-brand-green" },
  { icon: BookOpen, emoji: "📚", title: "Educational Support", desc: "Tutoring, workshops, and resources that encourage academic success at every grade.", tint: "from-pink-50 to-blue-100", accent: "bg-brand-pink" },
  { icon: Sparkles, emoji: "🌟", title: "Youth Development", desc: "Activities designed to build confidence, leadership, and lifelong life skills.", tint: "from-green-50 to-pink-100", accent: "bg-brand-green" },
];

const impactStats = [
  { value: "2,400+", label: "Students Served" },
  { value: "1,800", label: "Backpacks Distributed" },
  { value: "320", label: "Mentors Engaged" },
  { value: "45", label: "College Tours Organized" },
  { value: "60+", label: "Community Partnerships" },
];

const stories = [
  { img: story1, name: "Jordan, 5th Grade", quote: "My mentor helped me believe I could be anything. Now I want to be a teacher and help kids like me." },
  { img: story2, name: "Ms. Rivera, Mentor", quote: "Watching these students grow into confident leaders has been the most rewarding thing I've ever done." },
  { img: story3, name: "Tasha, Parent", quote: "Caring and Nurturing didn't just give my son supplies — they gave our whole family hope." },
];

const events = [
  { img: eventSupplies, date: "Aug 17", title: "Back-to-School Supply Drive", desc: "Pack and distribute 500 backpacks for K-12 students across the community.", tag: "Supply Drive" },
  { img: eventCollege, date: "Sep 28", title: "Fall College Tour", desc: "Juniors and seniors visit three regional universities for a guided campus experience.", tag: "College Tour" },
  { img: eventMentor, date: "Oct 12", title: "Mentor Meet & Greet", desc: "Connect with our team and explore becoming a mentor for the school year.", tag: "Mentoring" },
];

function Index() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const onNewsletter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Thanks for subscribing! We'll be in touch soon.");
    (e.target as HTMLFormElement).reset();
  };
  const onContact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Message received. Our team will reach out shortly.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-2xl text-lg text-white shadow-md bg-gradient-brand">
              <Heart className="h-5 w-5" fill="currentColor" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-base font-semibold tracking-tight">Caring &amp; Nurturing</span>
              <span className="text-[11px] text-muted-foreground">Together… Yes We Can</span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:block">
            <Button asChild className="rounded-full bg-brand-pink px-6 text-white hover:opacity-90">
              <a href="#donate">Donate</a>
            </Button>
          </div>
          <button className="lg:hidden" onClick={() => setMobileOpen((v) => !v)} aria-label="Menu">
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {mobileOpen && (
          <div className="border-t border-border/60 bg-background lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-3">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground">
                  {l.label}
                </a>
              ))}
              <Button asChild className="mt-2 rounded-full bg-brand-pink text-white">
                <a href="#donate" onClick={() => setMobileOpen(false)}>Donate</a>
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="relative isolate overflow-hidden bg-[#fdfcfd]">
        {/* Soft background blobs */}
        <div className="pointer-events-none absolute -left-24 -top-24 -z-10 h-96 w-96 rounded-full bg-brand-pink/10 blur-3xl" />
        <div className="pointer-events-none absolute right-[-6rem] top-1/2 -z-10 h-96 w-96 rounded-full bg-brand-blue/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-1/2 -z-10 h-96 w-96 rounded-full bg-brand-green/10 blur-3xl" />

        <div className="relative mx-auto w-full max-w-7xl px-5 pt-16 pb-12 md:pt-24 lg:pt-28">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left content */}
            <div className="lg:col-span-7">
              <div className="mb-8 flex items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-ink/10 bg-white px-3 py-1 shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-green opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-green" />
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                    501(c)(3) • K4–12 Youth Education
                  </span>
                </span>
              </div>

              <h1 className="mb-8 font-display text-5xl leading-[0.95] tracking-tight text-brand-ink sm:text-6xl lg:text-[6.5rem]">
                Empowering <br />
                <span className="relative inline-block pr-4 pb-3">
                  <span className="inline-block italic font-black bg-gradient-to-r from-brand-pink via-brand-blue to-brand-green bg-clip-text text-transparent px-2">
                    youth
                  </span>
                  <svg
                    className="pointer-events-none absolute -bottom-0 left-0 h-3 w-[calc(100%-0.5rem)] text-brand-pink/40"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                    aria-hidden
                  >
                    <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>{" "}
                <br />
                through education.
              </h1>

              <p className="mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Helping students from{" "}
                <strong className="font-semibold text-brand-ink">K4 through 12th grade</strong>{" "}
                succeed through mentorship, school supplies, college tours, and life-changing opportunities.
              </p>

              <div className="mb-12 flex flex-wrap items-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="group h-14 rounded-2xl bg-brand-pink px-8 text-base font-bold text-white shadow-xl shadow-brand-pink/20 transition hover:scale-[1.03] hover:bg-brand-pink"
                >
                  <a href="#involved">
                    Get Involved
                    <ArrowRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-14 rounded-2xl border-2 border-brand-ink/10 bg-white px-8 text-base font-bold text-brand-ink hover:bg-muted"
                >
                  <a href="#donate">
                    <Heart className="mr-2 h-4 w-4 text-brand-pink" fill="currentColor" />
                    Support Our Mission
                  </a>
                </Button>
              </div>

              <div className="mt-4 flex w-fit items-center gap-4 border-t-2 border-brand-pink/30 py-6">
                <span className="font-display text-2xl italic leading-snug text-brand-ink sm:text-3xl lg:text-4xl">
                  "Together...{" "}
                  <span className="inline-block bg-gradient-to-r from-brand-pink via-brand-blue to-brand-green bg-clip-text font-black not-italic text-transparent">
                    Yes We Can
                  </span>
                  "
                </span>
              </div>
            </div>

            {/* Right visuals */}
            <div className="relative lg:col-span-5">
              <div className="group relative overflow-hidden rounded-[2rem] border-8 border-white shadow-2xl">
                <img
                  src={heroImg}
                  alt="Smiling K-12 students with mentors and community volunteers"
                  width={1536}
                  height={1024}
                  className="h-[600px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />

                {/* Live tag */}
                <div className="absolute bottom-4 left-4 rounded-full bg-black/40 px-4 py-2 backdrop-blur-sm">
                  <p className="flex items-center text-xs font-medium text-white">
                    <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-brand-green" />
                    Live in 12 schools this year
                  </p>
                </div>
              </div>

              {/* Floating: graduation rate */}
              <div className="absolute -left-6 top-6 z-10 hidden items-center gap-4 rounded-2xl border border-white/60 bg-white/95 p-4 shadow-xl backdrop-blur-md sm:flex">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-blue/10 text-brand-blue">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-display text-2xl font-black leading-tight text-brand-ink">98%</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    Graduation Rate
                  </p>
                </div>
              </div>

              {/* Floating: active mentors */}
              <div className="absolute -right-6 bottom-8 z-10 hidden rounded-2xl border border-border bg-white p-5 shadow-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    <span className="h-8 w-8 rounded-full border-2 border-white bg-brand-pink" />
                    <span className="h-8 w-8 rounded-full border-2 border-white bg-brand-blue" />
                    <span className="h-8 w-8 rounded-full border-2 border-white bg-brand-green" />
                  </div>
                  <div>
                    <p className="font-display text-xl font-black text-brand-ink">320+</p>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      Active Mentors
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stat strip */}
          <div className="mt-20 grid grid-cols-2 gap-8 border-t border-brand-ink/10 py-10 md:grid-cols-4">
            {[
              { v: "2,400+", l: "Students Served", h: "group-hover:text-brand-pink" },
              { v: "1,800", l: "Backpacks Delivered", h: "group-hover:text-brand-blue" },
              { v: "45", l: "College Tours", h: "group-hover:text-brand-green" },
              { v: "60+", l: "Partner Orgs", h: "group-hover:text-brand-pink" },
            ].map((s) => (
              <div key={s.l} className="group text-center md:text-left">
                <p className={`mb-1 font-display text-3xl font-black text-brand-ink transition-colors ${s.h}`}>
                  {s.v}
                </p>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="mx-auto max-w-7xl px-5 py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">Our Mission</span>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight sm:text-5xl">Building Brighter Futures</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Caring and Nurturing believes every child deserves the tools, guidance, and opportunities
              needed to succeed. Through education-focused programs and community support, we help
              young people reach their full potential.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { c: "bg-brand-pink", t: "Care", d: "Wrap-around support for every student." },
                { c: "bg-brand-blue", t: "Educate", d: "Resources that fuel achievement." },
                { c: "bg-brand-green", t: "Empower", d: "Confidence to lead and dream big." },
              ].map((v) => (
                <div key={v.t} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <span className={`inline-block h-2 w-10 rounded-full ${v.c}`} />
                  <div className="mt-3 font-display text-xl font-semibold">{v.t}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{v.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -z-10 translate-x-6 translate-y-6 rounded-[2rem] bg-gradient-sunrise" />
            <img src={story1} alt="Student smiling with a book" width={768} height={768} loading="lazy" className="relative w-full rounded-[2rem] object-cover shadow-xl" />
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="relative isolate overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-muted/40" />
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-pink">Our Programs</span>
            <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">Programs that change lives</h2>
            <p className="mt-4 text-lg text-muted-foreground">From school supplies to college campuses, every program is designed to lift students up.</p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((p) => (
              <Card key={p.title} className="group relative overflow-hidden rounded-3xl border-border/60 p-7 transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className={`absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-20 blur-2xl ${p.accent}`} />
                <div className="relative">
                  <div className="text-4xl">{p.emoji}</div>
                  <h3 className="mt-4 font-display text-2xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-muted-foreground">{p.desc}</p>
                  <a href="#involved" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-ink transition-transform group-hover:translate-x-1">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section id="impact" className="relative isolate overflow-hidden py-20 lg:py-28 text-white">
        <div className="absolute inset-0 -z-10 bg-gradient-hero" />
        <div className="absolute inset-0 -z-10 bg-brand-ink/30" />
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">Our Impact</span>
            <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">Making a Difference Together</h2>
            <p className="mt-4 text-lg text-white/85">Real numbers from a community that shows up — year after year, family after family.</p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {impactStats.map((s) => (
              <div key={s.label} className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-md">
                <div className="font-display text-5xl font-semibold">{s.value}</div>
                <div className="mt-2 text-sm font-medium uppercase tracking-wider text-white/85">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-green">Success Stories</span>
          <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">Stories of Hope &amp; Achievement</h2>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {stories.map((s) => (
            <article key={s.name} className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-transform hover:-translate-y-1">
              <img src={s.img} alt={s.name} width={768} height={768} loading="lazy" className="h-64 w-full object-cover" />
              <div className="p-7">
                <p className="font-display text-xl leading-snug text-brand-ink">"{s.quote}"</p>
                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                  <span className="h-1 w-6 rounded-full bg-brand-pink" />
                  {s.name}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Get Involved */}
      <section id="involved" className="relative isolate overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-gradient-warm" />
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">Get Involved</span>
            <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">Join Our Mission</h2>
            <p className="mt-4 text-lg text-muted-foreground">Three meaningful ways to plug into the work.</p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { icon: HandHeart, title: "Volunteer", desc: "Support youth through mentoring, tutoring, and community events.", color: "var(--brand-pink)", cta: "Become a Volunteer" },
              { icon: Heart, title: "Donate", desc: "Help provide backpacks, books, and life-changing opportunities.", color: "var(--brand-blue)", cta: "Give Today" },
              { icon: Building2, title: "Partner With Us", desc: "Collaborate as a school, business, or community organization.", color: "var(--brand-green)", cta: "Start a Partnership" },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <Card key={c.title} className="rounded-3xl border-border/60 bg-white/90 p-8 backdrop-blur transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl text-white shadow-md" style={{ backgroundColor: c.color }}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold">{c.title}</h3>
                  <p className="mt-2 text-muted-foreground">{c.desc}</p>
                  <Button asChild variant="ghost" className="mt-5 -ml-3 text-brand-ink hover:bg-brand-ink/5">
                    <a href="#contact">{c.cta} <ArrowRight className="ml-1 h-4 w-4" /></a>
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="mx-auto max-w-7xl px-5 py-20 lg:py-28">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-pink">Upcoming Events</span>
            <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">Community Events &amp; Activities</h2>
          </div>
          <Button asChild variant="outline" className="rounded-full border-2">
            <a href="#contact">View full calendar <Calendar className="ml-2 h-4 w-4" /></a>
          </Button>
        </div>
        <div className="mt-12 grid gap-7 md:grid-cols-3">
          {events.map((e) => (
            <article key={e.title} className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-56 overflow-hidden">
                <img src={e.img} alt={e.title} width={1024} height={768} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-brand-ink">{e.tag}</span>
                <span className="absolute right-4 top-4 rounded-full bg-brand-ink/85 px-3 py-1 text-xs font-semibold text-white backdrop-blur">{e.date}</span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold">{e.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{e.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Donate */}
      <section id="donate" className="relative isolate overflow-hidden py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="relative overflow-hidden rounded-[2.5rem] p-10 sm:p-16 text-white shadow-2xl bg-gradient-brand">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/15 blur-3xl" />
            <div className="absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-brand-green/40 blur-3xl" />
            <div className="relative grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/85">Donate</span>
                <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">Invest in a Child's Future</h2>
                <p className="mt-4 max-w-xl text-lg text-white/90">
                  Your support helps provide educational resources, mentorship opportunities, and life-changing
                  experiences for students from K4 through 12th grade.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild size="lg" className="h-12 rounded-full bg-white px-7 text-brand-ink hover:bg-white/90">
                    <a href="#contact">Donate Today</a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="h-12 rounded-full border-2 border-white/70 bg-transparent px-7 text-white hover:bg-white/10">
                    <a href="#contact">Become a Sponsor</a>
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {["$25", "$50", "$100", "$250", "$500", "Custom"].map((amt) => (
                  <a key={amt} href="#contact" className="rounded-2xl bg-white/15 px-4 py-5 text-center font-display text-xl font-semibold backdrop-blur transition hover:bg-white/25">
                    {amt}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter + Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-5 py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Newsletter */}
          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm sm:p-10">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-green">Stay Connected</span>
            <h3 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Newsletter Signup</h3>
            <p className="mt-3 text-muted-foreground">
              Receive updates on programs, events, volunteer opportunities, and community impact.
            </p>
            <form onSubmit={onNewsletter} className="mt-6 grid gap-3 sm:grid-cols-2">
              <Input required placeholder="Your name" className="h-12 rounded-xl" />
              <Input required type="email" placeholder="Email address" className="h-12 rounded-xl" />
              <Button type="submit" className="h-12 rounded-xl text-white sm:col-span-2 bg-gradient-fresh">
                Subscribe
              </Button>
            </form>
          </div>

          {/* Contact */}
          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm sm:p-10">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-pink">Contact</span>
            <h3 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Get in Touch</h3>
            <p className="mt-3 text-muted-foreground">
              Volunteer inquiries, partnership opportunities, and donation questions — we'd love to hear from you.
            </p>
            <form onSubmit={onContact} className="mt-6 grid gap-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <Input required placeholder="Name" className="h-12 rounded-xl" />
                <Input required type="email" placeholder="Email" className="h-12 rounded-xl" />
              </div>
              <Input type="tel" placeholder="Phone" className="h-12 rounded-xl" />
              <Textarea required placeholder="How can we help?" className="min-h-32 rounded-xl" />
              <Button type="submit" className="h-12 rounded-xl bg-brand-ink text-white hover:bg-brand-ink/90">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative isolate overflow-hidden py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-warm" />
        <div className="mx-auto max-w-4xl px-5 text-center">
          <h2 className="font-display text-5xl font-semibold leading-tight sm:text-6xl">
            <span className="text-gradient-brand">Together… Yes We Can</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Join us in creating opportunities, inspiring success, and empowering the next generation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="h-12 rounded-full bg-brand-pink px-8 text-white hover:opacity-90">
              <a href="#involved">Volunteer</a>
            </Button>
            <Button asChild size="lg" className="h-12 rounded-full bg-brand-ink px-8 text-white hover:opacity-90">
              <a href="#donate">Donate</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-ink text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-2xl text-white bg-gradient-brand">
                <Heart className="h-5 w-5" fill="currentColor" />
              </span>
              <span className="font-display text-lg font-semibold">Caring &amp; Nurturing</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-white/70">
              A 501(c)(3) nonprofit empowering K4–12 students and their families through education,
              mentorship, and community.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition hover:bg-white/10">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-wider text-white/60">Explore</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              {["About Us", "Programs", "Events", "Volunteer", "Donate", "Contact"].map((l) => (
                <li key={l}><a href="#" className="text-white/85 hover:text-white">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-wider text-white/60">Programs</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              {["School Supply Drives", "Mentoring", "College Tours", "Educational Support", "Youth Development"].map((l) => (
                <li key={l}><a href="#programs" className="text-white/85 hover:text-white">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-wider text-white/60">Contact</div>
            <ul className="mt-4 space-y-3 text-sm text-white/85">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-brand-pink" /> hello@caringandnurturing.org</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-brand-green" /> (555) 123-4567</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-white/60 sm:flex-row">
            <div>© {new Date().getFullYear()} Caring and Nurturing. All rights reserved.</div>
            <div>501(c)(3) Nonprofit Organization · "Together… Yes We Can"</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
