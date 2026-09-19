import { useCallback, useSyncExternalStore } from 'react';

/**
 * Tracks a media query in JS.
 *
 * Used where a component genuinely needs a different structure on small
 * screens (for example an accordion instead of tabs), rather than only a
 * different style.
 *
 * The value is read straight from `matchMedia` rather than mirrored into
 * state, so a query change never costs an extra render pass and the first
 * render is already correct.
 */
export function useMediaQuery(query) {
  const subscribe = useCallback(
    (onStoreChange) => {
      const list = window.matchMedia(query);
      list.addEventListener('change', onStoreChange);
      return () => list.removeEventListener('change', onStoreChange);
    },
    [query],
  );

  const getSnapshot = useCallback(() => window.matchMedia(query).matches, [query]);

  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}

export default useMediaQuery;
