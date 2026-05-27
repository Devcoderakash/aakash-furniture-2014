import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Star, Phone, MapPin, ArrowRight, Sparkles, Award, IndianRupee,
  Hammer, Truck, ShieldCheck, Clock, Navigation, Send,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

import hero from "@/assets/hero.jpg";
import catSofa from "@/assets/cat-sofa.jpg";
import catBed from "@/assets/cat-bed.jpg";
import catDining from "@/assets/cat-dining.jpg";
import catWardrobe from "@/assets/cat-wardrobe.jpg";
import catChair from "@/assets/cat-chair.jpg";
import catCenter from "@/assets/cat-center.jpg";
import catOffice from "@/assets/cat-office.jpg";
import catCustom from "@/assets/cat-custom.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aakash Furniture — Premium Furniture Showroom in Bhopal" },
      {
        name: "description",
        content:
          "Aakash Furniture, Bhopal's trusted showroom for premium sofas, beds, dining tables, wardrobes and custom furniture. 4.9★ rated, 1000+ happy customers.",
      },
      { property: "og:title", content: "Aakash Furniture — Premium Furniture in Bhopal" },
      { property: "og:description", content: "Elegant sofas, beds, dining sets and custom furniture crafted for everyday luxury." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const categories = [
  { name: "Sofa Sets", img: catSofa },
  { name: "Beds", img: catBed },
  { name: "Dining Tables", img: catDining },
  { name: "Wardrobes", img: catWardrobe },
  { name: "Chairs", img: catChair },
  { name: "Center Tables", img: catCenter },
  { name: "Office Furniture", img: catOffice },
  { name: "Custom Furniture", img: catCustom },
];

const features = [
  { icon: Award, title: "Premium Quality Material", desc: "Solid wood, durable upholstery, lasting craftsmanship." },
  { icon: Sparkles, title: "Stylish Modern Designs", desc: "Curated collections that elevate every space." },
  { icon: IndianRupee, title: "Affordable Pricing", desc: "Premium feel at honest, family-friendly prices." },
  { icon: Hammer, title: "Custom Furniture", desc: "Made-to-order pieces tailored to your home." },
  { icon: Truck, title: "Home Delivery", desc: "Safe doorstep delivery and assembly across Bhopal." },
  { icon: ShieldCheck, title: "Trusted Local Brand", desc: "1000+ happy families across Madhya Pradesh." },
];

const reviews = [
  { name: "Priya Sharma", rating: 5, text: "Absolutely loved the sofa set we got from Aakash Furniture. The quality and finish are top-notch and the team was very supportive throughout." },
  { name: "Rohit Verma", rating: 5, text: "Got a custom wardrobe designed for our new home. Perfect fit, premium look, and delivered on time. Highly recommend!" },
  { name: "Anjali Mehta", rating: 5, text: "Beautiful showroom, polite staff and genuine pricing. Our dining set is the centerpiece of our home now." },
  { name: "Karan Sethi", rating: 5, text: "From selection to delivery, everything was smooth. The wood quality is excellent. Best furniture store in Bhopal." },
];

const gallery = [
  { src: g1, h: "row-span-2" },
  { src: g2, h: "" },
  { src: g3, h: "row-span-2" },
  { src: g4, h: "" },
  { src: g5, h: "row-span-2" },
  { src: g6, h: "" },
];

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

function SectionTitle({ eyebrow, title, light = false }: { eyebrow: string; title: string; light?: boolean }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fade}
      className="text-center max-w-2xl mx-auto mb-14"
    >
      <p className={`text-[11px] tracking-[0.35em] uppercase ${light ? "text-gold-soft" : "text-gold"} mb-3`}>
        {eyebrow}
      </p>
      <h2 className={`font-display text-4xl md:text-5xl ${light ? "text-cream" : "text-walnut-deep"}`}>
        {title}
      </h2>
      <div className="gold-divider" />
    </motion.div>
  );
}

