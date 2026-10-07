import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Home,
  ImageIcon,
  Maximize2,
  Sparkles,
  Users,
  X,
  ArrowUp,
} from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import videoWorkshop from "@/assets/video-workshop.jpg";
import videoJournal from "@/assets/video-journal.jpg";
import whyChoose from "@/assets/why-choose.jpg";
import heroCoach from "@/assets/hero-coach.jpg";
import aboutPortrait from "@/assets/about-portrait.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Heal and Grow with Padma" },
      {
        name: "description",
        content:
          "Moments that inspire, connect and grow. Explore photos of workshops, corporate seminars, group healing sessions, and transformation events with Padma.",
      },
      { property: "og:title", content: "Gallery — Heal and Grow with Padma" },
      {
        property: "og:description",
        content:
          "Moments that inspire, connect and grow — live workshops, corporate coaching, and group transformation events.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: GalleryPage,
});

interface GalleryItem {
  id: string;
  title: string;
  category: "Workshops" | "Corporate" | "Group Healing" | "Seminars";
  description: string;
  image: string;
  date?: string;
  location?: string;
}

const galleryItemsData: GalleryItem[] = [
  {
    id: "gallery-1",
    title: "Corporate Team Alignment Workshop",
    category: "Corporate",
    description: "Empowering corporate leaders and team members with mindfulness and stress resilience tools.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    date: "August 2025",
    location: "Visakhapatnam",
  },
  {
    id: "gallery-2",
    title: "Interactive Training & Group Activity",
    category: "Workshops",
    description: "Hands-on group exercises helping participants release limiting subconscious patterns.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    date: "July 2025",
    location: "Hyderabad",
  },
  {
    id: "gallery-3",
    title: "Team Project & Mind Mapping Session",
    category: "Workshops",
    description: "Collaborative energy healing and goal formulation workshop for attendees.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    date: "June 2025",
    location: "Visakhapatnam",
  },
  {
    id: "gallery-4",
    title: "Large Group Healing Seminar",
    category: "Seminars",
    description: "A full-day intensive transformation seminar covering emotional freedom and inner child work.",
    image: videoWorkshop,
    date: "May 2025",
    location: "Bangalore",
  },
  {
    id: "gallery-5",
    title: "Corporate Wellness & Energy Balancing",
    category: "Corporate",
    description: "Group photo with company employees following a successful stress management workshop.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
    date: "April 2025",
    location: "Chennai",
  },
  {
    id: "gallery-6",
    title: "Stage Presentation & Keynote Address",
    category: "Seminars",
    description: "Padma delivering an inspiring keynote on Law of Attraction and daily vibration management.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80",
    date: "March 2025",
    location: "Visakhapatnam",
  },
  {
    id: "gallery-7",
    title: "Professional Excellence & Leadership Team",
    category: "Corporate",
    description: "Empowering organizational leaders with emotional intelligence and purpose alignment.",
    image: whyChoose,
    date: "February 2025",
    location: "Hyderabad",
  },
  {
    id: "gallery-8",
    title: "Group Breakthrough & Mindset Session",
    category: "Group Healing",
    description: "A powerful moment of shared breakthroughs during our 90 Days Transformation program.",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80",
    date: "January 2025",
    location: "Visakhapatnam",
  },
  {
    id: "gallery-9",
    title: "Community Healing & Reflection Circle",
    category: "Group Healing",
    description: "Warm community gathering focusing on Ho'oponopono and ancestral forgiveness rituals.",
    image: videoJournal,
    date: "December 2024",
    location: "Visakhapatnam",
  },
  {
    id: "gallery-10",
    title: "Annual Transformation Summit Group Photo",
    category: "Seminars",
    description: "Celebrating over 100 participants completing the annual Law of Attraction retreat.",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80",
    date: "November 2024",
    location: "Hyderabad",
  },
  {
    id: "gallery-11",
    title: "Inner Child Healing Workshop",
    category: "Group Healing",
    description: "Participants sharing heartfelt stories and healing deep emotional conditioning.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
    date: "October 2024",
    location: "Visakhapatnam",
  },
  {
    id: "gallery-12",
    title: "Student Graduation & Certificate Event",
    category: "Workshops",
    description: "Graduation celebration for certified workshop attendees completing the course.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    date: "September 2024",
    location: "Visakhapatnam",
  },
];

const categories = ["All", "Workshops", "Corporate", "Group Healing", "Seminars"] as const;

