import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FaqSection } from './faq-section';
import { By } from '@angular/platform-browser';

describe('FaqSection', () => {
  let component: FaqSection;
  let fixture: ComponentFixture<FaqSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqSection],
    }).compileComponents();

    fixture = TestBed.createComponent(FaqSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render items', () => {
    const questions = fixture.debugElement.queryAll(By.css('h3 button'));
    expect(questions.length).toBe(component.items.length);
  });

  it('should toggle item on click', () => {
    const firstIndex = 0;
    const button = fixture.debugElement.queryAll(By.css('h3 button'))[firstIndex];

    // Initial state: closed (or whatever default is, assume 0 is open by default from code reading?)
    // In code: readonly openIndex = signal<number | null>(0); So index 0 is OPEN.

    expect(component.openIndex()).toBe(0);

    // Click to close
    button.nativeElement.click();
    fixture.detectChanges();
    expect(component.openIndex()).toBeNull();

    // Click to open
    button.nativeElement.click();
    fixture.detectChanges();
    expect(component.openIndex()).toBe(0);
  });

  it('should only have one open item at a time', () => {
    component.toggle(1);
    fixture.detectChanges();
    expect(component.openIndex()).toBe(1);
  });

  it('should display answer when open', () => {
    // 0 is open by default
    const panel0 = fixture.debugElement.query(By.css(`#faq-panel-0`));
    expect(panel0.classes['grid-rows-[1fr]']).toBe(true);

    const panel1 = fixture.debugElement.query(By.css(`#faq-panel-1`));
    expect(panel1.classes['grid-rows-[0fr]']).toBe(true);
  });
});
