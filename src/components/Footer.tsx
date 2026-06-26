import { Container } from './ui/Container';

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-bg py-10 md:py-12">
      <Container>
        <div className="flex flex-col items-center text-center max-w-lg mx-auto">
          {/* Primary Info */}
          <div className="flex flex-col items-center gap-1.5 mb-6">
            <span className="text-base font-semibold tracking-tight text-primary">
              Shaikh Mohammed Usman
            </span>
            <span className="text-sm text-muted">
              Backend Software Engineer &bull; Mumbai, India
            </span>
          </div>

          {/* Secondary Info */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-muted/70">
              Built with Astro &bull; React &bull; TypeScript &bull; Tailwind CSS
            </span>
            <span className="text-[11px] text-muted/40">
              &copy; {new Date().getFullYear()}
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
