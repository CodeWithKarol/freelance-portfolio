import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogListPage } from './blog-list-page';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

describe('BlogListPage', () => {
  let component: BlogListPage;
  let fixture: ComponentFixture<BlogListPage>;
  let httpMock: HttpTestingController;

  const mockFeedResponse = { items: [], status: 'ok', feed: {} };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogListPage],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogListPage);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create', () => {
    const req = httpMock.expectOne((req) => req.url.includes('api.rss2json.com'));
    req.flush(mockFeedResponse);
    expect(component).toBeTruthy();
  });
});
