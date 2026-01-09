import { Component, inject, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PortfolioStore } from '../../../../core/portfolio/portfolio-store';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-case-study-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    @if (caseStudy(); as study) {
    <div class="relative bg-white dark:bg-slate-950 min-h-screen">
      <!-- Decorator Blob -->
      <div
        class="absolute top-0 right-0 z-0 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        ></div>
      </div>

      <!-- Modern Header with Breadcrumb Style Back Link -->
      <div
        class="border-b border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 backdrop-blur-md sticky top-[69px] sm:top-[85px] z-40 transition-[top] duration-300"
      >
        <div class="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <a
            routerLink="/work"
            class="group inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
          >
            <svg
              class="h-4 w-4 text-slate-400 dark:text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white transition-colors"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                clip-rule="evenodd"
              />
            </svg>
            Back to Projects
          </a>

          <div class="flex items-center gap-4">
            @if (study.demoUrl) {
            <a
              [href]="study.demoUrl"
              target="_blank"
              class="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-500"
              >Live Site &rarr;</a
            >
            }
          </div>
        </div>
      </div>

      <main class="relative z-10 py-16 sm:py-24">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <!-- Title Section -->
          <div class="mx-auto max-w-3xl text-center mb-16 sm:mb-24">
            <div
              class="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/30 mb-6"
            >
              Case Study
            </div>
            <h1
              class="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-6xl mb-6"
            >
              {{ study.title }}
            </h1>
            <p class="text-xl leading-8 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {{ study.tagline }}
            </p>
          </div>

          <!-- Hero Image Frame -->
          <div class="relative mx-auto max-w-5xl mb-24">
            <div
              class="rounded-2xl p-2 bg-slate-900/5 dark:bg-white/10 ring-1 ring-inset ring-slate-900/10 dark:ring-white/10 lg:-m-4 lg:rounded-3xl lg:p-4"
            >
              <div
                class="aspect-[16/9] bg-slate-800 rounded-xl overflow-hidden relative shadow-2xl"
              >
                <div class="absolute inset-0 flex items-center justify-center">
                  <span
                    class="text-8xl font-black text-slate-700 dark:text-slate-600 opacity-20 select-none"
                    >{{ study.title }}</span
                  >
                </div>
              </div>
            </div>
          </div>

          <!-- Content Grid with Sticky Sidebar -->
          <div
            class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            <!-- Main Content -->
            <div class="lg:col-span-2 lg:pr-8">
              <div class="prose prose-lg prose-slate dark:prose-invert max-w-none">
                <section class="mb-16">
                  <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    The Challenge
                  </h2>
                  <p class="mt-6 text-lg text-slate-600 dark:text-slate-400">
                    {{ study.challenge }}
                  </p>
                </section>
                <section class="mb-16">
                  <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    The Solution
                  </h2>
                  <p class="mt-6 text-lg text-slate-600 dark:text-slate-400">
                    {{ study.solution }}
                  </p>
                </section>

                <!-- Architectural Highlights Box -->
                <div
                  class="my-10 rounded-2xl bg-slate-50 dark:bg-slate-900 p-8 ring-1 ring-slate-200 dark:ring-slate-800"
                >
                  <div class="flex items-center gap-3 mb-4">
                    <svg
                      class="h-6 w-6 text-blue-600 dark:text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                      />
                    </svg>
                    <h3 class="text-lg font-semibold text-slate-900 dark:text-slate-200 m-0">
                      Architectural Highlights
                    </h3>
                  </div>
                  <p class="text-slate-600 dark:text-slate-400 m-0">
                    This project leverages a <strong>zoneless Angular architecture</strong> with
                    Signals for fine-grained reactivity. State management involves a custom
                    implementation of the <strong>SignalStore pattern</strong> to handle complex
                    asynchronous data flows and optimistic UI updates.
                  </p>
                </div>
              </div>
            </div>

            <!-- Sticky Sidebar -->
            <div class="lg:col-span-1">
              <div class="sticky top-24 space-y-8">
                <!-- Quick Stats Card -->
                <div
                  class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm"
                >
                  <h3 class="font-semibold text-slate-900 dark:text-slate-200 mb-6">Key Results</h3>
                  <dl class="space-y-4">
                    @for (result of study.results; track result) {
                    <div
                      class="flex flex-col pb-4 border-b border-slate-100 dark:border-slate-800 last:border-0 last:pb-0"
                    >
                      <dt class="text-sm text-slate-500 dark:text-slate-400">Result</dt>
                      <dd class="font-medium text-slate-900 dark:text-slate-200">
                        {{ result }}
                      </dd>
                    </div>
                    }
                  </dl>
                </div>

                <!-- Tech Stack Card -->
                <div>
                  <h3
                    class="text-sm font-semibold leading-6 text-slate-900 dark:text-slate-200 mb-4"
                  >
                    Technologies
                  </h3>
                  <div class="flex flex-wrap gap-2">
                    @for (tech of study.techStack; track tech) {
                    <span
                      class="inline-flex items-center rounded-md bg-blue-50 dark:bg-blue-900/30 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-300 ring-1 ring-inset ring-blue-700/10 dark:ring-blue-400/30"
                    >
                      {{ tech }}
                    </span>
                    }
                  </div>
                </div>

                <!-- CTA Buttons -->
                <div class="flex flex-col gap-3 pt-4">
                  @if (study.demoUrl) {
                  <a
                    [href]="study.demoUrl"
                    target="_blank"
                    class="w-full rounded-md bg-slate-900 dark:bg-white px-3.5 py-2.5 text-center text-sm font-semibold text-white dark:text-slate-900 shadow-sm hover:bg-slate-700 dark:hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
                  >
                    Visit Live Site
                  </a>
                  } @if (study.repoUrl) {
                  <a
                    [href]="study.repoUrl"
                    target="_blank"
                    class="w-full rounded-md bg-white dark:bg-slate-950 px-3.5 py-2.5 text-center text-sm font-semibold text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
                  >
                    View Source Code
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
}
