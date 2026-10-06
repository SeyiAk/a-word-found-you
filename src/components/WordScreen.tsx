import type { WordMessage } from '../types/word';
import { WordCard } from './WordCard';
import { Button } from './Button';

interface WordScreenProps {
  word: WordMessage;
  onAnotherWord: () => void;
}

/**
 * STATE 3 — The Word screen.
 *
 * Displays the randomly selected word with action buttons:
 * - "Save This For Your Week" (encourages screenshot)
 * - "Give Me Another Word" (re-rolls)
 */
export function WordScreen({ word, onAnotherWord }: WordScreenProps) {
  return (
    <div className="screen word-screen" role="main">
      <WordCard word={word} />

      <div className="word-actions">
        <Button
          variant="primary"
          onClick={() => {
            // Encourage the user to screenshot/save.
            // On supported browsers, try native share. Otherwise, prompt screenshot.
            if (navigator.share) {
              navigator.share({
                title: `My Word: ${word.title}`,
                text: `${word.title}\n\n"${word.scripture}"\n— ${word.reference}\n\n${word.encouragement}`,
                url: window.location.href,
              }).catch(() => {
                // User cancelled or share failed — that's fine
              });
            } else {
              alert(
                '📸 Take a screenshot to save this word for your week!'
              );
            }
          }}
          aria-label="Save this word — share or screenshot"
        >
          💛&nbsp; SAVE THIS FOR YOUR WEEK
        </Button>

        <Button
          variant="secondary"
          onClick={onAnotherWord}
          aria-label="Get another random word"
        >
          ↻&nbsp; GIVE ME ANOTHER WORD
        </Button>
      </div>
    </div>
  );
}
