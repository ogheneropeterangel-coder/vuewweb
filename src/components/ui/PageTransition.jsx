import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import './PageTransition.css';

/**
 * Page transitions.
 *
 * Deliberately brief — a short fade with a small lift. Navigation must
 * never feel slower for the sake of an effect, and the whole thing is
 * skipped when the visitor prefers reduced motion.
 */
export default function PageTransition({ children }) {
  const prefersReducedMotion = useReducedMotion();
  const location = useLocation();

  if (prefersReducedMotion) {
    return <div className="page-transition">{children}</div>;
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        className="page-transition"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
