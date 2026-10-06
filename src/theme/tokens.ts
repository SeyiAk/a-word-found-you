/**
 * Centralized theme token system for "A Word Found You"
 *
 * All visual identity tokens are defined here so the brand
 * can be updated in a single place.
 *
 * Based on Covenant Culture branding.
 */

export const colors = {
  /* ── Brand ────────────────────────────────── */
  primary: '#F26522',       // Orange – primary CTA and brand-action
  green: '#087A43',         // Deep green – secondary brand
  purple: '#8B238C',        // Purple – secondary brand
  yellow: '#F4C51B',        // Yellow – supporting accent
  coral: '#F15A5B',         // Coral – supporting accent
  teal: '#159B8D',          // Teal – supporting accent

  /* ── Neutrals ─────────────────────────────── */
  white: '#FFFFFF',
  offWhite: '#FAFAF8',
  surface: '#F5F4F0',       // Light surface / card bg fallback
  textPrimary: '#151515',
  textSecondary: '#555555',
  textMuted: '#777777',
  border: '#E7E5E0',

  /* ── Derived / functional ─────────────────── */
  primaryHover: '#DA5A1D',
  primaryActive: '#C44F18',
  overlay: 'rgba(21, 21, 21, 0.45)',
  cardShadow: 'rgba(21, 21, 21, 0.06)',
} as const;

export const fonts = {
  heading: "'Manrope', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  body: "'Manrope', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
} as const;

export const radii = {
  button: '8px',
  card: '12px',
  pill: '999px',
} as const;

export const shadows = {
  card: `0 2px 12px ${colors.cardShadow}`,
  cardHover: `0 4px 20px rgba(21, 21, 21, 0.10)`,
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
