import { cn } from '@/lib/cn';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Paragraph } from '@/components/ui/Paragraph';
import { HeroBadge } from './HeroBadge';
import { HeroImage } from './HeroImage';
import { HeroActions } from './HeroActions';
import { HeroQuickInfo } from './HeroQuickInfo';
import { hero } from '@/content';

export function Hero({ className }: { className?: string }) {
  return (
    <Section id="hero" className={cn("min-h-[90vh] flex items-center pt-24 md:pt-32 pb-16", className)}>
      <Container>
        {/* CSS Grid for Desktop (2 columns) vs Mobile (1 column, reversed order) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Mobile: Photo comes first by default, but we'll use order-last on mobile for text, order-first for image. 
              Actually, the prompt asks: 
              Mobile: Photo first -> Name -> Role -> Introduction -> Buttons -> Quick information 
              Desktop: Left side (Text), Right side (Photo)
              To achieve this, the image container must be first in DOM or use order utilities.
          */}
          
          {/* IMAGE SECTION — top-aligned with name block, slight top offset for optical alignment */}
          <div className="order-1 lg:order-2 relative w-full flex justify-center lg:justify-end lg:pt-2">
            <div className="relative w-full max-w-[340px] md:max-w-[380px] lg:max-w-[420px]">
              <HeroImage />
            </div>
          </div>

          {/* TEXT SECTION (Order 2 on mobile, Order 1 on desktop) */}
          <div className="order-2 lg:order-1 flex flex-col gap-7">
            <div className="flex flex-col gap-4">
              {/* Name: two-line layout — Shaikh Mohammed / Usman */}
              <h1 className="font-heading font-semibold tracking-tighter leading-[1.08] text-primary text-4xl md:text-5xl lg:text-6xl">
                Shaikh Mohammed<br />Usman
              </h1>
              <Heading as="h2" size="2xl" className="text-primary/60 font-light tracking-tight">
                {hero.role}
              </Heading>
            </div>

            <div className="space-y-4">
              <Heading as="h3" size="xl" className="font-medium text-primary leading-snug max-w-xl">
                {hero.tagline}
              </Heading>
              <Paragraph size="lg" className="text-muted leading-relaxed max-w-2xl">
                {hero.introduction}
              </Paragraph>
            </div>

            <HeroActions />

            <div className="flex pt-2">
              <HeroBadge />
            </div>

            <div className="mt-4 lg:mt-6 pt-8 border-t border-border/40">
              <HeroQuickInfo />
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
