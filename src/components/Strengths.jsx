import { motion } from "framer-motion";
import { CheckCircle, ShieldCheck, Database, Calendar, UserCog, HandHeart } from "lucide-react";
import { STRENGTHS } from "../data/portfolio";

const ICONS = {
  CheckCircle,
  ShieldCheck,
  Database,
  Calendar,
  UserCog,
  HandHeart,
};

export default function Strengths() {
  return (
    <section id="strengths" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
          Professional Strengths
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          What clients consistently value in my work — accuracy, reliability,
          and long-term partnership.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-5 md:gap-6">
        {STRENGTHS.map((strength, i) => {
          const Icon = ICONS[Object.keys(ICONS)[i]];
          return (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl p-6 md:p-7 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 backdrop-blur-sm shadow-sm transition-all hover:border-teal-500/50"
            >
              <div className="h-10 w-10 rounded-xl border border-teal-500/20 bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-4">
                <Icon size={20} strokeWidth={2} aria-hidden="true" />
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                {strength}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
