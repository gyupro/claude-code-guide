'use client';

import { useState } from 'react';
import NavigationHeader from '@/components/NavigationHeader';
import MobileMenu from '@/components/MobileMenu';
import { useNavigationMenu } from '@/hooks/useNavigationMenu';
import { type Locale } from '@/lib/i18n/config';

interface BestPracticesClientProps {
  locale: Locale;
  dictionary: any;
}

const colorClasses: Record<string, { bg: string; text: string; iconBg: string; border: string; codeBg: string }> = {
  blue: {
    bg: 'bg-blue-100 dark:bg-blue-900/40',
    text: 'text-blue-600 dark:text-blue-400',
    iconBg: 'bg-blue-100 dark:bg-blue-900',
    border: 'border-blue-200 dark:border-blue-800',
    codeBg: 'bg-blue-50 dark:bg-blue-950/50',
  },
  green: {
    bg: 'bg-green-100 dark:bg-green-900/40',
    text: 'text-green-600 dark:text-green-400',
    iconBg: 'bg-green-100 dark:bg-green-900',
    border: 'border-green-200 dark:border-green-800',
    codeBg: 'bg-green-50 dark:bg-green-950/50',
  },
  purple: {
    bg: 'bg-purple-100 dark:bg-purple-900/40',
    text: 'text-purple-600 dark:text-purple-400',
    iconBg: 'bg-purple-100 dark:bg-purple-900',
    border: 'border-purple-200 dark:border-purple-800',
    codeBg: 'bg-purple-50 dark:bg-purple-950/50',
  },
  orange: {
    bg: 'bg-orange-100 dark:bg-orange-900/40',
    text: 'text-orange-600 dark:text-orange-400',
    iconBg: 'bg-orange-100 dark:bg-orange-900',
    border: 'border-orange-200 dark:border-orange-800',
    codeBg: 'bg-orange-50 dark:bg-orange-950/50',
  },
  teal: {
    bg: 'bg-teal-100 dark:bg-teal-900/40',
    text: 'text-teal-600 dark:text-teal-400',
    iconBg: 'bg-teal-100 dark:bg-teal-900',
    border: 'border-teal-200 dark:border-teal-800',
    codeBg: 'bg-teal-50 dark:bg-teal-950/50',
  },
};

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-2 right-2 px-2 py-1 text-xs rounded bg-slate-700 hover:bg-slate-600 text-slate-300 transition-colors"
      aria-label="Copy code"
    >
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
}

function CodeBlock({ code, language = 'bash' }: { code: string; language?: string }) {
  return (
    <div className="relative mt-3 rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-slate-800 dark:bg-slate-900 border-b border-slate-700">
        <span className="text-xs text-slate-400 font-mono">{language}</span>
      </div>
      <CopyButton text={code} />
      <pre className="p-4 bg-slate-800 dark:bg-slate-900 overflow-x-auto text-sm">
        <code className="text-slate-200 font-mono whitespace-pre">{code}</code>
      </pre>
    </div>
  );
}

function TipCard({ title, description, code, codeLanguage }: { title: string; description: string; code?: string; codeLanguage?: string }) {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-3 mt-0.5">
        <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-slate-900 dark:text-white mb-1">{title}</h4>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{description}</p>
        {code && <CodeBlock code={code} language={codeLanguage} />}
      </div>
    </div>
  );
}

interface TipData {
  title: string;
  description: string;
  code?: string;
  codeLanguage?: string;
}

interface SectionConfig {
  key: string;
  color: string;
  icon: string;
}

