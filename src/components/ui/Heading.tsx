import React from 'react';
import { cn } from '@/lib/cn';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingLevel;
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
}

export function Heading({
  as: Component = 'h2',
  size,
  className,
  ...props
}: HeadingProps) {
  // Map semantic level to default visual size if size is not provided
  const defaultSizes: Record<HeadingLevel, string> = {
    h1: '4xl',
    h2: '3xl',
    h3: '2xl',
    h4: 'xl',
    h5: 'lg',
    h6: 'base',
  };

  const finalSize = size || defaultSizes[Component];

  const sizes = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl md:text-4xl',
    '4xl': 'text-4xl md:text-5xl lg:text-6xl',
  };

  return (
    <Component
      className={cn(
        'font-heading font-semibold tracking-tight text-primary',
        sizes[finalSize as keyof typeof sizes],
        className
      )}
      {...props}
    />
  );
}