function Index() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !/^[0-9 +-]{7,15}$/.test(form.phone)) return;
    const text = encodeURIComponent(
      `Callback request from ${form.name} (${form.phone}). Message: ${form.message || "—"}`
    );
    window.open(`https://wa.me/919876543210?text=${text}`, "_blank");
    setSent(true);
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        <img
          src={hero}
          alt="Luxury furniture showroom interior"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-walnut-deep/90 via-walnut-deep/70 to-walnut-deep/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-walnut-deep/80 via-transparent to-walnut-deep/30" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-10 pt-32 pb-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-cream/10 backdrop-blur-sm border border-gold/30 rounded-full px-4 py-1.5 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-cream text-xs font-medium">4.9+ Google Rating · 1000+ Customers in Bhopal</span>
            </div>

            <h1 className="font-display text-cream text-5xl md:text-7xl leading-[1.05] text-balance">
              Transform Your Home with{" "}
              <span className="italic text-gold">Premium Furniture</span>
            </h1>
            <p className="mt-6 text-cream/80 text-lg md:text-xl max-w-2xl leading-relaxed">
              Elegant sofas, beds, dining tables and custom furniture — crafted for comfort, beauty
              and everyday living.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#collection" className="group inline-flex items-center gap-2 bg-gradient-gold text-walnut-deep px-7 py-4 rounded-full font-semibold shadow-gold hover:scale-[1.03] transition-transform">
                Explore Collection <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#visit" className="inline-flex items-center gap-2 bg-cream/10 backdrop-blur border border-cream/30 text-cream px-7 py-4 rounded-full font-semibold hover:bg-cream hover:text-walnut-deep transition-colors">
                <MapPin className="w-4 h-4" /> Visit Showroom
              </a>
              <a href="tel:+919876543210" className="inline-flex items-center gap-2 bg-transparent border border-cream/40 text-cream px-7 py-4 rounded-full font-semibold hover:border-gold hover:text-gold transition-colors">
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/60 text-xs tracking-[0.3em] uppercase"
        >
          Scroll
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-5 lg:px-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
            <p className="text-[11px] tracking-[0.35em] uppercase text-gold mb-3">Our Story</p>
            <h2 className="font-display text-4xl md:text-6xl text-walnut-deep">About Aakash Furniture</h2>
            <div className="gold-divider" />
            <p className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Aakash Furniture is one of Bhopal's trusted furniture destinations offering stylish,
              durable and premium-quality furniture for every home. From modern sofas to beds, dining
              sets and custom furniture, we combine{" "}
              <span className="text-walnut-deep font-medium">comfort, quality and design</span> to
              make your home beautiful.
            </p>

            <div className="mt-14 grid grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { n: "15+", l: "Years of Trust" },
                { n: "1000+", l: "Happy Homes" },
                { n: "4.9★", l: "Google Rating" },
              ].map((s) => (
                <div key={s.l} className="border-t border-border pt-6">
                  <div className="font-display text-4xl md:text-5xl text-gold">{s.n}</div>
                  <div className="text-xs tracking-wider uppercase text-muted-foreground mt-2">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="collection" className="py-24 lg:py-32 bg-cream">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <SectionTitle eyebrow="Our Collection" title="Furniture for Every Room" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-7">
            {categories.map((c, i) => (
              <motion.a
                key={c.name}
                href="#contact"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="group relative aspect-square overflow-hidden rounded-2xl shadow-soft bg-walnut-deep"
              >
                <img
                  src={c.img}
                  alt={c.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-walnut-deep via-walnut-deep/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6 text-cream">
                  <div className="font-display text-xl lg:text-2xl">{c.name}</div>
                  <div className="mt-1 flex items-center gap-1 text-xs text-gold opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                    Explore <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 lg:py-32 bg-walnut-deep relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, var(--gold) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
          <SectionTitle eyebrow="Why Choose Us" title="Crafted with Care, Trusted by Many" light />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group p-7 rounded-2xl bg-cream/5 backdrop-blur border border-cream/10 hover:border-gold/40 hover:bg-cream/10 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-gold grid place-items-center text-walnut-deep mb-5 group-hover:scale-110 transition-transform">
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="text-cream font-display text-2xl mb-2">{f.title}</h3>
                <p className="text-cream/70 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <SectionTitle eyebrow="Testimonials" title="What Our Customers Say" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {reviews.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-card rounded-2xl p-7 shadow-soft border border-border/60 flex flex-col"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(r.rating)].map((_, k) => (
                    <Star key={k} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">"{r.text}"</p>
                <div className="mt-6 flex items-center gap-3 pt-5 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-gradient-gold grid place-items-center text-walnut-deep font-semibold">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-walnut-deep text-sm">{r.name}</div>
                    <div className="text-xs text-muted-foreground">Verified Customer</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="https://g.page/r/aakashfurniture/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-walnut-deep text-cream px-7 py-4 rounded-full font-semibold hover:bg-walnut transition-colors shadow-soft"
            >
              <Star className="w-4 h-4 fill-gold text-gold" /> Review Us on Google
            </a>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 lg:py-32 bg-cream">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <SectionTitle eyebrow="Gallery" title="Inside Our Showroom" />
          <div className="grid grid-cols-2 lg:grid-cols-3 auto-rows-[240px] gap-4">
            {gallery.map((g, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className={`group relative overflow-hidden rounded-2xl shadow-soft ${g.h}`}
              >
                <img
                  src={g.src}
                  alt="Aakash Furniture showroom"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-walnut-deep/0 group-hover:bg-walnut-deep/20 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
            <p className="text-[11px] tracking-[0.35em] uppercase text-gold mb-3">Visit Us</p>
            <h2 className="font-display text-4xl md:text-5xl text-walnut-deep">Step Into Our Showroom</h2>
            <div className="gold-divider !mx-0" />
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Experience our premium collection in person. Touch the fabrics, feel the wood, and let
              our team help you design the home of your dreams.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex gap-4">
                <div className="w-11 h-11 shrink-0 rounded-full bg-gradient-gold grid place-items-center text-walnut-deep">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs tracking-wider uppercase text-muted-foreground">Address</div>
                  <div className="text-walnut-deep font-medium">MP Nagar, Zone-II, Bhopal, Madhya Pradesh 462011</div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-11 h-11 shrink-0 rounded-full bg-gradient-gold grid place-items-center text-walnut-deep">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs tracking-wider uppercase text-muted-foreground">Phone</div>
                  <a href="tel:+919876543210" className="text-walnut-deep font-medium hover:text-gold">+91 98765 43210</a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-11 h-11 shrink-0 rounded-full bg-gradient-gold grid place-items-center text-walnut-deep">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs tracking-wider uppercase text-muted-foreground">Business Hours</div>
                  <div className="text-walnut-deep font-medium">Mon – Sat: 10 AM – 9 PM · Sun: 11 AM – 7 PM</div>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=MP+Nagar+Bhopal"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-walnut-deep text-cream px-7 py-4 rounded-full font-semibold hover:bg-walnut transition-colors shadow-soft"
            >
              <Navigation className="w-4 h-4" /> Get Directions
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl overflow-hidden shadow-elegant border-8 border-cream aspect-square lg:aspect-[4/5]"
          >
            <iframe
              title="Aakash Furniture Bhopal Map"
              src="https://www.google.com/maps?q=MP+Nagar+Zone+2+Bhopal&output=embed"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 lg:py-32 bg-walnut-deep">
        <div className="mx-auto max-w-3xl px-5 lg:px-10">
          <SectionTitle eyebrow="Get in Touch" title="Request a Callback" light />
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-cream rounded-3xl p-6 md:p-10 shadow-elegant space-y-5"
          >
            <div>
              <label className="text-xs tracking-wider uppercase text-walnut-deep/70">Name</label>
              <input
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-2 w-full bg-transparent border-b border-walnut-deep/20 focus:border-gold outline-none py-3 text-walnut-deep placeholder:text-walnut-deep/40"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="text-xs tracking-wider uppercase text-walnut-deep/70">Phone Number</label>
              <input
                required
                type="tel"
                maxLength={15}
                pattern="[0-9 +-]{7,15}"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="mt-2 w-full bg-transparent border-b border-walnut-deep/20 focus:border-gold outline-none py-3 text-walnut-deep placeholder:text-walnut-deep/40"
                placeholder="+91 98765 43210"
              />
            </div>
            <div>
              <label className="text-xs tracking-wider uppercase text-walnut-deep/70">Message</label>
              <textarea
                rows={4}
                maxLength={1000}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-2 w-full bg-transparent border-b border-walnut-deep/20 focus:border-gold outline-none py-3 text-walnut-deep placeholder:text-walnut-deep/40 resize-none"
                placeholder="Tell us what you're looking for…"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-walnut-deep text-cream px-7 py-4 rounded-full font-semibold hover:bg-walnut transition-colors shadow-soft"
            >
              <Send className="w-4 h-4" /> Request a Callback
            </button>
            {sent && (
              <p className="text-center text-sm text-walnut-deep/80">
                Thank you! We'll reach out shortly. Your message has also been sent via WhatsApp.
              </p>
            )}
          </motion.form>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
