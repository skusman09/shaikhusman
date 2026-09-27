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
          'rounded-xl border border-border/70 bg-surface/95 text-primary shadow-sm hover:shadow-md transition-shadow',
          hoverable && 'transition-colors hover:border-accent/50',
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = 'Card';
