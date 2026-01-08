import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioStore } from '../../../../core/portfolio/portfolio-store';

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-24 sm:py-32 bg-slate-50 dark:bg-slate-900/50">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-xl text-center">
          <h2 class="text-base font-semibold leading-7 text-blue-600 dark:text-blue-500">
            Testimonials
          </h2>
          <p
            class="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl"
          >
            Trusted by Engineering Leaders
          </p>
        </div>

        <div class="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div class="-mt-8 sm:-mx-4 sm:columns-2 lg:columns-3 sm:gap-4">
            @for (test of testimonials(); track test.id) {
            <div class="pt-8 sm:inline-block sm:w-full sm:px-4">
              <figure
                class="rounded-2xl bg-white dark:bg-slate-900 p-8 text-sm leading-6 shadow-sm ring-1 ring-slate-900/5 dark:ring-slate-800 relative group hover:-translate-y-1 transition-transform duration-300 ease-in-out"
              >
                <!-- Quote Icon Backdrop (decorative) -->
                <div class="absolute top-6 right-8 text-slate-100 dark:text-slate-800">
                  <svg
                    class="h-12 w-12 transform group-hover:scale-110 transition-transform duration-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M14.017 21L14.017 18C14.017 16.0547 15.592 14.4793 17.5373 14.4793H19.0019C19.6897 14.4793 20.2473 13.9216 20.2473 13.2339V8.98603C20.2473 8.29828 19.6897 7.74063 19.0019 7.74063H15.0113C14.3236 7.74063 13.7659 7.18298 13.7659 6.49523V2.50458C13.7659 1.81683 14.3236 1.25918 15.0113 1.25918H19.0984C21.2588 1.25918 23.0105 3.01088 23.0105 5.17128V14.1569C23.0105 17.9288 19.9576 20.9841 16.1857 20.9841H14.017V21ZM5.51689 21L5.51689 18C5.51689 16.0547 7.09192 14.4793 9.03723 14.4793H10.5019C11.1896 14.4793 11.7473 13.9216 11.7473 13.2339V8.98603C11.7473 8.29828 11.1896 7.74063 10.5019 7.74063H6.51125C5.82351 7.74063 5.26586 7.18298 5.26586 6.49523V2.50458C5.26586 1.81683 5.82351 1.25918 6.51125 1.25918H10.5984C12.7588 1.25918 14.5105 3.01088 14.5105 5.17128V14.1569C14.5105 17.9288 11.4576 20.9841 7.68567 20.9841H5.51689V21Z"
                    />
                  </svg>
                </div>

                <blockquote class="text-slate-900 dark:text-slate-100 relative z-10">
                  <p class="leading-relaxed">“{{ test.quote }}”</p>
                </blockquote>
                <figcaption class="mt-6 flex items-center gap-x-4">
                  <!-- Placeholder Avatar with Initials -->
                  <div
                    class="h-10 w-10 flex-none rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center ring-1 ring-slate-200 dark:ring-slate-700"
                  >
                    <span class="font-bold text-slate-500 dark:text-slate-400 text-xs">{{
                      test.name.charAt(0)
                    }}</span>
                  </div>
                  <div>
                    <div class="font-semibold text-slate-900 dark:text-slate-100">
                      {{ test.name }}
                    </div>
                    <div class="text-slate-600 dark:text-slate-400 text-xs">
                      {{ test.role }} @ {{ test.company }}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsSection {
  private portfolioStore = inject(PortfolioStore);
  testimonials = this.portfolioStore.testimonials;
}
