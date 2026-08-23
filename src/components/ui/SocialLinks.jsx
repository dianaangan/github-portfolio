import { Github, Linkedin, Mail } from 'lucide-react';
import { PROFILE } from '../../data/profile';

const LINKS = [
  { href: `mailto:${PROFILE.email}`, label: 'Email', icon: Mail, external: false },
  { href: PROFILE.github, label: 'GitHub', icon: Github, external: true },
  { href: PROFILE.linkedin, label: 'LinkedIn', icon: Linkedin, external: true },
];

export default function SocialLinks({ className = '', iconSize = 18 }) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {LINKS.map(({ href, label, icon: Icon, external }) => (
        <a
          key={label}
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          aria-label={label}
          className="focus-ring p-2.5 rounded-lg text-slate-400 dark:text-slate-500 hover:text-accent-600 dark:hover:text-accent-400 hover:bg-slate-100 dark:hover:bg-ink-800 transition-colors"
        >
          <Icon size={iconSize} strokeWidth={1.75} />
        </a>
      ))}
    </div>
  );
}
