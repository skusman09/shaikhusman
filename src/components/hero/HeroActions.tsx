import { cn } from '@/lib/cn';
import { Button } from '@/components/ui/Button';
import { Download, GitBranch, Link, Mail } from 'lucide-react';
import { hero } from '@/content';

export function HeroActions({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-4 mt-8", className)}>
      <Button variant="primary" size="lg" className="gap-2">
        <Download className="w-4 h-4" />
        {hero.cta.primary.label}
      </Button>
      <Button variant="secondary" size="lg" className="gap-2">
        <GitBranch className="w-4 h-4" />
        <span className="sr-only">GitHub</span>
      </Button>
      <Button variant="secondary" size="lg" className="gap-2">
        <Link className="w-4 h-4" />
        <span className="sr-only">LinkedIn</span>
      </Button>
      <Button variant="secondary" size="lg" className="gap-2">
        <Mail className="w-4 h-4" />
        {hero.cta.secondary.label}
      </Button>
    </div>
  );
}
