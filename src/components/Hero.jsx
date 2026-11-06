import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Send } from 'lucide-react';
import Avatar from './Avatar';
import { SITE, CONTACT } from '../data/portfolio';

const TYPE_SPEED = 70;
const DELETE_SPEED = 35;
const PAUSE = 1500;

export default function Hero() {
  const [text, setText] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [step, setStep] = useState(0);
  const roles = SITE.heroRoles;
  const current = roles[roleIdx];

  useEffect(() => {
    let next;
    if (!deleting && text === current) {
      next = setTimeout(() => setDeleting(true), PAUSE);
    } else if (deleting && text === '') {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
    } else {
      setText(
        deleting
          ? current.slice(0, text.length - 1)
          : current.slice(0, text.length + 1),
      );
      next = setTimeout(
        () => setStep((s) => s + 1),
        deleting ? DELETE_SPEED : TYPE_SPEED,
      );
    }
    return () => clearTimeout(next);
  }, [text, deleting, roleIdx, step, current, roles.length]);

  return (
    <section
      id="hero"
      className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32"
    >
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Avatar + Badges: Mobile e upore (order-1), Desktop e bam pashe (order-1) */}
        <div className="order-1 lg:order-1">
          <div className="relative">
            <Avatar size={110} className="mx-auto lg:mx-none lg:ml-6" />
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-indigo-600 rounded-full blur opacity-30 animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
          </div>
          <div className="mt-6 md:mt-10 flex flex-wrap justify-center gap-3">
            <Badge
              href={CONTACT.upwork}
              label="Upwork"
              color="bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20"
            />
            <Badge
              href={CONTACT.fiverr}
              label="Fiverr"
              color="bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20"
            />
          </div>
        </div>

        {/* Text Content: Mobile e niche (order-2), Desktop e dan pashe (order-2) */}
        <div className="order-2 lg:order-2 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-500/20 bg-teal-50/60 dark:bg-teal-900/30 px-3 py-1 text-xs font-semibold text-teal-600 dark:text-teal-400">
              <span
                className="relative flex h-1.5 w-1.5 rounded-full bg-teal-500 dark:bg-teal-400 animate-pulse"
                aria-hidden="true"
              />
              Available for hire
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-balance font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight"
          >
            Mohammad Shaiful Alam
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-indigo-500 to-purple-500 dark:from-teal-400">
              {'Shaiful'}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="h-8 md:h-10 overflow-hidden flex items-end"
          >
            <span className="font-heading text-2xl md:text-3xl font-bold text-slate-500 dark:text-slate-300">
              {SITE.shortName}, the
            </span>
            <span className="text-teal-600 dark:text-teal-400">
              <TypewriterText text={text} />
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 text-balance max-w-xl leading-relaxed"
          >
            {SITE.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href={CONTACT.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-br from-teal-500 to-indigo-600 text-white font-semibold text-sm hover:from-teal-600 hover:to-indigo-700 shadow-lg shadow-teal-500/25 transition-all focus-visible:ring-2 focus-visible:ring-teal-500"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              Hire Me on WhatsApp
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('services');
                if (el)
                  window.scrollTo({
                    top: el.offsetTop - 70,
                    behavior: 'smooth',
                  });
              }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-100 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-teal-500"
            >
              View Services{' '}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </motion.div>

          <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-500">
            {SITE.subRoles.map((role) => (
              <span
                key={role}
                className="px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ href, label, color }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold ${color} hover:opacity-90 transition-opacity focus-visible:ring-2 focus-visible:ring-teal-500`}
      aria-label={label}
    >
      <span
        className="h-2 w-2 rounded-full bg-current opacity-80"
        aria-hidden="true"
      />
      {label}
    </a>
  );
}

function TypewriterText({ text }) {
  const [chars, setChars] = useState(text);
  useEffect(() => {
    setChars(text);
  }, [text]);
  return (
    <span className="relative inline-block">
      {chars.split('').map((ch, i) => (
        <span
          key={i}
          className="inline-block"
          style={{ animationDelay: `${i * 0.03}s` }}
        >
          {ch === ' ' ? '\u00A0' : ch}
        </span>
      ))}
    </span>
  );
}
