import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { PortfolioStore } from '../../../../core/portfolio/portfolio-store';

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  imports: [],
  template: `
    <section
      class="py-20 bg-indigo-700 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
            Trusted by Technical Leaders
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          @for (test of testimonials(); track test.id) {
          <div class="bg-white rounded-2xl p-8 shadow-xl relative">
            <div class="absolute -top-4 -left-4 bg-indigo-500 rounded-full p-3 shadow-lg">
              <svg class="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M14.017 21L14.017 18C14.017 16.0547 15.592 14.4793 17.5373 14.4793H19.0019C19.6897 14.4793 20.2473 13.9216 20.2473 13.2339V8.98603C20.2473 8.29828 19.6897 7.74063 19.0019 7.74063H15.0113C14.3236 7.74063 13.7659 7.18298 13.7659 6.49523V2.50458C13.7659 1.81683 14.3236 1.25918 15.0113 1.25918H19.0984C21.2588 1.25918 23.0105 3.01088 23.0105 5.17128V14.1569C23.0105 17.9288 19.9576 20.9841 16.1857 20.9841H14.017V21ZM5.51689 21L5.51689 18C5.51689 16.0547 7.09192 14.4793 9.03723 14.4793H10.5019C11.1896 14.4793 11.7473 13.9216 11.7473 13.2339V8.98603C11.7473 8.29828 11.1896 7.74063 10.5019 7.74063H6.51125C5.82351 7.74063 5.26586 7.18298 5.26586 6.49523V2.50458C5.26586 1.81683 5.82351 1.25918 6.51125 1.25918H10.5984C12.7588 1.25918 14.5105 3.01088 14.5105 5.17128V14.1569C14.5105 17.9288 11.4576 20.9841 7.68567 20.9841H5.51689V21Z"
                />
              </svg>
            </div>
            <p class="text-gray-600 text-lg italic mb-6">"{{ test.quote }}"</p>
            <div class="flex items-center">
              <div class="h-10 w-10 round-full bg-gray-300 rounded-full mr-4 overflow-hidden">
                <!-- <img [ngSrc]="test.avatarUrl!" width="40" height="40" class="object-cover"> -->
              </div>
              <div>
                <p class="font-bold text-gray-900">{{ test.name }}</p>
                <p class="text-sm text-gray-500">{{ test.role }}, {{ test.company }}</p>
              </div>
            </div>
          </div>
          }
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
