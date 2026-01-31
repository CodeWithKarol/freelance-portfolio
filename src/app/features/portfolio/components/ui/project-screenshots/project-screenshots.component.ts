import { Component, input, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, X, ZoomIn, ZoomOut, ChevronsUpDown } from 'lucide-angular';

@Component({
  selector: 'app-project-screenshots',
  imports: [CommonModule, LucideAngularModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section
      class="py-16 lg:py-24 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Application Interface
          </h2>
          <p class="mt-4 text-lg text-slate-600 dark:text-slate-400">
            A closer look at the key screens and interactions.
          </p>
        </div>

        <div class="columns-1 md:columns-2 gap-8 space-y-8">
          @for (screenshot of screenshots(); track screenshot) {
            <div
              class="relative break-inside-avoid rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-lg ring-1 ring-slate-900/5 dark:ring-white/10 group cursor-zoom-in"
              (click)="openZoom(screenshot)"
              (keydown.enter)="openZoom(screenshot)"
              tabindex="0"
              role="button"
              aria-label="Zoom screenshot"
            >
              <div
                class="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors pointer-events-none z-10"
              ></div>

              <!-- Zoom Icon indicator -->
              <div
                class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none"
              >
                <div class="bg-black/50 backdrop-blur-sm rounded-full p-3 text-white">
                  <lucide-icon [img]="ZoomIn" class="w-6 h-6"></lucide-icon>
                </div>
              </div>

              <img
                [src]="screenshot"
                loading="lazy"
                class="w-full h-auto transform transition-transform duration-500 group-hover:scale-[1.02]"
                alt="Project Screenshot"
              />
            </div>
          }
        </div>
      </div>

      <!-- Lightbox Modal -->
      @if (selectedImage(); as img) {
        <div
          class="fixed inset-0 z-[100] overflow-y-auto overflow-x-hidden"
          role="dialog"
          aria-modal="true"
          tabindex="-1"
          (click)="onBackdropClick($event)"
          (keydown.escape)="closeZoom()"
        >
          <!-- Fixed Backdrop -->
          <div
            class="fixed inset-0 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200"
          ></div>

          <!-- Fixed Close Button (Always visible) -->
          <button
            (click)="closeZoom()"
            class="fixed top-4 right-4 z-[110] p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 border border-white/10"
            aria-label="Close zoom"
          >
            <lucide-icon [img]="X" class="w-6 h-6"></lucide-icon>
          </button>

          <!-- Scrollable Image Container -->
          <div class="relative min-h-full flex items-center justify-center p-4 sm:p-8">
            <!-- Scroll Indicator Pill -->
            @if (isZoomed()) {
              <div
                class="fixed bottom-6 left-1/2 -translate-x-1/2 z-[120] pointer-events-none animate-in fade-in slide-in-from-bottom-4 duration-500"
              >
                <div
                  class="flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/10 shadow-xl"
                >
                  <lucide-icon [img]="ChevronsUpDown" class="w-4 h-4"></lucide-icon>
                  Scroll to explore
                </div>
              </div>
            }

            <!-- Image Wrapper -->
            <div class="relative transition-all duration-300 ease-out flex justify-center w-full">
              <img
                [src]="img"
                class="rounded-lg shadow-2xl ring-1 ring-white/10 select-none object-contain transition-all duration-300 bg-slate-900"
                [class]="
                  isZoomed()
                    ? 'w-full max-w-7xl cursor-zoom-out'
                    : 'max-h-[85vh] w-auto cursor-zoom-in'
                "
                alt="Enlarged screenshot"
                role="button"
                tabindex="0"
                (click)="toggleZoom($event)"
                (keyup.enter)="toggleZoom($event)"
              />
            </div>
          </div>
        </div>
      }
    </section>
  `,
  host: {
    '(document:keydown.escape)': 'onEscape()',
  },
})
export class ProjectScreenshotsComponent {
  readonly screenshots = input.required<string[]>();
  readonly selectedImage = signal<string | null>(null);
  readonly isZoomed = signal(false);

  readonly X = X;
  readonly ZoomIn = ZoomIn;
  readonly ZoomOut = ZoomOut;
  readonly ChevronsUpDown = ChevronsUpDown;

  openZoom(image: string) {
    this.selectedImage.set(image);
    this.isZoomed.set(false);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  closeZoom() {
    this.selectedImage.set(null);
    this.isZoomed.set(false);
    document.body.style.overflow = ''; // Restore scrolling
  }

  onBackdropClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.closeZoom();
    }
  }

  toggleZoom(event?: Event) {
    event?.stopPropagation();
    this.isZoomed.update((z) => !z);
  }

  onEscape() {
    if (this.selectedImage()) {
      this.closeZoom();
    }
  }
}
