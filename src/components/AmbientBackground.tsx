import waveUrl from '../assets/brand/smoke-wave.jpg';

/**
 * Brand backdrop: warm cream ground, soft glows and the Covenant Culture
 * smoke wave drifting along the bottom (with a faint mirrored echo at the
 * top). The wave is a photo on white, so it is multiplied onto the cream.
 *
 * Purely decorative (aria-hidden).
 */
export function AmbientBackground() {
  return (
    <div className="ambient" aria-hidden="true">
      <img className="ambient__wave ambient__wave--top" src={waveUrl} alt="" decoding="async" />
      <img className="ambient__wave ambient__wave--bottom" src={waveUrl} alt="" decoding="async" />
    </div>
  );
}
