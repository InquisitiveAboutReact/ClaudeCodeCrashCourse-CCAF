# Claude Code Masterclass: Tooling & Orchestration Guide

This document is a specialized knowledge base focusing on the **Claude Code CLI**, its internal orchestration, and advanced configuration. Rather than a project log, this is a guide on *how to use Claude Code* to build professional software.

---

## 🛠️ Claude Code Core Architecture

### 1. The Orchestration Layer (Agents & Subagents)
Claude Code is not just a chat interface; it is an orchestrator. 
- **Main Agent**: The primary entry point that handles user intent.
- **Specialized Subagents**: When complex tasks arise, the main agent spawns subagents (e.g., `Explore`, `Plan`, `Researcher`).
- **Forking**: The ability to create a "fork" of the current session to handle a parallel task without polluting the main conversation context.
- **Delegation**: Moving from high-level intent $\rightarrow$ `Plan` agent $\rightarrow$ `Execution` $\rightarrow$ `Verification`.

### 2. Custom Skills (`.claude/skills/`)
Skills are packaged instructions that allow Claude to perform complex, multi-step workflows consistently.
- **Creation Process**: 
  1. Define the skill's purpose and logic in a `SKILL.md` file.
  2. Place it in the `.claude/skills/` directory.
  3. Invoke it using the `/skill-name` or `/build-feature` syntax.
- **Benefit**: Standardizes quality gates (e.g., always running `tsc --noEmit` before finishing).

### 3. Extending Capabilities with MCP
The **Model Context Protocol (MCP)** allows Claude to interact with the local system and external APIs.
- **`mcp.json`**: The configuration file that defines which MCP servers (filesystem, git, etc.) are active.
- **Filesystem Extended**: Used for advanced directory manipulation and bulk file reading.
- **Git MCP**: Allows Claude to manage branches, commits, and pushes directly without manual bash commands.
- **Server Integration**: Adding a new MCP server extends Claude's "senses" (e.g., adding a database MCP to allow Claude to query SQL).

### 4. Context & Memory Management
Context is the most precious resource in LLM development.
- **The Context Window**: Monitoring usage via `/context` to avoid "forgetting" early parts of the conversation.
- **Persistent Memory**: Using the `.claude/memory/` directory to store facts that survive across different sessions.
- **Hygiene Sprints**: 
  - Regular pruning of unused files and obsolete memories.
  - Clearing the Git status to reduce metadata noise in the prompt.
- **Autocompact**: Understanding how the buffer compacts older messages to make room for new ones.

---

## 🎓 Advanced Workflow Patterns

### Pattern A: The "Safe-to-Code" Loop
Instead of writing code immediately, follow this sequence:
1. **Explore**: `Explore` agent maps the codebase $\rightarrow$ identifies existing patterns.
2. **Plan**: `Plan` agent creates a step-by-step blueprint $\rightarrow$ User approves.
3. **Execute**: Implement changes in small, verifiable chunks.
4. **Verify**: Run automated tests/typechecks $\rightarrow$ Commit.

### Pattern B: Parallel Execution
Using multiple subagents to handle different parts of a feature:
- **Agent 1**: Researching API documentation.
- **Agent 2**: Writing the frontend UI.
- **Agent 3**: Implementing the backend logic.
- **Main Agent**: Merging the results and performing final QA.

---

## 📈 Tooling Summary Table

| Tool/Feature | Purpose | Key Configuration/Location |
| :--- | :--- | :--- |
| **Skills** | Repeatable workflows | `.claude/skills/` |
| **MCP** | System/API Access | `mcp.json` |
| **Memory** | Cross-session persistence | `.claude/memory/` |
| **CLAUDE.md** | Project standards/Rules | Root directory |
| **Subagents** | Task decomposition | Internal orchestration |
| **Context** | Resource monitoring | `/context` command |

---

*This document is a living guide. As the Claude Code CLI evolves, these patterns are updated to reflect the current state of AI-assisted engineering.*
