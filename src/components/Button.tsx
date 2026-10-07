import type { ComponentProps, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps extends ComponentProps<'button'> {
  variant?: ButtonVariant;
  /** Optional leading icon (decorative) */
  icon?: ReactNode;
  children: ReactNode;
}

/**
 * Themed pill button.
 * Variants: primary (orange CTA), secondary (outlined), ghost (text-only).
 */
export function Button({
  variant = 'primary',
  icon,
  children,
  className = '',
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`btn btn--${variant} ${className}`}
      {...props}
    >
      {icon && <span className="btn__icon">{icon}</span>}
      <span className="btn__label">{children}</span>
    </button>
  );
}
