import { Component, ChangeDetectionStrategy, inject, OnInit } from '@angular/core';
import { AboutSection } from '../../components/about/about-section';
import { ServicesSection } from '../../components/services/services-section';
import { ExperienceSection } from '../../components/experience/experience-section';
import { SkillsSection } from '../../components/skills/skills-section';
import { ContactSection } from '../../components/contact/contact-section';
import { FaqSection } from '../../components/faq/faq-section';
import { SeoService } from '../../../../core/seo/seo.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    AboutSection,
    ServicesSection,
    ExperienceSection,
    SkillsSection,
    ContactSection,
    FaqSection,
  ],
  template: `
    <app-about-section />
    <app-services-section />
    <app-experience-section />
    <app-skills-section />
    <app-faq-section />
    <app-contact-section />
  `,

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage implements OnInit {
  private seo = inject(SeoService);

  ngOnInit() {
    this.seo.updateSeo({
      title: 'Senior Frontend Developer & Legacy Modernization',
      description:
        'Senior Frontend Developer specialized in modernizing legacy Angular applications. I help teams fix performance bottlenecks, refactor legacy code, and establish scalable architecture.',
      url: '/',
      keywords: ['Angular', 'Frontend', 'Legacy Migration', 'Performance', 'Consultant'],
    });

    this.seo.setJsonLd({
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
          },
        },
        {
          '@type': 'FAQPage',
          '@id': 'https://www.karol-modelski.scale-sail.io/#faq',
          isPartOf: {
            '@id': 'https://www.karol-modelski.scale-sail.io/#website',
          },
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What services does Karol Modelski provide?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'I provide enterprise modernization, SaaS product engineering, and architecture audits. Whether you need to rescue a legacy codebase or ship complex new features, I deliver performance-first solutions and scalable architecture.',
              },
            },
            {
              '@type': 'Question',
              name: 'What is your primary tech stack?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'My primary stack is Angular (v14-v21), TypeScript, Nx, and RxJS/Signals. I focus on performance-first architecture, strictly typed reactive forms, and "Zoneless" applications.',
              },
            },
            {
              '@type': 'Question',
              name: 'Do you work with legacy codebases?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, retiring legacy technical debt is my specialty. I manage complex migrations from AngularJS or older Angular versions to modern, signal-based architectures.',
              },
            },
            {
              '@type': 'Question',
              name: 'Do you offer technical leadership?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. I act as a Fractional Tech Lead to elevate team capabilities. I provide code reviews, set up engineering best practices (CI/CD, Testing), and mentor developers on advanced architectural patterns.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can you help ship new features?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Absolutely. I execute end-to-end feature delivery—from architectural planning to UI implementation. I prioritize complex state management, API integration, and ensuring new capabilities launch smoothly without regressions.',
              },
            },
          ],
        },
      ],
    });
  }
}
