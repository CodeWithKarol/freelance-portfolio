import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaseStudyPage } from './case-study-page';
import { PortfolioStore } from '../../../../core/portfolio/portfolio-store';
import { SeoService } from '../../../../core/seo/seo.service';
import { provideRouter } from '@angular/router';
import { signal } from '@angular/core';
import { vi } from 'vitest';

describe('CaseStudyPage', () => {
  let component: CaseStudyPage;
  let fixture: ComponentFixture<CaseStudyPage>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let mockPortfolioStore: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let mockSeoService: any;

  const mockCaseStudies = [
    {
      id: 'test-study',
      title: 'Test Study',
      tagline: 'A test case study',
      heroImage: '/test.jpg',
      challenge: 'Test challenge',
      solution: 'Test solution',
      techStack: ['Angular'],
      results: ['Result 1'],
      repoUrl: 'http://repo',
      demoUrl: 'http://demo',
    },
  ];

  beforeEach(async () => {
    mockPortfolioStore = {
      caseStudies: signal(mockCaseStudies),
    };

    mockSeoService = {
      updateSeo: vi.fn(),
      setJsonLd: vi.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [CaseStudyPage],
      providers: [
        provideRouter([]),
        { provide: PortfolioStore, useValue: mockPortfolioStore },
        { provide: SeoService, useValue: mockSeoService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CaseStudyPage);
    component = fixture.componentInstance;

    // Set required input
    fixture.componentRef.setInput('slug', 'test-study');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should find the correct case study based on slug', () => {
    expect(component.caseStudy()).toEqual(mockCaseStudies[0]);
  });

  it('should update SEO when case study is found', () => {
    expect(mockSeoService.updateSeo).toHaveBeenCalledWith(
      expect.objectContaining({
        title: 'Test Study',
        url: '/work/test-study',
      }),
    );
  });

  it('should set JSON-LD data', () => {
    expect(mockSeoService.setJsonLd).toHaveBeenCalled();
  });
});
