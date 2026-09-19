/**
 * Media — a framed, responsive image.
 *
 * - Reserves its aspect ratio so images never cause layout shift.
 * - Lazy loads and decodes off the main thread unless the image is
 *   above the fold (`priority`).
 * - Requires real alt text: pass `alt=""` only for purely decorative art.
 */
export default function Media({
  src,
  alt,
  aspect = 'photo',
  priority = false,
  className = '',
  imgClassName = '',
  children,
  ...rest
}) {
  return (
    <figure
      className={['frame', `frame--${aspect}`, 'media-zoom', className]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
        className={imgClassName}
      />
      {children}
    </figure>
  );
}
