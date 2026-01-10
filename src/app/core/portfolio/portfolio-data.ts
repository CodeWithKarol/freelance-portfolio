import { CaseStudy, BlogPost } from './portfolio.model';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    title: 'ScaleSail.io',
    tagline: 'High-Performance SaaS Templates',
    heroImage:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    challenge: 'Founders need high-converting, SEO-optimized landing pages without technical debt.',
    solution:
      'Built a suite of premium Angular 18+ templates with perfect Lighthouse scores and zero-config deployment.',
    results: ['100/100 Lighthouse', 'Zero CLS', 'Mobile-First Design'],
    techStack: ['Angular 18', 'Tailwind', 'Signals'],
    demoUrl: 'https://scale-sail.io',
    repoUrl: 'https://github.com',
  },
  {
    id: '2',
    title: 'Enterprise Migration',
    tagline: 'Legacy to Modern Angular',
    heroImage:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
    challenge: 'Migrating a massive monolithic AngularJS/Angular 5 app to modern standards.',
    solution:
      'Implemented incremental migration strategies, NX monorepo, and Zoneless architecture.',
    results: ['Reduced build time by 60%', 'Improved runtime perf by 40%'],
    techStack: ['Angular', 'Nx', 'Micro Frontends'],
  },
  {
    id: '3',
    title: 'Modern Enterprise Admin Dashboard',
    tagline: 'High-Performance Real-Time Analytics',
    heroImage:
      'https://images.unsplash.com/photo-1543286386-713df548e9cc?auto=format&fit=crop&q=80&w=2670',
    challenge:
      'Developed as an advanced architectural proof-of-concept, this project tackles the common pitfalls of enterprise dashboards: "spaghetti code," slow rendering of real-time data, and brittle testing environments. The goal was to engineer a production-grade reference architecture from scratch, proving that complex real-time analytics can be both lightning fast and maintainable without legacy dependencies.',
    solution:
      'I architected a "bleeding edge" Single Page Application (SPA) using Angular 21 and Signals to decouple state management from the rendering cycle. I implemented a utility-first design system with Tailwind CSS 4 to manage high-density data layouts and replaced standard testing tools with Vitest for sub-second feedback loops. The project serves as a comprehensive "Frontend Developer Handbook" for modern, strict-mode application development.',
    technicalApproach:
      'The architecture follows a strictly typed, feature-based modular structure using Angular 21 Standalone Components. We employed a hybrid state management strategy: Angular Signals for synchronous, fine-grained UI state (like filters and toggles) to ensure instant feedback, and RxJS for complex asynchronous data orchestration (WebSockets and API streams). This "Zoneless-ready" approach allows for sub-second updates without triggering global change detection cycles. Testing is handled exclusively via Vitest in JSDOM, providing instant feedback loops.',
    results: [
      'Performance: Achieved 98/100 Lighthouse score & 60fps chart interactions',
      'Efficiency: Instant test execution via Vitest (vs legacy Karma setups)',
      'Quality: Zero-compromise strict typing and automated CI gates',
    ],
    techStack: [
      'Angular 21 & Signals',
      'TypeScript 5.9',
      'Tailwind CSS 4',
      'Vitest (JSDOM)',
      'Chart.js (ng2-charts)',
      'Lucide Icons (Tree-shaken)',
    ],
  },
  {
    id: '4',
    title: 'QuickCart E-Commerce',
    tagline: 'Next-Gen Angular E-Commerce Architecture',
    heroImage:
      'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=2670',
    challenge:
      'In the landscape of enterprise web development, e-commerce applications typically face three distinct architectural bottlenecks: Rendering Performance (traditional change detection causing UI "jank" on mobile), Boilerplate & Bundle Size (heavy UI libraries inflating initial load), and State Synchronization (complex RxJS streams prone to memory leaks).',
    solution:
      'Engineered a "New Reality" Angular proof-of-concept focused on five pillars: 1) Signal-Driven State to decouple data from the digest cycle; 2) Performance-First OnPush Change Detection as a firewall for the rendering engine; 3) Zero-Boilerplate Standalone Architecture using Functional Dependency Injection; 4) Native Control Flow for optimized bundle size; and 5) A Utility-First mobile-first responsive layout using Tailwind CSS with full WCAG 2.1 compliance.',
    technicalApproach:
      'This project demonstrates a "Zero-Boilerplate" architecture. By abandoning NgModules for Standalone Components and functional Dependency Injection, we reduced the concept count significantly. The core technical differentiator is the "Signal-First" data flow: the entire application state is held in signals, which drive the UI directly. This, combined with explicit OnPush change detection, acts as a firewall preventing unnecessary re-renders. Layout stability is enforced via Tailwind utility classes that reserve space for images and dynamic content, eliminating Cumulative Layout Shift (CLS).',
    results: [
      'Optimized Main Thread (Near-zero layout thrashing)',
      'Minimized Payload (Native Web Standards)',
      'Explicit Developer Experience (Self-documenting)',
    ],
    techStack: [
      'Angular',
      'Signals',
      'Standalone Components',
      'Tailwind CSS',
      'Angular Router',
      'WCAG 2.1',
    ],
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Mastering Angular Signals',
    excerpt: 'A deep dive into the new reactivity primitive in Angular.',
    date: '2025-10-15',
    slug: 'mastering-angular-signals',
    content: `
      <p>Signals are the cornerstone of modern Angular reactivity...</p>
      <h2>Why Signals?</h2>
      <p>They provide fine-grained reactivity without the overhead of Zone.js...</p>
    `,
    imageUrl:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2669&auto=format&fit=crop',
    category: 'Architecture',
  },
  {
    id: '2',
    title: 'React vs Angular in 2026',
    excerpt: 'Comparing the giants for enterprise development.',
    date: '2025-11-20',
    slug: 'react-vs-angular-2026',
    content: `
      <p>The debate continues, but the gap is narrowing...</p>
    `,
    imageUrl:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2670&auto=format&fit=crop',
    category: 'Frameworks',
  },
];
