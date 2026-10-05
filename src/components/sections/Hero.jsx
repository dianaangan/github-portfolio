import { ArrowUpRight, FileText, MapPin } from 'lucide-react';
import { PROFILE, FULL_NAME } from '../../data/profile';
import Reveal from '../ui/Reveal';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="page-width hero-grid">
        <Reveal className="hero-copy">
          <p className="eyebrow">Software developer · Cebu, Philippines</p>
          <h1>Ma. Diana Rose<br />Angan-Angan</h1>
          <p className="hero-role">Software development, with a practical approach.</p>
          <p className="hero-description">{PROFILE.heroBio}</p>
          <div className="flex flex-wrap items-center gap-6 mt-8">
            <a href="#projects" className="btn-solid focus-ring">View selected work <ArrowUpRight size={17} /></a>
            <a href={PROFILE.resumePath} target="_blank" rel="noopener noreferrer" className="text-link focus-ring"><FileText size={17} /> View résumé / CV</a>
          </div>
          <p className="hero-context">Previously at Logicim Inc. and Accenture</p>
        </Reveal>
        <Reveal className="portrait-composition">
          <div className="portrait-frame"><img src={PROFILE.photoPath} alt={`Portrait of ${FULL_NAME}`} width="1041" height="1230" fetchPriority="high" /></div>
          <p className="portrait-caption"><MapPin size={13} /> {PROFILE.location}</p>
        </Reveal>
      </div>
    </section>
  );
}
