import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
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
export class HomePage {
  private seo = inject(SeoService);

  constructor() {
    this.seo.updateSeo({
      title: 'Senior Frontend Developer & Legacy Modernization',
      description:
        'Senior Frontend Developer specialized in modernizing legacy Angular applications. I help teams fix performance bottlenecks, refactor legacy code, and establish scalable architecture.',
      url: '/',
      keywords: ['Angular', 'Frontend', 'Legacy Migration', 'Performance', 'Consultant'],
    });

    this.seo.setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Karol Modelski',
      jobTitle: 'Senior Frontend Developer',
      url: 'https://www.karol-modelski.scale-sail.io',
      sameAs: [
        'https://www.linkedin.com/in/karol-modelski',
        'https://github.com/CodeWithKarol',
        'https://karol-modelski.medium.com/',
      ],
    });
  }
}
