import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { PortfolioStore } from '../../../../core/portfolio/portfolio-store';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-list-page',
  standalone: true,
  imports: [DatePipe, RouterLink],
  template: `
    <div
      class="pt-32 pb-20 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h1 class="text-4xl font-extrabold text-slate-900 dark:text-slate-100 sm:text-5xl">
            Thoughts & Articles
          </h1>
          <p class="mt-4 text-xl text-slate-500 dark:text-slate-400">
            Sharing knowledge on Angular, React, and Software Architecture.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (post of posts(); track post.id) {
          <article
            class="bg-white dark:bg-slate-900 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-slate-100 dark:border-slate-800"
          >
            <div class="h-48 bg-indigo-100 dark:bg-slate-800 w-full relative">
              <!-- <img [src]="post.imageUrl" class="w-full h-full object-cover"> -->
              <div class="absolute inset-0 flex items-center justify-center text-slate-400">
                <span>Blog Image</span>
              </div>
            </div>
            <div class="p-6">
              <div class="text-sm text-indigo-600 dark:text-indigo-400 font-semibold mb-2">
                {{ post.date | date : 'longDate' }}
              </div>
              <h3 class="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                <a [routerLink]="['/blog', post.slug]" class="hover:underline">{{ post.title }}</a>
              </h3>
              <p class="text-slate-600 dark:text-slate-400 mb-4">
                {{ post.excerpt }}
              </p>
              <a
                [routerLink]="['/blog', post.slug]"
                class="text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-800 dark:hover:text-indigo-300 inline-flex items-center cursor-pointer"
              >
                Read Article
                <svg class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </article>
          }
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogListPage {
  private portfolioStore = inject(PortfolioStore);
  posts = this.portfolioStore.blogPosts;
}
