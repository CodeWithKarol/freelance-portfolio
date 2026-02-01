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
import { Badge } from '@shared/ui/badge/badge';
import { BackgroundPatternComponent } from '@shared/ui/background-pattern/background-pattern.component';

@Component({
  selector: 'app-about-section',
  imports: [CommonModule, LucideAngularModule, Button, Badge, BackgroundPatternComponent],
  template: `
    <section id="about" class="relative isolate overflow-hidden bg-white dark:bg-slate-950">
      <!-- Sophisticated Background Gradient -->
      <app-background-pattern variant="hero" position="top-right" />

      <div class="overflow-hidden">
        <div class="layout-container pb-32 pt-36 sm:pt-60 lg:pt-32">
          <div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <!-- Left Content Column -->
            <div class="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
              <!-- Availability Badge -->
              <div class="mb-8 flex">
                <app-badge variant="soft" color="success">
                  <span class="flex items-center gap-x-2">
                    <span class="h-2 w-2 rounded-full bg-success"></span>
                    Available for new projects
                  </span>
                </app-badge>
              </div>

              <!-- Main Heading -->
              <h1 class="heading-1 dark:text-white">
                Senior Frontend Developer <br />
                <span class="text-primary dark:text-primary-400">Modernizing Legacy Frontends</span>
              </h1>

              <!-- Sub-headline text -->
              <p class="text-body mt-6 dark:text-slate-300 sm:max-w-md lg:max-w-none">
                I help enterprise teams and ambitious startups turn slow, tangled frontends
                (specializing in Angular) into clean, modular systems that ship faster and stay
                fast. Expect measurable performance wins, audit-ready engineering practices, and
                architecture that scales with your product.
                <br /><br />
                Angular is my specialty. I can also ship React when your stack or roadmap requires
                it.
              </p>

              <!-- Founder Link -->
              <div class="mt-4">
                <a
                  href="https://scale-sail.io/"
                  target="_blank"
                  class="inline-flex items-center gap-x-2 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-500 transition-colors"
                >
                  <span>Founder @ Scale Sail</span>
                  <lucide-icon [img]="Globe" class="w-4 h-4"></lucide-icon>
                </a>
              </div>

              <!-- Tech Stack Pills -->
              <ul class="mt-8 flex flex-wrap gap-2 list-none p-0">
                @for (
                  tech of [
                    'Angular 21',
                    'Signals Architecture',
                    'SSR-Ready Performance',
                    'Tailwind CSS 4',
                  ];
                  track tech
                ) {
                  <li>
                    <app-badge variant="soft" color="accent">
                      {{ tech }}
                    </app-badge>
                  </li>
                }
              </ul>

              <!-- Action Buttons -->
              <div class="mt-10 flex flex-wrap items-center gap-x-4 gap-y-4">
                <app-button [route]="['/']" fragment="contact" variant="primary">
                  Book a Call
                </app-button>

                <app-button [route]="['/work']" variant="ghost">
                  View Case Studies <span aria-hidden="true" class="ml-1">→</span>
                </app-button>
              </div>

              <!-- Trust Anchor -->
              <p class="mt-6 text-xs font-medium text-secondary/60 dark:text-slate-400">
                Trusted by engineering leaders at companies like
                <span class="text-secondary dark:text-slate-300 font-semibold">Citi</span> and
                <span class="text-secondary dark:text-slate-300 font-semibold">BNP Paribas</span>.
              </p>

              <!-- Key Metrics/Points -->
              <dl
                class="mt-14 pt-10 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 gap-8 sm:grid-cols-3"
              >
                <div>
                  <dt
                    class="flex items-center gap-2 text-sm font-semibold text-secondary dark:text-white"
                  >
                    <lucide-icon
                      [img]="Terminal"
                      class="h-4 w-4 text-accent dark:text-accent"
                    ></lucide-icon>
                    Engineering
                  </dt>
                  <dd class="mt-1 text-sm leading-6 text-secondary/80 dark:text-slate-400">
                    Audit-ready delivery
                  </dd>
                </div>
                <div>
                  <dt
                    class="flex items-center gap-2 text-sm font-semibold text-secondary dark:text-white"
                  >
                    <lucide-icon
                      [img]="Cpu"
                      class="h-4 w-4 text-accent dark:text-accent"
                    ></lucide-icon>
                    Performance
                  </dt>
                  <dd class="mt-1 text-sm leading-6 text-secondary/80 dark:text-slate-400">
                    Core Web Vitals wins
                  </dd>
                </div>
                <div>
                  <dt
                    class="flex items-center gap-2 text-sm font-semibold text-secondary dark:text-white"
                  >
                    <lucide-icon
                      [img]="Globe"
                      class="h-4 w-4 text-accent dark:text-accent"
                    ></lucide-icon>
                    Product
                  </dt>
                  <dd class="mt-1 text-sm leading-6 text-secondary/80 dark:text-slate-400">
                    Ship faster, safer
                  </dd>
                </div>
              </dl>
            </div>

            <!-- Right Image Column -->
            <div class="mt-16 sm:mt-24 lg:mt-0 lg:ml-10 lg:grow xl:ml-24">
              <div class="relative group">
                <!-- Abstract Shapes -->
                <div
                  class="absolute -top-4 -right-4 -z-10 h-full w-full bg-neutral dark:bg-white/5 rounded-2xl rotate-2"
                ></div>

                <div
                  class="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 shadow-xl ring-1 ring-secondary/10 dark:ring-white/10 aspect-[6/7]"
                >
                  <img
                    src="images/karol-modelski.webp"
                    alt="Karol Modelski"
                    class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
