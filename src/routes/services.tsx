import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUp,
  Brain,
  Calendar,
  CheckCircle2,
  Compass,
  DollarSign,
  Flower2,
  Heart,
  Home,
  Plus,
  Scale,
  Sparkles,
  Star,
  Sun,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Transformation Programs & Services — Heal and Grow with Padma" },
      {
        name: "description",
        content:
          "Comprehensive healing programs designed to transform your life from the inside out — Ho'oponopono, Aura Reset, Inner Child Healing, Law of Attraction, Ancestral Healing, and Wealth Manifestation.",
      },
      { property: "og:title", content: "Services & Programs — Heal and Grow with Padma" },
      {
        property: "og:description",
        content:
          "Holistic healing, emotional balance, spiritual growth and personal transformation through proven techniques and compassionate guidance.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ServicesPage,
});

interface ServiceItem {
  id: string;
  title: string;
  duration: string;
  description: string;
  features: string[];
  icon: typeof Flower2;
  isPopular?: boolean;
  longDescription?: string;
}

const servicesData: ServiceItem[] = [
  {
    id: "aura-reset",
    title: "Aura Reset – Heal from Within",
    duration: "14 Days",
    icon: Flower2,
    description:
      "A powerful 14-day healing program to cleanse your energy field, restore balance, and awaken your inner light.",
    features: [
      "Daily Energy Cleansing Practices",
      "Chakra Alignment Sessions",
      "Aura Restoration Techniques",
      "Personalized Healing Rituals",
      "Ongoing Support & Guidance",
    ],
    longDescription:
      "The Aura Reset program is designed to purge stagnant emotional debris, release energetic blockages, and re-align your chakras. Over 14 days, you will receive daily energetic cleansing guidance and guided sound frequency rituals to restore your natural glow and vitality.",
  },
  {
    id: "ho-oponopono",
    title: "Ho'oponopono (Advanced Hawaiian Healing)",
    duration: "4 Weeks",
    icon: Sparkles,
    isPopular: true,
    description:
      "Healing through ancient Hawaiian forgiveness practices. Release emotional patterns and restore harmony in your relationships.",
    features: [
      "Hawaiian Forgiveness Rituals",
      "Emotional Freedom Techniques",
      "Relationship Healing",
      "Weekly Integration Sessions",
    ],
    longDescription:
      "Our flagship 4-week Hawaiian Ho'oponopono course guides you deep into the 4 sacred phrases of reconciliation and cleansing. Learn to dissolve resentment, heal relationship wounds, and cultivate profound inner peace.",
  },
  {
    id: "innerchild-healing",
    title: "Innerchild Healing (Trauma Healing)",
    duration: "6 Weeks",
    icon: Heart,
    description:
      "Deep trauma healing to reconnect with your wounded inner child and create lasting emotional transformation.",
    features: [
      "Trauma Release Work",
      "Inner Child Connection",
      "Emotional Integration",
      "Shadow Work Sessions",
      "Self-Love Restoration",
    ],
    longDescription:
      "Gently revisit childhood conditioning and unmet needs to mend foundational wounds, dissolve self-sabotage, and nurture unconditional self-love through somatic release and guided meditations.",
  },
  {
    id: "ancestral-healing",
    title: "Ancestral Healing (Karma Healing)",
    duration: "4 Weeks",
    icon: Brain,
    description:
      "Break free from generational patterns and karma. Heal ancestral wounds and release family burdens holding you back.",
    features: [
      "Karmic Pattern Release",
      "Family Lineage Healing",
      "Ancestral Trauma Clearing",
      "Energy Field Protection",
    ],
    longDescription:
      "Clear inherited karmic debts, systemic family burdens, and transgenerational emotional baggage. Restore honor to your lineage while protecting your individual soul path.",
  },
  {
    id: "transformational-healing",
    title: "90 Days Transformational Healing",
    duration: "90 Days",
    icon: Sun,
    description:
      "Integrated healing addressing Drama-Trauma-Karma for complete life transformation. The ultimate healing journey.",
    features: [
      "Drama Healing (Ho'oponopono)",
      "Trauma Release (Inner Child Work)",
      "Karma Clearing (Ancestral Healing)",
      "Weekly Coaching Sessions",
      "Complete Life Transformation",
    ],
    longDescription:
      "Padma's comprehensive 90-day mentorship protocol combining all key healing pillars into one continuous journey. Experience total emotional, spiritual, and lifestyle alignment.",
  },
  {
    id: "magic-frequency",
    title: "Daily Magic Frequency Balance",
    duration: "4 Weeks",
    icon: Flower2,
    description:
      "Subconscious Mind Programming to align your frequency with your desires and manifest your dream reality.",
    features: [
      "Daily frequency alignment",
      "Sound & frequency therapy",
      "Mind-energy coherence",
      "Weekly Integration Sessions",
    ],
    longDescription:
      "Elevate your baseline energetic frequency through daily sound therapy, brainwave entrainment audios, and subconscious neuro-priming rituals.",
  },
  {
    id: "law-of-attraction",
    title: "Law of Attraction",
    duration: "6 Weeks",
    icon: Scale,
    description:
      "Learn the science of manifestation. Master the universal laws and create the reality you desire.",
    features: [
      "Manifestation Science Training",
      "Vibrational Alignment Practices",
      "Attraction Principles Mastery",
      "Goal Setting Techniques",
      "Success Mindset Development",
    ],
    longDescription:
      "Master the exact universal mechanics of attraction. Align your thoughts, feelings, and daily actions to pull your highest goals effortlessly into physical reality.",
  },
  {
    id: "love-alchemy",
    title: "Love Alchemy Academy",
    duration: "8 Weeks",
    icon: Heart,
    description:
      "Transform pain into power, and love into light. An 8-week journey of heart healing and empowerment.",
    features: [
      "Pain Transformation Work",
      "Love Healing Practices",
      "Power Reclamation Sessions",
      "Heart Chakra Activation",
    ],
    longDescription:
      "Re-open your heart chakra, heal from past heartbreaks or divorces, and step into magnetic self-worth to attract deep, fulfilling relationship partnerships.",
  },
  {
    id: "financial-freedom",
    title: "Financial Freedom Blueprint – 10X Fortune Manifestation",
    duration: "16 Weeks",
    icon: TrendingUp,
    description:
      "Break down to Break through. Master wealth consciousness and manifest extraordinary financial abundance in 16 weeks.",
    features: [
      "Money Breakthrough Sessions",
      "Fortune Manifestation Training",
      "Financial Planning Strategy",
      "Wealth Mindset Reprogramming",
    ],
    longDescription:
      "Combine Padma's 20+ years of corporate finance expertise with powerful money vibration rituals to dissolve scarcity blocks, build wealth habits, and manifest 10X financial growth.",
  },
];

