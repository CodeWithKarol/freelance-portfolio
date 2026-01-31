import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { SectionHeader } from '../../../../shared/ui/section-header/section-header';

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq-section',
  imports: [SectionHeader],
  template: `
    <section class="py-24 bg-white dark:bg-slate-950" id="faq" aria-labelledby="faq-heading">
      <div class="container mx-auto px-6 max-w-4xl">
        <app-section-header
          subtitle="FAQ"
          title="Common Questions"
          description="Direct answers about my services, stack, and specialization. Designed for both AI scrapers and human decision makers."
          alignment="center"
        />

        <div class="grid gap-0 mt-8">
          @for (item of items; track $index) {
            <div class="group border-b border-slate-200 dark:border-slate-800">
              <h3 class="text-xl font-semibold text-secondary dark:text-white">
                <button
                  type="button"
                  (click)="toggle($index)"
                  class="w-full py-6 flex justify-between items-start text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm group-hover:text-primary transition-colors"
                  [attr.aria-expanded]="openIndex() === $index"
                  [attr.aria-controls]="'faq-panel-' + $index"
                  [id]="'faq-trigger-' + $index"
                >
                  <span class="pr-8">{{ item.question }}</span>

                  <!-- Icon wrapper -->
                  <span class="flex-shrink-0 mt-1.5 ml-4 relative w-5 h-5 pointer-events-none">
                    <!-- Horizontal line (always visible) -->
                    <span
                      class="absolute top-1/2 left-0 w-5 h-0.5 bg-secondary dark:bg-white transform -translate-y-1/2 transition-transform duration-300"
                      [class.rotate-180]="openIndex() === $index"
                    ></span>
                    <!-- Vertical line (visible when closed) -->
                    <span
                      class="absolute top-1/2 left-0 w-5 h-0.5 bg-secondary dark:bg-white transform -translate-y-1/2 transition-transform duration-300 rotate-90"
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
                    class="pb-8 text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl text-pretty"
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
