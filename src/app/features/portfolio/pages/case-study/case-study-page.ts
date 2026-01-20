import { Component, inject, computed, input, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PortfolioStore } from '../../../../core/portfolio/portfolio-store';
import { SeoService } from '../../../../core/seo/seo.service';
import {
  LucideAngularModule,
  ArrowLeft,
  ExternalLink,
  Trophy,
  Cpu,
  Github,
  CheckCircle2,
  Layers,
  Globe,
} from 'lucide-angular';

@Component({
  selector: 'app-case-study-page',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule],
  template: `
    @if (caseStudy(); as study) {
      <!-- Main wrapper with subtle pattern background -->
      <div class="relative min-h-screen bg-slate-50 dark:bg-slate-950">
        <!-- Top Navigation (Sticky) -->
        <nav
          class="sticky top-0 z-50 w-full border-b border-slate-200/50 dark:border-slate-800/50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md"
        >
          <div
            class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
          >
            <div class="flex items-center gap-4">
              <a
                [routerLink]="'/work'"
                class="group inline-flex items-center justify-center rounded-full w-8 h-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
                aria-label="Back to projects"
              >
                <lucide-icon
                  [img]="ArrowLeft"
                  class="h-4 w-4 text-slate-600 dark:text-slate-300 transition-transform group-hover:-translate-x-0.5"
                ></lucide-icon>
              </a>
              <span
                class="text-sm font-semibold text-slate-900 dark:text-white hidden sm:block opacity-0 lg:opacity-100 transition-opacity"
              >
                {{ study.title }}
              </span>
            </div>

            <div class="flex items-center gap-3">
              @if (study.demoUrl) {
                <a
                  [href]="study.demoUrl"
                  target="_blank"
                  class="inline-flex items-center gap-2 rounded-full bg-slate-900 dark:bg-white px-4 py-1.5 text-xs font-semibold text-white dark:text-slate-900 shadow-sm hover:bg-slate-800 dark:hover:bg-slate-100 transition-all"
                >
                  Visit Site <lucide-icon [img]="ExternalLink" class="h-3 w-3"></lucide-icon>
                </a>
              }
            </div>
          </div>
        </nav>

        <main class="relative pt-12 pb-24 lg:pt-20 lg:pb-32">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Header / Hero Section -->
            <div class="max-w-4xl mx-auto text-center mb-16 lg:mb-24">
              <h1
                class="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl mb-6"
              >
                {{ study.title }}
              </h1>
              <p
                class="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
              >
                {{ study.tagline }}
              </p>

              <!-- Tech Stack Pills (Centered) -->
              <div class="mt-8 flex flex-wrap justify-center gap-2">
                @for (tech of study.techStack; track tech) {
                  <span
                    class="inline-flex items-center rounded-full bg-white dark:bg-slate-900 px-3 py-1 text-xs font-medium text-slate-700 dark:text-slate-300 ring-1 ring-inset ring-slate-200 dark:ring-slate-800 shadow-sm"
                  >
                    {{ tech }}
                  </span>
                }
              </div>
            </div>

            <!-- Hero Image (Full width wrapper with constraint) -->
            <div class="relative w-full max-w-6xl mx-auto mb-20 lg:mb-28 perspective-1000">
              <!-- Glossy effect overlay -->
              <div
                class="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-20 dark:opacity-40"
              ></div>

              <div
                class="relative rounded-xl overflow-hidden shadow-2xl bg-slate-900 ring-1 ring-slate-900/5 aspect-video"
              >
                <img
                  [src]="study.heroImage"
                  [alt]="study.title"
                  class="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <!-- Two Column Grid Layout for Content -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 max-w-6xl mx-auto">
              <!-- Left Column: Main Narrative -->
              <div class="lg:col-span-8 space-y-16">
                <!-- Challenge -->
                <section>
                  <div class="flex items-center gap-3 mb-6">
                    <div class="p-2 bg-rose-50 dark:bg-rose-950/30 rounded-lg">
                      <lucide-icon
                        [img]="Layers"
                        class="w-6 h-6 text-rose-600 dark:text-rose-400"
                      ></lucide-icon>
                    </div>
                    <h2 class="text-2xl font-bold text-slate-900 dark:text-white">The Challenge</h2>
                  </div>
                  <div
                    class="prose prose-lg prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400"
                  >
                    <p>{{ study.challenge }}</p>
                  </div>
                </section>

                <!-- Solution -->
                <section>
                  <div class="flex items-center gap-3 mb-6">
                    <div class="p-2 bg-indigo-50 dark:bg-indigo-950/30 rounded-lg">
                      <lucide-icon
                        [img]="Globe"
                        class="w-6 h-6 text-indigo-600 dark:text-indigo-400"
                      ></lucide-icon>
                    </div>
                    <h2 class="text-2xl font-bold text-slate-900 dark:text-white">The Solution</h2>
                  </div>
                  <div
                    class="prose prose-lg prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400"
                  >
                    <p>{{ study.solution }}</p>
                  </div>
                </section>

                <!-- Technical Deep Dive (Featured Box) -->
                <section
                  class="relative overflow-hidden rounded-2xl bg-slate-900 dark:bg-slate-900 border border-slate-800 p-8 shadow-xl"
                >
                  <div class="absolute top-0 right-0 p-3 opacity-10">
                    <lucide-icon [img]="Cpu" class="w-32 h-32 text-indigo-500"></lucide-icon>
                  </div>

                  <h3
                    class="relative text-lg font-semibold text-white mb-4 flex items-center gap-2"
                  >
                    <lucide-icon [img]="Cpu" class="w-5 h-5 text-indigo-400"></lucide-icon>
                    Technical Architecture
                  </h3>

                  <div class="relative text-slate-300 leading-relaxed">
                    @if (study.technicalApproach) {
                      {{ study.technicalApproach }}
                    } @else {
                      Built with modern Angular architecture leveraging Signals for granular
                      reactivity. The state management strategy ensures type-safe, predictable data
                      flow while maintaining exceptional runtime performance.
                    }
                  </div>
                </section>
              </div>

              <!-- Right Column: Sidebar (Sticky) -->
              <div class="lg:col-span-4">
                <div class="sticky top-24 space-y-8">
                  <!-- Actions Card -->
                  <div
                    class="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-sm"
                  >
                    <h3
                      class="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-6"
                    >
                      Project Links
                    </h3>
                    <div class="flex flex-col gap-3">
                      @if (study.demoUrl) {
                        <a
                          [href]="study.demoUrl"
                          target="_blank"
                          class="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all"
                        >
                          View Live Site
                          <lucide-icon [img]="ExternalLink" class="w-4 h-4"></lucide-icon>
                        </a>
                      }
                      @if (study.repoUrl) {
                        <a
                          [href]="study.repoUrl"
                          target="_blank"
                          class="flex w-full items-center justify-center gap-2 rounded-lg bg-white dark:bg-slate-800 px-4 py-3 text-sm font-semibold text-slate-900 dark:text-white ring-1 ring-inset ring-slate-300 dark:ring-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
                        >
                          <lucide-icon [img]="Github" class="w-4 h-4"></lucide-icon>
                          View Source Code
                        </a>
                      }
                    </div>
                  </div>

                  <!-- Key Outcomes Card -->
                  <div
                    class="rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/50 p-6"
                  >
                    <h3
                      class="flex items-center gap-2 text-sm font-semibold text-emerald-900 dark:text-emerald-400 uppercase tracking-wider mb-6"
                    >
                      <lucide-icon [img]="Trophy" class="w-4 h-4"></lucide-icon>
                      Key Outcomes
                    </h3>
                    <ul class="space-y-4">
                      @for (result of study.results; track result) {
                        <li class="flex gap-3">
                          <lucide-icon
                            [img]="CheckCircle2"
                            class="w-5 h-5 text-emerald-600 dark:text-emerald-500 shrink-0"
                          ></lucide-icon>
                          <span class="text-sm text-slate-700 dark:text-slate-300">{{
                            result
                          }}</span>
                        </li>
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <!-- Bottom Navigation -->
            <div class="mt-24 border-t border-slate-200 dark:border-slate-800 pt-12">
              <a
                [routerLink]="'/work'"
                class="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:gap-3 transition-all"
              >
                <lucide-icon [img]="ArrowLeft" class="w-4 h-4"></lucide-icon>
                View Other Projects
              </a>
            </div>
          </div>
        </main>
      </div>
    }
  `,
})
export class CaseStudyPage {
  store = inject(PortfolioStore);
  seo = inject(SeoService);

