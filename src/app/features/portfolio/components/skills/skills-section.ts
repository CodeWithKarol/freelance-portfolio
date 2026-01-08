import { Component, inject, ChangeDetectionStrategy, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioStore } from '../../../../core/portfolio/portfolio-store';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="py-24 sm:py-32 bg-slate-50 dark:bg-slate-900/50">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center mb-16">
          <h2 class="text-base font-semibold leading-7 text-blue-600 dark:text-blue-500">
            Expertise
          </h2>
          <p
            class="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
          >
            Skills & Competencies
          </p>
          <p class="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            A battle-tested arsenal of technologies and methodologies refined over years of
            production leadership.
          </p>
        </div>

        <!-- Technical Skills Grid -->
        <div class="mb-20">
          <div class="flex items-center gap-4 mb-8">
            <div class="p-2 bg-blue-600/10 rounded-lg">
              <svg
                class="w-6 h-6 text-blue-600 dark:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Technical Arsenal
            </h3>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            @for (skill of technicalSkills(); track skill.name) {
            <div
              class="group relative flex flex-col p-6 bg-white dark:bg-slate-900 rounded-2xl ring-1 ring-slate-200 dark:ring-slate-800 shadow-sm hover:ring-2 hover:ring-blue-600 dark:hover:ring-blue-500 transition-all duration-300 hover:-translate-y-1"
            >
              <div class="flex items-center justify-between gap-4 mb-4">
                <div class="flex items-center gap-3">
                  <!-- Category Dot -->
                  <span class="relative flex h-2.5 w-2.5">
                    <span
                      class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"
                      [class.bg-purple-400]="skill.category === 'Backend'"
                      [class.bg-emerald-400]="skill.category === 'Tools'"
                    ></span>
                    <span
                      class="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"
                      [class.bg-purple-500]="skill.category === 'Backend'"
                      [class.bg-emerald-500]="skill.category === 'Tools'"
                    ></span>
                  </span>
                  <span
                    class="text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider"
                  >
                    {{ skill.category }}
                  </span>
                </div>
                <span
                  class="inline-flex items-center rounded-md bg-slate-50 dark:bg-slate-800 px-2 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 ring-1 ring-inset ring-slate-500/10"
                >
                  {{ skill.years }}+ years
                </span>
              </div>

              <h4
                class="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
              >
                {{ skill.name }}
              </h4>

              <div
                class="mt-auto pt-4 flex items-center justify-between border-t border-slate-100 dark:border-slate-800"
              >
                <span class="text-sm text-slate-500 dark:text-slate-300">Proficiency</span>
                <span
                  class="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-1"
                >
                  {{ skill.proficiency }}
                  @if(skill.proficiency === 'Expert') {
                  <svg class="w-4 h-4 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  }
                </span>
              </div>
            </div>
            }
          </div>
        </div>

        <!-- Soft Skills Grid -->
        <div>
          <div class="flex items-center gap-4 mb-8">
            <div class="p-2 bg-indigo-600/10 rounded-lg">
              <svg
                class="w-6 h-6 text-indigo-600 dark:text-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 5.472m0 0a9.09 9.09 0 0 0-3.279 3.298m.098-4.67.038-.665a6 6 0 0 1 10.64-1.105"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Professional Soft Skills
            </h3>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            @for (skill of softSkills(); track skill.name) {
            <div
              class="group relative flex flex-col p-6 bg-white dark:bg-slate-900 rounded-2xl ring-1 ring-slate-200 dark:ring-slate-800 shadow-sm hover:ring-2 hover:ring-indigo-600 dark:hover:ring-indigo-500 transition-all duration-300 hover:-translate-y-1"
            >
              <h4
                class="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
              >
                {{ skill.name }}
              </h4>
              <p class="text-sm text-slate-500 dark:text-slate-300 mb-4 line-clamp-2">
                demonstrated in high-velocity agile environments.
              </p>
              <div class="mt-auto flex items-center gap-2">
                <span
                  class="inline-flex items-center rounded-full bg-indigo-50 dark:bg-indigo-950/30 px-2 py-1 text-xs font-medium text-indigo-700 dark:text-indigo-300 ring-1 ring-inset ring-indigo-700/10"
                >
                  {{ skill.category }}
                </span>
              </div>
            </div>
            }
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

  technicalSkills = computed(() =>
    this.skills().filter((skill) => skill.category !== 'Soft Skills')
  );

  softSkills = computed(() => this.skills().filter((skill) => skill.category === 'Soft Skills'));
}
