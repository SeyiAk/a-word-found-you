import { Fragment, ViewTransition, type CSSProperties } from 'react';
import type { WordMessage } from '../types/word';
import { communityColors } from '../theme/tokens';

interface WordCardProps {
  word: WordMessage;
}

/**
 * Card component that displays a single word/scripture/encouragement.
 * Accent colours come from the --accent* custom properties on the screen.
 *
 * Visual hierarchy:
 * 1. Five-colour brand bar + "YOUR WORD" label
 * 2. Title (hero — two-tone, last word in the accent)
 * 3. Divider + oversized quote mark
 * 4. Scripture
 * 5. Reference + translation (accent — the discovery ticker morphs into it)
 * 6. Encouragement (muted body)
 */
export function WordCard({ word }: WordCardProps) {
  const titleWords = word.title.split(' ');
  // Long single words ("IMMEASURABLY") shrink the title so they never overflow
  const longestWord = Math.max(...titleWords.map((w) => w.length));

  return (
    <article className="word-card" aria-label={`Your word: ${word.title}`}>
      <div className="word-card__bar" aria-hidden="true">
        {communityColors.map((color, i) => (
          <span key={color} style={{ '--c': color, '--i': i } as CSSProperties} />
        ))}
      </div>

      <p className="word-card__label">Your Word</p>

      <h1 className="word-card__title" style={{ '--longest': longestWord } as CSSProperties}>
        {titleWords.map((w, i) => (
          <Fragment key={i}>
            {i > 0 && ' '}
            <span
              className={`word-card__title-word${i === titleWords.length - 1 ? ' word-card__title-word--accent' : ''}`}
              style={{ '--i': i } as CSSProperties}
            >
              {w}
            </span>
          </Fragment>
        ))}
      </h1>

      <div className="word-card__divider" aria-hidden="true" />

      <span className="word-card__quote-mark" aria-hidden="true">&ldquo;</span>
      <blockquote className="word-card__scripture">{word.scripture}</blockquote>

      <ViewTransition name="found-reference" share="ref-morph" exit="screen-exit">
        <p className="word-card__reference">
          {word.reference} <span className="word-card__translation">· {word.translation}</span>
        </p>
      </ViewTransition>

      <p className="word-card__encouragement">{word.encouragement}</p>
    </article>
  );
}
