import { Injectable, signal } from '@angular/core';
import {
  Skill,
  CaseStudy,
  Testimonial,
  BlogPost,
  Service,
  SocialLink,
  FooterColumn,
  ContactInfo,
  Experience,
} from './portfolio.model';
import { CASE_STUDIES } from './portfolio-data';

@Injectable({
  providedIn: 'root',
})
export class PortfolioStore {
  readonly skills = signal<Skill[]>([
    {
      name: 'Angular',
      icon: 'angular',
      category: 'Frameworks',
      proficiency: 'Expert',
      years: 6,
    },
    {
      name: 'React',
      icon: 'react',
      category: 'Frameworks',
      proficiency: 'Advanced',
      years: 1,
    },
    {
      name: 'React Native / Expo',
      icon: 'react',
      category: 'Frameworks',
      proficiency: 'Advanced',
      years: 1,
    },
    {
      name: 'TanStack Query',
      icon: 'react',
      category: 'State',
      proficiency: 'Advanced',
      years: 1,
    },
    {
      name: 'Context API',
      icon: 'react',
      category: 'State',
      proficiency: 'Advanced',
      years: 1,
    },
    {
      name: 'Redux',
      icon: 'react',
      category: 'State',
      proficiency: 'Advanced',
      years: 1,
    },
    {
      name: 'Zustand',
      icon: 'react',
      category: 'State',
      proficiency: 'Advanced',
      years: 1,
    },
    {
      name: 'React Hook Form',
      icon: 'react',
      category: 'Tools',
      proficiency: 'Advanced',
      years: 1,
    },
    {
      name: 'Styled Components',
      icon: 'react',
      category: 'Styling',
      proficiency: 'Advanced',
      years: 1,
    },
    {
      name: 'Node.js / NestJS / Express',
      icon: 'nodejs',
      category: 'Backend',
      proficiency: 'Intermediate',
      years: 2,
    },
    {
      name: 'TanStack Table',
      icon: 'react',
      category: 'Tools',
      proficiency: 'Advanced',
      years: 1,
    },
    {
      name: 'TypeScript',
      icon: 'typescript',
      category: 'Languages',
      proficiency: 'Expert',
      years: 6,
    },
    {
      name: 'JavaScript',
      icon: 'javascript',
      category: 'Languages',
      proficiency: 'Expert',
      years: 6,
    },
    {
      name: 'RxJS / Signals',
      icon: 'rxjs',
      category: 'State',
      proficiency: 'Expert',
      years: 6,
    },
    {
      name: 'NgRx / Signal Store',
      icon: 'ngrx',
      category: 'State',
      proficiency: 'Expert',
      years: 6,
    },
    {
      name: 'Nx Monorepo',
      icon: 'nx',
      category: 'Architecture',
      proficiency: 'Expert',
      years: 4,
    },
    {
      name: 'Microservices',
      icon: 'database',
      category: 'Architecture',
      proficiency: 'Advanced',
      years: 3,
    },
    {
      name: 'Zoneless API',
      icon: 'angular',
      category: 'Architecture',
      proficiency: 'Expert',
      years: 1,
    },
    {
      name: 'Firebase',
      icon: 'nodejs',
      category: 'Backend',
      proficiency: 'Expert',
      years: 3,
    },
    {
      name: 'Tailwind CSS',
      icon: 'tailwind',
      category: 'Styling',
      proficiency: 'Expert',
      years: 4,
    },
    {
      name: 'SCSS',
      icon: 'sass',
      category: 'Styling',
      proficiency: 'Expert',
      years: 6,
    },
    {
      name: 'Angular Material',
      icon: 'angular',
      category: 'Styling',
      proficiency: 'Expert',
      years: 6,
    },
    {
      name: 'ApexCharts',
      icon: 'typescript',
      category: 'Tools',
      proficiency: 'Advanced',
      years: 3,
    },
    {
      name: 'Git',
      icon: 'git',
      category: 'Tools',
      proficiency: 'Expert',
      years: 6,
    },
    {
      name: 'Jasmine / Jest',
      icon: 'testing',
      category: 'Tools',
      proficiency: 'Expert',
      years: 6,
    },
    {
      name: 'Cypress',
      icon: 'testing',
      category: 'Tools',
      proficiency: 'Expert',
      years: 4,
    },
    {
      name: 'Vitest',
      icon: 'testing',
      category: 'Tools',
      proficiency: 'Advanced',
      years: 2,
    },
    {
      name: 'CI/CD Pipelines',
      icon: 'nx',
      category: 'Architecture',
      proficiency: 'Intermediate',
      years: 1,
    },
    {
      name: 'Leadership & Team Mentorship',
      icon: 'leadership',
      category: 'Soft Skills',
      proficiency: 'Expert',
      years: 6,
    },
    {
      name: 'Technical Communication',
      icon: 'problem-solving',
      category: 'Soft Skills',
      proficiency: 'Expert',
      years: 6,
    },
    {
      name: 'Problem Solving',
      icon: 'problem-solving',
      category: 'Soft Skills',
      proficiency: 'Expert',
      years: 6,
    },
    {
      name: 'Agile & Collaborative Mindset',
      icon: 'leadership',
      category: 'Soft Skills',
      proficiency: 'Expert',
      years: 6,
    },
    {
      name: 'Adaptability & Continuous Learning',
      icon: 'problem-solving',
      category: 'Soft Skills',
      proficiency: 'Expert',
      years: 6,
    },
  ]);

