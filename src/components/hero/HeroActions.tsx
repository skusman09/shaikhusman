import { cn } from '@/lib/cn';
import { Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons';
import { hero } from '@/content';

const btnBase = 'inline-flex items-center gap-2 rounded-md font-medium transition-colors focus-visible:outline-none cursor-pointer';

export function HeroActions({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-8", className)}>
      {/* Primary CTA — Download Resume */}
      <a
        href={hero.cta.primary.href}
        download
        className={cn(btnBase, 'h-11 px-8 text-base bg-accent text-white hover:bg-accent/90 shadow-sm')}
      >
        <Download className="w-4 h-4" />
        {hero.cta.primary.label}
      </a>

      <div className="flex items-center gap-3">
        {/* Secondary CTA — GitHub */}
        <a
          href={hero.cta.secondary.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(btnBase, 'h-11 w-11 justify-center border border-border bg-surface hover:bg-surface/80 text-primary shadow-sm')}
          aria-label="View GitHub"
        >
          <GithubIcon className="w-[22px] h-[22px]" />
        </a>

        {/* Secondary CTA — LinkedIn */}
        <a
          href="https://www.linkedin.com/in/shaikh-usman"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(btnBase, 'h-11 w-11 justify-center border border-border bg-surface hover:bg-surface/80 text-primary shadow-sm')}
          aria-label="LinkedIn Profile"
        >
          <LinkedinIcon className="w-[22px] h-[22px]" />
        </a>
      </div>
    </div>
  );
}
