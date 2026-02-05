import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioStore } from '../../../../core/portfolio/portfolio-store';
import { SectionHeader } from '../../../../shared/ui/section-header/section-header';

@Component({
  selector: 'app-process-section',
  standalone: true,
  imports: [CommonModule, SectionHeader],
  template: `
    <section
      id="process"
      class="section-padding bg-slate-50 dark:bg-slate-950 relative border-b border-slate-200 dark:border-slate-800 overflow-hidden"
    >
      <div class="layout-container relative z-10">
        <app-section-header
          title="The 'Unblock' Protocol"
          subtitle="Zero friction. We align on goals once, then I execute."
          alignment="center"
          class="mb-16 block"
        />

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <!-- Connector Line (Desktop) -->
          <div
            class="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-slate-300 dark:bg-slate-800 -z-10 border-t border-dashed border-slate-300 dark:border-slate-800"
          ></div>

          @for (step of store.process(); track step.number) {
            <div class="flex flex-col items-center text-center relative group">
              <!-- Number Circle -->
              <div
                class="w-24 h-24 rounded-full bg-white dark:bg-slate-950 border-4 border-slate-200 dark:border-slate-800 flex items-center justify-center text-3xl font-mono font-bold text-slate-300 dark:text-slate-700 shadow-sm mb-8 relative z-10 group-hover:border-primary group-hover:text-primary transition-colors duration-300"
              >
                <span
                  class="absolute inset-0 rounded-full border border-white dark:border-slate-900 m-1"
                ></span>
                {{ step.number }}
              </div>

              <h3
                class="font-mono text-lg font-bold mb-4 text-slate-900 dark:text-white uppercase tracking-tight"
              >
                {{ step.title }}
              </h3>
              <p
                class="text-sm text-slate-600 dark:text-slate-400 max-w-xs leading-relaxed font-sans"
              >
                {{ step.description }}
              </p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProcessSection {
  readonly store = inject(PortfolioStore);
}
