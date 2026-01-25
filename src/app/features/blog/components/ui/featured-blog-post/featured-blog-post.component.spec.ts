import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturedBlogPostComponent } from './featured-blog-post.component';
import { BlogPost } from '../../../../../core/portfolio/portfolio.model';
import { LucideAngularModule } from 'lucide-angular';
import { DatePipe } from '@angular/common';

describe('FeaturedBlogPostComponent', () => {
  let component: FeaturedBlogPostComponent;
  let fixture: ComponentFixture<FeaturedBlogPostComponent>;

  const mockPost: BlogPost = {
    id: 'featured-1',
    title: 'Featured Test Post',
    excerpt: 'This is a featured test post excerpt.',
    date: '2023-11-01',
    category: 'Featured',
    imageUrl: 'featured.jpg',
    url: 'https://medium.com/featured',
    slug: 'featured-1',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedBlogPostComponent, LucideAngularModule, DatePipe],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturedBlogPostComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('post', mockPost);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display featured post title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Featured Test Post');
  });

  it('should have correct link', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const link = compiled.querySelector('h2 a') as HTMLAnchorElement;
    expect(link.href).toBe('https://medium.com/featured');
  });
});
