import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { LucideAngularModule, ArrowRight } from 'lucide-angular';
import { BlogPost } from '../../../../../core/portfolio/portfolio.model';

@Component({
  selector: 'app-featured-blog-post',
  standalone: true,
  imports: [CommonModule, DatePipe, LucideAngularModule],
  template: `
    <article
      class="relative isolate flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16 border-b border-slate-200 dark:border-slate-800 pb-16 lg:pb-24"
    >
      <!-- Image -->
      <div class="relative w-full lg:w-1/2 lg:shrink-0">
        <div
          class="aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800 shadow-sm ring-1 ring-inset ring-slate-200 dark:ring-slate-800 transition-all hover:ring-slate-300 dark:hover:ring-slate-700 group"
        >
          <a [href]="post().url" target="_blank" class="block h-full w-full focus:outline-none">
            <img
              [src]="
                post().imageUrl ||
                'https://images.unsplash.com/photo-1499750310159-5254f4cc1555?q=80&w=2670&auto=format&fit=crop'
              "
              alt=""
              class="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </a>
        </div>
      </div>

      <!-- Content -->
      <div class="w-full lg:w-1/2 flex flex-col justify-center">
        <div class="flex items-center gap-x-4 text-xs font-medium mb-4">
          <span
            class="relative z-10 rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1.5 text-slate-600 dark:text-slate-300"
          >
            {{ post().category }}
          </span>
          <time [attr.datetime]="post().date" class="text-slate-500 dark:text-slate-400">
            {{ post().date | date : 'longDate' }}
          </time>
        </div>

        <h2 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          <a
            [href]="post().url"
            target="_blank"
            class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            {{ post().title }}
          </a>
        </h2>

        <p class="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300 line-clamp-3">
          {{ post().excerpt }}
        </p>

        <div class="mt-8">
          <a
            [href]="post().url"
            target="_blank"
            class="text-sm font-semibold leading-6 text-slate-900 dark:text-white flex items-center gap-2 group hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            Read article
            <lucide-icon
              [img]="ArrowRight"
              class="h-4 w-4 transition-transform group-hover:translate-x-1"
            ></lucide-icon>
          </a>
        </div>
      </div>
    </article>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturedBlogPostComponent {
  post = input.required<BlogPost>();
  readonly ArrowRight = ArrowRight;
}
