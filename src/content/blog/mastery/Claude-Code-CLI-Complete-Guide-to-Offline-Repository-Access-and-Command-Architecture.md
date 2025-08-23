---
title: "Claude Code CLI: Complete Guide to Offline Repository Access & Command Architecture"
description: "Claude Code CLI: Complete Guide to Offline Repository Access & Command Architecture"
pubDate: "2025-08-22"
---

# Claude Code CLI: Complete Guide to Offline Repository Access & Command Architecture

## Table of Contents
1. [Introduction](#introduction)
2. [Core Concepts](#core-concepts)
3. [Setting Up Slash Commands](#setting-up-slash-commands)
4. [Accessing Offline Repositories](#accessing-offline-repositories)
5. [Architecture: Commands vs Subagents vs Agents](#architecture-commands-vs-subagents-vs-agents)
6. [Practical Workflows](#practical-workflows)
7. [Advanced Patterns](#advanced-patterns)
8. [Quick Reference Cheat Sheet](#quick-reference-cheat-sheet)
9. [Troubleshooting](#troubleshooting)
10. [Sources & References](#sources--references)

---

## Introduction

This guide provides comprehensive documentation for working with offline repositories and local documents in Claude Code CLI without requiring internet access. It covers all methods for file access, custom command creation, and the architectural differences between various Claude Code components.

This documentation is compiled from official Anthropic documentation[^1][^4][^5], engineering best practices[^2], and community-tested patterns[^3].

### Key Principle
**Claude Code operates with your local filesystem permissions** - it doesn't need internet to access local files, just proper configuration and permissions.

---

## Core Concepts

### What Are Slash Commands?
Slash commands are **reusable prompt templates** stored as Markdown files that Claude Code executes within your current context[^1]. Think of them as "saved recipes" or "macros" that expand into full instructions while maintaining awareness of your ongoing conversation.

### The @ Reference System
The `@` symbol provides **instant file inclusion** into Claude's context[^2], similar to how you might import a module in programming, but for conversation context.

### Directory Access Methods
Claude Code can access directories through[^3]:
1. Current working directory (automatic)
2. Additional directories via `--add-dir` flag
3. Dynamic addition via `/add-dir` command
4. MCP filesystem servers (for more advanced setups)

---

## Setting Up Slash Commands

### Directory Structure[^1]

```bash
# Two locations for slash commands:
~/.claude/commands/          # Personal (available globally)
.claude/commands/            # Project-specific (shared with team)
```

### Creating Your First Slash Command

#### Step 1: Create the commands directory
```bash
# For personal commands (available in all projects)
mkdir -p ~/.claude/commands

# For project-specific commands
mkdir -p .claude/commands
```

#### Step 2: Create a command file
```bash
# Example: Create a code review command
cat > ~/.claude/commands/review.md << 'EOF'
Perform a comprehensive code review focusing on:

1. Code quality and readability
2. Performance implications
3. Security vulnerabilities
4. Best practices adherence
5. Potential bugs

Provide specific, actionable feedback with code examples where appropriate.
EOF
```

#### Step 3: Use the command
```bash
# In Claude Code:
> /review
```

### Command with Arguments[^1]

```bash
# Create a command that accepts arguments
cat > ~/.claude/commands/fix-issue.md << 'EOF'
Fix GitHub issue #$ARGUMENTS by:

1. Understanding the issue description
2. Locating relevant code
3. Implementing the fix
4. Adding appropriate tests
5. Creating a descriptive commit

Follow our coding standards and ensure all tests pass.
EOF

# Usage:
> /fix-issue 123
```

### Command with File References[^1]

```bash
# Create a command that references specific files
cat > ~/.claude/commands/analyze-performance.md << 'EOF'
Analyze performance bottlenecks in:

@src/api/handlers.js
@src/database/queries.js
@src/cache/redis-client.js

Focus on:
- Database query optimization
- Caching strategies
- Algorithm complexity
- Memory usage patterns

Provide specific optimization recommendations with code examples.
EOF
```

### Command with Bash Execution[^1]

```bash
cat > ~/.claude/commands/smart-commit.md << 'EOF'
---
allowed-tools: Bash(git add:*), Bash(git status:*), Bash(git commit:*)
description: Create intelligent git commits
---

## Current Status
!`git status`

## Recent Changes
!`git diff HEAD`

## Recent Commits
!`git log --oneline -5`

Based on the changes above, create a meaningful commit with:
1. Conventional commit format
2. Descriptive message
3. Bullet points for major changes
EOF
```

### Namespaced Commands[^1]

```bash
# Create namespaced commands using subdirectories
mkdir -p ~/.claude/commands/test
mkdir -p ~/.claude/commands/deploy
mkdir -p ~/.claude/commands/debug

# Creates /test:unit command
echo "Run unit tests and fix failures" > ~/.claude/commands/test/unit.md

# Creates /deploy:staging command
echo "Deploy to staging environment" > ~/.claude/commands/deploy/staging.md

# Creates /debug:memory command
echo "Debug memory leaks" > ~/.claude/commands/debug/memory.md
```

---

## Accessing Offline Repositories

### Method 1: Direct Navigation

The simplest approach - navigate to your repository and start Claude:

```bash
cd /path/to/your/offline-repository
claude

# Now Claude has access to all files in this directory and subdirectories
```

### Method 2: Using --add-dir Flag[^3]

Start Claude with access to additional directories:

```bash
# Single additional directory
claude --add-dir /path/to/offline-repo

# Multiple directories
claude --add-dir ~/projects/backend --add-dir ~/projects/frontend

# With relative paths
claude --add-dir ../shared-components --add-dir ../../documentation
```

**Practical Example:**
```bash
# Working on frontend while referencing backend API
cd ~/projects/frontend
claude --add-dir ~/projects/backend

# In Claude:
> Check if the API endpoints in @../backend/routes/api.js match our frontend calls
```

### Method 3: Dynamic Directory Addition[^3]

Add directories during an active Claude session:

```bash
# Start Claude normally
claude

# Later in the session, add access to another directory
> /add-dir /path/to/offline-documentation
> /add-dir ~/reference-projects/similar-app

# Now you can reference files from these directories
> Compare our implementation with @~/reference-projects/similar-app/src/auth.js
```

### Method 4: Using @ References[^2][^5]

The `@` symbol provides instant file access within your accessible directories:

```bash
# Reference single file
> Explain the logic in @src/utils/validator.js

# Reference multiple files
> Compare @src/old-api.js with @src/new-api.js

# Reference entire directories (lists contents)
> Show me what's in @src/components/

# Reference with full paths
> Analyze @/home/user/projects/offline-repo/src/main.js

# With tab completion (incredibly useful!)
> Review @src/<TAB>  # Shows available files/folders
```

### Method 5: Create Repository Search Commands

Create specialized commands for searching offline repositories:

```bash
# Create a repository search command
cat > ~/.claude/commands/search-docs.md << 'EOF'
Search the offline documentation repository for: $ARGUMENTS

Documentation locations:
@~/offline-docs/api-reference/
@~/offline-docs/guides/
@~/offline-docs/examples/

Provide:
1. Relevant sections found
2. Code examples if available
3. Related documentation
4. Implementation suggestions
EOF

# Usage:
> /search-docs authentication flow
```

### Method 6: Project-Specific Repository Access

Create a project configuration that automatically includes offline repositories:

```bash
# In your project's .claude/commands/init-repos.md
cat > .claude/commands/init-repos.md << 'EOF'
Initialize access to all required offline repositories:

1. Core library: @~/offline-repos/core-lib/
2. Component library: @~/offline-repos/ui-components/
3. Documentation: @~/offline-repos/docs/
4. Examples: @~/offline-repos/examples/

These repositories are now available for reference throughout this session.
EOF

# Start each session with:
> /init-repos
```

### Method 7: Using CLAUDE.md for Persistent References[^5]

Include repository references in your CLAUDE.md file:

```markdown
# CLAUDE.md
## Project Dependencies

This project references the following offline repositories:
- Authentication Library: ~/offline-repos/auth-lib/
- Shared Components: ~/offline-repos/shared-components/
- API Documentation: ~/offline-repos/api-docs/

When working on authentication, reference:
@~/offline-repos/auth-lib/src/oauth2.js
@~/offline-repos/auth-lib/docs/setup.md

For component updates, check:
@~/offline-repos/shared-components/src/Button.jsx
@~/offline-repos/shared-components/styles/theme.css
```

---

## Architecture: Commands vs Subagents vs Agents

### Slash Commands - Context-Preserving Templates[^1]

**What they are:** Markdown templates that expand into the current conversation.

**Key characteristics:**
- ✅ PRESERVE all existing context
- ✅ See all previous conversation
- ✅ Know about files you've already discussed
- ✅ Execute within current session
- ✅ Inherit all permissions and tools

**Example scenario:**
```bash
# You've been working on auth system
You: "I'm debugging the login at line 42 of auth.js"
You: "@auth.js @database.js"
You: "/debug"  # This command KNOWS about line 42, both files, and the login context
```

**When to use:**
- Repetitive tasks that need current context
- Quick actions on files already in discussion
- Applying standard processes to current work
- Creating commits for changes already made

### Subagents - Fresh-Start Specialists[^4]

**What they are:** Independent AI personalities with isolated contexts.

**Key characteristics:**
- ❌ NO access to main conversation context
- ✅ Start completely fresh each time[^4]
- ✅ Own isolated memory/context window
- ✅ Specific tool permissions
- ✅ Return results to main conversation

**Example definition:**
```yaml
# ~/.claude/agents/security-auditor.md
---
name: security-auditor
description: Perform security audits with fresh perspective
tools: Read, Grep  # Limited tools - can't modify code
model: opus  # Use most capable model for security
---
You are a security specialist. Analyze code for vulnerabilities
without any assumptions or prior context. Be thorough and skeptical.
```

**Example usage:**
```bash
# Main conversation has discussed implementation details
You: "Use the security-auditor to check our auth system"
# Auditor starts fresh - unbiased by previous discussion
# Returns findings to main conversation
```

**When to use[^4]:**
- Need unbiased, fresh analysis
- Want to prevent context pollution
- Require different tool permissions
- Running parallel, independent tasks
- Need specialized expertise

### Main Agent - The Orchestrator[^2]

**What it is:** Your primary Claude Code instance managing everything.

**Key characteristics:**
- ✅ Maintains ALL conversation context
- ✅ Delegates to subagents
- ✅ Coordinates workflow
- ✅ Combines results from subagents
- ✅ Remembers everything in session

**Example workflow:**
```bash
You: "Implement new user authentication"
# Main agent creates plan, maintains context

You: "Use the backend-developer subagent for API"
# Delegates API work to specialist

You: "Use the frontend-developer subagent for UI"
# Delegates UI work to another specialist

You: "Now integrate both parts"
# Main agent has all context, combines work
```

### Comparison Table

| Aspect | Slash Commands | Subagents | Main Agent |
|--------|---------------|-----------|------------|
| Context | Inherits all | Starts fresh | Maintains all |
| Memory | Shares main memory | Own isolated memory | Primary memory |
| Tools | Same as main | Configurable per agent | All available |
| Use Case | Templates with context | Specialized tasks | Orchestration |
| Execution | In main conversation | Separate context | Primary context |
| Ideal For | Repetitive contextual tasks | Isolated specialized work | Overall coordination |

**Important Note on Context Efficiency[^2]:** Using subagents for complex problems, especially early in a conversation, tends to preserve context availability without much downside in terms of lost efficiency. This is because subagents operate in their own context window, preventing pollution of the main conversation.

---

## Practical Workflows

The following workflows combine the techniques described above and are based on patterns from Anthropic's official documentation[^5] and community best practices[^2].

### Workflow 1: Multi-Repository Development

```bash
# Setup: Working on microservice that depends on shared libraries
cd ~/projects/user-service
claude --add-dir ~/offline-repos/auth-lib --add-dir ~/offline-repos/shared-utils

# Create a custom command for cross-repo work
cat > .claude/commands/check-deps.md << 'EOF'
Verify all dependencies are correctly implemented:

1. Check auth integration:
   - Our implementation: @src/auth/handler.js
   - Library reference: @~/offline-repos/auth-lib/docs/integration.md

2. Verify utility usage:
   - Our usage: @src/utils/helpers.js
   - Library source: @~/offline-repos/shared-utils/src/index.js

Identify any mismatches or deprecated usage.
EOF

# Use the workflow
> /check-deps
```

### Workflow 2: Offline Documentation Reference System

```bash
# Create a comprehensive doc search system
mkdir -p ~/.claude/commands/docs

# General search
cat > ~/.claude/commands/docs/search.md << 'EOF'
Search offline documentation for: $ARGUMENTS

Repositories to search:
@~/docs/api-reference/
@~/docs/tutorials/
@~/docs/best-practices/

Return:
1. Most relevant sections
2. Code examples
3. Implementation notes
EOF

# API-specific search
cat > ~/.claude/commands/docs/api.md << 'EOF'
Find API documentation for: $ARGUMENTS

Check:
@~/docs/api-reference/endpoints/
@~/docs/api-reference/schemas/
@~/docs/api-reference/examples/

Include curl examples and response formats.
EOF

# Usage
> /docs:search authentication
> /docs:api user endpoints
```

### Workflow 3: Code Review with Offline Standards

```bash
# Setup code review against offline coding standards
cat > ~/.claude/commands/review-standards.md << 'EOF'
Review code against our offline standards documentation:

Standards references:
@~/standards/coding-guidelines.md
@~/standards/security-checklist.md
@~/standards/performance-best-practices.md
@~/standards/testing-requirements.md

For each file in the current changes:
1. Check compliance with coding guidelines
2. Verify security checklist items
3. Assess performance implications
4. Ensure testing requirements are met

Provide specific violations with rule references.
EOF
```

### Workflow 4: Parallel Development with Subagents[^4]

```bash
# Create specialized subagents for parallel work
# Backend subagent
cat > ~/.claude/agents/backend-dev.md << 'EOF'
---
name: backend-dev
description: Handle all backend API development
tools: Read, Write, Edit, Bash
---
You are a backend specialist. Focus on RESTful APIs,
database optimization, and server-side logic.
EOF

# Frontend subagent
cat > ~/.claude/agents/frontend-dev.md << 'EOF'
---
name: frontend-dev
description: Handle all frontend UI development
tools: Read, Write, Edit, Bash
---
You are a frontend specialist. Focus on React components,
responsive design, and user experience.
EOF

# Test subagent
cat > ~/.claude/agents/test-runner.md << 'EOF'
---
name: test-runner
description: Run tests and fix failures
tools: Read, Edit, Bash
---
You are a testing specialist. Run tests, diagnose failures,
and fix them while preserving test intent.
EOF

# Orchestrate parallel development
> Create user profile feature
> Use backend-dev subagent to create the API endpoints
> Use frontend-dev subagent to build the UI components
> Use test-runner subagent to ensure all tests pass
> Now integrate all parts and create a pull request
```

### Workflow 5: Monorepo Management[^5]

```bash
# Working across a monorepo with offline packages
cd ~/monorepo
claude

# Create monorepo navigation command
cat > .claude/commands/mono-nav.md << 'EOF'
Navigate and analyze our monorepo structure:

Packages:
@packages/core/
@packages/web-app/
@packages/mobile-app/
@packages/shared-components/
@packages/api-server/

Shared configurations:
@tsconfig.base.json
@.eslintrc.shared.js
@jest.config.base.js

Analyze dependencies between packages and identify:
1. Circular dependencies
2. Version mismatches
3. Unused dependencies
4. Missing peer dependencies
EOF
```

---

## Advanced Patterns

The following patterns are derived from community best practices and advanced usage scenarios[^2].

### Pattern 1: Context-Aware File Discovery

```bash
# Create a smart file finder
cat > ~/.claude/commands/find-related.md << 'EOF'
Find all files related to: $ARGUMENTS

Search strategy:
1. Look for direct references in @src/
2. Check import statements
3. Find test files
4. Locate documentation
5. Identify configuration files

Use grep to search for:
- Function/class names
- Import statements
- Comments mentioning the feature

Present findings organized by:
- Core implementation
- Tests
- Documentation
- Configuration
EOF
```

### Pattern 2: Incremental Context Building

```bash
# Start with minimal context, build up as needed
claude

# Step 1: Start focused
> Explain the purpose of @src/core/engine.js

# Step 2: Add related context
> /add-dir ~/offline-repos/engine-docs
> How does our implementation compare to @~/offline-repos/engine-docs/spec.md?

# Step 3: Bring in examples
> /add-dir ~/offline-repos/examples
> Show me similar implementations in @~/offline-repos/examples/
```

### Pattern 3: Template Command Chains

```bash
# Create commands that chain together
cat > ~/.claude/commands/feature-complete.md << 'EOF'
Complete feature implementation workflow:

1. First, run /analyze-requirements
2. Then, run /create-tests  
3. Next, run /implement-feature
4. Follow with /run-tests
5. Finally, run /create-pr

Each step should build on the previous results.
EOF
```

### Pattern 4: Dynamic Subagent Selection

```bash
# Create a meta-command that selects appropriate subagents
cat > ~/.claude/commands/smart-review.md << 'EOF'
Perform intelligent code review using appropriate subagents:

Based on the files changed:
- If backend files: Use backend-reviewer subagent
- If frontend files: Use frontend-reviewer subagent  
- If database files: Use database-expert subagent
- If security-sensitive: Use security-auditor subagent
- If performance-critical: Use performance-analyst subagent

Combine all feedback into a comprehensive review.
EOF
```

### Pattern 5: Offline Repository Index

```bash
# Create an index of all offline repositories
cat > ~/.claude/REPOSITORIES.md << 'EOF'
# Available Offline Repositories

## Core Libraries
- `~/repos/auth-lib` - Authentication library (OAuth2, JWT)
- `~/repos/database-lib` - Database abstraction layer
- `~/repos/cache-lib` - Caching utilities (Redis, Memory)

## Documentation
- `~/docs/api` - API documentation
- `~/docs/guides` - Development guides
- `~/docs/standards` - Coding standards

## Examples
- `~/examples/rest-api` - REST API examples
- `~/examples/graphql` - GraphQL examples
- `~/examples/microservices` - Microservice patterns

## Reference Projects
- `~/reference/competitor-app` - Competitor analysis
- `~/reference/legacy-system` - Legacy system to migrate from
EOF

# Reference in commands
cat > ~/.claude/commands/use-repos.md << 'EOF'
@~/.claude/REPOSITORIES.md

Load the appropriate repository based on the task at hand.
EOF
```

---

## Quick Reference Cheat Sheet

### Essential Commands[^1]

```bash
# Starting Claude Code
claude                          # Start in current directory
claude --add-dir /path/to/repo  # Start with additional directory
claude --dangerously-skip-permissions  # Skip permission prompts

# During Session
/add-dir /path/to/repo          # Add directory access
/clear                          # Clear conversation context
/compact                        # Compact conversation history
/help                           # Show available commands
/init                           # Initialize project with CLAUDE.md

# File References
@filename.js                    # Reference file in current context
@../other-repo/file.js          # Reference file in added directory
@~/repos/lib/file.js            # Reference with home path
@folder/                        # List folder contents
```

### Slash Command Locations[^1]

```bash
# Personal (global) commands
~/.claude/commands/command.md
~/.claude/commands/namespace/command.md

# Project-specific commands  
.claude/commands/command.md
.claude/commands/namespace/command.md

# Usage
/command                        # Simple command
/namespace:command              # Namespaced command
/command arguments here         # Command with arguments
```

### Subagent Locations[^4]

```bash
# Personal (global) subagents
~/.claude/agents/agent-name.md

# Project-specific subagents
.claude/agents/agent-name.md

# Usage
Use the agent-name subagent to...
Have agent-name analyze...
```

### File Reference Patterns

```bash
# In commands
@path/to/file                   # Direct reference
!`bash command`                 # Execute and include output
$ARGUMENTS                      # User-provided arguments

# In conversation
@file1.js @file2.js             # Multiple files
@src/**/*.test.js               # Glob patterns (if supported)
```

---

## Troubleshooting

### Issue: Slash command not found

**Solution:**
```bash
# Check if command exists
ls ~/.claude/commands/
ls .claude/commands/

# Verify file has .md extension
# Verify file is readable
chmod +r ~/.claude/commands/command.md
```

### Issue: Cannot access directory

**Solution:**
```bash
# Check if directory was added
/add-dir /full/path/to/directory

# Use absolute paths, not relative
claude --add-dir ~/projects/repo  # Good
claude --add-dir ../repo          # May not work as expected

# Verify directory exists and is readable
ls -la /path/to/directory
```

### Issue: @ reference not working

**Solution:**
```bash
# Use tab completion to verify path
@src/<TAB>

# Check if file is in accessible directory
# May need to add directory first
/add-dir /path/containing/file

# Use full path if needed
@/full/path/to/file.js
```

### Issue: Subagent not triggered

**Solution:**
```bash
# Be explicit in request
"Use the security-auditor subagent to..."

# Check subagent file format
# Must have proper YAML frontmatter
---
name: exact-name
description: Clear description
---

# Verify file location
ls ~/.claude/agents/
ls .claude/agents/
```

### Issue: Context getting polluted

**Solution:**
```bash
# Use subagents for isolated work
# Clear context between major tasks
/clear

# Compact when context is full
/compact Focus on the current feature

# Use focused slash commands
# Avoid loading unnecessary files
```

---

## Best Practices Summary[^2]

1. **Organize Commands**: Use namespaces for related commands
2. **Document Dependencies**: List required directories in CLAUDE.md
3. **Start Minimal**: Add directories as needed, not all upfront
4. **Use Subagents**: For isolated, specialized work
5. **Clear Regularly**: Use `/clear` between unrelated tasks
6. **Version Control**: Include `.claude/` in git for team sharing
7. **Security First**: Only add directories you need access to
8. **Tab Completion**: Use `@<TAB>` to explore available files
9. **Combine Methods**: Use multiple access patterns together
10. **Test Commands**: Verify slash commands work before relying on them

---

## Final Notes

This guide covers all methods for working with offline repositories in Claude Code CLI. The key insight is that Claude Code operates within your filesystem - it doesn't need internet access to read your local files, just proper configuration and permissions.

Remember:
- **Slash commands** = Templates with context
- **Subagents** = Fresh-start specialists
- **@ references** = Instant file access
- **--add-dir** = Extended directory access

Combine these tools based on your specific needs, and you'll have powerful, efficient workflows for working with any offline codebase or documentation.

---

## Sources & References


### Additional Resources

- **Claude Code Overview**: https://docs.anthropic.com/en/docs/claude-code/overview
- **Interactive Mode Documentation**: https://docs.anthropic.com/en/docs/claude-code/interactive-mode
- **CLI Reference**: https://docs.anthropic.com/en/docs/claude-code/cli-reference
- **Memory Management**: https://docs.anthropic.com/en/docs/claude-code/memory
- **GitHub Integration**: https://github.com/anthropics/claude-code

### Community Resources

- **Awesome Claude Code**: https://github.com/hesreallyhim/awesome-claude-code  
*Curated list of community-created commands, subagents, and workflows*

- **Claude Command Suite**: https://github.com/qdhenry/Claude-Command-Suite  
*Collection of 119+ production-ready slash commands*

- **Production Commands Collection**: https://github.com/wshobson/commands  
*Production-ready slash commands and subagent orchestration examples*

### Note on Sources
This guide synthesizes information from official Anthropic documentation, community best practices, and practical implementation examples. Always refer to the official Anthropic documentation for the most up-to-date and authoritative information about Claude Code features and capabilities.

---

[^1]: **Slash Commands - Official Anthropic Documentation**  
https://docs.anthropic.com/en/docs/claude-code/slash-commands  
*Comprehensive guide to creating and using custom slash commands in Claude Code, including project and personal commands, namespacing, and file format specifications.*

[^2]: **Claude Code Best Practices - Anthropic Engineering**  
https://www.anthropic.com/engineering/claude-code-best-practices  
*Official best practices from Anthropic's engineering team, covering file referencing with @, context management, subagent usage, and workflow optimization.*

[^3]: **Claude Code Configuration - Community Documentation**  
https://claudelog.com/configuration/  
*Detailed configuration guide including --add-dir usage, multi-directory setup, and advanced settings management.*

[^4]: **Subagents - Official Anthropic Documentation**  
https://docs.anthropic.com/en/docs/claude-code/sub-agents  
*Complete documentation on creating and using subagents, including context isolation, tool permissions, and specialized AI assistants.*

[^5]: **Common Workflows - Official Anthropic Documentation**  
https://docs.anthropic.com/en/docs/claude-code/common-workflows  
*Official guide to common Claude Code workflows, including file referencing patterns, image handling, and practical development scenarios.*
