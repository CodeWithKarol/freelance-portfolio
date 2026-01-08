import { Component, ChangeDetectionStrategy, inject, computed } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { PortfolioStore } from '../../../../core/portfolio/portfolio-store';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-blog-post-page',
  standalone: true,
  imports: [CommonModule, DatePipe, RouterLink],
  template: `
    <article
      class="pt-32 pb-20 bg-white dark:bg-slate-950 min-h-screen transition-colors duration-300"
    >
      <div class="max-w-3xl mx-auto px-6 lg:px-8">
        @if (post(); as p) {
        <div class="mb-8">
          <a
            routerLink="/blog"
            class="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block"
            >&larr; Back to Blog</a
          >
          <h1 class="text-4xl font-extrabold text-slate-900 dark:text-slate-100 sm:text-5xl mb-4">
            {{ p.title }}
          </h1>
          <div class="flex items-center gap-4 text-slate-500 dark:text-slate-400">
            <time>{{ p.date | date : 'longDate' }}</time>
          </div>
        </div>

        <div
          class="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400"
          [innerHTML]="p.content"
        >
          <!-- Content Injection -->
        </div>
        } @else {
        <div class="text-center py-20">
          <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100">Post not found</h2>
          <a routerLink="/blog" class="text-blue-600 dark:text-blue-400 mt-4 inline-block"
            >Return to Blog</a
          >
        </div>
        }
      </div>
    </article>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogPostPage {
  private route = inject(ActivatedRoute);
  private store = inject(PortfolioStore);

  // Get slug from route params
  private slug = toSignal(this.route.paramMap);

  // Compute the post based on the slug
  post = computed(() => {
    const params = this.slug();
    const slug = params?.get('slug');
    return this.store.blogPosts().find((p) => p.slug === slug);
  });
}
