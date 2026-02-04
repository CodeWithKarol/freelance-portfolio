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
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-section',
  imports: [CommonModule, LucideAngularModule, SectionHeader],
  template: `
    <section
      id="services"
      class="section-padding bg-white dark:bg-slate-950 relative overflow-hidden"
    >
      <!-- Grid Background -->
      <div class="absolute inset-0 grid-bg opacity-50 pointer-events-none"></div>

      <div class="layout-container relative z-10">
        <app-section-header
          subtitle="CAPABILITIES"
          title="ENGINEERING SERVICES"
          description="Specialized interventions for complex Angular systems. From architectural rescue to greenfield scalability."
        />

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (service of store.services(); track service.title) {
            <div
              class="group relative flex flex-col h-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-colors duration-300"
            >
              <!-- Technical Header -->
              <div
                class="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950"
              >
                <span class="font-mono text-xs text-slate-400 uppercase tracking-wider"
                  >MOD-{{ service.title.substring(0, 3).toUpperCase() }}</span
                >
                <div class="h-1.5 w-1.5 rounded-full bg-green-500"></div>
              </div>

              <div class="p-6 flex-1 flex flex-col">
                <!-- Icon Area -->
                <div
                  class="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-none bg-primary/10 text-primary border border-primary/20"
                >
                  @if (service.icon === 'migration') {
                    <lucide-icon [img]="ArrowRightLeft" class="h-6 w-6"></lucide-icon>
                  } @else if (service.icon === 'code') {
                    <lucide-icon [img]="CodeXml" class="h-6 w-6"></lucide-icon>
                  } @else if (service.icon === 'performance') {
                    <lucide-icon [img]="Zap" class="h-6 w-6"></lucide-icon>
                  } @else if (service.icon === 'architecture') {
                    <lucide-icon [img]="Landmark" class="h-6 w-6"></lucide-icon>
                  } @else if (service.icon === 'leadership') {
                    <lucide-icon [img]="Users" class="h-6 w-6"></lucide-icon>
                  } @else if (service.icon === 'feature') {
                    <lucide-icon [img]="Rocket" class="h-6 w-6"></lucide-icon>
                  }
                </div>

                <h3
                  class="font-mono text-lg font-bold text-slate-900 dark:text-white mb-3 uppercase"
                >
                  {{ service.title }}
                </h3>

                <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-1">
                  {{ service.description }}
                </p>

                <!-- Footer / Metrics -->
                @if (service.metric) {
                  <div
                    class="mt-auto pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between"
                  >
                    <span class="text-xs font-mono text-slate-500 uppercase">{{
                      service.metric.label
                    }}</span>
                    <span class="font-mono font-bold text-primary">{{ service.metric.value }}</span>
                  </div>
                } @else if (service.features) {
                  <div class="mt-auto pt-4 border-t border-slate-200 dark:border-slate-800">
                    <div class="flex flex-wrap gap-2">
                      @for (feature of service.features.slice(0, 2); track feature) {
                        <span
                          class="inline-flex items-center px-2 py-1 bg-slate-200 dark:bg-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300"
                        >
                          {{ feature }}
                        </span>
                      }
                    </div>
                  </div>
                }
              </div>

              <!-- Corner Accent -->
              <div
                class="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity"
              ></div>
            </div>
          }
        </div>
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
}
