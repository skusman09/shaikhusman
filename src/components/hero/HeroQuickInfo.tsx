import { cn } from '@/lib/cn';
import { MapPin, Briefcase, Server } from 'lucide-react';
import { hero } from '@/content';
import type { JSX } from 'react';

const iconMap: Record<string, JSX.Element> = {
  Briefcase: <Briefcase className="w-4 h-4" />,
  MapPin: <MapPin className="w-4 h-4" />,
  Server: <Server className="w-4 h-4" />,
};

const labelMap: Record<string, string> = {
  Briefcase: 'Experience',
  MapPin: 'Location',
  Server: 'Focus',
};

export function HeroQuickInfo({ className }: { className?: string }) {
  return (
    <div className={cn('grid grid-cols-1 sm:grid-cols-3 gap-4 w-full', className)}>
      {hero.quickInfo.map((item, i) => (
        <div
          key={i}
          className="flex flex-col gap-2.5 p-5 rounded-2xl border border-border/40 bg-surface/20 hover:bg-surface/40 transition-colors duration-150"
        >
          <div className="flex items-center gap-2 text-accent">
            {iconMap[item.icon] ?? null}
            <span className="text-xs font-bold uppercase tracking-widest">
              {labelMap[item.icon] ?? item.icon}
            </span>
          </div>
          <span className="text-sm font-medium text-primary leading-snug">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
