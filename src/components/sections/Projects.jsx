import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, CheckCircle2 } from 'lucide-react';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import { PROJECTS } from '../../data/projects';
import { IMAGE_PLACEHOLDER } from '../../data/profile';
import { fadeInUp } from '../../lib/motion';

export default function Projects({ onImageClick }) {
  const [showAllImages, setShowAllImages] = useState({});

  const toggleShowAllImages = (projectId) => {
    setShowAllImages((prev) => ({ ...prev, [projectId]: !prev[projectId] }));
  };

  return (
    <section id="projects" className="py-24 lg:py-28 scroll-mt-24 lg:scroll-mt-12">
      <Reveal>
        <SectionHeading index="03" title="Projects" />
      </Reveal>

      <div className="space-y-16 lg:space-y-20">
        {PROJECTS.map((project, idx) => {
          const [cover, ...rest] = project.images ?? [];
          const thumbs = showAllImages[project.id] ? rest : rest.slice(0, 3);
          const flip = idx % 2 === 1;

          return (
            <Reveal
              key={project.id}
              variants={fadeInUp}
              className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-start"
            >
              <div className={`lg:col-span-2 ${flip ? 'lg:order-2' : 'lg:order-1'}`}>
                {cover && (
                  <motion.button
                    type="button"
                    onClick={() => onImageClick(cover, `${project.title} — Screenshot 1`)}
                    className="focus-ring glow-hover group relative block w-full overflow-hidden rounded-xl border border-slate-200 dark:border-ink-700 bg-slate-50 dark:bg-ink-900"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <img
                      src={cover}
                      alt={`${project.title} main screenshot`}
                      className="w-full h-72 sm:h-80 lg:h-96 object-cover object-top"
                      onError={(e) => {
                        e.target.src = IMAGE_PLACEHOLDER;
                      }}
                    />
                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors flex items-center justify-center">
                      <ExternalLink
                        size={20}
                        className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </motion.button>
                )}

                {rest.length > 0 && (
                  <div className="flex items-center gap-2 mt-3 flex-wrap">
                    {thumbs.map((image, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => onImageClick(image, `${project.title} — Screenshot ${i + 2}`)}
                        className="focus-ring w-12 h-12 rounded-lg overflow-hidden border border-slate-200 dark:border-ink-700 hover:border-accent-500 dark:hover:border-accent-400 transition-colors"
                      >
                        <img
                          src={image}
                          alt={`${project.title} thumbnail ${i + 2}`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = IMAGE_PLACEHOLDER;
                          }}
                        />
                      </button>
                    ))}
                    {rest.length > 3 && (
                      <button
                        onClick={() => toggleShowAllImages(project.id)}
                        className="focus-ring font-mono text-[11px] text-accent-700 dark:text-accent-400 font-medium hover:underline underline-offset-2 px-1"
                      >
                        {showAllImages[project.id] ? 'show less' : `+${rest.length - 3} more`}
                      </button>
                    )}
                  </div>
                )}
              </div>

              <div className={`lg:col-span-3 ${flip ? 'lg:order-1' : 'lg:order-2'}`}>
                <p className="font-mono text-xs text-accent-700 dark:text-accent-400 mb-2">
                  {project.projectType} · {project.date}
                </p>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">{project.subtitle}</p>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring p-2.5 rounded-lg border border-slate-200 dark:border-ink-600 text-slate-500 dark:text-slate-400 hover:border-accent-500 hover:text-accent-600 dark:hover:border-accent-400 dark:hover:text-accent-400 transition-colors flex-shrink-0"
                    aria-label={`${project.title} on GitHub`}
                  >
                    <Github size={18} />
                  </a>
                </div>

                <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-5">
                  <h4 className="font-mono text-[11px] font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500 mb-2.5">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <CheckCircle2 size={12} className="text-accent-600 dark:text-accent-400 flex-shrink-0" />
                        <span className="text-xs text-slate-600 dark:text-slate-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5">
                  <h4 className="font-mono text-[11px] font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500 mb-2.5">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring btn-text mt-6"
                >
                  <Github size={14} /> View source
                </a>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
