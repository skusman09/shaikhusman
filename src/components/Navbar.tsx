import * as React from 'react';
import { siteConfig } from '@/data/site';
import { Container } from './ui/Container';
import { ThemeToggle } from './ThemeToggle';
import { Button } from './ui/Button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/cn';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState<string>('');

  // Handle mobile menu body scroll lock
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle active section tracking
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2 font-geist text-xl font-bold tracking-tight text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
            aria-label="Home"
          >
            SU.
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {siteConfig.nav.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-2 py-1",
                    isActive ? "text-primary" : "text-muted hover:text-primary"
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <div className="hidden md:block">
              <Button variant="secondary" size="sm">
                Resume
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-md border border-border/50 text-primary hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Toggle menu</span>
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Navigation Drawer */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur-sm md:hidden transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8 p-6">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-2xl font-semibold tracking-tight text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button variant="secondary" size="lg" className="mt-4 w-full max-w-[200px]">
            Resume
          </Button>
        </nav>
      </div>
    </header>
  );
}
