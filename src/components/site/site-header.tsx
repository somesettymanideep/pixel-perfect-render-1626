import { useEffect, useState } from "react";
import { ArrowRight, Facebook, Instagram, Linkedin, Mail, Menu, Phone, Youtube, X } from "lucide-react";
import logo from "@/assets/heal-grow-logo.png.asset.json";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#services" },
  { label: "Resources", href: "#resources" },
  { label: "Blog", href: "#videos" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-forest-deep text-forest-foreground md:block">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-6 py-2 text-xs">
          <div className="flex items-center gap-6">
            <a href="mailto:hello@healandgrow.com" className="flex items-center gap-2 opacity-90 hover:opacity-100">
              <Mail className="h-3.5 w-3.5 text-gold" /> hello@healandgrow.com
            </a>
            <a href="tel:+12545679900" className="flex items-center gap-2 opacity-90 hover:opacity-100">
              <Phone className="h-3.5 w-3.5 text-gold" /> +1 (254) 567-9900
            </a>
          </div>
          <div className="flex items-center gap-4">
            {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a key={i} href="#contact" aria-label="Social profile" className="opacity-80 transition hover:scale-110 hover:opacity-100">
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        className={cn(
          "bg-background/95 backdrop-blur transition-all duration-300",
          scrolled ? "shadow-soft" : "shadow-none",
        )}
      >
        <div
          className={cn(
            "mx-auto grid max-w-[1280px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 transition-all duration-300 lg:flex lg:justify-between",
            scrolled ? "py-2" : "py-4",
          )}
        >
          <a href="#home" className="flex min-w-0 items-center">
            <img
              src={logo.url}
              alt="Heal and Grow with Padma"
              className={cn("w-auto transition-all duration-300", scrolled ? "h-11" : "h-14")}
            />
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="nav-link text-foreground/80 hover:text-primary">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href="#contact"
              className="group hidden items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground shadow-soft transition hover:brightness-105 sm:inline-flex"
            >
              Book a Free Session
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-border bg-background px-6 py-4 lg:hidden">
            <ul className="flex flex-col gap-3 text-sm font-medium">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} onClick={() => setOpen(false)} className="block py-1 text-foreground/80">
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 font-semibold text-gold-foreground"
                >
                  Book a Free Session <ArrowRight className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
