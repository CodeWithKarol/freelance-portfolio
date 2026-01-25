import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectScreenshotsComponent } from './project-screenshots.component';

describe('ProjectScreenshotsComponent', () => {
  let component: ProjectScreenshotsComponent;
  let fixture: ComponentFixture<ProjectScreenshotsComponent>; // Use direct component for unit test usually, or host.
  // Using direct component slightly easier for inputs with signals calling component.screenshots() directly if set properly or using host.
  // Recent Angular versions allow setting signal inputs in TestBed component refs? No, safer to use wrapper or setInput.

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectScreenshotsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectScreenshotsComponent);
    component = fixture.componentInstance;

    // Set required input
    fixture.componentRef.setInput('screenshots', ['img1.jpg', 'img2.jpg']);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render screenshots list', () => {
    const images = fixture.nativeElement.querySelectorAll('.group img');
    // The template iterates screenshots.
    expect(images.length).toBe(2);
  });

  it('should open zoom modal on click', () => {
    component.openZoom('img1.jpg');
    fixture.detectChanges();

    expect(component.selectedImage()).toBe('img1.jpg');
    expect(document.body.style.overflow).toBe('hidden');

    const modal = fixture.nativeElement.querySelector('[role="dialog"]');
    expect(modal).toBeTruthy();
  });

  it('should close zoom modal on close', () => {
    component.openZoom('img1.jpg');
    fixture.detectChanges();

    component.closeZoom();
    fixture.detectChanges();

    expect(component.selectedImage()).toBeNull();
    expect(document.body.style.overflow).toBe('');

    const modal = fixture.nativeElement.querySelector('[role="dialog"]');
    expect(modal).toBeFalsy();
  });

  it('should toggle zoom level', () => {
    component.openZoom('img1.jpg');

    expect(component.isZoomed()).toBe(false);

    component.toggleZoom();
    expect(component.isZoomed()).toBe(true);

    component.toggleZoom();
    expect(component.isZoomed()).toBe(false);
  });
});
