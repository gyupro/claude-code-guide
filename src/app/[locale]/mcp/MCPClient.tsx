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
      console.error(dictionary?.common?.copyError || 'Copy failed:', err);
    }
  };

  return (
    <button
      onClick={copyToClipboard}
      className={`text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors ${className}`}
      title={dictionary.mcp.copyToClipboard || dictionary.usageGuide.copyToClipboard}
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
            {dictionary.mcp.heroTitle}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {dictionary.mcp.heroSubtitle}
          </p>
        </div>

        {/* What is MCP */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 sm:p-6 lg:p-8">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-6">
              {dictionary.mcp.whatIsMcp.title}
            </h2>
            
            <div className="space-y-6">
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {dictionary.mcp.whatIsMcp.description}
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 sm:p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="text-base sm:text-lg font-semibold text-blue-900 dark:text-blue-300 mb-3">
                  🚀 {dictionary.mcp.whatIsMcp.possibleTitle}
                </h3>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-blue-800 dark:text-blue-200">
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {dictionary.mcp.whatIsMcp.features.supabase}
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {dictionary.mcp.whatIsMcp.features.github}
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {dictionary.mcp.whatIsMcp.features.slack}
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {dictionary.mcp.whatIsMcp.features.filesystem}
                    </li>
                  </ul>
                  <ul className="space-y-2 text-blue-800 dark:text-blue-200">
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {dictionary.mcp.whatIsMcp.features.postgresql}
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {dictionary.mcp.whatIsMcp.features.notion}
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {dictionary.mcp.whatIsMcp.features.browser}
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {dictionary.mcp.whatIsMcp.features.monitoring}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 dark:bg-amber-900/20 p-3 sm:p-4 rounded-lg border border-amber-200 dark:border-amber-800">
                <p className="text-amber-800 dark:text-amber-200 text-xs sm:text-sm">
                  <strong>💡 {dictionary.mcp.whatIsMcp.example.title}:</strong> {dictionary.mcp.whatIsMcp.example.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Popular MCP Servers */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 sm:p-6 lg:p-8">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-6">
              {dictionary.mcp.popularServers.title}
            </h2>
            
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              {dictionary.mcp.popularServers.subtitle}
            </p>

            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              
              {/* Top Tier - Most Popular */}
              <div className="space-y-6">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4">
                  🔥 {dictionary.mcp.popularServers.essential.title}
                </h3>
                
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">S</span>
                    </div>
                    <h4 className="text-lg font-semibold text-green-900 dark:text-green-300">{dictionary.mcp.popularServers.essential.supabase.title}</h4>
                  </div>
                  <p className="text-green-800 dark:text-green-200 text-sm mb-3">
                    {dictionary.mcp.popularServers.essential.supabase.description}
                  </p>
                  <div className="space-y-2">
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                      <code className="text-green-400 font-mono text-xs">
                        {dictionary.mcp.popularServers.essential.supabase.examples.createTable}
                      </code>
                    </div>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                      <code className="text-green-400 font-mono text-xs">
                        {dictionary.mcp.popularServers.essential.supabase.examples.queryUsers}
                      </code>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-900/20 dark:to-slate-900/20 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">G</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-300">{dictionary.mcp.popularServers.essential.github.title}</h4>
                  </div>
                  <p className="text-gray-800 dark:text-gray-200 text-sm mb-3">
                    {dictionary.mcp.popularServers.essential.github.description}
                  </p>
                  <div className="space-y-2">
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                      <code className="text-green-400 font-mono text-xs">
                        {dictionary.mcp.popularServers.essential.github.examples.issueToPr}
                      </code>
                    </div>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                      <code className="text-green-400 font-mono text-xs">
                        {dictionary.mcp.popularServers.essential.github.examples.releaseNotes}
                      </code>
                    </div>
                  </div>
                </div>
              </div>

              {/* High Value MCP Servers */}
              <div className="space-y-6">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4">
                  💎 {dictionary.mcp.popularServers.highValue.title}
                </h3>
                
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">S</span>
                    </div>
                    <h4 className="text-lg font-semibold text-purple-900 dark:text-purple-300">{dictionary.mcp.popularServers.highValue.slack.title}</h4>
                  </div>
                  <p className="text-purple-800 dark:text-purple-200 text-sm mb-3">
                    {dictionary.mcp.popularServers.highValue.slack.description}
                  </p>
                  <div className="space-y-2">
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                      <code className="text-green-400 font-mono text-xs">
                        {dictionary.mcp.popularServers.highValue.slack.examples.deployNotify}
                      </code>
                    </div>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                      <code className="text-green-400 font-mono text-xs">
                        {dictionary.mcp.popularServers.highValue.slack.examples.shareErrors}
                      </code>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">P</span>
                    </div>
                    <h4 className="text-lg font-semibold text-orange-900 dark:text-orange-300">{dictionary.mcp.popularServers.highValue.postgresql.title}</h4>
                  </div>
                  <p className="text-orange-800 dark:text-orange-200 text-sm mb-3">
                    {dictionary.mcp.popularServers.highValue.postgresql.description}
                  </p>
                  <div className="space-y-2">
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                      <code className="text-green-400 font-mono text-xs">
                        {dictionary.mcp.popularServers.highValue.postgresql.examples.optimizeQueries}
                      </code>
                    </div>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                      <code className="text-green-400 font-mono text-xs">
                        {dictionary.mcp.popularServers.highValue.postgresql.examples.drawDiagram}
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
              <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                <strong>⚡ {dictionary.mcp.popularServers.proTip.title}:</strong> {dictionary.mcp.popularServers.proTip.description}
              </p>
            </div>
          </div>
        </section>

        {/* Getting Started CTA */}
        <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-800 p-4 sm:p-6 lg:p-8">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-6">
            {dictionary.mcp.practicalUsage.title}
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={`/${locale}/tutorials`}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all text-center"
            >
              {dictionary.mcp.practicalUsage.startTutorials}
            </a>
            <a 
              href="https://github.com/punkpeye/awesome-mcp-servers" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-blue-300 dark:border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors text-center"
            >
              {dictionary.mcp.practicalUsage.viewMoreServers}
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}