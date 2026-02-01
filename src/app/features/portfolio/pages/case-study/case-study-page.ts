import { Component, inject, computed, input, effect, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PortfolioStore } from '@core/portfolio/portfolio-store';
import { SeoService } from '@shared/core/seo/seo.service';
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
import { ProjectScreenshotsComponent } from '../../components/ui/project-screenshots/project-screenshots.component';
import { Badge } from '@shared/ui/badge/badge';
import { Button } from '@shared/ui/button/button';
import { BackgroundPatternComponent } from '@shared/ui/background-pattern/background-pattern.component';

@Component({
  selector: 'app-case-study-page',
  imports: [
    CommonModule,
    RouterLink,
    LucideAngularModule,
    ProjectScreenshotsComponent,
    Badge,
    Button,
    BackgroundPatternComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (caseStudy(); as study) {
      <!-- Main wrapper -->
      <div
        class="relative min-h-screen bg-white dark:bg-slate-950 font-sans selection:bg-indigo-500/30"
      >
        <!-- Navbar -->
        <nav
          class="sticky top-0 z-50 w-full border-b border-slate-200/60 dark:border-slate-800/60 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md"
        >
          <div class="layout-container h-16 flex items-center justify-between">
            <app-button variant="ghost" [route]="['/work']" class="gap-2">
              <lucide-icon [img]="ArrowLeft" class="h-4 w-4 mr-2" />
              <span class="hidden sm:inline">Back to Work</span>
            </app-button>

            <div class="flex items-center gap-3">
              @if (study.repoUrl) {
                <app-button
                  variant="ghost"
                  [href]="study.repoUrl"
                  class="!p-2"
                  aria-label="View Source"
                >
                  <lucide-icon [img]="Github" class="h-5 w-5" />
                </app-button>
              }
              @if (study.demoUrl) {
                <app-button variant="outline" size="sm" [href]="study.demoUrl">
                  <span>Visit Site</span>
                  <lucide-icon [img]="ExternalLink" class="ml-2 h-4 w-4" />
                </app-button>
              }
            </div>
          </div>
        </nav>

        <main>
          <!-- Hero Section -->
          <section class="relative pt-20 pb-32 overflow-hidden">
            <!-- Background Texture -->
            <app-background-pattern variant="hero" />

            <div class="layout-container text-center">
              <div
                class="flex justify-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700"
              >
                <app-badge variant="soft" color="primary">Case Study</app-badge>
              </div>
              <h1
                class="heading-1 text-balance mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100"
              >
                {{ study.title }}
              </h1>
              <p
                class="text-balance max-w-2xl mx-auto text-lg leading-8 text-secondary/80 dark:text-slate-400 mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200"
              >
                {{ study.tagline }}
              </p>

              <!-- Tech Stack Strip -->
              <div
                class="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300"
              >
                @for (tech of study.techStack; track tech) {
                  <app-badge variant="soft" color="neutral">{{ tech }}</app-badge>
                }
              </div>
            </div>
          </section>

          <!-- Main Visual (Overlapping) -->
          <div
            class="relative z-10 -mt-20 layout-container mb-24 animate-in fade-in zoom-in-95 duration-1000 delay-300"
          >
            <div
              class="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900 ring-1 ring-slate-900/10 dark:ring-white/10 aspect-[16/9] md:aspect-[21/9]"
            >
              <img
                [src]="study.heroImage"
                [alt]="study.title"
                class="w-full h-full object-cover object-top"
              />
              <div
                class="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.2)] pointer-events-none"
              ></div>
            </div>
          </div>

          <!-- Content Grid -->
          <div class="layout-container mb-24">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <!-- Left: Narrative -->
              <div class="lg:col-span-8 space-y-20">
                <!-- Challenge -->
                <section class="group">
                  <div class="flex items-center gap-4 mb-6">
                    <span
                      class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white shadow-md group-hover:bg-primary/90 transition-colors"
                    >
                      <lucide-icon [img]="Layers" class="h-5 w-5"></lucide-icon>
                    </span>
                    <h2 class="heading-3">The Challenge</h2>
                  </div>
                  <div
                    class="prose prose-lg prose-slate dark:prose-invert max-w-none text-secondary/80 dark:text-slate-400"
                  >
                    <p>{{ study.challenge }}</p>
                  </div>
                </section>

                <!-- Solution -->
                <section class="group">
                  <div class="flex items-center gap-4 mb-6">
                    <span
                      class="flex h-10 w-10 items-center justify-center rounded-lg bg-success text-white shadow-md group-hover:bg-success/90 transition-colors"
                    >
                      <lucide-icon [img]="Globe" class="h-5 w-5"></lucide-icon>
                    </span>
                    <h2 class="heading-3">The Solution</h2>
                  </div>
                  <div
                    class="prose prose-lg prose-slate dark:prose-invert max-w-none text-secondary/80 dark:text-slate-400"
                  >
                    <p>{{ study.solution }}</p>
                  </div>
                </section>
              </div>

              <!-- Right: Key Outcomes (Sticky) -->
              <div class="lg:col-span-4">
                <div class="sticky top-28">
                  <div class="card p-8 bg-slate-50 dark:bg-slate-900">
                    <h3
                      class="text-base font-semibold leading-7 text-primary dark:text-blue-400 mb-6 flex items-center gap-2"
                    >
                      <lucide-icon [img]="Trophy" class="h-5 w-5"></lucide-icon>
                      Key Outcomes
                    </h3>
                    <ul class="space-y-6">
                      @for (result of study.results; track result) {
                        <li class="relative pl-9">
                          <div
                            class="absolute left-0 top-1 h-5 w-5 text-success dark:text-emerald-400"
                          >
                            <lucide-icon [img]="CheckCircle2" class="h-5 w-5"></lucide-icon>
                          </div>
                          <span
                            class="text-sm leading-6 text-slate-600 dark:text-slate-300 font-medium"
                            >{{ result }}</span
                          >
                        </li>
                      }
                    </ul>

                    <div
                      class="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3"
                    >
                      <p class="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                        Technologies
                      </p>
                      <div class="flex flex-wrap gap-2">
                        @for (tech of study.techStack; track tech) {
                          <app-badge
                            variant="outline"
                            color="neutral"
                            class="bg-white dark:bg-slate-800"
                          >
                            {{ tech }}
                          </app-badge>
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Application Interface (Screenshots) -->
          @if (study.screenshots?.length) {
            <app-project-screenshots [screenshots]="study.screenshots!" />
          }

          <!-- Technical Architecture (Dark Section) -->
          <section class="bg-slate-900 py-24 relative overflow-hidden">
            <!-- Decorative elements -->
            <div
              class="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"
            ></div>
            <div
              class="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
            ></div>

            <div class="relative layout-container">
              <div class="max-w-3xl">
                <div
                  class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary-300 text-xs font-semibold mb-6 border border-primary/20"
                >
                  <lucide-icon [img]="Cpu" class="h-3.5 w-3.5"></lucide-icon>
                  Under The Hood
                </div>
                <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                  Technical Architecture
                </h2>
                <div class="prose prose-lg prose-invert text-slate-300 max-w-none">
                  @if (study.technicalApproach) {
                    {{ study.technicalApproach }}
                  } @else {
                    Built with modern Angular architecture leveraging Signals for granular
                    reactivity. The state management strategy ensures type-safe, predictable data
                    flow while maintaining exceptional runtime performance.
                  }
                </div>
              </div>
            </div>
          </section>

          <!-- Footer/Next Steps -->
          <section class="py-24 bg-white dark:bg-slate-950">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 class="heading-2 mb-8">Ready to see more?</h2>
              <app-button variant="secondary" size="lg" [route]="['/work']">
                <lucide-icon [img]="ArrowLeft" class="h-5 w-5 mr-2"></lucide-icon>
                Back to All Projects
              </app-button>
            </div>
          </section>
        </main>
      </div>
    }
  `,
})
export class CaseStudyPage {
  store = inject(PortfolioStore);
  private seoService = inject(SeoService);

  // Input from router parameter
  slug = input.required<string>();

  caseStudy = computed(() => {
    return this.store.caseStudies().find((c) => c.id === this.slug());
  });

  constructor() {
    effect(() => {
      const study = this.caseStudy();
      if (!study) return;

      this.seoService.setPageMetadata({
        title: `${study.title} | Angular Case Study`,
        description: study.challenge.substring(0, 160) + '...',
        image: study.heroImage,
        slug: `/work/${study.id}`,
        keywords: [
          ...study.techStack,
          'Angular Case Study',
          'Frontend Architecture',
          'Web Development',
          'Enterprise Application',
        ],
        type: 'article',
      });

      this.seoService.setBreadcrumbs([
        { name: 'Home', path: '/' },
        { name: 'Work', path: '/work' },
        { name: study.title, path: `/work/${study.id}` },
      ]);

      this.seoService.setSchema({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Article',
            headline: study.title,
            name: study.title,
            image: study.heroImage
              ? [`https://www.karol-modelski.scale-sail.io${study.heroImage}`]
              : [],
            author: {
              '@type': 'Person',
              name: 'Karol Modelski',
              url: 'https://www.karol-modelski.scale-sail.io',
            },
            keywords: study.techStack.join(', '),
            description: study.challenge,
            isPartOf: {
              '@id': 'https://www.karol-modelski.scale-sail.io/#website',
            },
            datePublished: new Date('2024-01-01T08:00:00+00:00').toISOString(),
            dateModified: new Date('2026-01-20T08:00:00+00:00').toISOString(),
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://www.karol-modelski.scale-sail.io/work/${study.id}`,
            },
          },
        ],
      });
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
