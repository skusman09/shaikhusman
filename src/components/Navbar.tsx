import { siteConfig } from '@/data/site';
import { Container } from './ui/Container';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Name */}
          <div className="flex items-center gap-2 font-geist font-semibold tracking-tight text-primary">
            <a href="/" aria-label="Home" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm">
              SU.
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-2 py-1"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            {/* Mobile menu toggle button placeholder */}
            <div className="md:hidden w-8 h-8 rounded border border-border/50 flex items-center justify-center">
              <span className="sr-only">Toggle menu</span>
              <div className="w-4 h-[2px] bg-primary relative before:absolute before:-top-1.5 before:w-4 before:h-[2px] before:bg-primary after:absolute after:top-1.5 after:w-4 after:h-[2px] after:bg-primary" />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
