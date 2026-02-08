import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-brand-logo',
  imports: [RouterLink],
  template: `
    <a routerLink="/" (click)="onScrollToTop()" class="-m-1.5 p-1.5 flex items-center gap-3 group">
      <div
        class="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-slate-100 dark:ring-slate-800 group-hover:ring-primary transition-all duration-300"
      >
        <img
          src="images/karol-modelski.webp"
          alt="Karol Modelski"
          class="h-full w-full object-cover rounded-full"
        />
      </div>
      <div class="hidden sm:flex flex-col">
        <span
          class="text-sm font-bold leading-none text-secondary dark:text-white group-hover:text-primary transition-colors"
        >
          Karol Modelski
        </span>
        <span
          class="text-[10px] font-medium text-secondary/60 dark:text-slate-400 uppercase tracking-wider leading-none mt-1"
        >
          Senior Angular Developer
        </span>
      </div>
    </a>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandLogo {
  private readonly viewportScroller = inject(ViewportScroller);
  scrollToTop = output<void>();

  onScrollToTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
    this.scrollToTop.emit();
  }
}
