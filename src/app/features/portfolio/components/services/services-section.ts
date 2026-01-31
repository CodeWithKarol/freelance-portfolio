import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { PortfolioStore } from '@core/portfolio/portfolio-store';
import {
  LucideAngularModule,
  ArrowRightLeft,
  CodeXml,
  Zap,
  Landmark,
  Users,
  Rocket,
} from 'lucide-angular';
import { SectionHeader } from '@shared/ui/section-header/section-header';
import { Card } from '@shared/ui/card/card';
import { Badge } from '@shared/ui/badge/badge';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-section',
  imports: [CommonModule, LucideAngularModule, SectionHeader, Card, Badge],
  template: `
    <section id="services" class="section-padding bg-slate-50 dark:bg-slate-950 overflow-hidden">
      <div class="layout-container">
        <app-section-header
          subtitle="What I Deliver"
          title="Bank-Grade Engineering. Startup-Speed Delivery."
          description="For enterprise teams and ambitious startups, I modernize legacy frontends, fix performance bottlenecks, and build modular Angular systems that stay maintainable as your product grows. Clear outcomes, measurable wins, and audit-ready quality."
        />

        <ul class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 list-none p-0">
          @for (service of store.services().slice(0, 3); track service.title) {
            <li class="h-full">
              <app-card
                variant="default"
                [interactive]="true"
                class="h-full flex flex-col overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
              >
                <!-- Image Header -->
                <div class="h-48 overflow-hidden relative">
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-80"
                  ></div>
                  <img
                    [src]="getServiceImage(service.icon)"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    alt=""
                  />
                  <div class="absolute bottom-4 left-4 z-20">
                    <div
                      class="inline-flex items-center justify-center p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-white"
                    >
                      <!-- Icon rendering based on service.icon -->
                      @if (service.icon === 'migration') {
                        <lucide-icon [img]="ArrowRightLeft" class="h-6 w-6"></lucide-icon>
                      } @else if (service.icon === 'code') {
                        <lucide-icon [img]="CodeXml" class="h-6 w-6"></lucide-icon>
                      } @else if (service.icon === 'performance') {
                        <lucide-icon [img]="Zap" class="h-6 w-6"></lucide-icon>
                      }
                    </div>
                  </div>
                </div>

                <div class="p-6 flex flex-col flex-1">
                  <h3 class="heading-3 mb-2">
                    {{ service.title }}
                  </h3>
                  <p class="text-small mb-4 flex-1">
                    {{ service.description }}
                  </p>

                  @if (service.metric) {
                    <div class="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                      <p class="flex items-baseline gap-2">
                        <span class="text-2xl font-bold text-primary dark:text-primary-400">{{
                          service.metric.value
                        }}</span>
                        <span
                          class="text-xs font-medium text-secondary/60 dark:text-slate-500 uppercase tracking-wider"
                          >{{ service.metric.label }}</span
                        >
                      </p>
                    </div>
                  }
                  @if (service.features) {
                    <div class="mt-4 flex flex-wrap gap-2">
                      @for (feature of service.features.slice(0, 3); track feature) {
                        <app-badge variant="soft" color="primary">
                          {{ feature }}
                        </app-badge>
                      }
                    </div>
                  }
                </div>
              </app-card>
            </li>
          }
        </ul>

        <ul class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto list-none p-0">
          @for (service of store.services().slice(3); track service.title) {
            <li>
              <app-card
                variant="default"
                [interactive]="true"
                class="h-full flex flex-col md:flex-row overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
              >
                <!-- Side Image -->
                <div class="md:w-2/5 relative h-48 md:h-auto overflow-hidden">
                  <div
                    class="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-300 z-10"
                  ></div>
                  <img
                    [src]="getServiceImage(service.icon)"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    alt=""
                  />
                </div>

                <div class="p-6 md:w-3/5 flex flex-col justify-center">
                  <div class="flex items-center gap-3 mb-3">
                    <div class="p-1.5 rounded-lg bg-primary/10 text-primary dark:text-primary-400">
                      @if (service.icon === 'architecture') {
                        <lucide-icon [img]="Landmark" class="h-5 w-5"></lucide-icon>
                      } @else if (service.icon === 'leadership') {
                        <lucide-icon [img]="Users" class="h-5 w-5"></lucide-icon>
                      } @else if (service.icon === 'feature') {
                        <lucide-icon [img]="Rocket" class="h-5 w-5"></lucide-icon>
                      }
                    </div>
                    <h3 class="text-lg font-bold text-secondary dark:text-white">
                      {{ service.title }}
                    </h3>
                  </div>
                  <p class="text-small mb-4">
                    {{ service.description }}
                  </p>

                  @if (service.features) {
                    <div class="flex flex-wrap gap-2 mt-auto">
                      @for (feature of service.features; track feature) {
                        <app-badge variant="outline" color="neutral">
                          {{ feature }}
                        </app-badge>
                      }
                    </div>
                  }
                </div>
              </app-card>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesSection {
  readonly store = inject(PortfolioStore);

  readonly ArrowRightLeft = ArrowRightLeft;
  readonly CodeXml = CodeXml;
  readonly Zap = Zap;
  readonly Landmark = Landmark;
  readonly Users = Users;
  readonly Rocket = Rocket;

  getServiceImage(icon: string): string {
    const images: Record<string, string> = {
      migration:
        'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800', // Code screen
      code: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800', // Analytics/Dashboard
      performance:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800', // Charts
      architecture:
        'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800', // Blueprint/Draft
      feature:
        'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800', // Modern collaborative working/shipping
      leadership:
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800', // Team
    };
    return (
      images[icon] ||
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800'
    );
  }
}
