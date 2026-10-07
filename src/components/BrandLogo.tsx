import { ViewTransition } from 'react';
import logoUrl from '../assets/brand/covenant-culture-logo.png';

interface BrandLogoProps {
  /** hero — large, centred with the landing copy · compact — small, top of screen */
  variant: 'hero' | 'compact';
}

/**
 * Covenant Culture lockup, rendered once for the whole app.
 *
 * It persists across screens; the named view transition morphs it
 * between the hero and compact sizes instead of re-mounting it.
 */
export function BrandLogo({ variant }: BrandLogoProps) {
  return (
    <header className={`brand-header brand-header--${variant}`}>
      <ViewTransition name="brand-logo" update="logo-morph">
        <img
          className={`brand-logo brand-logo--${variant}`}
          src={logoUrl}
          alt="Covenant Culture"
          width={678}
          height={195}
          decoding="async"
          fetchPriority="high"
        />
      </ViewTransition>
    </header>
  );
}
