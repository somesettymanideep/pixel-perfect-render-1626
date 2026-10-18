import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Award,
  BarChart2,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  Compass,
  FileCheck,
  Flower2,
  Globe,
  Heart,
  HelpCircle,
  Laptop,
  Leaf,
  Minus,
  Plus,
  Quote,
  Shield,
  Sparkles,
  Star,
  Sun,
  Users,
  X,
} from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import heroCoach from "@/assets/hero-coach.jpg";
import aboutPortrait from "@/assets/about-portrait.jpg";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses & Programs — Heal and Grow with Padma" },
      {
        name: "description",
        content:
          "Explore evidence-based courses in Energy Healing, Inner Child Work, Numerology, Subconscious Programming, and Life Coaching with Padma.",
      },
      { property: "og:title", content: "Courses & Programs — Heal and Grow with Padma" },
      {
        property: "og:description",
        content:
          "Practical, self-paced & guided courses designed to help you build emotional resilience and create a fulfilling life.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: CoursesPage,
});

interface Course {
  id: string;
  title: string;
  category: string;
  description: string;
  duration: string;
  level: string;
  image: string;
  icon: typeof Sparkles;
  longDescription?: string;
  highlights?: string[];
}

const coursesData: Course[] = [
  {
    id: "energy-healing",
    title: "Energy Healing",
    category: "Energy Healing",
    description: "Balance your energy, reduce stress and bring harmony to your life.",
    duration: "4 weeks",
    level: "All Levels",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
    icon: Flower2,
    longDescription:
      "A deep, restorative journey to cleanse blocked emotional energy, reduce chronic stress, and reconnect with your inner vital force through guided meditation and light work.",
    highlights: [
      "Guided chakra balancing & aura cleansing",
      "Daily 15-minute grounding exercises",
      "Live Q&A integration calls with Padma",
      "Lifetime access to audio healing meditations",
    ],
  },
  {
    id: "inner-child-work",
    title: "Inner Child Work",
    category: "Inner Child Work",
    description: "Heal your past, release old patterns and create a healthier you.",
    duration: "6 weeks",
    level: "All Levels",
    image: "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?auto=format&fit=crop&w=800&q=80",
    icon: Heart,
    longDescription:
      "Gently revisit childhood conditioning and unmet needs to mend foundational wounds, dissolve self-sabotage, and nurture unconditional self-love.",
    highlights: [
      "Reparenting step-by-step framework",
      "Guided inner child dialogue exercises",
      "Somatic emotional release techniques",
      "Private journal prompts & workbook",
    ],
  },
  {
    id: "numerology-reports",
    title: "Numerology Reports & Personal Guidance",
    category: "Numerology",
    description: "Discover your life path, strengths and opportunities through numerology.",
    duration: "3 weeks",
    level: "All Levels",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    icon: Sparkles,
    longDescription:
      "Decode the sacred geometry of your birth date and name to uncover your core life blueprint, karmic lessons, personal year cycles, and natural gifts.",
    highlights: [
      "Personalized 30+ page custom numerology chart",
      "Life path & expression number analysis",
      "1-on-1 personal reading call with Padma",
      "Annual forecast & monthly planning guides",
    ],
  },
  {
    id: "subconscious-mind",
    title: "Subconscious Mind Programming",
    category: "Subconscious Mind",
    description: "Rewire your mind, break limiting beliefs and create lasting change.",
    duration: "4 weeks",
    level: "All Levels",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    icon: Flower2,
    longDescription:
      "Shift deep-seated limiting beliefs stored in your subconscious using neuro-linguistic principles, hypnotic visualisations, and daily subconscious priming.",
    highlights: [
      "Subconscious belief auditing process",
      "Custom night-time self-hypnosis audios",
      "Neural pathway rewiring exercises",
      "Practical tools to stop overthinking",
    ],
  },
  {
    id: "coaching-sessions",
    title: "Coaching Sessions",
    category: "Life Coaching",
    description: "Personalized coaching to help you achieve your goals and live with purpose.",
    duration: "1:1 / Group",
    level: "All Levels",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    icon: Users,
    longDescription:
      "High-touch direct mentorship with Padma tailored specifically to your present life transitions, relationship dynamics, or career direction.",
    highlights: [
      "Direct 1-on-1 weekly video sessions",
      "Tailored action plans & accountability check-ins",
      "WhatsApp text support between calls",
      "Comprehensive growth tracking dashboard",
    ],
  },
  {
    id: "workshops-online",
    title: "Workshops & Online Courses",
    category: "Workshops",
    description: "Short, practical sessions for quick learning and real-life application.",
    duration: "1-8 weeks",
    level: "All Levels",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    icon: Laptop,
    longDescription:
      "Targeted intensive workshops focusing on practical life skills, stress relief rituals, emotional regulation, and mindful living.",
    highlights: [
      "Interactive live workshop recordings",
      "Downloadable cheat sheets & templates",
      "Group discussion & peer connection space",
      "Certificate of participation",
    ],
  },
  {
    id: "life-coaching",
    title: "Life Coaching",
    category: "Life Coaching",
    description: "Gain clarity, build confidence and move forward with purpose.",
    duration: "4 weeks",
    level: "All Levels",
    image: "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=800&q=80",
    icon: Sun,
    longDescription:
      "A structured foundation program designed to align your values, clarify your vision, and build unshakeable confidence in your decision making.",
    highlights: [
      "Values alignment & purpose mapping",
      "Confidence building & boundary setting",
      "Weekly action commitments & tools",
      "Personal reflection workbooks",
    ],
  },
  {
    id: "law-of-attraction",
    title: "Law of Attraction",
    category: "Subconscious Mind",
    description: "Align your thoughts, energy and actions with your dreams.",
    duration: "4 weeks",
    level: "All Levels",
    image: "https://images.unsplash.com/photo-1508672019048-805479767513?auto=format&fit=crop&w=800&q=80",
    icon: Compass,
    longDescription:
      "Master the science and practice of manifestation by bringing your vibrational state, mental focus, and practical habits into perfect alignment.",
    highlights: [
      "Vibrational frequency alignment exercises",
      "Scripting, visualization & gratitude rituals",
      "Clearing resistance & attachment blocks",
      "Manifestation tracking journal",
    ],
  },
];

