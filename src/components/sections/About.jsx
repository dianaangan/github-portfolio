import { Code2, Smartphone, Database, ArrowUpRight } from 'lucide-react';
import Reveal from '../ui/Reveal';
import { PROFILE } from '../../data/profile';
const focusAreas = [
  { icon: Code2, title: 'Full-stack development', description: 'Thoughtful interfaces. Reliable backend services.', tools: 'C# / .NET / React / Next.js' },
  { icon: Smartphone, title: 'Mobile experiences', description: 'Connected experiences, wherever people are.', tools: 'React Native / Kotlin / Firebase' },
  { icon: Database, title: 'Business applications', description: 'Practical solutions to everyday complexity.', tools: 'SQL Server / REST APIs / Salesforce' },
];
export default function About() {
  return <section id="about" className="section-space about-grid">
    <Reveal className="focus-list">{focusAreas.map(({icon: Icon, title, description, tools}) => <div className="focus-card" key={title}><div className="flex justify-between gap-4"><h3>{title}</h3><Icon size={22} className="accent-text shrink-0" /></div><p>{description}</p><span>{tools}</span></div>)}</Reveal>
    <Reveal className="about-copy"><p className="eyebrow">01 / A little about me</p><h2>Curiosity drives me.<br />Building is how I learn.</h2><p className="about-lead">Hello! I’m Ma. Diana Rose Angan-angan, a software developer based in Cebu.</p><p className="muted leading-relaxed text-sm">{PROFILE.aboutBio}</p><a href="#experience" className="text-link focus-ring mt-7">My experience <ArrowUpRight size={16} /></a></Reveal>
  </section>;
}
