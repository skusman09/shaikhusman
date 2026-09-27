import * as React from 'react';
import { createPortal } from 'react-dom';
import { navigation, logo } from '@/content';
import { Container } from './ui/Container';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/cn';

// Drawer + backdrop rendered into document.body via portal
// so they are never clipped by the sticky header stacking context.
function MobileDrawer({
  isOpen,
  activeSection,
  onClose,
}: {
  isOpen: boolean;
  activeSection: string;
  onClose: () => void;
}) {
  const drawerRef = React.useRef<HTMLDivElement>(null);

  // Focus trap
  React.useEffect(() => {
    if (!isOpen || !drawerRef.current) return;
    const els = drawerRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])'
    );
    if (els.length === 0) return;
    const first = els[0];
    const last = els[els.length - 1];
    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey && document.activeElement === first) { last.focus(); e.preventDefault(); }
      else if (!e.shiftKey && document.activeElement === last) { first.focus(); e.preventDefault(); }
    };
    document.addEventListener('keydown', handleTab);
    setTimeout(() => first.focus(), 80);
    return () => document.removeEventListener('keydown', handleTab);
  }, [isOpen]);

  return createPortal(
    <>
      {/* Dark backdrop — covers full viewport, sits below drawer */}
      <div
        aria-hidden="true"
        onClick={onClose}
        style={{ position: 'fixed', inset: 0, zIndex: 9998 }}
        className={cn(
          "bg-black/50 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      />

      {/* Slide-in drawer — full height from top of viewport, right-aligned */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
        style={{ position: 'fixed', top: 0, right: 0, bottom: 0, zIndex: 9999 }}
        className={cn(
          "w-[72vw] max-w-[320px] flex flex-col",
          "bg-bg border-l border-border/40 shadow-2xl",
          "transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Drawer header — aligns with navbar height */}
        <div className="flex items-center justify-between h-16 px-5 border-b border-border/40 shrink-0">
          <span className="text-sm font-semibold tracking-wide text-muted uppercase">
            Navigation
          </span>
          <button
            type="button"
            onClick={onClose}
            className="flex items-center justify-center w-8 h-8 rounded-md text-muted hover:text-primary hover:bg-surface transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Close navigation"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Navigation links */}
        <nav className="flex flex-col px-3 py-4 gap-0.5 flex-1 overflow-y-auto">
          {navigation.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "group flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                  isActive
                    ? "bg-surface text-primary"
                    : "text-muted hover:bg-surface/60 hover:text-primary"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                  
                  // Wait for the drawer to close and body overflow to unlock
                  setTimeout(() => {
                    const targetId = item.href.replace('#', '');
                    const element = document.getElementById(targetId);
                    if (element) {
                      // 80px offset for the sticky navbar
                      const offset = 80;
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.scrollY - offset;
                      
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                      });
                    }
                  }, 50);
                }}
              >
                <span>{item.label}</span>
                <ArrowRight
                  className={cn(
                    "w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5",
                    isActive ? "text-accent" : "text-border"
                  )}
                />
              </a>
            );
          })}
        </nav>

        {/* Drawer footer */}
        <div className="px-5 py-4 border-t border-border/40 shrink-0">
          <p className="text-xs text-muted/50 leading-relaxed">
            Backend Software Engineer
          </p>
        </div>
      </div>
    </>,
    document.body
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState<string>('');
  const toggleBtnRef = React.useRef<HTMLButtonElement>(null);

  // Only render portal after client mount (SSR safety)
  React.useEffect(() => setIsMounted(true), []);

  // Scroll lock + Escape key
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

  // Active section tracking
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const close = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-surface/80 backdrop-blur-md">
        <Container size="2xl">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <a
              href="/"
              className="flex items-center gap-2 font-heading text-xl font-bold tracking-tighter text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
              aria-label="Home"
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
                close();
              }}
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
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                ref={toggleBtnRef}
                type="button"
                className="md:hidden flex items-center justify-center w-9 h-9 rounded-md border border-border/50 text-primary hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors"
                onClick={() => setIsOpen((v) => !v)}
                aria-expanded={isOpen}
                aria-label="Toggle navigation"
              >
                <span className="sr-only">Toggle navigation</span>
                {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Portal: rendered directly into document.body — never inside the sticky header */}
      {isMounted && (
        <MobileDrawer
          isOpen={isOpen}
          activeSection={activeSection}
          onClose={close}
        />
      )}
    </>
  );
}