const categoryFilters = [
  { label: "All Courses", icon: BookOpen },
  { label: "Energy Healing", icon: Flower2 },
  { label: "Inner Child Work", icon: Heart },
  { label: "Numerology", icon: Sparkles },
  { label: "Subconscious Mind", icon: Flower2 },
  { label: "Workshops", icon: Laptop },
  { label: "Life Coaching", icon: Sun },
];

const faqItems = [
  {
    question: "How do I access the courses?",
    answer:
      "Once enrolled, you get instant online access to all course materials, video lessons, audio recordings, and downloadable workbooks through your personal student portal, accessible 24/7 on any mobile or desktop device.",
  },
  {
    question: "Are the courses self-paced?",
    answer:
      "Yes! All recorded video and audio modules are 100% self-paced so you can learn at your own comfortable speed. You also retain lifetime access to revisit lessons whenever you need a refresh.",
  },
  {
    question: "Will I get a certificate?",
    answer:
      "Yes! Upon completing all lessons and required exercises of any course or workshop, you will receive a verified Certificate of Completion signed by Padma.",
  },
  {
    question: "Can I book a personal session along with a course?",
    answer:
      "A practical approach! Many students pair self-paced courses with 1-on-1 personal coaching or healing sessions with Padma to accelerate their personal breakthrough.",
  },
  {
    question: "What if I need help during the course?",
    answer:
      "We provide dedicated email support and interactive Q&A discussion areas for all enrolled students. Padma and her support team respond regularly to ensure you never feel stuck.",
  },
];

