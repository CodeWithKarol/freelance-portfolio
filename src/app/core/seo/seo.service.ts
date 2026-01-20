import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export interface SeoConfig {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  author?: string;
  keywords?: string[];
}

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private titleService = inject(Title);
  private metaService = inject(Meta);
  private document = inject(DOCUMENT);

  // Default SEO values (fallback)
  private readonly defaultTitle =
    'Karol Modelski | Senior Frontend Developer & Legacy Modernization';
  private readonly defaultDesc =
    'Senior Frontend Developer specialized in modernizing legacy Angular applications. I help teams fix performance bottlenecks, refactor legacy code, and establish scalable architecture.';
  private readonly defaultImage =
    'https://www.karol-modelski.scale-sail.io/images/karol-modelski.jpg';
  private readonly siteName = 'Karol Modelski Portfolio';
  private readonly baseUrl = 'https://www.karol-modelski.scale-sail.io';

  updateSeo(config: SeoConfig) {
    const title = config.title ? `${config.title} | ${this.siteName}` : this.defaultTitle;
    const description = config.description || this.defaultDesc;
    const image = config.image
      ? config.image.startsWith('http')
        ? config.image
        : `${this.baseUrl}${config.image}`
      : this.defaultImage;
    const url = config.url
      ? config.url.startsWith('http')
        ? config.url
        : `${this.baseUrl}${config.url}`
      : this.baseUrl;
    const type = config.type || 'website';
    const author = config.author || 'Karol Modelski';

    // 1. Set Title
    this.titleService.setTitle(title);

    // 2. Set Standard Meta Tags
    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({ name: 'author', content: author });
    if (config.keywords?.length) {
      this.metaService.updateTag({ name: 'keywords', content: config.keywords.join(', ') });
    }

    // 3. Set Open Graph Tags
    this.metaService.updateTag({ property: 'og:title', content: title });
    this.metaService.updateTag({ property: 'og:description', content: description });
    this.metaService.updateTag({ property: 'og:image', content: image });
    this.metaService.updateTag({ property: 'og:url', content: url });
    this.metaService.updateTag({ property: 'og:type', content: type });
    this.metaService.updateTag({ property: 'og:site_name', content: this.siteName });

    // 4. Set Twitter Card Tags
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: title });
    this.metaService.updateTag({ name: 'twitter:description', content: description });
    this.metaService.updateTag({ name: 'twitter:image', content: image });

    // 5. Update Canonical URL
    this.updateCanonicalUrl(url);
  }

  private updateCanonicalUrl(url: string) {
    let link: HTMLLinkElement | null = this.document.querySelector("link[rel='canonical']");
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  // Method to inject JSON-LD Structured Data
  setJsonLd(data: Record<string, unknown>) {
    let script = this.document.querySelector("script[type='application/ld+json']");
    if (!script) {
      script = this.document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      this.document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);
  }
}
