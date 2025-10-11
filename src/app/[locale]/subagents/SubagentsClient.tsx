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
