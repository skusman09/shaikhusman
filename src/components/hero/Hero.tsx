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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Mobile: Photo comes first by default, but we'll use order-last on mobile for text, order-first for image. 
              Actually, the prompt asks: 
              Mobile: Photo first -> Name -> Role -> Introduction -> Buttons -> Quick information 
              Desktop: Left side (Text), Right side (Photo)
              To achieve this, the image container must be first in DOM or use order utilities.
          */}
          
          {/* IMAGE SECTION (Order 1 on mobile, Order 2 on desktop) */}
          <div className="order-1 lg:order-2 relative w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg">
              <HeroImage />
              
              {/* Badge positioned overlapping the image */}
              <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 z-10">
                <HeroBadge />
              </div>
            </div>
          </div>

          {/* TEXT SECTION (Order 2 on mobile, Order 1 on desktop) */}
          <div className="order-2 lg:order-1 flex flex-col gap-6 lg:max-w-2xl">
            <div className="flex flex-col gap-2">
              <Heading as="h1" size="4xl" className="tracking-tight leading-[1.1]">
                {hero.name}
              </Heading>
              <Heading as="h2" size="2xl" className="text-primary/70 font-normal">
                {hero.role}
              </Heading>
            </div>

            <Paragraph size="lg" className="text-muted leading-relaxed max-w-xl">
              {hero.introduction}
            </Paragraph>

            <HeroActions />

            <div className="mt-4 lg:mt-8 pt-8 border-t border-border/40">
              <HeroQuickInfo />
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
