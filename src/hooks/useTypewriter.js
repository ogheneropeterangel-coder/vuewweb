import { useEffect, useState } from 'react';

/**
 * useTypewriter — types each phrase in `words`, holds it, deletes it and
 * moves on to the next one.
 *
 * Only one timer is alive at a time and it is cleared on unmount, so nothing
 * keeps running behind the page. `words` must be a stable array (defined at
 * module scope): a new array on every render would restart the effect.
 *
 * The returned text is meant for display only. Callers should keep it out of
 * the accessibility tree and expose the full list in readable copy instead —
 * announcing every keystroke is hostile to screen reader users.
 */
export function useTypewriter(
  words,
  { enabled = true, typeSpeed = 62, deleteSpeed = 26, holdTime = 1900, gapTime = 340 } = {},
) {
  const [state, setState] = useState({ index: 0, text: '', deleting: false });

  useEffect(() => {
    if (!enabled || words.length === 0) return undefined;

    const word = words[state.index % words.length];
    const complete = state.text === word;

    let delay = typeSpeed;
    if (state.deleting) delay = state.text === '' ? gapTime : deleteSpeed;
    else if (complete) delay = holdTime;

    const timer = window.setTimeout(() => {
      setState((current) => {
        const target = words[current.index % words.length];

        if (!current.deleting) {
          if (current.text.length < target.length) {
            return { ...current, text: target.slice(0, current.text.length + 1) };
          }
          /* The word is complete — start removing it. */
          return { ...current, deleting: true };
        }

        if (current.text.length > 0) {
          return { ...current, text: current.text.slice(0, -1) };
        }

        return { index: (current.index + 1) % words.length, text: '', deleting: false };
      });
    }, delay);

    return () => window.clearTimeout(timer);
  }, [enabled, words, state, typeSpeed, deleteSpeed, holdTime, gapTime]);

  if (!enabled) return words[0] ?? '';
  return state.text;
}

export default useTypewriter;
