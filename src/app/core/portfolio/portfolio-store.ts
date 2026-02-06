import { Injectable, signal } from '@angular/core';
import {
  Skill,
  Testimonial,
  SocialLink,
  FooterColumn,
  ContactInfo,
  Experience,
  Project,
  Gig,
  ProcessStep,
  FaqItem,
} from './portfolio.model';

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
      title: 'Main',
      links: [
        { label: 'Home', href: '/' },
        { label: 'About Me', href: '#about' },
        { label: 'Micro-Engagements', href: '#gigs' },
        { label: 'Projects', href: '#projects' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'The Process', href: '#process' },
        { label: 'Tech Stack', href: '#skills' },
        { label: 'Experience', href: '#experience' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Blog / Medium', href: 'https://karol-modelski.medium.com/' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { label: 'Start a Project', href: '#contact' },
        { label: 'Scale Sail Agency', href: 'https://scale-sail.io' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/karol-modelski' },
        { label: 'GitHub', href: 'https://github.com/CodeWithKarol' },
        { label: 'X / Twitter', href: 'https://x.com/modelski_karol' },
      ],
    },
  ]);

  readonly contactInfo = signal<ContactInfo>({
    email: 'karol-modelski@scale-sail.io',
    location: 'Warsaw, Mazowieckie, Poland',
    availability: 'Available for new projects',
    calendlyUrl: 'https://calendly.com',
  });

  readonly projects = signal<Project[]>([
    {
      title: 'Modern Enterprise Admin Dashboard',
      description:
        'High-Performance Real-Time Analytics. Built with Angular 21, Signals, and Tailwind CSS 4. Optimized for incremental hydration and low TBT (Total Blocking Time).',
      tags: ['Angular 21', 'Signals', 'Tailwind CSS 4', 'Vitest'],
      thumbnailUrl: 'images/admin-panel/admin-panel.webp',
      liveUrl: 'https://www.admin-panel.scale-sail.io',
      githubUrl: 'https://www.github.com/CodeWithKarol/admin-panel',
    },
    {
      title: 'QuickCart: High-Performance E-Commerce',
      description:
        'Next-Gen Angular E-Commerce Architecture. Features a clean-slate "Smart Shell" architecture and Signal-based reactivity system.',
      tags: ['Angular', 'Signals', 'Standalone Components', 'Tailwind CSS'],
      thumbnailUrl: 'images/quick-cart/quick-cart.webp',
      liveUrl: 'https://www.quick-cart.scale-sail.io',
      githubUrl: 'https://www.github.com/CodeWithKarol/quick-cart',
    },
  ]);

  readonly gigs = signal<Gig[]>([
    {
      title: 'Code Review Deep Dive',
      description:
        'Stop merging technical debt. I review a critical PR to catch security holes, performance killers, and logic bombs. Includes video walkthrough and specific remediation code.',
      price: 'Starting at $149',
      features: ['Video Walkthrough', 'Architecture Feedback', 'Security Vulnerability Check'],
      ctaUrl: 'https://calendly.com',
      icon: 'code',
    },
    {
      title: 'Performance Quick-Win',
      description:
        'Your app is too slow. I identify exactly why (Render blocking? Bundle size?) and provide a remediation plan to improve Core Web Vitals (LCP/INP) by up to 40%.',
      price: 'Starting at $299',
      features: ['Lighthouse Analysis', 'Bundle Size Audit', 'Core Web Vitals Action Plan'],
      ctaUrl: 'https://calendly.com',
      icon: 'performance',
    },
    {
      title: 'Single Component Build',
      description:
        'Need a complex UI widget but your team is swamped? I build it pixel-perfect, fully accessible (WCAG 2.1 AA), and 100% unit tested. Drop-in ready for your codebase.',
      price: 'Starting at $399',
      features: ['Pixel Perfect Implementation', '100% Test Coverage', 'WCAG 2.1 AA Accessible'],
      ctaUrl: 'https://calendly.com',
      icon: 'component',
    },
    {
      title: '1:1 Architecture Consult',
      description:
        'Stuck on a hard problem? We jump on a call, share screens, and solve it together. I unblock you so you can get back to shipping.',
      price: '$199 / Hour',
      features: ['Live Problem Solving', 'Recording Provided', 'Follow-up Email'],
      ctaUrl: 'https://calendly.com',
      icon: 'consulting',
    },
  ]);

  readonly process = signal<ProcessStep[]>([
    {
      number: '01',
      title: 'Diagnosis & Scope',
      description:
        'You send the repo or invite me to the call. I identify the root cause, define the fix, and set a fixed price. No guessing.',
    },
    {
      number: '02',
      title: 'Surgical Strike',
      description:
        'I fix the issue in isolation. I write the tests, refactor the mess, and ensure it integrates cleanly with your existing codebase.',
    },
    {
      number: '03',
      title: 'Recovery & Handoff',
      description:
        'I deliver a PR with a video walkthrough. Your team gets a solved problem and a blueprint for future stability.',
    },
  ]);

  readonly faqs = signal<FaqItem[]>([
    {
      question: 'How is this different from your agency?',
      answer:
        'Scale Sail Agency handles large-scale migrations and long-term contracts. Here, I personally handle smaller, high-impact tasks (Micro-Engagements) that need expert attention but not a full team.',
    },
    {
      question: 'What is your availability?',
      answer:
        'I dedicate 10-15 hours/week to freelance gigs. Most "Micro-Engagements" are delivered within 3-5 business days.',
    },
    {
      question: 'Do you work hourly or fixed price?',
      answer:
        'I prefer fixed-price for defined scopes (like Component Builds or Audits). For open-ended consulting, I bill hourly.',
    },
  ]);

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
      role: 'Junior Frontend Developer',
      period: 'Apr 2019 - Oct 2021',
      description:
        'Global E-commerce. Built high-traffic dashboards for business owners. Optimized data visualization components handling millions of records.',
      technologies: ['Angular', 'Data Viz', 'E-commerce'],
    },
  ]);
}
