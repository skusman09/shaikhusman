import type { HeroContent } from '@/types/portfolio';

export const hero: HeroContent = {
  name: 'Shaikh Mohammed Usman',
  role: 'Backend Software Engineer',
  tagline: 'Building scalable backend platforms that evolve into real products.',
  statusBadge: 'Open to Backend Software Engineer opportunities',
  imageAlt: 'Shaikh Mohammed Usman',
  introduction: 'Backend Software Engineer with 2+ years of experience building platforms, enterprise applications, automation systems, and reusable software architectures using Python, FastAPI, PostgreSQL, Redis, and Docker.',
  cta: {
    primary: {
      label: 'Download Resume',
      href: '/resume.pdf',
    },
    secondary: {
      label: 'View GitHub',
      href: 'https://github.com/skusman09',
    },
  },
  quickInfo: [
    { icon: 'Briefcase', label: '2+ Years Experience' },
    { icon: 'MapPin', label: 'Mumbai, Maharashtra, India' },
    { icon: 'Server', label: 'Backend Platforms • Automation • Distributed Systems' },
  ],
};
