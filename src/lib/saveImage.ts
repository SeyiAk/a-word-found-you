import type { WordMessage } from '../types/word';

/**
 * Getting an image into the phone's photo gallery from a web page:
 * - iPhone / iPad: the share sheet ("Save Image" puts it in Photos)
 * - Android: a download (lands in Downloads, shown in Gallery / Google Photos)
 * - Desktop: a download
 *
 * Call these straight from a tap handler with an already-rendered file:
 * iOS refuses the share sheet once an await has outlived the user gesture.
 */

export type SaveTarget = 'photos' | 'gallery' | 'download';
export type SaveResult = 'shared' | 'downloaded' | 'cancelled';

function isIOS(): boolean {
  return (
    /iP(hone|ad|od)/.test(navigator.userAgent) ||
    // iPadOS reports itself as a Mac
    (navigator.userAgent.includes('Macintosh') && navigator.maxTouchPoints > 1)
  );
}

export function canShareFile(file: File): boolean {
  return typeof navigator.canShare === 'function' && navigator.canShare({ files: [file] });
}

/** Where "Save" will put the image on this device. */
export function saveTarget(file: File | null): SaveTarget {
  if (isIOS() && (!file || canShareFile(file))) return 'photos';
  if (/Android/i.test(navigator.userAgent)) return 'gallery';
  return 'download';
}

export async function saveImage(file: File): Promise<SaveResult> {
  if (saveTarget(file) === 'photos') {
    try {
      await navigator.share({ files: [file] });
      return 'shared';
    } catch (error) {
      if (isAbort(error)) return 'cancelled';
      throw error;
    }
  }
  downloadFile(file);
  return 'downloaded';
}

export async function shareImage(file: File, word: WordMessage): Promise<SaveResult> {
  try {
    await navigator.share({
      files: [file],
      title: `My word for the week: ${word.title}`,
      text: `${word.title} — ${word.reference} (${word.translation})`,
    });
    return 'shared';
  } catch (error) {
    if (isAbort(error)) return 'cancelled';
    throw error;
  }
}

function downloadFile(file: File) {
  const url = URL.createObjectURL(file);
  const link = document.createElement('a');
  link.href = url;
  link.download = file.name;
  link.rel = 'noopener';
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 10_000);
}

function isAbort(error: unknown): boolean {
  return error instanceof DOMException && error.name === 'AbortError';
}
