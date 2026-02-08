import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioStore } from '../../../../core/portfolio/portfolio-store';
import { SectionHeader } from '../../../../shared/ui/section-header/section-header';
import { Card } from '../../../../shared/ui/card/card';
import { Button } from '../../../../shared/ui/button/button';

@Component({
  selector: 'app-gigs-section',
  standalone: true,
  imports: [CommonModule, SectionHeader, Card, Button],
  template: `
    <section
      id="gigs"
      class="section-padding bg-white dark:bg-slate-950 relative overflow-hidden border-b border-slate-200 dark:border-slate-800"
    >
      <!-- Background Pattern -->
      <div class="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>

      <div class="layout-container relative z-10">
        <app-section-header
          title="The Micro-Engagement Menu"
          subtitle="Surgical interventions for your most critical issues. Don't hire a full-time employee for a one-time problem."
          alignment="center"
          class="mb-16 block"
        />

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          @for (gig of store.gigs(); track gig.title) {
            <app-card
              class="flex flex-col h-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg group"
              variant="default"
              [interactive]="true"
            >
              <div class="p-6 flex flex-col flex-grow">
                <!-- Icon Header -->
                <div
                  class="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-primary group-hover:scale-110 transition-transform duration-300 shadow-sm"
                >
                  @switch (gig.icon) {
                    @case ('code') {
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                      </svg>
                    }
                    @case ('performance') {
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M12 2v4"></path>
                        <path d="m16.2 7.8 2.9-2.9"></path>
                        <path d="M18 12h4"></path>
                        <path d="m16.2 16.2 2.9 2.9"></path>
                        <path d="M12 18v4"></path>
                        <path d="m4.9 19.1 2.9-2.9"></path>
                        <path d="M2 12h4"></path>
                        <path d="m4.9 4.9 2.9 2.9"></path>
                      </svg>
                    }
                    @case ('component') {
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"
                        ></path>
                      </svg>
                    }
                    @case ('consulting') {
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                        ></path>
                      </svg>
                    }
                  }
                </div>

                <h3
                  class="font-mono text-lg font-bold mb-3 text-slate-900 dark:text-white leading-tight uppercase tracking-tight"
                >
                  {{ gig.title }}
                </h3>
                <p
                  class="text-sm text-slate-600 dark:text-slate-400 mb-6 flex-grow leading-relaxed font-sans"
                >
                  {{ gig.description }}
                </p>

                <!-- Features List -->
                <ul class="space-y-3 mb-8 border-t border-slate-200 dark:border-slate-800 pt-6">
                  @for (feature of gig.features; track feature) {
                    <li
                      class="flex items-start text-xs font-mono text-slate-600 dark:text-slate-400"
                    >
                      <svg
                        class="w-4 h-4 mr-2 text-primary shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {{ feature }}
                    </li>
                  }
                </ul>

                <div class="mt-auto">
                  <div class="text-lg font-mono font-bold text-primary mb-4 flex items-baseline">
                    {{ gig.price }}
                    <span class="text-xs text-slate-400 font-normal ml-2 opacity-60">/ FLAT</span>
                  </div>
                  <app-button
                    [href]="gig.ctaUrl"
                    variant="outline"
                    styleClass="w-full justify-center font-mono text-xs uppercase tracking-widest border-slate-300 dark:border-slate-700 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900"
                  >
                    Book Now
                  </app-button>
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
export class GigsSection {
  readonly store = inject(PortfolioStore);
}
