import { motion } from 'framer-motion';
import { Calendar, CheckCircle2 } from 'lucide-react';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import { EXPERIENCE } from '../../data/experience';
import { staggerContainer, fadeInUp } from '../../lib/motion';

export default function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-28 scroll-mt-24 lg:scroll-mt-12">
      <Reveal>
        <SectionHeading index="02" title="Experience" />
      </Reveal>

      <Reveal as="div" variants={staggerContainer(0.12)} className="relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-slate-200 dark:bg-ink-700 hidden sm:block" />
        <div className="space-y-6">
          {EXPERIENCE.map((job) => (
            <motion.div key={job.id} variants={fadeInUp} className="sm:pl-9 relative">
              <div
                className={`absolute left-0 top-2 w-3.5 h-3.5 rounded-full hidden sm:block ${
                  job.current
                    ? 'bg-accent-500 dark:bg-accent-400 ring-4 ring-accent-100 dark:ring-accent-900/40'
                    : 'bg-slate-300 dark:bg-ink-600 ring-4 ring-white dark:ring-ink-950'
                }`}
              />

              <div className="surface glow-hover p-5 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base font-semibold text-slate-900 dark:text-white">{job.role}</h3>
                      {job.current && (
                        <span className="px-2 py-0.5 rounded-full font-mono text-[11px] font-medium bg-accent-50 text-accent-700 dark:bg-accent-950/50 dark:text-accent-300 border border-accent-200 dark:border-accent-800">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                      {job.company} · {job.type}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-xs text-slate-400 dark:text-slate-500 flex-shrink-0">
                    <Calendar size={12} />
                    {job.period}
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">{job.description}</p>

                <div className="flex items-start gap-2.5 pl-3 border-l-2 border-accent-300 dark:border-accent-800 mb-5">
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    <span className="font-semibold text-slate-900 dark:text-white">Impact — </span>
                    {job.impact}
                  </p>
                </div>

                <div className="mb-5">
                  <h4 className="font-mono text-[11px] font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500 mb-2.5">
                    Key Contributions
                  </h4>
                  <ul className="space-y-2">
                    {job.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 size={13} className="text-accent-600 dark:text-accent-400 flex-shrink-0 mt-0.5" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-mono text-[11px] font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500 mb-2.5">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {job.tech.map((tech, i) => (
                      <span key={i} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
