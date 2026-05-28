import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'whatsapp' | 'ghost';
type Size = 'sm' | 'md' | 'lg' | 'xl';

const variants: Record<Variant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  whatsapp: 'btn-whatsapp',
  ghost: 'btn text-ink hover:bg-white/5',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3.5 text-base',
  lg: 'px-7 py-4 text-lg',
  xl: 'px-8 py-5 text-lg sm:text-xl',
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & CommonProps;
type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & CommonProps & { href: string };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(variants[variant], sizes[size], className)}
      {...props}
    />
  ),
);
Button.displayName = 'Button';

export const ButtonLink = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ variant = 'primary', size = 'md', className, ...props }, ref) => (
    <a
      ref={ref}
      className={cn(variants[variant], sizes[size], className)}
      {...props}
    />
  ),
);
ButtonLink.displayName = 'ButtonLink';
