/**
 * Decorative flowing wave/ribbon SVG motif.
 *
 * Inspired by Covenant Culture branding — translucent overlapping curves
 * in orange, peach, coral, yellow, and subtle purple/gray.
 *
 * Place near hero and footer areas. Purely decorative (aria-hidden).
 */
export function WaveDecoration({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`wave-decoration ${className}`}
      viewBox="0 0 1440 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* Orange wave */}
      <path
        d="M0,224 C120,280 240,200 360,192 C480,184 600,256 720,240 C840,224 960,160 1080,160 C1200,160 1320,224 1440,240 L1440,320 L0,320 Z"
        fill="#F26522"
        fillOpacity="0.18"
      />
      {/* Coral wave */}
      <path
        d="M0,256 C180,220 300,280 480,256 C660,232 720,288 900,272 C1080,256 1200,200 1440,224 L1440,320 L0,320 Z"
        fill="#F15A5B"
        fillOpacity="0.12"
      />
      {/* Yellow wave */}
      <path
        d="M0,288 C240,260 360,300 540,280 C720,260 840,296 1020,288 C1200,280 1360,260 1440,272 L1440,320 L0,320 Z"
        fill="#F4C51B"
        fillOpacity="0.10"
      />
      {/* Purple hint */}
      <path
        d="M0,296 C300,280 600,310 900,296 C1200,282 1350,300 1440,304 L1440,320 L0,320 Z"
        fill="#8B238C"
        fillOpacity="0.06"
      />
      {/* Peach glow */}
      <path
        d="M0,272 C160,244 320,296 480,280 C640,264 800,288 960,276 C1120,264 1280,292 1440,280 L1440,320 L0,320 Z"
        fill="#F26522"
        fillOpacity="0.08"
      />
    </svg>
  );
}
