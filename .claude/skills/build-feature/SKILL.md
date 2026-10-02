---
name: build-feature
description: Builds a complete feature module in an isolated background subagent with automatic quality gate checks and git workflow.
context: fork
---

# Feature Module Build Workflow

1. **Architecture**: Identify required sub-components, types, and CSS module files.
2. **Implementation**:
   - Save functional React TypeScript components in `src/components/`.
   - Implement CSS Modules with theme variables.
   - Enforce explicit `aria-label` accessibility attributes on interactive elements.
3. **Quality Gate**: Execute `npx tsc --noEmit` via the Bash tool before completing.
4. **Summary**: Return a clear summary of files created, quality gate status, and Git changes.