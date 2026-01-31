import { Component, inject, ChangeDetectionStrategy, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioStore } from '../../../../core/portfolio/portfolio-store';
import { Skill } from '../../../../core/portfolio/portfolio.model';
import {
  LucideAngularModule,
  Terminal,
  CodeXml,
  Zap,
  Box,
  Database,
  Palette,
  Wrench,
  Check,
  Smartphone,
} from 'lucide-angular';
import { SectionHeader } from '../../../../shared/ui/section-header/section-header';
import { Card } from '../../../../shared/ui/card/card';
import { Badge } from '../../../../shared/ui/badge/badge';
import { Accordion } from '../../../../shared/ui/accordion/accordion';
import { AccordionItem } from '../../../../shared/ui/accordion/accordion-item';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule,
    SectionHeader,
    Card,
    Badge,
    Accordion,
    AccordionItem,
  ],
  template: `
    <section id="skills" class="section-padding bg-slate-50 dark:bg-slate-950">
      <div class="layout-container">
        <!-- Section Header -->
        <div class="mx-auto max-w-2xl text-center mb-16 sm:mb-20">
          <app-section-header
            subtitle="Technical Proficiency"
            title="Engineering for Scale & Performance"
            description="A comprehensive Frontend toolchain. While Angular is my specialty for enterprise scale, I maintain deep proficiency in React and the broader JavaScript ecosystem to architect the right solution for the problem."
          />
        </div>

        <!-- Core Stack (Featured) -->
        <div class="mx-auto max-w-7xl mb-20">
          <h3
            class="text-small font-semibold mb-6 uppercase tracking-wider text-center sm:text-left"
          >
            Primary Stack
          </h3>
          <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 p-0 list-none">
            @for (tech of coreStack(); track tech.name) {
              <li>
                <app-card
                  variant="default"
                  [interactive]="true"
                  class="h-full flex items-center p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                >
                  <div class="flex-shrink-0 mr-4">
                    <div
                      class="h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary"
                    >
                      <lucide-icon
                        [img]="getCategoryIcon(tech.category)"
                        class="h-6 w-6"
                      ></lucide-icon>
                    </div>
                  </div>
                  <div class="min-w-0 flex-1">
                    <p class="font-bold text-secondary dark:text-white">{{ tech.name }}</p>
                    <p class="truncate text-xs text-secondary/60 dark:text-slate-400">
                      {{ tech.years }}+ years exp.
                    </p>
                  </div>
                  @if (tech.proficiency === 'Expert') {
                    <div class="ml-2">
                      <app-badge variant="soft" color="success">Expert</app-badge>
                    </div>
                  }
                </app-card>
              </li>
            }
          </ul>
        </div>

        <!-- Secondary Stack -->
        <div class="mx-auto max-w-7xl mb-20">
          <h3
            class="text-small font-semibold mb-6 uppercase tracking-wider text-center sm:text-left"
          >
            Additional Tools
          </h3>
          <ul class="flex flex-wrap justify-center sm:justify-start gap-2 p-0 list-none">
            @for (tech of secondaryStack(); track tech.name) {
              <li class="contents">
                <app-badge variant="outline" color="neutral">
                  {{ tech.name }}
                </app-badge>
              </li>
            }
          </ul>
        </div>

        <!-- Expandable Detailed Skills (Accordion) -->
        <div class="mx-auto max-w-3xl mb-24">
          <h3 class="text-small font-semibold mb-6 uppercase tracking-wider">Detailed Expertise</h3>
          <app-accordion>
            @for (group of groupedTechnicalSkills(); track group.category; let i = $index) {
              <app-accordion-item
                [isOpen]="isCategoryOpen(group.category)"
                (toggled)="toggleCategory(group.category)"
              >
                <div header class="contents">
                  <lucide-icon
                    [img]="getCategoryIcon(group.category)"
                    class="h-5 w-5 text-secondary/40 dark:text-slate-500 group-hover:text-primary transition-colors"
                  ></lucide-icon>
                  {{ group.category }}
                </div>

                <div class="flex flex-wrap gap-2">
                  @for (skill of group.skills; track skill.name) {
                    <app-badge
                      variant="soft"
                      color="neutral"
                      class="bg-slate-100 dark:bg-slate-800 text-secondary dark:text-slate-300"
                    >
                      {{ skill.name }}
                      @if (skill.proficiency === 'Expert') {
                        <span
                          class="ml-1.5 inline-block h-1.5 w-1.5 rounded-full bg-success"
                        ></span>
                      }
                    </app-badge>
                  }
                </div>
              </app-accordion-item>
            }
          </app-accordion>
        </div>

        <!-- Leadership / Soft Skills (Feature Section) -->
        <app-card
          variant="default"
          class="block overflow-hidden bg-white dark:bg-slate-900 lg:grid lg:grid-cols-2 border border-slate-200 dark:border-slate-800 p-0"
        >
          <div class="px-6 pb-12 pt-10 sm:px-16 sm:pt-16 lg:py-16 lg:pr-8 xl:px-20 xl:py-20">
            <div class="lg:self-center">
              <h2 class="heading-2 mb-4">
                <span class="block">More than just code.</span>
                <span class="block text-primary">Tech Leadership.</span>
              </h2>
              <p class="text-body mt-4">
                Software is built by people. I foster environments where technical excellence meets
                product vision.
              </p>
              <ul
                class="mt-8 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 sm:gap-y-6 list-none p-0"
              >
                @for (skill of softSkills(); track skill.name) {
                  <li class="flex items-start gap-3">
                    <lucide-icon [img]="Check" class="h-5 w-5 flex-none text-primary"></lucide-icon>
                    <span class="font-semibold text-secondary dark:text-white text-sm leading-5">
                      {{ skill.name }}
                    </span>
                  </li>
                }
              </ul>
            </div>
          </div>
          <div class="relative min-h-[300px] w-full lg:h-full">
            <img
              class="absolute inset-0 h-full w-full bg-slate-50 object-cover object-center"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80"
              alt="Team collaboration"
            />
          </div>
        </app-card>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsSection {
  private portfolioStore = inject(PortfolioStore);
  skills = this.portfolioStore.skills;

  // core stack defined as specific high-impact items
  coreStack = computed(() =>
    this.skills()
      .filter(
        (s) => (s.proficiency === 'Expert' || s.name === 'React') && s.category !== 'Soft Skills',
      )
      .sort((a, b) => {
        // Force Angular then React to appear, generally sort by years/proficiency
        if (a.name === 'Angular') return -1;
        if (b.name === 'Angular') return 1;
        if (a.name === 'React') return -1;
        if (b.name === 'React') return 1;
        return b.years - a.years;
      })
      .slice(0, 8),
  );

  secondaryStack = computed(() =>
    this.skills()
      .filter(
        (s) =>
          s.proficiency !== 'Expert' &&
          (s.icon === 'react' ||
            s.name.includes('React') ||
            s.name.includes('TanStack') ||
            ['Redux', 'Zustand'].includes(s.name)) &&
          !s.name.includes('Native'),
      )
      .sort((a, b) => b.years - a.years)
      .slice(0, 10),
  );

  technicalSkills = computed(() =>
    this.skills().filter((skill) => !['Soft Skills', 'Core Stack'].includes(skill.category)),
  );

  softSkills = computed(() => this.skills().filter((skill) => skill.category === 'Soft Skills'));

  groupedTechnicalSkills = computed(() => {
    const skills = this.technicalSkills();
    const groups: Record<string, Skill[]> = {};

    skills.forEach((skill) => {
      const cat = skill.category;
      if (!groups[cat]) {
        groups[cat] = [];
      }
      groups[cat].push(skill);
    });

    return Object.entries(groups).map(([category, skills]) => ({ category, skills }));
  });

  // Accordion State
  openCategories = signal<Set<string>>(new Set([]));

  toggleCategory(category: string) {
    const current = new Set(this.openCategories());
    if (current.has(category)) {
      current.delete(category);
    } else {
      current.add(category);
    }
    this.openCategories.set(current);
  }

  isCategoryOpen(category: string) {
    return this.openCategories().has(category);
  }

  readonly Check = Check;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private categoryIcons: Record<string, any> = {
    'Core Stack': Terminal,
    Frameworks: Smartphone,
    Languages: CodeXml,
    State: Zap,
    Architecture: Box,
    Backend: Database,
    Styling: Palette,
    Tools: Wrench,
  };

  getCategoryIcon(category: string) {
    return this.categoryIcons[category] || Zap;
  }
}
