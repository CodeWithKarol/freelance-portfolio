import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioStore } from '../../../../core/portfolio/portfolio-store';
import { SectionHeader } from '../../../../shared/ui/section-header/section-header';

@Component({
  selector: 'app-faq-section',
  standalone: true,
  imports: [CommonModule, SectionHeader],
  template: `
    <section
      id="faq"
      class="section-padding bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800"
    >
      <div class="layout-container max-w-3xl">
        <app-section-header
          title="FAQ"
          subtitle="Common questions about how I work."
          alignment="center"
          class="mb-16 block"
        />

        <div class="space-y-4">
          @for (faq of store.faqs(); track faq.question) {
            <div
              class="group border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden transition-all duration-300 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50 dark:bg-slate-900/50"
            >
              <details class="group/details">
                <summary
                  class="flex items-center justify-between p-6 cursor-pointer list-none select-none text-left"
                >
                  <h3
                    class="font-mono text-sm md:text-base font-bold text-slate-900 dark:text-white pr-6 group-hover/details:text-primary transition-colors"
                  >
                    {{ faq.question }}
                  </h3>
                  <span
                    class="flex-shrink-0 ml-4 text-slate-400 dark:text-slate-500 group-open/details:rotate-180 transition-transform duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </summary>
                <div
                  class="px-6 pb-6 text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-800/50 pt-4 font-sans"
                >
                  {{ faq.answer }}
                </div>
              </details>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqSection {
  readonly store = inject(PortfolioStore);
}
