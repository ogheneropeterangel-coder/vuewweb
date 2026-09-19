import { useEffect, useState } from 'react';

/**
 * Measures how far a tall element has travelled through the viewport.
 * Returns 0 → 1, where 1 means the element has been scrolled past.
 *
 * Used for the approach section's progress rail. Reading the value does not
 * animate anything on its own — off by default when reduced motion is set
 * to avoid drawing attention to movement.
 */
export function useElementProgress(ref, { enabled = true } = {}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!enabled) return undefined;

    let frame = 0;

    const measure = () => {
      frame = 0;
      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const viewport = window.innerHeight;
      const total = rect.height + viewport;

      if (total <= 0) return;
      const travelled = viewport - rect.top;
      setProgress(Math.min(Math.max(travelled / total, 0), 1));
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [ref, enabled]);

  return progress;
}

export default useElementProgress;
