import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Award,
  BookOpen,
  Check,
  Compass,
  Flower2,
  Heart,
  Leaf,
  Play,
  Sparkles,
  Star,
  Sun,
  Target,
  Users,
} from "lucide-react";
import { Reveal, useCountUp } from "@/components/site/reveal";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import heroCoach from "@/assets/hero-coach.jpg";
import aboutPortrait from "@/assets/about-portrait.jpg";
import whyChoose from "@/assets/why-choose.jpg";
import bookCover from "@/assets/book-cover.jpg";
import videoWorkshop from "@/assets/video-workshop.jpg";
import videoJournal from "@/assets/video-journal.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Heal and Grow with Padma | Life Coaching, Healing & Personal Growth" },
      {
        name: "description",
        content:
          "Heal and Grow with Padma offers energy healing, life coaching, inner child work and transformation programs to help you move from pain to power.",
      },
      { property: "og:title", content: "Heal and Grow with Padma | Transform Your Journey" },
      {
        property: "og:description",
        content:
          "Personal growth, healing and success — one-to-one coaching, workshops and courses designed around your life.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Sparkles, title: "Energy Healing", text: "Release heaviness, restore balance and bring calm back into your everyday life." },
  { icon: Heart, title: "Inner Child Work", text: "Gently revisit old patterns and give yourself the care you needed back then." },
  { icon: Compass, title: "Numerology Guidance", text: "Understand your natural strengths, timing and the path that fits you best." },
  { icon: Flower2, title: "Subconscious Reprogramming", text: "Rewrite the quiet beliefs that decide how far you let yourself go." },
  { icon: Target, title: "Career Guidance", text: "Find clarity in your work and align your next move with who you really are." },
  { icon: Users, title: "Workshops & Courses", text: "Learn practical tools alongside a supportive group, live or online." },
  { icon: Sun, title: "Life Coaching", text: "Build confidence, set honest goals and follow through with steady support." },
  { icon: Leaf, title: "Law of Attraction", text: "Align thought, feeling and action so your effort finally moves the needle." },
];

const stats = [
  { icon: Users, value: 3000, suffix: "+", label: "Happy Clients", display: (v: number) => `${Math.round(v / 1000)}K+` },
  { icon: BookOpen, value: 20, suffix: "", label: "Courses & Programs" },
  { icon: Award, value: 99, suffix: "%", label: "Success Rate" },
  { icon: Star, value: 10, suffix: "+", label: "Years Experience" },
];

const benefits = [
  "Personalised sessions shaped around your story",
  "Practical tools that work in real life, not theory",
  "Compassionate, non-judgmental listening",
  "A safe and private space for deep healing",
  "Guidance that keeps supporting you long after",
];

const testimonials = [
  {
    quote:
      "I came in carrying years of quiet anxiety. Six sessions later I sleep properly, speak up at work, and actually like my mornings again.",
    name: "Sravani T.",
    role: "Life Coaching Client",
  },
  {
    quote:
      "The inner child work was the turning point. Padma never rushed me, and for the first time the old story stopped running the show.",
    name: "Naveen R.",
    role: "Healing Program Client",
  },
  {
    quote:
      "Warm, grounded and incredibly practical. I left every session with something I could actually do that week.",
    name: "Meera K.",
    role: "Career Guidance Client",
  },
  {
    quote:
      "The group workshop gave me tools and a community. Three months on, I'm still using the morning practice daily.",
    name: "Daniel P.",
    role: "Workshop Participant",
  },
];

const videos = [
  { img: videoWorkshop, tag: "Guided Session", title: "Healing & Growth Circle" },
  { img: videoJournal, tag: "Practical Tips", title: "A Five-Minute Morning Reset" },
  { img: whyChoose, tag: "Motivational Talk", title: "Overcoming What Holds You Back" },
  { img: aboutPortrait, tag: "Life Coaching", title: "Building a Success Mindset" },
];

const partners = ["KOTAK", "LIC", "HDFC LIFE", "SRI DHARMA", "SARDA", "LAVA"];

function Stat({ stat, delay }: { stat: (typeof stats)[number]; delay: number }) {
  const { ref, value } = useCountUp(stat.value);
  const Icon = stat.icon;
  return (
    <Reveal delay={delay} className="flex items-center gap-4 px-4 py-2">
      <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-gold/40 text-gold">
        <Icon className="h-6 w-6" />
      </span>
      <div className="min-w-0">
        <p className="font-display text-3xl font-semibold text-forest-foreground">
          <span ref={ref}>{stat.display ? stat.display(value) : `${value}${stat.suffix}`}</span>
        </p>
        <p className="text-sm opacity-75">{stat.label}</p>
      </div>
    </Reveal>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-leaf uppercase">
      <Leaf className="h-4 w-4" />
      {children}
    </span>
  );
}

