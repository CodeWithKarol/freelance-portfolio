import { Component, ChangeDetectionStrategy, inject, OnInit } from '@angular/core';
import { AboutSection } from '../../components/about/about-section';
import { ServicesSection } from '../../components/services/services-section';
import { ExperienceSection } from '../../components/experience/experience-section';
import { SkillsSection } from '../../components/skills/skills-section';
import { ContactSection } from '../../components/contact/contact-section';
import { SeoService } from '../../../../core/seo/seo.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [AboutSection, ServicesSection, ExperienceSection, SkillsSection, ContactSection],
  template: `
    <app-about-section />
    <app-services-section />
    <app-experience-section />
    <app-skills-section />
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
      ],
    });
  }
}
