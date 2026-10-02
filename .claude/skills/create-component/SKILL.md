---
name: create-component
description: Generates a React component with TypeScript types and CSS module
allowed-tools:
  - Read
  - Edit
  - Write
  - Bash
---

# Component Generator Subagent

When the user runs `/create-component <ComponentName>`:
1. Create `src/components/$ARGUMENTS/$ARGUMENTS.tsx` with a typed React functional component.
2. Create `src/components/$ARGUMENTS/$ARGUMENTS.module.css` with basic styles.
3. Run `npx tsc --noEmit` via Bash tool to verify zero TypeScript errors.