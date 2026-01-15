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
  Plus,
  Minus,
} from 'lucide-angular';
import { SectionHeaderComponent } from '../../../../shared/ui/section-header/section-header.component';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, SectionHeaderComponent],
  template: `
    <section id="skills" class="py-24 sm:py-32 bg-white dark:bg-slate-950">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <!-- Section Header -->
        <div class="mx-auto max-w-2xl text-center mb-16 sm:mb-20">
          <app-section-header
            preTitle="Technical Proficiency"
            title="Engineering for Scale & Performance"
            description="This is the stack I use to modernize frontends, improve Core Web Vitals, and keep large codebases maintainable under real-world delivery pressure."
          />
        </div>

        <!-- Core Stack (Featured) -->
        <div class="mx-auto max-w-7xl mb-20">
          <h3
            class="text-sm font-semibold leading-6 text-slate-500 dark:text-slate-400 mb-6 uppercase tracking-wider text-center sm:text-left"
          >
            Primary Stack
          </h3>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            @for(tech of coreStack(); track tech.name) {
            <div
              class="relative flex items-center space-x-3 rounded-lg border border-slate-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-slate-400 dark:bg-slate-900 dark:border-slate-800 dark:hover:border-slate-700 transition-colors"
            >
              <div class="flex-shrink-0">
                <div
                  class="h-10 w-10 flex items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400"
                >
                  <lucide-icon [img]="getCategoryIcon(tech.category)" class="h-6 w-6"></lucide-icon>
                </div>
              </div>
              <div class="min-w-0 flex-1">
                <span class="absolute inset-0" aria-hidden="true"></span>
                <p class="text-sm font-medium text-slate-900 dark:text-white">{{ tech.name }}</p>
                <p class="truncate text-xs text-slate-500 dark:text-slate-400">
                  {{ tech.years }}+ years exp.
                </p>
              </div>
              @if(tech.proficiency === 'Expert') {
              <span
                class="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 dark:bg-green-900/30 dark:text-green-400"
                >Expert</span
              >
              }
            </div>
            }
          </div>
        </div>

        <!-- Secondary Stack -->
        <div class="mx-auto max-w-7xl mb-20">
          <h3
            class="text-sm font-semibold leading-6 text-slate-500 dark:text-slate-400 mb-6 uppercase tracking-wider text-center sm:text-left"
          >
            Additional Tools
          </h3>
          <div class="flex flex-wrap justify-center sm:justify-start gap-2">
            @for (tech of secondaryStack(); track tech.name) {
            <span
              class="inline-flex items-center rounded-full bg-slate-50 dark:bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 ring-1 ring-inset ring-slate-200 dark:ring-slate-800"
            >
              {{ tech.name }}
            </span>
            }
          </div>
        </div>

        <!-- Expandable Detailed Skills (Accordion) -->
        <div class="mx-auto max-w-3xl mb-24">
          <h3
            class="text-sm font-semibold leading-6 text-slate-500 dark:text-slate-400 mb-6 uppercase tracking-wider"
          >
            Detailed Expertise
          </h3>
          <div
            class="divide-y divide-slate-200 dark:divide-slate-800 border-t border-b border-slate-200 dark:border-slate-800"
          >
            @for (group of groupedTechnicalSkills(); track group.category) {
            <div class="py-4">
              <button
                (click)="toggleCategory(group.category)"
                class="flex w-full items-center justify-between py-2 text-left text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors focus:outline-none group"
              >
                <span class="text-base font-semibold flex items-center gap-3">
                  <lucide-icon
                    [img]="getCategoryIcon(group.category)"
                    class="h-5 w-5 text-slate-400 group-hover:text-indigo-500 transition-colors"
                  ></lucide-icon>
                  {{ group.category }}
                </span>
                <span class="ml-6 flex items-center">
                  @if(isCategoryOpen(group.category)) {
                  <lucide-icon
                    [img]="Minus"
                    class="h-5 w-5 text-indigo-600 dark:text-indigo-400"
                  ></lucide-icon>
                  } @else {
                  <lucide-icon [img]="Plus" class="h-5 w-5 text-slate-400"></lucide-icon>
                  }
                </span>
              </button>
              @if (isCategoryOpen(group.category)) {
              <div class="mt-4 pb-2 animate-in slide-in-from-top-2 fade-in duration-200">
                <div class="flex flex-wrap gap-2">
                  @for (skill of group.skills; track skill.name) {
                  <span
                    class="inline-flex items-center rounded-md bg-slate-50 dark:bg-slate-800 px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 ring-1 ring-inset ring-slate-600/10 dark:ring-slate-700/30"
                  >
                    {{ skill.name }}
                    @if(skill.proficiency === 'Expert') {
                    <div
                      class="ml-2 h-1.5 w-1.5 rounded-full bg-green-500 ring-2 ring-white dark:ring-slate-900"
                    ></div>
                    }
                  </span>
                  }
                </div>
              </div>
              }
            </div>
            }
          </div>
        </div>

        <!-- Leadership / Soft Skills (Feature Section) -->
        <div
          class="overflow-hidden bg-slate-50 dark:bg-slate-900 rounded-3xl lg:grid lg:grid-cols-2"
        >
          <div class="px-6 pb-12 pt-10 sm:px-16 sm:pt-16 lg:py-16 lg:pr-8 xl:px-20 xl:py-20">
            <div class="lg:self-center">
              <h2
                class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
              >
                <span class="block">More than just code.</span>
                <span class="block text-indigo-600 dark:text-indigo-400">Tech Leadership.</span>
              </h2>
              <p class="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
                Software is built by people. I foster environments where technical excellence meets
                product vision.
              </p>
              <dl class="mt-8 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 sm:gap-y-6">
                @for (skill of softSkills(); track skill.name) {
                <div class="flex items-start gap-3">
                  <lucide-icon
                    [img]="Check"
                    class="h-5 w-5 flex-none text-indigo-600 dark:text-indigo-400"
                  ></lucide-icon>
                  <dt class="font-semibold text-slate-900 dark:text-white text-sm leading-5">
                    {{ skill.name }}
                  </dt>
                </div>
                }
              </dl>
            </div>
          </div>
          <div class="relative min-h-[300px] w-full lg:h-full">
            <img
              class="absolute inset-0 h-full w-full bg-slate-50 object-cover object-center"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80"
              alt="Team collaboration"
            />
          </div>
        </div>
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
      .filter((s) => s.proficiency === 'Expert' && s.category !== 'Soft Skills')
      .sort((a, b) => b.years - a.years)
      .slice(0, 8)
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
          !s.name.includes('Native')
      )
      .sort((a, b) => b.years - a.years)
      .slice(0, 10)
  );

  technicalSkills = computed(() =>
    this.skills().filter((skill) => !['Soft Skills', 'Core Stack'].includes(skill.category))
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
  readonly Plus = Plus;
  readonly Minus = Minus;

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
