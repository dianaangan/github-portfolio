import { motion, useReducedMotion } from 'framer-motion';
import { fadeInUp, viewportOnce } from '../../lib/motion';

/**
 * Wraps content in a scroll-triggered reveal animation.
 * Respects prefers-reduced-motion by rendering children statically.
 */
export default function Reveal({
  as = 'div',
  children,
  className,
  variants = fadeInUp,
  viewport = viewportOnce,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (shouldReduceMotion) {
    const Tag = as;
    return (
      <Tag className={className} {...props}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
