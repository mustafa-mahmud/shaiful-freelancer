import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { EXPERIENCE, EXPERIENCE_HIGHLIGHTS } from '../data/portfolio';

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28"
    >
      <div className="text-center mb-10 md:mb-14">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
          Experience
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Over 12 years of freelancing across Upwork, Fiverr, and
          Freelancer.com.
        </p>
      </div>

      <div className="relative max-w-2xl mx-auto">
        <div
          className="absolute left-2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-slate-300 via-teal-500 to-slate-300 dark:from-slate-700 dark:via-teal-500 dark:to-slate-700"
          aria-hidden="true"
        />
        {EXPERIENCE.map((item, i) => (
          <motion.div
            key={item.id}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative mb-14 md:mb-20 pl-8"
          >
            <div
              className="absolute left-0 top-2.5 h-3 w-3 rounded-full border-2 border-teal-500 dark:border-teal-400 bg-white dark:bg-slate-950 shadow"
              aria-hidden="true"
            />
            <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-0 md:justify-between">
              <div className="min-w-0">
                <span className="text-xs font-semibold text-teal-600 dark:text-teal-400 tracking-wide uppercase">
                  {item.org}
                </span>
                <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                  {item.role}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-1">
                  {item.period}
                </p>
              </div>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 md:mt-0 md:ml-auto inline-flex items-center gap-2 rounded-lg border border-teal-500/20 bg-teal-50/60 dark:bg-teal-900/20 px-3 py-1.5 text-xs font-semibold text-teal-600 dark:text-teal-400 hover:bg-teal-500 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-teal-500"
                aria-label={`View ${item.org} profile`}
              >
                View Profile{' '}
                <ExternalLink className="h-3 w-3" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-14 md:mt-20 border-t border-slate-200 dark:border-slate-800 pt-8 md:pt-12">
        <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-6">
          Career Highlights
        </h3>
        <ul className="space-y-4">
          {EXPERIENCE_HIGHLIGHTS.map((h, i) => (
            <li
              key={i}
              className="flex items-start gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/30"
            >
              <span
                className="shrink-0 h-5 w-5 rounded-full bg-teal-500 text-white text-xs flex items-center justify-center"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {h}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
