import type { CSSProperties } from 'react';
import type { WordMessage } from '../types/word';
import { words } from '../data/words';
import { colors } from '../theme/tokens';

/**
 * Choreography for the discovery ("Hold on…") screen.
 *
 * gather → references drift in around the headline
 * search → the ticker rolls through them, slowing down like a slot machine
 * found  → it lands on the chosen word's reference; the rest scatter
 */

export type DiscoveryMode = 'first' | 'repeat' | 'reduced';

/** Phase lengths in ms. Total ≈ 3.6s first time, 2.8s for "another word". */
export const TIMINGS: Record<DiscoveryMode, { gather: number; search: number; found: number }> = {
  first: { gather: 700, search: 2000, found: 900 },
  repeat: { gather: 450, search: 1500, found: 850 },
  reduced: { gather: 0, search: 500, found: 900 },
};

/** Status line copy, switched at the given fraction of the search phase. */
const COPY: Record<DiscoveryMode, { text: string; at: number }[]> = {
  first: [
    { text: 'Searching the Scriptures…', at: 0 },
    { text: 'Finding something for you…', at: 0.45 },
    { text: 'Almost there…', at: 0.8 },
  ],
  repeat: [
    { text: 'Finding another word…', at: 0 },
    { text: 'Almost there…', at: 0.7 },
  ],
  reduced: [{ text: 'Finding your word…', at: 0 }],
};

type Depth = 0 | 1 | 2;

/**
 * Preset positions (% of the field box) that keep the centre column clear:
 * a band above the headline, a band below the dots, and two faint far
 * references tucked behind the copy at the sides. Near slots stay away from
 * the edges so long references ("Lamentations 3:22–23") aren't clipped on phones.
 * depth 0 = far (small, blurred, faint) · 2 = near (large, crisp)
 */
const SLOTS: { x: number; y: number; depth: Depth; rot: number }[] = [
  { x: 28, y: 16, depth: 1, rot: -6 },
  { x: 76, y: 13, depth: 0, rot: 5 },
  { x: 66, y: 25, depth: 2, rot: 4 },
  { x: 31, y: 31, depth: 2, rot: -3 },
  { x: 82, y: 37, depth: 0, rot: -7 },
  { x: 16, y: 52, depth: 0, rot: 6 },
  { x: 83, y: 61, depth: 0, rot: -4 },
  { x: 31, y: 80, depth: 2, rot: 5 },
  { x: 70, y: 86, depth: 1, rot: -5 },
  { x: 45, y: 93, depth: 0, rot: 3 },
];

/** Logo colours for the floating references (yellow is too light on cream). */
const FIELD_COLORS = [colors.green, colors.orange, colors.purple, colors.coral, colors.amber];

/** Drift amplitude in px per depth — near references move more (parallax). */
const DRIFT: Record<Depth, [number, number]> = { 0: [6, 5], 1: [10, 8], 2: [14, 11] };

export interface FieldItem {
  reference: string;
  depth: Depth;
  style: CSSProperties;
}

export interface DiscoveryPlan {
  timing: { gather: number; search: number; found: number };
  /** Floating references, one per slot; always includes the target */
  field: FieldItem[];
  /** References the ticker rolls through before landing on the target */
  sequence: string[];
  /** Delay (ms) after each sequence step before the next */
  intervals: number[];
  copy: { text: string; atMs: number }[];
}

const allReferences = [...new Set(words.map((w) => w.reference))];

function shuffle<T>(items: T[]): T[] {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

const between = (min: number, max: number) => min + Math.random() * (max - min);

/**
 * Step delays that start fast and slow down (quadratic ease),
 * scaled so they add up to exactly `total` ms.
 */
function tickerIntervals(total: number, fast = 80, slow = 420): number[] {
  let raw: number[] = [];
  for (let n = 3; n < 40; n++) {
    raw = Array.from({ length: n }, (_, i) => fast + (slow - fast) * (i / (n - 1)) ** 2);
    if (raw.reduce((a, b) => a + b, 0) >= total) break;
  }
  const sum = raw.reduce((a, b) => a + b, 0);
  return raw.map((ms) => (ms * total) / sum);
}

export function buildDiscoveryPlan(target: WordMessage, mode: DiscoveryMode): DiscoveryPlan {
  const timing = TIMINGS[mode];

  // The target takes a prominent (mid/near) slot so its highlight is visible
  const prominent = SLOTS.flatMap((slot, i) => (slot.depth > 0 ? [i] : []));
  const targetSlot = prominent[Math.floor(Math.random() * prominent.length)];
  const others = shuffle(allReferences.filter((r) => r !== target.reference));
  const entryOrder = shuffle(SLOTS.map((_, i) => i));

  let next = 0;
  const field: FieldItem[] = SLOTS.map((slot, i) => {
    const reference = i === targetSlot ? target.reference : others[next++ % others.length];
    const [dx, dy] = DRIFT[slot.depth];
    const duration = between(5, 9);
    return {
      reference,
      depth: slot.depth,
      style: {
        '--x': `${slot.x}%`,
        '--y': `${slot.y}%`,
        '--rot': `${slot.rot}deg`,
        '--c': FIELD_COLORS[i % FIELD_COLORS.length],
        '--dx': `${(Math.random() < 0.5 ? -1 : 1) * dx}px`,
        '--dy': `${dy}px`,
        '--dur': `${duration.toFixed(2)}s`,
        '--delay': `${(-Math.random() * duration).toFixed(2)}s`,
        '--enter': `${entryOrder.indexOf(i) * 55}ms`,
        // Scatter outward from the centre when the word is found
        '--sx': `${((slot.x - 50) * 0.55).toFixed(1)}vw`,
        '--sy': `${((slot.y - 50) * 0.45).toFixed(1)}vh`,
      } as CSSProperties,
    };
  });

  // Ticker steps visit the other floating references, never twice in a row
  const intervals = mode === 'reduced' ? [] : tickerIntervals(timing.search);
  const pool = field.map((f) => f.reference).filter((r) => r !== target.reference);
  const sequence: string[] = [];
  for (let i = 0; i < intervals.length; i++) {
    const recent = sequence.slice(-2);
    const choices = pool.filter((r) => !recent.includes(r));
    sequence.push(choices[Math.floor(Math.random() * choices.length)]);
  }

  const copy = COPY[mode].map(({ text, at }) => ({
    text,
    atMs: Math.round(timing.gather + timing.search * at),
  }));

  return { timing, field, sequence, intervals, copy };
}
