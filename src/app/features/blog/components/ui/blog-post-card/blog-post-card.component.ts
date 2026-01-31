import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { LucideAngularModule, ArrowRight } from 'lucide-angular';
import { BlogPost } from '../../../../../core/portfolio/portfolio.model';

@Component({
  selector: 'app-blog-post-card',
  imports: [CommonModule, DatePipe, LucideAngularModule],
  styles: [
    `
      :host {
        display: block;
        height: 100%;
      }
    `,
  ],
  template: `
    <article class="relative flex flex-col items-start justify-between group h-full">
      <!-- Card Image -->
      <div class="relative w-full mb-6">
        <div
          class="aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800 shadow-sm ring-1 ring-inset ring-slate-200 dark:ring-slate-800 transition-all hover:ring-slate-300 dark:hover:ring-slate-700 hover:shadow-md"
        >
          <img
            [src]="
              post().imageUrl ||
              'https://images.unsplash.com/photo-1499750310159-5254f4cc1555?q=80&w=2670&auto=format&fit=crop'
            "
            alt=""
            class="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
          <a
            [href]="post().url"
            target="_blank"
            class="absolute inset-0 focus:outline-none"
            aria-hidden="true"
            tabindex="-1"
            ><span class="sr-only">Read post</span></a
          >
        </div>
      </div>

      <!-- Card Content -->
      <div class="flex flex-col h-full w-full">
        <div
          class="flex items-center gap-x-4 text-xs font-medium text-slate-500 dark:text-slate-400 mb-3"
        >
          <time [attr.datetime]="post().date">{{ post().date | date: 'mediumDate' }}</time>
          <span
            class="rounded-full bg-slate-50 dark:bg-slate-800/50 px-2.5 py-0.5 text-xs text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
          >
            {{ post().category }}
          </span>
        </div>

        <h3
          class="mt-2 text-xl font-bold leading-tight text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2"
        >
          <a [href]="post().url" target="_blank">
            <span class="absolute inset-0"></span>
            {{ post().title }}
          </a>
        </h3>

        <p class="mt-4 flex-auto line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
          {{ post().excerpt }}
        </p>

        <div
          class="mt-6 flex items-center pt-4 border-t border-slate-100 dark:border-slate-800/50 w-full"
        >
          <div
            class="flex items-center gap-2 text-xs font-semibold text-primary-600 dark:text-primary-400 group-hover:text-primary-500 transition-colors"
          >
            Read on Medium
            <lucide-icon
              [img]="ArrowRight"
              class="h-3 w-3 transition-transform group-hover:translate-x-0.5"
            ></lucide-icon>
          </div>
        </div>
      </div>
    </article>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogPostCardComponent {
  post = input.required<BlogPost>();
  readonly ArrowRight = ArrowRight;
}
