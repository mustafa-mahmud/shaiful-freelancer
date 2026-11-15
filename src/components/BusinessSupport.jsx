import { motion } from "framer-motion";
import {
  Shirt,
  Fish,
  TrendingUp,
  Handshake,
  FileText,
  Store,
  ExternalLink,
} from "lucide-react";
import { BUSINESS_SUPPORT, SITE } from "../data/portfolio";

const ICONS = {
  Shirt,
  Fish,
  TrendingUp,
  Handshake,
  FileText,
  Store,
  ExternalLink,
};

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    const headerOffset = 72;
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition =
      elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  }
}

export default function BusinessSupport() {
  return (
    <section
      id="business-support"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28"
    >
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6 mb-12"
      >
        <div className="inline-flex items-center gap-2 rounded-lg border border-teal-500/20 bg-teal-50/60 dark:bg-teal-900/30 px-4 py-2 text-sm font-semibold text-teal-600 dark:text-teal-400">
          <Shirt className="h-4 w-4" aria-hidden="true" />
          {BUSINESS_SUPPORT.eyebrow}
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
          {BUSINESS_SUPPORT.title}
        </h2>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
          {BUSINESS_SUPPORT.intro}
        </p>
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12"
      >
        {BUSINESS_SUPPORT.categories.map((category) => {
          const Icon = ICONS[category.icon];
          return (
            <div key={category.id} className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="shrink-0 h-8 w-8 rounded-xl border border-teal-500/20 bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 flex items-center justify-center mt-0.5">
                  {Icon && <Icon className="h-5 w-5" aria-hidden="true" />}
                </div>
                <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                {category.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12"
      >
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 backdrop-blur p-6 shadow-sm space-y-5">
          <div className="flex items-start gap-3">
            <div className="shrink-0 h-8 w-8 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mt-0.5">
              <Handshake className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
              {BUSINESS_SUPPORT.cta.title}
            </h3>
          </div>
          {BUSINESS_SUPPORT.cta.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-slate-600 dark:text-slate-300 leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href={SITE.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-br from-teal-500 to-indigo-600 text-white font-semibold text-sm text-center sm:text-left hover:from-teal-600 hover:to-indigo-700 shadow-lg shadow-teal-500/25 transition-all focus-visible:ring-2 focus-visible:ring-teal-500"
            >
              WhatsApp Me
            </a>
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-teal-500"
            >
              Contact Me
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {BUSINESS_SUPPORT.resources.map((resource) => {
            const Icon = ICONS[resource.icon];
            return (
              <a
                key={resource.id}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 backdrop-blur shadow-sm hover:shadow-md transition-all group"
                aria-label={resource.label}
              >
                <div className="shrink-0 h-10 w-10 rounded-xl border border-teal-500/20 bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {Icon && <Icon size={20} strokeWidth={2} aria-hidden="true" />}
                </div>
                <p className="text-sm font-medium text-slate-900 dark:text-white min-w-0">
                  {resource.label}
                </p>
                <ExternalLink
                  className="ml-auto h-4 w-4 shrink-0 text-slate-400 dark:text-slate-500 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors"
                  aria-hidden="true"
                />
              </a>
            );
          })}
          <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">
            {BUSINESS_SUPPORT.resourcesNote}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
