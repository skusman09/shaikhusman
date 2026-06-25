import { cn } from '@/lib/cn';
import { hero } from '@/content';

export function HeroBadge({ className }: { className?: string }) {
  return (
    <div className={cn("inline-flex items-center gap-2 rounded-full border border-border/50 bg-surface/50 px-3 py-1 text-sm text-muted backdrop-blur-sm", className)}>
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
      </span>
      <span>{hero.statusBadge}</span>
    </div>
  );
}
