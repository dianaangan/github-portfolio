import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Download, Menu, Moon, Sun, X } from 'lucide-react';
import { PROFILE } from '../../data/profile';
import { NAVIGATION } from '../../data/navigation';
import SocialLinks from '../ui/SocialLinks';
import { scrollToSection } from '../../hooks/useActiveSection';

export default function MobileNav({ activeSection, darkMode, onToggleDarkMode }) {
  const [open, setOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const initials = `${PROFILE.name.first[0]}${PROFILE.name.last[0]}`;

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleNavigate = (id) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <>
      <header className="lg:hidden fixed top-0 inset-x-0 z-50 h-16 flex items-center justify-between px-4 sm:px-6 bg-white/90 dark:bg-ink-950/90 backdrop-blur-sm border-b border-slate-200 dark:border-ink-700">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavigate('hero');
          }}
          className="focus-ring flex items-center gap-2.5"
        >
          <span className="w-8 h-8 rounded-lg bg-slate-900 dark:bg-accent-400 text-white dark:text-ink-950 font-display font-semibold text-xs flex items-center justify-center">
            {initials}
          </span>
          <span className="font-display font-semibold text-sm text-slate-900 dark:text-white">
            {PROFILE.name.first} {PROFILE.name.last}
          </span>
        </a>

        <button
          onClick={() => setOpen(true)}
          className="focus-ring p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          aria-label="Open navigation menu"
          aria-expanded={open}
        >
          <Menu size={22} strokeWidth={1.75} />
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="lg:hidden fixed inset-0 z-[60] bg-white dark:bg-ink-950 flex flex-col"
            initial={shouldReduceMotion ? undefined : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="h-16 flex items-center justify-between px-4 sm:px-6 border-b border-slate-200 dark:border-ink-700 flex-shrink-0">
              <span className="font-display font-semibold text-sm text-slate-900 dark:text-white">Menu</span>
              <button
                onClick={() => setOpen(false)}
                className="focus-ring p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="Close navigation menu"
              >
                <X size={22} strokeWidth={1.75} />
              </button>
            </div>

            <nav aria-label="Section navigation" className="flex-1 overflow-y-auto px-6 py-8">
              <ul className="space-y-1">
                {NAVIGATION.map((item, idx) => {
                  const isActive = activeSection === item.id;
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => handleNavigate(item.id)}
                        className="focus-ring group flex items-center gap-4 py-3 w-full text-left"
                      >
                        <span
                          className={`font-mono text-xs ${
                            isActive ? 'text-accent-700 dark:text-accent-400' : 'text-slate-300 dark:text-ink-600'
                          }`}
                        >
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span
                          className={`font-display text-xl font-medium ${
                            isActive ? 'text-slate-900 dark:text-white' : 'text-slate-400 dark:text-slate-500'
                          }`}
                        >
                          {item.label}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="px-6 py-6 border-t border-slate-200 dark:border-ink-700 flex-shrink-0">
              <div className="flex items-center justify-between">
                <SocialLinks className="-ml-2.5" />
                <button
                  onClick={onToggleDarkMode}
                  className="focus-ring p-2.5 rounded-lg text-slate-400 dark:text-slate-500 hover:text-accent-600 dark:hover:text-accent-400 hover:bg-slate-100 dark:hover:bg-ink-800 transition-colors"
                  aria-label="Toggle theme"
                >
                  {darkMode ? <Sun size={18} strokeWidth={1.75} /> : <Moon size={18} strokeWidth={1.75} />}
                </button>
              </div>
              <a
                href={PROFILE.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring mt-4 inline-flex items-center gap-2 font-mono text-xs text-slate-500 dark:text-slate-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
              >
                <Download size={13} /> resume.pdf
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
