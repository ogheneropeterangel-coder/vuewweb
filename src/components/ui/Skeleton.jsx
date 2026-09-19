import './Skeleton.css';

/**
 * Skeleton loading states.
 *
 * These are only used where content genuinely loads asynchronously — code
 * split routes and data-dependent areas. We never delay content on purpose
 * just to show a loading state.
 *
 * Every skeleton is hidden from assistive technology; the surrounding
 * region announces that it is loading instead.
 */

export function Skeleton({ className = '', style, ...rest }) {
  return <span className={`sk ${className}`} style={style} aria-hidden="true" {...rest} />;
}

export function SkeletonText({ lines = 3 }) {
  return (
    <span className="sk-card__body" aria-hidden="true">
      {Array.from({ length: lines }).map((_, index) => (
        <Skeleton
          key={index}
          className="sk--line"
          style={index === lines - 1 ? { width: '65%' } : undefined}
        />
      ))}
    </span>
  );
}

/** Matches the dimensions of a project card in the projects grid. */
export function ProjectCardSkeleton() {
  return (
    <div className="sk-card" aria-hidden="true">
      <Skeleton className="sk--media" />
      <div className="sk-card__body">
        <Skeleton className="sk--label" />
        <Skeleton className="sk--title" />
        <Skeleton className="sk--line" />
        <Skeleton className="sk--line-short" />
      </div>
    </div>
  );
}

/** Matches the dimensions of an insights card. */
export function InsightCardSkeleton() {
  return (
    <div className="sk-card" aria-hidden="true">
      <Skeleton className="sk--media" />
      <div className="sk-card__body">
        <Skeleton className="sk--label" />
        <Skeleton className="sk--title" />
        <Skeleton className="sk--line" />
        <Skeleton className="sk--line-short" />
      </div>
    </div>
  );
}

/** Matches the shape of a project detail page: media, then columns of copy. */
export function ProjectDetailSkeleton() {
  return (
    <div className="sk-detail" aria-hidden="true">
      <div className="sk-detail__head">
        <Skeleton className="sk--label" />
        <Skeleton className="sk--title-lg" />
        <Skeleton className="sk--line" />
      </div>
      <Skeleton className="sk--media" />
      <div className="sk-detail__columns">
        <SkeletonText lines={4} />
        <SkeletonText lines={4} />
      </div>
    </div>
  );
}

/** Matches the shape of a service detail page. */
export function ServiceDetailSkeleton() {
  return (
    <div className="sk-detail" aria-hidden="true">
      <div className="sk-detail__head">
        <Skeleton className="sk--label" />
        <Skeleton className="sk--title-lg" />
        <Skeleton className="sk--line" />
        <Skeleton className="sk--line" />
      </div>
      <div className="sk-detail__columns">
        <div className="sk-card__body">
          <Skeleton className="sk--title" />
          <SkeletonText lines={5} />
        </div>
        <div className="sk-card__body">
          <Skeleton className="sk--title" />
          <SkeletonText lines={5} />
        </div>
      </div>
    </div>
  );
}

/** Generic page-level fallback used by lazily loaded routes. */
export function PageSkeleton({ variant = 'cards' }) {
  if (variant === 'detail') {
    return (
      <div className="sk-detail" aria-hidden="true">
        <div className="sk-detail__head">
          <Skeleton className="sk--label" />
          <Skeleton className="sk--title-lg" />
          <Skeleton className="sk--line" />
        </div>
        <div className="sk-detail__columns">
          <SkeletonText lines={5} />
          <SkeletonText lines={5} />
        </div>
      </div>
    );
  }

  if (variant === 'text') {
    return (
      <div className="sk-detail" aria-hidden="true">
        <div className="sk-detail__head">
          <Skeleton className="sk--label" />
          <Skeleton className="sk--title-lg" />
          <Skeleton className="sk--line" />
        </div>
        <div className="sk-detail__columns">
          <SkeletonText lines={4} />
          <SkeletonText lines={3} />
        </div>
      </div>
    );
  }

  return (
    <div className="sk-detail" aria-hidden="true">
      <div className="sk-detail__head">
        <Skeleton className="sk--label" />
        <Skeleton className="sk--title-lg" />
        <Skeleton className="sk--line" />
      </div>
      <div className="sk-detail__columns">
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
      </div>
    </div>
  );
}

export default Skeleton;
