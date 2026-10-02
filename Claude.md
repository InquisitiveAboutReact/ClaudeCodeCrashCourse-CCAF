# React Architecture & Code Standards

## Build & Test Commands
- Dev Server: `npm run dev`
- Build: `npm run build`
- Typecheck: `npx tsc --noEmit`

# Project Memory & Architecture Guideline

## Code Style Guidelines
- **Components**: Always use TypeScript, functional components, and named exports.
- **Styling**: Always use CSS Modules (`*.module.css`). Never use inline style objects.
- **State**: Keep component state local where possible; lift state to standard React Context for dark mode.
- **Guardrails**: Do NOT introduce extra external state libraries like Redux or Zustand.

## Strict Automated Quality Gates
- **Pre-Completion Requirement**: You MUST run `npx tsc --noEmit` via the Bash tool before declaring any component or feature complete.
- **Accessibility**: All interactive elements (buttons, inputs) must include explicit `aria-label` or visible text labels.
- **File Structure**:
  - Components: `src/components/ComponentName/ComponentName.tsx`
  - Styles: `src/components/ComponentName/ComponentName.module.css`

  ## Response Behavior
- Keep explanations brief and deliver production-ready code directly.