import { cn } from '@/lib/cn';
import { MapPin, Briefcase, Server } from 'lucide-react';
import { hero } from '@/content';
import type { JSX } from 'react';

const iconMap: Record<string, JSX.Element> = {
  Briefcase: <Briefcase className="w-3.5 h-3.5 flex-shrink-0" />,
  MapPin:    <MapPin    className="w-3.5 h-3.5 flex-shrink-0" />,
  Server:    <Server    className="w-3.5 h-3.5 flex-shrink-0" />,
};

export function HeroQuickInfo({ className }: { className?: string }) {
  return (
    <div className={cn('flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6', className)}>
      {hero.quickInfo.map((item, i) => (
        <span
          key={i}
          className="flex items-center gap-2 text-sm text-muted"
        >
          <span className="text-accent/60">{iconMap[item.icon] ?? null}</span>
          <span className="leading-none">{item.label}</span>
          {/* Divider — only between items, hidden on mobile stack */}
          {i < hero.quickInfo.length - 1 && (
            <span className="hidden sm:inline-block w-px h-3 bg-border/60 ml-2" />
          )}
        </span>
      ))}
    </div>
  );
}
