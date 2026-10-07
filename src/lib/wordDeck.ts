import type { WordMessage } from '../types/word';

/**
 * Deals words like a shuffled deck: every word is shown once before any
 * word repeats, then a new round begins — never with the word just shown.
 *
 * Only the IDs already dealt this round are kept, so words added to or
 * removed from the list between visits are picked up automatically.
 * Each draw is one pass over the list, and the saved state is just the
 * dealt IDs (~25 bytes per word), so this stays cheap at thousands of words.
 */

export interface Deck {
  /** IDs dealt in the current round */
  seen: string[];
  /** The last ID dealt — never dealt again straight away */
  last: string | null;
}

export const EMPTY_DECK: Deck = { seen: [], last: null };

const STORAGE_KEY = 'a-word-found-you:deck:v1';

export function drawWord(
  all: readonly WordMessage[],
  deck: Deck,
  random: () => number = Math.random,
): { word: WordMessage; deck: Deck } | null {
  if (all.length === 0) return null;

  const seen = new Set(deck.seen);
  let round = deck.seen;
  let pool = all.filter((w) => !seen.has(w.id));

  if (pool.length === 0) {
    // Every word has been dealt: start a new round, but not with the last one
    round = [];
    pool = all.length > 1 ? all.filter((w) => w.id !== deck.last) : [...all];
  }

  const word = pool[Math.floor(random() * pool.length)];
  return { word, deck: { seen: [...round, word.id], last: word.id } };
}

/** The deck saved on this device, or null if there is none (or storage is blocked). */
export function loadDeck(): Deck | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (!Array.isArray(data?.seen)) return null;
    return {
      seen: data.seen.filter((id: unknown): id is string => typeof id === 'string'),
      last: typeof data.last === 'string' ? data.last : null,
    };
  } catch {
    return null;
  }
}

export function saveDeck(deck: Deck) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(deck));
  } catch {
    // Storage full or blocked (some private modes): the in-memory deck still works
  }
}
