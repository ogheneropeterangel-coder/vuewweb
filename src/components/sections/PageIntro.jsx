import Reveal from '../ui/Reveal';
import './PageIntro.css';

/**
 * PageIntro — the opening block on every inner page.
 * Keeps the top-of-page rhythm consistent while allowing each page to
 * carry its own label, title, lede and supporting detail.
 */
export default function PageIntro({ label, title, lede, meta, aside, children, id = 'page-title' }) {
  return (
    <header className="page-intro">
      <div className="page-intro__grid section__inner">
        <div className="page-intro__main">
          {label && (
            <Reveal>
              <span className="eyebrow">{label}</span>
            </Reveal>
          )}

          <Reveal delay={0.06}>
            <h1 id={id} className="t-display-lg page-intro__title">
              {title}
            </h1>
          </Reveal>

          {lede && (
            <Reveal delay={0.12}>
              <p className="lede page-intro__lede">{lede}</p>
            </Reveal>
          )}

          {children && (
            <Reveal delay={0.18}>
              <div className="page-intro__actions">{children}</div>
            </Reveal>
          )}
        </div>

        {(meta || aside) && (
          <Reveal delay={0.14} className="page-intro__aside">
            {meta && (
              <dl className="page-intro__meta">
                {meta.map((item) => (
                  <div key={item.term}>
                    <dt>{item.term}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            )}
            {aside}
          </Reveal>
        )}
      </div>
    </header>
  );
}
