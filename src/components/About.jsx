import { motion } from "framer-motion";
import { Quote, MapPin, Clock, Briefcase, Target } from "lucide-react";
import { SITE } from "../data/portfolio";

const ICONS = { MapPin, Clock, Briefcase };

export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -30 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-lg border border-teal-500/20 bg-teal-50/60 dark:bg-teal-900/30 px-4 py-2 text-sm font-semibold text-teal-600 dark:text-teal-400">
            <Quote className="h-4 w-4" aria-hidden="true" />
            About Me
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Professional Summary
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            {SITE.summary}
          </p>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 30 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 backdrop-blur p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                <Target className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                Professional Objective
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              {SITE.objective}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <StatRow label="Location" value={SITE.location} icon="MapPin" />
            <StatRow label="Experience" value="12+ years" icon="Clock" />
            <StatRow label="Upwork Projects" value="130+" icon="Briefcase" />
            <StatRow label="Fiverr Projects" value="100+" icon="Briefcase" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatRow({ label, value, icon }) {
  const Icon = ICONS[icon];
  return (
    <div className="flex items-start gap-3 p-3 rounded-xl border border-slate-100 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/30">
      {Icon && <Icon className="shrink-0 h-5 w-5 text-slate-400 dark:text-slate-600 mt-0.5" aria-hidden="true" />}
      <div>
        <p className="text-xs text-slate-500 dark:text-slate-500 font-medium uppercase tracking-wider">
          {label}
        </p>
        <p className="text-sm font-semibold text-slate-900 dark:text-white">{value}</p>
      </div>
    </div>
  );
}
