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

interface AgentTeamsClientProps {
  locale: Locale;
  dictionary: any;
}

export default function AgentTeamsClient({ locale, dictionary }: AgentTeamsClientProps) {
  const { mobileMenu, helpers } = useNavigationMenu();

  const useCaseColors = [
    { bg: 'bg-blue-100 dark:bg-blue-900', text: 'text-blue-600 dark:text-blue-400', border: 'border-blue-200 dark:border-blue-800' },
    { bg: 'bg-green-100 dark:bg-green-900', text: 'text-green-600 dark:text-green-400', border: 'border-green-200 dark:border-green-800' },
    { bg: 'bg-purple-100 dark:bg-purple-900', text: 'text-purple-600 dark:text-purple-400', border: 'border-purple-200 dark:border-purple-800' },
    { bg: 'bg-orange-100 dark:bg-orange-900', text: 'text-orange-600 dark:text-orange-400', border: 'border-orange-200 dark:border-orange-800' },
    { bg: 'bg-rose-100 dark:bg-rose-900', text: 'text-rose-600 dark:text-rose-400', border: 'border-rose-200 dark:border-rose-800' },
    { bg: 'bg-cyan-100 dark:bg-cyan-900', text: 'text-cyan-600 dark:text-cyan-400', border: 'border-cyan-200 dark:border-cyan-800' },
    { bg: 'bg-amber-100 dark:bg-amber-900', text: 'text-amber-600 dark:text-amber-400', border: 'border-amber-200 dark:border-amber-800' },
  ];

  const enableCode = 'CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1 claude';
  const tmuxSetupCode = `# Install tmux (if not already installed)
# macOS
brew install tmux

# Ubuntu/Debian
sudo apt install tmux

# Start Claude with Agent Teams + tmux mode
CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1 claude`;
  const teamPromptCode = `> I need to refactor the authentication module.
> Split the work into 3 tasks:
>   1. Update the login flow (agent 1)
>   2. Migrate session management (agent 2)
>   3. Add OAuth2 support (agent 3)
> Use tmux mode so I can watch each agent work.`;

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
            {dictionary.agentTeams?.title || 'Agent Teams'}
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-4">
            {dictionary.agentTeams?.subtitle || 'Coordinate multiple Claude Code agents working together on complex tasks'}
          </p>
          <span className="inline-flex items-center px-4 py-1.5 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-sm font-semibold rounded-full">
            {dictionary.agentTeams?.experimental || 'Experimental Feature'}
          </span>
        </div>

        {/* What are Agent Teams? */}
        <section className="mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                {dictionary.agentTeams?.whatAreTeams?.title || 'What are Agent Teams?'}
              </h2>
              <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-xs font-semibold rounded-full">
                {dictionary.agentTeams?.whatAreTeams?.experimental || 'Experimental'}
              </span>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
              {dictionary.agentTeams?.whatAreTeams?.description ||
                'Agent Teams is an experimental feature that allows multiple Claude Code agents to collaborate on complex tasks.'}
            </p>
            <p className="text-sm text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 rounded-lg p-3">
              {dictionary.agentTeams?.experimentalNote ||
                'Agent Teams requires the CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS environment variable to be enabled.'}
            </p>
          </div>
        </section>

        {/* Enabling Agent Teams - Code Example */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
            {locale === 'ko' ? '에이전트 팀 활성화' : 'Enabling Agent Teams'}
          </h2>
          <div className="bg-slate-900 dark:bg-slate-950 rounded-xl border border-slate-700 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-slate-800 dark:bg-slate-900 border-b border-slate-700">
              <span className="text-sm text-slate-400 font-mono">terminal</span>
              <CopyButton text={enableCode} dictionary={dictionary} />
            </div>
            <pre className="text-sm text-green-400 font-mono overflow-x-auto p-4">
              <code>{enableCode}</code>
            </pre>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-3">
            {dictionary.agentTeams?.experimentalNote ||
              'Agent Teams requires the CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS environment variable to be enabled.'}
          </p>
        </section>

        {/* Team Architecture */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
            {dictionary.agentTeams?.architecture?.title || 'Team Architecture'}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {dictionary.agentTeams?.architecture?.lead || 'Lead Agent'}
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400">
                {dictionary.agentTeams?.architecture?.leadDesc ||
                  'The orchestrator that breaks down tasks, assigns work to teammates, and synthesizes results'}
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {dictionary.agentTeams?.architecture?.teammates || 'Teammates'}
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400">
                {dictionary.agentTeams?.architecture?.teammatesDesc ||
                  'Independent agent instances that work on assigned subtasks in parallel'}
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {dictionary.agentTeams?.architecture?.taskList || 'Task List'}
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400">
                {dictionary.agentTeams?.architecture?.taskListDesc ||
                  'A shared list of tasks that the lead creates and teammates pick up'}
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {dictionary.agentTeams?.architecture?.mailbox || 'Mailbox'}
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400">
                {dictionary.agentTeams?.architecture?.mailboxDesc ||
                  'Communication channel between the lead and teammates for status updates and results'}
              </p>
            </div>
          </div>
        </section>

        {/* Setting Up Teams */}
        <section className="mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              {dictionary.agentTeams?.setup?.title || 'Setting Up Teams'}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
              {dictionary.agentTeams?.setup?.description ||
                'Configure agent teams using the /teams command or programmatically through the SDK.'}
            </p>
            <div className="space-y-4">
              {[
                dictionary.agentTeams?.setup?.step1 || 'Define team composition',
                dictionary.agentTeams?.setup?.step2 || 'Configure communication patterns',
                dictionary.agentTeams?.setup?.step3 || 'Set task distribution strategy',
                dictionary.agentTeams?.setup?.step4 || 'Launch and monitor',
              ].map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                    {index + 1}
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Creating a Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
            {dictionary.agentTeams?.creating?.title || 'Creating a Team'}
          </h2>
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8 mb-6">
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
              {dictionary.agentTeams?.creating?.description ||
                'Define a team lead agent with teammate definitions. Each teammate has its own model, tools, and instructions.'}
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                <div className="flex items-center mb-2">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="font-semibold text-blue-800 dark:text-blue-300">
                    {locale === 'ko' ? '팀 크기' : 'Team Size'}
                  </span>
                </div>
                <p className="text-sm text-blue-700 dark:text-blue-400">
                  {dictionary.agentTeams?.creating?.teamSize || 'Recommended team size: 3-5 agents'}
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                <div className="flex items-center mb-2">
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span className="font-semibold text-green-800 dark:text-green-300">
                    {locale === 'ko' ? '작업 수' : 'Tasks per Agent'}
                  </span>
                </div>
                <p className="text-sm text-green-700 dark:text-green-400">
                  {dictionary.agentTeams?.creating?.tasksPerAgent || 'Aim for 5-6 tasks per teammate for optimal throughput'}
                </p>
              </div>
            </div>
          </div>

          {/* Team creation example prompt */}
          <div className="bg-slate-900 dark:bg-slate-950 rounded-xl border border-slate-700 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-slate-800 dark:bg-slate-900 border-b border-slate-700">
              <span className="text-sm text-slate-400 font-mono">
                {locale === 'ko' ? '예시: 팀 생성 프롬프트' : 'Example: Team creation prompt'}
              </span>
              <CopyButton text={teamPromptCode} dictionary={dictionary} />
            </div>
            <pre className="text-sm text-green-400 font-mono overflow-x-auto p-4 whitespace-pre-wrap">
              <code>{teamPromptCode}</code>
            </pre>
          </div>
        </section>

        {/* Controlling Teammates */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
            {dictionary.agentTeams?.controlling?.title || 'Controlling Teammates'}
          </h2>
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
              {dictionary.agentTeams?.controlling?.description ||
                'The team lead assigns tasks, monitors progress, and can redirect teammates. Teammates report back via the mailbox when tasks are complete or when they need help.'}
            </p>
            <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4 border border-indigo-200 dark:border-indigo-800">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm text-indigo-700 dark:text-indigo-400">
                  {dictionary.agentTeams?.controlling?.permissions ||
                    'Teammates inherit permission settings from the team lead by default'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Display Modes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
            {dictionary.agentTeams?.displayModes?.title || 'Display Modes'}
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                {dictionary.agentTeams?.displayModes?.inProcess || 'In-Process Mode'}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {dictionary.agentTeams?.displayModes?.inProcessDesc ||
                  'All agents run within a single terminal session. Best for simpler coordination tasks with fewer agents.'}
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border-2 border-green-500 dark:border-green-400 p-6 relative">
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded">
                {locale === 'ko' ? '권장' : 'Recommended'}
              </span>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                {dictionary.agentTeams?.displayModes?.tmux || 'Tmux Mode'}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {dictionary.agentTeams?.displayModes?.tmuxDesc ||
                  'Each agent runs in a separate tmux pane, providing visual oversight of all agents working simultaneously.'}
              </p>
            </div>
          </div>

          {/* Tmux setup code example */}
          <div className="bg-slate-900 dark:bg-slate-950 rounded-xl border border-slate-700 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-slate-800 dark:bg-slate-900 border-b border-slate-700">
              <span className="text-sm text-slate-400 font-mono">
                {locale === 'ko' ? 'Tmux 모드 설정' : 'Tmux mode setup'}
              </span>
              <CopyButton text={tmuxSetupCode} dictionary={dictionary} />
            </div>
            <pre className="text-sm text-green-400 font-mono overflow-x-auto p-4">
              <code>{tmuxSetupCode}</code>
            </pre>
          </div>
          {dictionary.agentTeams?.displayModes?.iterm2 && (
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-3">
              {dictionary.agentTeams.displayModes.iterm2}
            </p>
          )}
        </section>

        {/* Use Cases (original section) */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
            {dictionary.agentTeams?.useCasesSection?.title || 'Use Cases'}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: dictionary.agentTeams?.useCasesSection?.largeRefactoring || 'Large-Scale Refactoring',
                desc: dictionary.agentTeams?.useCasesSection?.largeRefactoringDesc || 'Coordinate agents to refactor different modules simultaneously',
                colorIndex: 0,
              },
              {
                title: dictionary.agentTeams?.useCasesSection?.parallelTesting || 'Parallel Testing',
                desc: dictionary.agentTeams?.useCasesSection?.parallelTestingDesc || 'Run test suites across multiple environments in parallel',
                colorIndex: 1,
              },
              {
                title: dictionary.agentTeams?.useCasesSection?.codeReview || 'Comprehensive Code Review',
                desc: dictionary.agentTeams?.useCasesSection?.codeReviewDesc || 'Assign different reviewers for security, performance, style, and correctness',
                colorIndex: 2,
              },
              {
                title: dictionary.agentTeams?.useCasesSection?.multiService || 'Multi-Service Development',
                desc: dictionary.agentTeams?.useCasesSection?.multiServiceDesc || 'Develop frontend and backend services simultaneously',
                colorIndex: 3,
              },
            ].map((item, index) => (
              <div key={index} className={`bg-white dark:bg-slate-800 rounded-xl border ${useCaseColors[item.colorIndex].border} p-6`}>
                <div className={`w-8 h-8 ${useCaseColors[item.colorIndex].bg} rounded-lg flex items-center justify-center mb-3`}>
                  <svg className={`w-5 h-5 ${useCaseColors[item.colorIndex].text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Advanced Use Cases (from dictionary.agentTeams.useCases) */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
            {dictionary.agentTeams?.useCases?.title || 'Advanced Use Cases'}
          </h2>
          <div className="space-y-6">
            {[
              {
                key: 'parallelReview',
                fallbackTitle: 'Parallel Code Review',
                fallbackDesc: 'Multiple agents review different parts of a codebase simultaneously -- one checks security, another checks performance, another checks style.',
                icon: (
                  <svg className="w-6 h-6 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                bgColor: 'bg-cyan-50 dark:bg-cyan-900/20',
                borderColor: 'border-cyan-200 dark:border-cyan-800',
              },
              {
                key: 'competingHypotheses',
                fallbackTitle: 'Competing Hypotheses Debugging',
                fallbackDesc: 'Spawn multiple agents to investigate different theories about a bug in parallel. The first to find the root cause wins.',
                icon: (
                  <svg className="w-6 h-6 text-rose-600 dark:text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                ),
                bgColor: 'bg-rose-50 dark:bg-rose-900/20',
                borderColor: 'border-rose-200 dark:border-rose-800',
              },
              {
                key: 'largeRefactor',
                fallbackTitle: 'Large-Scale Refactoring',
                fallbackDesc: 'Split a large refactoring task across agents, each handling a different module or file group.',
                icon: (
                  <svg className="w-6 h-6 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                ),
                bgColor: 'bg-amber-50 dark:bg-amber-900/20',
                borderColor: 'border-amber-200 dark:border-amber-800',
              },
            ].map((item) => (
              <div key={item.key} className={`${item.bgColor} rounded-xl border ${item.borderColor} p-6`}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                      {dictionary.agentTeams?.useCases?.[item.key]?.title || item.fallbackTitle}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {dictionary.agentTeams?.useCases?.[item.key]?.description || item.fallbackDesc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Best Practices (original tips) */}
        <section className="mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              {dictionary.agentTeams?.bestPracticesSection?.title || 'Best Practices'}
            </h2>
            <ul className="space-y-4">
              {[
                dictionary.agentTeams?.bestPracticesSection?.tip1 || 'Start with small teams (2-3 agents) and scale up as needed',
                dictionary.agentTeams?.bestPracticesSection?.tip2 || 'Give each teammate a clear, focused task with well-defined boundaries',
                dictionary.agentTeams?.bestPracticesSection?.tip3 || 'Use tmux mode for better visibility when running more than 2 agents',
                dictionary.agentTeams?.bestPracticesSection?.tip4 || 'Monitor the mailbox regularly for coordination issues',
                dictionary.agentTeams?.bestPracticesSection?.tip5 || 'Set appropriate timeouts for long-running tasks',
                dictionary.agentTeams?.bestPracticesSection?.tip6 || 'Use the lead agent to verify and integrate teammate outputs',
              ].map((tip, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700 dark:text-slate-300">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Detailed Best Practices (from dictionary.agentTeams.bestPractices) */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
            {dictionary.agentTeams?.bestPractices?.title || 'Best Practices'}
            {' - '}
            {locale === 'ko' ? '상세 가이드' : 'Detailed Guide'}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                key: 'teamSize',
                fallback: 'Keep teams small (3-5 agents) -- larger teams have more coordination overhead',
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                color: 'blue',
              },
              {
                key: 'taskGranularity',
                fallback: 'Make tasks independent -- agents work best when they don\'t need to coordinate frequently',
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                ),
                color: 'green',
              },
              {
                key: 'clearInstructions',
                fallback: 'Give each teammate clear, self-contained instructions',
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
                color: 'purple',
              },
              {
                key: 'monitorProgress',
                fallback: 'Use the task list to monitor progress and adjust assignments',
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                color: 'orange',
              },
              {
                key: 'worktrees',
                fallback: 'Use git worktrees for isolation when agents modify the same files',
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                color: 'rose',
              },
            ].map((item) => {
              const colorMap: Record<string, { bg: string; text: string; border: string }> = {
                blue: { bg: 'bg-blue-100 dark:bg-blue-900', text: 'text-blue-600 dark:text-blue-400', border: 'border-blue-200 dark:border-blue-800' },
                green: { bg: 'bg-green-100 dark:bg-green-900', text: 'text-green-600 dark:text-green-400', border: 'border-green-200 dark:border-green-800' },
                purple: { bg: 'bg-purple-100 dark:bg-purple-900', text: 'text-purple-600 dark:text-purple-400', border: 'border-purple-200 dark:border-purple-800' },
                orange: { bg: 'bg-orange-100 dark:bg-orange-900', text: 'text-orange-600 dark:text-orange-400', border: 'border-orange-200 dark:border-orange-800' },
                rose: { bg: 'bg-rose-100 dark:bg-rose-900', text: 'text-rose-600 dark:text-rose-400', border: 'border-rose-200 dark:border-rose-800' },
              };
              const colors = colorMap[item.color];
              return (
                <div key={item.key} className={`bg-white dark:bg-slate-800 rounded-xl border ${colors.border} p-5`}>
                  <div className={`w-9 h-9 ${colors.bg} rounded-lg flex items-center justify-center mb-3`}>
                    <span className={colors.text}>{item.icon}</span>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    {dictionary.agentTeams?.bestPractices?.[item.key] || item.fallback}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Limitations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
            {dictionary.agentTeams?.limitations?.title || 'Limitations'}
          </h2>
          <div className="bg-red-50 dark:bg-red-900/10 rounded-xl border border-red-200 dark:border-red-800 p-8">
            <div className="space-y-4">
              {[
                {
                  key: 'experimental',
                  fallback: 'Feature is experimental and may change',
                  icon: (
                    <svg className="w-5 h-5 text-red-500 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  ),
                },
                {
                  key: 'contextIndependent',
                  fallback: 'Each agent has independent context -- no shared memory',
                  icon: (
                    <svg className="w-5 h-5 text-red-500 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  ),
                },
                {
                  key: 'coordination',
                  fallback: 'Complex inter-agent coordination can be unreliable',
                  icon: (
                    <svg className="w-5 h-5 text-red-500 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
                {
                  key: 'cost',
                  fallback: 'Running multiple agents increases API costs proportionally',
                  icon: (
                    <svg className="w-5 h-5 text-red-500 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div key={item.key} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">{item.icon}</div>
                  <p className="text-slate-700 dark:text-slate-300">
                    {dictionary.agentTeams?.limitations?.items?.[item.key] || item.fallback}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
