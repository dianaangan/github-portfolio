import { ArrowUpRight, Moon, Sun } from 'lucide-react';
import { PROFILE } from '../../data/profile';
import { NAVIGATION } from '../../data/navigation';
export default function Sidebar({ activeSection, darkMode, onToggleDarkMode }) {
  return <header className="desktop-header"><div className="page-width flex items-center justify-between gap-8 h-24">
    <a href="#hero" className="brand focus-ring">Diana<span className="accent-text">.</span><span className="brand-suffix"> / developer</span></a>
    <nav aria-label="Section navigation" className="flex items-center gap-6">{NAVIGATION.map(item => <a key={item.id} href={`#${item.id}`} aria-current={activeSection === item.id ? 'true' : undefined} className={`nav-link focus-ring ${activeSection === item.id ? 'is-active' : ''}`}>{item.label}</a>)}</nav>
    <div className="flex items-center gap-5"><button onClick={onToggleDarkMode} className="focus-ring muted" aria-label="Toggle theme">{darkMode ? <Sun size={18} /> : <Moon size={18} />}</button><a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="text-link focus-ring">GitHub <ArrowUpRight size={15} /></a></div>
  </div></header>;
}
