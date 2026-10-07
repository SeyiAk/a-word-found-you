import { ViewTransition, type CSSProperties } from 'react';

interface ReferenceTickerProps {
  /** Increments on every roll; keys the items so their animations restart */
  step: number;
  current: string | null;
  previous: string | null;
  /** Roll animation length for this step (shorter while spinning fast) */
  rollMs: number;
  found: boolean;
}

/**
 * Slot-machine window that rolls through references and lands on the
 * chosen one. The landed reference shares a view transition name with
 * the card's reference, so it flies into place on the word screen.
 */
export function ReferenceTicker({ step, current, previous, rollMs, found }: ReferenceTickerProps) {
  const classes = ['ticker'];
  if (found) classes.push('ticker--found');
  else if (rollMs < 160) classes.push('ticker--fast');

  return (
    <div
      className={classes.join(' ')}
      style={{ '--roll': `${Math.round(rollMs)}ms` } as CSSProperties}
      aria-hidden="true"
    >
      {previous && (
        <span key={`out-${step}`} className="ticker__item ticker__item--out">
          {previous}
        </span>
      )}
      {found && current ? (
        <ViewTransition name="found-reference" share="ref-morph">
          <span className="ticker__item ticker__item--found">{current}</span>
        </ViewTransition>
      ) : current ? (
        <span key={`in-${step}`} className="ticker__item ticker__item--in">
          {current}
        </span>
      ) : (
        <span className="ticker__waiting">
          <span />
          <span />
          <span />
        </span>
      )}
    </div>
  );
}
