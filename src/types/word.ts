/**
 * Bible translations quoted in the dataset, by their standard abbreviations.
 * Editions: NIV (2011), ESV (2025 text edition), NLT (2015), CSB (2017),
 * NASB (2020), NKJV (1982), KJV (public domain).
 */
export type BibleTranslation = 'NIV' | 'ESV' | 'NLT' | 'CSB' | 'NASB' | 'NKJV' | 'KJV';

/**
 * Represents a single encouraging word/message with paired scripture.
 *
 * This is the core content model for the "A Word Found You" experience.
 * Messages are structured data so they can be easily replaced with
 * final approved content later.
 */
export type WordMessage = {
  /** Unique, stable identifier for this word (kebab-case slug) */
  id: string;
  /** The bold headline word/phrase, e.g. "KEEP GOING." */
  title: string;
  /** The Bible text, quoted verbatim from `translation` (without reference) */
  scripture: string;
  /** The Bible reference, e.g. "Galatians 6:9" */
  reference: string;
  /** The translation `scripture` is quoted from, e.g. "NIV" */
  translation: BibleTranslation;
  /** A short, warm encouragement paragraph expanding on the word (original copy, not Scripture) */
  encouragement: string;
};

/**
 * Application state machine.
 * landing → discovering → word
 * word → discovering (via "Give Me Another Word") → word
 */
export type AppState = 'landing' | 'discovering' | 'word';
