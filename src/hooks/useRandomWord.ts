import { useState, useCallback, useRef } from 'react';
import type { WordMessage } from '../types/word';
import { words } from '../data/words';
import { drawWord, EMPTY_DECK, loadDeck, saveDeck, type Deck } from '../lib/wordDeck';

/**
 * Hook that deals words like a shuffled deck.
 *
 * - Every word is shown once before any word repeats; then a new round starts.
 * - The same word is never shown twice in a row, including across rounds.
 * - Progress is saved on the device, so a refresh or a later scan carries on
 *   with unseen words (if storage is blocked it is remembered for the visit).
 * - If the dataset is empty, returns null.
 */
export function useRandomWord() {
  const [currentWord, setCurrentWord] = useState<WordMessage | null>(null);
  const deckRef = useRef<Deck | null>(null);

  const getRandomWord = useCallback(() => {
    deckRef.current ??= loadDeck() ?? EMPTY_DECK;

    const drawn = drawWord(words, deckRef.current);
    if (!drawn) return null;

    deckRef.current = drawn.deck;
    saveDeck(drawn.deck);
    setCurrentWord(drawn.word);
    return drawn.word;
  }, []);

  return { currentWord, getRandomWord };
}
