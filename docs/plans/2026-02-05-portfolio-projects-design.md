# Portfolio Projects Section Design
Date: 2026-02-05
Status: Validated

## Overview
Add a "Projects" section to the `HomePage` to showcase freelance work. The goal is to demonstrate tangible proof of skills to potential "small gig" clients. To avoid SEO content cannibalization with the agency site, this section will use a "Visual Gallery" approach with minimal text.

## Architecture

### Data Model
New interface `Project` in `src/app/core/portfolio/portfolio.model.ts`:
```typescript
export interface Project {
  title: string;
  description: string; // Short (1-2 sentences)
  tags: string[]; // e.g., 'Angular', 'Tailwind'
  thumbnailUrl: string; // Path to image
  liveUrl?: string;
  githubUrl?: string;
}
```

### State Management
Update `PortfolioStore` (`src/app/core/portfolio/portfolio-store.ts`):
- Add `readonly projects = signal<Project[]>([...])`
- Populate with placeholder data initially (user to update with real links later).

### Component
New Standalone Component: `ProjectsSection`
- Path: `src/app/features/portfolio/components/projects/projects-section.ts`
- Selector: `app-projects-section`
- ChangeDetection: `OnPush`

## UI/UX Design
- **Placement:** On `HomePage`, between `AboutSection` and `ExperienceSection`.
- **Layout:** CSS Grid.
  - Mobile: 1 column.
  - Tablet: 2 columns.
  - Desktop: 3 columns.
- **Card Design:**
  - **Image:** Top aspect ratio 16:9 (using `NgOptimizedImage`).
  - **Content:** Title + Tags visible by default.
  - **Interaction:** Hover state reveals the short description and call-to-action buttons (Live/Code).
  - **Style:** Clean, modern, consistent with existing site theme (Tailwind).

## Implementation Steps
1. Define `Project` interface.
2. Add data to `PortfolioStore`.
3. Generate `ProjectsSection` component.
4. Implement HTML/CSS for the grid and card.
5. Add `ProjectsSection` to `HomePage`.
