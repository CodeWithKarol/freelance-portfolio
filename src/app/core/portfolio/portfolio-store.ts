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
      name: 'Jasmine / Jest / Vitest',
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
      title: 'Code Quality Audit',
      description:
        'Merge with confidence. Get a comprehensive review of your most critical Pull Request (max 400 LoC). You receive actionable feedback on maintainability, type safety, and Angular best practices in 24h.',
      price: '$79 / PR',
      features: ['Clean Code Review', 'Type Safety Check', 'Architectural Sign-off'],
      ctaUrl: 'mailto:karol-modelski@scale-sail.io?subject=Request: Code Quality Audit',
      icon: 'consulting',
      category: 'Code Quality',
    },
    {
      title: 'Component Detox',
      description:
        'Turn fragile UI into rock-solid code. Your complex component (< 500 LoC) is refactored into a clean Smart (Data) vs. Dumb (UI) architecture, eliminating bugs and making future updates effortless.',
      price: '$149 / Component',
      features: ['Logic Extraction', 'Signal Integration', 'Max 500 Lines Source'],
      ctaUrl: 'mailto:karol-modelski@scale-sail.io?subject=Request: Component Detox',
      icon: 'component',
      category: 'Code Quality',
    },
    {
      title: 'API Integration Layer',
      description:
        'Stop writing boilerplate. You get fully type-safe Angular Services and a reactive Signal Store generated directly from your Swagger/Postman specs (up to 5 endpoints), ready to plug into your UI.',
      price: '$149 / Module',
      features: ['Generated Types', 'Signal Store Setup', 'Max 5 Endpoints'],
      ctaUrl: 'mailto:karol-modelski@scale-sail.io?subject=Request: API Integration Layer',
      icon: 'code',
      category: 'Features',
    },
    {
      title: 'Small Feature Build',
      description:
        'Ship a production-ready feature in days. You get a fully integrated, state-managed feature built using your existing UI library (Material/Tailwind), polished and ready for users.',
      price: '$299 / Feature',
      features: ['Existing Design System', 'State Management', 'Single View / Widget'],
      ctaUrl: 'mailto:karol-modelski@scale-sail.io?subject=Request: Small Feature Build',
      icon: 'component',
      category: 'Features',
    },
    {
      title: 'The "Bundle Diet" Analysis',
      description:
        'Your app is slow because your initial bundle is huge. I’ll tell you exactly what to cut. A PDF report identifying the top 3 largest libraries bloating the main bundle.',
      price: '$99 / Report',
      features: ['Source Map Analysis', 'Lazy-Loading Plan', 'No Code Changes'],
      ctaUrl: 'mailto:karol-modelski@scale-sail.io?subject=Request: Bundle Diet Analysis',
      icon: 'performance',
      category: 'Performance',
    },
    {
      title: 'RxJS Leak Hunter',
      description:
        'Memory leaks are silent killers. I’ll find where your Observables are leaking. Automated scan + manual spot check report.',
      price: '$149 / Report',
      features: ['Leak Detection', 'Subscription Audit', 'Max 50 Files'],
      ctaUrl: 'mailto:karol-modelski@scale-sail.io?subject=Request: RxJS Leak Hunter',
      icon: 'consulting',
      category: 'Audits',
    },
    {
      title: '"Zoneless" Readiness Check',
      description:
        'Prepare for Angular 21. I’ll identify every blocker preventing you from removing zone.js. List of incompatible 3rd-party libs and ChangeDetectorRef usages.',
      price: '$149 / Report',
      features: ['Zone.js Audit', 'Library Check', 'Max 50k LoC'],
      ctaUrl: 'mailto:karol-modelski@scale-sail.io?subject=Request: Zoneless Readiness Check',
      icon: 'consulting',
      category: 'Audits',
    },
    {
      title: 'Tailwind CSS Bloat Check',
      description:
        "Are you shipping unused CSS? I'll audit your Tailwind config and usage. Config optimization report + list of arbitrary values that should be theme tokens.",
      price: '$99 / Audit',
      features: ['Config Optimization', 'Token Strategy', '1 Global Styles File'],
      ctaUrl: 'mailto:karol-modelski@scale-sail.io?subject=Request: Tailwind CSS Bloat Check',
      icon: 'performance',
      category: 'Performance',
    },
    {
      title: 'Circular Dependency Audit',
      description:
        "Spaghetti imports are slowing down your build. I'll map out your circular dependencies. Madge visualization + step-by-step plan to break the 3 worst cycles.",
      price: '$199 / Analysis',
      features: ['Dependency Graph', 'Cycle Breaking Plan', 'Analysis Only'],
      ctaUrl: 'mailto:karol-modelski@scale-sail.io?subject=Request: Circular Dependency Audit',
      icon: 'consulting',
      category: 'Audits',
    },
    {
      title: 'Signal Input Migration',
      description:
        'Move to the new Signal Inputs API for better type safety and performance. Convert @Input() decorators to input() signals for one feature module.',
      price: '$199 / Module',
      features: ['Signal Inputs', 'Type Safety', 'Max 10 Components'],
      ctaUrl: 'mailto:karol-modelski@scale-sail.io?subject=Request: Signal Input Migration',
      icon: 'component',
      category: 'Modernization',
    },
    {
      title: 'Control Flow Modernization',
      description:
        "Ditch *ngIf and *ngFor. I'll upgrade your templates to the new built-in control flow (@if, @for, @switch).",
      price: '$149 / Module',
      features: ['New Syntax', 'Template Cleanup', 'Max 15 Templates'],
      ctaUrl: 'mailto:karol-modelski@scale-sail.io?subject=Request: Control Flow Modernization',
      icon: 'component',
      category: 'Modernization',
    },
    {
      title: 'Semantic HTML Upgrade',
      description:
        "Fix your accessibility foundation. I'll rewrite your main layout with semantic tags (<main>, <nav>, <article>) to pass basic accessibility checks.",
      price: '$129 / Page',
      features: ['Semantic Tags', 'A11y Basics', 'Max 400 Lines'],
      ctaUrl: 'mailto:karol-modelski@scale-sail.io?subject=Request: Semantic HTML Upgrade',
      icon: 'component',
      category: 'Modernization',
    },
    {
      title: 'Pipe Purification',
      description:
        "Stop running logic in templates. I'll move complex function calls into pure, memoized pipes.",
      price: '$149 / Batch',
      features: ['Pure Pipes', 'Memoization', 'Max 5 Pipes'],
      ctaUrl: 'mailto:karol-modelski@scale-sail.io?subject=Request: Pipe Purification',
      icon: 'performance',
      category: 'Performance',
    },
    {
      title: 'Image Optimization Sprint',
      description:
        "Fix your LCP score. I'll implement NgOptimizedImage for your landing page, converting standard <img> tags to ngSrc with correct loaders.",
      price: '$149 / Page',
      features: ['LCP Improvement', 'NgOptimizedImage', '1 Landing Page'],
      ctaUrl: 'mailto:karol-modelski@scale-sail.io?subject=Request: Image Optimization Sprint',
      icon: 'performance',
      category: 'Performance',
    },
    {
      title: '"OnPush" Enforcer',
      description:
        "Stop unnecessary re-renders. I'll switch a subtree to OnPush change detection and fix state management issues.",
      price: '$249 / Route',
      features: ['OnPush Strategy', 'Render Check', '1 Route Component'],
      ctaUrl: 'mailto:karol-modelski@scale-sail.io?subject=Request: OnPush Enforcer',
      icon: 'performance',
      category: 'Performance',
    },
    {
      title: 'Virtual Scroll Implementation',
      description:
        "Rendering 1000 items? I'll implement CDK Virtual Scroll to make it instant, replacing *ngFor with <cdk-virtual-scroll-viewport>.",
      price: '$199 / List',
      features: ['CDK Virtual Scroll', 'Performance Boost', '1 List Component'],
      ctaUrl: 'mailto:karol-modelski@scale-sail.io?subject=Request: Virtual Scroll Implementation',
      icon: 'performance',
      category: 'Performance',
    },
    {
      title: 'Nx Caching Setup',
      description:
        "Cut your CI times in half. I'll configure Nx Computation Caching for your workspace (nx.json + CI step).",
      price: '$299 / Config',
      features: ['CI Optimization', 'Nx Cache', 'Config Only'],
      ctaUrl: 'mailto:karol-modelski@scale-sail.io?subject=Request: Nx Caching Setup',
      icon: 'consulting',
      category: 'DX & Ops',
    },
    {
      title: 'Storybook Initialization',
      description:
        "Start building UI in isolation. I'll set up Storybook and write your first story for a button/card.",
      price: '$199 / Setup',
      features: ['Storybook Setup', 'Component Isolation', '1 Example Story'],
      ctaUrl: 'mailto:karol-modelski@scale-sail.io?subject=Request: Storybook Initialization',
      icon: 'consulting',
      category: 'DX & Ops',
    },
    {
      title: 'ESLint Strict Mode Config',
      description:
        "Enforce best practices automatically. I'll install a strict, modern Angular ESLint config and run auto-fix.",
      price: '$99 / Config',
      features: ['Strict Rules', 'Auto-Fix', 'Modern Config'],
      ctaUrl: 'mailto:karol-modelski@scale-sail.io?subject=Request: ESLint Strict Mode',
      icon: 'consulting',
      category: 'DX & Ops',
    },
    {
      title: 'Critical Path E2E Test',
      description:
        'Never break checkout again. I\'ll write one rock-solid Cypress/Playwright test covering a single "Happy Path".',
      price: '$199 / Flow',
      features: ['Cypress/Playwright', 'Critical Flow', 'Max 5 Steps'],
      ctaUrl: 'mailto:karol-modelski@scale-sail.io?subject=Request: Critical Path E2E Test',
      icon: 'consulting',
      category: 'Testing',
    },
    {
      title: 'Unit Test Catch-up',
      description:
        'Get that critical service to 100% coverage. Vitest/Jest/Jasmine spec file with full coverage for one service.',
      price: '$149 / File',
      features: ['100% Coverage', 'Vitest/Jest/Jasmine', 'Max 200 LoC'],
      ctaUrl: 'mailto:karol-modelski@scale-sail.io?subject=Request: Unit Test Catch-up',
      icon: 'consulting',
      category: 'Testing',
    },
    {
      title: 'Mock Data Factory',
      description:
        "Develop without the backend. I'll set up MSW (Mock Service Worker) handlers for one feature's API endpoints.",
      price: '$199 / Module',
      features: ['MSW Setup', 'Offline Dev', 'Max 5 Endpoints'],
      ctaUrl: 'mailto:karol-modelski@scale-sail.io?subject=Request: Mock Data Factory',
      icon: 'code',
      category: 'Testing',
    },
    {
      title: 'Theme Switcher Implementation',
      description:
        'Add Dark Mode to your app properly. Service to handle theme state + Tailwind/CSS variable setup.',
      price: '$149 / Setup',
      features: ['Dark Mode', 'Tailwind Config', 'State Service'],
      ctaUrl: 'mailto:karol-modelski@scale-sail.io?subject=Request: Theme Switcher Implementation',
      icon: 'component',
      category: 'Features',
    },
    {
      title: 'Interactive Chart Widget',
      description:
        "Visualize your data. I'll build a reusable chart component wrapped around Chart.js/ApexCharts with typed inputs.",
      price: '$249 / Chart',
      features: ['Data Visualization', 'Typed Inputs', '1 Chart Type'],
      ctaUrl: 'mailto:karol-modelski@scale-sail.io?subject=Request: Interactive Chart Widget',
      icon: 'component',
      category: 'Features',
    },
  ]);

  readonly process = signal<ProcessStep[]>([
    {
      number: '01',
      title: 'Select & Sync',
      description:
        'Select your Micro-Engagement. We align asynchronously via email/Loom to confirm requirements. No lengthy discovery calls.',
    },
    {
      number: '02',
      title: 'Deep Work',
      description:
        'Execution. Your task is completed in deep-work isolation using your repo or a clean branch. Focus is on quality and tests, not meetings.',
    },
    {
      number: '03',
      title: 'Async Handoff',
      description:
        'Delivery. You receive a PR, a Loom walkthrough, and documentation. I iterate on feedback until you are ready to merge.',
    },
  ]);

  readonly faqs = signal<FaqItem[]>([
    {
      question: 'What is a Micro-Engagement?',
      answer:
        'A Micro-Engagement is a high-impact, short-term contract focused on a specific outcome (like a performance audit or component build) rather than ongoing hourly work. It allows you to access specialized Angular expertise for critical problems without a long-term hiring commitment.',
    },
    {
      question: 'Why choose a Micro-Engagement over a Freelancer or Agency?',
      answer: `
        <p class="mb-4">Traditional hiring models are often too slow or too expensive for focused technical problems.</p>
        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr class="border-b border-slate-200 dark:border-slate-800">
                <th class="py-2 font-mono font-bold text-slate-900 dark:text-white">Feature</th>
                <th class="py-2 font-mono font-bold text-slate-500">Freelancer</th>
                <th class="py-2 font-mono font-bold text-slate-500">Agency</th>
                <th class="py-2 font-mono font-bold text-primary">Micro-Engagement</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-slate-100 dark:border-slate-800/50">
                <td class="py-2 font-medium text-slate-700 dark:text-slate-300">Speed</td>
                <td class="py-2 text-slate-600 dark:text-slate-400">Varies</td>
                <td class="py-2 text-slate-600 dark:text-slate-400">Slow</td>
                <td class="py-2 font-bold text-slate-900 dark:text-white">Fast (3-5 Days)</td>
              </tr>
              <tr class="border-b border-slate-100 dark:border-slate-800/50">
                <td class="py-2 font-medium text-slate-700 dark:text-slate-300">Cost</td>
                <td class="py-2 text-slate-600 dark:text-slate-400">Hourly</td>
                <td class="py-2 text-slate-600 dark:text-slate-400">High ($$$)</td>
                <td class="py-2 font-bold text-slate-900 dark:text-white">Fixed Price</td>
              </tr>
              <tr>
                <td class="py-2 font-medium text-slate-700 dark:text-slate-300">Expertise</td>
                <td class="py-2 text-slate-600 dark:text-slate-400">Hit or Miss</td>
                <td class="py-2 text-slate-600 dark:text-slate-400">Mixed Team</td>
                <td class="py-2 font-bold text-slate-900 dark:text-white">Angular Expert</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      question: 'How is this different from your agency?',
      answer:
        'Scale Sail Agency handles large-scale migrations and long-term contracts. Here, I personally handle smaller, high-impact tasks (Micro-Engagements) that need expert Angular attention but not a full team.',
    },
    {
      question: 'What is your availability?',
      answer:
        'I strictly cap my freelance work to 10-15 hours/week to maintain high quality. Most "Micro-Engagements" are delivered within 3-4 business days.',
    },
    {
      question: 'Do you work hourly or fixed price?',
      answer:
        'I strictly prefer fixed-price, asynchronous engagements. I do not offer hourly billing or live meeting blocks, allowing me to focus deeply on delivering the best solution.',
    },
  ]);

  readonly experience = signal<Experience[]>([
    {
      company: 'GFT Technologies (Citi)',
      role: 'Senior Frontend Developer',
      period: 'Mar 2025 - Present',
      description:
        'Delivering robust trading platforms. Enforcing 100% test coverage policies while migrating legacy micro-frontends to a coherent Nx monorepo. Balancing enterprise compliance with developer velocity.',
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
