import * as React from 'react';
import { navigation, logo } from '@/content';
import { Container } from './ui/Container';
import { ThemeToggle } from './ThemeToggle';
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
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-bg/90 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2 font-heading text-xl font-bold tracking-tighter text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
            aria-label="Home"
          >
            {logo}
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navigation.map((item) => {
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
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-md border border-border/50 text-primary hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors"
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

      {/* Mobile Navigation Overlay */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-40 bg-bg/80 backdrop-blur-sm md:hidden transition-opacity duration-300",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Navigation Sliding Drawer */}
      <div
        className={cn(
          "fixed top-16 right-0 bottom-0 z-50 w-64 bg-surface border-l border-border/40 md:hidden transition-transform duration-300 ease-out shadow-2xl",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col gap-1 p-4">
          {navigation.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "text-base font-medium tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg px-4 py-3 transition-colors",
                  isActive ? "bg-accent/10 text-accent" : "text-muted hover:bg-bg hover:text-primary"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
