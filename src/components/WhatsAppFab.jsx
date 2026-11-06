import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import { CONTACT } from "../data/portfolio";

export default function WhatsAppFab() {
  return (
    <a
      href={CONTACT.whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      aria-label="Chat with Mohammad Shaiful Alam on WhatsApp"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/40 ring-2 ring-white dark:ring-slate-900 transition-transform focus-visible:ring-2 focus-visible:ring-green-400"
      >
        <Phone className="h-6 w-6" aria-hidden="true" />
        <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-500 text-[10px] font-bold flex items-center justify-center text-white ring-2 ring-white dark:ring-slate-950">
          24/7
        </span>
      </motion.button>
    </a>
  );
}
