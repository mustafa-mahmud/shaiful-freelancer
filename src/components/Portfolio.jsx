import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileSpreadsheet,
  Mail,
  Image,
  Store,
  Home,
  ExternalLink,
} from 'lucide-react';
import { portfolioSection, portfolios } from '../data/portfolio';

const ICON_BY_TITLE = {
  'Lead Generation': FileSpreadsheet,
  'Email Collect': Mail,
  'Image Edit': Image,
  'Property Listing': Home,
};

const categories = [
  'All',
  ...new Set(portfolios.map((portfolio) => portfolio.category)),
];

export default function Portfolio() {
  const [category, setCategory] = useState('All');

  const filtered =
    category === 'All'
      ? portfolios
      : portfolios.filter((portfolio) => portfolio.category === category);

  return (
    <section
      id="portfolio"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28"
    >
      <div className="text-center mb-10 md:mb-14">
        <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] md:text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/20 border border-teal-500/20">
          {portfolioSection.eyebrow}
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
          {portfolioSection.title}
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          {portfolioSection.subtitle}
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-10 md:mb-14">
        {categories.map((cat) => {
          const active = category === cat;
          return (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                active
                  ? 'bg-teal-600 border-teal-600 text-white shadow-lg shadow-teal-500/30'
                  : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
              }`}
              role="button"
              aria-pressed={active}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
        <AnimatePresence mode="wait">
          {filtered.map((portfolio, i) => {
            const Icon = ICON_BY_TITLE[portfolio.title] ?? Store;
            return (
              <a
                key={portfolio.id}
                href={portfolio.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${portfolio.title} sample in a new tab`}
                className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:focus-visible:ring-offset-slate-950 rounded-md"
              >
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 24 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  whileHover={{ y: -6 }}
                  layout
                  className="group relative rounded-2xl p-5 md:p-6 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 backdrop-blur-sm shadow-sm transition-all hover:shadow-xl hover:border-teal-500/40"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-teal-500/20 bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 group-hover:bg-gradient-to-br group-hover:from-teal-600 group-hover:to-indigo-600 group-hover:text-white transition-colors mb-4">
                    <Icon size={20} strokeWidth={2.5} aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {portfolio.title}
                  </h3>
                  <p className="text-[10px] md:text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 font-medium mb-3">
                    {portfolio.category}
                  </p>
                  <div className="mt-auto flex items-center gap-1.5 px-2 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-[10px] md:text-xs font-semibold text-slate-600 dark:text-slate-300 transition-colors group-hover:text-teal-600 dark:group-hover:text-teal-400">
                    View Sample
                    <ExternalLink
                      size={12}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </div>
                </motion.div>
              </a>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}
