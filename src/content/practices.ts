import type { Practice } from '@/types/portfolio';

export const practicesSection = {
  title: 'Engineering Practices',
};

export const practices: Practice[] = [
  {
    id: 'api-design',
    title: 'RESTful API Design',
    description: 'Design APIs that are intuitive, consistent, and versioned. Every endpoint follows clear naming conventions, uses proper HTTP semantics, and is documented via Swagger / OpenAPI before implementation begins.',
  },
  {
    id: 'authentication',
    title: 'Authentication Systems',
    description: 'Implement JWT-based authentication with access and refresh token flows. Enforce secure token storage, expiry handling, and stateless session management across multi-tenant environments.',
  },
  {
    id: 'authorization',
    title: 'Role-Based Authorization',
    description: 'Design granular RBAC permission layers that separate tenant-level, role-level, and resource-level access control. Authorization logic lives at the service layer, not in route handlers.',
  },
  {
    id: 'background-jobs',
    title: 'Background Job Architecture',
    description: 'Use Celery with Redis as a broker to offload heavy computation, report generation, email dispatch, and scheduling. Jobs are idempotent, retryable, and observable via task state tracking.',
  },
  {
    id: 'multi-tenant',
    title: 'Multi-tenant Architecture',
    description: 'Architect platforms where a single codebase serves multiple isolated tenants. Tenant context is propagated through request middleware, and data isolation is enforced at the database query layer.',
  },
  {
    id: 'caching',
    title: 'Caching Strategy',
    description: 'Apply Redis caching for frequently read, rarely modified data (configuration, lookup tables, auth tokens). Cache invalidation is handled explicitly to prevent stale data in business-critical flows.',
  },
  {
    id: 'deployment',
    title: 'Containerised Deployment',
    description: 'Package all services with Docker and orchestrate local environments via Docker Compose. Production deployments target Linux VPS instances behind Nginx with environment-separated configuration.',
  },
  {
    id: 'database-design',
    title: 'Database Design',
    description: 'Model schemas to reflect domain reality. Apply normalization thoughtfully, use Alembic for schema migrations, and enforce constraints at the database level rather than relying solely on application code.',
  },
  {
    id: 'automation',
    title: 'Workflow Automation',
    description: 'Automate repeatable engineering tasks: data acquisition scripts, scheduled report runners, and internal API testing pipelines. Automation reduces human error and surfaces issues before they become incidents.',
  },
  {
    id: 'clean-architecture',
    title: 'Modular Architecture',
    description: 'Organise code into clear layers: router → service → repository → model. Business logic lives in the service layer. This separation enables isolated testing, safe refactoring, and feature reuse across products.',
  },
  {
    id: 'documentation',
    title: 'Engineering Documentation',
    description: 'Document architectural decisions, API contracts, and non-obvious business logic. Good documentation treats future engineers (including yourself) as the primary audience and reduces onboarding friction.',
  },
];
