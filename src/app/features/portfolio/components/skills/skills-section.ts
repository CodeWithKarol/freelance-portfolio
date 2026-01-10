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
} from 'lucide-angular';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <section
      id="skills"
      class="py-24 sm:py-32 relative overflow-hidden bg-slate-50 dark:bg-slate-950"
    >
      <!-- Background Decorative Elements -->
      <div
        class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-primary-100),white)] dark:bg-[radial-gradient(45rem_50rem_at_top,var(--color-primary-950),theme(colors.slate.950))] opacity-20"
      ></div>
      <div
        class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white/40 dark:bg-slate-900/40 shadow-xl shadow-primary-600/10 ring-1 ring-primary-50 dark:ring-primary-900 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"
      ></div>

      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <!-- Header -->
        <div class="mx-auto max-w-2xl text-center mb-20">
          <h2 class="text-base font-semibold leading-7 text-primary-600 dark:text-primary-400">
            Technical Expertise
          </h2>
          <p
            class="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
          >
            Battle-Tested Tech Stack
          </p>
          <p class="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            A comprehensive toolset refined over years of building enterprise-scale applications. I
            choose specific technologies for their ability to deliver scalability, maintainability,
            and performance.
          </p>
        </div>

        <!-- Core Stack - Highlighted Row -->
        <div class="mb-20">
          <div class="text-center mb-8">
            <span
              class="inline-flex items-center rounded-full bg-primary-50 dark:bg-primary-950/30 px-3 py-1 text-sm font-medium text-primary-700 dark:text-primary-300 ring-1 ring-inset ring-primary-700/10"
            >
              Daily Drivers
            </span>
          </div>

          <div
            class="mx-auto grid max-w-lg grid-cols-1 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-2 lg:mx-auto lg:max-w-none lg:grid-cols-3"
          >
            @for(tech of coreStack(); track tech.name) {
            <div
              class="relative group h-full bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm ring-1 ring-slate-900/5 dark:ring-white/10 hover:shadow-md hover:ring-primary-500/20 transition-all duration-300"
            >
              <div class="flex flex-col items-center gap-3">
                <!-- Icon Placeholder -->
                <div
                  class="h-12 w-12 flex items-center justify-center rounded-lg bg-slate-50 dark:bg-slate-800 text-primary-600 dark:text-primary-400 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/20 transition-colors"
                >
                  <lucide-icon [img]="getCategoryIcon(tech.category)" class="w-7 h-7"></lucide-icon>
                </div>
                <div class="text-center">
                  <h3 class="font-semibold text-slate-900 dark:text-white">{{ tech.name }}</h3>
                  <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {{ tech.years }}+ years
                  </p>
                </div>
              </div>
            </div>
            }
          </div>
        </div>

        <!-- Detailed Tech Grid (Bento Style) -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          @for (group of groupedTechnicalSkills(); track group.category) {
          <div
            class="flex flex-col bg-white dark:bg-slate-900/50 rounded-2xl p-8 ring-1 ring-slate-900/5 dark:ring-white/10 hover:ring-primary-600/20 transition-all"
          >
            <div class="flex items-center gap-3 mb-6">
              <div
                class="p-2 rounded-lg bg-primary-600/10 dark:bg-primary-400/10 text-primary-600 dark:text-primary-400"
              >
                <lucide-icon [img]="getCategoryIcon(group.category)" class="h-6 w-6"></lucide-icon>
              </div>
              <h3 class="text-lg font-semibold text-slate-900 dark:text-white">
                {{ group.category }}
              </h3>
            </div>

            <div class="flex flex-wrap gap-2">
              @for (skill of group.skills; track skill.name) {
              <span
                class="inline-flex items-center rounded-md bg-slate-50 dark:bg-slate-800 px-2 py-1 text-xs font-medium text-slate-700 dark:text-slate-300 ring-1 ring-inset ring-slate-600/10 dark:ring-slate-700/30"
              >
                {{ skill.name }}
                @if(skill.proficiency === 'Expert') {
                <span class="ml-1.5 h-1.5 w-1.5 rounded-full bg-green-500"></span>
                }
              </span>
              }
            </div>
          </div>
          }
        </div>

        <!-- Soft Skills / Leadership Feature -->
        <div
          class="relative isolate overflow-hidden bg-slate-900 dark:bg-slate-900 py-16 sm:py-24 lg:py-32 rounded-3xl"
        >
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div
              class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2"
            >
              <div class="max-w-xl lg:max-w-lg">
                <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Leadership & Strategy
                </h2>
                <p class="mt-4 text-lg leading-8 text-slate-300">
                  Beyond code, I specialize in building high-performing engineering cultures. I
                  bridge the gap between business requirements and technical implementation.
                </p>
                <ul
                  class="mt-10 grid grid-cols-1 gap-8 text-base leading-7 text-slate-300 sm:grid-cols-2"
                >
                  @for (skill of softSkills(); track skill.name) {
                  <li class="relative pl-9">
                    <span class="font-semibold text-white">
                      <lucide-icon
                        [img]="Check"
                        class="absolute left-1 top-1 h-5 w-5 text-primary-500"
                      ></lucide-icon>
                      {{ skill.name }}
                    </span>
                  </li>
                  }
                </ul>
              </div>
              <div class="relative">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                  alt="Team collaboration"
                  class="bg-slate-50/5 aspect-[7/5] w-full rounded-2xl object-cover shadow-2xl ring-1 ring-white/10"
                />
                <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-slate-900/10"></div>
              </div>
            </div>
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
      .filter(
        (s) => ['Core Stack', 'Architecture'].includes(s.category) && s.proficiency === 'Expert'
      )
      .slice(0, 8)
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

  readonly Check = Check;

  private categoryIcons: Record<string, any> = {
    'Core Stack': Terminal,
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
