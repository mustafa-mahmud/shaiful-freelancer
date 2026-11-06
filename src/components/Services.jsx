import { useState } from "react";
import { motion } from "framer-motion";
import {
  Target,
  Mail,
  Search,
  FileText,
  Linkedin,
  MapPin,
  Megaphone,
  Star,
  Image,
  Link,
  Sparkles,
  Phone,
  Send,
  ShoppingCart,
  Headphones,
} from "lucide-react";
import { SERVICES, SERVICE_CATEGORIES } from "../data/portfolio";

const ICONS = {
  Target,
  Mail,
  Search,
  FileText,
  Linkedin,
  MapPin,
  Megaphone,
  Star,
  Image,
  Link,
  Sparkles,
  Phone,
  Send,
  ShoppingCart,
  Headphones,
};

const SHOW_TAGS = 4;

export default function Services() {
  const [category, setCategory] = useState("all");
  const [expanded, setExpanded] = useState({});

  const filtered =
    category === "all"
      ? SERVICES
      : SERVICES.filter((s) => s.category === category);

  return (
    <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      <div className="text-center mb-10 md:mb-14">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
          My Services
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Fifteen specialized freelance services, from lead generation and web
          research to ecommerce store management and virtual assistance.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-10 md:mb-14">
        {SERVICE_CATEGORIES.map((cat) => {
          const active = category === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => setCategory(cat.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                active
                  ? "bg-teal-600 border-teal-600 text-white shadow-lg shadow-teal-500/30"
                  : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
              }`}
              role="button"
              aria-pressed={active}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {filtered.map((service) => {
          const Icon = ICONS[service.icon];
          const shown = expanded[service.id]
            ? service.tags
            : service.tags.slice(0, SHOW_TAGS);
          const more = service.tags.length - SHOW_TAGS;
          return (
            <motion.div
              key={service.id}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 24 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: service.id * 0.04 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl p-5 md:p-6 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 backdrop-blur-sm shadow-sm transition-all hover:shadow-xl hover:border-teal-500/40"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-teal-500/20 bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 group-hover:bg-gradient-to-br group-hover:from-teal-600 group-hover:to-indigo-600 group-hover:text-white transition-colors mb-4">
                <Icon size={20} strokeWidth={2.5} aria-hidden="true" />
              </div>
              <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-[10px] md:text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 font-medium mb-3">
                {service.categoryLabel}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {shown.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-[10px] md:text-xs text-slate-600 dark:text-slate-300 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {more > 0 && (
                <button
                  onClick={() =>
                    setExpanded((prev) => ({
                      ...prev,
                      [service.id]: !expanded[service.id],
                    }))
                  }
                  className="text-[10px] md:text-xs font-semibold text-teal-600 dark:text-teal-400 hover:underline hover:text-teal-500 dark:hover:text-teal-300 transition-colors"
                >
                  {expanded[service.id] ? "Show less" : `+${more} more`}
                </button>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
