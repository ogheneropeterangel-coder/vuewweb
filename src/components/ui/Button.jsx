import { Link } from 'react-router-dom';
import { ArrowRight } from './Icon';

/**
 * Button — one component, three targets.
 *  - `to`   → internal route (react-router Link)
 *  - `href` → external or mailto link
 *  - none   → <button>
 *
 * Styles come from the shared `.btn` primitives so buttons stay consistent
 * wherever they are used.
 */

const VARIANTS = {
  primary: 'btn--primary',
  ghost: 'btn--ghost',
  quiet: 'btn--quiet',
};

const SIZES = {
  sm: 'btn--sm',
  md: '',
  lg: 'btn--lg',
};

export default function Button({
  to,
  href,
  variant = 'primary',
  size = 'md',
  withArrow = false,
  block = false,
  children,
  className = '',
  ...rest
}) {
  const classes = [
    'btn',
    VARIANTS[variant] ?? VARIANTS.primary,
    SIZES[size] ?? '',
    block ? 'btn--block' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      <span>{children}</span>
      {withArrow && <ArrowRight className="btn__icon" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    const external = /^https?:/.test(href);
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  );
}