function GalleryPage() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    activeTab === "All"
      ? galleryItemsData
      : galleryItemsData.filter((item) => item.category === activeTab);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
      }
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

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
          {/* Background Image Overlay with Sunrise Mountains Silhouette */}
          <div className="absolute inset-0 z-0 opacity-25 mix-blend-multiply">
            <img
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80"
              alt="Inspiring landscape sunrise"
              className="h-full w-full object-cover object-center"
            />
          </div>

          {/* Soft decorative gradient overlays */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#E7F2EC]/90 via-[#F1F6F3]/80 to-transparent" />

          <div className="relative z-10 mx-auto max-w-[1280px] px-6">
            <div className="grid items-center gap-8 md:grid-cols-12">
              {/* Left Column: Title & Breadcrumb */}
              <div className="md:col-span-7">
                <Reveal>
                  <h1 className="font-display text-4xl font-extrabold tracking-tight text-[#0E382C] sm:text-5xl lg:text-6xl">
                    Gallery
                  </h1>

                  {/* Breadcrumb Navigation */}
                  <nav className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#0E382C]/80">
                    <Link to="/" className="flex items-center gap-1 hover:text-[#155D4E] transition-colors">
                      <Home className="h-4 w-4" />
                      <span>Home</span>
                    </Link>
                    <span className="text-[#0E382C]/50">→</span>
                    <span className="text-[#155D4E]">Gallery</span>
                  </nav>
                </Reveal>
              </div>

              {/* Right Column: Handwritten Script Accent Quote & Celebrating Person graphic */}
              <div className="md:col-span-5 flex flex-col items-start md:items-end text-left md:text-right">
                <Reveal delay={150}>
                  <div className="relative max-w-xs">
                    <p className="font-serif text-2xl sm:text-3xl italic font-bold text-[#0E382C] leading-snug drop-shadow-xs transform -rotate-1">
                      "Moments that <br />
                      <span className="text-[#155D4E]">inspire, connect</span> <br />
                      and grow..."
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>

          {/* Decorative Bottom Curved Wave Border */}
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
        {/* FILTER CATEGORY TABS BAR                                  */}
        {/* ========================================================= */}
        <section className="pt-4 pb-8">
          <div className="mx-auto max-w-[1280px] px-6">
            <Reveal>
              <div className="flex items-center justify-center">
                <div className="no-scrollbar flex max-w-full items-center gap-2 overflow-x-auto rounded-full bg-[#EEF4F0] p-2 border border-forest/10 shadow-xs">
                  {categories.map((category) => {
                    const isActive = activeTab === category;
                    return (
                      <button
                        key={category}
                        onClick={() => setActiveTab(category)}
                        className={`shrink-0 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all ${
                          isActive
                            ? "bg-[#0E382C] text-white shadow-md"
                            : "text-[#0E382C]/80 hover:bg-white/80 hover:text-[#0E382C]"
                        }`}
                      >
                        {category === "All" ? "All Moments" : category}
                      </button>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ========================================================= */}
        {/* GALLERY PHOTOS GRID (3 COLUMNS x 4 ROWS)                   */}
        {/* ========================================================= */}
        <section className="py-8 lg:py-12">
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item, index) => (
                <Reveal key={item.id} delay={index * 50}>
                  <div
                    onClick={() => setLightboxIndex(index)}
                    className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border/70 bg-card shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
                  >
                    {/* Photo Container */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                      />

                      {/* Overlay Gradient on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0E382C]/90 via-[#0E382C]/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-6 text-white" />

                      {/* Floating Category Badge */}
                      <div className="absolute top-4 left-4 z-10 rounded-full bg-white/90 px-3.5 py-1 text-xs font-bold text-[#0E382C] backdrop-blur-xs shadow-xs">
                        {item.category}
                      </div>

                      {/* Floating Zoom Icon on Hover */}
                      <div className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#0E382C]/80 text-white opacity-0 backdrop-blur-xs transition-all duration-300 group-hover:opacity-100 group-hover:scale-110">
                        <Maximize2 className="h-4 w-4" />
                      </div>

                      {/* Hover Info Text overlay */}
                      <div className="absolute bottom-0 left-0 right-0 z-10 translate-y-4 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <h3 className="font-display text-lg font-bold text-white drop-shadow-xs">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-xs text-white/80 line-clamp-2 leading-relaxed">
                          {item.description}
                        </p>
                        {item.location && (
                          <div className="mt-2 text-[11px] font-medium text-gold">
                            📍 {item.location} {item.date ? `• ${item.date}` : ""}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
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
                {/* Wavy top accent styling */}
                <div className="pointer-events-none absolute -top-12 -right-12 h-48 w-48 rounded-full bg-gold/10 blur-2xl" />

                <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
                  <div className="flex items-start gap-5 max-w-2xl">
                    {/* Gold Calendar / Schedule Icon in Circle */}
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

                  {/* Yellow Consultation Button */}
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
      {/* LIGHTBOX FULLSCREEN MODAL                                 */}
      {/* ========================================================= */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-in fade-in duration-200">
          {/* Close Button */}
          <button
            onClick={() => setLightboxIndex(null)}
            aria-label="Close modal"
            className="absolute top-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={() =>
              setLightboxIndex((prev) =>
                prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1
              )
            }
            aria-label="Previous photo"
            className="absolute left-4 top-1/2 z-50 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>

          {/* Next Button */}
          <button
            onClick={() =>
              setLightboxIndex((prev) =>
                prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0
              )
            }
            aria-label="Next photo"
            className="absolute right-4 top-1/2 z-50 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="h-7 w-7" />
          </button>

          {/* Main Lightbox Content Card */}
          <div className="max-w-4xl w-full overflow-hidden rounded-3xl bg-[#0E382C] text-white shadow-2xl border border-white/20">
            <div className="relative aspect-[16/10] w-full bg-black/40">
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="p-6 sm:p-8 bg-[#0E382C]">
              <div className="flex items-center justify-between gap-4">
                <span className="inline-block rounded-full bg-gold px-3.5 py-1 text-xs font-bold text-gold-foreground">
                  {filteredItems[lightboxIndex].category}
                </span>

                <span className="text-xs font-medium text-white/60">
                  {lightboxIndex + 1} of {filteredItems.length}
                </span>
              </div>

              <h3 className="mt-3 font-display text-2xl font-bold text-white">
                {filteredItems[lightboxIndex].title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-white/80">
                {filteredItems[lightboxIndex].description}
              </p>

              {filteredItems[lightboxIndex].location && (
                <div className="mt-4 text-xs font-semibold text-gold">
                  📍 {filteredItems[lightboxIndex].location} • {filteredItems[lightboxIndex].date}
                </div>
              )}
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
