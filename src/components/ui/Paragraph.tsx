import React from 'react';
import { cn } from '@/lib/cn';

export interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: 'sm' | 'base' | 'lg';
  muted?: boolean;
}

export function Paragraph({
  size = 'base',
  muted = false,
  className,
  ...props
}: ParagraphProps) {
  const sizes = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
  };

  return (
    <p
      className={cn(
        'font-body leading-relaxed',
        muted ? 'text-secondary' : 'text-primary',
        sizes[size],
        className
      )}
      {...props}
    />
  );
}
