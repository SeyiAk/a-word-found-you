import { Button } from './Button';

interface LandingScreenProps {
  onFindWord: () => void;
}

/**
 * STATE 1 — Landing / Intro screen.
 *
 * Minimal, dramatic entry point shown when a user scans the QR code.
 * Single CTA: "Find My Word"
 */
export function LandingScreen({ onFindWord }: LandingScreenProps) {
  return (
    <div className="screen landing" role="main">
      <p className="landing__eyebrow">A Word Found You</p>
      <div className="landing__emoji" aria-hidden="true">👀</div>
      <h1 className="landing__headline">WAIT.</h1>
      <p className="landing__subheadline">
        Maybe you were meant to see&nbsp;this&nbsp;today.
      </p>

      <Button
        variant="primary"
        onClick={onFindWord}
        aria-label="Find my word — receive an encouraging scripture"
      >
        FIND MY WORD
      </Button>

      <p className="landing__fine-print">
        Just a word for your week.
      </p>
    </div>
  );
}
