import { Component, ChangeDetectionStrategy, inject, OnInit } from '@angular/core';
import { AboutSection } from '../../components/about/about-section';
import { ProjectsSection } from '../../components/projects/projects-section';
import { GigsSection } from '../../components/gigs/gigs-section';
import { ProcessSection } from '../../components/process/process-section';
import { FaqSection } from '../../components/faq/faq-section';
import { ExperienceSection } from '../../components/experience/experience-section';
import { SkillsSection } from '../../components/skills/skills-section';
import { ContactSection } from '../../components/contact/contact-section';
import { SeoService } from '../../../../shared/core/seo/seo.service';

@Component({
  selector: 'app-home-page',
  imports: [
    AboutSection,
    ProjectsSection,
    GigsSection,
    ProcessSection,
    FaqSection,
    ExperienceSection,
    SkillsSection,
    ContactSection,
  ],
  template: `
    <app-about-section />
    <app-gigs-section />
    <app-process-section />
    <app-faq-section />
    <app-projects-section />
    <app-experience-section />
    <app-skills-section />
    <app-contact-section />
  `,

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage implements OnInit {
  private seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.setPageMetadata({
      title: 'Angular Micro-Engagements & Development | Karol Modelski',
      description:
        'Eliminate frontend bottlenecks with fixed-price Angular micro-engagements. Access specialized expertise for Audits, Refactors, and Feature Builds without the hourly overhead.',
      slug: '',
      type: 'website',
      keywords: [
        'Angular 21 Developer',
        'Angular Signals Migration',
        'Zoneless Angular Expert',
        'Nx Monorepo Architect',
        'Angular Performance Audit',
        'Fractional Frontend Lead',
        'Fix Slow Angular App',
        'Angular Developer',
        'Frontend Architect',
        'Legacy Modernization',
        'Angular Migration',
        'Enterprise Angular',
        'Performance Optimization',
        'Technical Debt',
        'RxJS Expert',
        'Tailwind CSS',
      ],
    });

    this.seoService.setBreadcrumbs([{ name: 'Home', path: '/' }]);

    this.seoService.setSchema({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': 'https://www.karol-modelski.scale-sail.io/#website',
          url: 'https://www.karol-modelski.scale-sail.io',
          name: 'Karol Modelski Portfolio',
          alternateName: 'Karol Modelski',
          description: 'Angular Micro-Engagements & Development',
          inLanguage: 'en-US',
        },
        {
          '@type': 'ProfilePage',
          '@id': 'https://www.karol-modelski.scale-sail.io/#profile',
          url: 'https://www.karol-modelski.scale-sail.io',
          isPartOf: {
            '@id': 'https://www.karol-modelski.scale-sail.io/#website',
          },
          dateCreated: '2024-01-01T12:00:00+00:00',
          dateModified: '2026-01-20T12:00:00+00:00',
          mainEntity: {
            '@type': 'Person',
            '@id': 'https://www.karol-modelski.scale-sail.io/#person',
            name: 'Karol Modelski',
            jobTitle: 'Senior Angular Developer',
            description:
              'Senior Angular Developer specialized in modernizing legacy Angular applications.',
            image: 'https://www.karol-modelski.scale-sail.io/images/karol-modelski.jpg',
            url: 'https://www.karol-modelski.scale-sail.io',
            sameAs: [
              'https://www.linkedin.com/in/karol-modelski',
              'https://github.com/CodeWithKarol',
              'https://karol-modelski.medium.com/',
            ],
            knowsAbout: [
              'Angular 21',
              'Angular Signals',
              'Zoneless Architecture',
              'Nx Monorepo',
              'RxJS',
              'TypeScript',
              'Legacy Modernization',
              'Performance Optimization',
            ],
          },
        },
        {
          '@type': 'FAQPage',
          '@id': 'https://www.karol-modelski.scale-sail.io/#faq',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What is a Micro-Engagement?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'A Micro-Engagement is a high-impact, short-term contract focused on a specific outcome (like a performance audit or component build) rather than ongoing hourly work. It allows you to access specialized Angular expertise for critical problems without a long-term hiring commitment.',
              },
            },
            {
              '@type': 'Question',
              name: 'Why choose a Micro-Engagement over a Freelancer?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Freelancers often require onboarding and hourly billing. Micro-Engagements are fixed-price, "surgical strikes" by a Senior Developer to solve a specific problem in days, not weeks.',
              },
            },
            {
              '@type': 'Question',
              name: 'How is this different from your agency?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Scale Sail Agency handles large-scale migrations and long-term contracts. Here, I personally handle smaller, high-impact tasks (Micro-Engagements) that need expert Angular attention but not a full team.',
              },
            },
          ],
        },
        {
          '@type': 'Service',
          '@id': 'https://www.karol-modelski.scale-sail.io/#service-audit',
          name: 'Code Quality Audit',
          description:
            'Merge with confidence. Get a comprehensive review of your most critical Pull Request (max 400 LoC). You receive actionable feedback on maintainability, type safety, and Angular best practices in 24h.',
          provider: {
            '@id': 'https://www.karol-modelski.scale-sail.io/#person',
          },
          offers: {
            '@type': 'Offer',
            price: '79.00',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
          },
        },
        {
          '@type': 'Service',
          '@id': 'https://www.karol-modelski.scale-sail.io/#service-detox',
          name: 'Component Detox',
          description:
            'Turn fragile UI into rock-solid code. Your complex component (< 500 LoC) is refactored into a clean Smart (Data) vs. Dumb (UI) architecture, eliminating bugs and making future updates effortless.',
          provider: {
            '@id': 'https://www.karol-modelski.scale-sail.io/#person',
          },
          offers: {
            '@type': 'Offer',
            price: '149.00',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
          },
        },
        {
          '@type': 'Service',
          '@id': 'https://www.karol-modelski.scale-sail.io/#service-api',
          name: 'API Integration Layer',
          description:
            'Stop writing boilerplate. You get fully type-safe Angular Services and a reactive Signal Store generated directly from your Swagger/Postman specs (up to 5 endpoints), ready to plug into your UI.',
          provider: {
            '@id': 'https://www.karol-modelski.scale-sail.io/#person',
          },
          offers: {
            '@type': 'Offer',
            price: '149.00',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
          },
        },
        {
          '@type': 'Service',
          '@id': 'https://www.karol-modelski.scale-sail.io/#service-feature',
          name: 'Small Feature Build',
          description:
            'Ship a production-ready feature in days. You get a fully integrated, state-managed feature built using your existing UI library (Material/Tailwind), polished and ready for users.',
          provider: {
            '@id': 'https://www.karol-modelski.scale-sail.io/#person',
          },
          offers: {
            '@type': 'Offer',
            price: '299.00',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
          },
        },
        {
          '@type': 'Service',
          '@id': 'https://www.karol-modelski.scale-sail.io/#service-bundle-diet',
          name: 'Bundle Diet Analysis',
          description:
            'Your app is slow because your initial bundle is huge. I’ll tell you exactly what to cut. A PDF report identifying the top 3 largest libraries bloating the main bundle.',
          provider: {
            '@id': 'https://www.karol-modelski.scale-sail.io/#person',
          },
          offers: {
            '@type': 'Offer',
            price: '99.00',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
          },
        },
        {
          '@type': 'Service',
          '@id': 'https://www.karol-modelski.scale-sail.io/#service-zoneless',
          name: 'Zoneless Readiness Check',
          description:
            'Prepare for Angular 21. I’ll identify every blocker preventing you from removing zone.js. List of incompatible 3rd-party libs and ChangeDetectorRef usages.',
          provider: {
            '@id': 'https://www.karol-modelski.scale-sail.io/#person',
          },
          offers: {
            '@type': 'Offer',
            price: '149.00',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
          },
        },
        {
          '@type': 'Service',
          '@id': 'https://www.karol-modelski.scale-sail.io/#service-e2e',
          name: 'Critical Path E2E Test',
          description:
            'Never break checkout again. I\'ll write one rock-solid Cypress/Playwright test covering a single "Happy Path" user journey.',
          provider: {
            '@id': 'https://www.karol-modelski.scale-sail.io/#person',
          },
          offers: {
            '@type': 'Offer',
            price: '199.00',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
          },
        },
      ],
    });
  }
}
