import type { WordMessage } from '../types/word';
import type { Accent } from '../theme/tokens';
import { colors, communityColors, fonts } from '../theme/tokens';
import { accentFor } from '../theme/accents';
import logoUrl from '../assets/brand/covenant-culture-logo.png';
import waveUrl from '../assets/brand/smoke-wave.jpg';

/**
 * Renders a word as a 1080×1920 PNG (phone wallpaper / story size) for
 * "Save this for your week". Drawn with Canvas 2D rather than a DOM
 * screenshot so it comes out identical on every phone.
 *
 * Composition: cream ground + soft glows, smoke wave along the bottom,
 * text block centred in the middle band, logo above the wave.
 */

export const IMAGE_WIDTH = 1080;
export const IMAGE_HEIGHT = 1920;

const W = IMAGE_WIDTH;
const H = IMAGE_HEIGHT;

/** The text block is centred in this band, clear of story/lock-screen UI. */
const BAND_TOP = 360;
const BAND_BOTTOM = 1420;
const LOGO_WIDTH = 420;
const LOGO_CENTER_Y = 1530;
/** The wave is drawn wider than the canvas and anchored to the bottom edge. */
const WAVE_SCALE = 1.2;

const DISPLAY = fonts.display;
const BODY = fonts.body;

export async function renderWordImage(word: WordMessage, date = new Date()): Promise<Blob> {
  await loadFonts();
  const [logo, wave] = await Promise.all([loadImage(logoUrl), loadImage(waveUrl)]);

  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas 2D is not available');

  const accent = accentFor(word);
  drawBackground(ctx, wave, accent);
  drawText(ctx, layoutText(ctx, word, accent, weekLabel(date)));

  const logoHeight = (LOGO_WIDTH * logo.naturalHeight) / logo.naturalWidth;
  ctx.drawImage(logo, (W - LOGO_WIDTH) / 2, LOGO_CENTER_Y - logoHeight / 2, LOGO_WIDTH, logoHeight);

  return toBlob(canvas);
}

/* ── Background ─────────────────────────────── */

function drawBackground(ctx: CanvasRenderingContext2D, wave: HTMLImageElement, accent: Accent) {
  ctx.fillStyle = colors.cream;
  ctx.fillRect(0, 0, W, H);

  glow(ctx, W / 2, 760, 780, accent.base, 0.1);
  glow(ctx, 40, 80, 620, colors.amber, 0.12);
  glow(ctx, W - 60, 1360, 640, colors.yellow, 0.12);

  // The wave is a photo on white: multiply drops the white into the cream
  const waveW = W * WAVE_SCALE;
  const waveH = (waveW * wave.naturalHeight) / wave.naturalWidth;
  ctx.save();
  ctx.globalCompositeOperation = 'multiply';
  ctx.globalAlpha = 0.2;
  ctx.translate(W / 2, waveH / 2);
  ctx.rotate(Math.PI);
  ctx.drawImage(wave, -waveW / 2, -waveH / 2, waveW, waveH);
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.globalAlpha = 1;
  ctx.drawImage(wave, (W - waveW) / 2, H - waveH, waveW, waveH);
  ctx.restore();
}

function glow(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, hex: string, alpha: number) {
  const gradient = ctx.createRadialGradient(x, y, 0, x, y, r);
  gradient.addColorStop(0, rgba(hex, alpha));
  gradient.addColorStop(1, rgba(hex, 0));
  ctx.fillStyle = gradient;
  ctx.fillRect(x - r, y - r, r * 2, r * 2);
}

/* ── Text layout ────────────────────────────── */

type Block =
  | { kind: 'tracked'; text: string; font: string; size: number; tracking: number; color: string; gap: number }
  | { kind: 'title'; lines: string[]; font: string; size: number; lineHeight: number; gap: number; ink: string; accent: string }
  | { kind: 'paragraph'; lines: string[]; font: string; size: number; lineHeight: number; color: string; gap: number }
  | { kind: 'divider'; size: number; gap: number }
  | { kind: 'quote'; font: string; size: number; color: string; gap: number };

function blockHeight(block: Block): number {
  switch (block.kind) {
    case 'title':
    case 'paragraph':
      return block.lines.length * block.size * block.lineHeight;
    case 'quote':
      return block.size * 0.4;
    default:
      return block.size;
  }
}

