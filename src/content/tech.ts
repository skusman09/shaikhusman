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
      { name: 'SQLAlchemy', primary: true },
      { name: 'Pydantic' },
      { name: 'Alembic' },
      { name: 'Celery' },
      { name: 'RQ' },
      { name: 'APScheduler' },
    ],
  },
  {
    category: 'Data & Storage',
    items: [
      { name: 'PostgreSQL', primary: true },
      { name: 'Redis', primary: true },
      { name: 'MySQL' },
      { name: 'SQL Server' },
      { name: 'RabbitMQ' },
    ],
  },
  {
    category: 'Architecture & Patterns',
    items: [
      { name: 'Multi-tenant Architecture', primary: true },
      { name: 'REST API Design' },
      { name: 'Modular Monolith' },
      { name: 'Background Jobs & Queues' },
      { name: 'State Machines' },
      { name: 'Event-Driven Design' },
      { name: 'Circuit Breakers' },
      { name: 'Idempotency Patterns' },
    ],
  },
  {
    category: 'Infrastructure & Deployment',
    items: [
      { name: 'Docker', primary: true },
      { name: 'Docker Compose' },
      { name: 'Linux / Ubuntu' },
      { name: 'Nginx' },
      { name: 'Cloudflare' },
      { name: 'VPS Hosting' },
      { name: 'AWS (EC2 / S3)' },
    ],
  },
  {
    category: 'Automation & Integration',
    items: [
      { name: 'Webhook Processing' },
      { name: 'Celery Beat' },
      { name: 'Browser Automation' },
      { name: 'Reporting Pipelines' },
      { name: 'Data Acquisition' },
      { name: 'Playwright' },
    ],
  },
  {
    category: 'Supporting Technologies',
    items: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'TailwindCSS' },
      { name: 'Astro' },
      { name: 'Pandas' },
      { name: 'PyInstaller' },
    ],
  },
  {
    category: 'Developer Tooling',
    items: [
      { name: 'Git' },
      { name: 'Swagger / OpenAPI' },
      { name: 'Postman' },
      { name: 'Docker Compose' },
      { name: 'VS Code' },
      { name: 'Locust' },
      { name: 'Pytest' },
    ],
  },
];
