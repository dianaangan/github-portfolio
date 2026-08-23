import { PROFILE } from '../data/profile';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-ink-700 py-8 text-center">
      <p className="font-mono text-xs text-slate-400 dark:text-slate-500">{PROFILE.copyright}</p>
    </footer>
  );
}
