import type { CSSProperties } from 'react';
import type { WordMessage } from '../types/word';
import { words } from '../data/words';
import { accents, type Accent } from './tokens';

/**
 * Each word gets one brand accent, cycling through the palette by its
 * position in the dataset — so "another word" visibly changes colour,
 * and the saved image always matches the card.
 */
export function accentFor(word: WordMessage): Accent {
  const index = words.findIndex((w) => w.id === word.id);
  return accents[Math.max(index, 0) % accents.length];
}

/** Exposes an accent to CSS as --accent, --accent-display and --accent-ink. */
export function accentStyle(accent: Accent): CSSProperties {
  return {
    '--accent': accent.base,
    '--accent-display': accent.display,
    '--accent-ink': accent.ink,
  } as CSSProperties;
}
