import type { WordMessage } from '../types/word';

interface WordCardProps {
  word: WordMessage;
}

/**
 * Card component that displays a single word/scripture/encouragement.
 *
 * Visual hierarchy:
 * 1. "YOUR WORD" label
 * 2. Title (hero — large, bold)
 * 3. Divider
 * 4. Scripture (italic)
 * 5. Reference (colored)
 * 6. Encouragement (muted body)
 */
export function WordCard({ word }: WordCardProps) {
  return (
    <article className="word-card" aria-label={`Your word: ${word.title}`}>
      <p className="word-card__label">Your Word</p>

      <h1 className="word-card__title">{word.title}</h1>

      <div className="word-card__divider" aria-hidden="true" />

      <blockquote className="word-card__scripture">
        &ldquo;{word.scripture}&rdquo;
      </blockquote>

      <p className="word-card__reference">{word.reference}</p>

      <p className="word-card__encouragement">{word.encouragement}</p>
    </article>
  );
}