  readonly services = signal<Service[]>([
    {
      title: 'Enterprise Migration & Modernization',
      description:
        'Transform slow, tangled legacy frontends into clean, modular Angular systems. I specialize in Angular migrations (AngularJS/legacy → modern), refactoring strategies that remove technical debt, and scalable architectures that keep delivery moving.',
      icon: 'migration',
      features: ['Angular Migration Expert', 'Codebase Refactoring', 'Nx Monorepo'],
    },
    {
      title: 'SaaS Product Engineering',
      description:
        'End-to-end delivery for scalable SaaS products. I design maintainable UI architectures, predictable state management, and performance-first frontends that support rapid iteration without regressions.',
      icon: 'code',
      features: ['Full-Cycle Dev', 'Scalable Architecture', 'Reactive State'],
    },
    {
      title: 'Architecture Audits & Performance',
      description:
        'Deep-dive audits into your codebase structure and runtime performance. I identify scaling bottlenecks, optimize Core Web Vitals, and turn spaghetti code into feature-based modules with clear ownership.',
      icon: 'performance',
      metric: { value: '40%+', label: 'Faster load times' },
    },
    {
      title: 'Feature Delivery',
      description:
        'Turn product requirements into deployed reality. I execute end-to-end feature development—from architectural planning to pixel-perfect UI—ensuring new capabilities launch smoothly and integrate seamlessly with your existing system.',
      icon: 'feature',
      features: ['End-to-End Implementation', 'Complex State Management', 'API Integration'],
    },
    {
      title: 'Fractional Tech Lead / Mentorship',
      description:
        "Elevate your team's capabilities. I provide code reviews, set up best practices (CI/CD, Testing), and mentor developers on advanced architectural patterns like Signals and RxJS.",
      icon: 'leadership',
      features: ['Code Reviews', 'Team Upskilling', 'Process Setup'],
    },
  ]);

  readonly caseStudies = signal<CaseStudy[]>(CASE_STUDIES);

  readonly testimonials = signal<Testimonial[]>([
    {
      id: '1',
      name: 'Jane Doe',
      role: 'CTO',
      company: 'TechStart',
      quote: 'Karol delivered enterprise Angular with zero bugs. Highly recommended.',
      avatarUrl: 'assets/images/jane.jpg',
    },
    {
      id: '2',
      name: 'John Smith',
      role: 'Product Owner',
      company: 'EnterpriseCorp',
      quote: 'Exceptional architectural skills and performance optimization.',
      avatarUrl: 'assets/images/john.jpg',
    },
  ]);

  readonly socialLinks = signal<SocialLink[]>([
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/karol-modelski',
      icon: 'linkedin',
    },
    {
      platform: 'GitHub',
      url: 'https://github.com/CodeWithKarol',
      icon: 'github',
    },
    {
      platform: 'Medium',
      url: 'https://karol-modelski.medium.com/',
      icon: 'medium',
    },
    {
      platform: 'Scale Sail',
      url: 'https://scale-sail.io/',
      icon: 'globe',
    },
  ]);

  readonly footerColumns = signal<FooterColumn[]>([
    {
      title: 'Services',
      links: [
        { label: 'Modernization & Migration', href: '#services' },
        { label: 'Architecture Audit', href: '#services' },
        { label: 'Performance Optimization', href: '#services' },
        { label: 'Fractional Tech Lead', href: '#services' },
      ],
    },
    {
      title: 'Portfolio',
      links: [
        { label: 'Selected Work', href: '/work' },
        { label: 'Contact', href: '#contact' },
        { label: 'GitHub', href: 'https://github.com/CodeWithKarol' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '/blog' },
        { label: 'Tech Stack', href: '#skills' },
        { label: 'Contact', href: '#contact' },
      ],
    },
  ]);

  readonly contactInfo = signal<ContactInfo>({
    email: 'karol-modelski@scale-sail.io',
    location: 'Warsaw, Mazowieckie, Poland',
    availability: 'Available for new projects',
    calendlyUrl: 'https://calendly.com',
  });

  readonly experience = signal<Experience[]>([
    {
      company: 'GFT Technologies (Citi)',
      role: 'Senior Frontend Developer',
      period: 'Mar 2025 - Present',
      description:
        'Leading architecture for mission-critical trading platforms. Enforcing 100% test coverage policies while migrating legacy micro-frontends to a coherent Nx monorepo. Balancing enterprise compliance with developer velocity.',
      technologies: ['Angular 19', 'Nx', 'Micro-Frontends', 'Regulatory Compliance'],
    },
    {
      company: 'Silent Eight',
      role: 'Frontend Developer',
      period: 'Dec 2023 - Feb 2025',
      description:
        'AI Compliance SaaS. Led the frontend modernization initiative (Angular 14 → 19) and introduced "Zoneless" architecture for 50% performance gains. Worked directly with Product Owners to accelerate feature delivery.',
      technologies: ['Angular 19', 'TanStack Query', 'AI Integration', 'SaaS'],
    },
    {
      company: 'BNP Paribas',
      role: 'Software Developer',
      period: 'Nov 2021 - Nov 2023',
      description:
        'GOonline Platform. Delivered features for 1M+ active users. Managed the complex migration of core banking modules from AngularJS, ensuring zero downtime during high-traffic windows.',
      technologies: ['Angular', 'Enterprise Scale', 'Migration Strategies', 'Fintech'],
    },
    {
      company: 'Amway',
      role: 'Javascript Developer',
      period: 'Apr 2019 - Oct 2021',
      description:
        'Global E-commerce. Built high-traffic dashboards for business owners. Optimized data visualization components handling millions of records.',
      technologies: ['Angular', 'Data Viz', 'E-commerce'],
    },
  ]);
}
