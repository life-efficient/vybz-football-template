import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  ShieldCheck,
  Star,
} from "lucide-react";

const navItems = ["Programs", "Book Training", "About", "FAQs", "Partners", "Contact"];

const pillars = [
  "Individual tailored development plan",
  "Technical + game intelligence training",
  "Consistent progress tracking",
];

const schedule = [
  { day: "Mon", focus: "Technical base", location: "Essex County, NJ" },
  { day: "Wed", focus: "Game intelligence", location: "Bergen County, NJ" },
  { day: "Fri", focus: "Finishing + confidence", location: "New York, NY" },
  { day: "Sun", focus: "Assessment sessions", location: "By appointment" },
];

const levels = [
  {
    title: "REC Foundation",
    copy: "We'll build your technical base.",
    image: "/images/pathway-1.webp",
  },
  {
    title: "Travel / Competitive Base",
    copy: "We sharpen your game.",
    image: "/images/pathway-2.webp",
  },
  {
    title: "EDP / Higher League Exposure",
    copy: "We elevate your level.",
    image: "/images/pathway-3.webp",
  },
  {
    title: "ECNL / Girl's Academy / MLS NEXT",
    copy: "We refine elite players.",
    image: "/images/session-1.webp",
  },
  {
    title: "True Academy / Pro Track",
    copy: "We optimize for the highest levels.",
    image: "/images/hero-training.webp",
  },
];

const steps = [
  {
    title: "Request an assessment",
    copy: "Submit a booking request to start the process.",
  },
  {
    title: "Complete assessment",
    copy: "Player completes a full technical, physical, and tactical assessment to determine the right pathway.",
  },
  {
    title: "Complete foundation phase",
    copy: "Player builds consistency, confidence, strong habits, and foundational skills.",
  },
  {
    title: "Enroll in a Vybz program",
    copy: "Player commits to long-term development with technical growth, confidence, and game application.",
  },
];

const socialImages = [
  "/images/session-1.webp",
  "/images/pathway-1.webp",
  "/images/pathway-2.webp",
  "/images/pathway-3.webp",
  "/images/camp-training.webp",
];

