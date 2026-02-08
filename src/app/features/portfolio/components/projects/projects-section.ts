import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioStore } from '../../../../core/portfolio/portfolio-store';
import { SectionHeader } from '../../../../shared/ui/section-header/section-header';
import { Card } from '../../../../shared/ui/card/card';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule, SectionHeader, Card],
  template: `
    <section
      id="projects"
      class="section-padding bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 depth-groove"
    >
      <div class="layout-container">
        <app-section-header
          title="Selected Work"
          subtitle="Recent projects demonstrating technical expertise and attention to detail."
          alignment="center"
          class="mb-16 block"
        />

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (project of store.projects(); track project.title) {
            <app-card
              class="group h-full flex flex-col overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              <!-- Image Container -->
              <div
                class="relative h-48 w-full overflow-hidden bg-slate-200 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-800"
              >
                <img
                  [src]="project.thumbnailUrl"
                  alt="{{ project.title }} preview"
                  class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <!-- Overlay -->
                <div
                  class="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300"
                ></div>
              </div>

              <div class="p-6 flex flex-col flex-grow">
                <h3
                  class="font-mono text-lg font-bold mb-2 text-slate-900 dark:text-white group-hover:text-primary transition-colors uppercase tracking-tight"
                >
                  {{ project.title }}
                </h3>

                <p
                  class="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2 flex-grow leading-relaxed font-sans"
                >
                  {{ project.description }}
                </p>

                <div class="flex flex-wrap gap-2 mb-6">
                  @for (tag of project.tags; track tag) {
                    <span
                      class="px-2 py-1 text-[10px] font-mono uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {{ tag }}
                    </span>
                  }
                </div>

                <div
                  class="flex gap-3 mt-auto pt-4 border-t border-slate-100 dark:border-slate-800"
                >
                  @if (project.liveUrl) {
                    <a
                      [href]="project.liveUrl"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex-1 inline-flex items-center justify-center px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider bg-primary text-white hover:bg-primary-600 transition-colors rounded-sm"
                    >
                      Live Demo
                    </a>
                  }
                  @if (project.githubUrl) {
                    <a
                      [href]="project.githubUrl"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex-1 inline-flex items-center justify-center px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors rounded-sm"
                    >
                      Code
                    </a>
                  }
                </div>
              </div>
            </app-card>
          }
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsSection {
  readonly store = inject(PortfolioStore);
}
