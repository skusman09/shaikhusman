import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/cn';
import { Heading } from './Heading';
import { Paragraph } from './Paragraph';
import type { ExperienceItem, Project } from '@/types/portfolio';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/ui/BrandIcons';

interface ExpandableCardProps {
  item: Partial<ExperienceItem & Project>;
  variant: 'product' | 'consulting' | 'internal' | 'personal';
  className?: string;
}

// Shared toggle button — keeps interaction identical across all card variants
function ToggleButton({ expanded, onClick }: { expanded: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface rounded-sm transition-colors duration-150 w-fit"
      aria-expanded={expanded}
      aria-label={expanded ? "Show less details" : "Show more details"}
    >
      {expanded ? 'Show Less' : 'More Details'}
      <ChevronDown
        className={cn('w-4 h-4 transition-transform duration-250 ease-out', expanded ? 'rotate-180' : '')}
        aria-hidden
      />
    </button>
  );
}

// Shared expanded detail panel — consistent layout and animation
function ExpandedPanel({ item, expanded }: { item: Partial<ExperienceItem & Project>; expanded: boolean }) {
  const hasContent =
    item.businessContext ||
    (item.responsibilities && item.responsibilities.length > 0) ||
    item.architecture ||
    (item.engineeringDecisions && item.engineeringDecisions.length > 0) ||
    (item.keyLearnings && item.keyLearnings.length > 0);

  if (!hasContent) return null;

  return (
    <div
      className={cn(
        'grid transition-all duration-300 ease-in-out w-full',
        expanded
          ? 'grid-rows-[1fr] opacity-100 mt-6 pt-6 border-t border-border/40'
          : 'grid-rows-[0fr] opacity-0 pointer-events-none'
      )}
    >
      <div className="overflow-hidden">
        <div className="grid sm:grid-cols-2 gap-6">
          {item.businessContext && (
            <div className="sm:col-span-2">
              <h5 className="text-xs font-bold uppercase tracking-widest text-accent/70 mb-2">Business Context</h5>
              <Paragraph size="sm" muted className="leading-relaxed">{item.businessContext}</Paragraph>
            </div>
          )}
          {item.responsibilities && item.responsibilities.length > 0 && (
            <div>
              <h5 className="text-xs font-bold uppercase tracking-widest text-accent/70 mb-2">Responsibilities</h5>
              <ul className="space-y-1.5">
                {item.responsibilities.map((r, i) => (
                  <li key={i} className="flex gap-2 text-sm text-muted leading-relaxed">
                    <span className="text-accent/50 mt-1 flex-shrink-0">›</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {item.architecture && (
            <div>
              <h5 className="text-xs font-bold uppercase tracking-widest text-accent/70 mb-2">Architecture</h5>
              <Paragraph size="sm" muted className="leading-relaxed">{item.architecture}</Paragraph>
            </div>
          )}
          {item.engineeringDecisions && item.engineeringDecisions.length > 0 && (
            <div>
              <h5 className="text-xs font-bold uppercase tracking-widest text-accent/70 mb-2">Engineering Decisions</h5>
              <ul className="space-y-1.5">
                {item.engineeringDecisions.map((d, i) => (
                  <li key={i} className="flex gap-2 text-sm text-muted leading-relaxed">
                    <span className="text-accent/50 mt-1 flex-shrink-0">›</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {item.keyLearnings && item.keyLearnings.length > 0 && (
            <div>
              <h5 className="text-xs font-bold uppercase tracking-widest text-accent/70 mb-2">Key Learnings</h5>
              <ul className="space-y-1.5">
                {item.keyLearnings.map((l, i) => (
                  <li key={i} className="flex gap-2 text-sm text-muted leading-relaxed">
                    <span className="text-accent/50 mt-1 flex-shrink-0">›</span>
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Tech pill — shared token tag
function TechPill({ label }: { label: string }) {
  return (
    <span className="text-xs px-2.5 py-1 bg-surface border border-border/50 rounded-md text-muted/90 leading-none">
      {label}
    </span>
  );
}

const BASE = 'rounded-2xl border border-border/50 bg-surface/30 transition-colors duration-150';

export function ExpandableCard({ item, variant, className }: ExpandableCardProps) {
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
        setExpanded(false);
      }
    }
    if (expanded) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [expanded]);

  const toggle = () => setExpanded(v => !v);

  if (variant === 'product') {
    return (
      <div ref={cardRef} className={cn(BASE, 'p-6 md:p-8 flex flex-col', className)}>
        <div className="flex justify-between items-start mb-4 gap-4">
          <Heading as="h4" size="xl">{item.title}</Heading>
          {item.dateRange && (
            <span className="text-xs font-medium px-2.5 py-1 bg-surface rounded-full text-muted border border-border/50 whitespace-nowrap flex-shrink-0">
              {item.dateRange}
            </span>
          )}
        </div>
        <span className="text-sm font-medium text-accent mb-5">{item.role}</span>
        <Paragraph className="text-muted leading-relaxed flex-1 mb-6">{item.description}</Paragraph>
        {item.technologies && item.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {item.technologies.map((t, i) => <TechPill key={i} label={t} />)}
          </div>
        )}
        <ToggleButton expanded={expanded} onClick={toggle} />
        <ExpandedPanel item={item} expanded={expanded} />
      </div>
    );
  }

  if (variant === 'consulting') {
    return (
      <div ref={cardRef} className={cn(BASE, 'p-8 md:p-10', className)}>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1 min-w-0 space-y-5">
            <div>
              <Heading as="h4" size="xl" className="mb-1">{item.title}</Heading>
              <span className="text-sm font-medium text-accent">{item.role}</span>
            </div>
            <Paragraph className="leading-relaxed text-muted">{item.description}</Paragraph>
            {item.technologies && item.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((t, i) => <TechPill key={i} label={t} />)}
              </div>
            )}
            <ToggleButton expanded={expanded} onClick={toggle} />
          </div>
          <div className="hidden md:flex w-full md:w-56 h-40 bg-surface/50 border border-border/50 rounded-xl items-center justify-center flex-shrink-0 text-4xl opacity-40">
            🏢
          </div>
        </div>
        <ExpandedPanel item={item} expanded={expanded} />
      </div>
    );
  }

  if (variant === 'internal') {
    return (
      <div ref={cardRef} className={cn(BASE, 'p-6 flex flex-col', className)}>
        <div className="h-10 w-10 bg-surface border border-border/50 rounded-lg mb-5 flex items-center justify-center text-lg">
          ⚙️
        </div>
        <Heading as="h4" size="lg" className="mb-1">{item.title}</Heading>
        <span className="text-sm font-medium text-accent mb-4">{item.role}</span>
        <Paragraph size="sm" muted className="leading-relaxed mb-5 flex-1">{item.description}</Paragraph>
        <ToggleButton expanded={expanded} onClick={toggle} />
        <ExpandedPanel item={item} expanded={expanded} />
      </div>
    );
  }

  if (variant === 'personal') {
    return (
      <div ref={cardRef} className={cn(BASE, 'overflow-hidden flex flex-col', className)}>
        <div className="h-44 bg-surface/50 border-b border-border/50 w-full flex items-center justify-center text-5xl opacity-40">
          🚀
        </div>
        <div className="p-6 md:p-8 flex flex-col flex-1">
          <Heading as="h4" size="xl" className="mb-3">{item.title}</Heading>
          <Paragraph className="text-muted leading-relaxed flex-1 mb-6">{item.description}</Paragraph>
          <div className="flex items-center justify-between pt-5 border-t border-border/40">
            <ToggleButton expanded={expanded} onClick={toggle} />
            <div className="flex items-center gap-3">
              {item.link && (
                <a href={item.link} target="_blank" rel="noopener noreferrer"
                  className="text-muted hover:text-primary transition-colors duration-150"
                  aria-label="Live Demo">
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {item.github && (
                <a href={item.github} target="_blank" rel="noopener noreferrer"
                  className="text-muted hover:text-primary transition-colors duration-150"
                  aria-label="GitHub Repository">
                  <GithubIcon className="w-[18px] h-[18px]" />
                </a>
              )}
            </div>
          </div>
          <ExpandedPanel item={item} expanded={expanded} />
        </div>
      </div>
    );
  }

  return null;
}
