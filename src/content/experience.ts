import type { ExperienceItem } from '@/types/portfolio';

export const experienceSection = {
  title: 'Professional Experience',
  description: 'Since April 2024, I have operated as a core Backend Software Engineer at Suflon Tech LLP. My experience spans building reusable multi-tenant platforms, delivering enterprise consulting solutions, and creating internal automation tools—all unified by a focus on scalable architecture and engineering excellence.',
  platformEvolutionHeading: 'Platform Evolution',
  platformEvolutionPlaceholder: `                    MDPlix
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
    businessContext: 'The healthcare sector needed a compliant, high-throughput platform to manage patient records and scheduling across multiple clinics securely.',
    responsibilities: [
      'Architected the entire backend foundation from scratch.',
      'Designed a multi-tenant PostgreSQL schema ensuring strict data isolation.',
      'Implemented robust background job processing using Redis and Celery for report generation.',
    ],
    architecture: 'A monolithic FastAPI application structured with domain-driven design, utilizing PostgreSQL for persistence and Redis for caching and async task queues.',
    engineeringDecisions: [
      'Chose FastAPI over Django for raw asynchronous performance and automatic OpenAPI documentation.',
      'Implemented Row-Level Security (RLS) in PostgreSQL for bulletproof multi-tenancy.',
    ],
    keyLearnings: [
      'Deepened understanding of HIPAA-compliant data modeling constraints.',
      'Mastered FastAPI dependency injection for scalable codebase structure.',
    ]
  },
  {
    id: 'urbanhouzz',
    title: 'UrbanHouzz',
    role: 'Backend Software Engineer',
    dateRange: 'Real Estate Platform',
    category: 'Product Engineering',
    description: 'Adapted the core backend architecture to support real estate workflows. Introduced property management modules, spatial queries, and customer lifecycle automation while maintaining platform consistency.',
    technologies: ['Reusable Architecture', 'Real Estate Modules', 'Data Modeling'],
    businessContext: 'A growing real estate agency required a custom platform to manage listings, agent assignments, and client lifecycles efficiently.',
    responsibilities: [
      'Adapted the existing MDPlix architecture to fit real estate domain models.',
      'Implemented PostGIS spatial queries for radius-based property searches.',
    ],
    architecture: 'Extended the core FastAPI monolith with a modular plugin architecture to selectively enable real-estate features.',
    engineeringDecisions: [
      'Adopted PostGIS extension instead of relying on external location services to reduce latency.',
    ],
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
