import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  LucideAngularModule,
  ArrowRight,
  Terminal,
  Cpu,
  Globe,
  CheckCircle2,
  Zap,
} from 'lucide-angular';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule],
  template: `
    <section
      id="about"
      class="relative isolate overflow-hidden bg-white dark:bg-slate-950 py-24 sm:py-32"
    >
      <!-- Background Effects -->
      <div
        class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        ></div>
      </div>

      <!-- Grid Pattern -->
      <svg
        class="absolute inset-0 -z-10 h-full w-full stroke-slate-200 dark:stroke-slate-800 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width="200"
            height="200"
            x="50%"
            y="-1"
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          stroke-width="0"
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
        />
      </svg>

      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:gap-x-20"
        >
          <!-- Content -->
          <div class="lg:pt-4">
            <div
              class="inline-flex items-center gap-x-2 rounded-full bg-emerald-50 dark:bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-700 dark:text-emerald-400 ring-1 ring-inset ring-emerald-600/20 mb-8"
            >
              <span class="relative flex h-2 w-2">
                <span
                  class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
                ></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for new projects
            </div>

            <h1
              class="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl"
            >
              <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
                <span>Senior Frontend Developer</span>
                <a
                  href="https://scale-sail.io"
                  target="_blank"
                  class="inline-flex items-center gap-x-2 rounded-full bg-white dark:bg-slate-900/50 px-3 py-1 text-sm font-medium text-slate-600 dark:text-slate-300 shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 hover:ring-indigo-500 dark:hover:ring-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all group"
                >
                  <span>Founder @ Scale Sail</span>
                  <lucide-icon
                    [img]="Globe"
                    class="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-500 transition-colors"
                  ></lucide-icon>
                </a>
              </div>
              <span class="block mt-1 text-indigo-600 dark:text-indigo-400"
                >Modernizing Legacy Frontends</span
              >
            </h1>

            <p class="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              I help enterprise teams and ambitious startups turn slow, tangled Angular frontends
              into clean, modular systems that ship faster and stay fast. Expect measurable
              performance wins, audit-ready engineering practices, and architecture that scales with
              your product.
            </p>

            <p class="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">
              Angular is my specialty. I can also ship React when your stack or roadmap requires it.
            </p>

            <div class="mt-8">
              <div class="flex flex-wrap gap-2">
                <span
                  class="inline-flex items-center rounded-full bg-red-50 dark:bg-red-500/10 px-3 py-1 text-xs font-medium text-red-700 dark:text-red-400 ring-1 ring-inset ring-red-600/10 dark:ring-red-500/20"
                >
                  Angular 21
                </span>
                <span
                  class="inline-flex items-center rounded-full bg-amber-50 dark:bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-700 dark:text-amber-400 ring-1 ring-inset ring-amber-600/10 dark:ring-amber-500/20"
                >
                  <lucide-icon [img]="Zap" class="w-3 h-3 mr-1"></lucide-icon>
                  Signals Architecture
                </span>
                <span
                  class="inline-flex items-center rounded-full bg-indigo-50 dark:bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-700 dark:text-indigo-400 ring-1 ring-inset ring-indigo-600/10 dark:ring-indigo-500/20"
                >
                  <lucide-icon [img]="Cpu" class="w-3 h-3 mr-1"></lucide-icon>
                  SSR-Ready Performance
                </span>
                <span
                  class="inline-flex items-center rounded-full bg-sky-50 dark:bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-700 dark:text-sky-400 ring-1 ring-inset ring-sky-600/10 dark:ring-sky-500/20"
                >
                  Tailwind CSS 4
                </span>
              </div>
            </div>

            <div class="mt-10 flex items-center gap-x-6">
              <a
                (click)="scrollTo('contact')"
                class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer flex items-center gap-2"
              >
                Book a Call <lucide-icon [img]="ArrowRight" class="w-4 h-4"></lucide-icon>
              </a>
              <a
                routerLink="/work"
                class="text-sm font-semibold leading-6 text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-1"
              >
                View Case Studies <span aria-hidden="true">→</span>
              </a>
            </div>

            <dl
              class="mt-14 grid grid-cols-1 gap-8 border-t border-slate-200 dark:border-slate-800 pt-10 sm:grid-cols-3"
            >
              <div>
                <dt
                  class="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900 dark:text-white"
                >
                  <div class="rounded-lg bg-indigo-600/10 p-1">
                    <lucide-icon
                      [img]="Terminal"
                      class="h-5 w-5 text-indigo-600 dark:text-indigo-400"
                    ></lucide-icon>
                  </div>
                  Engineering
                </dt>
                <dd class="mt-2 text-base leading-7 text-slate-600 dark:text-slate-400">
                  Audit-ready delivery
                </dd>
              </div>
              <div>
                <dt
                  class="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900 dark:text-white"
                >
                  <div class="rounded-lg bg-indigo-600/10 p-1">
                    <lucide-icon
                      [img]="Cpu"
                      class="h-5 w-5 text-indigo-600 dark:text-indigo-400"
                    ></lucide-icon>
                  </div>
                  Performance
                </dt>
                <dd class="mt-2 text-base leading-7 text-slate-600 dark:text-slate-400">
                  Core Web Vitals wins
                </dd>
              </div>
              <div>
                <dt
                  class="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900 dark:text-white"
                >
                  <div class="rounded-lg bg-indigo-600/10 p-1">
                    <lucide-icon
                      [img]="Globe"
                      class="h-5 w-5 text-indigo-600 dark:text-indigo-400"
                    ></lucide-icon>
                  </div>
                  Product
                </dt>
                <dd class="mt-2 text-base leading-7 text-slate-600 dark:text-slate-400">
                  Ship faster, safer
                </dd>
              </div>
            </dl>
          </div>

          <!-- Image / Visuals -->
          <div
            class="relative mt-12 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-visible"
          >
            <div
              class="absolute -top-12 -right-12 -z-10 w-[120%] h-[120%] bg-gradient-to-tr from-indigo-200 to-sky-200 dark:from-indigo-900/40 dark:to-sky-900/40 blur-3xl rounded-full opacity-50 animate-pulse-slow"
            ></div>

            <div
              class="relative rounded-2xl bg-white/5 p-2 ring-1 ring-inset ring-slate-900/10 dark:ring-white/10 lg:-m-4 lg:p-4 backdrop-blur-sm"
            >
              <div
                class="relative aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/5] overflow-hidden rounded-xl shadow-2xl ring-1 ring-slate-900/10 group"
              >
                <img
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2070"
                  alt="Modern developer workspace"
                  class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/0 to-transparent"
                ></div>

                <!-- Floating Badge 1 (Top Left) -->
                <div
                  class="absolute top-6 left-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] ring-1 ring-slate-900/5 dark:ring-white/10 transform transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div class="flex items-center gap-4">
                    <div
                      class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 text-white shadow-lg shadow-emerald-500/30"
                    >
                      <lucide-icon [img]="Zap" class="h-6 w-6"></lucide-icon>
                    </div>
                    <div>
                      <p
                        class="text-xs font-bold tracking-wide text-slate-500 dark:text-slate-400 uppercase"
                      >
                        Performance
                      </p>
                      <div class="flex items-baseline gap-1">
                        <span class="text-2xl font-bold text-slate-900 dark:text-white">100</span>
                        <span class="text-sm font-semibold text-slate-400 dark:text-slate-500"
                          >/100</span
                        >
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Floating Badge 2 (Bottom Right) -->
                <div
                  class="absolute bottom-6 right-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] ring-1 ring-slate-900/5 dark:ring-white/10 transform transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div class="flex items-center gap-4">
                    <div class="text-right">
                      <p
                        class="text-xs font-bold tracking-wide text-slate-500 dark:text-slate-400 uppercase"
                      >
                        Projects
                      </p>
                      <p class="text-lg font-bold text-slate-900 dark:text-white text-nowrap">
                        On Time & Budget
                      </p>
                    </div>
                    <div
                      class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-400 to-violet-600 text-white shadow-lg shadow-indigo-500/30"
                    >
                      <lucide-icon [img]="CheckCircle2" class="h-6 w-6"></lucide-icon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Gradient Blob Bottom -->
      <div
        class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        ></div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSection {
  readonly ArrowRight = ArrowRight;
  readonly Terminal = Terminal;
  readonly Cpu = Cpu;
  readonly Globe = Globe;
  readonly CheckCircle2 = CheckCircle2;
  readonly Zap = Zap;

  private scroller = inject(ViewportScroller);

  scrollTo(id: string) {
    this.scroller.scrollToAnchor(id);
  }
}
