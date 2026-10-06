/**
 * Represents a single encouraging word/message with paired scripture.
 *
 * This is the core content model for the "A Word Found You" experience.
 * Messages are structured data so they can be easily replaced with
 * final approved content later.
 */
export type WordMessage = {
  /** Unique identifier for this word (kebab-case slug) */
  id: string;
  /** The bold headline word/phrase, e.g. "KEEP GOING." */
  title: string;
  /** The Bible scripture text (without reference) */
  scripture: string;
  /** The Bible reference, e.g. "Galatians 6:9" */
  reference: string;
  /** A short, warm encouragement paragraph expanding on the word */
  encouragement: string;
};

/**
 * Application state machine.
 * landing → discovering → word
 * word → discovering (via "Give Me Another Word") → word
 */
export type AppState = 'landing' | 'discovering' | 'word';
