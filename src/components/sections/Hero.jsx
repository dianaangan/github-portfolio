import { ArrowDown, ArrowUpRight, Download, Code2, MapPin } from 'lucide-react';
import { PROFILE } from '../../data/profile';
import { PROJECTS } from '../../data/projects';
import Reveal from '../ui/Reveal';
export default function Hero() {
  return <section id="hero" className="hero-section">
    <div className="page-width hero-grid">
      <Reveal className="hero-copy">
        <div className="availability"><span className="status-dot" /> Available for opportunities</div>
        <p className="hero-intro">Hi, I’m Diana.</p>
        <h1>Thoughtful code.<br />Real-world <span className="accent-text">impact.</span></h1>
        <p className="hero-role">{PROFILE.title} <span className="muted">/ Full-stack & mobile</span></p>
        <p className="hero-description">I turn complex problems into reliable, intuitive software — from business applications to experiences that connect people.</p>
        <div className="flex flex-wrap items-center gap-6 mt-8"><a href="#projects" className="btn-solid focus-ring">Explore my work <ArrowUpRight size={17} /></a><a href={PROFILE.resumePath} target="_blank" rel="noopener noreferrer" className="text-link focus-ring"><Download size={15} /> Résumé</a></div>
        <div className="hero-facts"><div><strong>{String(PROJECTS.length).padStart(2, '0')}</strong><span>Featured<br />projects</span></div><div><strong>2026</strong><span>BSIT<br />graduate</span></div><div className="hero-location"><MapPin size={16} /><span>Cebu City,<br />Philippines</span></div></div>
      </Reveal>
      <Reveal className="portrait-composition"><div className="portrait-orbit" aria-hidden="true" /><span className="portrait-code" aria-hidden="true">&lt;hello /&gt;</span><div className="portrait-frame"><img src={PROFILE.photoPath} alt="Ma. Diana Rose Angan-angan" fetchPriority="high" /></div><div className="portrait-note"><Code2 size={25} /><div><strong>Built with purpose.</strong><span>Web · Mobile · Enterprise</span></div></div><p className="portrait-caption">MA. DIANA ROSE ANGAN-ANGAN</p></Reveal>
    </div>
    <div className="page-width hero-bottom"><span>IDEAS INTO INTERFACES. LOGIC INTO SOLUTIONS.</span><a href="#about" className="focus-ring flex items-center gap-3">Scroll to explore <ArrowDown size={14} /></a></div>
  </section>;
}
