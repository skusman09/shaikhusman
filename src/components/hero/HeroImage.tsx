import { cn } from '@/lib/cn';
import { hero } from '@/content';

export function HeroImage({ className }: { className?: string }) {
  return (
    <div className={cn("relative mx-auto w-full max-w-sm md:max-w-md lg:max-w-lg aspect-square lg:aspect-[4/5]", className)}>
      {/* Decorative background element (very subtle) */}
      <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl border border-border/40 bg-surface/30 md:translate-x-6 md:translate-y-6" />
      
      {/* Image Container */}
      <div className="relative h-full w-full overflow-hidden rounded-3xl border border-border/50 bg-surface/50 shadow-2xl flex items-center justify-center">
        {/* Actual Image Content */}
        <img 
          src="/images/usman-photo.png" 
          alt={hero.imageAlt}
          className="h-full w-full object-cover object-top" 
          fetchPriority="high"
          loading="eager"
        />
      </div>
    </div>
  );
}