  // Input from router parameter
  slug = input.required<string>();

  caseStudy = computed(() => {
    return this.store.caseStudies().find((c) => c.id === this.slug());
  });

  constructor() {
    effect(() => {
      const study = this.caseStudy();
      if (study) {
        this.seo.updateSeo({
          title: study.title,
          description: study.challenge.substring(0, 150) + '...', // Create a meta description from component data
          image: study.heroImage,
          url: '/work/' + study.id,
          keywords: study.techStack,
        });

        // Structured Data for Portfolio/Project
        this.seo.setJsonLd({
          '@context': 'https://schema.org',
          '@type': 'CreativeWork', // Or 'SoftwareSourceCode' if open source
          name: study.title,
          headline: study.title,
          image: study.heroImage
            ? [`https://www.karol-modelski.scale-sail.io${study.heroImage}`]
            : [],
          author: {
            '@type': 'Person',
            name: 'Karol Modelski',
          },
          keywords: study.techStack.join(', '),
          description: study.challenge,
          discussionUrl: study.repoUrl,
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://www.karol-modelski.scale-sail.io/work/${study.id}`,
          },
        });
      }
    });
  }

  readonly ArrowLeft = ArrowLeft;
  readonly ExternalLink = ExternalLink;
  readonly Trophy = Trophy;
  readonly Cpu = Cpu;
  readonly Github = Github;
  readonly CheckCircle2 = CheckCircle2;
  readonly Layers = Layers;
  readonly Globe = Globe;
}
