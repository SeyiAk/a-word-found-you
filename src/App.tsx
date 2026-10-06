import { useState, useCallback, useRef } from 'react';
import type { AppState } from './types/word';
import { useRandomWord } from './hooks/useRandomWord';
import { LandingScreen } from './components/LandingScreen';
import { DiscoveryScreen } from './components/DiscoveryScreen';
import { WordScreen } from './components/WordScreen';
import { WaveDecoration } from './components/WaveDecoration';

/**
 * A WORD FOUND YOU
 *
 * Interactive Youth Sunday QR-code experience.
 * State machine: landing → discovering → word → (repeat)
 *
 * ────────────────────────────────────────────────
 * DEPLOYMENT NOTE:
 * Deploy this application as a static site and use
 * the production URL as the destination for the
 * physical QR code on the Youth Sunday standee.
 * ────────────────────────────────────────────────
 */

const DISCOVERY_DURATION_MS = 1800;

export default function App() {
  const [appState, setAppState] = useState<AppState>('landing');
  const { currentWord, getRandomWord } = useRandomWord();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startDiscovery = useCallback(() => {
    setAppState('discovering');

    // Clear any existing timer
    if (timerRef.current) clearTimeout(timerRef.current);

    // Select the word immediately, reveal after dramatic pause
    getRandomWord();

    timerRef.current = setTimeout(() => {
      setAppState('word');
    }, DISCOVERY_DURATION_MS);
  }, [getRandomWord]);

  const handleFindWord = useCallback(() => {
    startDiscovery();
  }, [startDiscovery]);

  const handleAnotherWord = useCallback(() => {
    startDiscovery();
  }, [startDiscovery]);

  return (
    <div className="app">
      {/* Decorative wave — top */}
      <WaveDecoration className="wave-decoration--top" />

      {/* ── Screen Router ── */}
      {appState === 'landing' && (
        <LandingScreen onFindWord={handleFindWord} />
      )}

      {appState === 'discovering' && <DiscoveryScreen />}

      {appState === 'word' && currentWord && (
        <WordScreen word={currentWord} onAnotherWord={handleAnotherWord} />
      )}

      {/* Fallback if dataset is empty */}
      {appState === 'word' && !currentWord && (
        <div className="screen fallback" role="main">
          <p className="fallback__emoji">🙏</p>
          <p className="fallback__text">
            Something went wrong — but God's still got you.<br />
            Refresh the page and try again.
          </p>
        </div>
      )}

      {/* Decorative wave — bottom */}
      <WaveDecoration />

      {/* Footer branding */}
      <div className="footer-brand">
        <p className="footer-brand__text">
          {/* Youth Sunday ·  */}
          <span className="footer-brand__name">The Covenant Culture</span>
        </p>
      </div>
    </div>
  );
}
