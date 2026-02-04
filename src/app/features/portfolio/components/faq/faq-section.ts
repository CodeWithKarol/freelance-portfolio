import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LucideAngularModule,
  HelpCircle,
  Terminal,
  ChevronRight,
  AlertCircle,
  FileText,
} from 'lucide-angular';
import { SectionHeader } from '../../../../shared/ui/section-header/section-header';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq-section',
  imports: [CommonModule, LucideAngularModule, SectionHeader],
  template: `
    <section
      class="section-padding bg-slate-50 dark:bg-slate-900 relative overflow-hidden"
      id="faq"
      aria-labelledby="faq-heading"
    >
      <!-- Background Elements -->
      <div class="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>

      <div class="layout-container relative z-10">
        <app-section-header
          subtitle="KNOWLEDGE_BASE"
          title="TROUBLESHOOTING & PROTOCOLS"
          description="Standard operating procedures for engagement and technical capabilities."
          alignment="center"
        />

        <div class="mt-16 grid lg:grid-cols-12 gap-8 items-start">
          <!-- Left: Terminal/Directory View (Desktop) -->
          <div class="hidden lg:block lg:col-span-4 sticky top-24">
            <div
              class="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden shadow-sm"
            >
              <div
                class="flex items-center gap-2 px-4 py-3 bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800"
              >
                <lucide-icon [img]="Terminal" class="w-4 h-4 text-slate-500"></lucide-icon>
                <span class="text-xs font-mono text-slate-500">docs/faq/README.md</span>
              </div>
              <div class="p-4">
                <ul class="space-y-1">
                  @for (item of items; track $index) {
                    <li>
                      <button
                        (click)="toggle($index)"
                        class="w-full text-left px-3 py-2 rounded-sm text-sm font-mono transition-colors flex items-center gap-3 group"
                        [class.bg-primary-50]="openIndex() === $index"
                        [class.dark:bg-primary-900/10]="openIndex() === $index"
                      >
                        <span
                          class="text-slate-400 group-hover:text-primary transition-colors"
                          [class.text-primary]="openIndex() === $index"
                        >
                          {{ openIndex() === $index ? '>' : '#' }}
                        </span>
                        <span
                          [class.text-primary]="openIndex() === $index"
                          [class.text-slate-600]="openIndex() !== $index"
                          [class.dark:text-slate-400]="openIndex() !== $index"
                          class="truncate group-hover:text-slate-900 dark:group-hover:text-white"
                        >
                          {{ item.id }}
                        </span>
                      </button>
                    </li>
                  }
                </ul>
              </div>
            </div>
          </div>

          <!-- Right: Content Area -->
          <div class="lg:col-span-8 space-y-4">
            @for (item of items; track $index) {
              <div
                class="group bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 transition-all duration-300"
                [class.border-l-4]="openIndex() === $index"
                [class.border-l-primary]="openIndex() === $index"
                [class.shadow-md]="openIndex() === $index"
              >
                <h3>
                  <button
                    type="button"
                    (click)="toggle($index)"
                    class="w-full flex items-start p-6 text-left focus:outline-none"
                    [attr.aria-expanded]="openIndex() === $index"
                    [attr.aria-controls]="'faq-panel-' + $index"
                  >
                    <div class="flex-shrink-0 mt-1 mr-4">
                      @if (openIndex() === $index) {
                        <div class="w-6 h-6 rounded bg-primary/10 flex items-center justify-center">
                          <lucide-icon
                            [img]="HelpCircle"
                            class="w-4 h-4 text-primary"
                          ></lucide-icon>
                        </div>
                      } @else {
                        <div
                          class="w-6 h-6 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-primary/5 transition-colors"
                        >
                          <lucide-icon
                            [img]="ChevronRight"
                            class="w-4 h-4 text-slate-400 group-hover:text-primary"
                          ></lucide-icon>
                        </div>
                      }
                    </div>

                    <div class="flex-1">
                      <div class="flex flex-col gap-1 mb-2">
                        <span class="text-[10px] font-mono uppercase text-slate-400"
                          >Query ID: {{ item.id }}</span
                        >
                        <span
                          class="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors"
                        >
                          {{ item.question }}
                        </span>
                      </div>
                    </div>
                  </button>
                </h3>

                <!-- Answer Content -->
                <div
                  [id]="'faq-panel-' + $index"
                  role="region"
                  class="grid transition-all duration-300 ease-in-out"
                  [class.grid-rows-[1fr]]="openIndex() === $index"
                  [class.grid-rows-[0fr]]="openIndex() !== $index"
                >
                  <div class="overflow-hidden">
                    <div class="px-6 pb-6 pl-16">
                      <div
                        class="bg-slate-50 dark:bg-slate-900/50 rounded-sm p-4 border border-slate-100 dark:border-slate-800/50"
                      >
                        <div class="flex items-start gap-3 mb-2">
                          <lucide-icon
                            [img]="FileText"
                            class="w-4 h-4 text-slate-400 mt-1"
                          ></lucide-icon>
                          <div class="font-mono text-xs text-slate-500 uppercase">
                            Resolution / Answer:
                          </div>
                        </div>
                        <div
                          class="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-mono"
                          [innerHTML]="item.answer"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqSection {
  readonly openIndex = signal<number | null>(0);

  readonly HelpCircle = HelpCircle;
  readonly Terminal = Terminal;
  readonly ChevronRight = ChevronRight;
  readonly AlertCircle = AlertCircle;
  readonly FileText = FileText;

  readonly items: FaqItem[] = [
    {
      id: 'SERV-01',
      question: 'What services do you provide?',
      answer: `I provide <strong>enterprise modernization</strong>, <strong>SaaS product engineering</strong>, and <strong>architecture audits</strong>. Whether you need to rescue a legacy codebase or ship complex <strong>new features</strong>, I deliver performance-first solutions and scalable architecture.`,
    },
    {
      id: 'STACK-02',
      question: 'What is your primary tech stack?',
      answer: `My primary stack is <strong>Angular (v14-v21)</strong>, <strong>TypeScript</strong>, <strong>Nx</strong>, and <strong>RxJS/Signals</strong>. I focus on performance-first architecture, strictly typed reactive forms, and "Zoneless" applications for maximum runtime speed.`,
    },
    {
      id: 'LEGACY-03',
      question: 'Do you work with legacy codebases?',
      answer: `Yes, retiring legacy technical debt is my specialty. I manage complex migrations from <strong>AngularJS</strong> or older Angular versions to modern, signal-based architectures without stopping feature delivery.`,
    },
    {
      id: 'LEAD-04',
      question: 'Do you offer technical leadership?',
      answer: `Yes. I act as a <strong>Fractional Tech Lead</strong> to elevate team capabilities. I provide code reviews, set up engineering best practices (CI/CD, Testing), and mentor developers on advanced architectural patterns.`,
    },
    {
      id: 'FEAT-05',
      question: 'Can you help ship new features?',
      answer: `Absolutely. I execute <strong>end-to-end feature delivery</strong>—from architectural planning to UI implementation. I prioritize complex state management, API integration, and ensuring new capabilities launch smoothly without regressions.`,
    },
  ];

  toggle(index: number): void {
    this.openIndex.update((current) => (current === index ? null : index));
  }
}
