import { cn } from '@/lib/cn';
import { MapPin, Briefcase, Calendar, Server } from 'lucide-react';
import { hero } from '@/content';

const iconMap: Record<string, React.ReactNode> = {
  Briefcase: <Briefcase className="w-4 h-4" />,
  Calendar: <Calendar className="w-4 h-4" />,
  MapPin: <MapPin className="w-4 h-4" />,
  Server: <Server className="w-4 h-4" />,
};

export function HeroQuickInfo({ className }: { className?: string }) {

  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mt-2", className)}>
      {hero.quickInfo.map((item, i) => (
        <div key={i} className="flex flex-col gap-3 p-5 rounded-2xl border border-border/40 bg-surface/20 hover:bg-surface/40 transition-colors">
          <div className="flex items-center gap-2 text-accent">
            {iconMap[item.icon] || null}
            <span className="text-xs font-bold uppercase tracking-wider">{item.icon === 'Briefcase' ? 'Experience' : item.icon === 'MapPin' ? 'Location' : 'Focus'}</span>
          </div>
          <span className="text-sm font-medium text-primary leading-relaxed">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
