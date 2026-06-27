import type { Project } from '@/types/portfolio';

export const projectsSection = {
  title: 'Personal Projects',
  description: 'Independent exploration into cloud infrastructure, deployment, and backend architectures. These projects exist outside of professional work — to learn by building and deploying real systems.',
};

export const projects: Project[] = [
  {
    id: 'staffone',
    title: 'StaffOne',
    // github: 'https://github.com/skusman09',
    description: 'Architected and built a multi-tenant Workforce Management Platform supporting employee onboarding, attendance tracking, leave management, payroll processing, notifications, reporting workflows, and role-based access control.',
    technologies: ['FastAPI', 'PostgreSQL', 'Redis', 'RQ', 'APScheduler', 'Alembic', 'React', 'Docker'],
    businessContext: 'Workforce operations teams often struggle with fragmented tools across attendance, payroll, and compliance. StaffOne was built as a centralized Workforce Management Platform to unify employee onboarding, automate complex payroll calculations, manage leave requests, and accurately track global attendance with timezone awareness and geofencing.',
    responsibilities: [
      'Architected and built the core Workforce Management Platform backend from scratch, enforcing a strict separation of concerns via a Layered Modular Monolith design.',
      'Engineered complex domain logic, including timezone-aware attendance tracking, overlapping leave validation, and an automated monthly payroll engine.',
      'Implemented robust background job queues using Redis and RQ to handle asynchronous tasks like PDF slip generation.',
      'Secured the API endpoints with JWT-based authentication and a custom Role-Based Access Control (RBAC) system.'
    ],
    architecture: 'Layered Modular Monolith: Chose a monolithic architecture over microservices to reduce deployment complexity while maintaining strict internal boundaries (Routes -> Services -> Repositories -> Models) for potential future extraction.',
    engineeringDecisions: [
      'Abstracted all SQLAlchemy database operations into a distinct repository layer, allowing the core business logic to be easily unit-tested without an active database connection.',
      'Utilized a dual background processing strategy: RQ for event-driven asynchronous tasks and APScheduler for time-driven recurring cron jobs, such as automatically closing abandoned employee shifts at midnight.',
      'Engineered a hybrid queue fallback mechanism that defaults to synchronous execution if the Redis broker becomes unavailable, ensuring system resilience.'
    ],
    keyLearnings: [
      'Mastered the practical application of the Repository and Service patterns in a Python/FastAPI ecosystem to ensure a highly testable codebase.',
      'Deepened my expertise in handling complex date, time, and timezone mathematics across global boundaries.'
    ]
  },
  {
    id: 'payment-service-poc',
    title: 'Payment Service POC',
    // github: 'https://github.com/skusman09',
    description: 'Built a proof-of-concept Modular Monolith to simulate a production-grade payment service, validating core resilience patterns like circuit breakers and idempotency.',
    technologies: ['FastAPI', 'PostgreSQL', 'Redis', 'Celery', 'SQLAlchemy', 'Pydantic'],
    businessContext: 'Modern payment systems must be highly resilient against external gateway failures, timeouts, and duplicate processing. This project was built as a proof-of-concept Modular Monolith to simulate a production-grade payment service, designed to validate core resilience patterns required to handle async payment lifecycle events safely.',
    responsibilities: [
      'Designed a Modular Monolith in FastAPI and SQLAlchemy 2.0 (async), exposing a versioned REST API for payment lifecycle operations with an integrated Swagger UI.',
      'Implemented production-grade resilience patterns, including a custom 3-state Circuit Breaker (CLOSED, OPEN, HALF_OPEN) with an async lock to prevent overloading failing external gateways.',
      'Integrated Celery and Redis to handle asynchronous background processing of payment state transitions (PENDING → PROCESSING → SUCCESS/FAILED).',
      'Developed a Gateway Simulator providing probabilistic outcomes (SUCCESS, FAILED, TIMEOUT) to battle-test the circuit breaker and exponential backoff retry mechanisms.',
    ],
    architecture: 'Strict Idempotency: Implemented a unique idempotency_key database constraint checked before insertion, safely preventing duplicate payment processing even if clients retry network timeouts.',
    engineeringDecisions: [
      'Utilized SELECT FOR UPDATE SKIP LOCKED during Celery task execution to ensure concurrent background workers do not attempt to process the exact same payment row (Pessimistic Locking).',
      'Configured Celery with task_acks_late=True and task_reject_on_worker_lost=True to guarantee At-Least-Once Delivery. If a worker crashes mid-payment, the task is automatically re-queued without data loss.',
    ],
    keyLearnings: [
      'Gained deep practical experience in distributed systems resilience, moving beyond basic CRUD into state machine design.',
      'Learned the critical importance of defensive engineering patterns (like pessimistic locking and idempotency keys) when designing financial systems that cannot afford duplicate transactions.',
    ],
  },
];
