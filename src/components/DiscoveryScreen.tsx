/**
 * STATE 2 — Discovery / Loading screen.
 *
 * Shows for ~1.5 seconds while "finding" a word.
 * Intentional, premium-feeling transition — not a generic spinner.
 */
export function DiscoveryScreen() {
  return (
    <div
      className="screen discovering"
      role="status"
      aria-live="polite"
      aria-label="Finding your word"
    >
      <p className="discovering__text">Finding something for&nbsp;you…</p>
      <div className="discovering__dots" aria-hidden="true">
        <span className="discovering__dot" />
        <span className="discovering__dot" />
        <span className="discovering__dot" />
      </div>
    </div>
  );
}
