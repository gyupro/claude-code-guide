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
      title={dictionary.usageGuide.copyToClipboard}
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

interface UsageGuideClientProps {
  locale: Locale;
  dictionary: any;
}

export default function UsageGuideClient({ locale, dictionary }: UsageGuideClientProps) {
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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 sm:pb-12">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-16">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {dictionary.usageGuide.title}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {dictionary.usageGuide.subtitle}
          </p>
        </div>

        {/* Guide Categories */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-16">
          {/* Basic Usage */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white">
                {dictionary.usageGuide.basicCommands}
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              {dictionary.usageGuide.basicCommandsDetail.description}
            </p>
            <div className="space-y-3">
              <div className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <h3 className="text-sm sm:text-base font-medium text-slate-900 dark:text-white mb-1">
                  {dictionary.usageGuide.basicCommandsDetail.items.interactiveSession.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  {dictionary.usageGuide.basicCommandsDetail.items.interactiveSession.description}
                </p>
              </div>
              <div className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <h3 className="text-sm sm:text-base font-medium text-slate-900 dark:text-white mb-1">
                  {dictionary.usageGuide.basicCommandsDetail.items.quickQuestions.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  {dictionary.usageGuide.basicCommandsDetail.items.quickQuestions.description}
                </p>
              </div>
              <div className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <h3 className="text-sm sm:text-base font-medium text-slate-900 dark:text-white mb-1">
                  {dictionary.usageGuide.basicCommandsDetail.items.fileAnalysis.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  {dictionary.usageGuide.basicCommandsDetail.items.fileAnalysis.description}
                </p>
              </div>
            </div>
          </div>

          {/* Core Workflows */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white">
                {dictionary.usageGuide.coreWorkflows}
              </h2>
            </div>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              {dictionary.usageGuide.coreWorkflowsDetail.description}
            </p>
            <div className="space-y-3">
              <div className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <h3 className="font-medium text-slate-900 dark:text-white mb-1">
                  {dictionary.usageGuide.coreWorkflowsDetail.items.projectExploration.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {dictionary.usageGuide.coreWorkflowsDetail.items.projectExploration.description}
                </p>
              </div>
              <div className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <h3 className="font-medium text-slate-900 dark:text-white mb-1">
                  {dictionary.usageGuide.coreWorkflowsDetail.items.smartEditing.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {dictionary.usageGuide.coreWorkflowsDetail.items.smartEditing.description}
                </p>
              </div>
              <div className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <h3 className="font-medium text-slate-900 dark:text-white mb-1">
                  {dictionary.usageGuide.coreWorkflowsDetail.items.gitWorkflow.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {dictionary.usageGuide.coreWorkflowsDetail.items.gitWorkflow.description}
                </p>
              </div>
            </div>
          </div>

          {/* Advanced Features */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white">
                {dictionary.usageGuide.advancedFeatures}
              </h2>
            </div>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              {dictionary.usageGuide.advancedFeaturesDetail.description}
            </p>
            <div className="space-y-3">
              <div className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <h3 className="font-medium text-slate-900 dark:text-white mb-1">
                  {dictionary.usageGuide.advancedFeaturesDetail.items.deepThinking.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {dictionary.usageGuide.advancedFeaturesDetail.items.deepThinking.description}
                </p>
              </div>
              <div className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <h3 className="font-medium text-slate-900 dark:text-white mb-1">
                  {dictionary.usageGuide.advancedFeaturesDetail.items.projectMemory.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {dictionary.usageGuide.advancedFeaturesDetail.items.projectMemory.description}
                </p>
              </div>
              <div className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <h3 className="font-medium text-slate-900 dark:text-white mb-1">
                  {dictionary.usageGuide.advancedFeaturesDetail.items.realtimeSearch.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {dictionary.usageGuide.advancedFeaturesDetail.items.realtimeSearch.description}
                </p>
              </div>
            </div>
          </div>

          {/* CLI Commands */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white">
                {dictionary.usageGuide.cliOptions}
              </h2>
            </div>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              {dictionary.usageGuide.cliOptionsDetail.description}
            </p>
            <div className="space-y-3">
              <div className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <h3 className="font-medium text-slate-900 dark:text-white mb-1">
                  {dictionary.usageGuide.cliOptionsDetail.items.builtinCommands.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {dictionary.usageGuide.cliOptionsDetail.items.builtinCommands.description}
                </p>
              </div>
              <div className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <h3 className="font-medium text-slate-900 dark:text-white mb-1">
                  {dictionary.usageGuide.cliOptionsDetail.items.executionOptions.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {dictionary.usageGuide.cliOptionsDetail.items.executionOptions.description}
                </p>
              </div>
              <div className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <h3 className="font-medium text-slate-900 dark:text-white mb-1">
                  {dictionary.usageGuide.cliOptionsDetail.items.environmentSetup.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {dictionary.usageGuide.cliOptionsDetail.items.environmentSetup.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Examples */}
        <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-800 p-4 sm:p-6 lg:p-8 mb-8 sm:mb-12">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            {dictionary.usageGuide.quickExamples.title}
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-4">
                {dictionary.usageGuide.quickExamples.projectAnalysis}
              </h3>
              <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 text-sm">
                    {dictionary.usageGuide.quickExamples.labels.projectUnderstanding}
                  </span>
                  <CopyButton 
                    text={locale === 'ko' ? '이 프로젝트의 전체 구조를 분석해줘' : 'analyze the overall structure of this project'} 
                    dictionary={dictionary} 
                  />
                </div>
                <code className="text-blue-400 font-mono text-sm">claude{`>`} </code>
                <code className="text-white font-mono text-sm">
                  {locale === 'ko' ? '이 프로젝트의 전체 구조를 분석해줘' : 'analyze the overall structure of this project'}
                </code>
              </div>
              <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 text-sm">
                    {dictionary.usageGuide.quickExamples.labels.apiDocumentation}
                  </span>
                  <CopyButton 
                    text={locale === 'ko' ? 'API 엔드포인트를 문서화해줘' : 'document the API endpoints'} 
                    dictionary={dictionary} 
                  />
                </div>
                <code className="text-blue-400 font-mono text-sm">claude{`>`} </code>
                <code className="text-white font-mono text-sm">
                  {locale === 'ko' ? 'API 엔드포인트를 문서화해줘' : 'document the API endpoints'}
                </code>
              </div>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-4">
                {dictionary.usageGuide.quickExamples.developmentWork}
              </h3>
              <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 text-sm">
                    {dictionary.usageGuide.quickExamples.labels.featureAddition}
                  </span>
                  <CopyButton 
                    text={locale === 'ko' ? '사용자 프로필 편집 기능을 추가해줘' : 'add user profile editing functionality'} 
                    dictionary={dictionary} 
                  />
                </div>
                <code className="text-blue-400 font-mono text-sm">claude{`>`} </code>
                <code className="text-white font-mono text-sm">
                  {locale === 'ko' ? '사용자 프로필 편집 기능을 추가해줘' : 'add user profile editing functionality'}
                </code>
              </div>
              <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 text-sm">
                    {dictionary.usageGuide.quickExamples.labels.testAutomation}
                  </span>
                  <CopyButton 
                    text={locale === 'ko' ? '모든 테스트를 실행하고 실패 원인을 분석해줘' : 'run all tests and analyze failure causes'} 
                    dictionary={dictionary} 
                  />
                </div>
                <code className="text-blue-400 font-mono text-sm">claude{`>`} </code>
                <code className="text-white font-mono text-sm">
                  {locale === 'ko' ? '모든 테스트를 실행하고 실패 원인을 분석해줘' : 'run all tests and analyze failure causes'}
                </code>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 sm:p-6 lg:p-8">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-6">
            {dictionary.usageGuide.bestPractices.title}
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="p-3 sm:p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <h3 className="text-sm sm:text-base font-semibold text-green-800 dark:text-green-200 mb-2">
                {dictionary.usageGuide.bestPractices.items.specificInstructions.title}
              </h3>
              <p className="text-green-700 dark:text-green-300 text-xs sm:text-sm leading-relaxed">
                {dictionary.usageGuide.bestPractices.items.specificInstructions.description}
              </p>
            </div>
            <div className="p-3 sm:p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <h3 className="text-sm sm:text-base font-semibold text-blue-800 dark:text-blue-200 mb-2">
                {dictionary.usageGuide.bestPractices.items.incrementalDevelopment.title}
              </h3>
              <p className="text-blue-700 dark:text-blue-300 text-xs sm:text-sm leading-relaxed">
                {dictionary.usageGuide.bestPractices.items.incrementalDevelopment.description}
              </p>
            </div>
            <div className="p-3 sm:p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
              <h3 className="text-sm sm:text-base font-semibold text-purple-800 dark:text-purple-200 mb-2">
                {dictionary.usageGuide.bestPractices.items.projectMemoryTip.title}
              </h3>
              <p className="text-purple-700 dark:text-purple-300 text-xs sm:text-sm leading-relaxed">
                {dictionary.usageGuide.bestPractices.items.projectMemoryTip.description}
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}