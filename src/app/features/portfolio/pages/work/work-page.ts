import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CaseStudiesSection } from '../../components/case-studies/case-studies-section';

@Component({
  selector: 'app-work-page',
  standalone: true,
  imports: [CaseStudiesSection],
  template: `
    <div class="pt-10">
      <app-case-studies-section />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkPage {}
