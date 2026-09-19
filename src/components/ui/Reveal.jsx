import { motion, useReducedMotion } from 'framer-motion';

/**
 * Reveal — one consistent entrance for content across the site.
 *
 * Motion is deliberately restrained: a short distance, a single shared
 * easing curve, played once. When the visitor prefers reduced motion the
 * content renders in place with no transform.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = 0.7,
  amount = 0.25,
  as = 'div',
  className = '',
  style,
  ...rest
}) {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = motion[as] ?? motion.div;

  if (prefersReducedMotion) {
    const Tag = as;
    return (
      <Tag className={className} style={style} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
