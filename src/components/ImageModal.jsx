import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function ImageModal({ src, alt, onClose }) {
  const closeButton = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButton.current?.focus();
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab') { e.preventDefault(); closeButton.current?.focus(); }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 bg-slate-950/85 backdrop-blur-sm z-[70] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <motion.div
        className="relative max-w-6xl w-full"
        initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeButton}
          onClick={onClose}
          className="focus-ring absolute -top-10 right-0 text-white/60 hover:text-white text-xs flex items-center gap-1.5 transition-colors"
        >
          Close ✕
        </button>
        <img src={src} alt={alt} className="w-full h-auto object-contain rounded-lg shadow-2xl max-h-[80vh]" />
      </motion.div>
    </motion.div>
  );
}
