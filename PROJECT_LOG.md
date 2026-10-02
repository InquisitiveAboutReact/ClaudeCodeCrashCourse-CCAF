# Claude Code Crash Course: Project Documentation

This document serves as a live record of the development process for the TaskManager application, demonstrating the capabilities of Claude Code and the best practices for AI-assisted software engineering.

## 🚀 Project Overview
The **TaskManager** is a React application designed to track tasks and visualize productivity metrics. It transitioned from a static Vite starter template to a dynamic, type-safe productivity dashboard.

## 🛠️ Journey & Implementation Log

### Phase 1: Foundation & Architecture
- **Initial Setup**: Started with a standard Vite + React + TypeScript template.
- **Component Standards**: Established strict coding guidelines in `CLAUDE.md`:
  - Use of TypeScript functional components.
  - CSS Modules for styling (`*.module.css`).
  - local state management (avoiding external libraries like Redux).
  - Strict accessibility (ARIA labels) and quality gates (`npx tsc --noEmit`).

### Phase 2: Feature Implementation (The Dashboard)
- **Feature: Dashboard Stats**:
  - Created `StatCard` for reusable metric display.
  - Created `DashboardStats` to aggregate key performance indicators (KPIs).
  - Implemented logic for "Total Tasks", "Completed Tasks", and "Productivity Rate".
- **UI/UX Overhaul**: 
  - Replaced default Vite boilerplate with a professional SaaS layout.
  - Added a top navigation header, main content area, and a structured footer.
  - Implemented a modern color palette (Indigo/Slate) and responsive design for mobile.

### Phase 3: Making it Dynamic
- **State Management**: Shifted the source of truth to `App.tsx` using React `useState`.
- **Dynamic Task Flow**:
  - Defined a global `Task` type in `src/types/task.ts`.
  - Built a `TaskForm` modal for adding new tasks.
  - Integrated `RecentActivity` to show a real-time feed of the latest 5 tasks.
- **Visual Data**: Created a custom CSS-based progress gauge to animate the productivity rate.

### Phase 4: Stability & Hygiene
- **ESM & Type Fixes**: Resolved `verbatimModuleSyntax` errors by implementing type-only imports (`import type`), fixing blank-page issues in the Vite dev server.
- **Project Hygiene Sprint**:
  - **Git Optimization**: Consolidated all changes into clean, semantic commits.
  - **Code Pruning**: Conducted an "orphan search" to find and delete unused components (`NotificationBadge`, `SearchBar`, `ThemeToggle`).
  - **Build Verification**: Verified the entire application using `npm run build` to ensure production readiness.

## 🎓 Key Learnings for the Crash Course

### 1. The AI Workflow
- **Agentic Delegation**: Using specialized agents (like `Explore` and `Plan`) to analyze code and design solutions before writing a single line.
- **Iterative Refinement**: Moving from a "mockup" $\rightarrow$ "functional" $\rightarrow$ "polished" state.
- **Quality Gates**: Using automated tools (`tsc`) to prevent regressions.

### 2. Technical Takeaways
- **CSS Modules**: The importance of scoped styling in larger React apps to avoid global namespace collisions.
- **Type Safety**: How a central `types/` directory prevents bugs when passing data between multiple components.
- **Performance**: Reducing context noise by cleaning the Git status and removing unused files.

## 📈 Current State
- **Status**: Production-ready prototype.
- **Port**: 4000.
- **Build**: Verified.
