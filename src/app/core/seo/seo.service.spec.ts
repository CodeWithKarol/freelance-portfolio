import { TestBed } from '@angular/core/testing';
import { SeoService } from './seo.service';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { vi } from 'vitest';

describe('SeoService', () => {
  let service: SeoService;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let titleService: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let metaService: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let mockDocument: any;

  beforeEach(() => {
    titleService = { setTitle: vi.fn() };
    metaService = { updateTag: vi.fn() };

    mockDocument = {
      createElement: vi.fn().mockImplementation(() => {
        return { setAttribute: vi.fn(), appendChild: vi.fn() };
      }),
      head: { appendChild: vi.fn() },
      querySelector: vi.fn(),
      getElementById: vi.fn(),
    };

    TestBed.configureTestingModule({
      providers: [
        SeoService,
        { provide: Title, useValue: titleService },
        { provide: Meta, useValue: metaService },
        { provide: DOCUMENT, useValue: mockDocument },
      ],
    });
    service = TestBed.inject(SeoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should update title', () => {
    service.updateSeo({ title: 'Test Title', description: 'desc', url: 'url' });
    expect(titleService.setTitle).toHaveBeenCalledWith('Test Title | Karol Modelski Portfolio');
  });
});
