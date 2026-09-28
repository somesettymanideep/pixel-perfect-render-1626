import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import logo from "@/assets/heal-grow-logo.png.asset.json";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#services" },
  { label: "Resources", href: "#resources" },
  { label: "Blog", href: "#videos" },
  { label: "Contact", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-forest-deep text-forest-foreground">
      <div className="mx-auto max-w-[1280px] px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="inline-flex rounded-2xl bg-background/95 p-3">
              <img src={logo.url} alt="Heal and Grow with Padma" className="h-14 w-auto" />
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed opacity-80">
              A calm, practical space for healing and personal growth — guiding you from where you
              are to the life you're meant to live.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#home"
                  aria-label="Social profile"
                  className="grid h-9 w-9 place-items-center rounded-full bg-background/10 transition hover:scale-110 hover:bg-gold hover:text-gold-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-base font-semibold text-gold">Quick Links</h4>
            <ul className="mt-5 space-y-3 text-sm opacity-85">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  {l.href.startsWith("/") ? (
                    <Link to={l.href} className="transition hover:text-gold">
                      {l.label}
                    </Link>
                  ) : (
                    <a href={l.href} className="transition hover:text-gold">
                      {l.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold text-gold">Services</h4>
            <ul className="mt-5 space-y-3 text-sm opacity-85">
              {services.map((l) => (
                <li key={l}>
                  <a href="#services" className="transition hover:text-gold">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold text-gold">Contact Us</h4>
            <ul className="mt-5 space-y-4 text-sm opacity-85">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href="tel:+919133966553" className="transition hover:text-gold">
                  +91 91339 66553
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a
                  href="mailto:healandgrowwithpadma@gmail.com"
                  className="break-all transition hover:text-gold"
                >
                  healandgrowwithpadma@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>
                  Srama Shakti Nagar, Near Sarada Peetam,
                  <br />
                  Chinnamushidiwada, Visakhapatnam – 531173,
                  <br />
                  Andhra Pradesh
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-3 px-6 py-5 text-xs opacity-70 sm:flex-row">
          <p>© 2026 Heal and Grow with Padma. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#home" className="hover:text-gold">
              Privacy Policy
            </a>
            <a href="#home" className="hover:text-gold">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
