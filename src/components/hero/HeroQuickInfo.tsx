import { cn } from '@/lib/cn';
import { MapPin, Briefcase, Calendar } from 'lucide-react';
import { hero } from '@/content';

const iconMap: Record<string, React.ReactNode> = {
  Briefcase: <Briefcase className="w-4 h-4" />,
  Calendar: <Calendar className="w-4 h-4" />,
  MapPin: <MapPin className="w-4 h-4" />,
};

export function HeroQuickInfo({ className }: { className?: string }) {

  return (
    <ul className={cn("flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8", className)}>
      {hero.quickInfo.map((item, i) => (
        <li key={i} className="flex items-center gap-2 text-sm text-muted">
          <span className="text-primary/50">{iconMap[item.icon] || null}</span>
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  );
}
