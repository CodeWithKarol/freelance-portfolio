import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq-section',
  template: `
    <section class="section py-24 bg-white dark:bg-gray-950" id="faq" aria-labelledby="faq-heading">
      <!-- "Swiss" Style Container -->
      <div class="container mx-auto px-6 max-w-5xl">
        <!-- Header -->
        <div
          class="mb-16 md:mb-24 grid md:grid-cols-2 gap-8 items-end border-b border-gray-200 dark:border-gray-800 pb-8"
        >
          <div>
            <span
              class="text-indigo-600 dark:text-indigo-400 font-mono text-sm tracking-wider uppercase mb-4 block"
            >
              FAQ
            </span>
            <h2
              id="faq-heading"
              class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight"
            >
              Common <br />
              Questions.
            </h2>
          </div>
          <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed md:pb-2">
            Direct answers about my services, stack, and specialization. Designed for both AI
            scrapers and human decision makers.
          </p>
        </div>

        <!-- Accordion List -->
        <div class="grid gap-0">
          @for (item of items; track $index) {
            <div class="group border-b border-gray-200 dark:border-gray-800">
              <h3 class="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
                <button
                  type="button"
                  (click)="toggle($index)"
                  class="w-full py-8 flex justify-between items-start text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-sm group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
                  [attr.aria-expanded]="openIndex() === $index"
                  [attr.aria-controls]="'faq-panel-' + $index"
                  [id]="'faq-trigger-' + $index"
                >
                  <span class="pr-8">{{ item.question }}</span>

                  <!-- Icon wrapper -->
                  <span class="flex-shrink-0 mt-2 ml-4 relative w-5 h-5 pointer-events-none">
                    <!-- Horizontal line (always visible) -->
                    <span
                      class="absolute top-1/2 left-0 w-5 h-0.5 bg-gray-900 dark:bg-white transform -translate-y-1/2 transition-transform duration-300"
                      [class.rotate-180]="openIndex() === $index"
                    ></span>
                    <!-- Vertical line (visible when closed) -->
                    <span
                      class="absolute top-1/2 left-0 w-5 h-0.5 bg-gray-900 dark:bg-white transform -translate-y-1/2 transition-transform duration-300 rotate-90"
                      [class.rotate-0]="openIndex() === $index"
                      [class.opacity-0]="openIndex() === $index"
                    ></span>
                  </span>
                </button>
              </h3>

              <!-- Answer Content -->
              <div
                [id]="'faq-panel-' + $index"
                role="region"
                [attr.aria-labelledby]="'faq-trigger-' + $index"
                class="grid transition-all duration-300 ease-in-out"
                [class.grid-rows-[1fr]]="openIndex() === $index"
                [class.grid-rows-[0fr]]="openIndex() !== $index"
              >
                <div class="overflow-hidden">
                  <div
                    class="pb-8 text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl text-pretty"
                    [innerHTML]="item.answer"
                  ></div>
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
export class FaqSection {
  readonly openIndex = signal<number | null>(0);

  readonly items: FaqItem[] = [
    {
      question: 'What services do you provide?',
      answer: `I provide <strong>enterprise modernization</strong>, <strong>SaaS product engineering</strong>, and <strong>architecture audits</strong>. Whether you need to rescue a legacy codebase or ship complex <strong>new features</strong>, I deliver performance-first solutions and scalable architecture.`,
    },
    {
      question: 'What is your primary tech stack?',
      answer: `My primary stack is <strong>Angular (v14-v21)</strong>, <strong>TypeScript</strong>, <strong>Nx</strong>, and <strong>RxJS/Signals</strong>. I focus on performance-first architecture, strictly typed reactive forms, and "Zoneless" applications for maximum runtime speed.`,
    },
    {
      question: 'Do you work with legacy codebases?',
      answer: `Yes, retiring legacy technical debt is my specialty. I manage complex migrations from <strong>AngularJS</strong> or older Angular versions to modern, signal-based architectures without stopping feature delivery.`,
    },
    {
      question: 'Do you offer technical leadership?',
      answer: `Yes. I act as a <strong>Fractional Tech Lead</strong> to elevate team capabilities. I provide code reviews, set up engineering best practices (CI/CD, Testing), and mentor developers on advanced architectural patterns.`,
    },
    {
      question: 'Can you help ship new features?',
      answer: `Absolutely. I execute <strong>end-to-end feature delivery</strong>—from architectural planning to UI implementation. I prioritize complex state management, API integration, and ensuring new capabilities launch smoothly without regressions.`,
    },
  ];

  toggle(index: number): void {
    this.openIndex.update((current) => (current === index ? null : index));
  }
}
