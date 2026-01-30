import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export type BadgeVariant = 'solid' | 'soft' | 'outline';
export type BadgeColor =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'neutral'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger';

@Component({
  selector: 'app-badge',
  standalone: true,
  template: `<ng-content />`,
  host: {
    '[class]': 'computedClasses()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Badge {
  variant = input<BadgeVariant>('soft');
  color = input<BadgeColor>('primary');

  protected computedClasses = computed(() => {
    const base =
      'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors whitespace-nowrap';

    const color = this.color();
    const variant = this.variant();

    let colorClasses = '';

    if (variant === 'solid') {
      switch (color) {
        case 'primary':
          colorClasses = 'bg-primary text-white';
          break;
        case 'secondary':
          colorClasses = 'bg-secondary text-white';
          break;
        case 'accent':
          colorClasses = 'bg-accent text-white';
          break;
        case 'neutral':
          // Neutral solid: slate in light, white in dark
          colorClasses = 'bg-slate-200 text-slate-900 dark:bg-white dark:text-secondary';
          break;
        case 'success':
          colorClasses = 'bg-emerald-500 text-white';
          break;
        case 'info':
          colorClasses = 'bg-info text-white';
          break;
        case 'warning':
          colorClasses = 'bg-warning text-white';
          break;
        case 'danger':
          colorClasses = 'bg-danger text-white';
          break;
      }
    } else if (variant === 'soft') {
      switch (color) {
        case 'primary':
          colorClasses = 'bg-primary/10 text-primary ring-1 ring-inset ring-primary/20';
          break;
        case 'secondary':
          // Secondary soft: Primary brand navy. Visible on light (bg-navy text-white) is too heavy for soft.
          // Better: Light bluish-grey background on light, translucent on dark.
          colorClasses =
            'bg-slate-200 text-secondary ring-1 ring-inset ring-secondary/10 dark:bg-secondary/50 dark:text-white dark:ring-white/20';
          break;
        case 'accent':
          colorClasses = 'bg-accent/10 text-accent ring-1 ring-inset ring-accent/20';
          break;
        case 'neutral':
          // Neutral soft: Slate on light, White-alpha on dark
          colorClasses =
            'bg-slate-100 text-slate-700 ring-1 ring-inset ring-slate-200 dark:bg-white/10 dark:text-slate-200 dark:ring-white/20';
          break;
        case 'success':
          colorClasses = 'bg-success/10 text-success ring-1 ring-inset ring-success/20';
          break;
        case 'info':
          colorClasses = 'bg-info/10 text-info ring-1 ring-inset ring-info/20';
          break;
        case 'warning':
          colorClasses = 'bg-warning/10 text-warning ring-1 ring-inset ring-warning/20';
          break;
        case 'danger':
          colorClasses = 'bg-danger/10 text-danger ring-1 ring-inset ring-danger/20';
          break;
      }
    } else if (variant === 'outline') {
      colorClasses = 'bg-transparent ring-1 ring-inset';
      switch (color) {
        case 'primary':
          colorClasses += ' text-primary ring-primary/40';
          break;
        case 'secondary':
          colorClasses +=
            ' text-secondary ring-secondary/30 dark:text-slate-200 dark:ring-white/30';
          break;
        case 'accent':
          colorClasses += ' text-accent ring-accent/40';
          break;
        case 'neutral':
          colorClasses += ' text-slate-600 ring-slate-300 dark:text-slate-400 dark:ring-slate-700';
          break;
        case 'success':
          colorClasses += ' text-success ring-success/30';
          break;
        case 'info':
          colorClasses += ' text-info ring-info/30';
          break;
        case 'warning':
          colorClasses += ' text-warning ring-warning/30';
          break;
        case 'danger':
          colorClasses += ' text-danger ring-danger/30';
          break;
      }
    }

    return `${base} ${colorClasses}`;
  });
}
