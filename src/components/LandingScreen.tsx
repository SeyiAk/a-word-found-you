import { Fragment, useEffect, useRef, useState, type CSSProperties } from 'react';
import { Button } from './Button';
import { communityColors } from '../theme/tokens';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

interface LandingScreenProps {
  onFindWord: () => void;
}

/** How long the CTA spark burst plays before the screen changes. */
const BURST_MS = 320;

const HEADLINE = ['W', 'A', 'I', 'T'];
const SUBHEADLINE = ['Maybe', 'you', 'were', 'meant', 'to', 'see', 'this today.'];
/** Spark fan above the button: one per logo figure colour. */
const SPARK_ANGLES = [-62, -31, 0, 31, 62];

/**
 * STATE 1 — Landing / Intro screen.
 *
 * Minimal, dramatic entry point shown when a user scans the QR code.
 * The logo sits above (rendered by App); the copy arrives in sequence.
 * Single CTA: "Find My Word"
 */
export function LandingScreen({ onFindWord }: LandingScreenProps) {
  const reducedMotion = usePrefersReducedMotion();
  const [bursting, setBursting] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  const handleClick = () => {
    if (bursting) return;
    if (reducedMotion) {
      onFindWord();
      return;
    }
    setBursting(true);
    navigator.vibrate?.(8);
    timerRef.current = setTimeout(onFindWord, BURST_MS);
  };

  return (
    <div className="screen landing" role="main">
      <p className="landing__eyebrow">A Word Found You</p>

      <h1 className="landing__headline">
        <span className="sr-only">Wait.</span>
        {HEADLINE.map((letter, i) => (
          <span
            key={letter}
            className="landing__letter"
            style={{ '--i': i } as CSSProperties}
            aria-hidden="true"
          >
            {letter}
          </span>
        ))}
        <span
          className="landing__letter landing__letter--dot"
          style={{ '--i': HEADLINE.length } as CSSProperties}
          aria-hidden="true"
        >
          .
        </span>
      </h1>

      <p className="landing__subheadline">
        {SUBHEADLINE.map((word, i) => (
          <Fragment key={word}>
            {i > 0 && ' '}
            <span className="landing__word" style={{ '--i': i } as CSSProperties}>
              {word}
            </span>
          </Fragment>
        ))}
      </p>

      <div className={`cta${bursting ? ' cta--burst' : ''}`}>
        <span className="cta__glow" aria-hidden="true" />
        <Button
          variant="primary"
          className="btn--shimmer"
          onClick={handleClick}
          aria-label="Find my word — receive an encouraging scripture"
        >
          FIND MY WORD
        </Button>
        <span className="cta__sparks" aria-hidden="true">
          {SPARK_ANGLES.map((angle, i) => (
            <span
              key={angle}
              className="cta__spark"
              style={{
                '--a': `${angle}deg`,
                '--c': communityColors[i],
                '--d': `${78 + (i % 2) * 18}px`,
              } as CSSProperties}
            />
          ))}
        </span>
      </div>

      <p className="landing__fine-print">
        Just a word for your week.
      </p>
    </div>
  );
}
