import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import {
  Star, Phone, MapPin, ArrowRight, Sparkles, Award, IndianRupee,
  Hammer, Truck, ShieldCheck, Clock, Navigation, Send, ChevronDown, MessageCircle
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
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [activePanel, setActivePanel] = useState<number | null>(0);

  const accordionItems = [
    {
      id: 0,
      icon: MapPin,
      title: "Visit Our Showroom",
      content: (
        <div className="space-y-4 pt-2">
          <p className="text-walnut-deep/80 leading-relaxed font-sans text-sm md:text-base">
            Shop 2, Aakash Furniture, Near SBI Bank, Danish Kunj, Kolar Road, Bhopal, Madhya Pradesh 462042
          </p>
          <a
            href="https://www.google.com/maps?cid=17449925441340534410&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en&gl=IN&source=embed"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-gold text-walnut-deep px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold hover:scale-[1.02] active:scale-95 transition-all shadow-gold"
          >
            <Navigation className="w-4 h-4 fill-walnut-deep text-walnut-deep" /> Get Directions
          </a>
        </div>
      ),
    },
    {
      id: 1,
      icon: Phone,
      title: "Call Us",
      content: (
        <div className="space-y-4 pt-2">
          <p className="text-walnut-deep/80 leading-relaxed font-sans text-sm md:text-base">
            For enquiries, orders, or design support, feel free to call our direct line:
          </p>
          <div className="flex items-center gap-3">
            <span className="font-display text-xl md:text-2xl font-bold text-walnut-deep">+91 91110 92001</span>
          </div>
          <a
            href="tel:+919111092001"
            className="inline-flex items-center gap-2 bg-gradient-gold text-walnut-deep px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold hover:scale-[1.02] active:scale-95 transition-all shadow-gold"
          >
            <Phone className="w-4 h-4" /> Call Now
          </a>
        </div>
      ),
    },
    {
      id: 2,
      icon: MessageCircle,
      title: "WhatsApp Support",
      content: (
        <div className="space-y-4 pt-2">
          <p className="text-walnut-deep/80 leading-relaxed font-sans text-sm md:text-base">
            Chat instantly with our furniture specialists on WhatsApp for catalogs, customization quotes, and product updates.
          </p>
          <div className="flex items-center gap-3">
            <span className="font-display text-xl md:text-2xl font-bold text-walnut-deep">+91 78694 61895</span>
          </div>
          <a
            href="https://wa.me/917869461895?text=Hi%20Aakash%20Furniture%2C%20I%27d%20like%20to%20enquire%20about%20your%20collection."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold hover:scale-[1.02] active:scale-95 transition-all shadow-soft"
          >
            <MessageCircle className="w-4 h-4 fill-white text-white" /> Chat on WhatsApp
          </a>
        </div>
      ),
    },
    {
      id: 3,
      icon: Clock,
      title: "Business Hours",
      content: (
        <div className="space-y-4 pt-2">
          <p className="text-walnut-deep/80 leading-relaxed font-sans text-sm md:text-base">
            We are pleased to welcome you to our showroom every single day of the week.
          </p>
          <div className="bg-cream/40 border border-gold/15 p-4 rounded-xl max-w-sm">
            <div className="text-sm font-bold text-walnut-deep tracking-wide uppercase mb-1">Open All Week</div>
            <div className="text-lg font-display text-gold font-bold">9:00 AM – 10:00 PM</div>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      icon: Star,
      title: "Google Reviews",
      content: (
        <div className="space-y-4 pt-2">
          <div className="flex items-center gap-4 bg-walnut-deep/5 p-4 rounded-xl border border-gold/10">
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-walnut-deep">4.9</div>
              <div className="flex justify-center my-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-gold text-gold" />
                ))}
              </div>
              <div className="text-[10px] tracking-wider text-muted-foreground uppercase">Google Rating</div>
            </div>
            <div className="h-10 w-[1px] bg-gold/20" />
            <div className="text-sm text-muted-foreground font-sans">
              Trusted by <span className="font-semibold text-walnut-deep">1000+ happy families</span> across Bhopal and Madhya Pradesh.
            </div>
          </div>

          <div className="space-y-3">
            {[
              { name: "Priya Sharma", text: "Absolutely loved the sofa set we got from Aakash Furniture. The quality and finish are top-notch and the team was highly supportive!" },
              { name: "Rohit Verma", text: "Got a custom wardrobe designed for our new home. Perfect fit, premium look, and delivered on time. Highly recommend!" }
            ].map((rev, k) => (
              <div key={k} className="p-3 bg-white rounded-xl border border-border shadow-xs animate-fade-in">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-xs text-walnut-deep">{rev.name}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 fill-gold text-gold" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed font-sans">"{rev.text}"</p>
              </div>
            ))}
          </div>

          <a
            href="https://www.google.com/maps?cid=17449925441340534410&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en&gl=IN&source=embed"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-walnut-deep text-cream px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold hover:bg-walnut transition-colors shadow-soft"
          >
            <Star className="w-4 h-4 fill-gold text-gold" /> Review Us on Google
          </a>
        </div>
      ),
    },
    {
      id: 5,
      icon: Navigation,
      title: "Find Us on Map",
      content: (
        <div className="pt-2">
          <div className="rounded-xl overflow-hidden shadow-elegant border border-gold/20 aspect-video w-full">
            <iframe
              title="Aakash Furniture Danish Kunj Showroom Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3667.9323429348187!2d77.4145852!3d23.1726693!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4370bd8b2de3%3A0xf22a96bc38276e8a!2sAakash%20Furniture!5e0!3m2!1sen!2sin!4v1779902339484!5m2!1sen!2sin"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      ),
    },
  ];

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !/^[0-9 +-]{7,15}$/.test(form.phone)) return;

    setLoading(true);
    setSuccess(false);

    const templateParams = {
      name: form.name,
      phone: form.phone,
      message: form.message || "—",
      time: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    };

    try {
      await emailjs.send(
        "service_1g05ju1",
        "template_ef5h8m7",
        templateParams,
        "NfdXSR-34v1lI6V0K"
      );

      setSuccess(true);
      toast.success("Thank you! Your callback request has been sent successfully. Our team will contact you shortly.");
      setForm({ name: "", phone: "", message: "" });
      
      // Auto reset success state after 4 seconds to revert button to default state
      setTimeout(() => {
        setSuccess(false);
      }, 4000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
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
              <a href="#contact" className="inline-flex items-center gap-2 bg-cream/10 backdrop-blur border border-cream/30 text-cream px-7 py-4 rounded-full font-semibold hover:bg-cream hover:text-walnut-deep transition-colors">
                <MapPin className="w-4 h-4" /> Visit Showroom
              </a>
              <a href="tel:+919111092001" className="inline-flex items-center gap-2 bg-transparent border border-cream/40 text-cream px-7 py-4 rounded-full font-semibold hover:border-gold hover:text-gold transition-colors">
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

      {/* CONTACT & VISIT */}
      <section id="contact" className="py-24 lg:py-32 bg-cream relative overflow-hidden">
        <div id="visit" className="absolute -top-20" />
        
        {/* Subtle background glow effect */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-gold/5 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-walnut-deep/5 blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-5 lg:px-10 relative z-10">
          <SectionTitle eyebrow="Connect With Us" title="Contact Our Showroom" />

          <div className="grid lg:grid-cols-12 gap-10 xl:gap-14 items-start">
            {/* Left: Premium Accordion Section (7 cols) */}
            <div className="lg:col-span-7 xl:col-span-8 space-y-4">
              <div className="space-y-4">
                {accordionItems.map((item) => {
                  const isOpen = activePanel === item.id;
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.id}
                      className="border border-gold/20 rounded-2xl overflow-hidden bg-white shadow-soft transition-all duration-300"
                    >
                      <button
                        type="button"
                        onClick={() => setActivePanel(isOpen ? null : item.id)}
                        className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none transition-all group select-none cursor-pointer hover:bg-cream/20"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-gradient-gold grid place-items-center text-walnut-deep group-hover:scale-105 transition-transform shrink-0 shadow-soft">
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="font-display font-semibold text-lg md:text-xl text-walnut-deep">
                            {item.title}
                          </span>
                        </div>
                        <div className={`p-1.5 rounded-full bg-cream/50 text-walnut-deep/60 group-hover:text-gold border border-gold/10 transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-gold bg-walnut-deep/5' : ''}`}>
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 md:px-6 pb-6 pt-2 border-t border-gold/5 bg-cream/5">
                              {item.content}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Glassmorphic Lead Capture Form (5 cols) */}
            <div className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-28">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`bg-walnut-deep rounded-3xl p-6 md:p-8 text-cream shadow-elegant border space-y-6 transition-all duration-700 ${success ? 'border-gold shadow-gold scale-[1.01]' : 'border-gold/20'}`}
              >
                <div>
                  <h3 className="font-display text-3xl text-cream mb-2">Request a Callback</h3>
                  <p className="text-xs text-cream/70 leading-relaxed">
                    Leave your details below, and our premium team will reach out shortly to assist with your requirements.
                  </p>
                  <div className="w-12 h-[1px] bg-gradient-gold mt-3" />
                </div>

                <form onSubmit={submit} className="space-y-4">
                  <div>
                    <label className="text-[10px] tracking-wider uppercase text-cream/70">Name</label>
                    <input
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="mt-1.5 w-full bg-white/5 border border-cream/15 focus:border-gold rounded-xl outline-none px-4 py-3 text-sm text-cream placeholder:text-cream/30 transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] tracking-wider uppercase text-cream/70">Phone Number</label>
                    <input
                      required
                      type="tel"
                      maxLength={15}
                      pattern="[0-9 +-]{7,15}"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="mt-1.5 w-full bg-white/5 border border-cream/15 focus:border-gold rounded-xl outline-none px-4 py-3 text-sm text-cream placeholder:text-cream/30 transition-all"
                      placeholder="+91 91110 92001"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] tracking-wider uppercase text-cream/70">Message</label>
                    <textarea
                      rows={3}
                      maxLength={1000}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="mt-1.5 w-full bg-white/5 border border-cream/15 focus:border-gold rounded-xl outline-none px-4 py-3 text-sm text-cream placeholder:text-cream/30 transition-all resize-none"
                      placeholder="Tell us what you're looking for…"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading || success}
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-gold text-walnut-deep px-6 py-3.5 rounded-full font-semibold hover:scale-[1.02] active:scale-95 transition-all shadow-gold cursor-pointer disabled:opacity-80 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <span className="animate-spin rounded-full h-4 w-4 border-2 border-walnut-deep border-t-transparent inline-block shrink-0" />
                        <span>Sending...</span>
                      </>
                    ) : success ? (
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="flex items-center gap-2"
                      >
                        <span className="font-bold text-base">✓</span>
                        <span>Request Sent</span>
                      </motion.div>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Request a Callback</span>
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* STICKY BOTTOM MOBILE CTA BAR */}
      <div className="fixed bottom-0 inset-x-0 z-50 md:hidden flex items-center justify-around bg-walnut-deep/95 backdrop-blur-md border-t border-gold/35 py-3 px-4 shadow-elegant gap-2.5 pb-safe">
        <a
          href="tel:+919111092001"
          className="flex-1 flex items-center justify-center gap-1 bg-walnut border border-gold/20 text-cream rounded-full py-2.5 text-xs font-semibold hover:bg-gold hover:text-walnut-deep active:scale-95 transition-all"
        >
          <Phone className="w-3.5 h-3.5" /> Call
        </a>
        <a
          href="https://wa.me/917869461895?text=Hi%20Aakash%20Furniture%2C%20I%27d%20like%20to%20enquire%20about%20your%20collection."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1 bg-[#25D366] text-white rounded-full py-2.5 text-xs font-semibold hover:scale-105 active:scale-95 transition-all shadow-soft"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-white text-white" /> WhatsApp
        </a>
        <a
          href="https://www.google.com/maps?cid=17449925441340534410&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en&gl=IN&source=embed"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1 bg-gradient-gold text-walnut-deep rounded-full py-2.5 text-xs font-semibold active:scale-95 transition-all shadow-gold"
        >
          <MapPin className="w-3.5 h-3.5" /> Directions
        </a>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
