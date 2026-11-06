import { useState, useEffect, useCallback, useRef } from 'react';
import { useTheme } from '../hooks/useTheme';
import ThemeToggle from './ThemeToggle';
import { Menu, X, Phone } from 'lucide-react';
import { NAV, CONTACT } from '../data/portfolio';

export default function Navbar({ activeId, setActiveId }) {
  const { dark, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  const scrollTo = useCallback(
    (href) => {
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        const headerOffset = 72;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        setActiveId(id);
      }
      setOpen(false);
    },
    [setActiveId],
  );

  useEffect(() => {
    const handleClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-40 border-b border-slate-200/50 dark:border-slate-800/50 bg-white/60 dark:bg-slate-950/60 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-indigo-600 text-white font-heading font-bold text-sm shadow-lg shadow-teal-500/30">
                SF
              </div>
              <div>
                <div className="font-heading font-bold text-slate-900 dark:text-white tracking-tight">
                  Shaiful
                </div>
                <div className="text-xs text-teal-600 dark:text-teal-400 font-medium uppercase tracking-wider">
                  Freelancer
                </div>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {NAV.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(item.href);
                  }}
                  className={`text-sm font-medium transition-colors ${
                    activeId === item.href.replace('#', '')
                      ? 'text-teal-600 dark:text-teal-400'
                      : 'text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400'
                  }`}
                  aria-current={
                    activeId === item.href.replace('#', '') ? 'page' : undefined
                  }
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-3">
                <ThemeToggle />
                <a
                  href={CONTACT.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-semibold text-slate-700 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-teal-500"
                  aria-label="WhatsApp Mohammad Shaiful Alam"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setOpen((o) => !o)}
                className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-teal-500"
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
              >
                {open ? (
                  <X className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <Menu className="h-5 w-5" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t border-slate-200/50 dark:border-slate-800/50 bg-white dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-2">
              {NAV.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(item.href);
                  }}
                  className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-200/50 dark:border-slate-800/50 space-y-2">
                <a
                  href={CONTACT.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-teal-600 dark:hover:text-teal-400 transition-colors flex items-center gap-2"
                >
                  <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                  WhatsApp
                </a>
                <button
                  onClick={toggleTheme}
                  className="block w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                  aria-label={
                    dark ? 'Switch to light mode' : 'Switch to dark mode'
                  }
                >
                  {dark ? 'Light mode' : 'Dark mode'}
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
