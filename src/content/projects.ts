import type { Project } from '@/types/portfolio';

export const projectsSection = {
  title: 'Personal Projects',
  description: 'Independent exploration into distributed backend architectures, agentic AI systems, and cloud infrastructure. These projects exist outside of professional work — to learn by building, benchmarking, and deploying real-world production systems.',
};

export const projects: Project[] = [
  {
    id: 'lib-mgmt-saas',
    title: 'LibraOne — AI-Powered Multi-Tenant Library SaaS',
    link: 'https://libraone.pages.dev/',
    description: 'Enterprise multi-tenant library management SaaS featuring Corrective RAG (CRAG) with LangGraph, on-device Edge ML document scanning via LiteRT.js & OpenCV.js WASM, pessimistic concurrency circulation, and Razorpay recurring subscriptions.',
    technologies: [
      'FastAPI',
      'SQLAlchemy 2.0',
      'PostgreSQL (pgvector)',
      'LangGraph',
      'LangChain Core',
      'LangSmith',
      'Google LiteRT.js',
      'OpenCV.js WASM',
      'Redis',
      'React 18',
      'Razorpay',
      'Cloudflare R2',
      'Docker'
    ],
    businessContext: 'Modernizes physical library operations for multi-tenant residential societies and campuses, providing 1-click circulation, automated late fine calculations, real-time stock audits, and self-serve AI book discovery with zero recurring server-side vision API costs.',
    responsibilities: [
      'Architected a partition-scoped multi-tenant backend with FastAPI, SQLAlchemy 2.0 (AsyncIO), and Redis token bucket rate limiting with tenant-scoped isolation.',
      'Engineered an Adaptive Corrective RAG (CRAG) state machine using LangGraph and LangChain Core with query rewriting, pgvector HNSW cosine search, and LangSmith observability.',
      'Implemented an on-device Edge ML document scanner using Google LiteRT.js (TFLite WASM/WebGPU) and OpenCV.js WASM for 30+ FPS perspective unwarping and barcode detection with zero cloud inference costs.',
      'Designed a concurrency-safe circulation engine using row-level pessimistic locking (SELECT ... FOR UPDATE) to prevent double-checkout race conditions on physical copies.',
      'Built automated batch catalog ingestion with multi-source fallback (Open Library, Google Books) and Razorpay recurring subscription billing with webhook reconciliation.',
      'Implemented an asynchronous background supervisor daemon for daily overdue fine calculations and queued SMTP email notifications.'
    ],
    architecture: 'Partition-scoped Multi-Tenant Monolith with asynchronous background supervisor loops, PostgreSQL pgvector (1536-dim HNSW cosine ops), client-side Web Worker tensor inference, and an idempotent multi-provider LLM cascade with circuit breaking (Groq, Gemini, SambaNova, BytePlus, OpenRouter).',
    engineeringDecisions: [
      'Implemented client-side LiteRT.js + OpenCV.js instead of cloud vision APIs to eliminate recurring OCR costs and maintain sub-second scan speeds.',
      'Used row-level pessimistic locking (SELECT FOR UPDATE) on physical book copies to guarantee inventory consistency under concurrent librarian checkouts.',
      'Built a multi-provider LLM cascade with circuit-breaking and automatic failover to prevent vendor downtime.',
      'Adopted SHA-256 request fingerprinting with 24-hour sessionStorage idempotency keys to prevent duplicate billing or imports during transient network failures.'
    ],
    keyLearnings: [
      'Cyclical state machines in LangGraph with grading gates drastically improve domain search retrieval precision compared to traditional linear RAG chains.',
      'Offloading heavy image tensor normalization and OpenCV homography transforms to a dedicated Web Worker is critical to preserving a smooth 30+ FPS camera viewfinder on mobile devices.'
    ]
  },
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
    architecture: 'Layered Modular Monolith with Repository pattern to ensure a highly testable codebase decoupled from the database.',
    engineeringDecisions: [
      'Chose a Modular Monolith over microservices to eliminate distributed transaction overhead while keeping domain boundaries clean.',
      'Adopted Redis and RQ for asynchronous task processing to maintain minimal operational overhead compared to heavy message brokers.'
    ],
    keyLearnings: [
      'Timezone-aware attendance tracking requires strict UTC normalization at the database layer with localized presentation at the frontend boundary.'
    ]
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
    architecture: '12-Factor App methodology following classic Spring Boot controller-service-repository patterns.',
    engineeringDecisions: [
      'Leveraged Spring Data JPA Specifications for dynamic multi-criteria queries to avoid brittle native SQL concatenation.',
      'Applied database-level pessimistic locking during slot confirmation to eliminate race conditions and double-booking.'
    ],
    keyLearnings: [
      'Modeling booking states as an explicit finite state machine prevents illegal status transitions and reduces defensive business check clutter.'
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
    architecture: 'Strict Idempotency via database constraints and Pessimistic Locking (SELECT FOR UPDATE SKIP LOCKED) to guarantee At-Least-Once Delivery without duplicates.',
    engineeringDecisions: [
      'Implemented an asynchronous 3-state circuit breaker to fast-fail transactions during downstream payment gateway outages.',
      'Used SELECT FOR UPDATE SKIP LOCKED in background consumer workers to achieve conflict-free concurrent payment processing.'
    ],
    keyLearnings: [
      'True financial transaction idempotency requires pairing unique idempotency key constraints with atomic distributed lock acquisition in Redis.'
    ]
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
    id: 'ctc-pizzeria',
    title: 'CTC Pizzeria',
    link: 'https://ctc-pizzeria.pages.dev/',
    description: 'A modern, responsive web application for a local pizza restaurant featuring an intuitive menu UI.',
    technologies: ['React', 'Web Development', 'Responsive Design', 'Frontend'],
    businessContext: 'A seamless digital storefront enhancing customer engagement and streamlining online ordering.'
  }
];
