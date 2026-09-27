import type { Project } from '@/types/portfolio';

export const projectsSection = {
  title: 'Personal Projects',
  description: 'Independent exploration into cloud infrastructure, deployment, and backend architectures. These projects exist outside of professional work — to learn by building and deploying real systems.',
};

export const projects: Project[] = [
  {
    id: 'staffone',
    title: 'StaffOne Workforce Management',
    link: 'https://staffoneportal.pages.dev/',
    description: 'A multi-tenant Workforce Management Platform centralizing onboarding, attendance, leave, and automated payroll.',
    technologies: ['FastAPI', 'PostgreSQL', 'Redis', 'RQ', 'React', 'Docker'],
    businessContext: 'Unifies fragmented HR operations into a single platform with timezone-aware attendance tracking and role-based access control.',
    responsibilities: [
      'Architected a Layered Modular Monolith backend ensuring strict separation of concerns.',
      'Engineered complex domain logic for overlapping leave validation and an automated monthly payroll engine.',
      'Implemented background job queues (Redis/RQ) for asynchronous tasks like PDF slip generation.'
    ],
    architecture: 'Layered Modular Monolith with Repository pattern to ensure a highly testable codebase decoupled from the database.'
  },
  {
    id: 'lib-mgmt-saas',
    title: 'Library Management SaaS',
    link: 'https://lib-mgmt-frontend.pages.dev/',
    description: 'A multi-tenant SaaS platform for modern libraries featuring barcode-scanning workflows and real-time inventory.',
    technologies: ['FastAPI', 'React', 'Tailwind CSS', 'SQLAlchemy', 'PostgreSQL'],
    businessContext: 'Streamlines book management and checkout processes for multiple independent educational institutions from a single unified architecture.',
    responsibilities: [
      'Engineered a multi-tenant PostgreSQL backend ensuring strict data isolation between organizations.',
      'Designed a highly responsive barcode-friendly REST API to minimize latency during high-volume checkouts.'
    ],
    architecture: 'Schema-based Multi-tenancy in PostgreSQL to securely isolate data while sharing the compute layer.'
  },
  {
    id: 'resource-booking-system',
    title: 'Resource Booking System API',
    github: 'https://github.com/skusman09/ResourceBookingSystem',
    description: 'An enterprise-grade RESTful API built with Java and Spring Boot for managing bookable resources and reservations.',
    technologies: ['Java 17', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'JWT'],
    businessContext: 'Provides a robust, scalable foundation for organizations to manage complex resource availability and status workflows.',
    responsibilities: [
      'Developed advanced pagination, sorting, and reservation filtering (by status, price) using Spring Data JPA.',
      'Implemented explicit state transition workflows (PENDING, CONFIRMED, CANCELLED) with strict business validation.',
      'Secured the platform with stateless JWT authentication and differentiated ADMIN/USER role access.'
    ],
    architecture: '12-Factor App methodology following classic Spring Boot controller-service-repository patterns.'
  },
  {
    id: 'gesture-draw',
    title: 'Air Canvas (Gesture Draw)',
    github: 'https://github.com/skusman09/gesture-draw',
    description: 'A real-time computer vision application using webcam input and MediaPipe hand tracking to paint on a virtual canvas.',
    technologies: ['Python', 'OpenCV', 'MediaPipe', 'Computer Vision'],
    businessContext: 'An interactive exploration of computer vision capabilities allowing mid-air drawing without physical input devices.',
    responsibilities: [
      'Integrated Google MediaPipe for high-performance, real-time hand landmark detection.',
      'Developed gesture recognition algorithms distinguishing between drawing, erasing, and UI interaction.'
    ]
  },
  {
    id: 'payment-service-poc',
    title: 'Payment Service POC',
    github: 'https://github.com/MYXPS09/ResilientPaymentProcessingService',
    description: 'A Modular Monolith simulating a production-grade payment service to validate resilience patterns like circuit breakers and idempotency.',
    technologies: ['FastAPI', 'PostgreSQL', 'Redis', 'Celery', 'Pydantic'],
    businessContext: 'Validates core distributed system resilience patterns required to handle asynchronous payment lifecycle events safely against external gateway failures.',
    responsibilities: [
      'Implemented a custom 3-state Circuit Breaker (CLOSED, OPEN, HALF_OPEN) with async locks.',
      'Configured Celery and Redis to handle asynchronous background processing of payment state transitions.'
    ],
    architecture: 'Strict Idempotency via database constraints and Pessimistic Locking (SELECT FOR UPDATE SKIP LOCKED) to guarantee At-Least-Once Delivery without duplicates.'
  },
  {
    id: 'ctc-pizzeria',
    title: 'CTC Pizzeria',
    link: 'https://ctc-pizzeria.pages.dev/',
    description: 'A modern, responsive web application for a local pizza restaurant featuring an intuitive menu UI.',
    technologies: ['React', 'Web Development', 'Responsive Design', 'Frontend'],
    businessContext: 'A seamless digital storefront enhancing customer engagement and streamlining online ordering.'
  }
];
