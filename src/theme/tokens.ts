/**
 * Centralized theme token system for "A Word Found You"
 *
 * All visual identity tokens are defined here so the brand
 * can be updated in a single place. The CSS custom properties
 * in index.css mirror these values — keep the two in sync
 * (the canvas image renderer reads this file directly).
 *
 * Brand colours are sampled from the Covenant Culture logo.
 */

export const colors = {
  /* ── Brand (logo) ─────────────────────────── */
  orange: '#E86F36',        // CULTURE wordmark – primary CTA and brand action
  amber: '#F0942F',         // Figure – warm accent
  yellow: '#F6CA35',        // Figure – decorative only (too light for text)
  green: '#106635',         // Figure
  purple: '#892B89',        // Figure
  coral: '#EF545C',         // Figure

  /* ── Neutrals ─────────────────────────────── */
  cream: '#FBF5EE',         // Page ground
  card: '#FFFDF9',          // Card surface
  ink: '#1B1714',           // Headings – matches the COVENANT wordmark
  inkSoft: '#5C5149',       // Body copy (7:1 on cream)
  muted: '#7A6E65',         // Fine print (4.5:1 on cream)
  border: '#EADFD3',

  /* ── Derived / functional ─────────────────── */
  orangeInk: '#BC4B16',     // Orange for small text (4.6:1 on cream)
  orangeDeep: '#D2551F',    // CTA gradient end (white text 4.1:1)
  overlay: 'rgba(27, 23, 20, 0.45)',
  cardShadow: 'rgba(120, 60, 20, 0.10)',
} as const;

/**
 * A per-word accent colour.
 * - base:    decorative fills (bars, glows, dots)
 * - display: large title text (≥ 3:1 on cream)
 * - ink:     small text (≥ 4.5:1 on cream)
 */
export type Accent = {
  name: 'orange' | 'purple' | 'green' | 'coral' | 'amber';
  base: string;
  display: string;
  ink: string;
};

export const accents: readonly Accent[] = [
  { name: 'orange', base: colors.orange, display: '#E76629', ink: colors.orangeInk },
  { name: 'purple', base: colors.purple, display: colors.purple, ink: colors.purple },
  { name: 'green', base: colors.green, display: colors.green, ink: colors.green },
  { name: 'coral', base: colors.coral, display: colors.coral, ink: '#C2343E' },
  { name: 'amber', base: colors.amber, display: '#D3750F', ink: '#A15D0A' },
];

/** The five figure colours, clockwise from the logo's top-left — the "community" signature. */
export const communityColors = [
  colors.purple,
  colors.green,
  colors.yellow,
  colors.amber,
  colors.coral,
] as const;

export const fonts = {
  display: "'Barlow Condensed', 'Arial Narrow', 'Roboto Condensed', sans-serif",
  body: "'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
} as const;

export const radii = {
  button: '999px',
  card: '24px',
  pill: '999px',
} as const;

export const shadows = {
  card: `0 18px 50px -12px rgba(120, 60, 20, 0.18), 0 2px 8px rgba(120, 60, 20, 0.06)`,
  cta: `0 10px 24px -8px rgba(210, 85, 31, 0.55)`,
} as const;

export const transitions = {
  fast: '0.15s ease',
  medium: '0.3s ease',
  slow: '0.6s cubic-bezier(0.22, 1, 0.36, 1)',
  dramatic: '0.8s cubic-bezier(0.22, 1, 0.36, 1)',
} as const;

export const breakpoints = {
  sm: '480px',
  md: '768px',
  lg: '1024px',
} as const;
