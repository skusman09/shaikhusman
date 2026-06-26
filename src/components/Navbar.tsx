import * as React from 'react';
import { navigation, logo } from '@/content';
import { Container } from './ui/Container';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/cn';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState<string>('');
  const overlayRef = React.useRef<HTMLDivElement>(null);
  const toggleBtnRef = React.useRef<HTMLButtonElement>(null);

  // Handle mobile menu body scroll lock & Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        toggleBtnRef.current?.focus();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  // Focus trap for accessibility
  React.useEffect(() => {
    if (!isOpen || !overlayRef.current) return;

    const focusableElements = overlayRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select'
    );
    
    if (focusableElements.length === 0) return;
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    document.addEventListener('keydown', handleTab);
    
    // Focus first element on open
    setTimeout(() => {
      firstElement.focus();
    }, 100); // slight delay for animation

    return () => {
      document.removeEventListener('keydown', handleTab);
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
    <header className={cn(
      "sticky top-0 z-50 w-full border-b transition-colors duration-300",
      isOpen ? "bg-bg border-transparent" : "bg-bg/90 backdrop-blur-md border-border/40"
    )}>
      <Container>
        {/* Top Bar - Remains visible and interactive at z-50 */}
        <div className="flex h-16 items-center justify-between relative z-50">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2 font-heading text-xl font-bold tracking-tighter text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
            aria-label="Home"
            onClick={() => setIsOpen(false)}
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
              ref={toggleBtnRef}
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

      {/* Mobile Navigation Full Screen Overlay */}
      <div
        role="dialog"
        aria-modal="true"
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-bg md:hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
      >
        <div 
          ref={overlayRef}
          className={cn(
            "flex flex-col items-center justify-start pt-[20vh] h-full w-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            isOpen ? "scale-100 translate-y-0" : "scale-95 -translate-y-8"
          )}
        >
          <nav className="flex flex-col items-center justify-center gap-8">
            {navigation.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-4xl sm:text-5xl font-semibold tracking-tight transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/50 rounded-xl px-6 py-1",
                    isActive ? "text-primary" : "text-muted hover:text-primary"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}

