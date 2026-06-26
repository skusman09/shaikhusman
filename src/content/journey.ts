import type { JourneyPhase } from '@/types/portfolio';

export const journeySection = {
  title: 'Engineering Journey',
};

export const journey: JourneyPhase[] = [
  {
    title: 'Product Design',
    description: 'Started my professional journey by designing the complete user experience for MDPlix. This phase helped me understand how software products are designed before they are engineered.',
    milestones: [
      {
        title: 'Design Responsibilities',
        description: 'Wireframes, User Flows, Interactive Prototypes, UI Design, and Product Planning.',
      },
    ],
  },
  {
    title: 'Backend Foundation',
    description: 'Transitioned into backend engineering. Started building the backend architecture for MDPlix using Python, FastAPI, PostgreSQL, Redis, and Docker. This phase established the architectural foundation for future products.',
    milestones: [
      {
        title: 'Engineering Responsibilities',
        description: 'REST APIs, Authentication, Database Design, Business Logic, Scheduling, Reporting, and Notification Systems.',
      },
    ],
  },
  {
    title: 'Platform Evolution',
    description: 'As the backend architecture matured, it became reusable. Instead of creating entirely new applications for every business domain, the platform was extended by introducing new modules while preserving the core architecture.',
    milestones: [
      {
        title: 'Engineering Impact',
        description: 'Reduced duplication and accelerated development across multiple products.',
      },
    ],
  },
  {
    title: 'Enterprise Consulting',
    description: 'Alongside product development, I worked as a backend consultant through Suflon Tech LLP in collaboration with AMSYS on a pipeline management platform for a Kuwait-based client.',
    milestones: [
      {
        title: 'Client Collaboration',
        description: 'Understanding business requirements, participating in client discussions, and independently implementing backend solutions for an enterprise application.',
      },
    ],
  },
  {
    title: 'Internal Engineering',
    description: 'Beyond customer-facing products, I contributed to engineering tools that improved internal productivity. These projects reinforced engineering practices around automation, testing, and operational efficiency.',
    milestones: [
      {
        title: 'Productivity Tools',
        description: 'Data acquisition automation, Backend API testing, and SQL execution automation.',
      },
    ],
  },
  {
    title: 'Continuous Learning',
    description: 'Outside professional work, I continuously explore new technologies by building personal projects. Architecting and deploying StaffOne independently provided deep, hands-on experience with cloud infrastructure, multi-tenant databases, and production hosting.',
    milestones: [
      {
        title: 'Explorations',
        description: 'Cloud deployment, Infrastructure, Backend architecture, Multi-tenant systems, Production hosting, and Performance optimization.',
      },
    ],
  },
];
