import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkPage } from './work-page';
import { provideRouter } from '@angular/router';
import { SeoService } from '../../../../core/seo/seo.service';
import { vi } from 'vitest';

describe('WorkPage', () => {
  let component: WorkPage;
  let fixture: ComponentFixture<WorkPage>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let mockSeoService: any;

  beforeEach(async () => {
    mockSeoService = {
      updateSeo: vi.fn(),
      setJsonLd: vi.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [WorkPage],
      providers: [provideRouter([]), { provide: SeoService, useValue: mockSeoService }],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update SEO on init', () => {
    expect(mockSeoService.updateSeo).toHaveBeenCalled();
  });
});
