export interface HeroContent {
  name: string;
  role: string;
  tagline: string;
  introduction: string;
  statusBadge: string;
  imageAlt: string;
  cta: {
    primary: {
      label: string;
      href: string;
    };
    secondary: {
      label: string;
      href: string;
    };
  };
}

export interface JourneyMilestone {
  title: string;
  description: string;
}

export interface JourneyPhase {
  title: string;
  description: string;
  milestones: JourneyMilestone[];
}

export type ExperienceCategory = 
  | 'Product Engineering' 
  | 'Enterprise Consulting' 
  | 'Internal Engineering';

export interface ExperienceItem {
  id: string;
  title: string;
  role: string;
  dateRange: string;
  category: ExperienceCategory;
  description: string;
  technologies: string[];
  businessContext?: string;
  responsibilities?: string[];
  architecture?: string;
  engineeringDecisions?: string[];
  keyLearnings?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  link?: string;
  github?: string;
  technologies: string[];
  businessContext?: string;
  responsibilities?: string[];
  architecture?: string;
  engineeringDecisions?: string[];
  keyLearnings?: string[];
}

export type TechCategory = 
  | 'Backend Engineering'
  | 'Data & Messaging'
  | 'DevOps & Infrastructure'
  | 'Architecture & System Design'
  | 'Security & Reliability'
  | 'Automation & Integrations'
  | 'Supporting Frontend Technologies'
  | 'Developer Tooling';

export interface TechItem {
  name: string;
  primary?: boolean;
  description?: string;
}

export interface TechGroup {
  category: TechCategory;
  items: TechItem[];
}

export interface Practice {
  id: string;
  title: string;
  description: string;
}

export interface ContactInfo {
  email: string;
  availability: string;
  location: string;
  message: string;
}

export interface ResumeInfo {
  label: string;
  url: string;
  lastUpdated: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface SEOMetadata {
  title: string;
  description: string;
  url: string;
  ogImage: string;
  author: string;
}
