import type { ExperienceItem } from '@/types/portfolio';

export const experienceSection = {
  title: 'Engineering Experience',
  description: 'Since April 2024, I have operated as a core Backend Software Engineer at Suflon Tech LLP. My experience spans building reusable multi-tenant platforms, delivering enterprise consulting solutions, and creating internal automation tools—all unified by a focus on scalable architecture and engineering excellence.',
  platformEvolutionHeading: 'Platform Architecture Evolution',
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
    description: 'Architected core backend services and designed the relational database models from scratch. Developed strict RESTful APIs using FastAPI and Pydantic for clinical and financial workflows.',
    technologies: ['FastAPI', 'PostgreSQL', 'Redis', 'Celery', 'Docker', 'AWS'],
    businessContext: 'The healthcare sector required a compliant, high-throughput platform to securely manage patient records, outpatient/inpatient workflows, and billing across multiple clinics. MDPlix was built as a multi-tenant B2B Healthcare Information System to unify these fragmented operations into a single platform.',
    responsibilities: [
      'Architected core backend services and designed the relational database models from scratch.',
      'Developed strict RESTful APIs using FastAPI and Pydantic for clinical and financial workflows.',
      'Offloaded heavy synchronous I/O processes (like clinical PDF generation and SMS notifications) into asynchronous worker queues.',
      'Migrated the infrastructure to AWS ARM64 Graviton instances using custom Docker deployment scripts.',
    ],
    architecture: 'Built a decoupled 12-microservice architecture to allow clinical (OPD/IPD) and financial (Billing) domains to scale independently.',
    engineeringDecisions: [
      'Implemented a physical database-per-domain architecture on PostgreSQL to ensure bulletproof data isolation for healthcare compliance, avoiding the risks of simple tenant_id columns.',
      'Prevented API Gateway (Traefik) timeouts during traffic spikes by redesigning synchronous heavy-I/O processes into an asynchronous Pub/Sub model using Celery and Redis.',
      'Extracted redundant authentication and error-handling logic into a shared internal Python library (mdplix_ms_common), standardizing code quality across all microservices.'
    ],
    keyLearnings: [
      'Mastered designing systems within strict healthcare data compliance constraints.',
      'Deepened expertise in FastAPI dependency injection for scalable codebase architecture.',
      'Learned the operational value of decoupling heavy workloads to maintain robust API responsiveness under load.',
    ]
  },
  {
    id: 'staffone',
    title: 'StaffOne',
    role: 'Backend Software Engineer',
    dateRange: 'HR Management System',
    category: 'Product Engineering',
    description: 'Architected and built the core HRMS backend from scratch, enforcing a strict separation of concerns via a Layered Modular Monolith design. Engineered complex domain logic for timezone-aware attendance and automated payroll.',
    technologies: ['FastAPI', 'PostgreSQL', 'Redis', 'RQ', 'APScheduler', 'Alembic'],
    businessContext: 'HR departments often struggle with fragmented tools for employee management. StaffOne was built as a centralized HR Management System (HRMS) to unify employee profiles, automate complex payroll calculations, manage leave requests, and accurately track global attendance with timezone awareness and geofencing.',
    responsibilities: [
      'Architected and built the core HRMS backend from scratch, enforcing a strict separation of concerns via a Layered Modular Monolith design.',
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
    id: 'urbanhouzz',
    title: 'UrbanHouzz',
    role: 'Backend Software Engineer (Core Architect)',
    dateRange: 'B2B SaaS Platform',
    category: 'Product Engineering',
    description: 'Architected and deployed a 10-microservice ecosystem serving multiple isolated business tenants with complex billing, CRM, and real-time omnichannel communications.',
    technologies: ['FastAPI', 'PostgreSQL', 'Redis', 'Celery', 'Docker', 'AWS'],
    businessContext: 'A B2B SaaS platform was needed to serve real estate and clinic businesses with multi-tenant workflows, complex billing, and real-time communications — all serving multiple isolated business tenants simultaneously.',
    responsibilities: [
      'Architected and deployed a 10-microservice ecosystem using FastAPI, async SQLAlchemy, and PostgreSQL.',
      'Designed a centralized shared library (urbanhouzz_common) containing all SQLAlchemy models, Pydantic schemas, and JWT middlewares — enforcing schema consistency across all microservices and eliminating data drift.',
      'Engineered an event-driven notification bus using Celery and Redis, routing omnichannel payloads (SMS, Email, WhatsApp) via a Strategy pattern across Twilio and SendGrid.',
      'Built a proportional discount settlement algorithm for IPD billing to atomically apply flat discounts across multi-item financial ledgers without breaking ledger integrity.',
      'Developed a Codebase-Driven BI reporting engine using PostgreSQL materialized views and Python metadata registries, enabling dynamic frontend dashboards with real-time analytics.',
    ],
    architecture: 'Per-service database isolation: each domain (users, billing, CRM) uses a dedicated PostgreSQL database, preventing heavy analytics queries from locking critical authentication tables.',
    engineeringDecisions: [
      'Built urbanhouzz_common — a pip-installable Python package with all shared ORM models and schemas. A deliberate pragmatic trade-off of strict microservice isolation in favour of zero schema drift and high development velocity.',
      'Implemented a global middleware that extracted region_id and company_id from JWT claims and injected them via FastAPI Depends(), making cross-tenant data leaks architecturally impossible.',
      'Designed idempotent PhonePe webhook listeners that verified txn_status from the database before processing, ensuring duplicate webhook delivery never double-credits a client account.',
    ],
    keyLearnings: [
      'Learned the value of pragmatic architecture: choosing shared data contracts over strict microservice isolation when team size and velocity make event-sourcing impractical.',
      'Mastered engineering idempotent, fault-tolerant financial transaction systems where correctness is non-negotiable.',
    ],
  },
  {
    id: 'azentikforce',
    title: 'AzentikForce',
    role: 'Backend Software Engineer',
    dateRange: 'CRM & Marketing Platform',
    category: 'Product Engineering',
    description: 'Built a CRM campaign execution engine to solve the "execution layer" problem — turning contact lists and campaign strategies into a controlled, measurable, team-based outreach workflow.',
    technologies: ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Redis', 'Celery', 'Alembic'],
    businessContext: 'Sales teams managing large-scale outreach face a coordination problem: fairly distributing thousands of contacts across team members, tracking progress across multiple channels (SMS, Email, WhatsApp, Calls), and preventing missed contacts or accountability gaps.',
    responsibilities: [
      'Designed and built the Campaign Engine with a contact eligibility and filter system, allowing managers to define audience segments at campaign creation time without polluting source contact groups.',
      'Engineered a Batch Distribution System that fairly splits contacts across team members and enforces sequential batch unlocking (next batch unlocks only after the current batch is completed).',
      'Built the per-contact Task Execution Engine supporting both Dedicated (one channel at a time) and All-in-One (all channels per contact) execution modes.',
      'Implemented idempotency key logic for outreach task marking to prevent duplicate sends or double-crediting on network retry or page refresh.',
    ],
    architecture: 'Three independent state machines — Campaign (DRAFT → ACTIVE → COMPLETED), Batch (LOCKED → IN_PROGRESS → COMPLETED), and Contact (PENDING → IN_PROGRESS → COMPLETED) — ensuring transitions were always valid and auditable.',
    engineeringDecisions: [
      'Applied lazy task creation: rather than pre-generating tens of thousands of contact task rows upfront, tasks are created per-batch as staff begin work, preventing database bloat on large campaigns.',
      'Implemented campaign-level filtering (location, specialization, tags) at campaign creation time rather than at the contact group level, keeping the core data model simple while enabling powerful runtime targeting.',
      'Persisted all assignment and progress state to the database rather than sessions or memory, making execution fully resumable across app restarts and devices.',
    ],
    keyLearnings: [
      'Reinforced the value of explicit state machines for multi-step operational workflows, where ambiguous intermediate states cause serious data consistency bugs.',
      'Gained practical experience designing systems where fairness, auditability, and resumability are first-class architectural requirements.',
    ],
  },
  {
    id: 'shoppyforce',
    title: 'Shoppyforce',
    role: 'Backend Software Engineer',
    dateRange: 'E-commerce Platform',
    category: 'Product Engineering',
    description: 'Built and maintained an 8-microservice B2B e-commerce platform serving diverse tenants — retail vendors, healthcare providers, and service businesses — from a single unified architecture.',
    technologies: ['FastAPI', 'PostgreSQL', 'Redis', 'Celery', 'RabbitMQ', 'Docker'],
    businessContext: 'Multi-tenant B2B e-commerce platforms must handle wildly different tenants — retail vendors, healthcare providers, and service businesses — each with specialized billing, catalogue, and notification needs, all served from a single unified architecture.',
    responsibilities: [
      'Maintained and extended a centralized shared Python library (shoppyforce_common) housing all SQLAlchemy ORM models, Pydantic schemas, FastAPI middlewares, and RBAC permission matrices for the entire 8-service ecosystem.',
      'Built and maintained the financial billing microservice (ms_billing) handling dual-domain billing: retail sales invoices, purchase orders, and complex healthcare IPD billing lifecycles.',
      'Designed a centralized Background Job Scheduler (ms_bs) using FastAPI and Celery with RabbitMQ, supporting dynamic CRON job creation via REST API without code redeployments.',
      'Enforced strict database design patterns across the shared PostgreSQL cluster by authoring universal SQLAlchemy mixins for UUID primary keys, soft-deletes, and audit timestamps.',
    ],
    architecture: 'Shared Database with Service-Level Compute Isolation: each microservice owns its compute boundary but shares a PostgreSQL instance — a deliberate trade-off of strict isolation for data integrity and join capabilities.',
    engineeringDecisions: [
      'Centralized all asynchronous task execution for the entire platform into a single dedicated Celery worker service (ms_bs), simplifying monitoring via Flower and enabling dynamic cron job management via API backed by a PostgreSQL job registry.',
      'Implemented three distinct RabbitMQ exchanges (high_priority, medium_priority, low_priority) with task_acks_late=True, ensuring critical tasks (payment webhooks) were never lost on worker crash while bulk operations did not starve real-time requests.',
      'Abstracted all third-party communication providers (Twilio, SendGrid, Resend) behind a Provider interface, allowing hot-swapping of vendors without modifying business logic.',
    ],
    keyLearnings: [
      'Understood the practical trade-offs of shared-database microservices versus strict database-per-service patterns, and when each is the right architectural choice.',
      'Learned how centralizing background task orchestration into a dedicated service simplifies observability and scaling compared to distributed per-service workers.',
    ],
  },
  {
    id: 'pipeline-management',
    title: 'Pipeline Management Platform',
    role: 'Backend Software Engineer (Consulting)',
    dateRange: 'Enterprise Consulting',
    category: 'Enterprise Consulting',
    description: 'Designed and implemented a modern, fully asynchronous backend using FastAPI and SQLAlchemy 2.0. Engineered automated incident response systems, including a geospatial auto-assignment service.',
    technologies: ['FastAPI', 'PostgreSQL', 'Redis', 'Celery', 'APScheduler', 'Docker'],
    businessContext: 'An enterprise client in Kuwait required a highly reliable system to monitor critical pipeline infrastructure. The goal was to track pipeline assets, process real-time sensor payloads, detect anomalies like water loss or leaks, and automatically orchestrate incident responses across multiple organizations securely.',
    responsibilities: [
      'Designed and implemented a modern, fully asynchronous backend using FastAPI and SQLAlchemy 2.0.',
      'Engineered automated incident response systems, including a geospatial auto-assignment service to dispatch the nearest repair teams.',
      'Built an Escalation Engine that monitors alert lifecycles and automatically escalates unresolved, high-priority incidents.',
      'Developed dynamic reporting engines to parse and generate complex Excel reports for sensor accuracy and water loss using Celery background workers.'
    ],
    architecture: 'Clean Layered Architecture: Separated cross-cutting concerns by dividing the codebase into API, Controller, Service, and Repository layers, ensuring business logic was entirely decoupled from data access and routing.',
    engineeringDecisions: [
      'Implemented strict data isolation by dynamically routing requests to distinct PostgreSQL schemas per organization within the same database instance, rather than using separate databases.',
      'Utilized APScheduler running in the application context to continuously monitor time thresholds for escalations and calculate geospatial proximity for team dispatching.',
      'Built a custom row-level and role-based authorization system (RBAC) to restrict access to specific pipeline zones and sensitive industrial data.'
    ],
    keyLearnings: [
      'Gained deep experience in architecting strictly layered backend systems for complex enterprise domains.',
      'Learned to effectively manage real-time background automation (like geospatial dispatching) entirely decoupled from the core HTTP request-response cycle.'
    ]
  },
  {
    id: 'data-acquisition-automation',
    title: 'DC Google Automation',
    role: 'Backend/Automation Engineer',
    dateRange: 'Internal Tool',
    category: 'Internal Engineering',
    description: 'Built a highly resilient, unattended scraping engine to extract, normalize, and sync B2B leads from Google Maps across 150+ regions into internal CRMs.',
    technologies: ['Python', 'Playwright', 'Pandas', 'Google People API', 'PyInstaller', 'OAuth2'],
    businessContext: 'The business required a massive volume of highly accurate lead data to fuel CRM and marketing outreach. DC Google Automation was built as an unattended scraping engine to extract B2B leads from Google Maps across 150+ geographic regions and 40+ specialties, syncing them directly into internal CRMs and Google Contacts.',
    responsibilities: [
      'Designed and built the core Playwright orchestration engine to navigate Google Maps, extract DOM elements, and map them to a standardized 30-field schema.',
      'Engineered a robust anti-detection suite utilizing user-agent rotation, viewport jittering, and Gaussian-distributed scrolling delays to mimic human behavior and evade bot detection.',
      'Built a multi-stage Data Enrichment Pipeline using Pandas to strip noisy titles, normalize phone formats, geocode missing coordinates, and deduplicate composite records.',
      'Developed backend sync services to securely authenticate and push enriched CSV payloads into proprietary CRM APIs and Google People API (OAuth2).',
    ],
    architecture: 'Standalone Distribution: The entire Python ecosystem was packaged into a zero-dependency executable using PyInstaller, allowing non-technical operators to run complex scraping campaigns.',
    engineeringDecisions: [
      'Implemented an atomic ScrapeState tracker for crash-safe resumption. If the long-running overnight process crashes, it resumes exactly where it left off, preventing redundant work.',
      'Designed incremental data commitment logic where data is instantly appended to CSV files upon extraction rather than held in memory, ensuring zero data loss during network or hardware failures.',
      'Utilized Windows ctypes (SetThreadExecutionState) to prevent the host OS from entering sleep or hibernation states during multi-hour unattended executions.',
    ],
    keyLearnings: [
      'Mastered advanced browser automation and anti-bot evasion techniques required to extract data at scale without getting blocked.',
      'Gained deep practical experience in resiliency engineering — designing stateful systems that expect and gracefully recover from unexpected failures.',
    ],
  },
  {
    id: 'backend-api-testing',
    title: 'Woctor Backend Automation API',
    role: 'Internal Engineering (SDET)',
    dateRange: 'Internal Tool',
    category: 'Internal Engineering',
    description: 'Built a centralized load-testing and mock-data generation framework to benchmark the entire 8-microservice platform, identifying silent logical regressions under massive concurrency.',
    technologies: ['Python', 'Locust', 'Pytest', 'Faker', 'SQLAlchemy', 'Alembic'],
    businessContext: 'As the Woctor microservices ecosystem grew, manual QA and isolated unit tests were insufficient to guarantee performance under high concurrency. This automation framework was built to benchmark the entire platform, identify silent logical regressions, and simulate accurate production traffic.',
    responsibilities: [
      'Architected a massive Locust-based load testing suite encompassing 50+ domain endpoints across Billing, IPD, OPD, Content, and Catalogue microservices.',
      'Designed highly stateful simulated users that extract, cache, and reuse entity IDs during load tests to maintain strict referential integrity across interconnected workflows.',
      'Engineered dynamic payload generation using Faker to construct realistic, randomized requests to bypass backend caching optimizations during stress testing.',
      'Integrated deep business-logic assertions into the load-testing suite to proactively identify silent logical regressions under high concurrency, rather than relying solely on HTTP 200 status codes.',
    ],
    architecture: 'Interface-Segregated Testing Profiles: Developed access-tiered user profiles (BackofficeUser, PortalUser, OnlineUser) targeting specific namespaces to simulate real-world traffic splits between heavy administrative queries and high-volume public searches.',
    engineeringDecisions: [
      'Grouped isolated CRUD endpoints into aggregated task suites, orchestrating realistic cross-domain user journeys (like executing an IPD checkout flow that triggers the billing engine).',
      'Built a dedicated CatalogueBusinessRules abstraction to catch concurrency bugs under load — verifying invariants like ensuring dynamically generated packages had selling prices strictly less than their MRP.',
    ],
    keyLearnings: [
      'Learned how to design load-testing architectures that maintain complex relational state across thousands of concurrent, randomized users.',
      'Shifted my mindset from "testing if an endpoint works" to "validating distributed system consistency under massive stress."',
    ],
  },
  {
    id: 'sql-execution-automation',
    title: 'SQL Executable Script',
    role: 'Internal Engineering',
    dateRange: 'Internal Tool',
    category: 'Internal Engineering',
    description: 'Replaced a flaky, manual database seeding process with a reliable, single-click Python CLI that handles dependency ordering, transactions, and reporting.',
    technologies: ['Python', 'SQLAlchemy', 'Pandas', 'PyYAML', 'PostgreSQL', 'MySQL'],
    businessContext: 'Initializing and populating complex healthcare databases required executing dozens of massive SQL scripts. Running these manually caused cascading failures due to strict foreign key constraints. This CLI replaced a flaky, manual seeding process with a reliable, single-click tool handling dependency ordering, transactions, and reporting.',
    responsibilities: [
      'Architected a robust Python database execution CLI using SQLAlchemy, capable of safely orchestrating complex, multi-gigabyte SQL scripts across PostgreSQL, MySQL, and SQL Server databases.',
      'Implemented manifest-driven dependency resolution to solve strict foreign key constraints, reducing database initialization failures by enforcing exact chronological execution order.',
      'Designed a modular, fault-tolerant execution engine featuring configurable transaction boundaries, automatic rollbacks on failure, and comprehensive JSON execution reporting.',
      'Developed automated data extraction capabilities integrating Pandas to seamlessly export SELECT query results into structured CSV reports.',
    ],
    architecture: 'Atomic Transactions: Leveraged SQLAlchemy session context managers to wrap entire scripts within a single transaction block. If a 5GB script fails halfway through, session.rollback() is invoked automatically to revert partial inserts, keeping the database in a consistent state.',
    engineeringDecisions: [
      'Rather than parsing raw SQL to build an Abstract Syntax Tree (AST) to infer dependencies — which is error-prone across dialects — I designed a declarative YAML manifest system to guarantee perfect referential integrity.',
      'Enforced strict configuration validation and secure credential management using Pydantic and environment variables, adhering to production security best practices.',
    ],
    keyLearnings: [
      'Learned the complexities of cross-dialect database management and connection pooling via SQLAlchemy.',
      'Realized that sometimes declarative configuration (YAML manifests) is a much safer and pragmatic engineering choice than attempting complex code inference (AST parsing).',
    ],
  },
  {
    id: 'payment-service-poc',
    title: 'Payment Service POC',
    role: 'Backend Software Engineer',
    dateRange: 'Internal Tool',
    category: 'Internal Engineering',
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
