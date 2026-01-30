import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioStore } from '../../../../core/portfolio/portfolio-store';
import { LucideAngularModule, Download } from 'lucide-angular';
import { SectionHeader } from '../../../../shared/ui/section-header/section-header';
import { Card } from '../../../../shared/ui/card/card';
import { Badge } from '../../../../shared/ui/badge/badge';
import { Button } from '../../../../shared/ui/button/button';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, SectionHeader, Card, Badge, Button],
  template: `
    <section
      id="experience"
      class="section-padding bg-white dark:bg-slate-950 relative overflow-hidden"
    >
      <!-- Background subtle pattern -->
      <div
        class="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style="background-image: radial-gradient(#6366f1 1px, transparent 1px); background-size: 32px 32px;"
      ></div>

      <div class="layout-container">
        <!-- Section Header -->
        <div class="mx-auto max-w-2xl text-center mb-16 lg:mb-24">
          <app-section-header
            subtitle="Work History"
            title="Professional Experience"
            description="Delivering modernization and performance improvements at scale—from regulated enterprise platforms to high-velocity product teams."
          />
        </div>

        <div class="lg:grid lg:grid-cols-12 lg:gap-16">
          <!-- Sticky Header / Left Side -->
          <div
            class="lg:col-span-5 lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] flex flex-col mb-16 lg:mb-0"
          >
            <div
              class="relative rounded-3xl overflow-hidden aspect-[4/5] lg:aspect-auto lg:flex-1 shadow-2xl ring-1 ring-slate-900/10 group"
            >
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
                alt="Modern Architecture"
                class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"
              ></div>

              <div class="absolute bottom-0 left-0 p-8 text-white z-10">
                <p class="heading-2 !text-white mb-4">Built for Scale</p>
                <p class="text-lg text-slate-300 leading-relaxed mb-8">
                  Combining architectural rigor with product velocity.
                </p>

                <div>
                  <app-button
                    href="https://drive.google.com/file/d/1ZAtoLBrbP-suftqfzVAdJD2welSEzoVR/view?usp=sharing"
                    variant="ghost"
                    styleClass="bg-white text-secondary hover:bg-slate-100 border-none w-full sm:w-auto justify-center"
                  >
                    <lucide-icon [img]="Download" class="h-4 w-4 mr-2"></lucide-icon>
                    Download Resume
                  </app-button>
                </div>
              </div>
            </div>
          </div>

          <!-- Scrolling Timeline / Right Side -->
          <div class="lg:col-span-7">
            <div class="relative pl-8 sm:pl-12">
              <!-- Continuous Line -->
              <div
                class="absolute left-[7px] top-9 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800"
              ></div>

              <ul class="space-y-12 list-none p-0">
                @for (
                  job of store.experience();
                  track job.company;
                  let first = $first;
                  let last = $last
                ) {
                  <li class="relative group">
                    <!-- Timeline Dot -->
                    <div
                      class="absolute -left-8 sm:-left-12 top-9 h-4 w-4 rounded-full border-2 border-white dark:border-slate-950 transition-all duration-300 z-10"
                      [class.bg-primary]="first"
                      [class.bg-slate-300]="!first"
                      [class.dark:bg-slate-700]="!first"
                      [class.scale-125]="first"
                      [class.ring-4]="first"
                      [class.ring-primary-100]="first"
                      [class.dark:ring-primary-900/30]="first"
                    ></div>

                    <!-- Card -->
                    <app-card
                      variant="default"
                      [interactive]="true"
                      class="block bg-slate-50 dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-800"
                    >
                      <!-- Date Badge (Mobile: Above, Desktop: Absolute corner or inline) -->
                      <div
                        class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4"
                      >
                        <div class="flex items-center gap-3">
                          <!-- Company Logo Placeholder -->
                          <div
                            class="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-white dark:bg-slate-800 ring-1 ring-slate-200 dark:ring-slate-700 text-secondary dark:text-white font-bold"
                          >
                            {{ job.company.charAt(0) }}
                          </div>
                          <div>
                            <h3 class="text-lg font-bold text-secondary dark:text-white">
                              {{ job.role }}
                            </h3>
                            <p class="text-small font-medium">
                              {{ job.company }}
                            </p>
                          </div>
                        </div>

                        <app-badge variant="outline" color="neutral">
                          {{ job.period }}
                        </app-badge>
                      </div>

                      <p class="text-body mb-6">
                        {{ job.description }}
                      </p>

                      <!-- Tags -->
                      <div class="flex flex-wrap gap-2">
                        @for (tech of job.technologies; track tech) {
                          <app-badge variant="soft" color="primary">
                            {{ tech }}
                          </app-badge>
                        }
                      </div>
                    </app-card>
                  </li>
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceSection {
  readonly store = inject(PortfolioStore);
  readonly Download = Download;
}
