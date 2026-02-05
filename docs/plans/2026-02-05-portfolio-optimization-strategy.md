# Portfolio Strategy: Freelance vs. Agency

## Goal
Optimize `freelance-portfolio` to target "Small Gigs" and "Micro-Engagements" without cannibalizing `scale-sail-agency` (Enterprise Modernization).

## Analysis

### 1. About Section (`AboutSection`)
- **Current**: Focuses on "Independent Angular Architect", "Available for Assignment", and links to Scale Sail.
- **Overlap**: High. Mentions "Enterprise Frontends" similar to Agency.
- **Action**: **Keep**, but refine copy to emphasize *individual availability* for smaller tasks. The link to Agency is good for credibility.

### 2. Projects Section (`ProjectsSection`)
- **Current**: Visual Gallery style (added in previous step).
- **Overlap**: Uses same projects as Agency (Admin Panel, QuickCart).
- **Differentiation**: Agency has deep-dive case studies ("Problem/Solution/Results"). Freelance has "Gallery + Quick Tech Tags".
- **Action**: **Keep**. This differentiation is successful.

### 3. Gigs Section (`GigsSection`)
- **Current**: 4 fixed-scope offers (Code Review, Audit, etc.).
- **Overlap**: None. Agency sells "Transformation", Freelance sells "Tasks".
- **Action**: **Keep**. This is the core differentiator.

### 4. Experience Section (`ExperienceSection`)
- **Current**: "Deployment Log" / Resume style.
- **Overlap**: Low. Agency site doesn't typically show a personal resume.
- **Action**: **Keep**. Clients hiring a freelancer want to know *your* history, not just the agency's portfolio.

### 5. Skills Section (`SkillsSection`)
- **Current**: Detailed breakdown of "System Capabilities" and "Core Runtime".
- **Overlap**: Medium. Agency site likely lists tech stack.
- **Action**: **Keep**, but simplify if possible. The "System Capabilities" metaphor is a bit heavy for "Micro-engagements", but it reinforces expertise.

### 6. Services (Implicit)
- **Problem**: `PortfolioStore` contains a `services` list ("Enterprise Migration", "SaaS Engineering") which is **Direct Content Cannibalization** of the Agency site.
- **Action**: **Delete** `services` from `PortfolioStore` (or ensure it's never used/displayed). Since `HomePage` doesn't use a `ServicesSection`, we are safe, but we should remove the unused data to avoid confusion.

## Recommendations

### DELETE
- Remove `services` data from `PortfolioStore` to prevent accidental usage.
- (Optional) Remove "Enterprise" buzzwords from `AboutSection` if focusing purely on "Micro-Engagements".

### ADD
- **"How I Work" (Process) Section**: Simple 3-step visualization (e.g., "1. Scope -> 2. Sprint -> 3. Handoff"). This builds trust for small clients who fear scope creep.
- **FAQ Section**: Specific to freelancing (e.g., "Do you work hourly?", "What is your availability?").

## Plan Update
1. Clean up `PortfolioStore` (remove `services`).
2. Add `ProcessSection`.
3. Add `FaqSection`.