function ServicesPage() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

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
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1920&q=80"
              alt="Meditating in nature backdrop"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="relative z-10 mx-auto max-w-[1280px] px-6">
            <div className="grid items-center gap-8 md:grid-cols-12">
              {/* Left Column: Title & Breadcrumb */}
              <div className="md:col-span-7">
                <Reveal>
                  <h1 className="font-display text-4xl font-extrabold tracking-tight text-[#0E382C] sm:text-5xl lg:text-6xl">
                    Services
                  </h1>

                  <nav className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#0E382C]/80">
                    <Link to="/" className="flex items-center gap-1 hover:text-[#155D4E] transition-colors">
                      <Home className="h-4 w-4" />
                      <span>Home</span>
                    </Link>
                    <span className="text-[#0E382C]/50">→</span>
                    <span className="text-[#155D4E]">Services</span>
                  </nav>
                </Reveal>
              </div>

              {/* Right Column: Handwritten Accent Quote */}
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

          {/* Bottom Curved Wave Transition */}
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
        {/* HEADER TITLE & SUBTITLE SECTION                           */}
        {/* ========================================================= */}
        <section className="pt-6 pb-12">
          <div className="mx-auto max-w-[1280px] px-6 text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#EEF4F0] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#155D4E]">
                <Flower2 className="h-4 w-4 text-gold" />
                <span>TRANSFORMATION PROGRAMS</span>
              </div>

              <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-bold tracking-tight text-[#0E382C] sm:text-4xl lg:text-5xl leading-tight">
                Comprehensive healing programs designed to transform your life from the inside out
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Holistic healing, emotional balance, spiritual growth and personal transformation through
                proven techniques and compassionate guidance.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SERVICES GRID SECTION (9 CARDS)                           */}
        {/* ========================================================= */}
        <section className="pb-16 lg:pb-24">
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {servicesData.map((service, idx) => {
                const Icon = service.icon;
                const isPopular = service.isPopular;

                return (
                  <Reveal key={service.id} delay={idx * 140} variant="up">
                    <div
                      className={`relative flex h-full flex-col justify-between overflow-hidden rounded-3xl p-8 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl ${
                        isPopular
                          ? "bg-[#0E382C] text-white shadow-2xl border-2 border-gold/40"
                          : "bg-[#F5F8F6] text-foreground border border-forest/10 shadow-xs hover:shadow-xl"
                      }`}
                    >
                      {/* Top Badges Row */}
                      <div className="flex items-center justify-between gap-2">
                        {isPopular ? (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-gold px-3.5 py-1 text-xs font-bold text-gold-foreground shadow-xs">
                            <Star className="h-3.5 w-3.5 fill-current" />
                            Most Popular
                          </span>
                        ) : (
                          <div />
                        )}

                        <span
                          className={`rounded-full px-3.5 py-1 text-xs font-bold ${
                            isPopular
                              ? "bg-white/10 text-white border border-white/20"
                              : "bg-white text-[#0E382C] border border-forest/10 shadow-2xs"
                          }`}
                        >
                          {service.duration}
                        </span>
                      </div>

                      {/* Icon & Title */}
                      <div className="mt-6">
                        <div
                          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                            isPopular
                              ? "bg-gold text-[#0E382C] shadow-md"
                              : "bg-white text-[#155D4E] border border-forest/10 shadow-xs"
                          }`}
                        >
                          <Icon className="h-7 w-7" />
                        </div>

                        <h3
                          className={`mt-5 font-display text-xl font-bold ${
                            isPopular ? "text-white" : "text-[#0E382C]"
                          }`}
                        >
                          {service.title}
                        </h3>

                        <p
                          className={`mt-3 text-xs sm:text-sm leading-relaxed ${
                            isPopular ? "text-white/85" : "text-muted-foreground"
                          }`}
                        >
                          {service.description}
                        </p>
                      </div>

                      {/* Feature Bullet Points */}
                      <div className="mt-6 space-y-2.5 border-t border-current/10 pt-5 text-xs sm:text-sm">
                        {service.features.map((feat, i) => (
                          <div key={i} className="flex items-start gap-2.5">
                            <CheckCircle2
                              className={`mt-0.5 h-4 w-4 shrink-0 ${
                                isPopular ? "text-gold" : "text-[#155D4E]"
                              }`}
                            />
                            <span className={isPopular ? "text-white/90" : "text-foreground/85"}>
                              {feat}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Bottom Action Button */}
                      <div className="mt-8 pt-2 flex items-center justify-between">
                        {isPopular ? (
                          <Link
                            to="/contact"
                            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-xs font-bold text-gold-foreground shadow-md transition-all hover:bg-gold/90 hover:shadow-lg"
                          >
                            Book Now
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        ) : (
                          <button
                            onClick={() => setSelectedService(service)}
                            aria-label={`View details for ${service.title}`}
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-[#0E382C] shadow-xs transition-transform hover:scale-110 hover:shadow-md"
                          >
                            <Plus className="h-5 w-5" />
                          </button>
                        )}
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* CTA BANNER: "Ready to Redesign Your Life?"                */}
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

      {/* ========================================================= */}
      {/* SERVICE DETAIL MODAL                                      */}
      {/* ========================================================= */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-background p-6 sm:p-8 shadow-2xl border border-border">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-muted text-foreground/80 hover:bg-destructive hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-[#0E382C]">
                {<selectedService.icon className="h-5 w-5" />}
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#155D4E]">
                {selectedService.duration} Program
              </span>
            </div>

            <h2 className="mt-3 font-display text-2xl font-bold text-[#0E382C] sm:text-3xl">
              {selectedService.title}
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-foreground/85">
              {selectedService.longDescription || selectedService.description}
            </p>

            <div className="mt-6 rounded-2xl bg-[#F0F5F2] p-5 border border-forest/10">
              <h4 className="font-display text-sm font-bold text-[#0E382C]">Key Program Deliverables:</h4>
              <ul className="mt-3 space-y-2 text-xs sm:text-sm text-foreground/90">
                {selectedService.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#155D4E]" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-end gap-3 border-t border-border pt-4">
              <button
                onClick={() => setSelectedService(null)}
                className="rounded-full border border-border px-5 py-2.5 text-xs font-semibold text-foreground hover:bg-muted"
              >
                Close
              </button>
              <BuyButton productId={`service-${selectedService.id}`} />
              <Link
                to="/contact"
                onClick={() => setSelectedService(null)}
                className="inline-flex items-center gap-2 rounded-full bg-[#0E382C] px-6 py-2.5 text-xs font-bold text-white hover:bg-forest transition"
              >
                Book Session Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}

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
