import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useDarkMode } from './hooks/useDarkMode';
import { useActiveSection } from './hooks/useActiveSection';
import { NAVIGATION } from './data/navigation';
import Sidebar from './components/layout/Sidebar';
import MobileNav from './components/layout/MobileNav';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import ImageModal from './components/ImageModal';

const SECTION_IDS = NAVIGATION.map((item) => item.id);

export default function Portfolio() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const activeSection = useActiveSection(SECTION_IDS);
  const [imageModal, setImageModal] = useState({ isOpen: false, src: '', alt: '' });

  const openImageModal = (src, alt) => setImageModal({ isOpen: true, src, alt });
  const closeImageModal = () => setImageModal((prev) => ({ ...prev, isOpen: false }));

  return (
    <div className="min-h-screen bg-white dark:bg-ink-950 text-slate-900 dark:text-slate-100">
      <Sidebar activeSection={activeSection} darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
      <MobileNav activeSection={activeSection} darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />

      <div className="lg:pl-[340px] xl:pl-[400px]">
        <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <Hero />
          <About />
          <Experience />
          <Projects onImageClick={openImageModal} />
          <Skills />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>

      <AnimatePresence>
        {imageModal.isOpen && (
          <ImageModal src={imageModal.src} alt={imageModal.alt} onClose={closeImageModal} />
        )}
      </AnimatePresence>
    </div>
  );
}
