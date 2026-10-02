---
name: refactor-component
description: Refactors a React component for performance, accessibility, and clean TypeScript typing in an isolated subagent.
context: fork
---

# Refactor Component Workflow

Perform a comprehensive refactor on the targeted component:

1. **Analysis**: Check the target file for inline styles, missing accessibility (`aria-*`) tags, and weak TypeScript types (`any`).
2. **Refactoring**:
   * Move inline styles to CSS Modules.
   * Add proper `React.FC` or explicit prop interface definitions.
   * Add accessible standard ARIA attributes.
3. **Quality Gate Verification**: Run `npx tsc --noEmit` using the Bash tool.
4. **Summary**: Output a clear list of refactored items and the build status.