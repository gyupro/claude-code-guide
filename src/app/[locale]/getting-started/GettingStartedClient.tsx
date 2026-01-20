'use client';

import { useState } from 'react';
import NavigationHeader from '@/components/NavigationHeader';
import MobileMenu from '@/components/MobileMenu';
import { useNavigationMenu } from '@/hooks/useNavigationMenu';
import { type Locale } from '@/lib/i18n/config';

function CopyButton({ text, className = "", dictionary }: { text: string; className?: string; dictionary?: any }) {
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
      title={dictionary?.gettingStarted?.copyToClipboard || "Copy to clipboard"}
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

interface GettingStartedClientProps {
  locale: Locale;
  dictionary: any;
}

export default function GettingStartedClient({ locale, dictionary }: GettingStartedClientProps) {
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

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8 sm:pb-12">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-16">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
            {dictionary.gettingStarted.title}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {dictionary.gettingStarted.subtitle}
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-8 sm:mb-12 overflow-x-auto">
          <div className="flex items-center space-x-2 sm:space-x-4 min-w-max px-4">
            <div className="flex items-center">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-medium">1</div>
              <span className="ml-1 sm:ml-2 text-xs sm:text-sm font-medium text-slate-900 dark:text-white whitespace-nowrap">
                {dictionary.gettingStarted.systemRequirements}
              </span>
            </div>
            <div className="w-4 sm:w-8 h-0.5 bg-slate-300 dark:bg-slate-600"></div>
            <div className="flex items-center">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-medium">2</div>
              <span className="ml-1 sm:ml-2 text-xs sm:text-sm font-medium text-slate-900 dark:text-white whitespace-nowrap">
                {dictionary.gettingStarted.installation}
              </span>
            </div>
            <div className="w-4 sm:w-8 h-0.5 bg-slate-300 dark:bg-slate-600"></div>
            <div className="flex items-center">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-medium">3</div>
              <span className="ml-1 sm:ml-2 text-xs sm:text-sm font-medium text-slate-900 dark:text-white whitespace-nowrap">
                {dictionary.gettingStarted.authentication}
              </span>
            </div>
            <div className="w-4 sm:w-8 h-0.5 bg-slate-300 dark:bg-slate-600"></div>
            <div className="flex items-center">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-medium">4</div>
              <span className="ml-1 sm:ml-2 text-xs sm:text-sm font-medium text-slate-900 dark:text-white whitespace-nowrap">
                {dictionary.gettingStarted.firstProject}
              </span>
            </div>
          </div>
        </div>

        {/* Step 1: System Requirements */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 sm:p-6 lg:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 flex items-center">
              <span className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-medium mr-2 sm:mr-3">1</span>
              {dictionary.gettingStarted.systemRequirements}
            </h2>
            
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center p-4 border border-slate-200 dark:border-slate-600 rounded-lg">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  {dictionary.gettingStarted.systemRequirementsDetail.operatingSystem}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">macOS, Linux, Windows (WSL)</p>
              </div>
              
              <div className="text-center p-4 border border-slate-200 dark:border-slate-600 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  {dictionary.gettingStarted.systemRequirementsDetail.requirements}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">Node.js 18+, 4GB RAM</p>
              </div>
              
              <div className="text-center p-4 border border-slate-200 dark:border-slate-600 rounded-lg">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  {dictionary.gettingStarted.systemRequirementsDetail.network}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {dictionary.gettingStarted.systemRequirementsDetail.stableConnection}
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
              <div className="flex">
                <svg className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <div>
                  <p className="text-amber-800 dark:text-amber-200 font-medium">
                    {dictionary.gettingStarted.systemRequirementsDetail.windowsNote}
                  </p>
                  <p className="text-amber-700 dark:text-amber-300 text-sm mt-1">
                    {dictionary.gettingStarted.systemRequirementsDetail.windowsWarning}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 2: Installation */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 sm:p-6 lg:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 flex items-center">
              <span className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-medium mr-2 sm:mr-3">2</span>
              {dictionary.gettingStarted.installation}
            </h2>

            <div className="space-y-4 sm:space-y-6">
              {/* Native Install - Recommended */}
              <div className="border-2 border-green-500 dark:border-green-400 rounded-lg overflow-hidden">
                <div className="bg-green-50 dark:bg-green-900/30 px-4 py-2 flex items-center">
                  <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded mr-2">{dictionary.gettingStarted?.installationDetail?.recommended || 'Recommended'}</span>
                  <span className="font-medium text-green-800 dark:text-green-300">Native Install</span>
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 text-xs mb-1 block">macOS / Linux / WSL</span>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-3 flex items-center justify-between">
                      <code className="text-green-400 font-mono text-xs sm:text-sm">curl -fsSL https://claude.ai/install.sh | bash</code>
                      <CopyButton text="curl -fsSL https://claude.ai/install.sh | bash" dictionary={dictionary} />
                    </div>
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 text-xs mb-1 block">Windows PowerShell</span>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-3 flex items-center justify-between">
                      <code className="text-green-400 font-mono text-xs sm:text-sm">irm https://claude.ai/install.ps1 | iex</code>
                      <CopyButton text="irm https://claude.ai/install.ps1 | iex" dictionary={dictionary} />
                    </div>
                  </div>
                  <p className="text-xs text-green-700 dark:text-green-300 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {dictionary.gettingStarted?.installationDetail?.autoUpdate || 'Auto-updates in background'}
                  </p>
                </div>
              </div>

              {/* Alternative Methods */}
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Homebrew */}
                <div className="border border-slate-200 dark:border-slate-600 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <span className="font-medium text-slate-900 dark:text-white">Homebrew</span>
                    <span className="text-xs text-slate-500 ml-2">(macOS)</span>
                  </div>
                  <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-3 flex items-center justify-between">
                    <code className="text-green-400 font-mono text-xs">brew install --cask claude-code</code>
                    <CopyButton text="brew install --cask claude-code" dictionary={dictionary} />
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                    {dictionary.gettingStarted?.installationDetail?.manualUpdate || 'Run `brew upgrade claude-code` to update'}
                  </p>
                </div>

                {/* WinGet */}
                <div className="border border-slate-200 dark:border-slate-600 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <span className="font-medium text-slate-900 dark:text-white">WinGet</span>
                    <span className="text-xs text-slate-500 ml-2">(Windows)</span>
                  </div>
                  <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-3 flex items-center justify-between">
                    <code className="text-green-400 font-mono text-xs">winget install Anthropic.ClaudeCode</code>
                    <CopyButton text="winget install Anthropic.ClaudeCode" dictionary={dictionary} />
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                    {dictionary.gettingStarted?.installationDetail?.wingetUpdate || 'Run `winget upgrade` to update'}
                  </p>
                </div>
              </div>

              <div className="p-3 sm:p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <div className="flex">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-blue-800 dark:text-blue-200 font-medium text-sm sm:text-base">
                      {dictionary.gettingStarted?.installationDetail?.accountRequired || 'Account Required'}
                    </p>
                    <p className="text-blue-700 dark:text-blue-300 text-xs sm:text-sm mt-1">
                      {dictionary.gettingStarted?.installationDetail?.subscriptionInfo || 'Claude Pro, Max, Teams, Enterprise, or Claude Console account required'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3 sm:p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <div className="flex">
                  <svg className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <div>
                    <p className="text-red-800 dark:text-red-200 font-medium text-sm sm:text-base">
                      {dictionary.gettingStarted?.installationDetail?.npmDeprecated || 'NPM Install Deprecated'}
                    </p>
                    <p className="text-red-700 dark:text-red-300 text-xs sm:text-sm mt-1">
                      {dictionary.gettingStarted?.installationDetail?.npmDeprecatedInfo || 'npm install -g @anthropic-ai/claude-code is no longer supported. Please use Native Install above.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 3: Authentication */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 sm:p-6 lg:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 flex items-center">
              <span className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-medium mr-2 sm:mr-3">3</span>
              {dictionary.gettingStarted.authentication}
            </h2>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 text-sm">
                    {dictionary.gettingStarted.authenticationDetail.startInProject}
                  </span>
                  <CopyButton text="cd my-project && claude" dictionary={dictionary} />
                </div>
                <code className="text-green-400 font-mono text-sm sm:text-base">cd my-project && claude</code>
              </div>

              <div className="grid sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="text-center p-3 sm:p-4 border border-blue-200 dark:border-blue-600 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">1</div>
                  <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Console</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    {dictionary.gettingStarted.authenticationDetail.recommended}
                  </p>
                </div>
                
                <div className="text-center p-3 sm:p-4 border border-purple-200 dark:border-purple-600 rounded-lg">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">2</div>
                  <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Pro/Max</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    {dictionary.gettingStarted.authenticationDetail.subscription}
                  </p>
                </div>
                
                <div className="text-center p-3 sm:p-4 border border-green-200 dark:border-green-600 rounded-lg">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">3</div>
                  <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">
                    {dictionary.gettingStarted.authenticationDetail.enterprise}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">AWS/GCP</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 4: First Project */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 sm:p-6 lg:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 flex items-center">
              <span className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-medium mr-2 sm:mr-3">4</span>
              {dictionary.gettingStarted.firstProject}
            </h2>

            <div className="space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm">
                      {dictionary.gettingStarted.firstProjectDetail.understandingProject}
                    </span>
                    <CopyButton text={locale === 'ko' ? '이 프로젝트에 대해 요약해줘' : 'summarize this project'} dictionary={dictionary} />
                  </div>
                  <code className="text-blue-400 font-mono text-sm">claude{`>`} </code>
                  <code className="text-white font-mono text-sm">
                    {locale === 'ko' ? '이 프로젝트에 대해 요약해줘' : 'summarize this project'}
                  </code>
                </div>

                <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm">
                      {dictionary.gettingStarted.firstProjectDetail.projectInitialization}
                    </span>
                    <CopyButton text="/init" dictionary={dictionary} />
                  </div>
                  <code className="text-blue-400 font-mono text-sm">claude{`>`} </code>
                  <code className="text-white font-mono text-sm">/init</code>
                </div>
              </div>

              <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                  {dictionary.gettingStarted.firstProjectDetail.setupComplete}
                </h3>
                <p className="text-sm text-green-700 dark:text-green-300">
                  {dictionary.gettingStarted.firstProjectDetail.readyToStart}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-800 p-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              {dictionary.gettingStarted.nextSteps.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  {dictionary.gettingStarted.nextSteps.learnBasicUsage}
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• {dictionary.gettingStarted.nextSteps.examples.askCode}</li>
                  <li>• {dictionary.gettingStarted.nextSteps.examples.editFiles}</li>
                  <li>• {dictionary.gettingStarted.nextSteps.examples.runTests}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  {dictionary.gettingStarted.nextSteps.exploreAdvanced}
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• {dictionary.gettingStarted.nextSteps.examples.extendedThinking}</li>
                  <li>• {dictionary.gettingStarted.nextSteps.examples.gitAutomation}</li>
                  <li>• {dictionary.gettingStarted.nextSteps.examples.webSearch}</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href={`/${locale}`} className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center">
                {dictionary.gettingStarted.nextSteps.backToHome}
              </a>
              <a href={`/${locale}/usage-guide`} className="border border-blue-300 dark:border-blue-600 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors text-center">
                {dictionary.navigation.usageGuide}
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}