export default function BestPracticesClient({ locale, dictionary }: BestPracticesClientProps) {
  const { mobileMenu, helpers } = useNavigationMenu();

  const sections: SectionConfig[] = [
    {
      key: 'contextManagement',
      color: 'blue',
      icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4',
    },
    {
      key: 'verification',
      color: 'green',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    {
      key: 'planMode',
      color: 'purple',
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
    },
    {
      key: 'promptEngineering',
      color: 'orange',
      icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z',
    },
    {
      key: 'scaling',
      color: 'teal',
      icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
    },
  ];

  const defaultTips: Record<string, TipData[]> = {
    contextManagement: [
      {
        title: 'Keep Context Focused',
        description: 'Only include relevant files and information in your context window. Use CLAUDE.md to provide project-specific guidance. Start fresh sessions for new topics with /clear.',
      },
      {
        title: 'Use Compact Mode',
        description: 'Use /compact to summarize the conversation while preserving key information when context gets large. Use /btw for side questions that don\'t pollute main context.',
      },
      {
        title: 'Leverage Memory and Handoffs',
        description: 'Use CLAUDE.md at project and user level to persist important context across sessions. Write HANDOFF.md before starting fresh to migrate context between sessions.',
        code: `# Project-level CLAUDE.md example
# Place at your repository root

## Project Overview
This is a Next.js 15 app with TypeScript and Tailwind CSS.

## Architecture
- /src/app/ - App Router pages
- /src/components/ - Reusable UI components
- /src/lib/ - Utility functions and configs

## Commands
- pnpm dev - Start dev server
- pnpm test - Run tests
- pnpm lint - Run linter

## Conventions
- Use functional components with hooks
- Prefer immutable patterns (spread, map, filter)
- All new files must have tests`,
        codeLanguage: 'markdown',
      },
      {
        title: 'Use /btw for Side Questions',
        description: 'When you have a quick question unrelated to your main task, prefix it with /btw. This tells Claude it\'s a tangent so the main conversation flow stays clean and focused.',
      },
      {
        title: 'Write HANDOFF.md Before Fresh Starts',
        description: 'Before ending a long session, ask Claude to write a HANDOFF.md summarizing current progress, decisions made, and next steps. Your next session can pick up exactly where you left off.',
        code: `# Ask Claude to create a handoff document
> Write a HANDOFF.md summarizing what we did today,
> open decisions, and next steps.

# In your next session
> Read HANDOFF.md and continue from where we left off.`,
        codeLanguage: 'bash',
      },
    ],
    verification: [
      {
        title: 'Review Before Accepting',
        description: 'Always review code changes before accepting them. Use visual diffs to understand what changed. Create draft PRs to review everything before merging.',
      },
      {
        title: 'Run Tests Frequently',
        description: 'Ask Claude to run tests after making changes. Set up autotest hooks for automatic verification. Include test commands in your prompts.',
        code: `# In your CLAUDE.md, add verification commands:
## After Every Change
- Run: pnpm test
- Run: pnpm lint
- Run: pnpm typecheck

# Or set up a PostToolUse hook in .claude/settings.json:
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "command": "pnpm test --bail 2>&1 | tail -20"
      }
    ]
  }
}`,
        codeLanguage: 'jsonc',
      },
      {
        title: 'Use Checkpoints and Self-Verification',
        description: 'Leverage git checkpoints to safely experiment and roll back with /rewind. Ask Claude to double-check its claims and use /chrome for visual verification of web apps.',
      },
      {
        title: 'Ask Claude to Verify Its Own Work',
        description: 'After implementation, explicitly ask Claude to review what it wrote. Phrases like "now review that code for bugs" or "does this handle edge cases?" trigger a critical second pass that often catches issues.',
        code: `# Good verification prompts:
> Now review that implementation for edge cases
> Run the tests and fix any failures
> Check if this handles null/undefined inputs
> Does this match the existing code style?`,
        codeLanguage: 'bash',
      },
      {
        title: 'Use /chrome for Visual Verification',
        description: 'For web applications, use /chrome to let Claude take a screenshot and visually verify that UI changes look correct. This catches CSS issues, layout problems, and visual regressions that tests miss.',
      },
    ],
    planMode: [
      {
        title: 'Start with Planning',
        description: 'For complex features, press Shift+Tab to enter Plan Mode. Let Claude analyze the problem before writing code. Review the plan before approving execution.',
      },
      {
        title: 'Break Down Large Tasks',
        description: 'Divide complex work into smaller, manageable steps. This improves accuracy and makes it easier to verify each piece. Use subagents for isolated investigation.',
        code: `# Instead of one big prompt:
> Build a complete auth system with OAuth, sessions, and RBAC

# Break it down into phases:
> Phase 1: Set up the session store with Redis.
>   Only create the session middleware - no auth yet.
>   Run tests before moving on.

> Phase 2: Add email/password authentication.
>   Use the session store from Phase 1.
>   Add login, logout, and registration routes.

> Phase 3: Add OAuth (Google, GitHub).
>   Integrate with the existing session/auth system.

> Phase 4: Add role-based access control.
>   Define roles: admin, editor, viewer.
>   Add middleware to protect routes.`,
        codeLanguage: 'bash',
      },
      {
        title: 'Use Extended Thinking',
        description: 'Enable extended thinking for complex architectural decisions that require deep reasoning. Use \'think\', \'think hard\', or \'ultrathink\' keywords to trigger progressively deeper analysis.',
        code: `# Trigger levels of extended thinking:

> think about how to refactor this module
# Light analysis, good for moderate complexity

> think hard about the tradeoffs between
> microservices vs monolith for our scale
# Deeper analysis, explores more alternatives

> ultrathink about the security implications
> of our auth architecture
# Maximum reasoning depth, best for critical decisions`,
        codeLanguage: 'bash',
      },
      {
        title: 'Use Subagents for Investigation',
        description: 'When planning reveals unknowns, use subagents to investigate specific areas without polluting your main context. Each subagent gets its own context window and can focus on one aspect of the problem.',
      },
      {
        title: 'Review and Iterate on Plans',
        description: 'Don\'t accept the first plan. Ask Claude to consider alternatives, identify risks, and think about edge cases. A good plan should include rollback strategies and success criteria.',
      },
    ],
    promptEngineering: [
      {
        title: 'Be Specific',
        description: 'Provide clear, specific instructions including file paths, function names, and expected behavior. Say "fix the null reference in handleSubmit in user.tsx" not "fix the error".',
        code: `# Bad: vague prompt
> Fix the bug in the login page

# Good: specific prompt with context
> In src/app/auth/login.tsx, the handleSubmit
> function throws a null reference when the
> email field is empty. Add input validation
> before the API call on line 45. The validation
> should show an inline error message matching
> the style in src/components/FormError.tsx.`,
        codeLanguage: 'bash',
      },
      {
        title: 'Provide Examples and Context',
        description: 'Show Claude examples of the pattern or style you want. Use @ to reference specific files. Paste screenshots of errors, UIs, or designs. Include success criteria.',
      },
      {
        title: 'Set Constraints and Standards',
        description: 'Tell Claude about project constraints, coding standards, and patterns to follow. Include verification steps: "all tests should pass and the linter should be clean".',
        code: `# Include constraints directly in your prompt:
> Add a user search endpoint to the API.
> Requirements:
> - Follow the pattern in src/api/products.ts
> - Use Zod for input validation
> - Add rate limiting (100 req/min)
> - Return paginated results
> - Include unit tests with >80% coverage
> - All existing tests must still pass
> - No console.log statements`,
        codeLanguage: 'bash',
      },
      {
        title: 'Use @ References and Images',
        description: 'Reference files directly with @filename to pull them into context. Paste screenshots of error messages, UI designs, or expected output. Visual context often communicates requirements better than words.',
      },
      {
        title: 'Front-load Intent, Not Just Instructions',
        description: 'Start prompts with WHY before WHAT. When Claude understands the goal, it makes better decisions about implementation details and catches design issues early.',
        code: `# Less effective: just instructions
> Add a cache layer to getUserById

# More effective: intent + instructions
> Users are seeing 2s load times on profile pages
> because getUserById hits the database every time.
> Add a Redis cache layer with 5-minute TTL.
> Invalidate on user update. Follow the caching
> pattern we use in getProductById.`,
        codeLanguage: 'bash',
      },
    ],
    scaling: [
      {
        title: 'Use Headless Mode for CI/CD',
        description: 'Integrate Claude Code into your CI/CD pipeline with claude -p for automated code reviews, test generation, and documentation updates.',
        code: `# GitHub Actions example: automated code review
name: Claude Code Review
on: [pull_request]

jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run Claude Review
        run: |
          claude -p "Review the changes in this PR.
            Focus on: security issues, performance,
            and code style. Output as markdown." \\
            --output-format json > review.json`,
        codeLanguage: 'yaml',
      },
      {
        title: 'Configure Team Standards',
        description: 'Use shared CLAUDE.md files for consistent behavior across team members. Create custom skills and subagents. Share via plugins for team distribution.',
        code: `# .claude/settings.json - shared team config
{
  "permissions": {
    "allow": [
      "Read",
      "Glob",
      "Grep",
      "Bash(pnpm test*)",
      "Bash(pnpm lint*)"
    ],
    "deny": [
      "Bash(rm -rf *)",
      "Bash(git push --force*)"
    ]
  },
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "command": "npx prettier --write $CLAUDE_FILE_PATH"
      }
    ]
  }
}`,
        codeLanguage: 'json',
      },
      {
        title: 'Leverage Subagents and Teams',
        description: 'Use subagents to fan out across files. Use Agent Teams (experimental) for coordinated parallel work. Use git worktrees for isolation between agents.',
      },
      {
        title: 'Use Git Worktrees for Parallel Agents',
        description: 'When running multiple Claude Code agents on the same repo, use git worktrees to give each agent its own working directory. This prevents file conflicts and lets agents work truly in parallel.',
        code: `# Create worktrees for parallel agents
git worktree add ../project-agent-1 -b feature/auth
git worktree add ../project-agent-2 -b feature/api

# Run Claude in each worktree
cd ../project-agent-1 && claude -p "Implement auth"
cd ../project-agent-2 && claude -p "Build API endpoints"

# Merge results back
git checkout main
git merge feature/auth
git merge feature/api`,
        codeLanguage: 'bash',
      },
      {
        title: 'Create Custom Skills for Repeated Tasks',
        description: 'If your team frequently performs the same type of task (e.g., creating API endpoints, writing migration scripts), define custom skills with SKILL.md files that encode your team\'s patterns and standards.',
        code: `# .claude/skills/api-endpoint/SKILL.md
---
name: create-api-endpoint
description: Create a new REST API endpoint
---

## Steps
1. Create route handler in src/api/
2. Add Zod validation schema
3. Add rate limiting middleware
4. Write integration tests
5. Update OpenAPI spec

## Template
Follow the pattern in src/api/products.ts
Always include error handling middleware
Use the shared response format from src/lib/response.ts`,
        codeLanguage: 'markdown',
      },
    ],
  };

  const defaultSectionMeta: Record<string, { title: string; description: string }> = {
    contextManagement: {
      title: 'Context Management',
      description: 'Effective context management is the key to getting accurate and relevant responses from Claude Code.',
    },
    verification: {
      title: 'Verification & Testing',
      description: 'Always verify Claude Code output to ensure correctness and quality.',
    },
    planMode: {
      title: 'Plan Mode & Structured Thinking',
      description: 'Use Plan Mode for complex tasks that benefit from structured analysis before implementation.',
    },
    promptEngineering: {
      title: 'Prompt Engineering',
      description: 'How you communicate with Claude Code significantly affects the quality of results.',
    },
    scaling: {
      title: 'Scaling with Claude Code',
      description: 'Techniques for using Claude Code effectively on larger projects and teams.',
    },
  };

  function getTipsForSection(sectionKey: string): TipData[] {
    const sectionData = dictionary.bestPractices?.[sectionKey];
    const fallbackTips = defaultTips[sectionKey] || [];

    // Build tips from dictionary data (tip1Title/tip1Desc through tip5Title/tip5Desc)
    const tips: TipData[] = [];
    for (let i = 1; i <= 5; i++) {
      const titleKey = `tip${i}Title`;
      const descKey = `tip${i}Desc`;
      const title = sectionData?.[titleKey] || fallbackTips[i - 1]?.title;
      const desc = sectionData?.[descKey] || fallbackTips[i - 1]?.description;

      if (title && desc) {
        tips.push({
          title,
          description: desc,
          code: fallbackTips[i - 1]?.code,
          codeLanguage: fallbackTips[i - 1]?.codeLanguage,
        });
      }
    }

    // If dictionary only had 3 tips, add remaining fallback tips (4, 5)
    if (tips.length < fallbackTips.length) {
      for (let i = tips.length; i < fallbackTips.length; i++) {
        tips.push(fallbackTips[i]);
      }
    }

    return tips.length > 0 ? tips : fallbackTips;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-zinc-100 dark:from-slate-900 dark:to-zinc-900">
      <NavigationHeader
        isMobileMenuOpen={mobileMenu.isOpen}
        onMobileMenuToggle={mobileMenu.toggle}
        getLinkClassName={helpers.getLinkClassName}
        locale={locale}
        dictionary={dictionary}
      >
        <MobileMenu
          isOpen={mobileMenu.isOpen}
          onLinkClick={mobileMenu.onLinkClick}
          getLinkClassName={helpers.getLinkClassName}
          menuRef={mobileMenu.menuRef}
          locale={locale}
          dictionary={dictionary}
        />
      </NavigationHeader>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {dictionary.bestPractices?.title || 'Best Practices'}
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            {dictionary.bestPractices?.subtitle || 'Proven strategies and techniques for getting the most out of Claude Code'}
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="mb-12 flex flex-wrap gap-3 justify-center">
          {sections.map((section) => {
            const colors = colorClasses[section.color];
            const meta = defaultSectionMeta[section.key];
            const sectionData = dictionary.bestPractices?.[section.key];
            return (
              <a
                key={section.key}
                href={`#${section.key}`}
                className={`px-4 py-2 rounded-full text-sm font-medium ${colors.bg} ${colors.text} hover:opacity-80 transition-opacity`}
              >
                {sectionData?.title || meta?.title}
              </a>
            );
          })}
        </div>

        {/* Sections */}
        {sections.map((section) => {
          const colors = colorClasses[section.color];
          const sectionData = dictionary.bestPractices?.[section.key];
          const meta = defaultSectionMeta[section.key];
          const tips = getTipsForSection(section.key);

          return (
            <section key={section.key} id={section.key} className="mb-16 scroll-mt-24">
              <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
                <div className="flex items-center mb-4">
                  <div className={`w-10 h-10 ${colors.iconBg} rounded-lg flex items-center justify-center mr-3`}>
                    <svg className={`w-6 h-6 ${colors.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={section.icon} />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {sectionData?.title || meta?.title}
                  </h2>
                </div>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                  {sectionData?.description || meta?.description}
                </p>
                <div className="space-y-8">
                  {tips.map((tip, index) => (
                    <TipCard
                      key={index}
                      title={tip.title}
                      description={tip.description}
                      code={tip.code}
                      codeLanguage={tip.codeLanguage}
                    />
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
}
