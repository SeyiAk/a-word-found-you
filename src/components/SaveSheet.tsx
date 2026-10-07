import { useEffect, useRef, useState, type MouseEvent, type SyntheticEvent } from 'react';
import type { WordMessage } from '../types/word';
import type { WordImage } from '../hooks/useWordImage';
import { canShareFile, saveImage, saveTarget, shareImage, type SaveResult } from '../lib/saveImage';
import { Button } from './Button';
import { CloseIcon, DownloadIcon, ShareIcon } from './Icons';

interface SaveSheetProps {
  open: boolean;
  word: WordMessage;
  image: WordImage;
  onClose: () => void;
}

const CLOSE_MS = 240;

const SAVE_LABEL = {
  photos: 'Save to Photos',
  gallery: 'Save to Gallery',
  download: 'Download image',
} as const;

const FALLBACK_MESSAGE = 'Couldn’t save automatically — press and hold the image to save it.';

/**
 * Bottom sheet that previews the generated 9:16 image and saves it.
 *
 * Native <dialog>: focus is trapped while open and returns to the
 * Save button on close; Esc and backdrop taps close it. Press-and-hold
 * on the preview always works, even in in-app browsers.
 */
export function SaveSheet({ open, word, image, onClose }: SaveSheetProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [closing, setClosing] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const target = saveTarget(image.file);
  const canShare = image.file !== null && canShareFile(image.file);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  useEffect(() => () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  /** Animate out, then close the dialog for real. */
  const requestClose = () => {
    if (closing) return;
    setClosing(true);
    closeTimer.current = setTimeout(() => dialogRef.current?.close(), CLOSE_MS);
  };

  // Every close lands here — ours after the exit animation, or the browser's
  // own (it may ignore preventDefault on Esc) — so open state never drifts.
  const handleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setClosing(false);
    setMessage(null);
    onClose();
  };

  const handleCancel = (event: SyntheticEvent<HTMLDialogElement>) => {
    event.preventDefault(); // Esc: animate out instead of vanishing
    requestClose();
  };

  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) requestClose();
  };

  const report = (result: SaveResult) => {
    if (result === 'cancelled') return;
    if (result === 'shared') setMessage('Done — carry it with you this week 💛');
    else if (target === 'gallery') setMessage('Saved to Downloads — find it in your Gallery 💛');
    else setMessage('Downloaded 💛');
  };

  // No awaits before save/share: iOS only opens the share sheet from a direct tap
  const handleSave = () => {
    if (!image.file) return;
    setMessage(null);
    saveImage(image.file).then(report, () => setMessage(FALLBACK_MESSAGE));
  };

  const handleShare = () => {
    if (!image.file) return;
    setMessage(null);
    shareImage(image.file, word).then(report, () => setMessage(FALLBACK_MESSAGE));
  };

  return (
    <dialog
      ref={dialogRef}
      className={`save-sheet${closing ? ' save-sheet--closing' : ''}`}
      aria-labelledby="save-sheet-title"
      onCancel={handleCancel}
      onClose={handleClose}
      onClick={handleBackdropClick}
    >
      <div className="save-sheet__panel">
        <div className="save-sheet__handle" aria-hidden="true" />

        <div className="save-sheet__header">
          <h2 id="save-sheet-title" className="save-sheet__title">Your word for the week</h2>
          <button type="button" className="save-sheet__close" onClick={requestClose} aria-label="Close">
            <CloseIcon />
          </button>
        </div>

        <div className="save-sheet__preview">
          {image.status === 'ready' && (
            <img
              className="save-sheet__image"
              src={image.url}
              alt={`${word.title} ${word.reference} (${word.translation}) — your word for the week, ready to save`}
            />
          )}
          {image.status === 'pending' && (
            <div className="save-sheet__developing" role="status">Preparing your image…</div>
          )}
          {image.status === 'error' && (
            <p className="save-sheet__error" role="alert">
              We couldn&rsquo;t create the image. Take a screenshot of your word instead.
            </p>
          )}
        </div>

        <div className="save-sheet__actions">
          <Button variant="primary" icon={<DownloadIcon />} onClick={handleSave} disabled={!image.file}>
            {SAVE_LABEL[target]}
          </Button>
          {canShare && target !== 'photos' && (
            <Button variant="secondary" icon={<ShareIcon />} onClick={handleShare}>
              Share
            </Button>
          )}
        </div>

        <p className="save-sheet__hint">Or press and hold the image to save it.</p>
        <p className="save-sheet__message" role="status">{message}</p>
      </div>
    </dialog>
  );
}
