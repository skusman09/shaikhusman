import { Container } from './ui/Container';
import { Paragraph } from './ui/Paragraph';
import { siteConfig } from '@/data/site';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg py-8">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <Paragraph size="sm" muted>
            &copy; {year} {siteConfig.author}. All rights reserved.
          </Paragraph>
          <div className="flex items-center gap-4">
            {/* Social links will go here in the next phase */}
          </div>
        </div>
      </Container>
    </footer>
  );
}
