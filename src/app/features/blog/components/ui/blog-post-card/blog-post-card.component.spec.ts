import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogPostCardComponent } from './blog-post-card.component';
import { BlogPost } from '../../../../../core/portfolio/portfolio.model';
import { LucideAngularModule } from 'lucide-angular';
import { DatePipe } from '@angular/common';

describe('BlogPostCardComponent', () => {
  let component: BlogPostCardComponent;
  let fixture: ComponentFixture<BlogPostCardComponent>;

  const mockPost: BlogPost = {
    id: '1',
    title: 'Test Post',
    excerpt: 'This is a test post excerpt.',
    date: '2023-10-27',
    category: 'Engineering',
    imageUrl: 'test-image.jpg',
    url: 'https://medium.com/test-post',
    slug: 'test-post',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogPostCardComponent, LucideAngularModule, DatePipe],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogPostCardComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('post', mockPost);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display post title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain('Test Post');
  });

  it('should display post excerpt', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain('This is a test post excerpt.');
  });
});
