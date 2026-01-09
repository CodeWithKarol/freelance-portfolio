import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AboutSection } from '../../components/about/about-section';
import { ServicesSection } from '../../components/services/services-section';
import { ExperienceSection } from '../../components/experience/experience-section';
import { SkillsSection } from '../../components/skills/skills-section';
import { CaseStudiesSection } from '../../components/case-studies/case-studies-section';
import { ContactSection } from '../../components/contact/contact-section';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    AboutSection,
    ServicesSection,
    ExperienceSection,
    SkillsSection,
    CaseStudiesSection,
    ContactSection,
  ],
  template: `
    <app-about-section />
    <app-services-section />
    <app-experience-section />
    <app-skills-section />
    <app-case-studies-section />
    <app-contact-section />
  `,

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {}
