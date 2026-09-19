import Reveal from './Reveal';

/**
 * SectionHeading — the shared section opener.
 * Keeps eyebrow/title/lede relationships and spacing identical everywhere,
 * while allowing each section to control size and width.
 */
export default function SectionHeading({
  label,
  title,
  lede,
  size = 'md',
  as: Heading = 'h2',
  id,
  wide = false,
  className = '',
  children,
}) {
  const titleClass = `t-display-${size} section__title`;

  return (
    <div
      className={['section__head', wide ? 'section__head--wide' : '', className]
        .filter(Boolean)
        .join(' ')}
    >
      {label && (
        <Reveal>
          <span className="eyebrow">{label}</span>
        </Reveal>
      )}
      {title && (
        <Reveal delay={0.06}>
          <Heading id={id} className={titleClass}>
            {title}
          </Heading>
        </Reveal>
      )}
      {lede && (
        <Reveal delay={0.12}>
          <p className="lede section__lede">{lede}</p>
        </Reveal>
      )}
      {children}
    </div>
  );
}
