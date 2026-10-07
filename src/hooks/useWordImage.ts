import { useEffect, useState } from 'react';
import type { WordMessage } from '../types/word';
import { renderWordImage } from '../lib/renderWordImage';

export type WordImage =
  | { status: 'pending'; file: null; url: null }
  | { status: 'ready'; file: File; url: string }
  | { status: 'error'; file: null; url: null };

/** Wait for the card reveal to finish before doing canvas work. */
const SETTLE_DELAY_MS = 1600;
const MAX_CACHED = 4;

const PENDING: WordImage = { status: 'pending', file: null, url: null };
const cache = new Map<string, Promise<File>>();

function getWordImage(word: WordMessage): Promise<File> {
  let promise = cache.get(word.id);
  if (!promise) {
    promise = renderWordImage(word).then(
      (blob) => new File([blob], `a-word-found-you-${word.id}.png`, { type: 'image/png' }),
    );
    promise.catch(() => cache.delete(word.id));
    cache.set(word.id, promise);
    if (cache.size > MAX_CACHED) cache.delete(cache.keys().next().value as string);
  }
  return promise;
}

/**
 * Pre-renders the shareable image for `word` once the card has settled,
 * or straight away when `eager` (the save sheet is open), so tapping
 * Save never has to wait.
 */
export function useWordImage(word: WordMessage, eager: boolean): WordImage {
  const [settledId, setSettledId] = useState<string | null>(null);
  const [image, setImage] = useState<{ id: string; value: WordImage } | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setSettledId(word.id), SETTLE_DELAY_MS);
    return () => clearTimeout(timer);
  }, [word.id]);

  const shouldRender = eager || settledId === word.id;

  useEffect(() => {
    if (!shouldRender) return;
    let cancelled = false;
    let url: string | null = null;

    getWordImage(word).then(
      (file) => {
        if (cancelled) return;
        url = URL.createObjectURL(file);
        setImage({ id: word.id, value: { status: 'ready', file, url } });
      },
      () => {
        if (!cancelled) setImage({ id: word.id, value: { status: 'error', file: null, url: null } });
      },
    );

    return () => {
      cancelled = true;
      if (url) URL.revokeObjectURL(url);
    };
  }, [word, shouldRender]);

  return image?.id === word.id ? image.value : PENDING;
}
