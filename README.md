# Pheron — AgentCenter Homepage

> **Current release: [v0.1.3](https://github.com/svlucero/pheron/releases/tag/v0.1.3)**

Public website and download page for **Pheron** — a desktop command center for managing AI development agents.

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Release](https://img.shields.io/badge/release-v0.1.3-violet)](https://github.com/svlucero/pheron/releases/tag/v0.1.3)
[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org)

---

## What is Pheron?

**Pheron** is a desktop app that works as a command center for AI development agents. It lets you manage repositories, automate GitHub issues, and orchestrate multiple AI runners — all from one place.

In many teams, development agents (Claude Code, Gemini, Codex, etc.) are spread across scripts, prompts, and disconnected tools. This creates fragmented workflows, low traceability, poor visibility over token spending, and high operational overhead.

Pheron addresses this as a single coordination point: it unifies agents, repositories, and task execution with clear cost visibility.

---

## Features

### Repository Management

Connect your GitHub repositories and let Pheron monitor branches, commits, and pull requests in real time.

- Clone repos directly from GitHub or register existing local paths
- Auto-detects the GitHub remote URL from `git remote.origin.url`
- Supports **worktrees** — multiple agents can work on isolated branches in parallel without conflicts

### GitHub Issues Automation

Assign issues to AI agents with a single click.

- List and paginate open GitHub issues per repository
- Create new issues directly from Pheron
- Assign any issue to an agent — the agent reads the context, writes the code, and opens a PR automatically
- Close issues with one click (marks the GitHub issue as resolved)

### Multiple AI Runners

Choose the best runner for each task. Pheron is fully runner-agnostic.

| Runner | CLI Required |
|--------|-------------|
| **Claude Code** | `claude` |
| **Gemini** | `gemini` |
| **OpenAI Codex** | `codex` |
| **Custom runner** | Open API |

The app auto-detects which CLIs are installed and disables runners that are not available. You can switch runners per task without changing your workflow.

### Specialist Agents

Pheron ships with a roster of built-in specialist agents ready to use out of the box:

| Agent | Specialization |
|-------|---------------|
| **Frontend Dev** | React, TypeScript, and UI/UX implementation |
| **Backend Dev** | APIs, databases, auth, and server-side logic |
| **QA Engineer** | Unit tests, integration tests, and edge case coverage |
| **Code Reviewer** | PR review for quality, security, and best practices |
| **Design Engineer** | Translates Figma designs into pixel-perfect components |

Not finding what you need? Build your own agent in minutes.

### Custom Agent Builder

Design your own specialist agents from scratch.

- Define the agent's base prompt (system prompt)
- Set available skills and tools
- Restrict to a specific runner or allow all
- Reuse your custom agents across all projects
- Template variables `{{.RepoName}}` and `{{.RepoPath}}` inject repository context automatically

### Token & Cost Control

Full visibility into token usage and costs — no surprises at the end of the month.

- **Per-project spending caps** — set hard limits per repository so no single project overruns your budget
- **Real-time token tracking** — see exactly how many tokens each agent used, broken down by issue and run
- **Cost alerts** — get notified when a project is approaching its limit before it hits
- **Usage reports** — detailed cost breakdowns by runner, repository, agent, and time period (today / this week / this month / all time)
- Comparison with the previous period — percentage delta badge (↑ / ↓)

### Skills

Skills are reusable capability packages installed into AI runners to extend their behavior with specialized knowledge or predefined workflows.

- Install/uninstall skills per runner from the UI
- Import skills from a ZIP file, a local folder, or a direct path
- Built-in skill: **feature-dev** — full feature development workflow (sync main → create branch → worktree → implement → commit → open PR → notify)

### Specializations

Specializations define agent behavior through a system prompt. They determine what kind of tasks an agent can do and with what style.

| Type | Description |
|------|-------------|
| `system` | Provided by Pheron, read-only |
| `default` | Pheron defaults, customizable and restorable |
| `user` | Created by you |

Built-in specializations include **General Purpose** (versatile, any task) and **Developer** (reads code → plans → implements → tests → commits with feature branch workflow).

### Telegram Integration

Control your agents and receive notifications directly from Telegram, without opening the app.

- Assign issues to agents with a single message
- Review PRs and check repository status from chat
- Real-time notifications when an agent completes or fails a task
- Choose which AI model to use for each task from the chat
- Works with Claude, Gemini, and Codex

**Available commands:**

| Command | Description |
|---------|-------------|
| `/help` | List all available commands |
| `/status` | Show bot configuration status |
| `/repos` | List repositories with pending task counts |
| `/agents` | Show up to 5 agents (running first) |
| `/running` | Show only currently running agents |
| `/tasks [repo]` | Show pending tasks |
| `/newtask` | Interactive flow: pick repo → describe task → pick runner → start agent |
| `/continue` | Resume a paused or idle agent |
| `/lastchat` | Show the last Session ID for an agent |

### Notifications

Built-in notification center that alerts you when an agent completes or fails a task — without leaving the app.

### Auto Mode

Runners present their execution plan and ask for your approval once. After confirmation, they run end-to-end without interruptions — no more manual step-by-step approvals.

### Session History

Every agent start generates a session. Full session history is preserved, including logs, tool usage, token consumption, and results.

---

## How It Works

**1. Connect your repositories**
Link your GitHub account and select the repositories you want Pheron to manage. It reads your issues, branches, and pull requests automatically.

**2. Assign issues to agents**
Pick an open GitHub issue and assign it to a specialist agent — a frontend dev, a backend engineer, a QA reviewer. The agent reads the issue context and gets to work.

**3. Choose your runner**
Select which AI runner handles the task: Claude Code, Gemini, Codex, or your own custom runner. Different issues, different runners — full flexibility.

**4. Review, merge, and track costs**
The agent opens a PR with the implementation. You review and merge. Pheron logs every token spent so you always know the cost per issue.

---

## Installation

### macOS & Linux (recommended)

```bash
curl -sSL https://raw.githubusercontent.com/svlucero/pheron/main/install.sh | bash
```

The installer auto-detects your architecture and downloads the correct binary:
- macOS: Apple Silicon (arm64) and Intel (x64)
- Linux: x86_64 and ARM64 · AppImage

> Windows support is coming soon.

### Manual download

Download the latest DMG or AppImage from [Releases](https://github.com/svlucero/pheron/releases).

---

## This Repository

This repo contains the **public website** for Pheron — the marketing landing page and download flow, including a backend API endpoint to fetch the latest release from GitHub.

### Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React

### Key pieces

- Landing sections in `src/components/` (Hero, Features, HowItWorks, Agents, TokenControl, Telegram, Download)
- `GET /api/release` — fetches the latest Pheron release from GitHub and returns version + architecture-specific download URLs (`arm64` and `x64`)
- `install.sh` — macOS/Linux installer that detects architecture and installs the DMG/AppImage

### Run locally

Requirements: Node.js 18+, npm

```bash
npm install
npm run dev
# → http://localhost:3000
```

Production build:

```bash
npm run build
npm run start
```

### Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `GITHUB_TOKEN` | Optional | Authenticates GitHub API requests in `/api/release` to avoid rate limits |

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Coming Next

- **Context optimization** — automatic context window management per agent: trim, summarize, and prioritize relevant history to reduce token usage on long-running tasks
- **Windows support** — native installer for Windows

---

## License

MIT © [svlucero](https://github.com/svlucero)

See [LICENSE](LICENSE) for full text.

---

## Related

- [pheron](https://github.com/svlucero/pheron) — the main Pheron desktop app (Go backend + Tauri shell)