function Home() {
  const [slide, setSlide] = useState(0);
  const perView = 2;
  const maxSlide = Math.max(0, testimonials.length - perView);

  return (
    <div className="overflow-x-hidden">
      <SiteHeader />

      {/* Hero */}
      <section id="home" className="relative bg-cream">
        <div className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-gold/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-[1280px] items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <Reveal delay={0}>
              <SectionLabel>Personal Growth • Healing • Success</SectionLabel>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-5 text-4xl leading-[1.05] font-semibold text-primary sm:text-5xl lg:text-6xl">
                Transform Your Journey.
                <br />
                <span className="text-gold">Discover Your Potential.</span>
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
                Heal what still hurts, unlearn what holds you back, and build a life that feels like
                yours — with guidance that is warm, practical and grounded in real experience.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <a
                href="#contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-gold-foreground shadow-soft transition hover:scale-[1.03]"
              >
                Book a Free Session
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Reveal>
            <Reveal delay={480}>
              <div className="mt-10 flex items-center gap-4">
                <div className="flex -space-x-3">
                  {["S", "N", "M"].map((i) => (
                    <span
                      key={i}
                      className="grid h-10 w-10 place-items-center rounded-full border-2 border-background bg-primary text-sm font-semibold text-primary-foreground"
                    >
                      {i}
                    </span>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">Happy Clients</p>
                  <p className="flex items-center gap-1 text-xs text-muted-foreground">
                    <span className="flex text-gold">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </span>
                    4.9/5 · 500+ reviews
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal variant="zoom" delay={200} className="relative">
            <div className="blob float-soft absolute -right-6 -bottom-6 h-64 w-64 bg-gold/70" />
            <div className="relative overflow-hidden rounded-[2.5rem] rounded-tr-[8rem] shadow-lift">
              <img
                src={heroCoach}
                alt="Padma, life coach and healing practitioner"
                width={1008}
                height={1200}
                className="h-[420px] w-full object-cover object-top sm:h-[520px]"
              />
            </div>
            <p className="font-display absolute top-6 -left-2 hidden rotate-[-6deg] text-2xl text-primary lg:block">
              Heal · Grow · Succeed
            </p>
          </Reveal>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-[1280px] px-6 py-20">
        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1fr]">
          <Reveal variant="left" className="relative">
            <div className="blob absolute -bottom-8 -left-6 h-48 w-48 bg-gold/60" />
            <img
              src={aboutPortrait}
              alt="Portrait of Padma"
              loading="lazy"
              width={912}
              height={1104}
              className="relative h-[460px] w-full rounded-[2.5rem] rounded-bl-[7rem] object-cover shadow-soft"
            />
          </Reveal>

          <Reveal variant="right">
            <SectionLabel>About Padma</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">Hi, I'm Padma!</h2>
            <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
              I'm a life coach, mentor and healing practitioner. For over a decade I've sat with
              people in the middle of hard chapters — burnout, grief, stuck careers, old wounds —
              and helped them find a way through that feels honest and doable.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                "Certified life coach and healing practitioner",
                "Specialised in emotional healing and personal growth",
                "Working with individuals, professionals and founders",
                "10+ years of coaching and mentoring experience",
              ].map((point, i) => (
                <Reveal key={point} delay={150 * (i + 1)} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-leaf text-white">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-sm text-foreground/85">{point}</span>
                </Reveal>
              ))}
            </ul>
            <a
              href="#services"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground transition hover:scale-[1.03]"
            >
              Know More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>

        {/* Stats */}
        <Reveal className="mt-16 rounded-[2rem] bg-forest px-6 py-8 text-forest-foreground shadow-lift">
          <div className="grid gap-6 divide-y divide-white/10 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {stats.map((stat, i) => (
              <Stat key={stat.label} stat={stat} delay={i * 100} />
            ))}
          </div>
        </Reveal>
      </section>

      {/* Services */}
      <section id="services" className="bg-cream py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <Reveal className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <SectionLabel>Services</SectionLabel>
              <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
                360° Life Transformation
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                Every path looks different. Start wherever the weight is heaviest — we'll build the
                rest of the journey together.
              </p>
            </div>
            <a
              href="#contact"
              className="group inline-flex w-fit items-center gap-2 rounded-full border border-primary/25 px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground"
            >
              All Services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <Reveal
                  key={service.title}
                  delay={(i % 4) * 100}
                  className="group rounded-3xl bg-card p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-gold/20 text-primary transition group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-primary">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.text}</p>
                  <span className="mt-6 grid h-9 w-9 place-items-center rounded-full bg-gold text-gold-foreground transition group-hover:translate-x-1">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto max-w-[1280px] px-6 py-20">
        <div className="grid items-stretch gap-0 overflow-hidden rounded-[2.5rem] shadow-lift lg:grid-cols-2">
          <Reveal variant="left" className="relative min-h-[320px]">
            <img
              src={whyChoose}
              alt="Padma in a coaching session"
              loading="lazy"
              width={1104}
              height={912}
              className="h-full w-full object-cover"
            />
          </Reveal>
          <Reveal variant="right" className="bg-forest p-8 text-forest-foreground sm:p-12">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-gold uppercase">
              <Leaf className="h-4 w-4" /> Why Choose Us
            </span>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              I work <span className="text-gold">with you</span>
            </h2>
            <ul className="mt-8 space-y-4">
              {benefits.map((b, i) => (
                <Reveal key={b} delay={150 * (i + 1)} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold text-gold-foreground">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-sm opacity-90">{b}</span>
                </Reveal>
              ))}
            </ul>
            <a
              href="#contact"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground transition hover:scale-[1.03]"
            >
              Let's Connect <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <Reveal className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <SectionLabel>Testimonials</SectionLabel>
              <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
                What our clients say
              </h2>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setSlide((s) => Math.max(0, s - 1))}
                disabled={slide === 0}
                aria-label="Previous testimonial"
                className="grid h-10 w-10 place-items-center rounded-full border border-primary/25 text-primary transition hover:bg-primary hover:text-primary-foreground disabled:opacity-35"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => setSlide((s) => Math.min(maxSlide, s + 1))}
                disabled={slide === maxSlide}
                aria-label="Next testimonial"
                className="grid h-10 w-10 place-items-center rounded-full border border-primary/25 text-primary transition hover:bg-primary hover:text-primary-foreground disabled:opacity-35"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </Reveal>

          <div className="mt-10 overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-700 ease-out"
              style={{ transform: `translateX(calc(-${slide} * (50% + 0.75rem)))` }}
            >
              {testimonials.map((t) => (
                <article
                  key={t.name}
                  className="w-full shrink-0 rounded-3xl bg-card p-7 shadow-soft md:w-[calc(50%-0.75rem)]"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-primary">Google Review</span>
                    <span className="flex text-gold">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </span>
                  </div>
                  <p className="mt-5 leading-relaxed text-foreground/85">"{t.quote}"</p>
                  <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                      {t.name.charAt(0)}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-primary">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured book */}
      <section id="resources" className="mx-auto max-w-[1280px] px-6 py-20">
        <div className="grid items-center gap-12 md:grid-cols-[0.8fr_1fr]">
          <Reveal variant="left" className="relative">
            <img
              src={bookCover}
              alt="A Calmer You — book by Padma"
              loading="lazy"
              width={912}
              height={912}
              className="float-soft w-full rounded-3xl object-cover shadow-lift"
            />
          </Reveal>
          <Reveal variant="right" delay={150}>
            <SectionLabel>Featured Book</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">A Calmer You</h2>
            <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
              A short, practical guide to healing and self-discovery — small daily habits that help
              you feel steadier, kinder to yourself and clearer about what comes next.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground transition hover:scale-[1.03]"
              >
                Buy Now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full border border-primary/25 px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground"
              >
                Know More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Videos */}
      <section id="videos" className="bg-cream py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <Reveal className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <SectionLabel>Watch &amp; Learn</SectionLabel>
              <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
                Short talks, real tools
              </h2>
            </div>
            <a
              href="#contact"
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-forest-foreground transition hover:scale-[1.03]"
            >
              View All Videos <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {videos.map((v, i) => (
              <Reveal
                key={v.title}
                delay={i * 100}
                className="group relative overflow-hidden rounded-3xl shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <img
                  src={v.img}
                  alt={v.title}
                  loading="lazy"
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/20 to-transparent" />
                <span className="absolute top-1/2 left-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gold text-gold-foreground transition group-hover:scale-110">
                  <Play className="h-5 w-5 fill-current" />
                </span>
                <div className="absolute inset-x-0 bottom-0 p-5 text-forest-foreground">
                  <p className="font-display text-lg leading-tight font-semibold">{v.title}</p>
                  <p className="mt-1 text-xs opacity-80">{v.tag}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="mx-auto max-w-[1280px] px-6 py-16">
        <Reveal>
          <SectionLabel>Our Partners</SectionLabel>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 items-center gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((p, i) => (
            <Reveal
              key={p}
              delay={i * 80}
              className="text-center font-display text-lg font-semibold tracking-wide text-muted-foreground/60 transition hover:text-primary"
            >
              {p}
            </Reveal>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gold">
        <Reveal className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
          <div className="flex items-start gap-3">
            <Leaf className="float-soft mt-1 h-6 w-6 shrink-0 text-gold-foreground" />
            <div>
              <h2 className="text-2xl font-semibold text-gold-foreground sm:text-3xl">
                Ready to transform your life?
              </h2>
              <p className="mt-1 text-sm text-gold-foreground/80">
                Your healing journey starts here. Book a free consultation today.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-sm font-semibold text-forest-foreground transition hover:scale-[1.03]"
          >
            Book a Free Session <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </section>

      <SiteFooter />
    </div>
  );
}
