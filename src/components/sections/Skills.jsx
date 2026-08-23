import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import { SKILLS, SKILL_ICONS } from '../../data/skills';
import { staggerContainer, fadeInUp } from '../../lib/motion';

export default function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-28 scroll-mt-24 lg:scroll-mt-12">
      <Reveal>
        <SectionHeading index="04" title="Skills" />
      </Reveal>

      <Reveal
        as="ul"
        variants={staggerContainer(0.06)}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {Object.entries(SKILLS).map(([category, skillList]) => {
          const Icon = SKILL_ICONS[category] || Code;

          return (
            <motion.li key={category} variants={fadeInUp} className="surface glow-hover p-4">
              <div className="flex items-center gap-2.5 mb-3.5">
                <Icon className="text-accent-600 dark:text-accent-400" size={16} strokeWidth={1.75} />
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {skillList.map((skill, i) => (
                  <span key={i} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.li>
          );
        })}
      </Reveal>
    </section>
  );
}
