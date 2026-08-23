import { motion } from 'framer-motion';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import { PROFILE } from '../../data/profile';
import { STRENGTHS } from '../../data/strengths';
import { STATS } from '../../data/stats';
import { staggerContainer, fadeInUp } from '../../lib/motion';

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-28 scroll-mt-24 lg:scroll-mt-12">
      <Reveal>
        <SectionHeading index="01" title="About" />
      </Reveal>

      <Reveal variants={fadeInUp} className="max-w-2xl">
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{PROFILE.aboutBio}</p>
      </Reveal>

      <Reveal
        as="ul"
        variants={staggerContainer(0.08)}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-10"
      >
        {STATS.map(({ icon: Icon, number, label }, idx) => (
          <motion.li key={idx} variants={fadeInUp} className="surface p-4">
            <Icon size={16} className="text-accent-600 dark:text-accent-400 mb-3" strokeWidth={1.75} />
            <div className="font-display font-semibold text-lg text-slate-900 dark:text-white leading-none">
              {number}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 leading-snug mt-1.5">{label}</div>
          </motion.li>
        ))}
      </Reveal>

      <Reveal
        as="ul"
        variants={staggerContainer(0.08)}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6"
      >
        {STRENGTHS.map(({ icon: Icon, title, desc }, idx) => (
          <motion.li key={idx} variants={fadeInUp} className="surface p-5">
            <Icon className="text-accent-600 dark:text-accent-400 mb-3" size={19} strokeWidth={1.75} />
            <h3 className="font-semibold text-sm text-slate-900 dark:text-white mb-1.5">{title}</h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">{desc}</p>
          </motion.li>
        ))}
      </Reveal>
    </section>
  );
}
