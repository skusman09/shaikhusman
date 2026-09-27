import { Container } from './ui/Container';
import { GithubIcon, LinkedinIcon } from './ui/BrandIcons';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border/40 bg-background py-12">
      <Container>
        <div className="flex flex-col items-center text-center max-w-lg mx-auto">
          {/* Primary Info */}
          <div className="flex flex-col items-center gap-2 mb-8">
            <span className="text-base font-semibold tracking-tight text-primary">
              Shaikh Mohammed Usman
            </span>
            <span className="text-sm text-muted">
              Backend Software Engineer &bull; Mumbai, India
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 mb-8">
            <a href="https://github.com/skusman09" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors p-2 rounded-full hover:bg-surface border border-transparent hover:border-border/40" aria-label="GitHub">
              <GithubIcon className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/mohammed-usman-shaikh/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors p-2 rounded-full hover:bg-surface border border-transparent hover:border-border/40" aria-label="LinkedIn">
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>

          {/* Secondary Info */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs text-muted/70">
              Built with Astro &bull; React &bull; Tailwind CSS
            </span>
            <span className="text-xs text-muted/50">
              &copy; {currentYear} Shaikh Mohammed Usman. All rights reserved.
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
