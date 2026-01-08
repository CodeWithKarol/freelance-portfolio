import { CaseStudy, BlogPost } from './portfolio.model';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    title: 'ScaleSail.io',
    tagline: 'High-Performance SaaS Templates',
    heroImage: 'assets/images/scalesail.png',
    challenge:
      'Founders need high-converting, SEO-optimized landing pages without technical debt.',
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
    heroImage: 'assets/images/enterprise.png',
    challenge: 'Migrating a massive monolithic AngularJS/Angular 5 app to modern standards.',
    solution:
      'Implemented incremental migration strategies, NX monorepo, and Zoneless architecture.',
    results: ['Reduced build time by 60%', 'Improved runtime perf by 40%'],
    techStack: ['Angular', 'Nx', 'Micro Frontends'],
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
    imageUrl: 'assets/images/blog1.jpg',
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
    imageUrl: 'assets/images/blog2.jpg',
  },
];
