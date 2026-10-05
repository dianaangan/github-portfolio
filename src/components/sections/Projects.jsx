import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { EASE } from '../../lib/motion';
import { ArrowUpRight, Github, Plus, Minus } from 'lucide-react';
import Reveal from '../ui/Reveal';
import { PROJECTS } from '../../data/projects';
export default function Projects({ onImageClick }) {
  const reduceMotion = useReducedMotion();
  const [expanded, setExpanded] = useState({});
  return <section id="projects" className="section-space">
    <Reveal className="section-intro"><div><p className="eyebrow">Selected work</p><h2>Projects</h2></div><p>Selected web and mobile applications.<br />Browse the screenshots and source code.</p></Reveal>
    <div className="project-grid">{PROJECTS.map((project, index) => <Reveal key={project.id} className={`project-card project-${index}`}>
      <div className="project-heading"><div><p className="eyebrow">0{index + 1} / {project.projectType}</p><h3>{project.title}</h3></div><a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on GitHub`} className="circle-link focus-ring"><ArrowUpRight size={24} /></a></div>
      <button className={`project-cover focus-ring ${project.imageLayout === 'landscape' ? 'web-cover' : 'mobile-cover'}`} onClick={() => onImageClick(project.images[0], `${project.title} — Screenshot 1`)} aria-label={`Enlarge ${project.title} preview`}>
        {project.imageLayout === 'landscape' ? <><div className="browser-chrome" aria-hidden="true"><i /><i /><i /><span>food finder / web application</span></div><img src={project.images[0]} alt={`${project.title} application preview`} loading="lazy" /></> : <div className="phone-pair"><img src={project.images[0]} alt={`${project.title} application preview`} loading="lazy" /><img src={project.images[1]} alt={`${project.title} second screen`} loading="lazy" /></div>}
        <span className="preview-label"><Plus size={14} /> View preview</span>
      </button>
      <div className="project-summary"><p className="project-subtitle">{project.subtitle}</p><p className="muted text-sm leading-relaxed mt-3">{project.description}</p><div className="flex flex-wrap gap-2 mt-5">{project.tech.slice(0, 5).map(tech => <span className="tag" key={tech}>{tech}</span>)}</div></div>
      <button className="project-details-toggle focus-ring" aria-expanded={!!expanded[project.id]} aria-controls={`details-${project.id}`} onClick={() => setExpanded(prev => ({...prev, [project.id]: !prev[project.id]}))}>{expanded[project.id] ? 'Less detail' : 'Project details & gallery'}{expanded[project.id] ? <Minus size={16} /> : <Plus size={16} />}</button>
      <motion.div id={`details-${project.id}`} initial={false} animate={{ height: expanded[project.id] ? 'auto' : 0, opacity: expanded[project.id] ? 1 : 0 }} transition={{ duration: reduceMotion ? 0 : 0.3, ease: EASE }} className="project-details-panel" aria-hidden={!expanded[project.id]} inert={!expanded[project.id] ? '' : undefined}><div className="project-details"><p className="eyebrow mb-4">{project.role} · {project.date}</p><ul className="feature-list">{project.features.map(feature => <li key={feature}>{feature}</li>)}</ul><div className="flex flex-wrap gap-2 my-5">{project.tech.map(tech => <span className="tag" key={tech}>{tech}</span>)}</div><div className="project-thumbnails">{project.images.map((src, i) => <button className="focus-ring" key={src} onClick={() => onImageClick(src, `${project.title} — Screenshot ${i + 1}`)}><img src={src} alt={`${project.title} screenshot ${i + 1}`} loading="lazy" /></button>)}</div><a href={project.github} target="_blank" rel="noopener noreferrer" className="text-link focus-ring mt-5"><Github size={16} /> View source code</a></div></motion.div>
    </Reveal>)}<Reveal className="more-work"><p className="eyebrow">Source code</p><h3>More on GitHub</h3><p className="muted text-sm leading-relaxed">Browse my repositories for implementation details and other projects.</p><a href="https://github.com/dianaangan" target="_blank" rel="noopener noreferrer" className="text-link focus-ring">Explore GitHub <ArrowUpRight size={18} /></a></Reveal></div>
  </section>;
}
