import { Container } from './ui/Container';
import { Paragraph } from './ui/Paragraph';
import { seo } from '@/content';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg py-8">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex flex-col items-center sm:items-start gap-0.5">
            <span className="text-sm text-muted">Designed & Engineered by</span>
            <span className="text-sm font-semibold text-primary">Shaikh Mohammed Usman</span>
            <span className="text-sm text-muted">Backend Software Engineer</span>
          </div>
          <div className="flex items-center gap-4">
            {/* Social links will go here in the next phase */}
          </div>
        </div>
      </Container>
    </footer>
  );
}
