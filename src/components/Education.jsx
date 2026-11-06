import { motion } from "framer-motion";
import { GraduationCap, Building2 } from "lucide-react";
import { EDUCATION } from "../data/portfolio";

const ICONS = { GraduationCap, Building2 };

export default function Education() {
  return (
    <section id="education" className="bg-slate-100 dark:bg-slate-900 border-y border-slate-200/50 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
            Education
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Academic foundation completed in Chittagong, Bangladesh.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {EDUCATION.map((edu, i) => {
            const Icon = ICONS[Object.keys(ICONS)[i]];
            return (
              <motion.div
                key={i}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 backdrop-blur-sm shadow-sm"
              >
                <div className="h-10 w-10 rounded-xl border border-indigo-500/20 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4">
                  <Icon size={20} strokeWidth={2} aria-hidden="true" />
                </div>
                <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-1">
                  {edu.degree}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                  {edu.school}, {edu.city}
                </p>
                <p className="text-xs font-semibold text-teal-600 dark:text-teal-400">
                  {edu.period}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
