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
  Download,
} from 'lucide-angular';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule],
  template: `
    <section class="relative isolate overflow-hidden bg-white dark:bg-slate-950">
      <!-- Sophisticated Background Gradient -->
      <svg
        class="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-slate-200 dark:stroke-slate-800 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
            width="200"
            height="200"
            x="50%"
            y="-1"
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y="-1" class="overflow-visible fill-slate-50 dark:fill-slate-900">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            stroke-width="0"
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          stroke-width="0"
          fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
        />
      </svg>
      <div
        class="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
        aria-hidden="true"
      >
        <div
          class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style="clip-path: polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 36.8%, 59.7% 49%, 0.1% 62.5%, 2.1% 26.8%, 13.9% 70.3%, 36.3% 94.5%, 80.5% 56.7%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%)"
        ></div>
      </div>

      <div class="overflow-hidden">
        <div class="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
          <div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <!-- Left Content Column -->
            <div class="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
              <!-- Availability Badge -->
              <div class="mb-8 flex">
                <div
                  class="relative flex items-center gap-x-2 rounded-full px-4 py-1.5 text-sm leading-6 text-slate-600 dark:text-slate-300 ring-1 ring-slate-900/10 dark:ring-white/10 hover:ring-slate-900/20 dark:hover:ring-white/20 transition-all bg-white/50 dark:bg-white/5 backdrop-blur-sm"
                >
                  <span class="relative flex h-2 w-2">
                    <span
                      class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
                    ></span>
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span class="font-semibold text-emerald-600 dark:text-emerald-400"
                    >Available for new projects</span
                  >
                </div>
              </div>

              <!-- Main Heading -->
              <h1
                class="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl"
              >
                Senior Frontend Developer <br />
                <span class="text-indigo-600 dark:text-indigo-400"
                  >Modernizing Legacy Frontends</span
                >
              </h1>

              <!-- Sub-headline text -->
              <p
                class="relative mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300 sm:max-w-md lg:max-w-none"
              >
                I help enterprise teams and ambitious startups turn slow, tangled Angular frontends
                into clean, modular systems that ship faster and stay fast. Expect measurable
                performance wins, audit-ready engineering practices, and architecture that scales
                with your product.
                <br /><br />
                Angular is my specialty. I can also ship React when your stack or roadmap requires
                it.
              </p>

              <!-- Founder Link -->
              <div class="mt-4">
                <a
                  href="https://www.shop.scale-sail.io/"
                  target="_blank"
                  class="inline-flex items-center gap-x-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 transition-colors"
                >
                  <span>Founder @ Scale Sail</span>
                  <lucide-icon [img]="Globe" class="w-4 h-4"></lucide-icon>
                </a>
              </div>

              <!-- Tech Stack Pills -->
              <div class="mt-8 flex flex-wrap gap-2">
                @for (tech of ['Angular 21', 'Signals Architecture', 'SSR-Ready Performance',
                'Tailwind CSS 4']; track tech) {
                <span
                  class="inline-flex items-center rounded-md bg-indigo-50 dark:bg-indigo-500/10 px-2 py-1 text-xs font-medium text-indigo-700 dark:text-indigo-400 ring-1 ring-inset ring-indigo-700/10 dark:ring-indigo-700/20"
                >
                  {{ tech }}
                </span>
                }
              </div>

              <!-- Action Buttons -->
              <div class="mt-10 flex flex-wrap items-center gap-x-4 gap-y-4">
                <a
                  (click)="scrollTo('contact')"
                  class="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer transition-all flex items-center gap-2"
                >
                  Book a Call
                </a>

                <a
                  href="https://drive.google.com/file/d/1ZAtoLBrbP-suftqfzVAdJD2welSEzoVR/view?usp=sharing"
                  target="_blank"
                  class="group rounded-full bg-white dark:bg-white/10 px-6 py-3 text-sm font-semibold text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-white/20 hover:bg-slate-50 dark:hover:bg-white/20 transition-all flex items-center gap-2"
                >
                  <lucide-icon
                    [img]="Download"
                    class="h-4 w-4 text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors"
                  ></lucide-icon>
                  Download Resume
                </a>

                <a
                  routerLink="/work"
                  class="text-sm font-semibold leading-6 text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-1 ml-2"
                >
                  View Case Studies <span aria-hidden="true">→</span>
                </a>
              </div>

              <!-- Key Metrics/Points -->
              <div
                class="mt-14 pt-10 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 gap-8 sm:grid-cols-3"
              >
                <div>
                  <dt
                    class="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white"
                  >
                    <lucide-icon
                      [img]="Terminal"
                      class="h-4 w-4 text-indigo-600 dark:text-indigo-400"
                    ></lucide-icon>
                    Engineering
                  </dt>
                  <dd class="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    Audit-ready delivery
                  </dd>
                </div>
                <div>
                  <dt
                    class="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white"
                  >
                    <lucide-icon
                      [img]="Cpu"
                      class="h-4 w-4 text-indigo-600 dark:text-indigo-400"
                    ></lucide-icon>
                    Performance
                  </dt>
                  <dd class="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    Core Web Vitals wins
                  </dd>
                </div>
                <div>
                  <dt
                    class="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white"
                  >
                    <lucide-icon
                      [img]="Globe"
                      class="h-4 w-4 text-indigo-600 dark:text-indigo-400"
                    ></lucide-icon>
                    Product
                  </dt>
                  <dd class="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    Ship faster, safer
                  </dd>
                </div>
              </div>
            </div>

            <!-- Right Image Column -->
            <div class="mt-16 sm:mt-24 lg:mt-0 lg:ml-10 lg:grow xl:ml-24">
              <div class="relative group">
                <!-- Abstract Shapes -->
                <div
                  class="absolute -top-4 -right-4 -z-10 h-full w-full bg-slate-100 dark:bg-white/5 rounded-2xl rotate-2"
                ></div>

                <div
                  class="relative overflow-hidden rounded-2xl bg-slate-50 dark:bg-slate-900 shadow-xl ring-1 ring-slate-900/10 dark:ring-white/10"
                >
                  <img
                    src="/images/karol-modelski.webp"
                    alt="Karol Modelski"
                    class="aspect-[6/7] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
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
