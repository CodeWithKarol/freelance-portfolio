import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import {
  LucideAngularModule,
  ArrowRight,
  Terminal,
  Cpu,
  Globe,
  CheckCircle2,
  Zap,
  Download,
} from 'lucide-angular';
import { Button } from '@shared/ui/button/button';

@Component({
  selector: 'app-about-section',
  imports: [CommonModule, LucideAngularModule, Button],
  template: `
    <section
      id="about"
      class="relative isolate overflow-hidden bg-slate-50 dark:bg-slate-950 grid-bg border-b border-slate-200 dark:border-slate-800"
    >
      <div class="layout-container relative z-10 pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <!-- Left Column: Typography & Info -->
          <div class="flex flex-col items-start text-left">
            <!-- Status Line -->
            <div
              class="flex items-center gap-2 mb-6 font-mono text-xs text-primary dark:text-primary-400 uppercase tracking-widest"
            >
              <span class="relative flex h-2 w-2">
                <span
                  class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"
                ></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              System Status: Available for Assignment
            </div>

            <!-- Main Heading -->
            <h1 class="heading-1 mb-6">
              <span class="block text-slate-900 dark:text-white">Engineering</span>
              <span class="block text-slate-500 dark:text-slate-500">Enterprise</span>
              <span class="block text-primary dark:text-primary-500">Frontends</span>
            </h1>

            <!-- Sub-headline text -->
            <p
              class="text-body text-lg max-w-lg mb-8 border-l-2 border-primary/20 pl-6 dark:text-slate-400"
            >
              Specialized in
              <strong class="text-slate-900 dark:text-white">legacy modernization</strong> and
              high-performance
              <strong class="text-slate-900 dark:text-white">Angular architecture</strong>. Turning
              technical debt into measurable business value through precision engineering.
            </p>

            <!-- Tech Stack Data Grid -->
            <div class="grid grid-cols-2 gap-4 w-full max-w-md mb-10 font-mono text-xs">
              <div
                class="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-sm"
              >
                <span class="block text-slate-400 mb-1">CORE FRAMEWORK</span>
                <span class="font-bold text-slate-900 dark:text-white">ANGULAR 21+</span>
              </div>
              <div
                class="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-sm"
              >
                <span class="block text-slate-400 mb-1">ARCHITECTURE</span>
                <span class="font-bold text-slate-900 dark:text-white">NX MONOREPO</span>
              </div>
              <div
                class="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-sm"
              >
                <span class="block text-slate-400 mb-1">STATE MGMT</span>
                <span class="font-bold text-slate-900 dark:text-white">SIGNALS / RXJS</span>
              </div>
              <div
                class="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-sm"
              >
                <span class="block text-slate-400 mb-1">PERFORMANCE</span>
                <span class="font-bold text-slate-900 dark:text-white">ZONELESS</span>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-wrap items-center gap-4">
              <app-button
                [route]="['/']"
                fragment="contact"
                variant="primary"
                size="lg"
                styleClass="rounded-none font-mono uppercase tracking-wide"
              >
                Initialize Project
              </app-button>

              <app-button
                [route]="['/work']"
                variant="outline"
                size="lg"
                styleClass="rounded-none font-mono uppercase tracking-wide border-slate-300 dark:border-slate-700"
              >
                View Diagnostics
              </app-button>
            </div>
          </div>

          <!-- Right Column: Visual/Terminal -->
          <div class="relative lg:h-full flex items-center justify-center">
            <!-- Abstract Blueprint Decorations -->
            <div class="absolute inset-0 z-0">
              <div
                class="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
              ></div>
              <div
                class="absolute bottom-0 left-10 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl"
              ></div>
            </div>

            <!-- Terminal Window -->
            <div
              class="relative z-10 w-full max-w-lg tech-border bg-slate-900 rounded-lg shadow-2xl overflow-hidden"
            >
              <!-- Window Bar -->
              <div class="flex items-center px-4 py-2 bg-slate-800 border-b border-slate-700">
                <div class="flex gap-2">
                  <div class="w-3 h-3 rounded-full bg-red-500"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div class="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div class="ml-4 text-xs font-mono text-slate-400">
                  karol.modelski@dev:~/portfolio
                </div>
              </div>

              <!-- Content -->
              <div class="p-6 font-mono text-sm">
                <div class="mb-4">
                  <span class="text-green-400">➜</span> <span class="text-blue-400">~</span>
                  <span class="text-slate-300">npx audit-architecture --target=legacy-app</span>
                </div>

                <div
                  class="text-slate-300 mb-4 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
                  style="animation-delay: 0.5s"
                >
                  <span class="text-yellow-400">⚠ WARNING:</span> Technical debt detected<br />
                  <span class="text-slate-500">Analyzing complexity...</span>
                </div>

                <div
                  class="space-y-2 mb-6 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
                  style="animation-delay: 1.2s"
                >
                  <div class="flex justify-between items-center text-xs">
                    <span class="text-slate-400">Bundle Size</span>
                    <span class="text-red-400">CRITICAL (5.2MB)</span>
                  </div>
                  <div class="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                    <div class="h-full bg-red-500 w-[90%]"></div>
                  </div>

                  <div class="flex justify-between items-center text-xs mt-2">
                    <span class="text-slate-400">Change Detection</span>
                    <span class="text-yellow-400">UNOPTIMIZED</span>
                  </div>
                  <div class="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                    <div class="h-full bg-yellow-500 w-[65%]"></div>
                  </div>
                </div>

                <div
                  class="mb-2 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
                  style="animation-delay: 2.5s"
                >
                  <span class="text-green-400">➜</span> <span class="text-blue-400">~</span>
                  <span class="text-slate-300">apply-modernization --strategy=zoneless</span>
                </div>

                <div
                  class="opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
                  style="animation-delay: 3.5s"
                >
                  <span class="text-green-500">✔ OPTIMIZATION COMPLETE</span><br />
                  <span class="text-slate-400 text-xs">Performance Boost: +400%</span>
                </div>
              </div>
            </div>

            <!-- Floater Metric -->
            <div
              class="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-4 shadow-xl border border-slate-200 dark:border-slate-700 hidden md:block animate-[fadeIn_1s_ease-out_1s_forwards] opacity-0"
            >
              <div class="flex items-center gap-3">
                <div
                  class="p-2 bg-green-100 dark:bg-green-900/30 rounded-full text-green-600 dark:text-green-400"
                >
                  <lucide-icon [img]="Zap" class="w-5 h-5"></lucide-icon>
                </div>
                <div>
                  <div class="text-xs text-slate-500 font-mono uppercase">Core Web Vitals</div>
                  <div class="text-lg font-bold text-slate-900 dark:text-white">99/100</div>
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
  readonly ArrowRight = ArrowRight;
  readonly Terminal = Terminal;
  readonly Cpu = Cpu;
  readonly Globe = Globe;
  readonly CheckCircle2 = CheckCircle2;
  readonly Zap = Zap;
  readonly Download = Download;

  private scroller = inject(ViewportScroller);

  scrollTo(id: string) {
    this.scroller.scrollToAnchor(id);
  }
}
