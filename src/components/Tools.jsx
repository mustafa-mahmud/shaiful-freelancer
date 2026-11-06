import { motion } from "framer-motion";
import { TOOLS } from "../data/portfolio";

export default function Tools() {
  return (
    <section id="tools" className="bg-slate-100 dark:bg-slate-900 border-y border-slate-200/50 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
            Platforms &amp; Tools
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            E-commerce & listing platforms I work with daily.
          </p>
        </div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 md:p-6 shadow-sm"
        >
          <div className="flex items-center gap-4 md:gap-6 animate-marquee duration-[30s] linear infinite w-max">
            {TOOLS.flatMap((t) => [t, t]).map((tool) => (
              <span
                key={tool}
                className="whitespace-nowrap px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 text-sm font-medium text-slate-600 dark:text-slate-300 backdrop-blur"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