/** Lays out every block at a common scale, shrinking until it fits the band. */
function layoutText(ctx: CanvasRenderingContext2D, word: WordMessage, accent: Accent, week: string): Block[] {
  const band = BAND_BOTTOM - BAND_TOP;
  let blocks: Block[] = [];

  for (let scale = 1; scale >= 0.5; scale -= 0.03) {
    const s = (px: number) => Math.round(px * scale);

    ctx.font = `500 ${s(48)}px ${BODY}`;
    const scripture = prettyLines(ctx, word.scripture, 860);
    ctx.font = `500 ${s(34)}px ${BODY}`;
    const encouragement = prettyLines(ctx, word.encouragement, 820);
    const title = fitTitle(ctx, word.title, 920, 3, s(176), s(100));

    blocks = [
      { kind: 'tracked', text: 'A WORD FOUND YOU', font: `800 ${s(30)}px ${BODY}`, size: s(30), tracking: s(30) * 0.24, color: colors.orangeInk, gap: s(18) },
      { kind: 'tracked', text: week.toUpperCase(), font: `700 ${s(24)}px ${BODY}`, size: s(24), tracking: s(24) * 0.16, color: colors.muted, gap: s(62) },
      { kind: 'title', lines: title.lines, font: `800 ${title.size}px ${DISPLAY}`, size: title.size, lineHeight: 0.94, gap: s(46), ink: colors.ink, accent: accent.display },
      { kind: 'divider', size: 8, gap: s(52) },
      { kind: 'quote', font: `700 ${s(130)}px ${DISPLAY}`, size: s(130), color: accent.base, gap: s(14) },
      { kind: 'paragraph', lines: scripture, font: `500 ${s(48)}px ${BODY}`, size: s(48), lineHeight: 1.46, color: colors.inkSoft, gap: s(32) },
      { kind: 'tracked', text: `${word.reference.toUpperCase()} · ${word.translation}`, font: `700 ${s(46)}px ${DISPLAY}`, size: s(46), tracking: s(46) * 0.08, color: accent.ink, gap: s(42) },
      { kind: 'paragraph', lines: encouragement, font: `500 ${s(34)}px ${BODY}`, size: s(34), lineHeight: 1.5, color: colors.muted, gap: 0 },
    ];

    if (totalHeight(blocks) <= band) break;
  }
  return blocks;
}

function totalHeight(blocks: Block[]): number {
  return blocks.reduce((sum, b) => sum + blockHeight(b) + b.gap, 0);
}

function drawText(ctx: CanvasRenderingContext2D, blocks: Block[]) {
  const cx = W / 2;
  let y = BAND_TOP + (BAND_BOTTOM - BAND_TOP - totalHeight(blocks)) / 2;
  ctx.textBaseline = 'alphabetic';

  for (const block of blocks) {
    const height = blockHeight(block);

    switch (block.kind) {
      case 'tracked': {
        ctx.font = block.font;
        ctx.fillStyle = block.color;
        drawTracked(ctx, block.text, cx, baselineFor(ctx, y, height), block.tracking);
        break;
      }
      case 'title': {
        ctx.font = block.font;
        const lineBox = block.size * block.lineHeight;
        const lastLine = block.lines.length - 1;
        block.lines.forEach((line, i) => {
          const words = line.split(' ');
          const space = ctx.measureText(' ').width;
          let x = cx - ctx.measureText(line).width / 2;
          ctx.textAlign = 'left';
          words.forEach((w, j) => {
            // Two-tone, like the COVENANT / CULTURE lockup: the last word takes the accent
            ctx.fillStyle = i === lastLine && j === words.length - 1 ? block.accent : block.ink;
            ctx.fillText(w, x, baselineFor(ctx, y + i * lineBox, lineBox));
            x += ctx.measureText(w).width + space;
          });
        });
        break;
      }
      case 'paragraph': {
        ctx.font = block.font;
        ctx.fillStyle = block.color;
        ctx.textAlign = 'center';
        const lineBox = block.size * block.lineHeight;
        block.lines.forEach((line, i) => {
          ctx.fillText(line, cx, baselineFor(ctx, y + i * lineBox, lineBox));
        });
        break;
      }
      case 'divider': {
        const segment = 34;
        const gap = 10;
        let x = cx - (communityColors.length * segment + (communityColors.length - 1) * gap) / 2;
        for (const color of communityColors) {
          ctx.fillStyle = color;
          roundRect(ctx, x, y, segment, block.size, block.size / 2);
          x += segment + gap;
        }
        break;
      }
      case 'quote': {
        // Oversized opening quote mark, ink-centred in its box
        ctx.font = block.font;
        ctx.fillStyle = block.color;
        ctx.textAlign = 'center';
        const m = ctx.measureText('“');
        const inkCenterOffset = (m.actualBoundingBoxDescent - m.actualBoundingBoxAscent) / 2;
        ctx.globalAlpha = 0.55;
        ctx.fillText('“', cx, y + height / 2 - inkCenterOffset);
        ctx.globalAlpha = 1;
        break;
      }
    }

    y += height + block.gap;
  }
}

