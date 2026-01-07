import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePage } from './home-page';
import { provideRouter } from '@angular/router';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeAll(() => {
    // Mock IntersectionObserver for @defer (on viewport)
    (globalThis as any).IntersectionObserver = class IntersectionObserver {
      observe() {}
      unobserve() {}
      disconnect() {}
    };
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePage],
      providers: [provideRouter([]), provideNoopAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render eager sections', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-about-section')).toBeTruthy();
  });
});
