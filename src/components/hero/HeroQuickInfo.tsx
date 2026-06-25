import { cn } from '@/lib/cn';
import { MapPin, Briefcase, Calendar } from 'lucide-react';

export function HeroQuickInfo({ className }: { className?: string }) {
  const info = [
    { icon: <Briefcase className="w-4 h-4" />, label: "[CURRENT ROLE PLACEHOLDER]" },
    { icon: <Calendar className="w-4 h-4" />, label: "[EXPERIENCE PLACEHOLDER]" },
    { icon: <MapPin className="w-4 h-4" />, label: "[LOCATION PLACEHOLDER]" },
  ];

  return (
    <ul className={cn("flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8", className)}>
      {info.map((item, i) => (
        <li key={i} className="flex items-center gap-2 text-sm text-muted">
          <span className="text-primary/50">{item.icon}</span>
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  );
}
