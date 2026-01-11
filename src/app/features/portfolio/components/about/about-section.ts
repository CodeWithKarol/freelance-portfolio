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
      class="relative overflow-hidden bg-white dark:bg-slate-950 pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-32 lg:pb-40"
    >
      <!-- Background Decorations -->
      <div class="absolute inset-0 -z-10 overflow-hidden">
        <svg
          class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-slate-200 dark:stroke-slate-800 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width="200"
              height="200"
              x="50%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y="-1" class="overflow-visible fill-slate-50 dark:fill-slate-900/50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              stroke-width="0"
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            stroke-width="0"
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>

      <div class="absolute top-0 right-0 -z-10 opacity-30 blur-3xl overflow-hidden">
        <div
          class="aspect-[1400/900] w-[87.5rem] bg-gradient-to-tr from-[#80caff] to-[#4f46e5] opacity-20"
          style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"
        ></div>
      </div>

      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10 lg:gap-y-16 items-center">
          <!-- Content Column -->
          <div class="max-w-2xl lg:max-w-none">
            <!-- Availability Badge -->
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
              class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6"
            >
              Senior Frontend Developer
              <span
                class="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-sky-500"
              >
                Crafting Digital Excellence
              </span>
            </h1>

            <p class="text-lg leading-8 text-slate-600 dark:text-slate-300 mb-8">
              I help companies build scalable, high-performance web applications. With expert-level
              command of Angular and solid proficiency in React, I turn complex requirements into
              elegant, user-centric solutions.
            </p>

            <div class="flex flex-wrap items-center gap-4 mb-12">
              <a
                (click)="scrollTo('contact')"
                class="cursor-pointer rounded-lg bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all flex items-center gap-2"
              >
                Let's Work Together
                <lucide-icon [img]="ArrowRight" class="w-4 h-4"></lucide-icon>
              </a>
              <a
                routerLink="/work"
                class="cursor-pointer rounded-lg px-6 py-3.5 text-sm font-semibold text-slate-900 dark:text-white ring-1 ring-inset ring-slate-200 dark:ring-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
              >
                View Case Studies
              </a>
            </div>

            <!-- Stats/Features -->
            <dl
              class="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-8 border-t border-slate-200 dark:border-slate-800/50"
            >
              <div class="flex flex-col gap-y-2">
                <dt
                  class="text-sm leading-6 text-slate-500 dark:text-slate-400 flex items-center gap-2"
                >
                  <lucide-icon [img]="Terminal" class="w-4 h-4 text-indigo-500"></lucide-icon>
                  Code Quality
                </dt>
                <dd class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Built to Scale
                </dd>
              </div>
              <div class="flex flex-col gap-y-2">
                <dt
                  class="text-sm leading-6 text-slate-500 dark:text-slate-400 flex items-center gap-2"
                >
                  <lucide-icon [img]="Cpu" class="w-4 h-4 text-indigo-500"></lucide-icon>
                  Performance
                </dt>
                <dd class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Lightning Fast
                </dd>
              </div>
              <div class="flex flex-col gap-y-2">
                <dt
                  class="text-sm leading-6 text-slate-500 dark:text-slate-400 flex items-center gap-2"
                >
                  <lucide-icon [img]="Globe" class="w-4 h-4 text-indigo-500"></lucide-icon>
                  Global Reach
                </dt>
                <dd class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  SEO & Accessible
                </dd>
              </div>
            </dl>
          </div>

          <!-- Image Column (Modern Composition) -->
          <div class="relative lg:ml-auto w-full max-w-lg lg:max-w-none mx-auto">
            <div
              class="relative aspect-[4/3] w-full rounded-2xl bg-slate-900/5 dark:bg-white/5 object-cover shadow-2xl ring-1 ring-slate-900/10 dark:ring-white/10 sm:aspect-[3/4] lg:aspect-[4/3] overflow-hidden group"
            >
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072"
                alt="Developer workspace"
                class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                class="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent mix-blend-multiply"
              ></div>
            </div>

            <!-- Floating Badge 1 -->
            <div
              class="absolute -top-4 right-4 sm:-top-8 xl:-right-8 w-auto min-w-[180px] sm:min-w-[240px] bg-white dark:bg-slate-900 rounded-xl p-3 sm:p-4 shadow-xl ring-1 ring-slate-900/10 dark:ring-white/10 backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95"
            >
              <div class="flex items-center gap-3 mb-2">
                <div
                  class="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400"
                >
                  <lucide-icon [img]="Zap" class="w-5 h-5"></lucide-icon>
                </div>
                <div>
                  <p class="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Performance Score
                  </p>
                  <p class="text-sm font-bold text-slate-900 dark:text-white">100 / 100</p>
                </div>
              </div>
              <div class="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5">
                <div class="bg-green-500 h-1.5 rounded-full w-full"></div>
              </div>
            </div>

            <!-- Floating Badge 2 -->
            <div
              class="absolute -bottom-4 left-4 sm:-bottom-8 xl:-left-8 w-auto bg-white dark:bg-slate-900 rounded-xl p-3 sm:p-4 shadow-xl ring-1 ring-slate-900/10 dark:ring-white/10 backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95 flex items-center gap-3 sm:gap-4"
            >
              <div
                class="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400"
              >
                <lucide-icon [img]="CheckCircle2" class="w-5 h-5"></lucide-icon>
              </div>
              <div>
                <p class="text-sm font-bold text-slate-900 dark:text-white">Projects Delivered</p>
                <p class="text-xs font-medium text-slate-500 dark:text-slate-400">
                  On Time & Budget
                </p>
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
