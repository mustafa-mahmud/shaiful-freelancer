import { Phone, Linkedin, Facebook, Briefcase, Globe } from "lucide-react";
import { FOOTER } from "../data/portfolio";

const ICONS = {
  Phone,
  Linkedin,
  Facebook,
  Briefcase,
  Globe,
};

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/50 dark:border-slate-800/50 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {FOOTER.copyright}
          </p>
          <div className="flex gap-4">
            {FOOTER.socials.map((social) => {
              const Icon = ICONS[social.icon];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 flex items-center justify-center hover:bg-teal-500 hover:text-white transition-all focus-visible:ring-2 focus-visible:ring-teal-500"
                  aria-label={social.label}
                >
                  {Icon ? (
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <span className="text-xs font-bold">{social.label[0]}</span>
                  )}
                </a>
              );
            })}
          </div>
        </div>
        <p className="mt-6 md:mt-0 text-xs text-slate-400 dark:text-slate-500 text-center md:text-right">
          Built with React, Tailwind CSS &amp; Framer Motion.
        </p>
      </div>
    </footer>
  );
}
