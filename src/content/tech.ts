import type { TechGroup } from '@/types/portfolio';

export const techSection = {
  title: 'Engineering Stack',
  subtitle: 'Technologies and patterns I use to design and ship production backend systems.',
};

export const tech: TechGroup[] = [
  {
    category: 'Backend Engineering',
    items: [
      { name: 'Python', primary: true },
      { name: 'FastAPI', primary: true },
      { name: 'Spring Boot', primary: true },
      { name: 'SQLAlchemy', primary: true },
      { name: 'Pydantic' },
      { name: 'Alembic' },
      { name: 'Celery' },
      { name: 'RQ' },
      { name: 'APScheduler' },
    ],
  },
  {
    category: 'Data & Messaging',
    items: [
      { name: 'PostgreSQL', primary: true },
      { name: 'Redis', primary: true },
      { name: 'RabbitMQ', primary: true },
      { name: 'MySQL' },
      { name: 'SQL Server' },
    ],
  },
  {
    category: 'DevOps & Infrastructure',
    items: [
      { name: 'Docker', primary: true },
      { name: 'Docker Compose' },
      { name: 'Linux / Ubuntu' },
      { name: 'Nginx' },
      { name: 'Traefik' },
      { name: 'Cloudflare / Render', primary: true },
      { name: 'AWS EC2' },
      { name: 'AWS S3' },
      { name: 'VPS Hosting' },
    ],
  },
  {
    category: 'Architecture & System Design',
    items: [
      { name: 'Multi-tenant Architecture', primary: true },
      { name: 'Modular Monolith' },
      { name: 'Layered Architecture' },
      { name: 'REST API Design' },
      { name: 'Event-Driven Design' },
      { name: 'Background Jobs & Queues' },
      { name: 'State Machines' },
    ],
  },
  {
    category: 'Security & Reliability',
    items: [
      { name: 'JWT Authentication' },
      { name: 'Role-Based Access Control (RBAC)' },
      { name: 'Circuit Breakers' },
      { name: 'Idempotency Patterns' },
      { name: 'Webhook Processing' },
    ],
  },
  {
    category: 'Automation & Integrations',
    items: [
      { name: 'Playwright' },
      { name: 'Browser Automation' },
      { name: 'Data Acquisition' },
      { name: 'Reporting Pipelines' },
      { name: 'API Integrations' },
      { name: 'Email Integrations' },
      { name: 'Celery Beat' },
    ],
  },
  {
    category: 'Supporting Frontend Technologies',
    items: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'Astro' },
      { name: 'TailwindCSS' },
    ],
  },
  {
    category: 'Developer Tooling',
    items: [
      { name: 'Git' },
      { name: 'Swagger / OpenAPI' },
      { name: 'Postman' },
      { name: 'Pytest' },
      { name: 'Locust' },
      { name: 'VS Code' },
    ],
  },
];
