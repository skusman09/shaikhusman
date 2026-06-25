import type { Project } from '@/types/portfolio';

export const projectsSection = {
  title: 'Personal Projects',
  description: 'Independent exploration into cloud infrastructure, deployment, and backend architectures. These projects exist outside of professional work — to learn by building and deploying real systems.',
};

export const projects: Project[] = [
  {
    id: 'staffone',
    title: 'StaffOne',
    description: 'Problem: No lightweight platform existed to manage internal staff, shifts, and operations for small businesses.\nSolution: Built a full-stack multi-tenant application from scratch using React, FastAPI, and PostgreSQL. Implemented authentication, role-based access, and tenant isolation.\nOutcome: Successfully deployed to a VPS with Docker. Handles real tenants and reinforced deep understanding of production infrastructure, multi-tenancy, and backend architecture.',
    github: 'https://github.com/skusman09',
    technologies: ['FastAPI', 'React', 'PostgreSQL', 'Docker', 'Multi-tenant', 'VPS'],
  },
  {
    id: 'payment-service',
    title: 'Payment Service POC',
    description: 'Problem: Understanding how production payment systems handle idempotency, webhook delivery, and retry logic.\nSolution: Built a mock payment gateway integration simulating real Stripe-like workflows including webhook receivers, idempotency keys, and failure recovery.\nOutcome: Deepened understanding of event-driven payment flows, reliable webhook handling, and the engineering challenges of financial-grade reliability.',
    github: 'https://github.com/skusman09',
    technologies: ['FastAPI', 'Redis', 'PostgreSQL', 'Docker', 'Webhooks', 'Idempotency'],
  },
];
