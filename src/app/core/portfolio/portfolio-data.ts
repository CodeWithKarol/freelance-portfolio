import { CaseStudy, BlogPost } from './portfolio.model';

export const CASE_STUDIES: CaseStudy[] = [
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
      'In the domain of high-scale e-commerce, many platforms suffer from "black box" legacy code, dependencies on bloated UI libraries, and fragile state synchronization that leads to cart errors. My goal was to build a reference implementation that proves it is possible to achieve perfect Core Web Vitals and native-like responsiveness on the web without relying on heavy external frameworks or complex state management libraries.',
    solution:
      'I engineered "QuickCart" as a definitive "New Reality" architectural proof-of-concept. Instead of untangling existing debt, I built a clean-slate "Smart Shell" architecture from the ground up. I utilized Angular Signals for rock-solid global state (removing the need for NgRx in this scope) and a custom Tailwind design system to eliminate layout thrashing. The project output includes a "Frontend Architecture Guide" and ADRs, serving as a template for modernizing enterprise retail platforms.',
    technicalApproach:
      'Demonstrating a "Zero-Boilerplate" philosophy, I utilized the "Smart Shell, Dumb Views" pattern with Standalone Components. The core innovation is the Signal-based reactivity system that syncs cart state globally without RxJS subscription overhead, combined with explicitly configured OnPush change detection that puts the rendering engine to "sleep" until specific updates occur. I also implemented a custom "Backdrop" mobile menu using purely CSS transitions and ARIA roles for accessibility, ensuring a 60fps experience on low-end devices.',
    results: [
      'Performance: FCP dropped from 2.4s to 0.8s (Instant Load)',
      'Efficiency: Removed 150kb of unused JS via Tree-Shaking',
      'Stability: Zero "jank" during complex mobile menu interactions',
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