const testimonials = [
  {
    quote:
      "Padma's guidance has truly changed my life. Her approach is compassionate, practical and powerful. I feel more confident and balanced than ever!",
    name: "T. Sravani",
    role: "Life Coaching Client",
  },
  {
    quote:
      "The healing sessions helped me release old fears and gain clarity in my life. I'm now more focused, positive and aligned with my goals. Highly recommend!",
    name: "Naveen",
    role: "Healing Program Client",
  },
  {
    quote:
      "The numerology report was incredibly accurate and gave me valuable insights. It helped me make better decisions and feel more confident.",
    name: "Priya Sharma",
    role: "Numerology Client",
  },
];

function CoursesPage() {
  const [activeFilter, setActiveFilter] = useState("All Courses");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filteredCourses =
    activeFilter === "All Courses"
      ? coursesData
      : coursesData.filter((c) => c.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-gold/30">
      <SiteHeader />

      <main>
        {/* ========================================================= */}
        {/* HERO BANNER SECTION                                       */}
        {/* ========================================================= */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#F2F7F4] via-[#F8FAF9] to-background pt-8 pb-16 lg:py-20">
          {/* Subtle background decorative shapes */}
          <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-leaf/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

          <div className="mx-auto max-w-[1280px] px-6">
            <div className="grid items-center gap-12 lg:grid-cols-12">
              {/* Left Text Column */}
              <div className="lg:col-span-7">
                <Reveal>
                  <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#155D4E]">
                    COURSES
                  </span>

                  <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-[#0E382C] sm:text-5xl lg:text-6xl lg:leading-[1.15]">
                    Learn, Heal &amp; Grow{" "}
                    <span className="block font-serif font-normal italic text-[#D99B26] sm:inline">
                      with Expert Guidance
                    </span>
                  </h1>

                  <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                    Practical, evidence-based courses designed to help you build emotional resilience,
                    improve well-being, and create a more fulfilling life.
                  </p>
                </Reveal>

                {/* 3 Key Badges Inline */}
                <Reveal delay={150}>
                  <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-forest/10 pt-6 text-sm font-medium text-[#0E382C]">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-forest/20 bg-white shadow-xs">
                        <Flower2 className="h-4 w-4 text-[#155D4E]" />
                      </div>
                      <span>Self-paced &amp; Flexible</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-forest/20 bg-white shadow-xs">
                        <Laptop className="h-4 w-4 text-[#155D4E]" />
                      </div>
                      <span>Lifetime Access</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-forest/20 bg-white shadow-xs">
                        <Award className="h-4 w-4 text-[#155D4E]" />
                      </div>
                      <span>Certificate of Completion</span>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Right Image Column */}
              <div className="relative flex justify-center lg:col-span-5 lg:justify-end">
                <Reveal delay={200}>
                  <div className="relative max-w-md">
                    {/* Main Padma Portrait */}
                    <div className="relative overflow-hidden rounded-3xl border-4 border-white shadow-2xl">
                      <img
                        src={heroCoach}
                        alt="Padma — Certified Coach & Healer"
                        className="h-[380px] w-full object-cover object-top sm:h-[460px]"
                      />
                    </div>

                    {/* Floating Callout badge "Better Mind Brighter Future" */}
                    <div className="absolute -top-4 -right-4 sm:-right-8 z-20 float-soft">
                      <div className="rounded-2xl border border-forest/10 bg-white/95 px-5 py-3 shadow-xl backdrop-blur">
                        <div className="flex items-center gap-2">
                          <span className="font-serif text-lg font-bold italic text-[#0E382C] leading-tight">
                            Better Mind
                            <br />
                            <span className="text-[#D99B26]">Brighter Future</span>
                          </span>
                          <svg
                            className="h-8 w-8 text-[#155D4E]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M7 11l5-5m0 0l5 5m-5-5v12"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* CATEGORY FILTER PILLS BAR                                 */}
        {/* ========================================================= */}
        <section className="py-6">
          <div className="mx-auto max-w-[1280px] px-6">
            <Reveal>
              <div className="flex items-center justify-center">
                <div className="no-scrollbar flex max-w-full items-center gap-2 overflow-x-auto rounded-2xl bg-[#EEF4F0] p-2 sm:rounded-full sm:p-2.5">
                  {categoryFilters.map((filter) => {
                    const Icon = filter.icon;
                    const isActive = activeFilter === filter.label;
                    return (
                      <button
                        key={filter.label}
                        onClick={() => setActiveFilter(filter.label)}
                        className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all sm:px-5 sm:py-2.5 sm:text-sm ${
                          isActive
                            ? "bg-[#0E382C] text-white shadow-md"
                            : "text-[#0E382C]/80 hover:bg-white/80 hover:text-[#0E382C]"
                        }`}
                      >
                        <Icon className={`h-4 w-4 ${isActive ? "text-gold" : "text-[#155D4E]"}`} />
                        <span>{filter.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ========================================================= */}
        {/* FEATURED COURSES GRID SECTION                             */}
        {/* ========================================================= */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-[1280px] px-6">
            <Reveal className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-[#155D4E]">
                OUR COURSES
              </span>
              <h2 className="mt-1 font-display text-3xl font-bold tracking-tight text-[#0E382C] sm:text-4xl">
                Featured Courses
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Explore our most popular courses and start your journey towards healing, self-discovery
                and personal growth.
              </p>
            </Reveal>

            {/* Grid Layout: 3 Columns */}
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCourses.map((course, idx) => {
                const Icon = course.icon;
                return (
                  <Reveal key={course.id} delay={idx * 60}>
                    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                      {/* Image Thumbnail */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      {/* Icon Overlay Badge overlapping image bottom-left */}
                      <div className="relative z-10 -mt-6 ml-6 flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-gold text-gold-foreground shadow-md transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-5 w-5 text-[#0E382C]" />
                      </div>

                      {/* Card Content Body */}
                      <div className="flex flex-1 flex-col p-6 pt-3">
                        <h3 className="font-display text-xl font-bold text-[#0E382C] transition-colors group-hover:text-primary">
                          {course.title}
                        </h3>

                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                          {course.description}
                        </p>

                        {/* Meta Row: Duration & Level */}
                        <div className="mt-6 flex items-center gap-4 text-xs font-medium text-muted-foreground">
                          <div className="flex items-center gap-1.5">
                            <Clock className="h-3.5 w-3.5 text-gold" />
                            <span>{course.duration}</span>
                          </div>

                          <span className="text-border">|</span>

                          <div className="flex items-center gap-1.5">
                            <BarChart2 className="h-3.5 w-3.5 text-gold" />
                            <span>{course.level}</span>
                          </div>
                        </div>

                        {/* CTA Button */}
                        <div className="mt-6 pt-2">
                          <button
                            onClick={() => setSelectedCourse(course)}
                            className="inline-flex items-center gap-1.5 rounded-full bg-gold px-5 py-2.5 text-xs font-bold text-gold-foreground shadow-xs transition-all hover:bg-gold/90 hover:shadow-md"
                          >
                            View Details
                            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}

              {/* 9th Special Promo Card ("Not sure which course is right for you?") */}
              {activeFilter === "All Courses" && (
                <Reveal delay={480}>
                  <div className="relative flex h-full min-h-[380px] flex-col justify-between overflow-hidden rounded-2xl border border-forest/15 bg-gradient-to-br from-[#E6F2EB] to-[#EEF6F1] p-8 shadow-xs">
                    {/* Decorative watermark leaf */}
                    <Leaf className="pointer-events-none absolute -top-4 -right-4 h-36 w-36 text-[#155D4E]/10" />

                    <div>
                      <h3 className="font-display text-2xl font-bold leading-snug text-[#0E382C]">
                        Not sure which course is right for you?
                      </h3>

                      <p className="mt-4 text-sm leading-relaxed text-[#0E382C]/80">
                        Book a free discovery session and get personalized recommendations based on your
                        needs.
                      </p>
                    </div>

                    <div className="mt-8 pt-4">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 rounded-full bg-[#0E382C] px-6 py-3 text-xs font-bold text-white shadow-md transition-all hover:bg-[#155D4E] hover:shadow-lg"
                      >
                        Book a Free Session
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              )}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* QUOTE / HIGHLIGHTS DARK GREEN BANNER                      */}
        {/* ========================================================= */}
        <section className="py-10">
          <div className="mx-auto max-w-[1280px] px-6">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl bg-[#0E382C] p-8 text-white shadow-2xl md:p-12">
                <div className="grid items-center gap-8 lg:grid-cols-12">
                  {/* Left Padma Photo */}
                  <div className="lg:col-span-4">
                    <div className="overflow-hidden rounded-2xl border border-white/20 shadow-lg">
                      <img
                        src={heroCoach}
                        alt="Padma — Life Coach & Healer"
                        className="h-64 w-full object-cover object-top sm:h-72 lg:h-80"
                      />
                    </div>
                  </div>

                  {/* Center Quote */}
                  <div className="lg:col-span-4">
                    <Quote className="h-10 w-10 text-gold opacity-90" />
                    <blockquote className="mt-3 font-serif text-lg italic leading-relaxed text-white/95 sm:text-xl">
                      "Healing is not a destination, it's a journey. My courses are designed to guide you step
                      by step towards a healthier, more empowered you."
                    </blockquote>

                    <div className="mt-6">
                      <div className="font-display text-base font-bold text-gold">— Padma</div>
                      <div className="text-xs text-white/70">Certified Life Coach &amp; Healer</div>
                    </div>
                  </div>

                  {/* Right Features 2x2 Grid */}
                  <div className="lg:col-span-4">
                    <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6 lg:border-t-0 lg:border-l lg:border-white/10 lg:pt-0 lg:pl-8">
                      <div className="flex flex-col gap-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-white/10 text-gold">
                          <Shield className="h-5 w-5" />
                        </div>
                        <span className="font-display text-sm font-bold text-white">Expert Guidance</span>
                        <span className="text-xs text-white/70">from Padma</span>
                      </div>

                      <div className="flex flex-col gap-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-white/10 text-gold">
                          <FileCheck className="h-5 w-5" />
                        </div>
                        <span className="font-display text-sm font-bold text-white">Evidence-Based</span>
                        <span className="text-xs text-white/70">Techniques</span>
                      </div>

                      <div className="flex flex-col gap-2 mt-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-white/10 text-gold">
                          <Calendar className="h-5 w-5" />
                        </div>
                        <span className="font-display text-sm font-bold text-white">Flexible Learning</span>
                        <span className="text-xs text-white/70">Schedule</span>
                      </div>

                      <div className="flex flex-col gap-2 mt-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-white/10 text-gold">
                          <Globe className="h-5 w-5" />
                        </div>
                        <span className="font-display text-sm font-bold text-white">Lifetime Access</span>
                        <span className="text-xs text-white/70">to Resources</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ========================================================= */}
        {/* TESTIMONIALS SECTION                                      */}
        {/* ========================================================= */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-[1280px] px-6">
            <Reveal>
              <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#155D4E]">
                    WHAT OUR STUDENTS SAY
                  </span>
                  <h2 className="mt-1 font-display text-3xl font-bold tracking-tight text-[#0E382C] sm:text-4xl">
                    Real Stories, Real Transformation
                  </h2>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#155D4E] hover:underline"
                >
                  View All Testimonials
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </Reveal>

            {/* Testimonials Cards Grid */}
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {testimonials.map((t, idx) => (
                <Reveal key={idx} delay={idx * 100}>
                  <div className="flex h-full flex-col justify-between rounded-2xl border border-border/60 bg-card p-6 shadow-xs transition-shadow hover:shadow-md">
                    <div>
                      {/* Google Ratings Header */}
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[#4285F4] text-base tracking-tight">
                          G<span className="text-[#EA4335]">o</span>
                          <span className="text-[#FBBC05]">o</span>
                          <span className="text-[#4285F4]">g</span>
                          <span className="text-[#34A853]">l</span>
                          <span className="text-[#EA4335]">e</span>
                        </span>
                        <div className="flex items-center gap-0.5 text-[#F5B800]">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current" />
                          ))}
                        </div>
                      </div>

                      <p className="mt-4 text-sm leading-relaxed text-foreground/80 italic">
                        "{t.quote}"
                      </p>
                    </div>

                    <div className="mt-6 flex items-center gap-3 border-t border-border/50 pt-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E6F2EB] font-bold text-[#0E382C]">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-sm text-[#0E382C]">{t.name}</div>
                        <div className="text-xs text-muted-foreground">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* FAQ ACCORDION SECTION                                     */}
        {/* ========================================================= */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-[1280px] px-6">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl bg-[#F0F5F2] p-8 sm:p-12 border border-forest/10">
                <div className="grid items-start gap-10 lg:grid-cols-12">
                  {/* Left Info Column */}
                  <div className="relative lg:col-span-5">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#155D4E]">
                      FAQ
                    </span>
                    <h2 className="mt-1 font-display text-3xl font-bold tracking-tight text-[#0E382C] sm:text-4xl">
                      Common Questions
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-md">
                      Find answers to the most common questions about our courses, programs and learning
                      experience.
                    </p>

                    {/* Decorative leaf sketch */}
                    <div className="mt-8 hidden lg:block opacity-20">
                      <Leaf className="h-32 w-32 text-[#155D4E]" />
                    </div>
                  </div>

                  {/* Right Accordion List */}
                  <div className="lg:col-span-7 space-y-3">
                    {faqItems.map((item, index) => {
                      const isOpen = openFaq === index;
                      return (
                        <div
                          key={index}
                          className="overflow-hidden rounded-2xl border border-forest/15 bg-white shadow-xs transition-all"
                        >
                          <button
                            onClick={() => setOpenFaq(isOpen ? null : index)}
                            className="flex w-full items-center justify-between p-5 text-left font-display font-semibold text-[#0E382C] transition-colors hover:text-[#155D4E]"
                          >
                            <span className="text-base sm:text-lg">{item.question}</span>
                            <span className="ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EEF4F0] text-[#0E382C]">
                              {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                            </span>
                          </button>

                          {isOpen && (
                            <div className="border-t border-border/40 px-5 pb-5 pt-3 text-sm leading-relaxed text-muted-foreground">
                              {item.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* ========================================================= */}
      {/* COURSE DETAILS MODAL DIALOG                               */}
      {/* ========================================================= */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-background p-6 sm:p-8 shadow-2xl border border-border">
            <button
              onClick={() => setSelectedCourse(null)}
              className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-muted text-foreground/80 hover:bg-destructive hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-[#0E382C]">
                {<selectedCourse.icon className="h-5 w-5" />}
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#155D4E]">
                {selectedCourse.category}
              </span>
            </div>

            <h2 className="mt-3 font-display text-2xl font-bold text-[#0E382C] sm:text-3xl">
              {selectedCourse.title}
            </h2>

            <div className="mt-4 flex items-center gap-4 text-xs font-semibold text-muted-foreground border-y border-border py-2.5">
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-gold" /> Duration: {selectedCourse.duration}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <BarChart2 className="h-4 w-4 text-gold" /> Level: {selectedCourse.level}
              </span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-foreground/85">
              {selectedCourse.longDescription || selectedCourse.description}
            </p>

            {selectedCourse.highlights && (
              <div className="mt-6 rounded-2xl bg-[#F0F5F2] p-5 border border-forest/10">
                <h4 className="font-display text-sm font-bold text-[#0E382C]">What you'll learn:</h4>
                <ul className="mt-3 space-y-2 text-xs sm:text-sm text-foreground/90">
                  {selectedCourse.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#155D4E]" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-8 flex flex-wrap items-center justify-end gap-3 border-t border-border pt-4">
              <button
                onClick={() => setSelectedCourse(null)}
                className="rounded-full border border-border px-5 py-2.5 text-xs font-semibold text-foreground hover:bg-muted"
              >
                Close
              </button>
              <BuyButton productId={`course-${selectedCourse.id}`} />
              <Link
                to="/contact"
                onClick={() => setSelectedCourse(null)}
                className="inline-flex items-center gap-2 rounded-full bg-[#0E382C] px-6 py-2.5 text-xs font-bold text-white hover:bg-forest transition"
              >
                Enroll / Enquire Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}

      <SiteFooter />
    </div>
  );
}
