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
      title: 'Fractional Tech Lead & Angular Expert | Karol Modelski',
      description:
        'Fractional Tech Lead & Senior Angular Developer specialized in retiring technical debt, Zoneless Angular migration, and high-performance enterprise architecture.',
      slug: '',
      type: 'website',
      keywords: [
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
        'Zoneless Angular',
        'RxJS Expert',
        'Angular Signals',
        'Nx Monorepo',
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
          description: 'Senior Frontend Developer & Legacy Modernization',
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
            jobTitle: 'Senior Frontend Developer',
            description:
              'Senior Frontend Developer specialized in modernizing legacy Angular applications.',
            image: 'https://www.karol-modelski.scale-sail.io/images/karol-modelski.jpg',
            url: 'https://www.karol-modelski.scale-sail.io',
            sameAs: [
              'https://www.linkedin.com/in/karol-modelski',
              'https://github.com/CodeWithKarol',
              'https://karol-modelski.medium.com/',
            ],
            knowsAbout: [
              'Angular',
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
              name: 'How is this different from your agency?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Scale Sail Agency handles large-scale migrations and long-term contracts. Here, I personally handle smaller, high-impact tasks (Micro-Engagements) that need expert attention but not a full team.',
              },
            },
            {
              '@type': 'Question',
              name: 'What is your availability?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'I dedicate 10-15 hours/week to freelance gigs. Most "Micro-Engagements" are delivered within 3-5 business days.',
              },
            },
            {
              '@type': 'Question',
              name: 'Do you work hourly or fixed price?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'I prefer fixed-price for defined scopes (like Component Builds or Audits). For open-ended consulting, I bill hourly.',
              },
            },
          ],
        },
        {
          '@type': 'Service',
          '@id': 'https://www.karol-modelski.scale-sail.io/#service-audit',
          name: 'Code Review Deep Dive',
          description:
            'Stop merging technical debt. I review a critical PR to catch security holes, performance killers, and logic bombs.',
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
      ],
    });
  }
}
