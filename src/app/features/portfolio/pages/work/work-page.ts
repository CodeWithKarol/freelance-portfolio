import {
  Component,
  ChangeDetectionStrategy,
  inject,
  computed,
  signal,
  effect,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioStore } from '@core/portfolio/portfolio-store';
import { SeoService } from '@shared/core/seo/seo.service';
import { Button } from '@shared/ui/button/button';
import { BackgroundPatternComponent } from '@shared/ui/background-pattern/background-pattern.component';
import { SectionHeader } from '@shared/ui/section-header/section-header';
import { ProjectCardComponent } from '../../components/ui/project-card/project-card.component';

@Component({
  selector: 'app-work-page',
  imports: [CommonModule, BackgroundPatternComponent, SectionHeader, ProjectCardComponent, Button],
  template: `
    <div
      class="min-h-screen bg-white dark:bg-slate-950 font-sans text-slate-900 dark:text-white pb-24 sm:pb-32 relative isolate"
    >
      <!-- Background Elements -->
      <app-background-pattern />

      <div class="layout-container pt-24 sm:pt-32">
        <!-- Header -->
        <app-section-header
          subtitle="Portfolio"
          title="Selected Work"
          description="Case studies focused on modernization, performance wins, and scalable architecture—built to reduce risk and deliver measurable outcomes."
        />

        <!-- Projects List -->
        <div class="mt-24 sm:mt-32">
          @if (hasProjects()) {
            <ul class="list-none p-0">
              @for (
                project of visibleProjects();
                track project.id;
                let i = $index;
                let last = $last
              ) {
                <li [class.mb-32]="!last" [class.lg:mb-40]="!last">
                  <app-project-card [project]="project" [reverseLayout]="i % 2 !== 0" />
                </li>
              }
            </ul>

            <!-- Load More -->
            @if (hasMoreProjects()) {
              <div class="mt-32 flex justify-center">
                <app-button variant="outline" size="lg" (click)="loadMore()">
                  Load more projects
                </app-button>
              </div>
            }
          } @else {
            <div class="text-center py-24">
              <p class="text-slate-500 dark:text-slate-400">Coming soon.</p>
            </div>
          }
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkPage {
  store = inject(PortfolioStore);
  private seoService = inject(SeoService);

  // State
  private readonly batchSize = 3;
  protected visibleCount = signal(4);

  // Derived
  hasProjects = computed(() => this.store.caseStudies().length > 0);

  visibleProjects = computed(() => {
    return this.store.caseStudies().slice(0, this.visibleCount());
  });

  hasMoreProjects = computed(() => {
    return this.visibleProjects().length < this.store.caseStudies().length;
  });

  constructor() {
    effect(() => {
      const projects = this.store.caseStudies();

      this.seoService.setPageMetadata({
        title: 'Angular Portfolio & Case Studies | Enterprise Architecture',
        description:
          'Explore real-world case studies of Angular migrations, performance optimization, and scalable "Smart Shell" architecture for enterprise applications.',
        slug: '/work',
        keywords: [
          'Angular Portfolio',
          'Case Studies',
          'Enterprise Angular',
          'System Architecture',
          'SaaS Development',
          'Frontend Modernization',
          'Angular Signals',
          'High Performance Dashboard',
        ],
      });

      this.seoService.setBreadcrumbs([
        { name: 'Home', path: '/' },
        { name: 'Work', path: '/work' },
      ]);

      this.seoService.setSchema({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'CollectionPage',
            name: 'Selected Work | Angular Portfolio',
            description:
              'Case studies focused on modernization, performance wins, and scalable architecture.',
            url: 'https://www.karol-modelski.scale-sail.io/work',
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: projects.map((project, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                item: {
                  '@type': 'Article',
                  url: `https://www.karol-modelski.scale-sail.io/work/${project.id}`,
                  name: project.title,
                  headline: project.title,
                  image: project.heroImage
                    ? [`https://www.karol-modelski.scale-sail.io${project.heroImage}`]
                    : [],
                  description: project.tagline,
                  author: {
                    '@type': 'Person',
                    name: 'Karol Modelski',
                    url: 'https://www.karol-modelski.scale-sail.io',
                  },
                },
              })),
            },
          },
        ],
      });
    });
  }

  loadMore() {
    this.visibleCount.update((c) => c + this.batchSize);
  }
}
