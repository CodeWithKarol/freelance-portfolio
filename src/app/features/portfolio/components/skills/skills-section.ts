import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { PortfolioStore } from '../../../../core/portfolio/portfolio-store';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  template: `
    <section id="skills" class="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2
            class="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase"
          >
            Expertise
          </h2>
          <p
            class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
          >
            Technical Arsenal
          </p>
          <p class="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 mx-auto">
            A comprehensive stack honed over 6+ years of enterprise and rapid startup development.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          @for (skill of skills(); track skill.name) {
          <div
            class="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-600 group relative"
          >
            <div class="flex items-center justify-between mb-4">
              <span
                class="text-sm font-medium px-2 py-1 rounded bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
              >
                {{ skill.category }}
              </span>
              <span class="text-xs text-gray-500 dark:text-gray-400">{{ skill.years }}+ years</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ skill.name }}</h3>
            <div class="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5 mb-2">
              <div
                class="bg-indigo-600 h-2.5 rounded-full"
                [style.width]="
                  skill.proficiency === 'Expert'
                    ? '95%'
                    : skill.proficiency === 'Advanced'
                    ? '80%'
                    : '60%'
                "
              ></div>
            </div>
            <p class="text-sm text-gray-500 dark:text-gray-300">{{ skill.proficiency }}</p>

            <!-- Tooltip simulation -->
            <div
              class="absolute inset-0 bg-indigo-600/90 text-white p-6 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-center"
            >
              <p class="font-medium">
                Used in production for {{ skill.years }}+ years across multiple high-scale apps.
              </p>
            </div>
          </div>
          }
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsSection {
  private portfolioStore = inject(PortfolioStore);
  skills = this.portfolioStore.skills;
}
