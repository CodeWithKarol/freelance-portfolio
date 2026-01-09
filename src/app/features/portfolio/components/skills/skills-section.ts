import { Component, inject, ChangeDetectionStrategy, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioStore } from '../../../../core/portfolio/portfolio-store';
import { Skill } from '../../../../core/portfolio/portfolio.model';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule],
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
                  <svg
                    class="w-7 h-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1.5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      [attr.d]="getCategoryIcon(tech.category)"
                    />
                  </svg>
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
                <svg
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    [attr.d]="getCategoryIcon(group.category)"
                  />
                </svg>
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
                      <svg
                        class="absolute left-1 top-1 h-5 w-5 text-primary-500"
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

  private categoryIcons: Record<string, string> = {
    'Core Stack':
      'M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z',
    Languages: 'M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5',
    State: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
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