/** Baseline that optically centres capital letters in a line box. */
function baselineFor(ctx: CanvasRenderingContext2D, top: number, lineBox: number): number {
  const capHeight = ctx.measureText('H').actualBoundingBoxAscent;
  return top + lineBox / 2 + capHeight / 2;
}

function drawTracked(ctx: CanvasRenderingContext2D, text: string, centerX: number, baseline: number, tracking: number) {
  const chars = [...text];
  const widths = chars.map((c) => ctx.measureText(c).width);
  const total = widths.reduce((a, b) => a + b, 0) + tracking * (chars.length - 1);
  let x = centerX - total / 2;
  ctx.textAlign = 'left';
  chars.forEach((c, i) => {
    ctx.fillText(c, x, baseline);
    x += widths[i] + tracking;
  });
}

function wrapLines(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const lines: string[] = [];
  let line = '';
  for (const word of text.split(/\s+/)) {
    const candidate = line ? `${line} ${word}` : word;
    if (line && ctx.measureText(candidate).width > maxWidth) {
      lines.push(line);
      line = word;
    } else {
      line = candidate;
    }
  }
  if (line) lines.push(line);
  return lines;
}

/** Greedy wrap, then pull a word down so the last line is never a lone orphan. */
function prettyLines(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const lines = wrapLines(ctx, text, maxWidth);
  const last = lines.length - 1;
  if (last > 0 && !lines[last].includes(' ')) {
    const prev = lines[last - 1].split(' ');
    if (prev.length > 2) {
      const moved = `${prev.pop()} ${lines[last]}`;
      if (ctx.measureText(moved).width <= maxWidth) {
        lines[last - 1] = prev.join(' ');
        lines[last] = moved;
      }
    }
  }
  return lines;
}

/** Narrowest width that keeps the same line count — like CSS text-wrap: balance. */
function balancedLines(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const count = wrapLines(ctx, text, maxWidth).length;
  let lo = maxWidth * 0.3;
  let hi = maxWidth;
  for (let i = 0; i < 12; i++) {
    const mid = (lo + hi) / 2;
    if (wrapLines(ctx, text, mid).length > count) lo = mid;
    else hi = mid;
  }
  return wrapLines(ctx, text, hi);
}

function fitTitle(ctx: CanvasRenderingContext2D, title: string, maxWidth: number, maxLines: number, start: number, min: number) {
  let size = start;
  let lines: string[] = [title];
  for (; size >= min; size -= 4) {
    ctx.font = `800 ${size}px ${DISPLAY}`;
    lines = balancedLines(ctx, title, maxWidth);
    const widest = Math.max(...lines.map((l) => ctx.measureText(l).width));
    if (lines.length <= maxLines && widest <= maxWidth) break;
  }
  return { size: Math.max(size, min), lines };
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  if (ctx.roundRect) ctx.roundRect(x, y, w, h, r);
  else ctx.rect(x, y, w, h);
  ctx.fill();
}

/* ── Helpers ────────────────────────────────── */

function weekLabel(date: Date): string {
  const sunday = new Date(date);
  sunday.setDate(date.getDate() - date.getDay());
  const day = new Intl.DateTimeFormat(undefined, { day: 'numeric', month: 'long' }).format(sunday);
  return `For the week of ${day}`;
}

function rgba(hex: string, alpha: number): string {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`;
}

async function loadFonts() {
  if (!document.fonts) return;
  const sample = 'AZaz09“”’–';
  await Promise.all(
    [`800 100px ${DISPLAY}`, `700 100px ${DISPLAY}`, `500 40px ${BODY}`, `700 40px ${BODY}`, `800 40px ${BODY}`].map(
      (font) => document.fonts.load(font, sample).catch(() => []),
    ),
  );
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Could not load ${src}`));
    img.src = src;
  });
}

function toBlob(canvas: HTMLCanvasElement): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => (blob ? resolve(blob) : reject(new Error('Could not encode the image'))),
      'image/png',
    );
  });
}
