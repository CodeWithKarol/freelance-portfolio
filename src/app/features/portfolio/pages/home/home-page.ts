import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AboutSection } from '../../components/about/about-section';
import { ServicesSection } from '../../components/services/services-section';
import { ExperienceSection } from '../../components/experience/experience-section';
import { SkillsSection } from '../../components/skills/skills-section';
import { TechStackSection } from '../../components/tech-stack/tech-stack-section';
import { CaseStudiesSection } from '../../components/case-studies/case-studies-section';
import { TestimonialsSection } from '../../components/testimonials/testimonials-section';
import { ContactSection } from '../../components/contact/contact-section';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    AboutSection,
    ServicesSection,
    ExperienceSection,
    SkillsSection,
    TechStackSection,
    CaseStudiesSection,
    TestimonialsSection,
    ContactSection,
  ],
  template: `
    <app-about-section />

    @defer (on viewport) {
    <app-services-section />
    } @placeholder {
    <div class="h-96 bg-slate-50 dark:bg-slate-900/50 animate-pulse"></div>
    } @defer (on viewport) {
    <app-experience-section />
    } @placeholder {
    <div class="h-96 bg-white dark:bg-slate-950 animate-pulse"></div>
    } @defer (on viewport) {
    <app-skills-section />
    } @placeholder {
    <div class="h-96 bg-gray-50 dark:bg-gray-800 animate-pulse"></div>
    } @defer (on viewport) {
    <app-tech-stack-section />
    } @placeholder {
    <div class="h-48 bg-gray-50 dark:bg-gray-800 animate-pulse"></div>
    } @defer (on viewport) {
    <app-case-studies-section />
    } @placeholder {
    <div class="h-96 bg-white dark:bg-gray-900 animate-pulse"></div>
    } @defer (on viewport) {
    <app-testimonials-section />
    } @placeholder {
    <div class="h-96 bg-indigo-700 animate-pulse"></div>
    } @defer (on viewport) {
    <app-contact-section />
    } @placeholder {
    <div class="h-96 bg-gray-50 dark:bg-gray-800 animate-pulse"></div>
    }
  `,

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {}
