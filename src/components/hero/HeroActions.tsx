import React from 'react';
import { cn } from '@/lib/cn';
import { Download, GitBranch, Link } from 'lucide-react';
import { hero } from '@/content';

const btnBase = 'inline-flex items-center gap-2 rounded-md font-medium transition-colors focus-visible:outline-none cursor-pointer';

export function HeroActions({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3 mt-8", className)}>
      {/* Primary CTA — Download Resume */}
      <a
        href={hero.cta.primary.href}
        download
        className={cn(btnBase, 'h-11 px-6 text-base bg-accent text-white hover:bg-accent/90')}
      >
        <Download className="w-4 h-4" />
        {hero.cta.primary.label}
      </a>

      {/* Secondary CTA — GitHub */}
      <a
        href={hero.cta.secondary.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(btnBase, 'h-11 px-6 text-base border border-border bg-transparent hover:bg-surface text-primary')}
      >
        <GitBranch className="w-4 h-4" />
        View GitHub
      </a>

      {/* Ghost CTA — LinkedIn */}
      <a
        href="https://www.linkedin.com/in/shaikh-usman"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(btnBase, 'h-11 px-5 text-base hover:bg-surface text-muted hover:text-primary')}
      >
        <Link className="w-4 h-4" />
        LinkedIn
      </a>
    </div>
  );
}
