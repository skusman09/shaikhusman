import type { HeroContent } from '@/types/portfolio';

export const hero: HeroContent = {
  name: '[NAME PLACEHOLDER]',
  role: '[ROLE PLACEHOLDER]',
  introduction: '[INTRODUCTION PLACEHOLDER]',
  statusBadge: '[STATUS PLACEHOLDER]',
  imageAlt: '[PROFILE PHOTO PLACEHOLDER]',
  cta: {
    primary: {
      label: '[DOWNLOAD RESUME]',
      href: '#',
    },
    secondary: {
      label: '[CONTACT]',
      href: '#',
    },
  },
  quickInfo: [
    { icon: 'Briefcase', label: '[CURRENT ROLE PLACEHOLDER]' },
    { icon: 'Calendar', label: '[EXPERIENCE PLACEHOLDER]' },
    { icon: 'MapPin', label: '[LOCATION PLACEHOLDER]' },
  ],
};
