'use client';

import NavigationHeader from '@/components/NavigationHeader';
import MobileMenu from '@/components/MobileMenu';
import { useNavigationMenu } from '@/hooks/useNavigationMenu';
import { type Locale } from '@/lib/i18n/config';

interface WebAppClientProps {
  locale: Locale;
  dictionary: any;
}

export default function WebAppClient({ locale, dictionary }: WebAppClientProps) {
  const { mobileMenu, helpers } = useNavigationMenu();

  const d = dictionary.webApp || {};

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
          <div className="inline-flex items-center px-4 py-1.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            claude.ai/code
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {d.title || 'Web App'}
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            {d.subtitle || 'Use Claude Code directly in your browser with zero installation'}
          </p>
        </div>

        {/* Overview */}
        <section className="mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              {d.overview?.title || 'Overview'}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {d.overview?.description ||
                'Claude Code on the Web brings the full power of Claude Code to your browser. No installation required. Perfect for quick tasks, remote machines, or environments where local installation isn\'t possible.'}
            </p>
          </div>
        </section>

        {/* Platform Comparison */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
            {locale === 'ko' ? 'Web vs CLI vs Desktop' : 'Web vs CLI vs Desktop'}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-700/50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900 dark:text-white">
                    {locale === 'ko' ? '기능' : 'Feature'}
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600 dark:text-blue-400">
                    <div className="flex items-center justify-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      Web App
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-600 dark:text-slate-300">
                    <div className="flex items-center justify-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      CLI
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-600 dark:text-slate-300">
                    <div className="flex items-center justify-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Desktop
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                {(locale === 'ko' ? [
                  { feature: '설치 필요', web: '없음', cli: 'CLI 설치', desktop: '앱 설치' },
                  { feature: '로컬 파일 접근', web: '클라우드만', cli: '전체', desktop: '전체' },
                  { feature: '성능', web: '네트워크 의존', cli: '최고', desktop: '우수' },
                  { feature: 'Git 통합', web: '원격 저장소', cli: '전체', desktop: '전체' },
                  { feature: '협업', web: '세션 공유', cli: '제한적', desktop: '제한적' },
                  { feature: '오프라인 사용', web: '불가', cli: '가능', desktop: '가능' },
                  { feature: '최적 사용 환경', web: '빠른 작업, 원격', cli: '파워 유저', desktop: 'GUI 선호' },
                ] : [
                  { feature: 'Installation', web: 'None', cli: 'CLI install', desktop: 'App install' },
                  { feature: 'Local file access', web: 'Cloud only', cli: 'Full', desktop: 'Full' },
                  { feature: 'Performance', web: 'Network-dependent', cli: 'Best', desktop: 'Excellent' },
                  { feature: 'Git integration', web: 'Remote repos', cli: 'Full', desktop: 'Full' },
                  { feature: 'Collaboration', web: 'Session sharing', cli: 'Limited', desktop: 'Limited' },
                  { feature: 'Offline use', web: 'No', cli: 'Yes', desktop: 'Yes' },
                  { feature: 'Best for', web: 'Quick tasks, remote', cli: 'Power users', desktop: 'GUI preference' },
                ]).map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                    <td className="px-6 py-3 text-sm font-medium text-slate-900 dark:text-white">{row.feature}</td>
                    <td className="px-6 py-3 text-sm text-center text-slate-600 dark:text-slate-300">{row.web}</td>
                    <td className="px-6 py-3 text-sm text-center text-slate-600 dark:text-slate-300">{row.cli}</td>
                    <td className="px-6 py-3 text-sm text-center text-slate-600 dark:text-slate-300">{row.desktop}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
            {d.features?.title || 'Key Features'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: d.features?.noInstall || 'Zero Installation',
                desc: d.features?.noInstallDesc || 'Access Claude Code from any browser without installing anything',
                icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
                bgColor: 'bg-blue-100 dark:bg-blue-900',
                iconColor: 'text-blue-600 dark:text-blue-400',
              },
              {
                title: d.features?.cloudWorkspaces || 'Cloud Workspaces',
                desc: d.features?.cloudWorkspacesDesc || 'Create and manage workspaces in the cloud with persistent storage',
                icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
                bgColor: 'bg-green-100 dark:bg-green-900',
                iconColor: 'text-green-600 dark:text-green-400',
              },
              {
                title: d.features?.collaboration || 'Real-time Collaboration',
                desc: d.features?.collaborationDesc || 'Share sessions with teammates for pair programming with AI',
                icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
                bgColor: 'bg-purple-100 dark:bg-purple-900',
                iconColor: 'text-purple-600 dark:text-purple-400',
              },
              {
                title: d.features?.gitIntegration || 'Git Integration',
                desc: d.features?.gitIntegrationDesc || 'Connect to GitHub, GitLab, or Bitbucket repositories directly',
                icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
                bgColor: 'bg-orange-100 dark:bg-orange-900',
                iconColor: 'text-orange-600 dark:text-orange-400',
              },
              {
                title: d.features?.terminalAccess || 'Terminal Access',
                desc: d.features?.terminalAccessDesc || 'Full terminal access in the browser for running commands',
                icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
                bgColor: 'bg-teal-100 dark:bg-teal-900',
                iconColor: 'text-teal-600 dark:text-teal-400',
              },
              {
                title: d.features?.mobileFriendly || 'Mobile Friendly',
                desc: d.features?.mobileFriendlyDesc || 'Responsive design that works on tablets and mobile devices',
                icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
                bgColor: 'bg-pink-100 dark:bg-pink-900',
                iconColor: 'text-pink-600 dark:text-pink-400',
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 hover:shadow-md transition-shadow">
                <div className={`w-10 h-10 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <svg className={`w-6 h-6 ${feature.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Supported Workflows */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
            {locale === 'ko' ? '지원하는 워크플로우' : 'Supported Workflows'}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {(locale === 'ko' ? [
              {
                title: 'AI 지원 코딩',
                desc: '새 기능 구현, 코드 리팩토링, 버그 수정을 자연어 지시만으로 수행하세요. Claude가 코드를 읽고, 수정하고, 새 파일을 생성합니다.',
                icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
                color: 'blue',
              },
              {
                title: 'PR 리뷰 & 코드 리뷰',
                desc: 'Pull Request를 분석하고, 코드 품질을 검토하며, 개선 사항을 제안받으세요. 원격 저장소에 직접 연결하여 PR을 생성할 수도 있습니다.',
                icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
                color: 'green',
              },
              {
                title: '디버깅 & 문제 해결',
                desc: '오류 메시지를 붙여넣고 Claude에게 원인 분석과 수정을 요청하세요. 로그 분석, 스택 트레이스 해석도 가능합니다.',
                icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
                color: 'red',
              },
              {
                title: '테스트 작성 & 실행',
                desc: '유닛 테스트, 통합 테스트를 생성하고 브라우저 터미널에서 직접 실행하세요. 실패한 테스트를 자동으로 수정합니다.',
                icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
                color: 'purple',
              },
              {
                title: '문서화 & 설명',
                desc: '코드베이스를 탐색하고 아키텍처를 설명받으세요. README, API 문서, 주석을 자동 생성합니다.',
                icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
                color: 'amber',
              },
              {
                title: 'Git 작업 자동화',
                desc: '커밋 메시지 작성, 브랜치 관리, PR 생성까지 Git 워크플로우를 자연어로 자동화하세요.',
                icon: 'M13 10V3L4 14h7v7l9-11h-7z',
                color: 'teal',
              },
            ] : [
              {
                title: 'AI-Assisted Coding',
                desc: 'Implement new features, refactor code, and fix bugs using natural language instructions. Claude reads, edits, and creates files for you.',
                icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
                color: 'blue',
              },
              {
                title: 'PR Reviews & Code Review',
                desc: 'Analyze pull requests, review code quality, and get improvement suggestions. Connect to remote repos and create PRs directly.',
                icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
                color: 'green',
              },
              {
                title: 'Debugging & Troubleshooting',
                desc: 'Paste error messages and ask Claude to diagnose and fix them. Analyze logs, interpret stack traces, and resolve issues quickly.',
                icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
                color: 'red',
              },
              {
                title: 'Test Writing & Execution',
                desc: 'Generate unit tests and integration tests, then run them directly in the browser terminal. Automatically fix failing tests.',
                icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
                color: 'purple',
              },
              {
                title: 'Documentation & Explanation',
                desc: 'Explore codebases and get architecture explanations. Auto-generate READMEs, API docs, and inline comments.',
                icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
                color: 'amber',
              },
              {
                title: 'Git Workflow Automation',
                desc: 'Write commit messages, manage branches, and create PRs. Automate your entire Git workflow with natural language.',
                icon: 'M13 10V3L4 14h7v7l9-11h-7z',
                color: 'teal',
              },
            ]).map((workflow, i) => {
              const colorMap: Record<string, { bg: string; icon: string; border: string }> = {
                blue: { bg: 'bg-blue-50 dark:bg-blue-900/20', icon: 'text-blue-600 dark:text-blue-400', border: 'border-blue-200 dark:border-blue-800' },
                green: { bg: 'bg-green-50 dark:bg-green-900/20', icon: 'text-green-600 dark:text-green-400', border: 'border-green-200 dark:border-green-800' },
                red: { bg: 'bg-red-50 dark:bg-red-900/20', icon: 'text-red-600 dark:text-red-400', border: 'border-red-200 dark:border-red-800' },
                purple: { bg: 'bg-purple-50 dark:bg-purple-900/20', icon: 'text-purple-600 dark:text-purple-400', border: 'border-purple-200 dark:border-purple-800' },
                amber: { bg: 'bg-amber-50 dark:bg-amber-900/20', icon: 'text-amber-600 dark:text-amber-400', border: 'border-amber-200 dark:border-amber-800' },
                teal: { bg: 'bg-teal-50 dark:bg-teal-900/20', icon: 'text-teal-600 dark:text-teal-400', border: 'border-teal-200 dark:border-teal-800' },
              };
              const c = colorMap[workflow.color] || colorMap.blue;
              return (
                <div key={i} className={`${c.bg} rounded-xl border ${c.border} p-6`}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-0.5">
                      <svg className={`w-6 h-6 ${c.icon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={workflow.icon} />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">{workflow.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{workflow.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Connecting Repositories */}
        <section className="mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
              {locale === 'ko' ? '저장소 연결하기' : 'Connecting Repositories'}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-8">
              {locale === 'ko'
                ? '웹 앱에서 기존 프로젝트를 작업하려면 원격 저장소를 연결하세요. GitHub, GitLab, Bitbucket을 지원합니다.'
                : 'To work on existing projects in the web app, connect your remote repositories. GitHub, GitLab, and Bitbucket are supported.'}
            </p>
            <div className="space-y-6">
              {(locale === 'ko' ? [
                {
                  step: 1,
                  title: 'OAuth 연결 승인',
                  desc: '웹 앱에서 Git 제공자(GitHub 등)에 대한 OAuth 연결을 승인합니다. 이를 통해 Claude가 저장소에 접근할 수 있습니다.',
                },
                {
                  step: 2,
                  title: '저장소 선택',
                  desc: '연결할 저장소를 목록에서 선택하거나 저장소 URL을 직접 붙여넣습니다. 프라이빗 저장소도 지원됩니다.',
                },
                {
                  step: 3,
                  title: '클라우드 워크스페이스 생성',
                  desc: '선택한 저장소가 클라우드 워크스페이스에 클론됩니다. 이 환경은 영구적이므로 세션 간에 작업이 유지됩니다.',
                },
                {
                  step: 4,
                  title: '코딩 시작',
                  desc: 'Claude에게 코드 변경을 요청하고, 완료 후 변경사항을 커밋하고 PR을 생성하세요. 모든 작업이 브라우저 안에서 이루어집니다.',
                },
              ] : [
                {
                  step: 1,
                  title: 'Authorize OAuth Connection',
                  desc: 'Authorize the OAuth connection to your Git provider (e.g., GitHub) from the web app. This grants Claude access to your repositories.',
                },
                {
                  step: 2,
                  title: 'Select a Repository',
                  desc: 'Choose a repository from the list or paste a repository URL directly. Private repositories are fully supported.',
                },
                {
                  step: 3,
                  title: 'Cloud Workspace Creation',
                  desc: 'Your selected repository is cloned into a cloud workspace. This environment persists across sessions, so your work is saved.',
                },
                {
                  step: 4,
                  title: 'Start Coding',
                  desc: 'Ask Claude to make code changes, then commit and create PRs when ready. Everything happens inside your browser.',
                },
              ]).map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {item.step}
                  </div>
                  <div className="pt-0.5">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              {d.gettingStartedSection?.title || 'Getting Started'}
            </h2>
            <div className="space-y-4">
              {[
                d.gettingStartedSection?.step1 || 'Visit claude.ai/code in your browser',
                d.gettingStartedSection?.step2 || 'Sign in with your Anthropic account',
                d.gettingStartedSection?.step3 || 'Create a new workspace or connect an existing repository',
                d.gettingStartedSection?.step4 || 'Start coding with Claude Code in your browser',
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

        {/* Tips for Web App Users */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
            {locale === 'ko' ? '웹 앱 사용 팁' : 'Tips for Web App Users'}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {(locale === 'ko' ? [
              {
                title: '키보드 단축키 활용',
                tips: [
                  'Enter: 메시지 전송',
                  'Shift+Enter: 줄바꿈 입력',
                  'Shift+Tab: Plan Mode 전환',
                  'Esc: 현재 작업 취소',
                  '/clear: 대화 초기화',
                ],
                icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707',
              },
              {
                title: '세션 관리',
                tips: [
                  '긴 대화는 /compact로 요약하여 컨텍스트 유지',
                  '새로운 주제는 새 세션으로 시작',
                  '중요한 컨텍스트는 CLAUDE.md에 저장',
                  '세션이 느려지면 /clear 후 재시작',
                ],
                icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
              },
              {
                title: '성능 최적화',
                tips: [
                  '큰 파일은 직접 편집보다 Claude에게 요청',
                  '불필요한 파일 첨부 피하기',
                  '안정적인 인터넷 연결 확보',
                  'Wi-Fi보다 유선 연결 권장 (대용량 작업 시)',
                ],
                icon: 'M13 10V3L4 14h7v7l9-11h-7z',
              },
              {
                title: '효과적인 프롬프트',
                tips: [
                  '구체적인 파일 경로와 함수명 포함',
                  '원하는 결과를 명확하게 설명',
                  '스크린샷으로 UI 문제 설명 가능',
                  '"think hard"로 복잡한 문제 분석 요청',
                ],
                icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
              },
            ] : [
              {
                title: 'Keyboard Shortcuts',
                tips: [
                  'Enter: Send message',
                  'Shift+Enter: New line',
                  'Shift+Tab: Toggle Plan Mode',
                  'Esc: Cancel current operation',
                  '/clear: Reset conversation',
                ],
                icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707',
              },
              {
                title: 'Session Management',
                tips: [
                  'Use /compact to summarize long conversations',
                  'Start new sessions for different topics',
                  'Store important context in CLAUDE.md',
                  'If session slows down, /clear and restart',
                ],
                icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
              },
              {
                title: 'Performance Optimization',
                tips: [
                  'Let Claude edit large files instead of doing it manually',
                  'Avoid attaching unnecessary files',
                  'Ensure a stable internet connection',
                  'Prefer wired over Wi-Fi for heavy tasks',
                ],
                icon: 'M13 10V3L4 14h7v7l9-11h-7z',
              },
              {
                title: 'Effective Prompting',
                tips: [
                  'Include specific file paths and function names',
                  'Clearly describe the desired outcome',
                  'Use screenshots to explain UI issues',
                  'Say "think hard" for complex problem analysis',
                ],
                icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
              },
            ]).map((tipGroup, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 bg-indigo-100 dark:bg-indigo-900/40 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tipGroup.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{tipGroup.title}</h3>
                </div>
                <ul className="space-y-2">
                  {tipGroup.tips.map((tip, j) => (
                    <li key={j} className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                      <svg className="w-4 h-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Advantages */}
        <section className="mb-8">
          <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-200 dark:border-emerald-800 p-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              {locale === 'ko' ? '웹 앱의 장점' : 'Advantages'}
            </h2>
            <ul className="space-y-3">
              {(locale === 'ko' ? [
                '설치나 설정 없이 즉시 시작 가능 - 브라우저만 있으면 됩니다',
                '어떤 기기에서든 접속 가능 (Chromebook, 태블릿, 회사 제한 PC 등)',
                '세션 공유로 팀원과 실시간 협업 가능',
                '클라우드 워크스페이스로 작업 환경이 자동 유지',
                '로컬 컴퓨터 리소스를 사용하지 않아 가벼움',
              ] : [
                'Start instantly with zero installation - just a browser is all you need',
                'Access from any device (Chromebook, tablet, restricted work PC, etc.)',
                'Share sessions with teammates for real-time collaboration',
                'Cloud workspaces persist automatically across sessions',
                'No local compute resources used - lightweight on your machine',
              ]).map((advantage, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700 dark:text-slate-300">{advantage}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Considerations */}
        <section className="mb-16">
          <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800 p-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              {d.limitations?.title || 'Considerations'}
            </h2>
            <ul className="space-y-3">
              {[
                d.limitations?.note1 || 'Requires stable internet connection',
                d.limitations?.note2 || 'Some filesystem operations may be slower than local installation',
                d.limitations?.note3 || 'Large project support depends on your internet speed',
              ].map((note, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <span className="text-slate-700 dark:text-slate-300">{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              {locale === 'ko' ? '지금 바로 시작하세요' : 'Get Started Now'}
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              {locale === 'ko'
                ? '설치 없이 브라우저에서 바로 Claude Code를 사용해 보세요. 무료 체험으로 시작할 수 있습니다.'
                : 'Try Claude Code directly in your browser with zero setup. Get started with a free trial.'}
            </p>
            <a
              href="https://claude.ai/code"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              {locale === 'ko' ? 'claude.ai/code 열기' : 'Open claude.ai/code'}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
