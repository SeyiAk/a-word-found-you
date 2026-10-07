import { useRef, useState } from 'react';
import type { WordMessage } from '../types/word';
import { accentFor, accentStyle } from '../theme/accents';
import { useWordImage } from '../hooks/useWordImage';
import { WordCard } from './WordCard';
import { Button } from './Button';
import { HeartIcon, RefreshIcon } from './Icons';
import { SaveSheet } from './SaveSheet';

interface WordScreenProps {
  word: WordMessage;
  onAnotherWord: () => void;
}

/**
 * STATE 3 — The Word screen.
 *
 * Displays the randomly selected word with action buttons:
 * - "Save This For Your Week" (opens the save sheet with a generated image)
 * - "Give Me Another Word" (re-rolls)
 */
export function WordScreen({ word, onAnotherWord }: WordScreenProps) {
  const [saveOpen, setSaveOpen] = useState(false);
  const image = useWordImage(word, saveOpen);
  const saveButtonRef = useRef<HTMLButtonElement>(null);

  const closeSaveSheet = () => {
    setSaveOpen(false);
    // Safari doesn't focus buttons on tap, so the dialog can't restore it alone
    saveButtonRef.current?.focus();
  };

  return (
    <div className="screen word-screen" role="main" style={accentStyle(accentFor(word))}>
      <WordCard word={word} />

      <div className="word-actions">
        <Button
          ref={saveButtonRef}
          variant="primary"
          icon={<HeartIcon />}
          onClick={() => setSaveOpen(true)}
          aria-haspopup="dialog"
          aria-label="Save this word as an image for your week"
        >
          SAVE THIS FOR YOUR WEEK
        </Button>

        <Button
          variant="secondary"
          icon={<RefreshIcon />}
          onClick={onAnotherWord}
          aria-label="Get another random word"
        >
          GIVE ME ANOTHER WORD
        </Button>
      </div>

      <SaveSheet open={saveOpen} word={word} image={image} onClose={closeSaveSheet} />
    </div>
  );
}
