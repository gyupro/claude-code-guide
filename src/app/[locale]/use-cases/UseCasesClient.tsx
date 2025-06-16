'use client';

import NavigationHeader from '@/components/NavigationHeader';
import MobileMenu from '@/components/MobileMenu';
import { useNavigationMenu } from '@/hooks/useNavigationMenu';
import { type Locale } from '@/lib/i18n/config';

interface UseCasesClientProps {
  locale: Locale;
  dictionary: any;
}

export default function UseCasesClient({ locale, dictionary }: UseCasesClientProps) {
  const { mobileMenu, helpers } = useNavigationMenu();

  // 디버깅
  if (!dictionary) {
    return <div>Error: Dictionary is null</div>;
  }

  if (!dictionary.navigation) {
    return <div>Error: dictionary.navigation is undefined</div>;
  }

  if (!dictionary.useCases) {
    return <div>Error: dictionary.useCases is undefined</div>;
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

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 sm:pb-12">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-16">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {dictionary.useCases.heroTitle}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            {dictionary.useCases.heroSubtitle}
          </p>
        </div>

        {/* Teams Grid */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-16">
          
          {/* Backend Team */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white">
                {dictionary.useCases.teams.backend.title}
              </h2>
            </div>
            
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              {dictionary.useCases.teams.backend.description}
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {dictionary.useCases.teams.backend.achievements.title}
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>{dictionary.useCases.teams.backend.achievements.sql}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>{dictionary.useCases.teams.backend.achievements.api}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>{dictionary.useCases.teams.backend.achievements.logs}</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                  {dictionary.useCases.roles?.common?.keyTip || 'Key Tip'}
                </h4>
                <p className="text-blue-700 dark:text-blue-300 text-sm">
                  {dictionary.useCases.teams.backend.tip}
                </p>
              </div>
            </div>
          </div>

          {/* Frontend Team */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                {dictionary.useCases.teams.frontend.title}
              </h2>
            </div>
            
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              {dictionary.useCases.teams.frontend.description}
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {dictionary.useCases.teams.frontend.achievements.title}
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>{dictionary.useCases.teams.frontend.achievements.design}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>{dictionary.useCases.teams.frontend.achievements.responsive}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>{dictionary.useCases.teams.frontend.achievements.components}</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                  {dictionary.useCases.roles?.common?.keyTip || 'Key Tip'}
                </h4>
                <p className="text-green-700 dark:text-green-300 text-sm">
                  {dictionary.useCases.teams.frontend.tip}
                </p>
              </div>
            </div>
          </div>

          {/* DevOps Team */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                {dictionary.useCases.teams.devops.title}
              </h2>
            </div>
            
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              {dictionary.useCases.teams.devops.description}
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {dictionary.useCases.teams.devops.achievements.title}
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>{dictionary.useCases.teams.devops.achievements.kubernetes}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>{dictionary.useCases.teams.devops.achievements.monitoring}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>{dictionary.useCases.teams.devops.achievements.security}</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg">
                <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">
                  {dictionary.useCases.roles?.common?.keyTip || 'Key Tip'}
                </h4>
                <p className="text-orange-700 dark:text-orange-300 text-sm">
                  {dictionary.useCases.teams.devops.tip}
                </p>
              </div>
            </div>
          </div>

          {/* Data Team */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                {dictionary.useCases.teams.data.title}
              </h2>
            </div>
            
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              {dictionary.useCases.teams.data.description}
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {dictionary.useCases.teams.data.achievements.title}
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>{dictionary.useCases.teams.data.achievements.pipeline}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>{dictionary.useCases.teams.data.achievements.visualization}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>{dictionary.useCases.teams.data.achievements.reports}</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
                <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                  {dictionary.useCases.roles?.common?.keyTip || 'Key Tip'}
                </h4>
                <p className="text-purple-700 dark:text-purple-300 text-sm">
                  {dictionary.useCases.teams.data.tip}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* More Teams Section */}
        <section className="mb-8 sm:mb-16">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-6 sm:mb-8 text-center">
            {dictionary.useCases.roles.title}
          </h2>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* QA Team */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-4">
                {dictionary.useCases.roles.qa.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mb-4 leading-relaxed">
                {dictionary.useCases.roles.qa.description}
              </p>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                <strong>{dictionary.useCases.roles?.common?.keyAchievement || 'Key Achievement'}:</strong> {dictionary.useCases.roles.qa.achievement}
              </div>
            </div>

            {/* Technical Documentation Team */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 sm:p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                {dictionary.useCases.roles.documentation.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                {dictionary.useCases.roles.documentation.description}
              </p>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                <strong>{dictionary.useCases.roles?.common?.keyAchievement || 'Key Achievement'}:</strong> {dictionary.useCases.roles.documentation.achievement}
              </div>
            </div>

            {/* Startup Team */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 sm:p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                {dictionary.useCases.roles.startup.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                {dictionary.useCases.roles.startup.description}
              </p>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                <strong>{dictionary.useCases.roles?.common?.keyAchievement || 'Key Achievement'}:</strong> {dictionary.useCases.roles.startup.achievement}
              </div>
            </div>

            {/* UX Design Team */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 sm:p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                {dictionary.useCases.roles.ux.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                {dictionary.useCases.roles.ux.description}
              </p>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                <strong>{dictionary.useCases.roles?.common?.keyAchievement || 'Key Achievement'}:</strong> {dictionary.useCases.roles.ux.achievement}
              </div>
            </div>

            {/* Individual Developer */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 sm:p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                {dictionary.useCases.roles.individual.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                {dictionary.useCases.roles.individual.description}
              </p>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                <strong>{dictionary.useCases.roles?.common?.keyAchievement || 'Key Achievement'}:</strong> {dictionary.useCases.roles.individual.achievement}
              </div>
            </div>

            {/* Educational Institution */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 sm:p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                {dictionary.useCases.roles.education.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                {dictionary.useCases.roles.education.description}
              </p>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                <strong>{dictionary.useCases.roles?.common?.keyAchievement || 'Key Achievement'}:</strong> {dictionary.useCases.roles.education.achievement}
              </div>
            </div>
          </div>
        </section>

        {/* Key Insights Section */}
        <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-800 p-4 sm:p-6 lg:p-8">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            {dictionary.useCases.strategies.title}
          </h2>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-4">
                🚀 {dictionary.useCases.strategies.productivity.title}
              </h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">1</span>
                  <span><strong>{dictionary.useCases.strategies.productivity.goals.split(':')[0]}:</strong> {dictionary.useCases.strategies.productivity.goals.split(':')[1]}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">2</span>
                  <span><strong>{dictionary.useCases.strategies.productivity.progress.split(':')[0]}:</strong> {dictionary.useCases.strategies.productivity.progress.split(':')[1]}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">3</span>
                  <span><strong>{dictionary.useCases.strategies.productivity.feedback.split(':')[0]}:</strong> {dictionary.useCases.strategies.productivity.feedback.split(':')[1]}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">4</span>
                  <span><strong>{dictionary.useCases.strategies.productivity.documentation.split(':')[0]}:</strong> {dictionary.useCases.strategies.productivity.documentation.split(':')[1]}</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-4">
                💡 {dictionary.useCases.strategies.teamStrategies.title}
              </h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>{dictionary.useCases.strategies.teamStrategies.development.split(':')[0]}:</strong> {dictionary.useCases.strategies.teamStrategies.development.split(':')[1]}</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>{dictionary.useCases.strategies.teamStrategies.design.split(':')[0]}:</strong> {dictionary.useCases.strategies.teamStrategies.design.split(':')[1]}</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>{dictionary.useCases.strategies.teamStrategies.data.split(':')[0]}:</strong> {dictionary.useCases.strategies.teamStrategies.data.split(':')[1]}</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>{dictionary.useCases.strategies.teamStrategies.qa.split(':')[0]}:</strong> {dictionary.useCases.strategies.teamStrategies.qa.split(':')[1]}</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>{dictionary.useCases.strategies.teamStrategies.individual.split(':')[0]}:</strong> {dictionary.useCases.strategies.teamStrategies.individual.split(':')[1]}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mt-8 sm:mt-16">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 sm:p-6 lg:p-8">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-4">
              {dictionary.useCases.cta.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto leading-relaxed">
              {dictionary.useCases.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`/${locale}/getting-started`} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all">
                {dictionary.useCases.cta.getStarted}
              </a>
              <a href={`/${locale}/usage-guide`} className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 px-8 py-3 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                {dictionary.useCases.cta.usageGuide}
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}