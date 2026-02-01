import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

export type BackgroundVariant = 'hero' | 'section' | 'subtle';
export type GradientPosition = 'top-left' | 'top-right' | 'center' | 'bottom-left' | 'bottom-right';

@Component({
  selector: 'app-background-pattern',
  imports: [CommonModule],
  template: `
    <div class="absolute inset-0 -z-50 overflow-hidden pointer-events-none select-none">
      <!-- 1. Technical Grid (The Foundation) -->
      @if (showGrid()) {
        <div
          class="absolute inset-0 bg-[linear-gradient(to_right,var(--color-primary-200)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-primary-200)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,var(--color-primary-900)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-primary-900)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.03] dark:opacity-[0.05]"
        ></div>
      }

      <!-- 2. The "Scale Sail" Curves (Unique Branding) -->
      <!-- A dynamic SVG composition representing 'Scaling' (Upward trends) and 'Sailing' (Flow/Wind) -->
      <svg
        class="absolute w-[100%] h-[100%] max-w-none transition-all duration-1000 ease-in-out opacity-60 dark:opacity-40"
        [ngClass]="svgPositionClasses()"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="brandGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color: var(--color-primary); stop-opacity: 0" />
            <stop offset="50%" style="stop-color: var(--color-primary); stop-opacity: 0.3" />
            <stop offset="100%" style="stop-color: var(--color-accent); stop-opacity: 0.8" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="20" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <!-- Path 1: The Deep Current (Stability/Architecture) -->
        <path
          d="M0,1000 C300,900 600,800 1000,1000 L1000,1000 L0,1000 Z"
          class="fill-primary-100 dark:fill-primary-900/20"
        />

        <!-- Path 2: The Wind/Flow (Motion) -->
        @if (variant() === 'hero' || variant() === 'section') {
          <path
            d="M-100,800 C200,700 500,200 1200,0"
            fill="none"
            stroke="url(#brandGradient)"
            stroke-width="2"
            class="opacity-50"
          />
          <path
            d="M-100,850 C250,750 550,250 1200,50"
            fill="none"
            stroke="var(--color-primary)"
            stroke-width="1"
            stroke-opacity="0.2"
          />
        }

        <!-- Path 3: The "Scale" Curve (Growth) - Only on Hero/Section -->
        @if (variant() === 'hero') {
          <path
            d="M0,1000 C400,900 600,400 1000,0"
            fill="none"
            stroke="var(--color-accent)"
            stroke-width="3"
            filter="url(#glow)"
            class="opacity-80"
            stroke-linecap="round"
          />
        }
      </svg>

      <!-- 3. Ambient Glow (Atmosphere) -->
      <div
        class="absolute transform-gpu blur-3xl opacity-20 dark:opacity-10 transition-all duration-1000 ease-in-out mix-blend-multiply dark:mix-blend-normal"
        [ngClass]="blobClasses()"
      >
        <!-- Primary Blue Glow -->
        <div class="aspect-[1/1] w-[40rem] rounded-full bg-primary"></div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackgroundPatternComponent {
  variant = input<BackgroundVariant>('subtle');
  position = input<GradientPosition>('top-right');
  showGrid = input(true);

  svgPositionClasses = computed(() => {
    // Rotate/Flip SVG based on position to guide the eye
    switch (this.position()) {
      case 'top-left':
        return '-scale-x-100 -scale-y-100 origin-center';
      case 'bottom-left':
        return '-scale-x-100 origin-bottom';
      case 'bottom-right':
        return 'origin-bottom';
      default:
        return ''; // top-right is default flow (up and right)
    }
  });

  blobClasses = computed(() => {
    const pos = this.position();

    switch (pos) {
      case 'top-left':
        return '-top-40 -left-20';
      case 'top-right':
        return '-top-40 -right-20';
      case 'center':
        return 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2';
      case 'bottom-left':
        return '-bottom-40 -left-20';
      case 'bottom-right':
        return '-bottom-40 -right-20';
      default:
        return '-top-40 -right-20';
    }
  });
}
