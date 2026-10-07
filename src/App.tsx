import { useState, useCallback, useRef, startTransition, ViewTransition } from 'react';
import type { AppState } from './types/word';
import { useRandomWord } from './hooks/useRandomWord';
import { LandingScreen } from './components/LandingScreen';
import { DiscoveryScreen } from './components/DiscoveryScreen';
import { WordScreen } from './components/WordScreen';
import { BrandLogo } from './components/BrandLogo';
import { AmbientBackground } from './components/AmbientBackground';

/**
 * A WORD FOUND YOU
 *
 * Interactive Youth Sunday QR-code experience.
 * State machine: landing → discovering → word → (repeat)
 *
 * Screen changes run inside startTransition so React animates them with
 * the View Transitions API (logo and found-reference morph between
 * screens). Browsers without it simply swap screens.
 *
 * ────────────────────────────────────────────────
 * DEPLOYMENT NOTE:
 * Deploy this application as a static site and use
 * the production URL as the destination for the
 * physical QR code on the Youth Sunday standee.
 * ────────────────────────────────────────────────
 */

export default function App() {
  const [appState, setAppState] = useState<AppState>('landing');
  const [hasSeenWord, setHasSeenWord] = useState(false);
  const { currentWord, getRandomWord } = useRandomWord();
  // Guards against double taps starting a second discovery mid-sequence
  const discoveringRef = useRef(false);

  const startDiscovery = useCallback(() => {
    if (discoveringRef.current) return;
    discoveringRef.current = true;

    // Select the word up front; the discovery sequence lands on it
    startTransition(() => {
      getRandomWord();
      setAppState('discovering');
    });
  }, [getRandomWord]);

  const revealWord = useCallback(() => {
    discoveringRef.current = false;
    startTransition(() => {
      setAppState('word');
      setHasSeenWord(true);
    });
  }, []);

  return (
    <div className={`app app--${appState}`}>
      <AmbientBackground />

      <BrandLogo variant={appState === 'landing' ? 'hero' : 'compact'} />

      {/* ── Screen Router ── */}
      {appState === 'landing' && (
        <ViewTransition enter="screen-enter" exit="screen-exit">
          <LandingScreen onFindWord={startDiscovery} />
        </ViewTransition>
      )}

      {appState === 'discovering' && currentWord && (
        <ViewTransition enter="screen-enter" exit="screen-exit">
          <DiscoveryScreen word={currentWord} isRepeat={hasSeenWord} onComplete={revealWord} />
        </ViewTransition>
      )}

      {appState === 'word' && currentWord && (
        <ViewTransition enter="screen-enter" exit="screen-exit">
          <WordScreen word={currentWord} onAnotherWord={startDiscovery} />
        </ViewTransition>
      )}

      {/* Fallback if dataset is empty */}
      {appState !== 'landing' && !currentWord && (
        <div className="screen fallback" role="main">
          <p className="fallback__emoji">🙏</p>
          <p className="fallback__text">
            Something went wrong — but God's still got you.<br />
            Refresh the page and try again.
          </p>
        </div>
      )}
    </div>
  );
}
