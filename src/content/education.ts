import type { CertificationItem, EducationItem } from '@/types/portfolio';

export const educationSection = {
  title: 'Education',
  description: 'Academic background, academic research, and continuous learning through tech bootcamps.',
};

export const education: EducationItem[] = [
  {
    id: 'msc-it',
    degree: 'M.Sc. Information Technology',
    institution: 'Thakur College of Science and Commerce',
    graduationYear: '07/2023 - 05/2025',
    highlights: [],
  },
  {
    id: 'bsc-it',
    degree: 'B.Sc. Information Technology',
    institution: 'Maharashtra College of Arts Science and Commerce',
    graduationYear: '06/2019 - 05/2022',
    highlights: [],
  }
];

export const certifications: CertificationItem[] = [
  {
    id: 'java-anudip',
    title: 'Java Core-to-Advanced Certification',
    issuer: 'Anudip Foundation',
    date: '01/2023 - 06/2023',
    description: 'Comprehensive certification covering object-oriented programming, advanced Java concepts, and enterprise software development principles.',
    certificate: '/documents/AnudipCertificate.pdf',
  }
];

export const researchPapers = [
  {
    id: 'research-irjmets',
    title: 'Advancing Marine Species Recognition',
    issuer: 'IRJMETS',
    date: 'March 2025',
    description: 'A hybrid Deep Learning and Machine Learning framework leveraging ResNet feature extraction with Random Forest and KNN classifiers.',
    certificate: '/documents/3-IRJMETS_Certificate.pdf',
    link: 'https://www.irjmets.com/uploadedfiles/paper/issue_3_march_2025/69451/final/fin_irjmets1742454579.pdf'
  },
  {
    id: 'research-ijprems',
    title: 'Advancing Marine Biodiversity Monitoring',
    issuer: 'IJPREMS',
    date: 'Recent',
    description: 'Authored research focusing on modern computing paradigms and monitoring marine ecosystems using hybrid AI frameworks.',
    certificate: '/documents/4-IJPREMS_Certificate.pdf',
    link: 'https://www.ijprems.com/ijprems-paper/advancing-marine-biodiversity-monitoring-a-hybrid-deep-learning-and-machine-learning-framework-leveraging-resnet-feature-extraction-with-random-forest-and-knn-classifiers?utm_source=gemini'
  },
  {
    id: 'research-jnrid',
    title: 'Classification Of Marine Species',
    issuer: 'JNRID',
    date: 'October 2024',
    description: 'Published academic research paper exploring advanced software implementations, CNNs, and technology impact on species classification.',
    certificate: '/documents/2-JNRID 700698_Certificate.pdf',
    link: 'https://tijer.org/jnrid/papers/JNRID2410011.pdf'
  },
  {
    id: 'research-tijer',
    title: 'Enhancing Underwater Temperature Prediction',
    issuer: 'TIJER',
    date: 'April 2024',
    description: 'Contributed to technical research applying LightGBM and Machine Learning algorithms for environmental forecasting and underwater temperature prediction.',
    certificate: '/documents/1-TIJER 151858_Certificate.pdf',
    link: 'https://tijer.org/tijer/papers/TIJER2404047.pdf'
  }
];
