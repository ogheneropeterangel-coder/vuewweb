import useScrollProgress from '../../hooks/useScrollProgress';
import './ScrollProgress.css';

/**
 * A thin reading-progress line at the top of the document.
 * Decorative: hidden from assistive technology, and it animates via
 * transform only so it never triggers layout work while scrolling.
 */
export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      className="scroll-progress"
      style={{ transform: `scaleX(${progress})` }}
      aria-hidden="true"
    />
  );
}
