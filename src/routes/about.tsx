import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUp,
  Award,
  BookOpen,
  Briefcase,
  Calendar,
  CheckCircle2,
  Compass,
  FileCheck,
  Flower2,
  GraduationCap,
  Heart,
  Home,
  Laptop,
  Leaf,
  Quote,
  Shield,
  Sparkles,
  Sun,
  TrendingUp,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import aboutPortrait from "@/assets/about-portrait.jpg";
import heroCoach from "@/assets/hero-coach.jpg";
import whyChoose from "@/assets/why-choose.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Padma Pavani — Heal and Grow with Padma" },
      {
        name: "description",
        content:
          "Meet Padma Pavani, Author, Certified Life Transformation Coach & Energy Healer with 20+ years of experience blending corporate excellence with spiritual healing.",
      },
      { property: "og:title", content: "About Padma Pavani — Heal and Grow with Padma" },
      {
        property: "og:description",
        content:
          "20+ years journey of transformation — MHR Finance, Corporate Leadership, Energy Healing, and Life Transformation Coaching.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: AboutPage,
});

interface Mentor {
  name: string;
  image: string;
}

const gurusData: Mentor[] = [
  {
    name: "My Parents",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "BK Shivani",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Maharishi Raj",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Sri Sri Ravi Shankar",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Sri Jeeveswar Yogi",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Joshitha Makkar",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "GK",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Mitesh Khatri",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Ankit Batra",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Rajat Katiyar",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Imran Baig",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Pooja Shah",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dr. John Demartini",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dr. Joe Vitale",
    image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Jack Canfield",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80",
  },
];

const transformationSteps = [
  {
    step: "01",
    icon: GraduationCap,
    title: "The Foundation",
    subtitle: "Early Journey",
    text: "MHR Finance and later began my journey of financial services, an academic foundation that shaped my discipline and vision.",
  },
  {
    step: "02",
    icon: Briefcase,
    title: "Corporate Excellence",
    subtitle: "10+ Years",
    text: "I gained valuable experience in corporate life, building my skills in finance, operations, and client management.",
  },
  {
    step: "03",
    icon: Users,
    title: "Personal Transformation",
    subtitle: "(2020-2021)",
    text: "Deep personal healing led me to explore spiritual growth, mindfulness, and energy healing modalities.",
  },
  {
    step: "04",
    icon: Flower2,
    title: "Spiritual Awakening",
    subtitle: "Present",
    text: "Today, I guide others through healing, mindset and transformation coaching to build purpose-driven lives.",
  },
];

const certificationsCol1 = [
  "Certified in Financial Markets & Capital Markets (NSE)",
  "Certified Advanced Goal-Based Financial Planner",
  "Associate from Insurance Institute of India",
  "Hawaiian Ho'oponopono Healer",
  "EFT Practitioner (Emotional Freedom Technique)",
  "Akashic Record Reader",
];

const certificationsCol2 = [
  "AMFI Certified Investment Advisor",
  "Investment Analysis & Portfolio Management Specialist",
  "Certified Market Professional – NSE",
  "Inner Child Healing Expert",
  "NLP Master Practitioner",
  "Sedona Method Facilitator",
];

function AboutPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-gold/30">
      <SiteHeader />

      <main>
        {/* ========================================================= */}
        {/* HERO BANNER SECTION                                       */}
        {/* ========================================================= */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#E7F2EC] via-[#F1F6F3] to-background pt-10 pb-20 lg:pt-14 lg:pb-28">
          {/* Background Landscape Silhouette */}
          <div className="absolute inset-0 z-0 opacity-20 mix-blend-multiply">
            <img
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80"
              alt="Mountain sunrise landscape"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="relative z-10 mx-auto max-w-[1280px] px-6">
            <div className="grid items-center gap-8 md:grid-cols-12">
              {/* Left Column: Title & Breadcrumb */}
              <div className="md:col-span-7">
                <Reveal>
                  <h1 className="font-display text-4xl font-extrabold tracking-tight text-[#0E382C] sm:text-5xl lg:text-6xl">
                    About Us
                  </h1>

                  <nav className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#0E382C]/80">
                    <Link to="/" className="flex items-center gap-1 hover:text-[#155D4E] transition-colors">
                      <Home className="h-4 w-4" />
                      <span>Home</span>
                    </Link>
                    <span className="text-[#0E382C]/50">→</span>
                    <span className="text-[#155D4E]">About Us</span>
                  </nav>
                </Reveal>
              </div>

              {/* Right Column: Handwritten Script Accent Quote */}
              <div className="md:col-span-5 flex flex-col items-start md:items-end text-left md:text-right">
                <Reveal delay={150}>
                  <div className="relative max-w-xs">
                    <p className="font-serif text-3xl sm:text-4xl italic font-bold text-[#0E382C] leading-snug transform -rotate-1">
                      Heal Today <br />
                      <span className="text-[#155D4E]">Grow Tomorrow...</span>
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>

          {/* Bottom Curved Border Wave */}
          <div className="absolute bottom-0 left-0 right-0 h-10 overflow-hidden leading-none z-20">
            <svg
              className="relative block w-full h-12 text-background fill-current"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,50 L1200,120 L0,120 Z"></path>
            </svg>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 1: MEET PADMA PAVANI                                */}
        {/* ========================================================= */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-[1280px] px-6">
            <Reveal>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#155D4E]">
                <Flower2 className="h-4 w-4 text-gold" />
                <span>FOUNDER &amp; TRANSFORMATION COACH</span>
              </div>

              <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E382C]">
                Meet Padma Pavani
              </h2>
            </Reveal>

            {/* 3 Column Content Layout */}
            <div className="mt-10 grid gap-8 lg:grid-cols-12 items-stretch">
              {/* Left Portrait Photo */}
              <div className="lg:col-span-4">
                <Reveal delay={100}>
                  <div className="relative h-full overflow-hidden rounded-3xl border-4 border-white shadow-xl bg-muted">
                    <img
                      src={aboutPortrait}
                      alt="Padma Pavani Working"
                      className="h-full w-full object-cover object-top min-h-[360px]"
                    />
                  </div>
                </Reveal>
              </div>

              {/* Center Profile Content Block */}
              <div className="lg:col-span-5 flex flex-col justify-center rounded-3xl border border-forest/10 bg-[#F5F8F6] p-8 shadow-xs">
                <Reveal delay={150}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-[#0E382C] shadow-md">
                    <Sparkles className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 font-display text-xl sm:text-2xl font-bold text-[#0E382C] leading-snug">
                    MHR Finance | Author | Certified Life Transformation Coach | Energy Healer
                  </h3>

                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                    With 20+ years of experience in spiritual transformation and personal growth, Padma
                    Pavani helps individuals, families and professionals heal, glow and live a more balanced
                    and purpose-driven life.
                  </p>

                  <div className="mt-6 pt-2">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 rounded-full border-2 border-[#0E382C] bg-white px-6 py-2.5 text-xs font-bold text-[#0E382C] transition-all hover:bg-[#0E382C] hover:text-white shadow-xs"
                    >
                      More About
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </Reveal>
              </div>

              {/* Right 20+ Years Badge Card */}
              <div className="lg:col-span-3 flex flex-col justify-between rounded-3xl bg-[#0E382C] p-6 text-white shadow-xl border border-white/10">
                <Reveal delay={200}>
                  <div>
                    <div className="font-display text-5xl font-extrabold text-gold">
                      20+ <span className="text-2xl font-semibold text-white">Years</span>
                    </div>
                    <div className="mt-1 text-xs font-medium text-white/80 uppercase tracking-wider">
                      Journey of Transformation...
                    </div>
                  </div>

                  <div className="mt-8 overflow-hidden rounded-2xl border border-white/20 shadow-md">
                    <img
                      src={heroCoach}
                      alt="Padma Pavani CEO Founder"
                      className="h-48 w-full object-cover object-top"
                    />
                    <div className="bg-[#0A2920] p-3 text-center">
                      <div className="font-display text-sm font-bold text-gold">Padma Pavani</div>
                      <div className="text-[11px] text-white/70">CEO, Founder</div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 2: MY TRANSFORMATION TIMELINE (4 CARDS)            */}
        {/* ========================================================= */}
        <section className="py-12 lg:py-16 bg-[#F8FAF9]">
          <div className="mx-auto max-w-[1280px] px-6">
            <Reveal className="text-center">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0E382C]">
                My Transformation
              </h2>
            </Reveal>

            {/* 4 Cards Grid with numbered badges 01, 02, 03, 04 */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {transformationSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <Reveal key={step.step} delay={idx * 80}>
                    <div className="relative flex h-full flex-col justify-between rounded-2xl border border-border/70 bg-card p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                      <div>
                        {/* Icon Header */}
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF4F0] text-[#155D4E]">
                          <Icon className="h-6 w-6" />
                        </div>

                        <h3 className="mt-5 font-display text-lg font-bold text-[#0E382C]">
                          {step.title}
                        </h3>

                        <div className="text-xs font-semibold text-gold mt-0.5">{step.subtitle}</div>

                        <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                          {step.text}
                        </p>
                      </div>

                      {/* Numbered Badge Pill at bottom */}
                      <div className="mt-6 flex justify-center border-t border-border/50 pt-4">
                        <span className="inline-flex h-8 w-12 items-center justify-center rounded-full bg-[#155D4E] text-xs font-bold text-white shadow-xs">
                          {step.step}
                        </span>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 3: THE TURNING POINT                              */}
        {/* ========================================================= */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-[1280px] px-6">
            <Reveal className="text-center max-w-3xl mx-auto">
              <div className="mx-auto h-0.5 w-16 bg-gold mb-3" />
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0E382C]">
                The Turning Point
              </h2>
              <p className="mt-2 text-sm font-semibold text-[#155D4E]">
                Every great transformation begins with a moment of choice
              </p>
            </Reveal>

            <Reveal delay={100} className="mt-8 max-w-3xl mx-auto text-center space-y-4 text-sm sm:text-base leading-relaxed text-foreground/80">
              <p>
                At a turning point in life, I realized that the most important people are not just the people
                around us, but the healed version of ourselves. Through my own healing journey, I discovered
                the power of energy work, mindfulness and self-awareness.
              </p>
              <p>
                This journey inspired me to create a space where others can also{" "}
                <span className="font-bold text-[#0E382C]">heal, grow and transform</span> — mentally,
                emotionally, and spiritually. Today,{" "}
                <span className="font-bold text-[#0E382C]">Heal and Grow with Padma</span> is that space.
              </p>
            </Reveal>

            {/* Yellow Banner Quote Box */}
            <Reveal delay={200} className="mt-10 max-w-4xl mx-auto">
              <div className="relative overflow-hidden rounded-2xl bg-gold/90 p-8 text-[#0E382C] shadow-md border border-gold">
                <Quote className="absolute top-4 left-4 h-12 w-12 text-[#0E382C]/15" />
                <Leaf className="absolute bottom-4 right-4 h-16 w-16 text-[#0E382C]/10" />

                <blockquote className="relative z-10 text-center font-display text-lg sm:text-xl font-bold leading-relaxed px-6">
                  "I realized that healing, growth, and success don't have to be separate. They're all part of
                  the same journey."
                </blockquote>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 4: HEAL AND GROW WITH PADMA (3 PILLAR CARDS)       */}
        {/* ========================================================= */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-[1280px] px-6">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl bg-[#0E382C] p-8 sm:p-12 text-white shadow-2xl border border-white/10">
                <div className="text-center max-w-2xl mx-auto">
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold">
                    <Flower2 className="h-4 w-4" /> HEAL AND GROW WITH PADMA
                  </span>

                  <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-white">
                    A unique blend of 20+ years of corporate experience and spiritual insight
                  </h2>
                </div>

                {/* 3 Pillar Cards */}
                <div className="mt-10 grid gap-6 md:grid-cols-3">
                  <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-xs transition hover:bg-white/15">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-[#0E382C]">
                      <Briefcase className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold text-white">
                      Financial Expertise
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-white/80">
                      From finance to life transformation, I bring practical knowledge with a holistic
                      approach.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-xs transition hover:bg-white/15">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-[#0E382C]">
                      <Flower2 className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold text-white">
                      Healing Arts
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-white/80">
                      Combining energy healing, mindfulness and spiritual practices to help you feel and
                      grow.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-xs transition hover:bg-white/15">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-[#0E382C]">
                      <Sun className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold text-white">
                      Life Transformation
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-white/80">
                      Build confidence, clarity and purpose for a happier, healthier life.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 5: GRATITUDE MY GURUS (15 MENTORS GRID)           */}
        {/* ========================================================= */}
        <section className="py-12 lg:py-16 bg-[#F8FAF9]">
          <div className="mx-auto max-w-[1280px] px-6">
            <Reveal className="text-center">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0E382C]">
                Gratitude My Gurus
              </h2>
              <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">
                My teachers, mentors and inspirations who shaped my journey
              </p>
            </Reveal>

            {/* Grid of Gurus */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
              {gurusData.map((guru, index) => (
                <Reveal key={guru.name} delay={index * 30}>
                  <div className="group flex flex-col items-center text-center">
                    <div className="relative h-28 w-28 sm:h-32 sm:w-32 overflow-hidden rounded-2xl border-2 border-border bg-white shadow-xs transition-transform duration-300 group-hover:scale-105 group-hover:shadow-md">
                      <img
                        src={guru.image}
                        alt={guru.name}
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                    <div className="mt-3 font-display text-xs sm:text-sm font-bold text-[#0E382C] group-hover:text-[#155D4E]">
                      {guru.name}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 6: CERTIFICATIONS & TRAININGS                      */}
        {/* ========================================================= */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-[1280px] px-6">
            <Reveal className="text-center">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0E382C]">
                Certifications &amp; Trainings
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              <Reveal delay={100}>
                <div className="rounded-2xl border border-forest/15 bg-[#F5F8F6] p-6 space-y-4">
                  {certificationsCol1.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-medium text-[#0E382C]">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#155D4E]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={150}>
                <div className="rounded-2xl border border-forest/15 bg-[#F5F8F6] p-6 space-y-4">
                  {certificationsCol2.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-medium text-[#0E382C]">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#155D4E]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 7: CTA BANNER ("Ready to Redesign Your Life?")    */}
        {/* ========================================================= */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-[1280px] px-6">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl bg-[#0E382C] p-8 sm:p-12 text-white shadow-2xl border border-white/10">
                <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
                  <div className="flex items-start gap-5 max-w-2xl">
                    <div className="hidden sm:flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-gold/40 bg-white/10 text-gold shadow-inner">
                      <Calendar className="h-7 w-7" />
                    </div>

                    <div>
                      <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
                        Ready to Redesign Your Life?
                      </h2>
                      <p className="mt-2 text-sm sm:text-base leading-relaxed text-white/85">
                        Join our programs and take the next step towards a healthier, happier and more
                        successful you.
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 w-full lg:w-auto">
                    <Link
                      to="/contact"
                      className="inline-flex w-full lg:w-auto items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold text-gold-foreground shadow-lg transition-all hover:bg-gold/90 hover:shadow-xl hover:scale-105"
                    >
                      Book Your Consultation
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* Floating Scroll-to-Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-gold text-gold-foreground shadow-xl transition-all hover:scale-110 hover:brightness-105"
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      <SiteFooter />
    </div>
  );
}
