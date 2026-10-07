import { useEffectEvent, useLayoutEffect, useRef, useState, type CSSProperties } from 'react';
import type { WordMessage } from '../types/word';
import { buildDiscoveryPlan } from '../lib/discoveryPlan';
import { accentFor, accentStyle } from '../theme/accents';
import { communityColors } from '../theme/tokens';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { FloatingReferences } from './FloatingReferences';
import { ReferenceTicker } from './ReferenceTicker';

interface DiscoveryScreenProps {
  /** The word already chosen — the sequence always lands on its reference */
  word: WordMessage;
  /** True after the first word: shorter sequence, "Finding another word…" */
  isRepeat: boolean;
  /** Called when the sequence finishes and the word should be revealed */
  onComplete: () => void;
}

/**
 * STATE 2 — Discovery / anticipation screen.
 *
 * Scripture references float in around "Hold on…", a ticker rolls through
 * them (lighting each one up) and slows down until it lands on the chosen
 * word's reference. Owns its own timeline and calls onComplete at the end.
 */
export function DiscoveryScreen({ word, isRepeat, onComplete }: DiscoveryScreenProps) {
  const reducedMotion = usePrefersReducedMotion();
  const [plan] = useState(() =>
    buildDiscoveryPlan(word, reducedMotion ? 'reduced' : isRepeat ? 'repeat' : 'first'),
  );
  const [step, setStep] = useState(-1);
  const [copyIndex, setCopyIndex] = useState(0);
  const [found, setFound] = useState(false);
  const complete = useEffectEvent(onComplete);
  const startedAt = useRef<number | null>(null);

  // Layout effect so the clock starts at commit: React holds passive effects
  // until the incoming view transition has finished animating. Times are
  // measured from the first run, so a re-run (StrictMode) resumes rather
  // than restarting the sequence.
  useLayoutEffect(() => {
    const { gather, search, found: foundMs } = plan.timing;
    startedAt.current ??= performance.now();
    const elapsed0 = performance.now() - startedAt.current;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const at = (ms: number, fn: () => void) =>
      timers.push(setTimeout(fn, Math.max(0, ms - elapsed0)));

    let elapsed = gather;
    plan.intervals.forEach((interval, i) => {
      at(elapsed, () => setStep(i));
      elapsed += interval;
    });
    plan.copy.forEach(({ atMs }, i) => {
      if (i > 0) at(atMs, () => setCopyIndex(i));
    });
    at(gather + search, () => {
      setFound(true);
      navigator.vibrate?.(12);
    });
    at(gather + search + foundMs, () => complete());

    return () => timers.forEach(clearTimeout);
  }, [plan]);

  const lastStep = plan.sequence.length - 1;
  const current = found ? word.reference : (plan.sequence[step] ?? null);
  const previous = found ? (plan.sequence[lastStep] ?? null) : (plan.sequence[step - 1] ?? null);
  const rollMs = found ? 520 : Math.min((plan.intervals[step] ?? 300) * 0.9, 300);
  const accent = accentStyle(accentFor(word));

  return (
    <>
      <FloatingReferences
        items={plan.field}
        style={accent}
        lit={found ? null : current}
        found={found ? word.reference : null}
        scatter={found}
      />

      <div
        className={`screen discovering${found ? ' discovering--found' : ''}`}
        role="main"
        style={accent}
      >
        <p className="sr-only" role="status">Finding your word…</p>

        <p className="discovering__eyebrow" aria-hidden="true">A Word Found You</p>

        <div className="discovering__headline" aria-hidden="true">
          <span className="discovering__headline-text discovering__headline-text--wait">
            Hold on
            <span className="ellipsis">
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </span>
          </span>
          <span className="discovering__headline-text discovering__headline-text--found">
            This one&rsquo;s for you.
          </span>
        </div>

        <p key={copyIndex} className="discovering__status" aria-hidden="true">
          {plan.copy[copyIndex].text}
        </p>

        <ReferenceTicker
          step={found ? lastStep + 1 : step}
          current={current}
          previous={previous}
          rollMs={rollMs}
          found={found}
        />

        <div className="discovering__dots" aria-hidden="true">
          {communityColors.map((color, i) => (
            <span
              key={color}
              className="discovering__dot"
              style={{ '--c': color, '--i': i } as CSSProperties}
            />
          ))}
        </div>
      </div>
    </>
  );
}
