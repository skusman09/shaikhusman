import { cn } from '@/lib/cn';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Paragraph } from '@/components/ui/Paragraph';
import { HeroImage } from './HeroImage';
import { HeroActions } from './HeroActions';
import { hero } from '@/content';

export function Hero({ className }: { className?: string }) {
  return (
    <Section id="hero" className={cn("min-h-[80vh] flex pt-6 pb-12 md:pt-10 md:pb-20 lg:pt-12", className)}>
      <Container>
        {/* CSS Grid for Desktop (2 columns) vs Mobile (1 column, reversed order) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Mobile: Photo comes first by default, but we'll use order-last on mobile for text, order-first for image. 
              Actually, the prompt asks: 
              Mobile: Photo first -> Name -> Role -> Introduction -> Buttons -> Quick information 
              Desktop: Left side (Text), Right side (Photo)
              To achieve this, the image container must be first in DOM or use order utilities.
          */}

          {/* IMAGE SECTION — top-aligned with name block, slight top offset for optical alignment */}
          <div className="order-1 lg:order-2 relative w-full flex justify-center lg:justify-end lg:pt-2">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px]">
              <HeroImage />
            </div>
          </div>

          {/* TEXT SECTION (Order 2 on mobile, Order 1 on desktop) */}
          <div className="order-2 lg:order-1 flex flex-col gap-4">
            <div className="flex flex-col gap-6">
              {/* Name: two-line layout — Shaikh Mohammed / Usman */}
              <h1 className="font-heading font-semibold tracking-tighter leading-[1.05] text-primary text-3xl md:text-4xl lg:text-[2.625rem]">
                {hero.name}
              </h1>
              <Heading as="h2" size="2xl" className="text-primary/60 font-light tracking-tight">
                {hero.role}
              </Heading>
            </div>

            <div className="space-y-5">
              <Heading as="h3" size="xl" className="font-medium text-primary leading-snug max-w-xl">
                {hero.tagline}
              </Heading>
              <Paragraph size="lg" className="text-muted leading-relaxed max-w-2xl">
                {hero.introduction}
              </Paragraph>
            </div>

            <HeroActions />

            <div className="pt-4 flex items-center gap-2.5 text-md font-medium text-muted">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Backend Software Engineer opportunities.</span>
            </div>
          </div>

        </div>
      </Container>
    </Section >
  );
}
