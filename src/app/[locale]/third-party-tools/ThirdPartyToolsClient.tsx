'use client';

import { useState } from 'react';
import NavigationHeader from '@/components/NavigationHeader';
import MobileMenu from '@/components/MobileMenu';
import { useNavigationMenu } from '@/hooks/useNavigationMenu';
import { type Locale } from '@/lib/i18n/config';

function CopyButton({ text, dictionary }: { text: string; dictionary?: Record<string, unknown> }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      const common = dictionary?.common as Record<string, string> | undefined;
      console.error(common?.copyError || 'Copy failed:', err);
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

interface ThirdPartyToolsClientProps {
  locale: Locale;
  dictionary: Record<string, unknown>;
}

function getTranslation(obj: unknown, path: string, fallback: string): string {
  const keys = path.split('.');
  let current: unknown = obj;
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return fallback;
    }
  }
  return typeof current === 'string' ? current : fallback;
}

export default function ThirdPartyToolsClient({ locale, dictionary }: ThirdPartyToolsClientProps) {
  const { mobileMenu, helpers } = useNavigationMenu();
  const t = dictionary.thirdPartyTools as Record<string, unknown> || {};
  const common = dictionary.common as Record<string, string> || {};

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

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8 sm:pb-12">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-16">
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            {(t.badge as string) || 'Open Source Ecosystem'}
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
            {(t.title as string) || 'Third-Party Tools'}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {(t.subtitle as string) || 'Explore open-source alternatives and extensions in the Claude Code ecosystem'}
          </p>
        </div>

        {/* Ecosystem Overview */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 sm:p-6 lg:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
              {((t.ecosystem as Record<string, string>)?.title) || 'The Claude Code Ecosystem'}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-6 sm:mb-8">
              {((t.ecosystem as Record<string, string>)?.description) || 
                'Beyond the official Claude Code CLI, a vibrant ecosystem of third-party tools has emerged. These tools offer different approaches, model flexibility, and specialized features.'}
            </p>
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-xl border border-orange-200 dark:border-orange-800">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  {((t.ecosystem as Record<string, Record<string, string>>)?.official?.title) || 'Official Tool'}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Claude Code</p>
              </div>
              <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl border border-emerald-200 dark:border-emerald-800">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  {((t.ecosystem as Record<string, Record<string, string>>)?.openSource?.title) || 'Open Source Alternative'}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">OpenCode</p>
              </div>
              <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  {((t.ecosystem as Record<string, Record<string, string>>)?.orchestration?.title) || 'Orchestration Layer'}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Oh My OpenCode</p>
              </div>
            </div>
          </div>
        </section>

        {/* OpenCode Section */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 sm:p-6 lg:p-8">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">OpenCode</h2>
                <p className="text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-medium">MIT Open Source</p>
              </div>
            </div>
            
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-6 sm:mb-8">
              {((t.opencode as Record<string, string>)?.description) ||
                'An open-source Claude Code alternative that supports 75+ model providers including Claude, OpenAI, Groq, and local models via Ollama.'}
            </p>

            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {/* Key Features */}
              <div className="p-4 sm:p-6 border border-slate-200 dark:border-slate-600 rounded-lg">
                <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white mb-3 sm:mb-4">
                  {((t.opencode as Record<string, Record<string, string>>)?.features?.title) || 'Key Features'}
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      {((t.opencode as Record<string, Record<string, string>>)?.features?.multiProvider) || '75+ model providers (Claude, OpenAI, Groq, Ollama)'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      {((t.opencode as Record<string, Record<string, string>>)?.features?.localModels) || 'Native local model support via Ollama'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      {((t.opencode as Record<string, Record<string, string>>)?.features?.clientServer) || 'Client/server architecture for remote workflows'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      {((t.opencode as Record<string, Record<string, string>>)?.features?.pluginSystem) || 'Plugin system with event hooks'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      {((t.opencode as Record<string, Record<string, string>>)?.features?.freeTool) || 'Free tool - only pay for API usage'}
                    </span>
                  </li>
                </ul>
              </div>

              {/* Installation */}
              <div className="p-4 sm:p-6 border border-slate-200 dark:border-slate-600 rounded-lg">
                <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white mb-3 sm:mb-4">
                  {((t.opencode as Record<string, Record<string, string>>)?.installation?.title) || 'Installation'}
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 text-xs mb-1 block">Homebrew (macOS)</span>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-3 flex items-center justify-between">
                      <code className="text-green-400 font-mono text-xs sm:text-sm overflow-x-auto">brew install opencode-ai/tap/opencode</code>
                      <CopyButton text="brew install opencode-ai/tap/opencode" dictionary={dictionary} />
                    </div>
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 text-xs mb-1 block">Go Install</span>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-3 flex items-center justify-between">
                      <code className="text-green-400 font-mono text-xs sm:text-sm overflow-x-auto">go install github.com/opencode-ai/opencode@latest</code>
                      <CopyButton text="go install github.com/opencode-ai/opencode@latest" dictionary={dictionary} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* GitHub Link */}
            <div className="flex justify-center">
              <a
                href="https://github.com/opencode-ai/opencode"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 sm:px-6 sm:py-3 bg-slate-900 dark:bg-slate-700 text-white rounded-lg hover:bg-slate-800 dark:hover:bg-slate-600 transition-colors text-sm sm:text-base"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                View on GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Oh My OpenCode Section */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 sm:p-6 lg:p-8">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">Oh My OpenCode</h2>
                <p className="text-purple-600 dark:text-purple-400 text-xs sm:text-sm font-medium">
                  {((t.ohmyopencode as Record<string, string>)?.tagline) || 'Batteries-included orchestration for OpenCode'}
                </p>
              </div>
            </div>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-6 sm:mb-8">
              {((t.ohmyopencode as Record<string, string>)?.description) ||
                'A powerful orchestration layer built on top of OpenCode, featuring specialized agents, multi-agent parallel execution, and 20+ built-in workflow automation hooks.'}
            </p>

            {/* Specialized Agents */}
            <div className="mb-6 sm:mb-8">
              <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white mb-4 sm:mb-6">
                {((t.ohmyopencode as Record<string, Record<string, string>>)?.agents?.title) || 'Specialized Agents'}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div className="p-4 sm:p-5 border border-slate-200 dark:border-slate-600 rounded-lg">
                  <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Sisyphus</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    {getTranslation(t, 'ohmyopencode.agents.sisyphus', 'Default planner and executor agent')}
                  </p>
                </div>
                <div className="p-4 sm:p-5 border border-slate-200 dark:border-slate-600 rounded-lg">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Librarian</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    {getTranslation(t, 'ohmyopencode.agents.librarian', 'External docs & GitHub exploration')}
                  </p>
                </div>
                <div className="p-4 sm:p-5 border border-slate-200 dark:border-slate-600 rounded-lg">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Explore</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    {getTranslation(t, 'ohmyopencode.agents.explore', 'Internal codebase searching')}
                  </p>
                </div>
                <div className="p-4 sm:p-5 border border-slate-200 dark:border-slate-600 rounded-lg">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Oracle</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    {getTranslation(t, 'ohmyopencode.agents.oracle', 'Strategic debugging guidance')}
                  </p>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="p-4 sm:p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg mb-6 sm:mb-8">
              <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white mb-3 sm:mb-4">
                {((t.ohmyopencode as Record<string, Record<string, string>>)?.features?.title) || 'Key Features'}
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 flex-shrink-0"></span>
                    {((t.ohmyopencode as Record<string, Record<string, string>>)?.features?.multiAgent) || 'Multi-agent parallel execution'}
                  </li>
                  <li className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 flex-shrink-0"></span>
                    {((t.ohmyopencode as Record<string, Record<string, string>>)?.features?.hooks) || '20+ built-in workflow hooks'}
                  </li>
                  <li className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 flex-shrink-0"></span>
                    {((t.ohmyopencode as Record<string, Record<string, string>>)?.features?.mcp) || 'MCP integration for code search'}
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 flex-shrink-0"></span>
                    {((t.ohmyopencode as Record<string, Record<string, string>>)?.features?.lsp) || 'Full LSP support'}
                  </li>
                  <li className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 flex-shrink-0"></span>
                    {((t.ohmyopencode as Record<string, Record<string, string>>)?.features?.multiModel) || 'Multi-model support (Claude, GPT, Gemini)'}
                  </li>
                  <li className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 flex-shrink-0"></span>
                    {((t.ohmyopencode as Record<string, Record<string, string>>)?.features?.buildAware) || 'Build pipeline awareness'}
                  </li>
                </ul>
              </div>
            </div>

            {/* GitHub Link */}
            <div className="flex justify-center">
              <a
                href="https://github.com/code-yeongyu/oh-my-opencode"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 sm:px-6 sm:py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm sm:text-base"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                View on GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 sm:p-6 lg:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
              {((t.comparison as Record<string, string>)?.title) || 'Comparison'}
            </h2>
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <div className="min-w-[600px] px-4 sm:px-0">
                <table className="w-full text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-700">
                      <th className="text-left py-3 px-2 sm:px-4 font-semibold text-slate-900 dark:text-white">
                        {((t.comparison as Record<string, string>)?.feature) || 'Feature'}
                      </th>
                      <th className="text-center py-3 px-2 sm:px-4 font-semibold text-orange-600 dark:text-orange-400">Claude Code</th>
                      <th className="text-center py-3 px-2 sm:px-4 font-semibold text-emerald-600 dark:text-emerald-400">OpenCode</th>
                      <th className="text-center py-3 px-2 sm:px-4 font-semibold text-purple-600 dark:text-purple-400">Oh My OpenCode</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                    <tr>
                      <td className="py-3 px-2 sm:px-4 text-slate-600 dark:text-slate-400">
                        {((t.comparison as Record<string, string>)?.license) || 'License'}
                      </td>
                      <td className="py-3 px-2 sm:px-4 text-center text-slate-600 dark:text-slate-400">Proprietary</td>
                      <td className="py-3 px-2 sm:px-4 text-center text-slate-600 dark:text-slate-400">MIT</td>
                      <td className="py-3 px-2 sm:px-4 text-center text-slate-600 dark:text-slate-400">MIT</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 sm:px-4 text-slate-600 dark:text-slate-400">
                        {((t.comparison as Record<string, string>)?.modelSupport) || 'Model Support'}
                      </td>
                      <td className="py-3 px-2 sm:px-4 text-center text-slate-600 dark:text-slate-400">Anthropic only</td>
                      <td className="py-3 px-2 sm:px-4 text-center text-slate-600 dark:text-slate-400">75+ providers</td>
                      <td className="py-3 px-2 sm:px-4 text-center text-slate-600 dark:text-slate-400">75+ (via OpenCode)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 sm:px-4 text-slate-600 dark:text-slate-400">
                        {((t.comparison as Record<string, string>)?.localModels) || 'Local Models'}
                      </td>
                      <td className="py-3 px-2 sm:px-4 text-center">
                        <span className="text-red-500">-</span>
                      </td>
                      <td className="py-3 px-2 sm:px-4 text-center">
                        <span className="text-emerald-500">Ollama</span>
                      </td>
                      <td className="py-3 px-2 sm:px-4 text-center">
                        <span className="text-emerald-500">Ollama</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 sm:px-4 text-slate-600 dark:text-slate-400">
                        {((t.comparison as Record<string, string>)?.checkpoints) || 'Checkpoints/Rewind'}
                      </td>
                      <td className="py-3 px-2 sm:px-4 text-center">
                        <span className="text-emerald-500">Native</span>
                      </td>
                      <td className="py-3 px-2 sm:px-4 text-center">
                        <span className="text-red-500">-</span>
                      </td>
                      <td className="py-3 px-2 sm:px-4 text-center">
                        <span className="text-red-500">-</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 sm:px-4 text-slate-600 dark:text-slate-400">
                        {((t.comparison as Record<string, string>)?.sandboxing) || 'Sandboxing'}
                      </td>
                      <td className="py-3 px-2 sm:px-4 text-center">
                        <span className="text-emerald-500">OS-level</span>
                      </td>
                      <td className="py-3 px-2 sm:px-4 text-center">
                        <span className="text-yellow-500">Container</span>
                      </td>
                      <td className="py-3 px-2 sm:px-4 text-center">
                        <span className="text-yellow-500">Container</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 sm:px-4 text-slate-600 dark:text-slate-400">
                        {((t.comparison as Record<string, string>)?.multiAgent) || 'Multi-Agent'}
                      </td>
                      <td className="py-3 px-2 sm:px-4 text-center">
                        <span className="text-emerald-500">Subagents</span>
                      </td>
                      <td className="py-3 px-2 sm:px-4 text-center">
                        <span className="text-emerald-500">Agents</span>
                      </td>
                      <td className="py-3 px-2 sm:px-4 text-center">
                        <span className="text-emerald-500">Advanced</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 sm:px-4 text-slate-600 dark:text-slate-400">
                        {((t.comparison as Record<string, string>)?.price) || 'Price'}
                      </td>
                      <td className="py-3 px-2 sm:px-4 text-center text-slate-600 dark:text-slate-400">$17-100/mo</td>
                      <td className="py-3 px-2 sm:px-4 text-center text-slate-600 dark:text-slate-400">Free + API</td>
                      <td className="py-3 px-2 sm:px-4 text-center text-slate-600 dark:text-slate-400">Free + API</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Best For Section */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6 sm:mb-8 text-center">
            {((t.bestFor as Record<string, string>)?.title) || 'Which Tool is Best For You?'}
          </h2>
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-orange-200 dark:border-orange-800 p-4 sm:p-6">
              <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-base sm:text-lg text-orange-600 dark:text-orange-400 mb-2 sm:mb-3">Claude Code</h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mb-3 sm:mb-4">
                {((t.bestFor as Record<string, Record<string, string>>)?.claudeCode?.desc) || 
                  'Best for teams prioritizing performance, security, and official support.'}
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">+</span>
                  {((t.bestFor as Record<string, Record<string, string>>)?.claudeCode?.pro1) || 'Best-in-class Claude performance'}
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">+</span>
                  {((t.bestFor as Record<string, Record<string, string>>)?.claudeCode?.pro2) || 'Native sandboxing (84% fewer prompts)'}
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">+</span>
                  {((t.bestFor as Record<string, Record<string, string>>)?.claudeCode?.pro3) || 'Official IDE integrations'}
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-emerald-200 dark:border-emerald-800 p-4 sm:p-6">
              <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-bold text-base sm:text-lg text-emerald-600 dark:text-emerald-400 mb-2 sm:mb-3">OpenCode</h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mb-3 sm:mb-4">
                {((t.bestFor as Record<string, Record<string, string>>)?.opencode?.desc) ||
                  'Best for developers wanting provider flexibility and cost control.'}
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">+</span>
                  {((t.bestFor as Record<string, Record<string, string>>)?.opencode?.pro1) || 'No vendor lock-in'}
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">+</span>
                  {((t.bestFor as Record<string, Record<string, string>>)?.opencode?.pro2) || 'Local models via Ollama'}
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">+</span>
                  {((t.bestFor as Record<string, Record<string, string>>)?.opencode?.pro3) || 'Client/server remote workflows'}
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-purple-200 dark:border-purple-800 p-4 sm:p-6">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="font-bold text-base sm:text-lg text-purple-600 dark:text-purple-400 mb-2 sm:mb-3">Oh My OpenCode</h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mb-3 sm:mb-4">
                {((t.bestFor as Record<string, Record<string, string>>)?.ohmyopencode?.desc) ||
                  'Best for complex projects requiring specialized agent orchestration.'}
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">+</span>
                  {((t.bestFor as Record<string, Record<string, string>>)?.ohmyopencode?.pro1) || 'Specialized agents'}
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">+</span>
                  {((t.bestFor as Record<string, Record<string, string>>)?.ohmyopencode?.pro2) || 'Parallel execution'}
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">+</span>
                  {((t.bestFor as Record<string, Record<string, string>>)?.ohmyopencode?.pro3) || '20+ workflow hooks'}
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 sm:p-8 text-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
              {((t.cta as Record<string, string>)?.title) || 'Ready to Explore?'}
            </h2>
            <p className="text-blue-100 mb-5 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              {((t.cta as Record<string, string>)?.description) ||
                'Start with the official Claude Code, or explore the open-source alternatives based on your needs.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href={`/${locale}/getting-started`}
                className="bg-white text-blue-600 px-6 py-2.5 sm:px-8 sm:py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors text-sm sm:text-base"
              >
                {common.getStarted || 'Get Started with Claude Code'}
              </a>
              <a
                href="https://github.com/opencode-ai/opencode"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-lg font-medium hover:bg-white/10 transition-colors text-sm sm:text-base"
              >
                {((t.cta as Record<string, string>)?.exploreOpenCode) || 'Explore OpenCode'}
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
