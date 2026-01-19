'use client';

import { useState } from 'react';
import NavigationHeader from '@/components/NavigationHeader';
import MobileMenu from '@/components/MobileMenu';
import { useNavigationMenu } from '@/hooks/useNavigationMenu';
import { type Locale } from '@/lib/i18n/config';

function CopyButton({ text, className = "", dictionary }: { text: string; className?: string; dictionary: any }) {
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
      className={`text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors ${className}`}
      title={dictionary?.mcp?.copyToClipboard || 'Copy to clipboard'}
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

interface MCPClientProps {
  locale: Locale;
  dictionary: any;
}

export default function MCPClient({ locale, dictionary }: MCPClientProps) {
  const { mobileMenu, helpers } = useNavigationMenu();

  // Add defensive check for dictionary
  if (!dictionary || !dictionary.mcp || !dictionary.navigation || !dictionary.common) {
    console.error('MCPClient: Missing required dictionary sections', {
      hasDictionary: !!dictionary,
      hasMcp: !!dictionary?.mcp,
      hasNavigation: !!dictionary?.navigation,
      hasCommon: !!dictionary?.common
    });
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-zinc-100 dark:from-slate-900 dark:to-zinc-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Loading...</h1>
          <p className="text-slate-600 dark:text-slate-300">Dictionary not loaded properly for locale: {locale}</p>
        </div>
      </div>
    );
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

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 sm:pb-12">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-16">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {dictionary.mcp?.heroTitle || 'Model Context Protocol (MCP)'}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {dictionary.mcp?.heroSubtitle || 'Connect Claude Code with external data sources'}
          </p>
        </div>

        {/* What is MCP */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 sm:p-6 lg:p-8">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-6">
              {dictionary.mcp?.whatIsMcp?.title || 'What is MCP?'}
            </h2>
            
            <div className="space-y-6">
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {dictionary.mcp?.whatIsMcp?.description || 'MCP is a protocol for connecting AI assistants with external tools.'}
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 sm:p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="text-base sm:text-lg font-semibold text-blue-900 dark:text-blue-300 mb-3">
                  🚀 {dictionary.mcp?.whatIsMcp?.possibleTitle || 'Possibilities with MCP'}
                </h3>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-blue-800 dark:text-blue-200">
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {dictionary.mcp?.whatIsMcp?.features?.supabase || 'Supabase database operations'}
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {dictionary.mcp?.whatIsMcp?.features?.github || 'GitHub repository management'}
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {dictionary.mcp?.whatIsMcp?.features?.slack || 'Slack message automation'}
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {dictionary.mcp?.whatIsMcp?.features?.filesystem || 'Local filesystem access'}
                    </li>
                  </ul>
                  <ul className="space-y-2 text-blue-800 dark:text-blue-200">
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {dictionary.mcp?.whatIsMcp?.features?.postgresql || 'PostgreSQL schema analysis'}
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {dictionary.mcp?.whatIsMcp?.features?.notion || 'Notion task management'}
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {dictionary.mcp?.whatIsMcp?.features?.browser || 'Web browser automation'}
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {dictionary.mcp?.whatIsMcp?.features?.monitoring || 'Real-time log monitoring'}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 dark:bg-amber-900/20 p-3 sm:p-4 rounded-lg border border-amber-200 dark:border-amber-800">
                <p className="text-amber-800 dark:text-amber-200 text-xs sm:text-sm">
                  <strong>💡 {dictionary.mcp?.whatIsMcp?.example?.title || 'Example'}:</strong> {dictionary.mcp?.whatIsMcp?.example?.description || 'Query users from the database and send a report to Slack.'}
                </p>
              </div>

              {/* MCP Tool Search Auto Mode - NEW in 2.1 */}
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-2 border-green-500 dark:border-green-400 relative mt-4">
                <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded">NEW in 2.1</div>
                <h3 className="text-base sm:text-lg font-semibold text-green-900 dark:text-green-300 mb-2">
                  🔍 {dictionary.mcp?.whatIsMcp?.mcpSearch?.title || 'MCP Tool Search Auto Mode'}
                </h3>
                <p className="text-green-800 dark:text-green-200 text-sm mb-3">
                  {dictionary.mcp?.whatIsMcp?.mcpSearch?.description || 'When MCP tool descriptions exceed 10% of context window, they are automatically deferred and discovered via MCPSearch tool instead of being loaded upfront.'}
                </p>
                <div className="bg-slate-900 dark:bg-slate-800 rounded p-3">
                  <code className="text-green-400 font-mono text-xs">
                    {dictionary.mcp?.whatIsMcp?.mcpSearch?.config || '# Configure threshold: auto:N (N = percentage 0-100)'}
                  </code>
                </div>
              </div>

              {/* HTTP Transport - NEW */}
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-2 border-blue-500 dark:border-blue-400 relative mt-4">
                <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-2 py-0.5 rounded">UPDATED</div>
                <h3 className="text-base sm:text-lg font-semibold text-blue-900 dark:text-blue-300 mb-2">
                  🔗 {dictionary.mcp?.whatIsMcp?.httpTransport?.title || 'HTTP Transport (Recommended)'}
                </h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm mb-3">
                  {dictionary.mcp?.whatIsMcp?.httpTransport?.description || 'HTTP is now the recommended transport protocol. SSE (Server-Sent Events) is deprecated.'}
                </p>
                <div className="bg-slate-900 dark:bg-slate-800 rounded p-3 mb-2">
                  <code className="text-green-400 font-mono text-xs block">
                    {`// New HTTP transport (Recommended)`}
                  </code>
                  <code className="text-blue-400 font-mono text-xs block mt-1">
                    {`"url": "http://localhost:3000/mcp"`}
                  </code>
                  <code className="text-blue-400 font-mono text-xs block">
                    {`"transport": "http"`}
                  </code>
                </div>
                <div className="bg-red-900/30 dark:bg-red-900/20 rounded p-2">
                  <code className="text-red-400 font-mono text-xs">
                    {`// SSE transport - DEPRECATED`}
                  </code>
                </div>
              </div>

              {/* MCP Resource Mentions - NEW */}
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border-2 border-purple-500 dark:border-purple-400 relative mt-4">
                <div className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs px-2 py-0.5 rounded">NEW</div>
                <h3 className="text-base sm:text-lg font-semibold text-purple-900 dark:text-purple-300 mb-2">
                  @ {dictionary.mcp?.whatIsMcp?.resourceMentions?.title || 'MCP Resource Mentions'}
                </h3>
                <p className="text-purple-800 dark:text-purple-200 text-sm mb-3">
                  {dictionary.mcp?.whatIsMcp?.resourceMentions?.description || 'Reference MCP resources directly in your prompts using @ syntax.'}
                </p>
                <div className="space-y-2">
                  <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                    <code className="text-purple-400 font-mono text-xs">
                      claude{`>`} @database/users {dictionary.mcp?.whatIsMcp?.resourceMentions?.example1 || 'Analyze table structure'}
                    </code>
                  </div>
                  <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                    <code className="text-purple-400 font-mono text-xs">
                      claude{`>`} @github/issues {dictionary.mcp?.whatIsMcp?.resourceMentions?.example2 || 'Show recent issues'}
                    </code>
                  </div>
                </div>
              </div>

              {/* MCP Prompts as Slash Commands - NEW */}
              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border-2 border-orange-500 dark:border-orange-400 relative mt-4">
                <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-0.5 rounded">NEW</div>
                <h3 className="text-base sm:text-lg font-semibold text-orange-900 dark:text-orange-300 mb-2">
                  / {dictionary.mcp?.whatIsMcp?.slashCommands?.title || 'MCP Prompts as Slash Commands'}
                </h3>
                <p className="text-orange-800 dark:text-orange-200 text-sm mb-3">
                  {dictionary.mcp?.whatIsMcp?.slashCommands?.description || 'MCP server prompts are automatically registered as slash commands.'}
                </p>
                <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                  <code className="text-orange-400 font-mono text-xs">
                    /supabase/create-migration, /github/review-pr
                  </code>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular MCP Servers */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 sm:p-6 lg:p-8">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-6">
              {dictionary.mcp?.popularServers?.title || 'Popular MCP Servers'}
            </h2>
            
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              {dictionary.mcp?.popularServers?.subtitle || 'Enhance your Claude Code experience with these useful MCP servers'}
            </p>

            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              
              {/* Top Tier - Most Popular */}
              <div className="space-y-6">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4">
                  🔥 {dictionary.mcp?.popularServers?.essential?.title || 'Essential MCP Servers'}
                </h3>
                
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">S</span>
                    </div>
                    <h4 className="text-lg font-semibold text-green-900 dark:text-green-300">{dictionary.mcp?.popularServers?.essential?.supabase?.title || 'Supabase MCP'}</h4>
                  </div>
                  <p className="text-green-800 dark:text-green-200 text-sm mb-3">
                    {dictionary.mcp?.popularServers?.essential?.supabase?.description || 'Direct database operations and real-time data queries'}
                  </p>
                  <div className="space-y-2">
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                      <code className="text-green-400 font-mono text-xs">
                        {dictionary.mcp?.popularServers?.essential?.supabase?.examples?.createTable || 'claude> Create a users table in Supabase'}
                      </code>
                    </div>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                      <code className="text-green-400 font-mono text-xs">
                        {dictionary.mcp?.popularServers?.essential?.supabase?.examples?.queryUsers || 'claude> Query active users from the last 30 days'}
                      </code>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-900/20 dark:to-slate-900/20 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">G</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-300">{dictionary.mcp?.popularServers?.essential?.github?.title || 'GitHub MCP'}</h4>
                  </div>
                  <p className="text-gray-800 dark:text-gray-200 text-sm mb-3">
                    {dictionary.mcp?.popularServers?.essential?.github?.description || 'GitHub repository management and automation'}
                  </p>
                  <div className="space-y-2">
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                      <code className="text-green-400 font-mono text-xs">
                        {dictionary.mcp?.popularServers?.essential?.github?.examples?.issueToPr || 'claude> Convert issue #123 to a pull request'}
                      </code>
                    </div>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                      <code className="text-green-400 font-mono text-xs">
                        {dictionary.mcp?.popularServers?.essential?.github?.examples?.releaseNotes || 'claude> Generate release notes from recent commits'}
                      </code>
                    </div>
                  </div>
                </div>
              </div>

              {/* High Value MCP Servers */}
              <div className="space-y-6">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4">
                  💎 {dictionary.mcp?.popularServers?.highValue?.title || 'High-Value MCP Servers'}
                </h3>
                
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">S</span>
                    </div>
                    <h4 className="text-lg font-semibold text-purple-900 dark:text-purple-300">{dictionary.mcp?.popularServers?.highValue?.slack?.title || 'Slack MCP'}</h4>
                  </div>
                  <p className="text-purple-800 dark:text-purple-200 text-sm mb-3">
                    {dictionary.mcp?.popularServers?.highValue?.slack?.description || 'Slack message automation and team notifications'}
                  </p>
                  <div className="space-y-2">
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                      <code className="text-green-400 font-mono text-xs">
                        {dictionary.mcp?.popularServers?.highValue?.slack?.examples?.deployNotify || 'claude> Send deployment notification to #dev channel'}
                      </code>
                    </div>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                      <code className="text-green-400 font-mono text-xs">
                        {dictionary.mcp?.popularServers?.highValue?.slack?.examples?.shareErrors || 'claude> Share error logs with the team'}
                      </code>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">P</span>
                    </div>
                    <h4 className="text-lg font-semibold text-orange-900 dark:text-orange-300">{dictionary.mcp?.popularServers?.highValue?.postgresql?.title || 'PostgreSQL MCP'}</h4>
                  </div>
                  <p className="text-orange-800 dark:text-orange-200 text-sm mb-3">
                    {dictionary.mcp?.popularServers?.highValue?.postgresql?.description || 'PostgreSQL database analysis and optimization'}
                  </p>
                  <div className="space-y-2">
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                      <code className="text-green-400 font-mono text-xs">
                        {dictionary.mcp?.popularServers?.highValue?.postgresql?.examples?.optimizeQueries || 'claude> Analyze and optimize slow queries'}
                      </code>
                    </div>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                      <code className="text-green-400 font-mono text-xs">
                        {dictionary.mcp?.popularServers?.highValue?.postgresql?.examples?.drawDiagram || 'claude> Generate ERD from database schema'}
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
              <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                <strong>⚡ {dictionary.mcp?.popularServers?.proTip?.title || 'Pro Tip'}:</strong> {dictionary.mcp?.popularServers?.proTip?.description || 'Start with GitHub and Supabase MCP servers.'}
              </p>
            </div>
          </div>
        </section>

        {/* MCP Tutorials */}
        <section className="mb-8 sm:mb-16">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-8">
            {dictionary.mcp?.tutorials?.title || 'MCP Tutorials'}
          </h2>
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">

            {/* Supabase MCP Tutorial */}
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 sm:p-8 flex flex-col h-full">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white">
                  {dictionary.mcp?.tutorials?.supabaseTutorial?.title || 'Supabase MCP Quick Start'}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-6">
                {dictionary.mcp?.tutorials?.supabaseTutorial?.description || 'Connect to Supabase for database operations'}
              </p>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                  <h4 className="font-medium text-green-900 dark:text-green-300 mb-3">
                    1. {dictionary.mcp?.tutorials?.supabaseTutorial?.quickSetup?.title || 'Quick Setup'}
                  </h4>
                  <div className="bg-slate-900 dark:bg-slate-800 rounded p-3 mb-3 overflow-x-auto">
                    <code className="text-green-400 font-mono text-xs block break-all">
                      claude mcp add supabase
                    </code>
                    <code className="text-gray-400 font-mono text-xs block mt-1">
                      -e SUPABASE_ACCESS_TOKEN=your_token
                    </code>
                    <code className="text-blue-400 font-mono text-xs block mt-1">
                      npx -y @supabase/mcp-server-supabase@latest
                    </code>
                  </div>
                  <p className="text-green-800 dark:text-green-200 text-xs leading-relaxed">
                    {dictionary.mcp?.tutorials?.supabaseTutorial?.quickSetup?.description || 'Setup complete! Now you can use natural language to interact with your database.'}
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                  <h4 className="font-medium text-slate-900 dark:text-white mb-3">
                    2. {dictionary.mcp?.tutorials?.supabaseTutorial?.practicalExamples?.title || 'Practical Examples'}
                  </h4>
                  <div className="space-y-3">
                    <div className="border-l-2 border-blue-400 pl-3">
                      <div className="bg-slate-900 dark:bg-slate-800 rounded p-2 mb-1">
                        <code className="text-blue-400 font-mono text-xs">claude{`>`} </code>
                        <code className="text-white font-mono text-xs">{dictionary.mcp?.tutorials?.supabaseTutorial?.practicalExamples?.example1?.command || 'Show all tables in my Supabase database'}</code>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-xs">{dictionary.mcp?.tutorials?.supabaseTutorial?.practicalExamples?.example1?.result || '→ Displays all tables with their schemas'}</p>
                    </div>
                    <div className="border-l-2 border-green-400 pl-3">
                      <div className="bg-slate-900 dark:bg-slate-800 rounded p-2 mb-1">
                        <code className="text-blue-400 font-mono text-xs">claude{`>`} </code>
                        <code className="text-white font-mono text-xs">{dictionary.mcp?.tutorials?.supabaseTutorial?.practicalExamples?.example2?.command || 'Create a new products table'}</code>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-xs">{dictionary.mcp?.tutorials?.supabaseTutorial?.practicalExamples?.example2?.result || '→ Creates table with appropriate columns'}</p>
                    </div>
                    <div className="border-l-2 border-purple-400 pl-3">
                      <div className="bg-slate-900 dark:bg-slate-800 rounded p-2 mb-1">
                        <code className="text-blue-400 font-mono text-xs">claude{`>`} </code>
                        <code className="text-white font-mono text-xs">{dictionary.mcp?.tutorials?.supabaseTutorial?.practicalExamples?.example3?.command || 'Insert sample data into products'}</code>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-xs">{dictionary.mcp?.tutorials?.supabaseTutorial?.practicalExamples?.example3?.result || '→ Automatically generates and inserts test data'}</p>
                    </div>
                    <div className="border-l-2 border-orange-400 pl-3">
                      <div className="bg-slate-900 dark:bg-slate-800 rounded p-2 mb-1">
                        <code className="text-blue-400 font-mono text-xs">claude{`>`} </code>
                        <code className="text-white font-mono text-xs">{dictionary.mcp?.tutorials?.supabaseTutorial?.practicalExamples?.example4?.command || 'Query products over $50'}</code>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-xs">{dictionary.mcp?.tutorials?.supabaseTutorial?.practicalExamples?.example4?.result || '→ Returns filtered results with formatting'}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <p className="text-green-800 dark:text-green-200 text-xs sm:text-sm">
                  <strong>🚀 {dictionary.mcp?.tutorials?.supabaseTutorial?.proTip?.title || 'Pro Tip'}:</strong> {dictionary.mcp?.tutorials?.supabaseTutorial?.proTip?.description || 'Claude Code remembers your database schema and can suggest optimized queries!'}
                </p>
              </div>
            </div>

            {/* Real Workflow Tutorial */}
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 sm:p-8 flex flex-col h-full">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white">
                  {dictionary.mcp?.tutorials?.workflowAutomation?.title || 'Real-World Workflow Automation'}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-6">
                {dictionary.mcp?.tutorials?.workflowAutomation?.description || 'Combine multiple MCP servers for powerful automation'}
              </p>

              <div className="space-y-6 flex-grow">
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-900/20 dark:to-slate-900/20 p-4 rounded-lg border border-gray-200 dark:border-gray-800">
                    <div className="flex items-center">
                      <span className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">1</span>
                      <div className="flex-grow">
                        <h5 className="font-semibold text-gray-900 dark:text-gray-300 mb-2">{dictionary.mcp?.tutorials?.workflowAutomation?.steps?.step1?.title || 'Add GitHub MCP'}</h5>
                        <div className="bg-slate-900 rounded p-3">
                          <code className="text-green-400 font-mono text-sm">claude mcp add github</code>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                    <div className="flex items-center">
                      <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">2</span>
                      <div className="flex-grow">
                        <h5 className="font-semibold text-green-900 dark:text-green-300 mb-2">{dictionary.mcp?.tutorials?.workflowAutomation?.steps?.step2?.title || 'Add Supabase MCP'}</h5>
                        <div className="bg-slate-900 rounded p-3">
                          <code className="text-green-400 font-mono text-sm">claude mcp add supabase</code>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                    <div className="flex items-center">
                      <span className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">3</span>
                      <div className="flex-grow">
                        <h5 className="font-semibold text-purple-900 dark:text-purple-300 mb-2">{dictionary.mcp?.tutorials?.workflowAutomation?.steps?.step3?.title || 'Add Slack MCP'}</h5>
                        <div className="bg-slate-900 rounded p-3">
                          <code className="text-green-400 font-mono text-sm">claude mcp add slack</code>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 sm:p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-3">
                    🎯 {dictionary.mcp?.tutorials?.workflowAutomation?.magicCommand?.title || 'Magic Command'}
                  </h4>
                  <div className="bg-slate-900 dark:bg-slate-800 rounded p-3 mb-3 overflow-x-auto">
                    <div className="flex items-start">
                      <code className="text-blue-400 font-mono text-xs sm:text-sm flex-shrink-0 mr-2">claude{`>`}</code>
                      <code className="text-white font-mono text-xs sm:text-sm break-words">{dictionary.mcp?.tutorials?.workflowAutomation?.magicCommand?.command || 'Analyze GitHub issues from last week, save summary to database, and notify team on Slack'}</code>
                    </div>
                  </div>
                  <div className="text-blue-800 dark:text-blue-200 text-xs sm:text-sm space-y-1">
                    {(dictionary.mcp?.tutorials?.workflowAutomation?.magicCommand?.workflow || []).map((step: string, index: number) => (
                      <p key={index}>{step}</p>
                    ))}
                  </div>
                </div>

                {/* Additional Examples */}
                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                    💡 {dictionary.mcp?.tutorials?.workflowAutomation?.additionalExamples?.title || 'More Examples'}
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <span className="text-blue-500 mr-2">▸</span>
                      <div>
                        <code className="text-sm text-slate-900 dark:text-slate-100 font-medium">
                          {dictionary.mcp?.tutorials?.workflowAutomation?.additionalExamples?.example1?.command || 'Daily standup report'}
                        </code>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                          {dictionary.mcp?.tutorials?.workflowAutomation?.additionalExamples?.example1?.description || 'Automatically generate from commits'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-2">▸</span>
                      <div>
                        <code className="text-sm text-slate-900 dark:text-slate-100 font-medium">
                          {dictionary.mcp?.tutorials?.workflowAutomation?.additionalExamples?.example2?.command || 'User analytics report'}
                        </code>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                          {dictionary.mcp?.tutorials?.workflowAutomation?.additionalExamples?.example2?.description || 'Query database and share insights'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-purple-500 mr-2">▸</span>
                      <div>
                        <code className="text-sm text-slate-900 dark:text-slate-100 font-medium">
                          {dictionary.mcp?.tutorials?.workflowAutomation?.additionalExamples?.example3?.command || 'Bug tracking automation'}
                        </code>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                          {dictionary.mcp?.tutorials?.workflowAutomation?.additionalExamples?.example3?.description || 'From GitHub to database to Slack'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
                <p className="text-purple-800 dark:text-purple-200 text-xs sm:text-sm">
                  <strong>⚡ {dictionary.mcp?.tutorials?.workflowAutomation?.realWorldExample?.title || 'Real Example'}:</strong> {dictionary.mcp?.tutorials?.workflowAutomation?.realWorldExample?.description || 'A startup reduced their daily reporting time from 2 hours to 5 minutes using this workflow!'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started CTA */}
        <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-800 p-4 sm:p-6 lg:p-8">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-6">
            {dictionary.mcp?.practicalUsage?.title || 'Ready to Start?'}
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={`/${locale}/tutorials`}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all text-center"
            >
              {dictionary.mcp?.practicalUsage?.startTutorials || 'Start Tutorial'}
            </a>
            <a 
              href="https://glama.ai/mcp/servers" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-blue-300 dark:border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors text-center"
            >
              {dictionary.mcp?.practicalUsage?.viewMoreServers || 'View More MCP Servers'}
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
