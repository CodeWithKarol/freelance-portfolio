import { Component, inject, ChangeDetectionStrategy, computed } from '@angular/core';
import { PortfolioStore } from '../../../../core/portfolio/portfolio-store';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  template: `
    <section id="skills" class="py-20 bg-transparent">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2
            class="text-base text-blue-600 dark:text-blue-500 font-semibold tracking-wide uppercase"
          >
            Expertise
          </h2>
          <p
            class="mt-2 text-3xl leading-8 font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
          >
            Skills & Competencies
          </p>
          <p class="mt-4 max-w-2xl text-xl text-slate-600 dark:text-slate-400 mx-auto">
            A comprehensive skillset combining technical expertise with professional soft skills.
          </p>
        </div>

        <!-- Technical Skills -->
        <div class="mb-16">
          <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Technical Arsenal
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            @for (skill of technicalSkills(); track skill.name) {
            <div
              class="bg-white dark:bg-slate-900 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-200 dark:border-slate-800 p-6 group relative overflow-hidden"
            >
              <div class="flex items-center justify-between mb-4">
                <span
                  class="text-xs font-semibold px-2 py-1 rounded bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 uppercase tracking-wider"
                >
                  {{ skill.category }}
                </span>
                <span class="text-xs text-slate-500 dark:text-slate-400 font-mono"
                  >{{ skill.years }}+ yr</span
                >
              </div>
              <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-3">
                {{ skill.name }}
              </h3>
              <div class="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 mb-3">
                <div
                  class="bg-blue-600 dark:bg-blue-500 h-1.5 rounded-full"
                  [style.width]="
                    skill.proficiency === 'Expert'
                      ? '95%'
                      : skill.proficiency === 'Advanced'
                      ? '80%'
                      : '60%'
                  "
                ></div>
              </div>
              <p
                class="text-xs text-slate-500 dark:text-slate-500 uppercase tracking-wide font-medium"
              >
                {{ skill.proficiency }}
              </p>

              <!-- Tooltip simulation -->
              <div
                class="absolute inset-0 bg-slate-900/95 text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-center backdrop-blur-sm"
              >
                <p class="text-sm font-medium leading-relaxed">
                  Used in production for {{ skill.years }}+ years across multiple high-scale apps.
                </p>
              </div>
            </div>
            }
          </div>
        </div>

        <!-- Soft Skills -->
        <div>
          <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Professional Soft Skills
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            @for (skill of softSkills(); track skill.name) {
            <div
              class="bg-white dark:bg-slate-900 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-200 dark:border-slate-800 p-6 group relative overflow-hidden"
            >
              <div class="flex items-center justify-between mb-4">
                <span
                  class="text-xs font-semibold px-2 py-1 rounded bg-indigo-50 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300 uppercase tracking-wider"
                >
                  {{ skill.category }}
                </span>
                <span class="text-xs text-slate-500 dark:text-slate-400 font-mono"
                  >{{ skill.years }}+ yr</span
                >
              </div>
              <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-3">
                {{ skill.name }}
              </h3>
              <div class="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 mb-3">
                <div
                  class="bg-indigo-600 dark:bg-indigo-500 h-1.5 rounded-full"
                  [style.width]="
                    skill.proficiency === 'Expert'
                      ? '95%'
                      : skill.proficiency === 'Advanced'
                      ? '80%'
                      : '60%'
                  "
                ></div>
              </div>
              <p
                class="text-xs text-slate-500 dark:text-slate-500 uppercase tracking-wide font-medium"
              >
                {{ skill.proficiency }}
              </p>

              <!-- Tooltip simulation -->
              <div
                class="absolute inset-0 bg-indigo-900/95 text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-center backdrop-blur-sm"
              >
                <p class="text-sm font-medium leading-relaxed">
                  Developed through {{ skill.years }}+ years of collaborative team environments.
                </p>
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
