import { cn } from '@/lib/cn';
import { hero } from '@/content';

export function HeroImage({ className }: { className?: string }) {
  return (
    <div className={cn("relative mx-auto w-full max-w-sm md:max-w-md lg:max-w-lg aspect-square lg:aspect-[4/5]", className)}>
      {/* Subtle blurred accent glow behind the image */}
      <div className="absolute -inset-2 md:-inset-4 bg-accent/20 dark:bg-accent/10 rounded-[3rem] blur-2xl md:blur-3xl opacity-60 dark:opacity-40" />
      
      {/* Image Container */}
      <div className="relative h-full w-full overflow-hidden rounded-3xl border border-border/40 bg-surface shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.2)] flex items-center justify-center">
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
