import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import type { FormEvent } from "react";
import { CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Heal and Grow with Padma" },
      {
        name: "description",
        content:
          "Get in touch with Padma — call +91 91339 66553, email healandgrowwithpadma@gmail.com or visit the healing space at Chinnamushidiwada, Visakhapatnam.",
      },
      { property: "og:title", content: "Contact — Heal and Grow with Padma" },
      {
        property: "og:description",
        content:
          "Call, email or visit to begin your healing journey. Book a free discovery session with Padma.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const channels = [
  {
    icon: Phone,
    title: "Call or WhatsApp",
    lines: ["+91 91339 66553"],
    href: "tel:+919133966553",
    action: "Call now",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["healandgrowwithpadma@gmail.com"],
    href: "mailto:healandgrowwithpadma@gmail.com",
    action: "Send an email",
  },
  {
    icon: MapPin,
    title: "Visit the Space",
    lines: [
      "Srama Shakti Nagar, Near Sarada Peetam,",
      "Chinnamushidiwada, Visakhapatnam – 531173,",
      "Andhra Pradesh",
    ],
    href: "https://www.google.com/maps/search/?api=1&query=Chinnamushidiwada,+Visakhapatnam,+Andhra+Pradesh+531173",
    action: "Get directions",
  },
];

const interests = [
  "Energy Healing",
  "Inner Child Work",
  "Numerology Guidance",
  "Subconscious Reprogramming",
  "Career Guidance",
  "Life Coaching",
  "Workshops & Courses",
  "Something else",
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="bg-forest-deep text-forest-foreground">
          <div className="mx-auto max-w-[1280px] px-6 py-20 text-center">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Contact</p>
              <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
                Let's Begin Your <span className="text-gold">Healing Journey</span>
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base opacity-85">
                Whether you have a question, want to book a free discovery session, or simply feel
                ready to talk — reach out. Every message is read personally and answered with care.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Channels + form */}
        <section className="mx-auto max-w-[1280px] px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr]">
            {/* Channels */}
            <div className="space-y-5">
              {channels.map((c, i) => {
                const Icon = c.icon;
                return (
                  <Reveal key={c.title} delay={i * 100}>
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                      className="group flex items-start gap-5 rounded-3xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:border-gold/50"
                    >
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold/15 text-gold-foreground">
                        <Icon className="h-5 w-5 text-gold" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold uppercase tracking-wider text-foreground/60">
                          {c.title}
                        </span>
                        <span className="mt-1 block space-y-0.5 text-base font-medium text-foreground">
                          {c.lines.map((line) => (
                            <span key={line} className="block break-words">
                              {line}
                            </span>
                          ))}
                        </span>
                        <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-gold-foreground group-hover:underline">
                          {c.action} →
                        </span>
                      </span>
                    </a>
                  </Reveal>
                );
              })}

              <Reveal delay={300}>
                <div className="rounded-3xl bg-forest-deep p-6 text-forest-foreground">
                  <h3 className="text-lg font-semibold text-gold">Prefer to start gently?</h3>
                  <p className="mt-2 text-sm leading-relaxed opacity-85">
                    Book a free 20-minute discovery call. We'll talk about where you are, what
                    you're carrying, and whether this is the right path for you — no pressure, no
                    obligation.
                  </p>
                  <a
                    href="tel:+919133966553"
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-gold-foreground shadow-soft transition hover:brightness-105"
                  >
                    <Phone className="h-4 w-4" /> Call +91 91339 66553
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Form */}
            <Reveal delay={150}>
              <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
                {submitted ? (
                  <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                    <CheckCircle2 className="h-14 w-14 text-gold" />
                    <h2 className="mt-5 text-2xl font-bold text-foreground">Thank you!</h2>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-foreground/70">
                      Your message has been received. Padma will personally get back to you within
                      24–48 hours. For anything urgent, call{" "}
                      <a href="tel:+919133966553" className="font-semibold text-gold-foreground underline">
                        +91 91339 66553
                      </a>
                      .
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-sm font-semibold text-gold-foreground underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-foreground">Send a Message</h2>
                    <p className="mt-2 text-sm text-foreground/70">
                      Share a little about what you're looking for, and we'll take it from there.
                    </p>
                    <form onSubmit={onSubmit} className="mt-6 space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                            Full Name
                          </label>
                          <input
                            id="name"
                            name="name"
                            required
                            placeholder="Your name"
                            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
                            Phone
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            placeholder="+91 ..."
                            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="you@example.com"
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
                        />
                      </div>
                      <div>
                        <label htmlFor="interest" className="mb-1.5 block text-sm font-medium text-foreground">
                          What would you like help with?
                        </label>
                        <select
                          id="interest"
                          name="interest"
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
                        >
                          {interests.map((i) => (
                            <option key={i} value={i}>
                              {i}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                          Your Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          required
                          placeholder="Tell me a little about what you're going through or what you'd like to work on..."
                          className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
                        />
                      </div>
                      <button
                        type="submit"
                        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-gold-foreground shadow-soft transition hover:brightness-105 sm:w-auto"
                      >
                        Send Message
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Map */}
        <section className="mx-auto max-w-[1280px] px-6 pb-20">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
              <iframe
                title="Heal and Grow with Padma — Chinnamushidiwada, Visakhapatnam"
                src="https://www.google.com/maps?q=Chinnamushidiwada,+Visakhapatnam,+Andhra+Pradesh+531173&output=embed"
                className="h-[420px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
