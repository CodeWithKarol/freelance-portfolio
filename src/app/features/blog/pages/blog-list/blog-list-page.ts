import {
  Component,
  ChangeDetectionStrategy,
  computed,
  signal,
  inject,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { httpResource } from '@angular/common/http';
import { BlogPost } from '../../../../core/portfolio/portfolio.model';
import { LucideAngularModule, ArrowRight, Loader2, AlertCircle } from 'lucide-angular';
import { BackgroundPatternComponent } from '../../../../shared/ui/background-pattern/background-pattern.component';
import { SectionHeaderComponent } from '../../../../shared/ui/section-header/section-header.component';
import { FeaturedBlogPostComponent } from '../../components/ui/featured-blog-post/featured-blog-post.component';
import { BlogPostCardComponent } from '../../components/ui/blog-post-card/blog-post-card.component';
import { SeoService } from '../../../../core/seo/seo.service';

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
  imports: [
    CommonModule,
    LucideAngularModule,
    BackgroundPatternComponent,
    SectionHeaderComponent,
    FeaturedBlogPostComponent,
    BlogPostCardComponent,
  ],
  template: `
    <div
      class="min-h-screen bg-white dark:bg-slate-950 font-sans text-slate-900 dark:text-white pb-24 sm:pb-32 relative isolate"
    >
      <!-- Background Elements -->
      <app-background-pattern />

      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32">
        <!-- Header -->
        <app-section-header
          preTitle="The Blog"
          title="Insights & Engineering"
          description="Practical writing on Angular architecture, Signals/RxJS patterns, performance tuning, and engineering decisions that keep teams shipping."
        />

        <!-- Content Area -->
        <div class="mt-16 sm:mt-24 space-y-20">
          <!-- Loading State -->
          @if (feedResource.isLoading()) {
            <div class="flex flex-col justify-center items-center h-64 animate-pulse">
              <lucide-icon
                [img]="Loader2"
                class="h-10 w-10 text-primary-600 animate-spin mb-4"
              ></lucide-icon>
              <p class="text-sm text-slate-500">Loading articles...</p>
            </div>
          }

          <!-- Error State -->
          @else if (feedResource.error()) {
            <div
              class="mx-auto max-w-lg rounded-2xl bg-red-50 dark:bg-red-900/10 p-8 text-center border border-red-100 dark:border-red-900/20"
            >
              <lucide-icon
                [img]="AlertCircle"
                class="mx-auto h-10 w-10 text-red-500 mb-4 opacity-80"
              ></lucide-icon>
              <h3 class="text-base font-semibold text-red-700 dark:text-red-400">
                Failed to load content
              </h3>
              <p class="mt-2 text-sm text-red-600 dark:text-red-300 mb-6">
                We couldn't reach Medium.com at this moment.
              </p>
              <a
                href="https://karol-modelski.medium.com/"
                target="_blank"
                class="inline-flex items-center justify-center gap-2 rounded-full bg-white dark:bg-slate-900 px-5 py-2.5 text-sm font-semibold text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
              >
                Read on Medium <lucide-icon [img]="ArrowRight" class="h-4 w-4"></lucide-icon>
              </a>
            </div>
          }

          <!-- Posts List -->
          @else {
            <!-- Featured Post -->
            @if (featuredPost(); as featured) {
              <app-featured-blog-post [post]="featured" />
            }

            <!-- Post Grid -->
            <ul
              class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 list-none p-0"
            >
              @for (post of visiblePosts(); track post.id) {
                <li>
                  <app-blog-post-card [post]="post" class="h-full" />
                </li>
              }
            </ul>

            <!-- Pagination -->
            @if (hasMorePosts()) {
              <div
                class="flex justify-center border-t border-slate-200 dark:border-slate-800 pt-10 mt-16"
              >
                <button
                  (click)="loadMore()"
                  class="rounded-full bg-white dark:bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
                >
                  Load more articles
                </button>
              </div>
            }
          }
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogListPage implements OnInit {
  private readonly rssUrl = 'https://karol-modelski.medium.com/feed';
  private readonly apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${this.rssUrl}`;

  private seo = inject(SeoService);

  readonly ArrowRight = ArrowRight;
  readonly Loader2 = Loader2;
  readonly AlertCircle = AlertCircle;

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

  ngOnInit() {
    this.seo.updateSeo({
      title: 'Engineering Blog & Angular Insights',
      description:
        'Practical articles on Angular architecture, Signals, RxJS patterns, and performance tuning. Deep dives into real-world engineering problems and solutions.',
      url: '/blog',
      keywords: [
        'Angular Blog',
        'Frontend Engineering',
        'Web Performance',
        'Software Architecture',
        'RxJS',
        'Signals',
      ],
      type: 'website',
    });

    this.seo.setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'Engineering Insights by Karol Modelski',
      description:
        'Practical writing on Angular architecture, Signals/RxJS patterns, and performance tuning.',
      url: 'https://www.karol-modelski.scale-sail.io/blog',
      author: {
        '@type': 'Person',
        name: 'Karol Modelski',
      },
    });
  }
}
