'use client';

import { useState } from 'react';
import NavigationHeader from '@/components/NavigationHeader';
import MobileMenu from '@/components/MobileMenu';
import { useNavigationMenu } from '@/hooks/useNavigationMenu';
import { type Locale } from '@/lib/i18n/config';

function CopyButton({ text, dictionary }: { text: string; dictionary?: any }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error(dictionary?.common?.copyError || 'Copy failed:', err);
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

interface SubagentsClientProps {
  locale: Locale;
  dictionary: any;
}

export default function SubagentsClient({ locale, dictionary }: SubagentsClientProps) {
  const { mobileMenu, helpers } = useNavigationMenu();

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

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {dictionary.subagents?.title || 'Subagents'}
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            {dictionary.subagents?.subtitle || 'Create specialized AI assistants for task-specific workflows'}
          </p>
        </div>

        {/* What are Subagents? */}
        <section className="mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              {dictionary.subagents?.whatAreSubagents?.title || 'What are Subagents?'}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
              {dictionary.subagents?.whatAreSubagents?.description ||
                'Subagents are specialized AI assistants within Claude Code that handle specific types of tasks. Each subagent has its own context window, custom system prompt, and specific tool access.'}
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    {dictionary.subagents?.whatAreSubagents?.specificPurpose || 'Specific Purpose'}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {dictionary.subagents?.whatAreSubagents?.specificPurposeDesc ||
                      'Each subagent has a defined expertise area'}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    {dictionary.subagents?.whatAreSubagents?.ownContext || 'Own Context Window'}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {dictionary.subagents?.whatAreSubagents?.ownContextDesc ||
                      'Separate from main conversation'}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    {dictionary.subagents?.whatAreSubagents?.configurableTools || 'Configurable Tools'}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {dictionary.subagents?.whatAreSubagents?.configurableToolsDesc ||
                      'Specific tool access per subagent'}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    {dictionary.subagents?.whatAreSubagents?.customPrompt || 'Custom System Prompt'}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {dictionary.subagents?.whatAreSubagents?.customPromptDesc ||
                      'Tailored instructions for each agent'}
                  </p>
                </div>
              </div>
            </div>

            {/* New Features in 2.1 */}
            <div className="mt-8 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg border-2 border-green-500 dark:border-green-400 relative">
              <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded">NEW in 2.1</div>
              <h3 className="text-lg font-semibold text-green-900 dark:text-green-300 mb-4">
                {dictionary.subagents?.whatAreSubagents?.newFeatures?.title || 'New Subagent Features'}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <span className="text-green-500 mr-2">⚡</span>
                  <div>
                    <h4 className="font-medium text-green-800 dark:text-green-200">
                      {dictionary.subagents?.whatAreSubagents?.newFeatures?.async?.title || 'Async Subagents'}
                    </h4>
                    <p className="text-green-700 dark:text-green-300 text-sm">
                      {dictionary.subagents?.whatAreSubagents?.newFeatures?.async?.desc || 'Run subagents asynchronously with Ctrl+B backgrounding'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2">🔀</span>
                  <div>
                    <h4 className="font-medium text-green-800 dark:text-green-200">
                      {dictionary.subagents?.whatAreSubagents?.newFeatures?.fork?.title || 'Context Fork'}
                    </h4>
                    <p className="text-green-700 dark:text-green-300 text-sm">
                      {dictionary.subagents?.whatAreSubagents?.newFeatures?.fork?.desc || 'Use context: fork in skill frontmatter for isolated execution'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2">🎯</span>
                  <div>
                    <h4 className="font-medium text-green-800 dark:text-green-200">
                      {dictionary.subagents?.whatAreSubagents?.newFeatures?.hooks?.title || 'Agent Hooks'}
                    </h4>
                    <p className="text-green-700 dark:text-green-300 text-sm">
                      {dictionary.subagents?.whatAreSubagents?.newFeatures?.hooks?.desc || 'Define PreToolUse, PostToolUse, and Stop hooks in agent frontmatter'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2">🔄</span>
                  <div>
                    <h4 className="font-medium text-green-800 dark:text-green-200">
                      {dictionary.subagents?.whatAreSubagents?.newFeatures?.disable?.title || 'Disable Agents'}
                    </h4>
                    <p className="text-green-700 dark:text-green-300 text-sm">
                      {dictionary.subagents?.whatAreSubagents?.newFeatures?.disable?.desc || 'Use Task(AgentName) syntax in disallowedTools to disable specific agents'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Built-in Subagents */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            {dictionary.subagents?.builtIn?.title || 'Built-in Subagents'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-cyan-100 dark:bg-cyan-900 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">Explore</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                {dictionary.subagents?.builtIn?.explore?.desc || 'Fast, read-only agent for searching and analyzing codebases'}
              </p>
              <div className="text-xs space-y-1 text-slate-500 dark:text-slate-500">
                <p><span className="font-semibold">Model:</span> Haiku (fast)</p>
                <p><span className="font-semibold">Tools:</span> Read-only</p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">Plan</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                {dictionary.subagents?.builtIn?.plan?.desc || 'Research agent used in plan mode to gather context'}
              </p>
              <div className="text-xs space-y-1 text-slate-500 dark:text-slate-500">
                <p><span className="font-semibold">Model:</span> Inherits</p>
                <p><span className="font-semibold">Tools:</span> Read-only</p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-violet-100 dark:bg-violet-900 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">general-purpose</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                {dictionary.subagents?.builtIn?.general?.desc || 'Capable agent for complex, multi-step tasks'}
              </p>
              <div className="text-xs space-y-1 text-slate-500 dark:text-slate-500">
                <p><span className="font-semibold">Model:</span> Inherits</p>
                <p><span className="font-semibold">Tools:</span> All tools</p>
              </div>
            </div>
          </div>
        </section>

        {/* Agent Frontmatter Fields - NEW Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            {dictionary.subagents?.frontmatter?.title || 'Agent Frontmatter Fields'}
          </h2>
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50 dark:bg-slate-700">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white">Field</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white">Description</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                <tr>
                  <td className="px-6 py-4 text-sm font-mono text-blue-600 dark:text-blue-400">model</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Override model selection</td>
                  <td className="px-6 py-4 text-sm font-mono text-slate-500">opus, sonnet, haiku, inherit</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-mono text-blue-600 dark:text-blue-400">skills</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Enable specific skills</td>
                  <td className="px-6 py-4 text-sm font-mono text-slate-500">[&quot;code-review&quot;, &quot;testing&quot;]</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-mono text-blue-600 dark:text-blue-400">hooks</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Define agent-specific hooks</td>
                  <td className="px-6 py-4 text-sm font-mono text-slate-500">[&quot;pre-review&quot;]</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-mono text-blue-600 dark:text-blue-400">permissionMode</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Permission handling mode</td>
                  <td className="px-6 py-4 text-sm font-mono text-slate-500">inherit, default, bypassPermissions</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-mono text-blue-600 dark:text-blue-400">apiKeyEnvVar</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Custom API key env variable</td>
                  <td className="px-6 py-4 text-sm font-mono text-slate-500">CUSTOM_API_KEY</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-mono text-blue-600 dark:text-blue-400">enableUndo</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Enable undo capability</td>
                  <td className="px-6 py-4 text-sm font-mono text-slate-500">true, false</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-mono text-blue-600 dark:text-blue-400">tools</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Restrict available tools</td>
                  <td className="px-6 py-4 text-sm font-mono text-slate-500">[&quot;Read&quot;, &quot;Edit&quot;, &quot;Bash&quot;]</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 bg-slate-900 dark:bg-slate-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-slate-400 font-mono">agent.md frontmatter example</span>
              <CopyButton text={`---
model: opus
skills:
  - code-review
hooks:
  - security-check
permissionMode: inherit
tools:
  - Read
  - Edit
  - Grep
---`} dictionary={dictionary} />
            </div>
            <pre className="text-sm text-green-400 font-mono overflow-x-auto">
{`---
model: opus
skills:
  - code-review
hooks:
  - security-check
permissionMode: inherit
tools:
  - Read
  - Edit
  - Grep
---`}
            </pre>
          </div>
        </section>

        {/* Quick Start */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200 dark:border-blue-800 p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              {dictionary.subagents?.quickStart?.title || 'Quick Start'}
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  {dictionary.subagents?.quickStart?.step1 || '1. Open Subagents Interface'}
                </h3>
                <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4 flex items-center justify-between">
                  <code className="text-green-400 font-mono">/agents</code>
                  <CopyButton text="/agents" dictionary={dictionary} />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  {dictionary.subagents?.quickStart?.step2 || '2. Create New Agent'}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">
                  {dictionary.subagents?.quickStart?.step2Desc ||
                    'Choose "Create New Agent" and select project-level or user-level'}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  {dictionary.subagents?.quickStart?.step3 || '3. Define the Agent'}
                </h3>
                <ul className="text-slate-600 dark:text-slate-300 text-sm space-y-2 list-disc list-inside">
                  <li>{dictionary.subagents?.quickStart?.step3a || 'Describe the agent\'s purpose'}</li>
                  <li>{dictionary.subagents?.quickStart?.step3b || 'Select tools to grant access'}</li>
                  <li>{dictionary.subagents?.quickStart?.step3c || 'Customize the system prompt'}</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  {dictionary.subagents?.quickStart?.step4 || '4. Use Your Agent'}
                </h3>
                <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4 flex items-center justify-between mb-2">
                  <code className="text-white font-mono text-sm">
                    {locale === 'ko'
                      ? '> code-reviewer 서브에이전트로 내 코드를 검토해줘'
                      : '> Use the code-reviewer subagent to review my changes'}
                  </code>
                  <CopyButton
                    text={locale === 'ko'
                      ? '> code-reviewer 서브에이전트로 내 코드를 검토해줘'
                      : '> Use the code-reviewer subagent to review my changes'}
                    dictionary={dictionary}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Example Subagents */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
            {dictionary.subagents?.examples?.title || 'Example Subagents'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Code Reviewer */}
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                {dictionary.subagents?.examples?.codeReviewer?.title || 'Code Reviewer'}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                {dictionary.subagents?.examples?.codeReviewer?.desc ||
                  'Reviews code for quality, security, and best practices'}
              </p>
              <div className="text-xs space-y-1">
                <p className="text-slate-500 dark:text-slate-500 font-mono">
                  Tools: Read, Grep, Glob, Bash
                </p>
              </div>
            </div>

            {/* Debugger */}
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                {dictionary.subagents?.examples?.debugger?.title || 'Debugger'}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                {dictionary.subagents?.examples?.debugger?.desc ||
                  'Analyzes errors and implements fixes'}
              </p>
              <div className="text-xs space-y-1">
                <p className="text-slate-500 dark:text-slate-500 font-mono">
                  Tools: Read, Edit, Bash, Grep
                </p>
              </div>
            </div>

            {/* Test Automation */}
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                {dictionary.subagents?.examples?.tester?.title || 'Test Automation'}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                {dictionary.subagents?.examples?.tester?.desc ||
                  'Creates and runs tests automatically'}
              </p>
              <div className="text-xs space-y-1">
                <p className="text-slate-500 dark:text-slate-500 font-mono">
                  Tools: Read, Write, Bash
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              {dictionary.subagents?.bestPractices?.title || 'Best Practices'}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    {dictionary.subagents?.bestPractices?.focused?.title || 'Design Focused Agents'}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {dictionary.subagents?.bestPractices?.focused?.desc ||
                      'Create subagents with single, clear responsibilities'}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-green-600 dark:text-green-400 font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    {dictionary.subagents?.bestPractices?.detailed?.title || 'Write Detailed Prompts'}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {dictionary.subagents?.bestPractices?.detailed?.desc ||
                      'Include specific instructions and examples'}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-purple-600 dark:text-purple-400 font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    {dictionary.subagents?.bestPractices?.limitTools?.title || 'Limit Tool Access'}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {dictionary.subagents?.bestPractices?.limitTools?.desc ||
                      'Only grant necessary tools for better security'}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-orange-600 dark:text-orange-400 font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    {dictionary.subagents?.bestPractices?.versionControl?.title || 'Version Control'}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {dictionary.subagents?.bestPractices?.versionControl?.desc ||
                      'Check project subagents into version control'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              {dictionary.subagents?.cta?.title || 'Ready to Create Your First Subagent?'}
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              {dictionary.subagents?.cta?.description ||
                'Start automating specialized tasks with custom AI assistants tailored to your workflow'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`/${locale}/getting-started`}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                {dictionary.common?.getStarted || 'Get Started'}
              </a>
              <a
                href={`/${locale}/usage-guide`}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                {dictionary.navigation?.usageGuide || 'Usage Guide'}
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
