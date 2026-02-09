import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePage } from './home-page';
import { provideRouter } from '@angular/router';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeAll(() => {
    // Mock IntersectionObserver for @defer (on viewport)
    Object.defineProperty(globalThis, 'IntersectionObserver', {
      writable: true,
      value: class IntersectionObserver {
        observe() {
          return;
        }
        unobserve() {
          return;
        }
        disconnect() {
          return;
        }
      },
    });
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePage],
      providers: [provideRouter([])],
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
