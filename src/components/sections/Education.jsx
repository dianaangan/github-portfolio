import { motion } from 'framer-motion';
import { GraduationCap, Trophy, Award } from 'lucide-react';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import { DEGREE, DEGREE_BADGES, CERTIFICATIONS } from '../../data/education';
import { staggerContainer, fadeInUp } from '../../lib/motion';

export default function Education() {
  return (
    <section id="education" className="py-24 lg:py-28 scroll-mt-24 lg:scroll-mt-12">
      <Reveal>
        <SectionHeading index="05" title="Education" />
      </Reveal>

      <Reveal variants={fadeInUp} className="surface p-5 sm:p-6 mb-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-10 h-10 rounded-lg bg-accent-50 dark:bg-accent-950/40 flex items-center justify-center flex-shrink-0">
            <GraduationCap size={19} className="text-accent-600 dark:text-accent-400" strokeWidth={1.75} />
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900 dark:text-white leading-tight">{DEGREE.title}</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{DEGREE.school}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {DEGREE_BADGES.map(({ icon: Icon, text }) => (
            <span key={text} className="tag flex items-center gap-1.5">
              <Icon size={12} />
              {text}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal variants={fadeInUp} className="surface overflow-hidden">
        <div className="px-5 sm:px-6 py-4 border-b border-slate-100 dark:border-ink-700 flex items-center justify-between">
          <h3 className="font-semibold text-sm text-slate-900 dark:text-white">Certifications & Awards</h3>
          <span className="tag">{CERTIFICATIONS.length} total</span>
        </div>
        <motion.ul variants={staggerContainer(0.05)} className="px-2 py-2">
          <p className="text-xs text-slate-400 dark:text-slate-500 px-3 py-2.5">
            Certificate copies available upon request for verification
          </p>
          {CERTIFICATIONS.map((cert, i) => (
            <motion.li
              key={i}
              variants={fadeInUp}
              className="flex items-center gap-3.5 px-3 py-3 rounded-lg hover:bg-slate-50 dark:hover:bg-ink-800/50 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-ink-800 flex items-center justify-center flex-shrink-0">
                {cert.type === 'trophy' ? (
                  <Trophy size={14} className="text-amber-500" strokeWidth={1.75} />
                ) : (
                  <Award size={14} className="text-slate-500 dark:text-slate-400" strokeWidth={1.75} />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-snug">{cert.title}</p>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                  {cert.org} · {cert.date}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </Reveal>
    </section>
  );
}
