'use client';

import NavigationHeader from '@/components/NavigationHeader';
import MobileMenu from '@/components/MobileMenu';
import { useNavigationMenu } from '@/hooks/useNavigationMenu';
import { type Locale } from '@/lib/i18n/config';

interface TutorialsClientProps {
  locale: Locale;
  dictionary: any;
}

export default function TutorialsClient({ locale, dictionary }: TutorialsClientProps) {
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

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8 sm:pb-12">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-16">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {dictionary.tutorials.title}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            {dictionary.tutorials.subtitle}
          </p>
        </div>

        {/* Quick Start Tutorials */}
        <section className="mb-8 sm:mb-16">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-6 sm:mb-8">
            {dictionary.tutorials.quickStart}
          </h2>
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Resume Conversations */}
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  {dictionary.tutorials.quickStartTutorials.resumeConversations.title}
                </h3>
              </div>
              
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                {dictionary.tutorials.quickStartTutorials.resumeConversations.description}
              </p>

              <div className="space-y-4">
                <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                  <h4 className="text-sm sm:text-base font-medium text-slate-900 dark:text-white mb-2">
                    {dictionary.tutorials.quickStartTutorials.resumeConversations.continueLatest}
                  </h4>
                  <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                    <code className="text-green-400 font-mono text-sm">claude --continue</code>
                  </div>
                </div>
                
                <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                  <h4 className="text-sm sm:text-base font-medium text-slate-900 dark:text-white mb-2">
                    {dictionary.tutorials.quickStartTutorials.resumeConversations.useSelector}
                  </h4>
                  <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                    <code className="text-green-400 font-mono text-sm">claude --resume</code>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-3 sm:p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <p className="text-blue-800 dark:text-blue-200 text-xs sm:text-sm">
                  <strong>💡 {dictionary.tutorials.common.tip}:</strong> {dictionary.tutorials.quickStartTutorials.resumeConversations.tip}
                </p>
              </div>
            </div>

            {/* Understanding Codebases */}
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  {dictionary.tutorials.quickStartTutorials.understandingCodebases.title}
                </h3>
              </div>
              
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                {dictionary.tutorials.quickStartTutorials.understandingCodebases.description}
              </p>

              <div className="space-y-4">
                <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                  <h4 className="font-medium text-slate-900 dark:text-white mb-2">
                    {dictionary.tutorials.quickStartTutorials.understandingCodebases.getOverview}
                  </h4>
                  <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                    <code className="text-green-400 font-mono text-sm">give me an overview of this codebase</code>
                  </div>
                </div>
                
                <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                  <h4 className="font-medium text-slate-900 dark:text-white mb-2">
                    {dictionary.tutorials.quickStartTutorials.understandingCodebases.findFeatures}
                  </h4>
                  <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                    <code className="text-green-400 font-mono text-sm">find the files that handle user authentication</code>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <p className="text-green-800 dark:text-green-200 text-sm">
                  <strong>⚡ {dictionary.tutorials.common.tip}:</strong> {dictionary.tutorials.quickStartTutorials.understandingCodebases.tip}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Workflow Tutorials */}
        <section className="mb-8 sm:mb-16">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-6 sm:mb-8">
            {dictionary.tutorials.coreWorkflows.title}
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            
            {/* Bug Fixing */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 sm:p-6">
              <div className="w-10 h-10 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-3">
                {dictionary.tutorials.coreWorkflows.bugFixing.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mb-4 leading-relaxed">
                {dictionary.tutorials.coreWorkflows.bugFixing.description}
              </p>
              <div className="space-y-2">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  <code>I'm seeing an error when I run npm test</code>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  <code>suggest a few ways to fix the @ts-ignore</code>
                </div>
              </div>
            </div>

            {/* Code Refactoring */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 sm:p-6">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                {dictionary.tutorials.coreWorkflows.codeRefactoring.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                {dictionary.tutorials.coreWorkflows.codeRefactoring.description}
              </p>
              <div className="space-y-2">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  <code>find deprecated API usage in our codebase</code>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  <code>refactor utils.js to use ES2024 features</code>
                </div>
              </div>
            </div>

            {/* Testing */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 sm:p-6">
              <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                {dictionary.tutorials.coreWorkflows.testing.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                {dictionary.tutorials.coreWorkflows.testing.description}
              </p>
              <div className="space-y-2">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  <code>add tests for the notification service</code>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  <code>explain why this test is failing</code>
                </div>
              </div>
            </div>

            {/* PR Creation */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 sm:p-6">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                {dictionary.tutorials.coreWorkflows.prCreation.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                {dictionary.tutorials.coreWorkflows.prCreation.description}
              </p>
              <div className="space-y-2">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  <code>create a pr</code>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  <code>enhance the PR description with more context</code>
                </div>
              </div>
            </div>

            {/* Documentation */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 sm:p-6">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                {dictionary.tutorials.coreWorkflows.documentation.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                {dictionary.tutorials.coreWorkflows.documentation.description}
              </p>
              <div className="space-y-2">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  <code>add JSDoc comments to auth.js</code>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  <code>update the README with latest changes</code>
                </div>
              </div>
            </div>

            {/* Images */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 sm:p-6">
              <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                {dictionary.tutorials.coreWorkflows.imageWork.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                {dictionary.tutorials.coreWorkflows.imageWork.description}
              </p>
              <div className="space-y-2">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {dictionary.tutorials.coreWorkflows.imageWork.dragDrop}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  <code>Generate CSS to match this design mockup</code>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started CTA */}
        <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-800 p-4 sm:p-6 lg:p-8 text-center">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-4">
            {dictionary.tutorials.startNow.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto leading-relaxed">
            {dictionary.tutorials.startNow.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`/${locale}/getting-started`} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all">
              {dictionary.tutorials.startNow.installButton}
            </a>
            <a href={`/${locale}/usage-guide`} className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 px-8 py-3 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              {dictionary.tutorials.startNow.learnButton}
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}