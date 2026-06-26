import React from 'react';
import { cn } from '@/lib/cn';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

export function Container({ className, size = 'xl', ...props }: ContainerProps) {
  const sizes = {
    sm: 'max-w-3xl',
    md: 'max-w-4xl',
    lg: 'max-w-5xl',
    xl: 'max-w-7xl',
    '2xl': 'max-w-[1440px]',
    full: 'max-w-full',
  };

  return (
    <div
      className={cn('mx-auto w-full px-4 sm:px-6 lg:px-8', sizes[size], className)}
      {...props}
    />
  );
}
