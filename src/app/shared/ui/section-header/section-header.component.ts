import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="containerClasses()">
      @if (preTitle()) {
      <h2
        class="text-base font-semibold leading-7 text-primary-600 dark:text-primary-400 uppercase tracking-widest"
      >
        {{ preTitle() }}
      </h2>
      }
      <h1
        class="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl text-balance"
      >
        {{ title() }}
      </h1>
      @if (description()) {
      <p class="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
        {{ description() }}
      </p>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionHeaderComponent {
  readonly preTitle = input<string>();
  readonly title = input.required<string>();
  readonly description = input<string>();
  readonly alignment = input<'center' | 'left'>('center');

  protected readonly containerClasses = computed(() => {
    return this.alignment() === 'left' ? 'max-w-2xl text-left' : 'max-w-2xl mx-auto text-center';
  });
}
