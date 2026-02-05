# Design: Micro-Engagements Section

## Overview
Add a "Micro-Engagements" (or "Gigs") section to the freelance portfolio. This differentiates from the agency's "Enterprise Modernization" by offering low-friction, fixed-scope services suitable for smaller clients or quick wins.

## Content Strategy
Focus on "Productized Services" with clear deliverables and (optional) starting prices. This reduces the "hiring friction" typical of freelance negotiations.

### Proposed Gigs
1.  **Code Review Deep Dive**: "I review one critical PR or module. You get a video walkthrough + annotated comments."
2.  **Performance Quick-Win**: "Audit of one page. I identify top 3 bottlenecks and provide a remediation plan."
3.  **Component Build**: "You provide the Figma, I deliver a fully accessible, tested, signal-based Angular component."
4.  **1:1 Consultation**: "60 minutes to unblock a specific architectural problem."

## Architecture
- **Data Model**: Add `Gig` interface to `portfolio.model.ts`.
- **Store**: Add `gigs` signal to `portfolio-store.ts`.
- **Component**: `GigsSection` (`src/app/features/portfolio/components/gigs/gigs-section.ts`).
- **Design**:
    - **Layout**: 2x2 Grid or horizontal scroll on mobile.
    - **Card Style**: Distinct from "Projects". Maybe "Ticket" style or simple "Service Card" with a clear "Buy/Book" button.
    - **Placement**: After "Projects" (Proof -> Offer).

## Implementation Steps
1.  Define `Gig` interface.
2.  Add data to `PortfolioStore`.
3.  Create `GigsSection` component.
4.  Add to `HomePage`.
