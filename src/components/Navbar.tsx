import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#collection", label: "Collection" },
  { href: "#gallery", label: "Gallery" },
  { href: "#visit", label: "Visit" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-xl border-b border-border shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-10 flex items-center justify-between h-16 lg:h-20">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-gradient-gold grid place-items-center text-walnut-deep font-display font-bold text-lg">
            A
          </div>
          <div className="leading-tight">
            <div className={`font-display text-lg lg:text-xl font-semibold ${scrolled ? "text-walnut-deep" : "text-cream"}`}>
              Aakash Furniture
            </div>
            <div className={`text-[10px] tracking-[0.25em] uppercase ${scrolled ? "text-muted-foreground" : "text-gold-soft"}`}>
              Bhopal
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-gold ${
                scrolled ? "text-walnut-deep" : "text-cream"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:+919111092001"
          className="hidden lg:inline-flex items-center gap-2 bg-walnut-deep text-cream px-5 py-2.5 rounded-full text-sm font-medium hover:bg-walnut transition-colors shadow-soft"
        >
          <Phone className="w-4 h-4" /> Call Now
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden p-2 rounded-md ${scrolled ? "text-walnut-deep" : "text-cream"}`}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="lg:hidden bg-cream border-t border-border"
          >
            <div className="px-5 py-4 flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-walnut-deep font-medium py-2 border-b border-border/60"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="tel:+919111092001"
                className="mt-2 inline-flex items-center justify-center gap-2 bg-walnut-deep text-cream px-5 py-3 rounded-full text-sm font-medium"
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
