import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarSection } from './navbar-section';
import { provideRouter } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { vi } from 'vitest';

describe('NavbarSection', () => {
  let component: NavbarSection;
  let fixture: ComponentFixture<NavbarSection>;

  beforeEach(async () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });

    const store: Record<string, string> = {};
    const mockGetItem = vi.spyOn(Storage.prototype, 'getItem');
    mockGetItem.mockImplementation((key: string) => store[key] || null);

    const mockSetItem = vi.spyOn(Storage.prototype, 'setItem');
    mockSetItem.mockImplementation((key: string, value: string) => {
      store[key] = value + '';
    });

    await TestBed.configureTestingModule({
      imports: [NavbarSection, LucideAngularModule],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle theme', () => {
    const initial = component.isDark();
    component.toggleTheme();
    expect(component.isDark()).toBe(!initial);
    expect(localStorage.setItem).toHaveBeenCalledWith('theme', !initial ? 'dark' : 'light');
  });

  it('should toggle menu', () => {
    expect(component.isMenuOpen()).toBe(false);
    component.toggleMenu();
    expect(component.isMenuOpen()).toBe(true);
    expect(document.body.style.overflow).toBe('hidden');

    component.toggleMenu();
    expect(component.isMenuOpen()).toBe(false);
    expect(document.body.style.overflow).toBe('');
  });
});
