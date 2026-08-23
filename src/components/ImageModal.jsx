import { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function ImageModal({ src, alt, onClose }) {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
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
        className="relative max-w-xs w-full"
        initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="focus-ring absolute -top-10 right-0 text-white/60 hover:text-white text-xs flex items-center gap-1.5 transition-colors"
        >
          Close ✕
        </button>
        <img src={src} alt={alt} className="w-full h-auto object-contain rounded-2xl shadow-2xl max-h-[80vh]" />
      </motion.div>
    </motion.div>
  );
}
