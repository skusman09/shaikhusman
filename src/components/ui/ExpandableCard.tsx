import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/cn';
import { Heading } from './Heading';
import { Paragraph } from './Paragraph';
import type { ExperienceItem, Project } from '@/types/portfolio';
import { ChevronDown, ExternalLink, GitBranch } from 'lucide-react';

interface ExpandableCardProps {
  item: Partial<ExperienceItem & Project>;
  variant: 'product' | 'consulting' | 'internal' | 'personal';
  className?: string;
}

export function ExpandableCard({ item, variant, className }: ExpandableCardProps) {
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Click outside listener
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setExpanded(false);
      }
    }
    
    if (expanded) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [expanded]);

  // Expanded Content Section (shared across all variants)
  const renderExpandedContent = () => (
    <div
      className={cn(
        "grid transition-all duration-300 ease-in-out w-full",
        expanded ? "grid-rows-[1fr] opacity-100 mt-6 pt-6 border-t border-border/40" : "grid-rows-[0fr] opacity-0"
      )}
    >
      <div className="overflow-hidden">
        <div className="flex flex-col gap-6">
          {item.businessContext && (
            <div>
              <h5 className="text-sm font-semibold text-primary mb-2">Business Context</h5>
              <Paragraph size="sm" muted className="leading-relaxed">{item.businessContext}</Paragraph>
            </div>
          )}
          {item.responsibilities && item.responsibilities.length > 0 && (
            <div>
              <h5 className="text-sm font-semibold text-primary mb-2">My Responsibilities</h5>
              <ul className="list-disc pl-4 space-y-1">
                {item.responsibilities.map((r, i) => (
                  <li key={i} className="text-sm text-muted leading-relaxed">{r}</li>
                ))}
              </ul>
            </div>
          )}
          {item.architecture && (
            <div>
              <h5 className="text-sm font-semibold text-primary mb-2">Architecture</h5>
              <Paragraph size="sm" muted className="leading-relaxed">{item.architecture}</Paragraph>
            </div>
          )}
          {item.engineeringDecisions && item.engineeringDecisions.length > 0 && (
            <div>
              <h5 className="text-sm font-semibold text-primary mb-2">Engineering Decisions</h5>
              <ul className="list-disc pl-4 space-y-1">
                {item.engineeringDecisions.map((d, i) => (
                  <li key={i} className="text-sm text-muted leading-relaxed">{d}</li>
                ))}
              </ul>
            </div>
          )}
          {item.keyLearnings && item.keyLearnings.length > 0 && (
            <div>
              <h5 className="text-sm font-semibold text-primary mb-2">Key Learnings</h5>
              <ul className="list-disc pl-4 space-y-1">
                {item.keyLearnings.map((l, i) => (
                  <li key={i} className="text-sm text-muted leading-relaxed">{l}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const baseCardClasses = "group rounded-2xl border border-border/50 bg-surface/30 transition-colors";

  if (variant === 'product') {
    return (
      <div ref={cardRef} className={cn(baseCardClasses, "p-6 md:p-8 flex flex-col h-full", className)}>
        <div className="flex justify-between items-start mb-6 gap-4">
          <Heading as="h4" size="xl">{item.title}</Heading>
          <span className="text-xs font-medium px-2.5 py-1 bg-surface rounded-full text-muted border border-border/50 whitespace-nowrap">
            {item.dateRange}
          </span>
        </div>
        <div className="mb-6">
          <span className="text-sm font-medium text-accent">{item.role}</span>
        </div>
        <Paragraph className="mb-8 text-muted leading-relaxed flex-1">
          {item.description}
        </Paragraph>
        <div className="flex flex-col gap-6 mt-auto">
          <div className="flex flex-wrap gap-2">
            {item.technologies?.map((tech, idx) => (
              <span key={idx} className="text-xs px-2.5 py-1 bg-surface border border-border/50 rounded-md text-muted/90">
                {tech}
              </span>
            ))}
          </div>
          <button 
            onClick={() => setExpanded(!expanded)}
            className="text-sm font-semibold text-primary hover:text-accent transition-colors flex items-center gap-1 group/link w-fit"
          >
            {expanded ? 'Show Less' : 'More Details'}
            <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", expanded ? "rotate-180" : "")} />
          </button>
        </div>
        {renderExpandedContent()}
      </div>
    );
  }

  if (variant === 'consulting') {
    return (
      <div ref={cardRef} className={cn(baseCardClasses, "p-8 md:p-10 flex flex-col", className)}>
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
          <div className="flex-1 w-full space-y-6">
            <div>
              <Heading as="h4" size="xl" className="mb-2">{item.title}</Heading>
              <span className="text-sm font-medium text-accent">{item.role}</span>
            </div>
            <Paragraph className="leading-relaxed text-muted">
              {item.description}
            </Paragraph>
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap gap-2">
                {item.technologies?.map((tech, idx) => (
                  <span key={idx} className="text-xs px-2.5 py-1 bg-surface border border-border/50 rounded-md text-muted/90">
                    {tech}
                  </span>
                ))}
              </div>
              <button 
                onClick={() => setExpanded(!expanded)}
                className="text-sm font-semibold text-primary hover:text-accent transition-colors flex items-center gap-1 group/link w-fit"
              >
                {expanded ? 'Show Less' : 'More Details'}
                <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", expanded ? "rotate-180" : "")} />
              </button>
            </div>
          </div>
          <div className="hidden md:flex w-full md:w-1/3 h-48 bg-surface/50 border border-border/50 rounded-lg items-center justify-center flex-shrink-0">
            <span className="text-4xl opacity-50">🏢</span>
          </div>
        </div>
        {renderExpandedContent()}
      </div>
    );
  }

  if (variant === 'internal') {
    return (
      <div ref={cardRef} className={cn(baseCardClasses, "p-6 flex flex-col h-full", className)}>
        <div className="h-12 w-12 bg-surface border border-border/50 rounded-lg mb-6 flex items-center justify-center text-xl">
          ⚙️
        </div>
        <Heading as="h4" size="lg" className="mb-2">{item.title}</Heading>
        <Paragraph size="sm" className="mb-4 text-accent">{item.role}</Paragraph>
        <Paragraph size="sm" muted className="mb-6 flex-1">
          {item.description}
        </Paragraph>
        <div className="mt-auto">
          <button 
            onClick={() => setExpanded(!expanded)}
            className="text-sm font-semibold text-primary hover:text-accent transition-colors flex items-center gap-1 group/link w-fit"
          >
            {expanded ? 'Show Less' : 'More Details'}
            <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", expanded ? "rotate-180" : "")} />
          </button>
        </div>
        {renderExpandedContent()}
      </div>
    );
  }

  if (variant === 'personal') {
    return (
      <div ref={cardRef} className={cn(baseCardClasses, "overflow-hidden flex flex-col h-full", className)}>
        <div className="h-48 md:h-64 bg-surface/50 border-b border-border/50 w-full flex items-center justify-center text-5xl opacity-50">
          🚀
        </div>
        <div className="p-6 md:p-8 flex flex-col flex-1">
          <Heading as="h4" size="xl" className="mb-4">{item.title}</Heading>
          <Paragraph className="mb-8 flex-1 whitespace-pre-line text-muted">
            {item.description}
          </Paragraph>
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/40">
            <button 
              onClick={() => setExpanded(!expanded)}
              className="text-sm font-semibold text-primary hover:text-accent transition-colors flex items-center gap-1 group/link w-fit"
            >
              {expanded ? 'Show Less' : 'More Details'}
              <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", expanded ? "rotate-180" : "")} />
            </button>
            <div className="flex gap-4">
              {item.link && (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors" aria-label="Live Demo">
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
              {item.github && (
                <a href={item.github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors" aria-label="GitHub Repo">
                  <GitBranch className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
          {renderExpandedContent()}
        </div>
      </div>
    );
  }

  return null;
}
