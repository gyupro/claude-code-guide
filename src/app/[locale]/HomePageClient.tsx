'use client';

import NavigationHeader from '@/components/NavigationHeader';
import MobileMenu from '@/components/MobileMenu';
import { useNavigationMenu } from '@/hooks/useNavigationMenu';
import { type Locale } from '@/lib/i18n/config';
import { type Dictionary } from '@/lib/i18n/dictionaries';

interface HomePageClientProps {
  locale: Locale;
  dictionary: Dictionary;
}

export default function HomePageClient({ locale, dictionary }: HomePageClientProps) {
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

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900">
          <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-700/25 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-20 pb-12 sm:pb-16 lg:pb-24">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left order-2 lg:order-1">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4 lg:mb-6 leading-tight">
                  {(dictionary.home as any).title}
                </h1>
                <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-slate-600 dark:text-slate-300 mb-6 sm:mb-8 lg:mb-12 leading-relaxed">
                  {(dictionary.home as any).subtitle}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 lg:justify-start justify-center">
                  <a 
                    href={`/${locale}/getting-started`}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-lg font-medium text-sm sm:text-base lg:text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-0.5 touch-manipulation"
                  >
                    {(dictionary.home as any).getStarted}
                  </a>
                  <a 
                    href={`/${locale}/usage-guide`}
                    className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 px-5 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-lg font-medium text-sm sm:text-base lg:text-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors touch-manipulation"
                  >
                    {(dictionary.home as any).learnMore}
                  </a>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative order-1 lg:order-2">
                <div className="relative max-w-sm sm:max-w-md lg:max-w-none mx-auto">
                  <img 
                    src="/banner.png" 
                    alt={(dictionary.common as any).bannerAlt}
                    className="w-full h-auto rounded-lg sm:rounded-xl shadow-xl lg:shadow-2xl"
                  />
                  <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-tr from-blue-600/10 via-purple-600/5 to-cyan-600/10"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-white dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
                {(dictionary.home as any).features.title}
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                {(dictionary.home as any).features.subtitle}
              </p>
            </div>
            
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
              <div className="text-center p-4 sm:p-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
                  {(dictionary.home as any).features.aiPowered.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {(dictionary.home as any).features.aiPowered.description}
                </p>
              </div>

              <div className="text-center p-4 sm:p-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
                  {(dictionary.home as any).features.terminalIntegration.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {(dictionary.home as any).features.terminalIntegration.description}
                </p>
              </div>

              <div className="text-center p-4 sm:p-6 md:col-span-1 md:mx-auto md:max-w-sm lg:max-w-none lg:mx-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
                  {(dictionary.home as any).features.multilingual.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {(dictionary.home as any).features.multilingual.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Start Guide */}
        <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
                {(dictionary.home as any).quickStart.title}
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                {(dictionary.home as any).quickStart.subtitle}
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-4xl w-full">
                <div className="relative">
                  <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs sm:text-sm">
                    1
                  </div>
                  <div className="bg-white dark:bg-slate-800 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg border border-slate-200 dark:border-slate-700 h-full">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">
                      {(dictionary.home as any).quickStart.installation.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-3 sm:mb-4 leading-relaxed">
                      {(dictionary.home as any).quickStart.installation.description}
                    </p>
                    <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-3 font-mono text-xs sm:text-sm overflow-x-auto">
                      <code className="whitespace-nowrap">npm install -g @anthropic-ai/claude-code</code>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-7 h-7 sm:w-8 sm:h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xs sm:text-sm">
                    2
                  </div>
                  <div className="bg-white dark:bg-slate-800 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg border border-slate-200 dark:border-slate-700 h-full">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">
                      {(dictionary.home as any).quickStart.startCoding.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-3 sm:mb-4 leading-relaxed">
                      {(dictionary.home as any).quickStart.startCoding.description}
                    </p>
                    <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-3 font-mono text-xs sm:text-sm">
                      <code>claude</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-white dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
                {(dictionary.home as any).useCases.title}
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                {(dictionary.home as any).useCases.subtitle}
              </p>
            </div>
            
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    {(dictionary.home as any).useCases.codeReview.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-4 sm:mb-6 leading-relaxed">
                  {(dictionary.home as any).useCases.codeReview.description}
                </p>
                <a href={`/${locale}/use-cases`} className="text-blue-600 dark:text-blue-400 font-medium hover:underline text-sm sm:text-base touch-manipulation">
                  {(dictionary.home as any).useCases.codeReview.linkText}
                </a>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-slate-700 dark:to-slate-600 rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-lg flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    {(dictionary.home as any).useCases.testGeneration.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-4 sm:mb-6 leading-relaxed">
                  {(dictionary.home as any).useCases.testGeneration.description}
                </p>
                <a href={`/${locale}/tutorials`} className="text-green-600 dark:text-green-400 font-medium hover:underline text-sm sm:text-base touch-manipulation">
                  {(dictionary.home as any).useCases.testGeneration.linkText}
                </a>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-slate-700 dark:to-slate-600 rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    {(dictionary.home as any).useCases.documentation.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-4 sm:mb-6 leading-relaxed">
                  {(dictionary.home as any).useCases.documentation.description}
                </p>
                <a href={`/${locale}/tips`} className="text-orange-600 dark:text-orange-400 font-medium hover:underline text-sm sm:text-base touch-manipulation">
                  {(dictionary.home as any).useCases.documentation.linkText}
                </a>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-700 dark:to-slate-600 rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    {(dictionary.home as any).useCases.debugging.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-4 sm:mb-6 leading-relaxed">
                  {(dictionary.home as any).useCases.debugging.description}
                </p>
                <a href={`/${locale}/getting-started`} className="text-purple-600 dark:text-purple-400 font-medium hover:underline text-sm sm:text-base touch-manipulation">
                  {(dictionary.home as any).useCases.debugging.linkText}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}