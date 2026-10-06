import { useState, useCallback, useRef } from 'react';
import type { WordMessage } from '../types/word';
import { words } from '../data/words';

/**
 * Hook that provides random word selection with no-immediate-repeat logic.
 *
 * - On first call, picks a random word from the dataset.
 * - On subsequent calls, ensures the same word isn't shown twice in a row.
 * - If the dataset is empty, returns null.
 */
export function useRandomWord() {
  const [currentWord, setCurrentWord] = useState<WordMessage | null>(null);
  const lastIdRef = useRef<string | null>(null);

  const getRandomWord = useCallback(() => {
    if (words.length === 0) return null;
    if (words.length === 1) {
      setCurrentWord(words[0]);
      lastIdRef.current = words[0].id;
      return words[0];
    }

    let next: WordMessage;
    do {
      const index = Math.floor(Math.random() * words.length);
      next = words[index];
    } while (next.id === lastIdRef.current);

    lastIdRef.current = next.id;
    setCurrentWord(next);
    return next;
  }, []);

  return { currentWord, getRandomWord };
}