function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  return (
    <a
      href={href}
      className={
        variant === "primary"
          ? "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#d8ff35] px-6 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-white"
          : "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:border-[#d8ff35] hover:text-[#d8ff35]"
      }
    >
      {children}
      <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
    </a>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#dad9d9] text-[#151515]">
      <header className="absolute left-0 right-0 top-0 z-20">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <a href="#top" aria-label="Vybz Football home" className="block w-24 sm:w-32">
            <Image
              src="/images/vybz-logo.webp"
              alt="Vybz Football"
              width={260}
              height={180}
              priority
              className="h-auto w-full"
            />
          </a>
          <nav className="hidden items-center gap-6 text-sm font-bold uppercase tracking-wide text-white lg:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className="hover:text-[#d8ff35]">
                {item}
              </a>
            ))}
          </nav>
          <a
            href="#book-training"
            className="rounded-full bg-[#d8ff35] px-5 py-3 text-xs font-black uppercase tracking-wide text-black transition hover:bg-white"
          >
            Book now
          </a>
        </div>
      </header>

      <section id="top" className="relative min-h-[92vh] overflow-hidden bg-black text-white">
        <Image
          src="/images/hero-training.webp"
          alt="Youth soccer player training with Vybz Football"
          fill
          priority
          loading="eager"
          sizes="100vw"
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/20" />
        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-[1500px] flex-col justify-end px-5 pb-16 pt-36 sm:px-8 lg:px-12">
          <div className="max-w-5xl">
            <p className="mb-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-[#d8ff35]">
              <ShieldCheck size={18} aria-hidden="true" />
              Trusted across NJ & NYC
            </p>
            <h1 className="font-display text-[4.6rem] uppercase leading-[0.88] text-white sm:text-[7rem] lg:text-[10rem]">
              Youth Soccer Training
            </h1>
            <p className="mt-6 max-w-3xl text-xl font-bold leading-8 text-white sm:text-2xl">
              For athletes who demand long-term development.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="#book-training">Book your assessment</ButtonLink>
              <ButtonLink href="#schedule" variant="secondary">
                Vybz schedule
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="bg-black px-5 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#d8ff35]">At Vybz we thrive</p>
            <h2 className="mt-5 font-display text-6xl uppercase leading-none sm:text-8xl">Vybz Mission</h2>
          </div>
          <div className="grid gap-8">
            <p className="max-w-3xl text-2xl font-bold leading-9 text-white">
              Developing confident, intelligent players through structured, high-level training that delivers real progress.
            </p>
            <div>
              <h3 className="font-display text-4xl uppercase">Why Players Choose Vybz</h3>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-white/80">
                Most players attend team practices that focus on the group. Vybz focuses on the individual. Every player
                follows a structured development pathway tailored to their strengths, weaknesses, and long-term goals.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 grid max-w-[1500px] gap-4 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <article key={pillar} className="border border-white/20 p-6">
              <span className="font-display text-7xl text-[#d8ff35]">{index + 1}</span>
              <h3 className="mt-8 text-2xl font-black uppercase leading-tight">{pillar}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="grid bg-[#dad9d9] lg:grid-cols-2">
        <div className="relative min-h-[520px]">
          <Image src="/images/camp-training.webp" alt="Vybz Development Lab soccer camp" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
        <div className="flex items-center px-5 py-20 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.22em]">Train with purpose this summer</p>
            <h2 className="mt-5 font-display text-6xl uppercase leading-none sm:text-8xl">
              The VYBZ Development Lab Soccer Camp
            </h2>
            <p className="mt-6 text-xl font-bold leading-8">
              A development summer camp for players who want to improve their technique, confidence, and understanding of
              the game.
            </p>
            <div className="mt-8 grid gap-3 text-lg font-black uppercase">
              <p>Week One: Mon Jul 20 - Fri Jul 24, 2026</p>
              <p>Week Two: Mon Jul 27 - Fri Jul 31, 2026</p>
              <p>Half Day & Full Day Options</p>
            </div>
            <div className="mt-8">
              <ButtonLink href="#book-training">Get started</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section id="schedule" className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <h2 className="font-display text-6xl uppercase leading-none sm:text-8xl">Vybz Schedule</h2>
              <p className="mt-5 text-lg font-bold leading-8">
                Explore monthly training locations and times, designed to help families choose the right session for their
                schedule.
              </p>
            </div>
            <div className="relative min-h-[340px] overflow-hidden">
              <Image src="/images/schedule.webp" alt="Vybz player schedule session" fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover" />
            </div>
          </div>
          <div className="mt-8 grid gap-3 md:grid-cols-4">
            {schedule.map((item) => (
              <article key={item.day} className="bg-white p-5 shadow-sm">
                <p className="font-display text-5xl uppercase">{item.day}</p>
                <p className="mt-4 text-lg font-black uppercase">{item.focus}</p>
                <p className="mt-3 flex items-center gap-2 text-sm font-bold text-black/60">
                  <MapPin size={16} aria-hidden="true" />
                  {item.location}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1500px]">
          <h2 className="font-display text-6xl uppercase leading-none sm:text-8xl">The Vybz Pathway</h2>
          <p className="mt-4 text-xl font-bold">Development works best when it follows a clear structure.</p>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {levels.map((level, index) => (
              <article key={level.title} className="group bg-[#111] text-white">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image src={level.image} alt={level.title} fill sizes="(min-width: 1280px) 20vw, (min-width: 768px) 50vw, 100vw" className="object-cover opacity-75 transition duration-500 group-hover:scale-105 group-hover:opacity-95" />
                </div>
                <div className="p-5">
                  <p className="font-display text-5xl text-[#d8ff35]">{index + 1}</p>
                  <h3 className="mt-4 text-xl font-black uppercase leading-tight">{level.title}</h3>
                  <p className="mt-3 font-bold text-white/70">{level.copy}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {steps.map((step, index) => (
              <article key={step.title} className="border-t-4 border-black pt-5">
                <p className="font-display text-5xl">{index + 1}</p>
                <h3 className="mt-4 text-xl font-black uppercase">{step.title}</h3>
                <p className="mt-3 font-bold leading-7 text-black/65">{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="grid bg-black text-white lg:grid-cols-[1.1fr_0.9fr]">
        <div className="px-5 py-20 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#d8ff35]">Founder and Head Coach</p>
            <h2 className="mt-5 font-display text-6xl uppercase leading-none sm:text-8xl">Coach Elton</h2>
            <p className="mt-6 text-xl font-bold leading-9 text-white/85">
              Vybz Football is led by Coach Elton Cuffe-Perrin, who believes real development happens through personal,
              purposeful, and consistent training. Elton focuses on building confident, disciplined players through
              structure, accountability, and genuine connection.
            </p>
          </div>
        </div>
        <div className="relative min-h-[560px]">
          <Image src="/images/coach-elton.webp" alt="Coach Elton, founder and head coach of Vybz Football" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
        </div>
      </section>

      <section id="partners" className="grid bg-[#dad9d9] lg:grid-cols-2">
        <div className="relative min-h-[430px]">
          <Image src="/images/nycfc-partner.webp" alt="NYCFC Youth Partner" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
        <div className="px-5 py-20 sm:px-8 lg:px-12">
          <p className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.22em]">
            <Star size={18} fill="currentColor" aria-hidden="true" />
            Official NYCFC Youth Partner
          </p>
          <h2 className="mt-5 font-display text-6xl uppercase leading-none sm:text-8xl">
            Training Inspired by the Professional Game
          </h2>
          <p className="mt-6 text-lg font-bold leading-8">
            Through the NYCFC partnership, Vybz has experienced the standards, intensity, and expectations of the
            professional environment and brings those principles into every session.
          </p>
          <ul className="mt-8 grid gap-4 text-lg font-black uppercase">
            <li>Training built around real game situations</li>
            <li>Decision-making, awareness, and intelligence on the ball</li>
            <li>Higher standards, structure, and accountability</li>
          </ul>
        </div>
      </section>

      <section id="contact" className="bg-black px-5 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1500px]">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <h2 className="font-display text-6xl uppercase leading-none sm:text-8xl">Find us on social</h2>
              <p className="mt-4 text-lg font-bold text-white/70">Follow sessions, camps, and player progress.</p>
            </div>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/vybz_football/" aria-label="Vybz Football Instagram" className="grid h-12 w-12 place-items-center rounded-full border border-white/30 hover:border-[#d8ff35] hover:text-[#d8ff35]">
                IG
              </a>
              <a href="https://www.tiktok.com/@vybz_football" aria-label="Vybz Football TikTok" className="grid h-12 w-12 place-items-center rounded-full border border-white/30 text-sm font-black hover:border-[#d8ff35] hover:text-[#d8ff35]">
                TT
              </a>
              <a href="https://www.linkedin.com/in/elton-cuffe-perrin" aria-label="Coach Elton LinkedIn" className="grid h-12 w-12 place-items-center rounded-full border border-white/30 hover:border-[#d8ff35] hover:text-[#d8ff35]">
                IN
              </a>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-5">
            {socialImages.map((src, index) => (
              <div key={src} className="relative aspect-square overflow-hidden">
                <Image src={src} alt={`Vybz Football training moment ${index + 1}`} fill sizes="(min-width: 768px) 20vw, 50vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="book-training" className="bg-[#d8ff35] px-5 py-20 text-black sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.22em]">
              <CalendarDays size={18} aria-hidden="true" />
              Step into a Vybz session
            </p>
            <h2 className="mt-5 max-w-5xl font-display text-6xl uppercase leading-none sm:text-8xl">
              Book your evaluation today
            </h2>
            <p className="mt-5 max-w-2xl text-xl font-bold leading-8">
              Take the first step toward structured, long-term development.
            </p>
          </div>
          <a
            href="https://www.vybzfootball.com/book-training"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-black px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-black"
          >
            Book assessment
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </section>

      <footer className="bg-black px-5 py-12 text-white sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1500px] gap-10 md:grid-cols-4">
          <div>
            <Image src="/images/vybz-logo.webp" alt="Vybz Football" width={180} height={120} className="h-auto w-28" />
            <p className="mt-4 text-sm font-bold uppercase tracking-wide text-white/60">Est 2024</p>
          </div>
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-[#d8ff35]">Locations</h3>
            <p className="mt-4 font-bold leading-8 text-white/75">Essex County, NJ<br />Bergen County, NJ<br />New York, NY</p>
          </div>
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-[#d8ff35]">Contact</h3>
            <a href="https://www.vybzfootball.com/contact" className="mt-4 block font-bold text-white/75 hover:text-white">
              Get in touch
            </a>
          </div>
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-[#d8ff35]">Links</h3>
            <div className="mt-4 grid gap-2 font-bold text-white/75">
              <a href="https://www.vybzfootball.com/terms-conditions" className="hover:text-white">Terms & Conditions</a>
              <a href="https://www.vybzfootball.com/privacy-policy" className="hover:text-white">Privacy Policy</a>
              <a href="https://www.vybzfootball.com/faqs" className="hover:text-white">FAQs</a>
            </div>
          </div>
        </div>
        <p className="mx-auto mt-12 max-w-[1500px] border-t border-white/15 pt-6 text-sm font-bold text-white/50">
          © 2026 Vybz Football. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
