import { Download, Moon, Sun } from 'lucide-react';
import { PROFILE } from '../../data/profile';
import { NAVIGATION } from '../../data/navigation';
import SocialLinks from '../ui/SocialLinks';
import { scrollToSection } from '../../hooks/useActiveSection';

export default function Sidebar({ activeSection, darkMode, onToggleDarkMode }) {
  return (
    <header className="hidden lg:flex lg:flex-col lg:justify-between lg:fixed lg:inset-y-0 lg:left-0 lg:w-[340px] xl:w-[400px] px-12 py-14 border-r border-slate-200 dark:border-ink-700 bg-white dark:bg-ink-950">
      <div>
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
          className="focus-ring inline-block font-display text-2xl font-bold text-slate-900 dark:text-white leading-tight"
        >
          {PROFILE.name.first}
          <br />
          {PROFILE.name.last}
        </a>
        <p className="mt-3 font-mono text-[13px] text-accent-700 dark:text-accent-400">{PROFILE.title}</p>

        <div className="inline-flex items-center gap-2 mt-6">
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex w-full h-full rounded-full bg-accent-500 dark:bg-accent-400 animate-pulse-dot" />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
            Open to work
          </span>
        </div>
      </div>

      <nav aria-label="Section navigation" className="mt-10">
        <ul className="space-y-1">
          {NAVIGATION.map((item, idx) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className="focus-ring group flex items-center gap-4 py-2"
                  aria-current={isActive ? 'true' : undefined}
                >
                  <span
                    className={`h-px transition-all duration-300 ${
                      isActive
                        ? 'w-10 bg-accent-500 dark:bg-accent-400'
                        : 'w-5 bg-slate-300 dark:bg-ink-600 group-hover:w-10 group-hover:bg-slate-500 dark:group-hover:bg-slate-400'
                    }`}
                  />
                  <span
                    className={`font-mono text-xs tracking-wide transition-colors ${
                      isActive
                        ? 'text-slate-900 dark:text-white'
                        : 'text-slate-400 dark:text-slate-500 group-hover:text-slate-800 dark:group-hover:text-slate-200'
                    }`}
                  >
                    {String(idx + 1).padStart(2, '0')}
                    <span className="ml-2 font-sans text-[13px] font-medium">{item.label}</span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-10">
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
    </header>
  );
}
