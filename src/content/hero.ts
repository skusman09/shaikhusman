import type { HeroContent } from '@/types/portfolio';

export const hero: HeroContent = {
  name: 'Shaikh Mohammed Usman',
  role: 'Backend Software Engineer',
  tagline: 'Building scalable backend platforms that evolve into real products.',
  statusBadge: 'Open to Backend Software Engineer opportunities',
  imageAlt: 'Shaikh Mohammed Usman',
  introduction: 'Backend Software Engineer with 2+ years of experience building reusable backend platforms, enterprise applications, and automation systems using Python, FastAPI, PostgreSQL, Redis, and Docker.',
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
    { icon: 'Briefcase', label: '2+ Years' },
    { icon: 'MapPin', label: 'Mumbai, India' },
    { icon: 'Server', label: 'Backend Platforms · Automation · Platform Engineering' },
  ],
};
