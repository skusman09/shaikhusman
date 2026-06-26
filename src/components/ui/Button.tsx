import React from 'react';
import { cn } from '@/lib/cn';

const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 cursor-pointer';

const variants = {
  primary: 'bg-accent text-white hover:bg-accent/90',
  secondary: 'border border-border bg-transparent hover:bg-surface text-primary',
  ghost: 'hover:bg-surface text-primary',
};

const sizes = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 py-2',
  lg: 'h-11 px-6 text-base',
  icon: 'h-10 w-10',
};

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

type SharedButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children?: React.ReactNode;
};

export type ButtonProps =
  | (SharedButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' })
  | (SharedButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a' });

export function Button({ variant = 'primary', size = 'md', className, as: Tag = 'button', ...props }: ButtonProps) {
  const combinedClass = cn(baseStyles, variants[variant], sizes[size], className);
  if (Tag === 'a') {
    return <a className={combinedClass} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)} />;
  }
  return <button className={combinedClass} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)} />;
}
Button.displayName = 'Button';
