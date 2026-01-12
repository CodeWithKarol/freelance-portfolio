import { Component, ChangeDetectionStrategy, computed, signal } from '@angular/core';
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
  imports: [CommonModule, DatePipe],
  template: `
    <div class="bg-white dark:bg-slate-950 min-h-screen relative isolate overflow-hidden font-sans">
      <!-- Sophisticated Background -->
      <div
        class="absolute inset-0 -z-10 bg-slate-50 dark:bg-slate-950/50 [mask-image:linear-gradient(to_bottom,white,transparent)]"
      ></div>
      <div
        class="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
      ></div>
      <div
        class="absolute inset-0 -z-10 bg-[radial-gradient(circle_800px_at_100%_200px,theme(colors.indigo.500/0.1),transparent)]"
      ></div>

      <!-- Hero Section -->
      <div class="relative px-6 pt-24 pb-16 lg:px-8 lg:pt-32 lg:pb-24">
        <div class="mx-auto max-w-2xl text-center">
          <h2
            class="text-xs font-semibold tracking-widest uppercase text-primary-600 dark:text-primary-400"
          >
            The Blog
          </h2>
          <h1
            class="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl"
          >
            Insights & Engineering
          </h1>
          <p class="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Practical writing on Angular architecture, Signals/RxJS patterns, performance tuning,
            and engineering decisions that keep teams shipping.
          </p>
        </div>
      </div>

      <div class="mx-auto max-w-7xl px-6 lg:px-8 pb-32">
        <!-- Loading State -->
        @if (feedResource.isLoading()) {
        <div class="flex justify-center items-center h-64">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
        </div>
        }

        <!-- Error State -->
        @else if (feedResource.error()) {
        <div class="rounded-2xl bg-red-50 dark:bg-red-900/10 p-12 text-center">
          <h3 class="text-sm font-semibold text-red-600 dark:text-red-400">
            Failed to load content
          </h3>
          <p class="mt-2 text-red-500 mb-6">We couldn't reach Medium.com at this moment.</p>
          <a
            href="https://karol-modelski.medium.com/"
            target="_blank"
            class="inline-flex items-center rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50"
          >
            Read on Medium &rarr;
          </a>
        </div>
        }

        <!-- Content -->
        @else {

        <!-- Featured Post (First Item) -->
        @if (featuredPost(); as featured) {
        <article
          class="relative isolate overflow-hidden rounded-3xl bg-slate-900 px-8 py-24 shadow-2xl sm:rounded-3xl sm:px-16 lg:flex lg:gap-x-20 lg:px-24 mb-24 transition-all hover:shadow-indigo-500/20 group"
        >
          <img
            [src]="
              featured.imageUrl ||
              'https://images.unsplash.com/photo-1499750310159-5254f4cc1555?q=80&w=2670&auto=format&fit=crop'
            "
            alt=""
            class="absolute inset-0 -z-10 h-full w-full object-cover brightness-50 lg:brightness-[0.4] transition-transform duration-700 group-hover:scale-105"
          />

          <div
            class="mx-auto max-w-2xl text-center lg:mx-0 lg:flex-auto lg:text-left relative z-10"
          >
            <div
              class="flex items-center justify-center lg:justify-start gap-x-4 text-xs font-semibold leading-5 mb-4"
            >
              <span
                class="text-indigo-300 bg-indigo-500/10 px-3 py-1 rounded-full backdrop-blur-sm border border-indigo-500/20"
                >Featured</span
              >
              <time [attr.datetime]="featured.date" class="text-slate-300">{{
                featured.date | date : 'longDate'
              }}</time>
            </div>
            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl text-pretty">
              <a [href]="featured.url" target="_blank" class="focus:outline-none">
                <span class="absolute inset-0"></span>
                {{ featured.title }}
              </a>
            </h2>
            <p class="mt-6 text-lg leading-8 text-slate-300 line-clamp-2 md:line-clamp-3">
              {{ featured.excerpt }}
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <span
                class="text-sm font-semibold leading-6 text-white group-hover:text-indigo-300 flex items-center gap-2"
              >
                Read article <span aria-hidden="true">→</span>
              </span>
            </div>
          </div>
        </article>
        }

        <!-- Grid for remaining posts -->
        <div class="grid grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 lg:grid-cols-3">
          @for (post of visiblePosts(); track post.id) {
          <article class="relative flex flex-col items-start justify-between group h-full">
            <div
              class="relative w-full overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800 aspect-[16/9] sm:aspect-[3/2] shadow-sm"
            >
              <img
                [src]="
                  post.imageUrl ||
                  'https://images.unsplash.com/photo-1499750310159-5254f4cc1555?q=80&w=2670&auto=format&fit=crop'
                "
                [alt]="post.title"
                class="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-slate-900/10"></div>
            </div>
            <div class="max-w-xl w-full flex flex-col flex-grow pt-6">
              <div class="flex items-center gap-x-4 text-xs">
                <time [attr.datetime]="post.date" class="text-slate-500 dark:text-slate-400">
                  {{ post.date | date : 'mediumDate' }}
                </time>
                <span
                  class="relative z-10 rounded-full bg-slate-50 dark:bg-slate-800/50 px-3 py-1.5 font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                >
                  {{ post.category }}
                </span>
              </div>
              <div class="group flex-grow">
                <h3
                  class="mt-3 text-lg font-semibold leading-6 text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2"
                >
                  <a [href]="post.url" target="_blank">
                    <span class="absolute inset-0"></span>
                    {{ post.title }}
                  </a>
                </h3>
                <p class="mt-3 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {{ post.excerpt }}
                </p>
              </div>

              <!-- Author / Footer of Card -->
              <div
                class="mt-6 flex items-center gap-x-3 border-t border-slate-100 dark:border-slate-800 pt-4 w-full"
              >
                <span
                  class="text-xs font-semibold text-primary-600 dark:text-primary-400 flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  Read on Medium
                  <svg
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </div>
            </div>
          </article>
          }
        </div>

        <!-- Load More / Pagination -->
        @if (hasMorePosts()) {
        <div class="mt-20 flex justify-center">
          <button
            (click)="loadMore()"
            class="rounded-full bg-white dark:bg-slate-900 px-8 py-3.5 text-sm font-semibold text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
          >
            Load more articles
          </button>
        </div>
        } }
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogListPage {
  private readonly rssUrl = 'https://karol-modelski.medium.com/feed';
  private readonly apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${this.rssUrl}`;

  // State for pagination/visibility
  private readonly displayBatchSize = 6;
  protected visibleCount = signal(this.displayBatchSize);

  feedResource = httpResource<MediumFeedResponse>(() => this.apiUrl);

  private allPosts = computed<BlogPost[]>(() => {
    const feed = this.feedResource.value();
    if (!feed || feed.status !== 'ok') return [];

    return feed.items.map((item) => {
      const imgMatch = item.description.match(/<img[^>]+src="([^">]+)"/);
      const imageUrl = imgMatch ? imgMatch[1] : item.thumbnail;

      return {
        id: item.guid,
        title: item.title,
        excerpt: item.description.replace(/<[^>]*>/g, '').substring(0, 160) + '...',
        date: item.pubDate,
        slug: item.guid,
        imageUrl: imageUrl,
        category: item.categories?.length ? item.categories[0] : 'Tech',
        url: item.link,
      };
    });
  });

  // Derived state
  featuredPost = computed(() => this.allPosts()[0] || null);

  // Posts to show in grid (excluding featured)
  visiblePosts = computed(() => {
    const all = this.allPosts();
    if (all.length <= 1) return []; // Only featured or empty

    // Skip the first one as it is featured
    return all.slice(1, this.visibleCount() + 1);
  });

  hasMorePosts = computed(() => {
    // Total available excluding featured
    const totalRemaining = Math.max(0, this.allPosts().length - 1);
    return this.visiblePosts().length < totalRemaining;
  });

  loadMore() {
    this.visibleCount.update((c) => c + this.displayBatchSize);
  }
}
