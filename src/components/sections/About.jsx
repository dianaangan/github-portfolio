import { Code2, Smartphone, Database, ArrowUpRight } from 'lucide-react';
import Reveal from '../ui/Reveal';
import { PROFILE, FULL_NAME } from '../../data/profile';
const focusAreas = [
  { icon: Code2, title: 'Full-stack development', description: 'Interfaces, APIs, and database-backed features.', tools: 'C# / .NET / React / Next.js' },
  { icon: Smartphone, title: 'Mobile experiences', description: 'Android and cross-platform application projects.', tools: 'React Native / Kotlin / Firebase' },
  { icon: Database, title: 'Business applications', description: 'Workflow fixes, reporting, and CRM administration.', tools: 'SQL Server / REST APIs / Salesforce' },
];
export default function About() {
  return <section id="about" className="section-space about-grid">
    <Reveal className="focus-list">{focusAreas.map(({icon: Icon, title, description, tools}) => <div className="focus-card" key={title}><div className="flex justify-between gap-4"><h3>{title}</h3><Icon size={22} className="accent-text shrink-0" /></div><p>{description}</p><span>{tools}</span></div>)}</Reveal>
    <Reveal className="about-copy"><p className="eyebrow">About</p><h2>A flexible approach to development.</h2><p className="about-lead">I’m {FULL_NAME}, a BS Information Technology graduate of the University of Cebu.</p><p className="muted leading-relaxed text-sm">{PROFILE.aboutBio}</p><a href="#experience" className="text-link focus-ring mt-7">My experience <ArrowUpRight size={16} /></a></Reveal>
  </section>;
}
