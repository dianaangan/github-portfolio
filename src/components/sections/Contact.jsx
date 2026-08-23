import { Github, Linkedin, Mail } from 'lucide-react';
import Reveal from '../ui/Reveal';
import { PROFILE } from '../../data/profile';
import { fadeInUp } from '../../lib/motion';

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 scroll-mt-24 lg:scroll-mt-12 text-center">
      <Reveal variants={fadeInUp}>
        <p className="eyebrow mb-4">06 · What&apos;s Next?</p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white">
          Get In Touch
        </h2>
        <p className="mt-5 max-w-md mx-auto text-slate-500 dark:text-slate-400 leading-relaxed">
          {PROFILE.footerTagline}
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-9">
          <a href={`mailto:${PROFILE.email}`} className="focus-ring btn-solid">
            <Mail size={15} /> Say Hello
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring btn-outline"
          >
            <Github size={15} /> GitHub
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring btn-outline"
          >
            <Linkedin size={15} /> LinkedIn
          </a>
        </div>
      </Reveal>
    </section>
  );
}
