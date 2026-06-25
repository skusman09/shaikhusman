import type { ExperienceItem } from '@/types/portfolio';

export const experienceSection = {
  title: 'Professional Experience',
  description: 'Since April 2024, I have operated as a core Backend Software Engineer at Suflon Tech LLP. My experience spans building reusable multi-tenant platforms, delivering enterprise consulting solutions, and creating internal automation tools—all unified by a focus on scalable architecture and engineering excellence.',
  platformEvolutionHeading: 'Platform Evolution',
  platformEvolutionPlaceholder: `                   MDPlix
                      │
                      │
      Reusable Backend Platform
                      │
      ┌───────────────┼───────────────┐
      │               │               │
 UrbanHouzz     AzentikForce     Shoppyforce`,
  productEngineeringHeading: 'Product Engineering',
  enterpriseConsultingHeading: 'Enterprise Consulting',
  internalEngineeringHeading: 'Internal Engineering',
};

export const experience: ExperienceItem[] = [
  {
    id: 'mdplix',
    title: 'MDPlix',
    role: 'Backend Software Engineer',
    dateRange: 'Healthcare Platform',
    category: 'Product Engineering',
    description: 'Architected and developed the backend foundation for a healthcare platform. Designed the REST APIs, database schema, and background job systems that later became the core architecture for multiple subsequent business products.',
    technologies: ['FastAPI', 'PostgreSQL', 'Redis', 'Multi-tenant', 'Background Jobs'],
  },
  {
    id: 'urbanhouzz',
    title: 'UrbanHouzz',
    role: 'Backend Software Engineer',
    dateRange: 'Real Estate Platform',
    category: 'Product Engineering',
    description: 'Adapted the core backend architecture to support real estate workflows. Introduced property management modules, spatial queries, and customer lifecycle automation while maintaining platform consistency.',
    technologies: ['Reusable Architecture', 'Real Estate Modules', 'Data Modeling'],
  },
  {
    id: 'azentikforce',
    title: 'AzentikForce',
    role: 'Backend Software Engineer',
    dateRange: 'CRM & Marketing Platform',
    category: 'Product Engineering',
    description: 'Extended the platform to handle CRM and marketing automation. Engineered campaign scheduling, workflow automation, and deep business logic to support a high-volume B2B environment.',
    technologies: ['CRM Modules', 'Campaign Scheduling', 'Business Automation'],
  },
  {
    id: 'shoppyforce',
    title: 'Shoppyforce',
    role: 'Backend Software Engineer',
    dateRange: 'E-commerce Platform',
    category: 'Product Engineering',
    description: 'Leveraged the reusable backend to rapidly deploy an e-commerce platform. Focused on inventory synchronization, order state machines, and scheduling.',
    technologies: ['E-commerce Modules', 'API Consistency', 'State Machines'],
  },
  {
    id: 'pipeline-management',
    title: 'Pipeline Management Platform',
    role: 'Backend Software Engineer (Consulting)',
    dateRange: 'Enterprise Consulting',
    category: 'Enterprise Consulting',
    description: 'Consulted on an enterprise pipeline management platform for a Kuwait-based client. Implemented scalable backend services, complex reporting engines, and robust alerting systems to handle critical industrial workflows.',
    technologies: ['Backend APIs', 'Reporting Engine', 'Alerting', 'Enterprise Architecture'],
  },
  {
    id: 'data-acquisition-automation',
    title: 'Data Acquisition Automation',
    role: 'Internal Engineering',
    dateRange: 'Internal Tool',
    category: 'Internal Engineering',
    description: 'Built a scheduled automation system to acquire, transform, and store data from external sources into internal databases. Reduced manual effort and improved data freshness for business reporting.',
    technologies: ['Python', 'Celery Beat', 'PostgreSQL', 'Automation'],
  },
  {
    id: 'backend-api-testing',
    title: 'Backend API Testing Suite',
    role: 'Internal Engineering',
    dateRange: 'Internal Tool',
    category: 'Internal Engineering',
    description: 'Developed an internal tool for automated regression testing of backend REST APIs across all platform products. Enabled fast validation after deployments and reduced the manual QA cycle.',
    technologies: ['Python', 'REST APIs', 'Test Automation', 'CI Validation'],
  },
  {
    id: 'sql-execution-automation',
    title: 'SQL Execution Automation',
    role: 'Internal Engineering',
    dateRange: 'Internal Tool',
    category: 'Internal Engineering',
    description: 'Created an internal utility to automate execution of routine SQL scripts against the production database. Included dry-run previews, execution logging, and rollback support to reduce operational risk.',
    technologies: ['Python', 'PostgreSQL', 'SQLAlchemy', 'Operational Tooling'],
  },
];
