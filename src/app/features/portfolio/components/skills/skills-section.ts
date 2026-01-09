import { Component, inject, ChangeDetectionStrategy, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioStore } from '../../../../core/portfolio/portfolio-store';
import type { Skill } from '../../../../core/portfolio/portfolio.model';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="py-24 sm:py-32 relative overflow-hidden">
      <!-- Background Decorative Elements -->
      <div class="absolute inset-0 -z-10 bg-white dark:bg-slate-950">
        <div
          class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white dark:bg-slate-950 shadow-xl shadow-slate-600/10 ring-1 ring-slate-50 dark:ring-slate-900 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"
        ></div>
      </div>

      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0 mb-16">
          <h2 class="text-base font-semibold leading-7 text-blue-600 dark:text-blue-500">
            Expertise & Capabilities
          </h2>
          <p
            class="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl"
          >
            Full-Stack Mastery
          </p>
          <p class="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            A powerful combination of bank-grade technical skills and the professional leadership
            needed to deliver complex projects successfully.
          </p>
        </div>

        <!-- Technical Skills Grouped Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          @for (group of groupedTechnicalSkills(); track group.category) {
          <div class="flex flex-col relative bg-transparent">
            <!-- Category Header with Icon -->
            <div class="flex items-center gap-4 mb-6">
              <div
                class="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 dark:bg-blue-500/10"
              >
                <!-- Dynamic Icon based on category name -->
                <svg
                  class="h-6 w-6 text-white dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    [attr.d]="getCategoryIcon(group.category)"
                  />
                </svg>
              </div>
              <h3 class="text-lg font-bold leading-8 text-slate-900 dark:text-white">
                {{ group.category }}
              </h3>
            </div>

            <!-- Skills List as modern pill badges -->
            <div class="flex flex-wrap gap-2">
              @for (skill of group.skills; track skill.name) {
              <div
                class="group relative inline-flex items-center rounded-md bg-slate-100 dark:bg-slate-800/60 px-2 py-1 text-xs font-medium text-slate-700 dark:text-slate-300 ring-1 ring-inset ring-slate-600/10 dark:ring-slate-700/30 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-default"
              >
                {{ skill.name }}

                <!-- Tooltip -->
                <div
                  class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-slate-900 text-white text-xs rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-10 pointer-events-none shadow-xl transform translate-y-1 group-hover:translate-y-0"
                >
                  <div class="font-semibold">{{ skill.years }}+ Years Exp</div>
                  <div class="text-slate-300">{{ skill.proficiency }}</div>
                  <div
                    class="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900"
                  ></div>
                </div>
              </div>
              }
            </div>
          </div>
          }
        </div>

        <!-- Soft Skills: "Feature List" Style -->
        <div
          class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          <div>
            <h2 class="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">
              Leadership & Strategy
            </h2>
            <p
              class="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl"
            >
              Soft Skills
            </p>
            <p class="mt-6 text-base leading-7 text-slate-600 dark:text-slate-400">
              Technical excellence is only half the equation. I bring the communication, leadership,
              and strategic thinking required to drive products from concept to launch.
            </p>
          </div>
          <dl
            class="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-slate-600 dark:text-slate-400 sm:grid-cols-2 lg:gap-y-16"
          >
            @for (skill of softSkills(); track skill.name) {
            <div class="relative pl-9">
              <dt class="font-semibold text-slate-900 dark:text-white">
                <svg
                  class="absolute left-0 top-1 h-5 w-5 text-indigo-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  />
                </svg>
                {{ skill.name }}
              </dt>
              <!-- Using category as a short description/context -->
              <dd class="mt-1 text-sm">{{ skill.category }}</dd>
            </div>
            }
          </dl>
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

  groupedTechnicalSkills = computed(() => {
    const skills = this.technicalSkills();
    const groups: Record<string, Skill[]> = {};

    // Grouping
    skills.forEach((skill) => {
      const cat = skill.category;
      if (!groups[cat]) {
        groups[cat] = [];
      }
      groups[cat].push(skill);
    });

    return Object.entries(groups).map(([category, skills]) => ({ category, skills }));
  });

  private categoryIcons: Record<string, string> = {
    'Core Stack':
      'M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z',
    Languages:
      'M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418',
    State:
      'M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z',
    Architecture:
      'M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9',
    Backend:
      'M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125',
    Styling:
      'M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42',
    Tools:
      'M11.42 15.17L17.25 21A2.26 2.26 0 0021 17.25l-5.83-5.83m0 0c.03.045.068.09.11.135l5.65 5.65c.34.34.85.34 1.19 0 .33-.33.33-.85 0-1.19l-5.65-5.65c-.045-.04-.09-.08-.135-.11m0 0a4.125 4.125 0 00-5.94-5.94A4.125 4.125 0 003 3.75 4.125 4.125 0 007.125 7.875 4.125 4.125 0 0011.42 11.42z',
  };

  getCategoryIcon(category: string): string {
    return (
      this.categoryIcons[category] || 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z'
    ); // default lightning
  }
}
