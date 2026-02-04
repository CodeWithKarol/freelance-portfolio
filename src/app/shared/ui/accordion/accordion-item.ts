import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Plus, Minus } from 'lucide-angular';

let nextId = 0;

@Component({
  selector: 'app-accordion-item',
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="py-4">
      <button
        type="button"
        (click)="toggled.emit(!isOpen())"
        [attr.aria-expanded]="isOpen()"
        [attr.aria-controls]="panelId"
        [id]="triggerId"
        class="flex w-full items-center justify-between py-2 text-left text-secondary dark:text-white hover:text-primary dark:hover:text-primary-400 transition-colors focus:outline-none rounded-lg -mx-2 px-2 group"
      >
        <span class="text-base font-semibold flex items-center gap-3">
          <ng-content select="[header]" />
        </span>
        <span class="ml-6 flex items-center">
          @if (isOpen()) {
            <lucide-icon [img]="Minus" class="h-5 w-5 text-primary"></lucide-icon>
          } @else {
            <lucide-icon
              [img]="Plus"
              class="h-5 w-5 text-secondary/40 dark:text-slate-500"
            ></lucide-icon>
          }
        </span>
      </button>

      @if (isOpen()) {
        <div
          [id]="panelId"
          role="region"
          [attr.aria-labelledby]="triggerId"
          class="mt-4 pb-2 animate-in slide-in-from-top-2 fade-in duration-200"
        >
          <ng-content />
        </div>
      }
    </div>
  `,
  host: {
    class: 'block',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionItem {
  isOpen = input(false);
  toggled = output<boolean>();

  readonly id = `accordion-item-${nextId++}`;
  readonly triggerId = `${this.id}-trigger`;
  readonly panelId = `${this.id}-panel`;

  readonly Plus = Plus;
  readonly Minus = Minus;
}
