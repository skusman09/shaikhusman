import type { Practice } from '@/types/portfolio';

export const practicesSection = {
  title: 'Engineering Practices',
};

export const practices: Practice[] = [
  {
    id: 'api-design',
    title: 'RESTful API Design',
    description: 'Design intuitive, consistent, and versioned APIs. Enforce clear naming conventions, proper HTTP semantics, and document via OpenAPI before implementation.',
  },
  {
    id: 'authentication',
    title: 'Authentication Systems',
    description: 'Implement JWT-based authentication with access and refresh tokens. Enforce secure storage, strict expiry, and stateless session management.',
  },
  {
    id: 'authorization',
    title: 'Role-Based Authorization',
    description: 'Design granular RBAC layers separating tenant, role, and resource access. Authorization logic lives purely at the service layer.',
  },
  {
    id: 'background-jobs',
    title: 'Background Job Architecture',
    description: 'Use Celery and Redis to offload heavy computation, reports, and emails. Ensure jobs are idempotent, retryable, and highly observable.',
  },
  {
    id: 'multi-tenant',
    title: 'Multi-tenant Architecture',
    description: 'Architect codebases serving multiple isolated tenants. Tenant context propagates via middleware, enforcing strict data isolation at the query layer.',
  },
  {
    id: 'caching',
    title: 'Caching Strategy',
    description: 'Apply Redis caching for frequently read data. Handle invalidation explicitly to prevent stale state in business-critical flows.',
  },
  {
    id: 'deployment',
    title: 'Containerised Deployment',
    description: 'Package services with Docker. Orchestrate local environments via Compose and deploy to Linux VPS instances behind Nginx.',
  },
  {
    id: 'database-design',
    title: 'Database Design',
    description: 'Model schemas to reflect domain reality. Use Alembic for migrations and enforce data constraints at the database level.',
  },
  {
    id: 'automation',
    title: 'Workflow Automation',
    description: 'Automate repeatable tasks: data acquisition, reports, and API testing. Reduce human error and surface issues proactively.',
  },
  {
    id: 'clean-architecture',
    title: 'Modular Architecture',
    description: 'Organise code into clear layers: router → service → repository. This enables isolated testing, safe refactoring, and feature reuse.',
  },
  {
    id: 'documentation',
    title: 'Engineering Documentation',
    description: 'Document architectural decisions and API contracts. Treat future engineers as the primary audience to reduce onboarding friction.',
  },
];
