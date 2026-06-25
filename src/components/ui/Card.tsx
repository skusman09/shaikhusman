import React from 'react';
import { cn } from '@/lib/cn';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverable = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-xl border border-border bg-surface text-primary shadow-sm',
          hoverable && 'transition-colors hover:border-accent/50',
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = 'Card';
