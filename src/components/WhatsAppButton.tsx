import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
      href="https://wa.me/919876543210?text=Hi%20Aakash%20Furniture%2C%20I%27d%20like%20to%20enquire%20about%20your%20collection."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-[#25D366] text-white pl-3 pr-4 py-3 rounded-full shadow-elegant hover:scale-105 transition-transform"
    >
      <span className="relative grid place-items-center w-9 h-9 rounded-full bg-white/15">
        <MessageCircle className="w-5 h-5" fill="white" />
        <span className="absolute inset-0 rounded-full bg-white/30 animate-ping" />
      </span>
      <span className="hidden sm:inline text-sm font-semibold">Chat With Us</span>
    </motion.a>
  );
}
