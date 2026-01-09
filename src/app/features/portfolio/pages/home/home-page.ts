import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AboutSection } from '../../components/about/about-section';
import { ServicesSection } from '../../components/services/services-section';
import { ExperienceSection } from '../../components/experience/experience-section';
import { SkillsSection } from '../../components/skills/skills-section';
import { ContactSection } from '../../components/contact/contact-section';

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
export class HomePage {}
