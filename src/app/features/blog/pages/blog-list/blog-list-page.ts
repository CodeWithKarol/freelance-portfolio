import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { PortfolioStore } from '../../../../core/portfolio/portfolio-store';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-blog-list-page',
  standalone: true,
  imports: [DatePipe],
  template: `
    <div
      class="pt-32 pb-20 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h1 class="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            Thoughts & Articles
          </h1>
          <p class="mt-4 text-xl text-gray-500 dark:text-gray-300">
            Sharing knowledge on Angular, React, and Software Architecture.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (post of posts(); track post.id) {
          <article
            class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
          >
            <div class="h-48 bg-indigo-100 dark:bg-gray-700 w-full relative">
              <!-- <img [src]="post.imageUrl" class="w-full h-full object-cover"> -->
              <div class="absolute inset-0 flex items-center justify-center text-gray-400">
                <span>Blog Image</span>
              </div>
            </div>
            <div class="p-6">
              <div class="text-sm text-indigo-600 dark:text-indigo-400 font-semibold mb-2">
                {{ post.date | date : 'longDate' }}
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
                <a [href]="post.url" target="_blank" class="hover:underline">{{ post.title }}</a>
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                {{ post.excerpt }}
              </p>
              <a
                [href]="post.url"
                target="_blank"
                class="text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-800 dark:hover:text-indigo-300 inline-flex items-center"
              >
                Read on Medium
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
