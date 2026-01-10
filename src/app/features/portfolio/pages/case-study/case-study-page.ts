import { Component, inject, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PortfolioStore } from '../../../../core/portfolio/portfolio-store';
import { Meta } from '@angular/platform-browser';
import { LucideAngularModule, ArrowLeft, ExternalLink, Trophy, Cpu, Github } from 'lucide-angular';

@Component({
  selector: 'app-case-study-page',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule],
  template: `
    @if (caseStudy(); as study) {
    <div class="relative bg-white dark:bg-slate-950 min-h-screen">
      <!-- Background Pattern -->
      <div
        class="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-200 to-indigo-200 dark:from-primary-900 dark:to-slate-900 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        ></div>
      </div>

      <!-- Navigation Bar -->
      <nav
        class="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60"
      >
        <div class="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <a
            routerLink="/work"
            class="group inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
          >
            <lucide-icon
              [img]="ArrowLeft"
              class="h-4 w-4 text-slate-400 dark:text-slate-500 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
            ></lucide-icon>
            All Work
          </a>

          <div class="flex items-center gap-4">
            @if (study.demoUrl) {
            <a
              [href]="study.demoUrl"
              target="_blank"
              class="text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-500 flex items-center gap-1"
            >
              Visit Site <lucide-icon [img]="ExternalLink" class="h-4 w-4"></lucide-icon>
            </a>
            }
          </div>
        </div>
      </nav>

      <main class="relative z-10 py-16 sm:py-24">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <!-- Header -->
          <div class="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
            <h1
              class="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl mb-6"
            >
              {{ study.title }}
            </h1>
            <p class="text-xl leading-8 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {{ study.tagline }}
            </p>
          </div>

          <!-- Hero Image -->
          <div class="relative mx-auto max-w-6xl mb-24 group">
            <div
              class="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary-600 to-indigo-600 opacity-20 blur transition duration-1000 group-hover:opacity-40 group-hover:duration-200"
            ></div>
            <div
              class="relative aspect-[16/9] overflow-hidden rounded-2xl bg-slate-900 shadow-2xl ring-1 ring-slate-900/10 dark:ring-white/10"
            >
              <img
                [src]="study.heroImage"
                [alt]="study.title"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div
                class="absolute inset-0 bg-slate-900/10 dark:bg-slate-900/30 ring-1 ring-inset ring-slate-900/10"
              ></div>
            </div>
          </div>

          <!-- Content Layout -->
          <div
            class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-12"
          >
            <!-- Content Column -->
            <div class="lg:col-span-7 xl:col-span-8">
              <div class="prose prose-lg prose-slate dark:prose-invert max-w-none">
                <section class="mb-12">
                  <h3
                    class="text-slate-900 dark:text-white font-semibold flex items-center gap-2 text-xl"
                  >
                    <span class="w-1 h-8 bg-primary-500 rounded-full"></span>
                    The Challenge
                  </h3>
                  <p class="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                    {{ study.challenge }}
                  </p>
                </section>

                <section class="mb-12">
                  <h3
                    class="text-slate-900 dark:text-white font-semibold flex items-center gap-2 text-xl"
                  >
                    <span class="w-1 h-8 bg-emerald-500 rounded-full"></span>
                    The Solution
                  </h3>
                  <p class="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                    {{ study.solution }}
                  </p>
                </section>

                <!-- Technical Deep Dive Box -->
                <div
                  class="mt-12 rounded-2xl bg-slate-50 dark:bg-white/5 p-8 ring-1 ring-inset ring-slate-200 dark:ring-white/10"
                >
                  <h3
                    class="flex items-center gap-3 text-lg font-semibold text-slate-900 dark:text-white"
                  >
                    <lucide-icon
                      [img]="Cpu"
                      class="h-6 w-6 text-primary-600 dark:text-primary-400"
                    ></lucide-icon>
                    Technical Approach
                  </h3>
                  <p class="mt-4 text-slate-600 dark:text-slate-400">
                    Built with <strong>zoneless Angular architecture</strong> leveraging Signals for
                    granular reactivity. The state management strategy uses a custom SignalStore
                    implementation, ensuring type-safe, predictable data flow while maintaining
                    exceptional runtime performance.
                  </p>
                </div>
              </div>
            </div>

            <!-- Sidebar Column -->
            <div class="lg:col-span-5 xl:col-span-4">
              <div class="sticky top-24 space-y-8">
                <!-- Project Stats -->
                <div
                  class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm"
                >
                  <h3
                    class="font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2"
                  >
                    <lucide-icon [img]="Trophy" class="w-5 h-5 text-emerald-500"></lucide-icon>
                    Key Outcomes
                  </h3>
                  <ul class="space-y-4">
                    @for (result of study.results; track result) {
                    <li class="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                      <span
                        class="w-1.5 h-1.5 mt-2 rounded-full bg-emerald-500 flex-shrink-0"
                      ></span>
                      <span>{{ result }}</span>
                    </li>
                    }
                  </ul>
                </div>

                <!-- Tech Stack -->
                <div
                  class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm"
                >
                  <h3 class="font-semibold text-slate-900 dark:text-white mb-4">Technologies</h3>
                  <div class="flex flex-wrap gap-2">
                    @for (tech of study.techStack; track tech) {
                    <span
                      class="inline-flex items-center rounded-md bg-primary-50 dark:bg-primary-900/30 px-3 py-1.5 text-xs font-medium text-primary-700 dark:text-primary-300 ring-1 ring-inset ring-primary-700/10 dark:ring-primary-400/30"
                    >
                      {{ tech }}
                    </span>
                    }
                  </div>
                </div>

                <!-- Actions -->
                <div class="grid grid-cols-1 gap-3">
                  @if (study.demoUrl) {
                  <a
                    [href]="study.demoUrl"
                    target="_blank"
                    class="flex items-center justify-center gap-2 w-full rounded-xl bg-slate-900 dark:bg-white px-4 py-3 text-sm font-semibold text-white dark:text-slate-900 shadow-sm hover:bg-slate-800 dark:hover:bg-slate-100 transition-all"
                  >
                    Launch Live Demo
                    <lucide-icon [img]="ExternalLink" class="w-4 h-4"></lucide-icon>
                  </a>
                  } @if (study.repoUrl) {
                  <a
                    [href]="study.repoUrl"
                    target="_blank"
                    class="flex items-center justify-center gap-2 w-full rounded-xl bg-white dark:bg-slate-950 px-4 py-3 text-sm font-semibold text-slate-900 dark:text-white ring-1 ring-inset ring-slate-200 dark:ring-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all"
                  >
                    <lucide-icon [img]="Github" class="w-4 h-4"></lucide-icon>
                    Source Code
                  </a>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    }
  `,
})
export class CaseStudyPage {
  store = inject(PortfolioStore);

  // Input from router parameter
  id = input.required<string>();

  caseStudy = computed(() => {
    return this.store.caseStudies().find((c) => c.id === this.id());
  });

  readonly ArrowLeft = ArrowLeft;
  readonly ExternalLink = ExternalLink;
  readonly Trophy = Trophy;
  readonly Cpu = Cpu;
  readonly Github = Github;
}
