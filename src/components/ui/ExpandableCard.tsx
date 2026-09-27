import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@/lib/cn';
import { Heading } from './Heading';
import { Paragraph } from './Paragraph';
import type { ExperienceItem, Project } from '@/types/portfolio';
import { X, ExternalLink, Users, CreditCard, BookOpen, CalendarDays, Palette, Pizza, ArrowRight } from 'lucide-react';
import { GithubIcon } from '@/components/ui/BrandIcons';

interface ExpandableCardProps {
  item: Partial<ExperienceItem & Project>;
  variant: 'product' | 'consulting' | 'internal' | 'personal';
  className?: string;
}

function TechPill({ label }: { label: string }) {
  return (
    <span className="text-xs px-2.5 py-1 bg-surface border border-border/50 rounded-md text-muted/90 leading-none">
      {label}
    </span>
  );
}

function ProjectModal({ item, isOpen, onClose }: { item: Partial<ExperienceItem & Project>; isOpen: boolean; onClose: () => void }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen || typeof document === 'undefined') return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 sm:py-12">
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm animate-modal-backdrop"
        onClick={onClose}
      />
      
      <div 
        className="relative w-full max-w-3xl bg-surface/95 border border-border/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-modal-content max-h-[85vh] sm:max-h-[90vh]"
        role="dialog"
      >
        <div className="flex items-center justify-between p-6 border-b border-border/40 bg-background/50">
          <Heading as="h4" size="xl">{item.title}</Heading>
          <button 
            onClick={onClose}
            className="p-2 text-muted hover:text-primary transition-colors hover:bg-surface rounded-full focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6 md:p-8 overflow-y-auto">
          {item.role && <span className="text-sm font-medium text-accent block mb-4">{item.role}</span>}
          {item.dateRange && <span className="text-xs font-medium px-2.5 py-1 bg-surface rounded-full text-muted border border-border/50 whitespace-nowrap mb-6 inline-block">{item.dateRange}</span>}
          
          <Paragraph className="text-muted leading-relaxed mb-8">{item.description}</Paragraph>

          <div className="grid sm:grid-cols-2 gap-8">
            {item.businessContext && (
              <div className="sm:col-span-2">
                <h5 className="text-xs font-bold uppercase tracking-widest text-accent/70 mb-3">Business Context</h5>
                <Paragraph size="sm" muted className="leading-relaxed">{item.businessContext}</Paragraph>
              </div>
            )}
            
            {item.responsibilities && item.responsibilities.length > 0 && (
              <div>
                <h5 className="text-xs font-bold uppercase tracking-widest text-accent/70 mb-3">Responsibilities</h5>
                <ul className="space-y-2">
                  {item.responsibilities.map((r, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted leading-relaxed">
                      <span className="text-accent/50 mt-1 flex-shrink-0">›</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {item.engineeringDecisions && item.engineeringDecisions.length > 0 && (
              <div>
                <h5 className="text-xs font-bold uppercase tracking-widest text-accent/70 mb-3">Engineering Decisions</h5>
                <ul className="space-y-2">
                  {item.engineeringDecisions.map((d, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted leading-relaxed">
                      <span className="text-accent/50 mt-1 flex-shrink-0">›</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {item.architecture && (
              <div className="sm:col-span-2">
                <h5 className="text-xs font-bold uppercase tracking-widest text-accent/70 mb-3">Architecture</h5>
                <Paragraph size="sm" muted className="leading-relaxed">{item.architecture}</Paragraph>
              </div>
            )}
            
            {item.keyLearnings && item.keyLearnings.length > 0 && (
              <div className="sm:col-span-2">
                <h5 className="text-xs font-bold uppercase tracking-widest text-accent/70 mb-3">Key Learnings</h5>
                <ul className="space-y-2">
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
          
          {item.technologies && item.technologies.length > 0 && (
            <div className="mt-8 pt-6 border-t border-border/40">
              <h5 className="text-xs font-bold uppercase tracking-widest text-accent/70 mb-3">Tech Stack</h5>
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((t, i) => <TechPill key={i} label={t} />)}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}

const BASE = 'rounded-2xl border border-border/70 bg-surface/95 shadow-sm transition-all duration-300 hover:shadow-md hover:border-border group flex flex-col h-full';

export function ExpandableCard({ item, variant, className }: ExpandableCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const hasContent = item.businessContext || 
    (item.responsibilities && item.responsibilities.length > 0) || 
    item.architecture || 
    (item.engineeringDecisions && item.engineeringDecisions.length > 0) || 
    (item.keyLearnings && item.keyLearnings.length > 0);

  const MoreDetailsButton = () => {
    if (!hasContent) return null;
    return (
      <button
        onClick={() => setIsModalOpen(true)}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface rounded-sm transition-colors duration-150 mt-auto pt-5"
      >
        More Details
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </button>
    );
  };

  if (variant === 'product' || variant === 'consulting') {
    return (
      <>
        <div className={cn(BASE, 'p-6 md:p-8', className)}>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2 sm:gap-4">
            <Heading as="h4" size="xl">{item.title}</Heading>
            {item.dateRange && (
              <span className="text-xs font-medium px-2.5 py-1 bg-surface rounded-full text-muted border border-border/50 whitespace-nowrap flex-shrink-0">
                {item.dateRange}
              </span>
            )}
          </div>
          <span className="text-sm font-medium text-accent mb-5">{item.role}</span>
          <Paragraph className="text-muted leading-relaxed mb-6">{item.description}</Paragraph>
          {item.technologies && item.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-2">
              {item.technologies.map((t, i) => <TechPill key={i} label={t} />)}
            </div>
          )}
          <MoreDetailsButton />
        </div>
        <ProjectModal item={item} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </>
    );
  }

  if (variant === 'internal') {
    return (
      <>
        <div className={cn(BASE, 'p-6 md:p-8', className)}>
          <div className="h-10 w-10 bg-surface border border-border/50 rounded-lg mb-5 flex items-center justify-center text-lg">
            ⚙️
          </div>
          <Heading as="h4" size="lg" className="mb-1">{item.title}</Heading>
          <span className="text-sm font-medium text-accent mb-4">{item.role}</span>
          <Paragraph size="sm" muted className="leading-relaxed mb-2">{item.description}</Paragraph>
          <MoreDetailsButton />
        </div>
        <ProjectModal item={item} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </>
    );
  }

  if (variant === 'personal') {
    let ProjectIcon = CreditCard;
    if (item.id === 'staffone') ProjectIcon = Users;
    else if (item.id === 'resource-booking-system') ProjectIcon = CalendarDays;
    else if (item.id === 'lib-mgmt-saas') ProjectIcon = BookOpen;
    else if (item.id === 'gesture-draw') ProjectIcon = Palette;
    else if (item.id === 'ctc-pizzeria') ProjectIcon = Pizza;
    
    return (
      <>
        <div className={cn(BASE, 'overflow-hidden', className)}>
          <div className="h-44 bg-background border-b border-border/50 w-full flex items-center justify-center transition-opacity group-hover:opacity-80">
            <ProjectIcon className="w-16 h-16 text-muted transition-transform group-hover:scale-110 duration-300" strokeWidth={1} />
          </div>
          <div className="p-6 md:p-8 flex flex-col flex-1">
            <Heading as="h4" size="xl" className="mb-3">{item.title}</Heading>
            <Paragraph className="text-muted leading-relaxed mb-6">{item.description}</Paragraph>
            <div className="flex items-center justify-between pt-5 border-t border-border/40 mt-auto">
              <MoreDetailsButton />
              {!hasContent && <div />} {/* Spacer if no button */}
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
          </div>
        </div>
        <ProjectModal item={item} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </>
    );
  }

  return null;
}
