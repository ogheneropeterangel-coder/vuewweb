import { Grid } from './Icon';

/**
 * EmptyState — used when a content area genuinely has nothing to show yet.
 * An intentional, designed state is better than hiding the section or
 * filling it with invented content.
 */
export default function EmptyState({ title, body, children, icon = <Grid size={20} />, className = '' }) {
  return (
    <div className={['empty', className].filter(Boolean).join(' ')} role="status">
      <span className="empty__mark" aria-hidden="true">
        {icon}
      </span>
      {title && <h3 className="empty__title">{title}</h3>}
      {body && <p className="empty__body">{body}</p>}
      {children}
    </div>
  );
}
