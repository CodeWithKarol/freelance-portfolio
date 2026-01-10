import { Component, ChangeDetectionStrategy, inject, computed } from '@angular/core';
import { CommonModule, DatePipe, NgOptimizedImage } from '@angular/common';
import { httpResource } from '@angular/common/http';
import { BlogPost } from '../../../../core/portfolio/portfolio.model';

interface MediumFeedResponse {
  status: string;
  feed: {
    url: string;
    title: string;
    link: string;
    author: string;
    description: string;
    image: string;
  };
  items: MediumPost[];
}

interface MediumPost {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  enclosure: object;
  categories: string[];
}

@Component({
  selector: 'app-blog-list-page',
  standalone: true,
  imports: [CommonModule, DatePipe, NgOptimizedImage],
  template: `
    <div
      class="bg-white dark:bg-slate-950 min-h-screen py-24 sm:py-32 relative isolate overflow-hidden"
    >
      <!-- Background Pattern -->
      <div
        class="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
      ></div>
      <div
        class="absolute inset-0 -z-10 bg-[radial-gradient(circle_800px_at_100%_200px,theme(colors.indigo.500/0.1),transparent)]"
      ></div>

      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-base font-semibold leading-7 text-primary-600 dark:text-primary-500">
            The Blog
          </h2>
          <h1
            class="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl"
          >
            Thoughts & Insights
          </h1>
          <p class="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Expert analysis on Angular architecture, state management, and modern web development.
          </p>
        </div>

        @if (feedResource.isLoading()) {
        <div class="flex justify-center items-center py-32">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
        </div>
        } @else if (feedResource.error()) {
        <div class="flex flex-col items-center justify-center py-20 text-center">
          <p class="text-red-500 mb-4">Unable to load blog posts at this time.</p>
          <a
            href="https://karol-modelski.medium.com/"
            target="_blank"
            class="text-primary-600 hover:underline"
          >
            Visit Medium Profile Directly &rarr;
          </a>
        </div>
        } @else {
        <div
          class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          @for (post of posts(); track post.id) {
          <article class="flex flex-col items-start justify-between group">
            <div class="relative w-full">
              <img
                [src]="
                  post.imageUrl ||
                  'https://images.unsplash.com/photo-1499750310159-5254f4cc1555?q=80&w=2670&auto=format&fit=crop'
                "
                [alt]="post.title"
                class="aspect-[16/9] w-full rounded-2xl bg-slate-100 dark:bg-slate-800 object-cover sm:aspect-[2/1] lg:aspect-[3/2] shadow-lg ring-1 ring-slate-900/10 dark:ring-white/10 transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-slate-900/10"></div>
            </div>
            <div class="max-w-xl">
              <div class="mt-8 flex items-center gap-x-4 text-xs">
                <time [attr.datetime]="post.date" class="text-slate-500 dark:text-slate-400">
                  {{ post.date | date : 'mediumDate' }}
                </time>
                <span
                  class="relative z-10 rounded-full bg-primary-50 dark:bg-primary-900/30 px-3 py-1.5 font-medium text-primary-600 dark:text-primary-300 hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-colors"
                >
                  {{ post.category || 'Tech' }}
                </span>
              </div>
              <div class="group relative">
                <h3
                  class="mt-3 text-lg font-semibold leading-6 text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
                >
                  <a [href]="post.url" target="_blank">
                    <span class="absolute inset-0"></span>
                    {{ post.title }}
                  </a>
                </h3>
                <p class="mt-5 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {{ post.excerpt }}
                </p>
              </div>
              <div class="relative mt-8 flex items-center gap-x-4">
                <img
                  ngSrc="images/karol-modelski.webp"
                  width="40"
                  height="40"
                  alt=""
                  class="rounded-full bg-slate-100 dark:bg-slate-800 ring-1 ring-slate-900/10 dark:ring-white/10"
                />
                <div class="text-sm leading-6">
                  <p class="font-semibold text-slate-900 dark:text-white">
                    <a href="https://karol-modelski.medium.com/" target="_blank">
                      <span class="absolute inset-0"></span>
                      Karol Modelski
                    </a>
                  </p>
                  <p class="text-slate-600 dark:text-slate-400">Senior Angular Maven</p>
                </div>
              </div>
            </div>
          </article>
          }
        </div>
        }
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogListPage {
  private readonly rssUrl = 'https://karol-modelski.medium.com/feed';
  private readonly apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${this.rssUrl}`;

  feedResource = httpResource<MediumFeedResponse>(() => this.apiUrl);

  posts = computed<BlogPost[]>(() => {
    const feed = this.feedResource.value();
    if (!feed || feed.status !== 'ok') return [];

    return feed.items.map((item) => {
      // Extract first image from description (Medium puts main image there)
      // This is often more reliable than the 'thumbnail' field which might be missing or broken
      const imgMatch = item.description.match(/<img[^>]+src="([^">]+)"/);
      const imageUrl = imgMatch ? imgMatch[1] : item.thumbnail;

      return {
        id: item.guid,
        title: item.title,
        // Create a clean excerpt by stripping HTML and truncating
        excerpt: item.description.replace(/<[^>]*>/g, '').substring(0, 160) + '...',
        date: item.pubDate,
        slug: item.guid, // Using guid as slug since we're linking externally
        imageUrl: imageUrl,
        category: item.categories?.length ? item.categories[0] : 'Tech',
        url: item.link,
      };
    });
  });
}
