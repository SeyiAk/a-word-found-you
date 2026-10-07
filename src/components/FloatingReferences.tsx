import type { CSSProperties } from 'react';
import type { FieldItem } from '../lib/discoveryPlan';

interface FloatingReferencesProps {
  items: FieldItem[];
  /** Accent custom properties for the found highlight */
  style?: CSSProperties;
  /** Reference currently under the "search light" (matches the ticker) */
  lit: string | null;
  /** The chosen reference, once found */
  found: string | null;
  /** Everything except the found reference drifts outward and fades */
  scatter: boolean;
}

/**
 * Scripture references floating around the discovery screen at three
 * depths. Each bobs on its own loop; the ticker lights them up one by one.
 *
 * Layers: position + scatter → drift loop → label (entrance, highlight),
 * so each animation owns its own transform. Purely decorative.
 */
export function FloatingReferences({ items, style, lit, found, scatter }: FloatingReferencesProps) {
  return (
    <div
      className={`ref-field${scatter ? ' ref-field--scatter' : ''}`}
      style={style}
      aria-hidden="true"
    >
      <div className="ref-field__inner">
        {items.map((item, i) => {
          const state =
            item.reference === found ? ' is-found' : item.reference === lit ? ' is-lit' : '';
          return (
            <span
              key={i}
              className={`float-ref float-ref--d${item.depth}${state}`}
              style={item.style}
            >
              <span className="float-ref__drift">
                <span className="float-ref__label">{item.reference}</span>
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
