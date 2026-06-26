import type { TechGroup } from '@/types/portfolio';

export const techSection = {
  title: 'Engineering Stack',
};

export const tech: TechGroup[] = [
  {
    category: 'Backend',
    items: [
      { name: 'Python' },
      { name: 'FastAPI' },
      { name: 'SQLAlchemy' },
      { name: 'Pydantic' },
      { name: 'Alembic' },
      { name: 'Celery' },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'PostgreSQL' },
      { name: 'Redis' },
    ],
  },
  {
    category: 'Architecture',
    items: [
      { name: 'Multi-tenant' },
      { name: 'REST API Design' },
      { name: 'Background Jobs' },
      { name: 'Event Scheduling' },
      { name: 'State Machines' },
      { name: 'Modular Design' },
    ],
  },
  {
    category: 'Infrastructure',
    items: [
      { name: 'Docker' },
      { name: 'Linux' },
      { name: 'Nginx' },
      { name: 'Cloudflare' },
      { name: 'VPS Hosting' },
    ],
  },
  {
    category: 'Frontend Technologies Used',
    items: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'Astro' },
      { name: 'TailwindCSS' },
    ],
  },
  {
    category: 'Automation',
    items: [
      { name: 'Celery Beat' },
      { name: 'Webhook Integration' },
      { name: 'Data Acquisition' },
      { name: 'Reporting Pipelines' },
    ],
  },
  {
    category: 'Developer Tools',
    items: [
      { name: 'Git' },
      { name: 'Swagger / OpenAPI' },
      { name: 'Postman' },
      { name: 'VS Code' },
      { name: 'Docker Compose' },
    ],
  },
];
