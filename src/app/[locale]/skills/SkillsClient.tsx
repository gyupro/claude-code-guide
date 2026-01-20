'use client';

import { useState } from 'react';
import NavigationHeader from '@/components/NavigationHeader';
import MobileMenu from '@/components/MobileMenu';
import { useNavigationMenu } from '@/hooks/useNavigationMenu';
import { type Locale } from '@/lib/i18n/config';

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  return (
    <button
      onClick={copyToClipboard}
      className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
      title="Copy to clipboard"
    >
      {copied ? (
        <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )}
    </button>
  );
}

interface SkillsClientProps {
  locale: Locale;
  dictionary: any;
}

export default function SkillsClient({ locale, dictionary }: SkillsClientProps) {
  const { mobileMenu, helpers } = useNavigationMenu();

  const simpleSkillExample = `---
name: explaining-code
description: Explains code with visual diagrams and analogies. Use when explaining how code works.
---

When explaining code, always include:

1. **Start with an analogy**: Compare the code to something from everyday life
2. **Draw a diagram**: Use ASCII art to show the flow
3. **Walk through the code**: Explain step-by-step what happens
4. **Highlight a gotcha**: What's a common mistake?`;

  const advancedSkillExample = `---
name: pdf-processing
description: Extract text, fill forms, merge PDFs. Use when working with PDF files.
allowed-tools: Read, Bash(python:*)
model: claude-opus-4-5-20251101
context: fork
---

# PDF Processing

## Quick start
Extract text:
\`\`\`python
import pdfplumber
with pdfplumber.open("doc.pdf") as pdf:
    text = pdf.pages[0].extract_text()
\`\`\`

For form filling, see [FORMS.md](FORMS.md).`;

  const skillWithHooksExample = `---
name: secure-operations
description: Perform operations with additional security checks
hooks:
  PreToolUse:
    - matcher: "Bash"
      hooks:
        - type: command
          command: "./scripts/security-check.sh $TOOL_INPUT"
          once: true
---

Security-first operations with automatic validation.`;

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
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
              {dictionary.skills?.title || 'Agent Skills'}
            </h1>
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm font-semibold rounded-full">
              NEW
            </span>
          </div>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            {dictionary.skills?.subtitle || 'Extend Claude\'s capabilities with custom markdown-based skills that Claude applies automatically'}
          </p>
        </div>

        <section className="mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              {dictionary.skills?.whatAreSkills?.title || 'What are Agent Skills?'}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
              {dictionary.skills?.whatAreSkills?.description ||
                'A Skill is a markdown file that teaches Claude how to do something specific. Skills are model-invoked: Claude decides which Skills to use based on your request. When you ask Claude something that matches a Skill\'s description, Claude automatically applies it.'}
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                    {dictionary.skills?.whatAreSkills?.automatic || 'Automatic Activation'}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {dictionary.skills?.whatAreSkills?.automaticDesc || 'Claude detects when a Skill is relevant and applies it automatically'}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                    {dictionary.skills?.whatAreSkills?.markdown || 'Markdown-Based'}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {dictionary.skills?.whatAreSkills?.markdownDesc || 'Simple SKILL.md files with YAML frontmatter and instructions'}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                    {dictionary.skills?.whatAreSkills?.hotReload || 'Hot Reload'}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {dictionary.skills?.whatAreSkills?.hotReloadDesc || 'Skills are automatically loaded when created or modified'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            {dictionary.skills?.locations?.title || 'Where Skills Live'}
          </h2>
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50 dark:bg-slate-700">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white">
                    {dictionary.skills?.locations?.location || 'Location'}
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white">
                    {dictionary.skills?.locations?.path || 'Path'}
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white">
                    {dictionary.skills?.locations?.appliesTo || 'Applies To'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-900 dark:text-white font-medium">Enterprise</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300 font-mono">Managed Settings</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">All users in organization</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-900 dark:text-white font-medium">Personal</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300 font-mono">~/.claude/skills/</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">You, across all projects</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-900 dark:text-white font-medium">Project</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300 font-mono">.claude/skills/</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Anyone in this repository</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-900 dark:text-white font-medium">Plugin</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300 font-mono">skills/ in plugin</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Anyone with plugin installed</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
            {dictionary.skills?.locations?.priority || 'Priority order: Enterprise > Personal > Project > Plugin (higher wins on name conflicts)'}
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            {dictionary.skills?.structure?.title || 'SKILL.md Structure'}
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {dictionary.skills?.structure?.simpleExample || 'Simple Skill'}
                </h3>
                <CopyButton text={simpleSkillExample} />
              </div>
              <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 text-sm overflow-x-auto">
                <code>{simpleSkillExample}</code>
              </pre>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {dictionary.skills?.structure?.advancedExample || 'Advanced Skill'}
                </h3>
                <CopyButton text={advancedSkillExample} />
              </div>
              <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 text-sm overflow-x-auto">
                <code>{advancedSkillExample}</code>
              </pre>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            {dictionary.skills?.metadata?.title || 'Available Metadata Fields'}
          </h2>
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50 dark:bg-slate-700">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white">Field</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white">Required</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                <tr>
                  <td className="px-6 py-4 text-sm font-mono text-blue-600 dark:text-blue-400">name</td>
                  <td className="px-6 py-4"><span className="text-green-600 dark:text-green-400 text-sm font-semibold">Yes</span></td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Lowercase letters, numbers, hyphens (max 64 chars)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-mono text-blue-600 dark:text-blue-400">description</td>
                  <td className="px-6 py-4"><span className="text-green-600 dark:text-green-400 text-sm font-semibold">Yes</span></td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">What it does and when to use (max 1024 chars)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-mono text-blue-600 dark:text-blue-400">allowed-tools</td>
                  <td className="px-6 py-4"><span className="text-slate-500 text-sm">No</span></td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Restrict tools Claude can use (e.g., Read, Grep, Bash)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-mono text-blue-600 dark:text-blue-400">model</td>
                  <td className="px-6 py-4"><span className="text-slate-500 text-sm">No</span></td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Override model (e.g., claude-opus-4-5-20251101)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-mono text-blue-600 dark:text-blue-400">context</td>
                  <td className="px-6 py-4"><span className="text-slate-500 text-sm">No</span></td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Set to &quot;fork&quot; for isolated sub-agent context</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-mono text-blue-600 dark:text-blue-400">agent</td>
                  <td className="px-6 py-4"><span className="text-slate-500 text-sm">No</span></td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Agent type when context: fork (Explore, Plan, etc.)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-mono text-blue-600 dark:text-blue-400">hooks</td>
                  <td className="px-6 py-4"><span className="text-slate-500 text-sm">No</span></td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Define PreToolUse, PostToolUse, Stop handlers</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-mono text-blue-600 dark:text-blue-400">user-invocable</td>
                  <td className="px-6 py-4"><span className="text-slate-500 text-sm">No</span></td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Show in slash menu (default: true)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            {dictionary.skills?.hooks?.title || 'Skills with Hooks'}
          </h2>
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              {dictionary.skills?.hooks?.description || 'Skills can define hooks that run during the Skill\'s lifecycle. Hooks are scoped to the Skill and automatically cleaned up when it finishes.'}
            </p>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {dictionary.skills?.hooks?.example || 'Example: Security Check Hook'}
              </h3>
              <CopyButton text={skillWithHooksExample} />
            </div>
            <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 text-sm overflow-x-auto">
              <code>{skillWithHooksExample}</code>
            </pre>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            {dictionary.skills?.vsOthers?.title || 'Skills vs Other Options'}
          </h2>
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50 dark:bg-slate-700">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white">Use This</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white">When You Want To...</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white">When It Runs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                <tr className="bg-blue-50 dark:bg-blue-900/20">
                  <td className="px-6 py-4 text-sm font-semibold text-blue-700 dark:text-blue-300">Skills</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Give Claude specialized knowledge</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Claude chooses when relevant</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">Slash Commands</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Create reusable prompts</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">You type /command</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">CLAUDE.md</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Set project-wide instructions</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Loaded every conversation</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">Subagents</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Delegate to separate context</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Claude delegates or explicit</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">Hooks</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Run scripts on events</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">On specific tool events</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">MCP Servers</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Connect to external tools</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Claude calls as needed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            {dictionary.skills?.multiFile?.title || 'Multi-File Skills (Progressive Disclosure)'}
          </h2>
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              {dictionary.skills?.multiFile?.description || 'For complex Skills, use progressive disclosure: put essential info in SKILL.md and detailed docs in separate files that Claude reads only when needed.'}
            </p>
            <div className="bg-slate-800 dark:bg-slate-900 rounded-lg p-4 font-mono text-sm">
              <div className="text-slate-200 dark:text-slate-300">
                <div>pdf-processing/</div>
                <div className="pl-4">├── SKILL.md <span className="text-green-400"># Overview and navigation</span></div>
                <div className="pl-4">├── FORMS.md <span className="text-slate-400"># Loaded when needed</span></div>
                <div className="pl-4">├── REFERENCE.md <span className="text-slate-400"># Loaded when needed</span></div>
                <div className="pl-4">└── scripts/</div>
                <div className="pl-8">├── fill_form.py <span className="text-slate-400"># Executed, not loaded</span></div>
                <div className="pl-8">└── validate.py</div>
              </div>
            </div>
            <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
              <p className="text-amber-800 dark:text-amber-200 text-sm">
                <strong>Tip:</strong> {dictionary.skills?.multiFile?.tip || 'Keep SKILL.md under 500 lines. Scripts can be executed without loading into context.'}
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            {dictionary.skills?.testing?.title || 'Testing Your Skills'}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                {dictionary.skills?.testing?.viewSkills || 'View Available Skills'}
              </h3>
              <div className="bg-slate-800 dark:bg-slate-900 rounded-lg p-4 font-mono text-sm">
                <code className="text-green-400">What Skills are available?</code>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                {dictionary.skills?.testing?.testSkill || 'Test a Skill'}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">
                {dictionary.skills?.testing?.testSkillDesc || 'Ask a question matching the Skill description:'}
              </p>
              <div className="bg-slate-800 dark:bg-slate-900 rounded-lg p-4 font-mono text-sm">
                <code className="text-green-400">How does this code work?</code>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              {dictionary.skills?.cta?.title || 'Start Building Skills'}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
              {dictionary.skills?.cta?.description || 'Create your first Skill to extend Claude\'s capabilities with your team\'s standards and workflows.'}
            </p>
            <a
              href="https://code.claude.com/docs/en/skills"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all"
            >
              {dictionary.skills?.cta?.button || 'Read Full Documentation'}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
