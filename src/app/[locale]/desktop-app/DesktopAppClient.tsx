'use client';

import { useState } from 'react';
import NavigationHeader from '@/components/NavigationHeader';
import MobileMenu from '@/components/MobileMenu';
import { useNavigationMenu } from '@/hooks/useNavigationMenu';
import { type Locale } from '@/lib/i18n/config';

interface DesktopAppClientProps {
  locale: Locale;
  dictionary: Record<string, unknown>;
}

function CopyButton({ text, copiedLabel }: { text: string; copiedLabel?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="text-slate-400 hover:text-white transition-colors"
      title="Copy"
      aria-label="Copy to clipboard"
    >
      {copied ? (
        <span className="flex items-center gap-1 text-green-400 text-xs">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          {copiedLabel || 'Copied!'}
        </span>
      ) : (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )}
    </button>
  );
}

function CodeBlock({ code, title, copiedLabel }: { code: string; title?: string; copiedLabel?: string }) {
  return (
    <div className="bg-slate-900 rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-slate-800">
        <span className="text-xs text-slate-400">{title || 'Terminal'}</span>
        <CopyButton text={code} copiedLabel={copiedLabel} />
      </div>
      <pre className="p-4 text-sm text-green-400 overflow-x-auto font-mono"><code>{code}</code></pre>
    </div>
  );
}

