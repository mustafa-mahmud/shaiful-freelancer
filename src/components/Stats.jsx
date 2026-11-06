import { motion } from "framer-motion";
import { Clock, Briefcase, Globe } from "lucide-react";
import { useCountUp } from "../hooks/useCountUp";
import { STATS } from "../data/portfolio";

const ICONS = { Clock, Briefcase, Globe };

function StatCard({ stat }) {
  const [ref, count] = useCountUp({
    end: Number(stat.value.replace(/\D/g, "")) || 0,
    duration: 1.6,
  });
  const Icon = ICONS[stat.icon] || Briefcase;
  const suffix = stat.value.replace(/\d/g, "") || "+";
  return (
    <motion.div
      ref={ref}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 backdrop-blur-sm shadow-sm text-center hover:shadow-md transition-shadow"
    >
      <div className="flex justify-center mb-3">
        <Icon className="h-6 w-6 text-teal-500 dark:text-teal-400" aria-hidden="true" />
      </div>
      <div className="text-3xl md:text-4xl font-heading font-bold text-slate-900 dark:text-white tabular-nums">
        {count}{suffix}
      </div>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 font-medium">
        {stat.label}
      </p>
      {stat.note && (
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-500">
          {stat.note}
        </p>
      )}
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="bg-slate-100 dark:bg-slate-900 border-y border-slate-200/50 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {STATS.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
