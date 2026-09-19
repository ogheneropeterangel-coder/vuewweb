import { useEffect } from 'react';
import { brand } from '../data/site';

/**
 * Keeps per-route metadata in sync.
 *
 * This is a client-rendered app, so metadata is updated when the route
 * changes. Titles and descriptions come from `src/data/site.js` and are
 * based only on what VUEW can actually support.
 */
function upsertMeta(attr, key, content) {
  if (!content) return;
  let tag = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

export function useDocumentMeta({ title, description, path } = {}) {
  useEffect(() => {
    if (title) document.title = title;
    upsertMeta('name', 'description', description);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    if (path) upsertMeta('property', 'og:url', `${brand.url}${path}`);
  }, [title, description, path]);
}

export default useDocumentMeta;