const featureColorClasses: Record<string, { bg: string; icon: string }> = {
  blue: { bg: 'bg-blue-100 dark:bg-blue-900', icon: 'text-blue-600 dark:text-blue-400' },
  green: { bg: 'bg-green-100 dark:bg-green-900', icon: 'text-green-600 dark:text-green-400' },
  purple: { bg: 'bg-purple-100 dark:bg-purple-900', icon: 'text-purple-600 dark:text-purple-400' },
  orange: { bg: 'bg-orange-100 dark:bg-orange-900', icon: 'text-orange-600 dark:text-orange-400' },
  teal: { bg: 'bg-teal-100 dark:bg-teal-900', icon: 'text-teal-600 dark:text-teal-400' },
  pink: { bg: 'bg-pink-100 dark:bg-pink-900', icon: 'text-pink-600 dark:text-pink-400' },
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function DesktopAppClient({ locale, dictionary }: DesktopAppClientProps) {
  const { mobileMenu, helpers } = useNavigationMenu();

  const d = (dictionary as any).desktopApp;
  const copiedLabel = d?.installation?.copied || 'Copied!';

  const features = [
    {
      title: d?.features?.visualDiffs || 'Visual Diffs',
      desc: d?.features?.visualDiffsDesc || 'See code changes with rich side-by-side visual diffs before accepting',
      color: 'blue',
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
    },
    {
      title: d?.features?.multipleSessions || 'Multiple Sessions',
      desc: d?.features?.multipleSessionsDesc || 'Run multiple Claude Code sessions simultaneously in separate tabs',
      color: 'green',
      icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z',
    },
    {
      title: d?.features?.scheduling || 'Task Scheduling',
      desc: d?.features?.schedulingDesc || 'Schedule recurring tasks like code reviews, dependency updates, and report generation',
      color: 'purple',
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    {
      title: d?.features?.fileExplorer || 'File Explorer',
      desc: d?.features?.fileExplorerDesc || 'Browse your project files with an integrated file explorer',
      color: 'orange',
      icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z',
    },
    {
      title: d?.features?.history || 'Session History',
      desc: d?.features?.historyDesc || 'Access complete history of past sessions with search and filtering',
      color: 'teal',
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    {
      title: d?.features?.themes || 'Customizable Themes',
      desc: d?.features?.themesDesc || 'Choose from light, dark, and custom themes for your preferred look',
      color: 'pink',
      icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
    },
  ];

  const defaultComparisonRows = [
    { feature: 'Interface', cli: 'Terminal-based text UI', desktop: 'Native GUI with panels and tabs' },
    { feature: 'Code Diffs', cli: 'Inline text diffs in terminal', desktop: 'Rich side-by-side visual diffs' },
    { feature: 'Multiple Sessions', cli: 'Multiple terminal windows/tmux', desktop: 'Built-in tabbed sessions' },
    { feature: 'Task Scheduling', cli: 'Cron jobs or external tools', desktop: 'Built-in scheduler with UI' },
    { feature: 'File Browsing', cli: 'ls, tree, or external tools', desktop: 'Integrated file explorer panel' },
    { feature: 'Session History', cli: 'claude --resume to list sessions', desktop: 'Searchable history with filters' },
    { feature: 'Scripting & Piping', cli: 'Full shell piping and scripting', desktop: 'Not available' },
    { feature: 'Headless / CI Mode', cli: 'Supported (--print flag)', desktop: 'Not available' },
    { feature: 'Resource Usage', cli: 'Minimal (terminal only)', desktop: 'More RAM for GUI rendering' },
  ];

  const comparisonRows: Array<{ feature: string; cli: string; desktop: string }> =
    d?.cliVsDesktop?.rows || defaultComparisonRows;

  const defaultUniqueCapabilities = [
    { title: 'Visual Diff Review', description: 'Review every code change in a rich side-by-side diff viewer. Accept, reject, or edit individual hunks before they are applied to your files.' },
    { title: 'Tabbed Session Management', description: 'Open multiple Claude Code sessions in separate tabs. Work on a feature in one tab while debugging in another, each with independent context.' },
    { title: 'Built-in Task Scheduler', description: 'Schedule tasks like daily dependency updates, weekly code reviews, or nightly test runs directly from the UI without external cron jobs.' },
    { title: 'Drag-and-Drop File Context', description: 'Drag files or folders from your OS file manager directly into the chat to add them as context. No need to type file paths.' },
    { title: 'Integrated File Explorer', description: 'Browse your project tree in a sidebar panel. Click any file to view it or add it to context without leaving the app.' },
    { title: 'Session History Browser', description: 'Search, filter, and revisit past sessions with full conversation history. Resume any previous session with one click.' },
  ];

  const uniqueCapabilities: Array<{ title: string; description: string }> =
    d?.uniqueCapabilities?.items || defaultUniqueCapabilities;

  const defaultShortcuts = [
    { keys: 'Ctrl/Cmd + N', action: 'New session tab' },
    { keys: 'Ctrl/Cmd + W', action: 'Close current tab' },
    { keys: 'Ctrl/Cmd + Tab', action: 'Switch to next tab' },
    { keys: 'Ctrl/Cmd + Shift + Tab', action: 'Switch to previous tab' },
    { keys: 'Ctrl/Cmd + Enter', action: 'Send message' },
    { keys: 'Ctrl/Cmd + Shift + V', action: 'Toggle diff viewer' },
    { keys: 'Ctrl/Cmd + B', action: 'Toggle file explorer sidebar' },
    { keys: 'Ctrl/Cmd + H', action: 'Open session history' },
    { keys: 'Ctrl/Cmd + ,', action: 'Open settings' },
    { keys: 'Escape', action: 'Cancel current operation' },
  ];

  const shortcuts: Array<{ keys: string; action: string }> =
    d?.keyboardShortcuts?.shortcuts || defaultShortcuts;

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
            {d?.title || 'Desktop App'}
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            {d?.subtitle || 'Claude Code in a native desktop experience with visual diffs, multiple sessions, and more'}
          </p>
        </div>

        {/* Overview */}
        <section className="mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              {d?.overview?.title || 'Overview'}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              {d?.overview?.description ||
                'The Claude Code Desktop App provides a native GUI environment for Claude Code, offering features like visual diffs, multiple concurrent sessions, scheduled tasks, and a more accessible interface.'}
            </p>
          </div>
        </section>

        {/* Download */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200 dark:border-blue-800 p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              {d?.download?.title || 'Download'}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
              {d?.download?.description || 'Available for macOS, Windows, and Linux'}
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {[
                { label: d?.download?.macos || 'Download for macOS' },
                { label: d?.download?.windows || 'Download for Windows' },
                { label: d?.download?.linux || 'Download for Linux' },
              ].map((platform, index) => (
                <a
                  key={index}
                  href="https://claude.ai/download"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 transition-colors text-slate-700 dark:text-slate-300 font-medium"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  {platform.label}
                </a>
              ))}
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 rounded-lg p-4">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                {d?.download?.systemReqs || 'System Requirements'}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {d?.download?.systemReqsList || 'macOS 12+, Windows 10+, or Ubuntu 20.04+ with 4GB RAM minimum'}
              </p>
            </div>
          </div>
        </section>

        {/* Installation Methods */}
        <section className="mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              {d?.installation?.title || 'Installation Methods'}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
              {d?.installation?.description || 'Multiple ways to install the Claude Code Desktop App on your system.'}
            </p>

            <div className="space-y-8">
              {/* macOS */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-slate-600 dark:text-slate-300" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
                  </span>
                  {d?.installation?.macos || 'macOS'}
                </h3>
                <div className="space-y-3 pl-11">
                  <div>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      {d?.installation?.macosHomebrew || 'Homebrew'} - {d?.installation?.macosHomebrewDesc || 'Install via Homebrew cask'}
                    </p>
                    <CodeBlock code="brew install --cask claude-code" title="Homebrew" copiedLabel={copiedLabel} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      {d?.installation?.macosDirectDownload || 'Direct Download'} - {d?.installation?.macosDirectDownloadDesc || 'Download the .dmg installer from the official site'}
                    </p>
                    <CodeBlock code="# Visit https://claude.ai/download" title="Browser" copiedLabel={copiedLabel} />
                  </div>
                </div>
              </div>

              {/* Windows */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-slate-600 dark:text-slate-300" viewBox="0 0 24 24" fill="currentColor"><path d="M3 12V6.75l8-1.25V12H3zm0 .5h8v6.5l-8-1.25V12.5zM11.5 12V5.25l9.5-1.5V12h-9.5zm0 .5h9.5v7.75l-9.5-1.5V12.5z" /></svg>
                  </span>
                  {d?.installation?.windows || 'Windows'}
                </h3>
                <div className="space-y-3 pl-11">
                  <div>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      {d?.installation?.windowsWinget || 'WinGet'} - {d?.installation?.windowsWingetDesc || 'Install via Windows Package Manager'}
                    </p>
                    <CodeBlock code="winget install Anthropic.ClaudeCode" title="WinGet" copiedLabel={copiedLabel} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      {d?.installation?.windowsDirectDownload || 'Direct Download'} - {d?.installation?.windowsDirectDownloadDesc || 'Download the .exe installer from the official site'}
                    </p>
                    <CodeBlock code="# Visit https://claude.ai/download" title="Browser" copiedLabel={copiedLabel} />
                  </div>
                </div>
              </div>

              {/* Linux */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-slate-600 dark:text-slate-300" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>
                  </span>
                  {d?.installation?.linux || 'Linux'}
                </h3>
                <div className="space-y-3 pl-11">
                  <div>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      {d?.installation?.linuxShellInstall || 'Shell Install'} - {d?.installation?.linuxShellInstallDesc || 'Install via the official install script'}
                    </p>
                    <CodeBlock code="curl -fsSL https://claude.ai/install.sh | bash" title="Shell" copiedLabel={copiedLabel} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      {d?.installation?.linuxDirectDownload || 'Direct Download'} - {d?.installation?.linuxDirectDownloadDesc || 'Download the .deb or .AppImage from the official site'}
                    </p>
                    <CodeBlock code="# Visit https://claude.ai/download" title="Browser" copiedLabel={copiedLabel} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
            {d?.features?.title || 'Key Features'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const colors = featureColorClasses[feature.color] || featureColorClasses.blue;
              return (
                <div key={index} className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
                  <div className={`w-10 h-10 ${colors.bg} rounded-lg flex items-center justify-center mb-4`}>
                    <svg className={`w-6 h-6 ${colors.icon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Desktop-Exclusive Capabilities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            {d?.uniqueCapabilities?.title || 'Desktop-Exclusive Capabilities'}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            {d?.uniqueCapabilities?.description || 'Features available only in the Desktop App that enhance the visual development experience.'}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {uniqueCapabilities.map((item, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mr-4 mt-0.5">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CLI vs Desktop Comparison */}
        <section className="mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              {d?.cliVsDesktop?.title || 'CLI vs Desktop App'}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
              {d?.cliVsDesktop?.description || 'Both the CLI and Desktop App run the same Claude Code engine. Choose based on your workflow preferences.'}
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-slate-200 dark:border-slate-600">
                    <th className="py-3 pr-4 text-sm font-semibold text-slate-900 dark:text-white">
                      {d?.cliVsDesktop?.headerFeature || 'Feature'}
                    </th>
                    <th className="py-3 px-4 text-sm font-semibold text-slate-900 dark:text-white">
                      {d?.cliVsDesktop?.headerCli || 'CLI'}
                    </th>
                    <th className="py-3 pl-4 text-sm font-semibold text-slate-900 dark:text-white">
                      {d?.cliVsDesktop?.headerDesktop || 'Desktop App'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, index) => (
                    <tr key={index} className="border-b border-slate-100 dark:border-slate-700">
                      <td className="py-3 pr-4 text-sm font-medium text-slate-900 dark:text-white">{row.feature}</td>
                      <td className="py-3 px-4 text-sm text-slate-600 dark:text-slate-400">{row.cli}</td>
                      <td className="py-3 pl-4 text-sm text-slate-600 dark:text-slate-400">{row.desktop}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-sm text-blue-800 dark:text-blue-300">
                <span className="font-semibold">TL;DR:</span>{' '}
                {d?.cliVsDesktop?.recommendation || 'Use the CLI for scripting, CI/CD pipelines, and headless automation. Use the Desktop App for day-to-day development where visual feedback and session management matter.'}
              </p>
            </div>
          </div>
        </section>

        {/* Keyboard Shortcuts */}
        <section className="mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              {d?.keyboardShortcuts?.title || 'Keyboard Shortcuts'}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
              {d?.keyboardShortcuts?.description || 'Speed up your workflow with these essential keyboard shortcuts.'}
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {shortcuts.map((shortcut, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-50 dark:bg-slate-700/50 rounded-lg px-4 py-3">
                  <span className="text-sm text-slate-600 dark:text-slate-400">{shortcut.action}</span>
                  <kbd className="ml-4 px-2 py-1 bg-slate-200 dark:bg-slate-600 rounded text-xs font-mono text-slate-700 dark:text-slate-300 whitespace-nowrap">
                    {shortcut.keys}
                  </kbd>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              {d?.gettingStartedSection?.title || 'Getting Started'}
            </h2>
            <div className="space-y-4">
              {[
                d?.gettingStartedSection?.step1 || 'Download and install the Desktop App for your platform',
                d?.gettingStartedSection?.step2 || 'Sign in with your Anthropic account',
                d?.gettingStartedSection?.step3 || 'Open a project folder or create a new workspace',
                d?.gettingStartedSection?.step4 || 'Start coding with Claude in the visual interface',
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
      </main>
    </div>
  );
}
