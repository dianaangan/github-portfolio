import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, Download, Mail, MapPin, Phone } from 'lucide-react';
import { PROFILE } from '../../data/profile';
import { fadeInUp, staggerContainer } from '../../lib/motion';
import { scrollToSection } from '../../hooks/useActiveSection';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? undefined : 'hidden';
  const animate = shouldReduceMotion ? undefined : 'visible';

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center pt-24 pb-16 lg:pt-16 lg:pb-20 scroll-mt-16"
    >
      <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
        <motion.div
          initial={initial}
          animate={animate}
          variants={staggerContainer(0.09, 0.1)}
        >
          <motion.p variants={fadeInUp} className="eyebrow mb-5">
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-[3.4rem] tracking-tight text-slate-900 dark:text-white leading-[1.08]"
          >
            {PROFILE.name.first} {PROFILE.name.last}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-3 font-display text-xl sm:text-2xl font-medium text-slate-500 dark:text-slate-400"
          >
            {PROFILE.title}
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="mt-6 max-w-lg text-slate-600 dark:text-slate-400 leading-relaxed"
          >
            {PROFILE.heroBio}
          </motion.p>

          <motion.dl
            variants={fadeInUp}
            className="mt-7 flex flex-col gap-2 text-sm text-slate-500 dark:text-slate-400"
          >
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-accent-600 dark:text-accent-400 flex-shrink-0" />
              <span>{PROFILE.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-accent-600 dark:text-accent-400 flex-shrink-0" />
              <span>{PROFILE.phone}</span>
            </div>
            <a
              href={`mailto:${PROFILE.email}`}
              className="focus-ring flex items-center gap-2 w-fit hover:text-accent-700 dark:hover:text-accent-400 transition-colors"
            >
              <Mail size={14} className="text-accent-600 dark:text-accent-400 flex-shrink-0" />
              <span>{PROFILE.email}</span>
            </a>
          </motion.dl>

          <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-3">
            <a href={PROFILE.resumePath} target="_blank" rel="noopener noreferrer" className="focus-ring btn-solid">
              <Download size={15} /> Download Résumé
            </a>
            <button onClick={() => scrollToSection('projects')} className="focus-ring btn-outline group">
              View Projects
              <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-48 h-60 sm:w-56 sm:h-72">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border-2 border-accent-500 dark:border-accent-400" />
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-200 dark:border-ink-700 shadow-xl bg-white dark:bg-ink-900">
              <img
                src={PROFILE.photoPath}
                alt={`Professional headshot of ${PROFILE.name.first} ${PROFILE.name.last}`}
                className="w-full h-full object-cover object-[center_5%]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
