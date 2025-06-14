'use client';

import { useState } from 'react';
import NavigationHeader from '@/components/NavigationHeader';
import MobileMenu from '@/components/MobileMenu';
import { useNavigationMenu } from '@/hooks/useNavigationMenu';

function CopyButton({ text, className = "" }: { text: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('클립보드 복사 실패:', err);
    }
  };

  return (
    <button
      onClick={copyToClipboard}
      className={`text-slate-400 hover:text-white transition-colors ${className}`}
      title="클립보드에 복사"
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

export default function UsageGuide() {
  const { mobileMenu, helpers } = useNavigationMenu();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-zinc-100 dark:from-slate-900 dark:to-zinc-900">
      <NavigationHeader
        isMobileMenuOpen={mobileMenu.isOpen}
        onMobileMenuToggle={mobileMenu.toggle}
        getLinkClassName={helpers.getLinkClassName}
      >
        <MobileMenu
          isOpen={mobileMenu.isOpen}
          onLinkClick={mobileMenu.onLinkClick}
          getLinkClassName={helpers.getLinkClassName}
          menuRef={mobileMenu.menuRef}
        />
      </NavigationHeader>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-16">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Claude Code 완벽 활용 가이드
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            터미널에서 AI와 함께 개발하는 새로운 방법을 배워보세요. 기본 명령어부터 고급 자동화까지 단계별로 안내합니다.
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
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white">기본 명령어</h2>
            </div>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              터미널에서 Claude와 대화하는 기본적인 방법들을 익혀보세요.
            </p>
            <div className="space-y-3">
              <a href="/usage-guide/basic-commands#interactive-mode" className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">
                <h3 className="text-sm sm:text-base font-medium text-slate-900 dark:text-white mb-1">대화형 세션</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">프로젝트 디렉토리에서 claude 명령어로 대화 시작</p>
              </a>
              <a href="/usage-guide/basic-commands#one-shot-mode" className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">
                <h3 className="text-sm sm:text-base font-medium text-slate-900 dark:text-white mb-1">빠른 질문</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">claude -p "질문내용"으로 즉시 답변 받기</p>
              </a>
              <a href="/usage-guide/basic-commands#pipe-mode" className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">
                <h3 className="text-sm sm:text-base font-medium text-slate-900 dark:text-white mb-1">파일 분석</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">cat file.js | claude로 파일 내용 분석 요청</p>
              </a>
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
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white">개발 워크플로우</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              실제 개발 과정에서 자주 사용하는 패턴들을 익혀보세요.
            </p>
            <div className="space-y-3">
              <a href="/usage-guide/core-workflows#code-understanding" className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">
                <h3 className="font-medium text-slate-900 dark:text-white mb-1">프로젝트 탐색</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">"이 프로젝트에 대해 설명해줘" - 코드베이스 전체 분석</p>
              </a>
              <a href="/usage-guide/core-workflows#code-editing" className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">
                <h3 className="font-medium text-slate-900 dark:text-white mb-1">스마트 편집</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">"버그 수정해줘" - 컨텍스트 기반 코드 수정</p>
              </a>
              <a href="/usage-guide/core-workflows#git-automation" className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">
                <h3 className="font-medium text-slate-900 dark:text-white mb-1">Git 워크플로우</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">"PR 생성해줘" - 자동 커밋 메시지 및 풀 리퀘스트</p>
              </a>
              <a href="/usage-guide/core-workflows#testing-debugging" className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">
                <h3 className="font-medium text-slate-900 dark:text-white mb-1">품질 관리</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">"테스트 실행하고 실패 원인 분석해줘"</p>
              </a>
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
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white">고급 활용법</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Claude Code의 고급 기능들로 개발 생산성을 극대화하세요.
            </p>
            <div className="space-y-3">
              <a href="/usage-guide/advanced-features#extended-thinking" className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">
                <h3 className="font-medium text-slate-900 dark:text-white mb-1">딥 씽킹 모드</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">복잡한 아키텍처 설계와 문제 해결</p>
              </a>
              <a href="/usage-guide/advanced-features#memory-management" className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">
                <h3 className="font-medium text-slate-900 dark:text-white mb-1">프로젝트 메모리</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">CLAUDE.md로 프로젝트 규칙과 컨텍스트 관리</p>
              </a>
              <a href="/usage-guide/advanced-features#web-search" className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">
                <h3 className="font-medium text-slate-900 dark:text-white mb-1">실시간 문서 검색</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">최신 라이브러리 문서 자동 참조</p>
              </a>
              <a href="/usage-guide/advanced-features#non-interactive-mode" className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">
                <h3 className="font-medium text-slate-900 dark:text-white mb-1">자동화 스크립트</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">GitHub Actions와 CI/CD 통합</p>
              </a>
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
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white">CLI 옵션 & 설정</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              명령행 도구의 다양한 옵션과 환경 설정 방법을 알아보세요.
            </p>
            <div className="space-y-3">
              <a href="/usage-guide/cli-commands#slash-commands" className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">
                <h3 className="font-medium text-slate-900 dark:text-white mb-1">내장 명령어</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">/init, /help, /compact, /memory 등 유틸리티</p>
              </a>
              <a href="/usage-guide/cli-commands#cli-flags" className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">
                <h3 className="font-medium text-slate-900 dark:text-white mb-1">실행 옵션</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">--allowedTools, --model 등 플래그 활용</p>
              </a>
              <a href="/usage-guide/cli-commands#environment-variables" className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">
                <h3 className="font-medium text-slate-900 dark:text-white mb-1">환경 설정</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">API 키, 모델 선택, 프록시 설정</p>
              </a>
              <a href="/usage-guide/cli-commands#security-controls" className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">
                <h3 className="font-medium text-slate-900 dark:text-white mb-1">권한 관리</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">파일 접근, 도구 사용 권한 제어</p>
              </a>
            </div>
          </div>
        </div>

        {/* Quick Examples */}
        <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-800 p-4 sm:p-6 lg:p-8 mb-8 sm:mb-12">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">실전 명령어 예제</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-4">프로젝트 분석</h3>
              <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 text-sm">프로젝트 이해</span>
                  <CopyButton text="이 프로젝트의 전체 구조를 분석해줘" />
                </div>
                <code className="text-blue-400 font-mono text-sm">claude{`>`} </code>
                <code className="text-white font-mono text-sm">이 프로젝트의 전체 구조를 분석해줘</code>
              </div>
              <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 text-sm">API 문서화</span>
                  <CopyButton text="API 엔드포인트를 문서화해줘" />
                </div>
                <code className="text-blue-400 font-mono text-sm">claude{`>`} </code>
                <code className="text-white font-mono text-sm">API 엔드포인트를 문서화해줘</code>
              </div>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-4">개발 작업</h3>
              <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 text-sm">기능 추가</span>
                  <CopyButton text="사용자 프로필 편집 기능을 추가해줘" />
                </div>
                <code className="text-blue-400 font-mono text-sm">claude{`>`} </code>
                <code className="text-white font-mono text-sm">사용자 프로필 편집 기능을 추가해줘</code>
              </div>
              <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 text-sm">테스트 자동화</span>
                  <CopyButton text="모든 테스트를 실행하고 실패 원인을 분석해줘" />
                </div>
                <code className="text-blue-400 font-mono text-sm">claude{`>`} </code>
                <code className="text-white font-mono text-sm">모든 테스트를 실행하고 실패 원인을 분석해줘</code>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 sm:p-6 lg:p-8">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-6">생산성을 높이는 실전 팁</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="p-3 sm:p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <h3 className="text-sm sm:text-base font-semibold text-green-800 dark:text-green-200 mb-2">구체적인 지시</h3>
              <p className="text-green-700 dark:text-green-300 text-xs sm:text-sm leading-relaxed">
                "오류 수정해줘" 대신 "user.tsx 34번 줄의 null 참조 오류를 수정해줘"처럼 구체적으로 요청하세요.
              </p>
            </div>
            <div className="p-3 sm:p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <h3 className="text-sm sm:text-base font-semibold text-blue-800 dark:text-blue-200 mb-2">점진적 개발</h3>
              <p className="text-blue-700 dark:text-blue-300 text-xs sm:text-sm leading-relaxed">
                전체 기능을 한 번에 구현하지 말고, 작은 단위로 나누어 단계적으로 구축하세요.
              </p>
            </div>
            <div className="p-3 sm:p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
              <h3 className="text-sm sm:text-base font-semibold text-purple-800 dark:text-purple-200 mb-2">프로젝트 메모리</h3>
              <p className="text-purple-700 dark:text-purple-300 text-xs sm:text-sm leading-relaxed">
                CLAUDE.md 파일에 프로젝트 규칙과 컨텍스트를 명시하여 일관된 결과를 얻으세요.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}