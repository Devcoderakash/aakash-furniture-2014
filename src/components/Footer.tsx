import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-walnut-deep text-cream/90">
      <div className="mx-auto max-w-7xl px-5 lg:px-10 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 max-w-md">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-gold grid place-items-center text-walnut-deep font-display font-bold text-xl">
              A
            </div>
            <div>
              <div className="font-display text-2xl text-cream">Aakash Furniture</div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-gold-soft">Premium Living · Bhopal</div>
            </div>
          </div>
          <p className="text-sm text-cream/70 leading-relaxed">
            Bhopal's trusted destination for premium sofas, beds, dining sets, wardrobes and bespoke
            furniture — crafted to bring elegance and comfort to your home.
          </p>
          <div className="flex gap-3 mt-6">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 grid place-items-center rounded-full border border-cream/20 hover:bg-gold hover:text-walnut-deep hover:border-gold transition-colors"
                aria-label="Social"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-gold font-display text-xl mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-cream/75">
            <li className="flex gap-3"><MapPin className="w-4 h-4 mt-0.5 text-gold shrink-0" /> MP Nagar, Zone-II, Bhopal, Madhya Pradesh 462011</li>
            <li className="flex gap-3"><Phone className="w-4 h-4 mt-0.5 text-gold shrink-0" /> <a href="tel:+919876543210" className="hover:text-gold">+91 98765 43210</a></li>
            <li className="flex gap-3"><Mail className="w-4 h-4 mt-0.5 text-gold shrink-0" /> hello@aakashfurniture.in</li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold font-display text-xl mb-4">Visit</h4>
          <ul className="space-y-2 text-sm text-cream/75">
            <li>Mon – Sat: 10:00 AM – 9:00 PM</li>
            <li>Sunday: 11:00 AM – 7:00 PM</li>
          </ul>
          <a
            href="https://maps.google.com/?q=MP+Nagar+Bhopal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-sm text-gold hover:underline"
          >
            View on Google Maps →
          </a>
        </div>
      </div>
      <div className="border-t border-cream/10 py-5 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} Aakash Furniture. All rights reserved.
      </div>
    </footer>
  );
}
