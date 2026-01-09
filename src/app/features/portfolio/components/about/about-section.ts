import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section
      id="about"
      class="relative overflow-hidden bg-slate-50 dark:bg-slate-950 pt-16 pb-24 lg:pt-32 lg:pb-40"
    >
      <!-- Grid Background Pattern -->
      <div
        class="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
      ></div>
      <div
        class="absolute inset-0 -z-10 bg-[radial-gradient(circle_800px_at_100%_200px,theme(colors.indigo.500/0.1),transparent)]"
      ></div>

      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 xl:mx-0 xl:max-w-none xl:grid-cols-2 xl:items-center xl:gap-y-10"
        >
          <!-- Text Content -->
          <div class="xl:row-start-1 xl:max-w-lg">
            <!-- Availability Badge -->
            <div
              class="inline-flex items-center gap-x-2 rounded-full bg-emerald-50 dark:bg-emerald-500/10 px-3 py-1 text-sm font-medium leading-6 text-emerald-700 dark:text-emerald-400 ring-1 ring-inset ring-emerald-600/20 mb-8"
            >
              <span class="relative flex h-2 w-2">
                <span
                  class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
                ></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Accepting New Clients
            </div>

            <h1
              class="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl leading-[1.1]"
            >
              Senior Angular Architect &
              <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-primary-600 dark:from-sky-400 dark:to-primary-400"
              >
                SaaS Founder
              </span>
            </h1>

            <p class="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Delivering bank-grade, audit-ready applications with startup velocity. I combine the
              architectural rigor of Citibank & BNP Paribas with the product mindset of a SaaS
              founder to help you ship secure, scalable software fast.
            </p>

            <div class="mt-10 flex flex-wrap items-center gap-6">
              <a
                (click)="scrollTo('contact')"
                class="cursor-pointer rounded-xl bg-slate-900 dark:bg-white px-6 py-3.5 text-sm font-semibold text-white dark:text-slate-900 shadow-sm hover:bg-slate-700 dark:hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-all"
              >
                Start Your Project
              </a>
              <a
                routerLink="/work"
                class="text-sm font-semibold leading-6 text-slate-900 dark:text-white group flex items-center gap-2"
              >
                View Work
                <span aria-hidden="true" class="group-hover:translate-x-1 transition-transform"
                  >→</span
                >
              </a>
            </div>

            <!-- Stats Grid -->
            <div
              class="mt-14 grid grid-cols-3 border-t border-slate-200 dark:border-slate-800 pt-8 gap-8"
            >
              <div>
                <div class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  6+
                </div>
                <div class="mt-1 text-sm font-medium text-slate-600 dark:text-slate-400">
                  Years Exp
                </div>
              </div>
              <div>
                <div class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  10+
                </div>
                <div class="mt-1 text-sm font-medium text-slate-600 dark:text-slate-400">
                  Projects
                </div>
              </div>
              <div>
                <div class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  100+
                </div>
                <div class="mt-1 text-sm font-medium text-slate-600 dark:text-slate-400">
                  Days Saved
                </div>
              </div>
            </div>
          </div>

          <!-- Visual / Image -->
          <div class="relative xl:row-start-1 xl:col-start-2">
            <div
              class="relative rounded-2xl bg-slate-900/5 dark:bg-white/5 p-2 ring-1 ring-inset ring-slate-900/10 dark:ring-white/10 xl:-m-4 xl:rounded-2xl xl:p-4"
            >
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2670&auto=format&fit=crop"
                alt="Development workflow"
                class="aspect-[4/3] w-full rounded-lg shadow-2xl ring-1 ring-slate-900/10 object-cover"
              />

              <!-- Floating Badge 1 (Top Left) -->
              <div
                class="absolute -top-6 -left-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl ring-1 ring-slate-200 dark:ring-slate-700 hidden sm:block animate-bounce-slow"
              >
                <div class="flex items-center gap-3">
                  <div
                    class="bg-blue-50 dark:bg-blue-900/30 p-2 rounded-lg text-blue-600 dark:text-blue-400"
                  >
                    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div class="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      Verified
                    </div>
                    <div class="text-sm font-bold text-slate-900 dark:text-white">Code Quality</div>
                  </div>
                </div>
              </div>

              <!-- Floating Badge 2 (Bottom Right) -->
              <div
                class="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl ring-1 ring-slate-200 dark:ring-slate-700 hidden sm:block"
              >
                <div class="flex items-center gap-3">
                  <div
                    class="bg-primary-50 dark:bg-primary-900/30 p-2 rounded-lg text-primary-600 dark:text-primary-400"
                  >
                    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div class="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      Performance
                    </div>
                    <div class="text-sm font-bold text-slate-900 dark:text-white">100% Score</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSection {
  private scroller = inject(ViewportScroller);

  scrollTo(id: string) {
    this.scroller.scrollToAnchor(id);
  }
}
