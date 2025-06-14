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

export default function GettingStarted() {
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

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-16">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
            Claude Code 시작하기
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Claude Code 설치부터 첫 프로젝트 설정까지, 단계별로 안내해드립니다.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-8 sm:mb-12 overflow-x-auto">
          <div className="flex items-center space-x-2 sm:space-x-4 min-w-max px-4">
            <div className="flex items-center">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-medium">1</div>
              <span className="ml-1 sm:ml-2 text-xs sm:text-sm font-medium text-slate-900 dark:text-white whitespace-nowrap">시스템 요구사항</span>
            </div>
            <div className="w-4 sm:w-8 h-0.5 bg-slate-300 dark:bg-slate-600"></div>
            <div className="flex items-center">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-medium">2</div>
              <span className="ml-1 sm:ml-2 text-xs sm:text-sm font-medium text-slate-900 dark:text-white whitespace-nowrap">설치</span>
            </div>
            <div className="w-4 sm:w-8 h-0.5 bg-slate-300 dark:bg-slate-600"></div>
            <div className="flex items-center">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-medium">3</div>
              <span className="ml-1 sm:ml-2 text-xs sm:text-sm font-medium text-slate-900 dark:text-white whitespace-nowrap">인증</span>
            </div>
            <div className="w-4 sm:w-8 h-0.5 bg-slate-300 dark:bg-slate-600"></div>
            <div className="flex items-center">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-medium">4</div>
              <span className="ml-1 sm:ml-2 text-xs sm:text-sm font-medium text-slate-900 dark:text-white whitespace-nowrap">첫 프로젝트</span>
            </div>
          </div>
        </div>

        {/* Step 1: System Requirements */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 sm:p-6 lg:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 flex items-center">
              <span className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-medium mr-2 sm:mr-3">1</span>
              시스템 요구사항 확인
            </h2>
            
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center p-4 border border-slate-200 dark:border-slate-600 rounded-lg">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">운영체제</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">macOS, Linux, Windows (WSL)</p>
              </div>
              
              <div className="text-center p-4 border border-slate-200 dark:border-slate-600 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">필수 요구사항</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">Node.js 18+, 4GB RAM</p>
              </div>
              
              <div className="text-center p-4 border border-slate-200 dark:border-slate-600 rounded-lg">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">네트워크</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">안정적인 인터넷 연결</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
              <div className="flex">
                <svg className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <div>
                  <p className="text-amber-800 dark:text-amber-200 font-medium">Windows 사용자 주의사항</p>
                  <p className="text-amber-700 dark:text-amber-300 text-sm mt-1">
                    Claude Code는 Windows에서 직접 실행되지 않습니다. WSL(Windows Subsystem for Linux) 환경에서 실행해주세요.
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
              Claude Code 설치
            </h2>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 text-sm">한 번에 설치하기</span>
                  <CopyButton text="npm install -g @anthropic-ai/claude-code" />
                </div>
                <code className="text-green-400 font-mono text-sm sm:text-base">npm install -g @anthropic-ai/claude-code</code>
              </div>

              <div className="p-3 sm:p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <div className="flex">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-blue-800 dark:text-blue-200 font-medium text-sm sm:text-base">설치 전 확인사항</p>
                    <p className="text-blue-700 dark:text-blue-300 text-xs sm:text-sm mt-1">
                      Node.js 18+ 필요. <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">node --version</code>로 확인 후 <a href="https://nodejs.org" className="underline">nodejs.org</a>에서 설치하세요.
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
              인증 설정
            </h2>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 text-sm">프로젝트에서 시작하기</span>
                  <CopyButton text="cd my-project && claude" />
                </div>
                <code className="text-green-400 font-mono text-sm sm:text-base">cd my-project && claude</code>
              </div>

              <div className="grid sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="text-center p-3 sm:p-4 border border-blue-200 dark:border-blue-600 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">1</div>
                  <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Console</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">권장 방법</p>
                </div>
                
                <div className="text-center p-3 sm:p-4 border border-purple-200 dark:border-purple-600 rounded-lg">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">2</div>
                  <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Pro/Max</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">구독 연동</p>
                </div>
                
                <div className="text-center p-3 sm:p-4 border border-green-200 dark:border-green-600 rounded-lg">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">3</div>
                  <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">기업용</h4>
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
              첫 프로젝트 시작
            </h2>

            <div className="space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm">프로젝트 이해하기</span>
                    <CopyButton text="이 프로젝트에 대해 요약해줘" />
                  </div>
                  <code className="text-blue-400 font-mono text-sm">claude{`>`} </code>
                  <code className="text-white font-mono text-sm">이 프로젝트에 대해 요약해줘</code>
                </div>

                <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm">프로젝트 초기화</span>
                    <CopyButton text="/init" />
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
                <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">설정 완료!</h3>
                <p className="text-sm text-green-700 dark:text-green-300">
                  이제 Claude Code와 함께 스마트한 개발을 시작할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-800 p-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">다음 단계</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">기본 사용법 익히기</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• 코드 질문하기: "인증이 어떻게 작동하는지 설명해줘"</li>
                  <li>• 파일 편집하기: "폼에 입력 검증을 추가해줘"</li>
                  <li>• 테스트 실행하기: "테스트를 실행하고 실패한 부분을 수정해줘"</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">고급 기능 탐험</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• 확장된 사고: "이 기능의 아키텍처에 대해 깊이 생각해봐"</li>
                  <li>• Git 자동화: "이 기능에 대한 PR을 생성해줘"</li>
                  <li>• 웹 검색: Claude가 자동으로 문서를 찾아 참조</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center">
                홈으로 돌아가기
              </a>
              <a href="/use-cases" className="border border-blue-300 dark:border-blue-600 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors text-center">
                실전 튜토리얼
              </a>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section>
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">문제 해결</h2>
            
            <div className="space-y-4">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                  <span className="font-medium text-slate-900 dark:text-white">WSL에서 설치 오류가 발생해요</span>
                  <svg className="w-5 h-5 text-slate-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 p-4 text-slate-600 dark:text-slate-300">
                  <p className="mb-2">WSL에서 Windows npm을 사용하고 있을 수 있습니다. 다음을 시도해보세요:</p>
                  <div className="bg-slate-900 dark:bg-slate-800 rounded p-3 mb-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-slate-400 text-xs">터미널</span>
                      <CopyButton text="npm config set os linux" className="scale-75" />
                    </div>
                    <code className="text-green-400 text-sm">npm config set os linux</code>
                  </div>
                  <p>또는 강제 설치:</p>
                  <div className="bg-slate-900 dark:bg-slate-800 rounded p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-slate-400 text-xs">터미널</span>
                      <CopyButton text="npm install -g @anthropic-ai/claude-code --force --no-os-check" className="scale-75" />
                    </div>
                    <code className="text-green-400 text-sm">npm install -g @anthropic-ai/claude-code --force --no-os-check</code>
                  </div>
                </div>
              </details>

              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                  <span className="font-medium text-slate-900 dark:text-white">"node: not found" 오류가 나타나요</span>
                  <svg className="w-5 h-5 text-slate-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 p-4 text-slate-600 dark:text-slate-300">
                  <p className="mb-2">WSL이 Windows Node.js를 사용하고 있을 수 있습니다. 다음으로 확인:</p>
                  <div className="bg-slate-900 dark:bg-slate-800 rounded p-3 mb-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-slate-400 text-xs">터미널</span>
                      <CopyButton text="which node && which npm" className="scale-75" />
                    </div>
                    <code className="text-green-400 text-sm">which node && which npm</code>
                  </div>
                  <p>경로가 <code>/mnt/c/</code>로 시작한다면 Linux용 Node.js를 설치하세요:</p>
                  <div className="bg-slate-900 dark:bg-slate-800 rounded p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-slate-400 text-xs">터미널</span>
                      <CopyButton text="curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash" className="scale-75" />
                    </div>
                    <code className="text-green-400 text-sm">curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash</code>
                  </div>
                </div>
              </details>

              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                  <span className="font-medium text-slate-900 dark:text-white">권한 오류가 발생해요</span>
                  <svg className="w-5 h-5 text-slate-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 p-4 text-slate-600 dark:text-slate-300">
                  <p className="mb-2">npm 글로벌 설치 권한을 설정하세요:</p>
                  <div className="bg-slate-900 dark:bg-slate-800 rounded p-3 mb-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-slate-400 text-xs">터미널</span>
                      <CopyButton text="mkdir ~/.npm-global" className="scale-75" />
                    </div>
                    <code className="text-green-400 text-sm block mb-1">mkdir ~/.npm-global</code>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-slate-400 text-xs invisible">터미널</span>
                      <CopyButton text="npm config set prefix '~/.npm-global'" className="scale-75" />
                    </div>
                    <code className="text-green-400 text-sm">npm config set prefix '~/.npm-global'</code>
                  </div>
                  <p>그리고 ~/.bashrc 또는 ~/.zshrc에 추가:</p>
                  <div className="bg-slate-900 dark:bg-slate-800 rounded p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-slate-400 text-xs">설정 파일</span>
                      <CopyButton text="export PATH=~/.npm-global/bin:$PATH" className="scale-75" />
                    </div>
                    <code className="text-green-400 text-sm">export PATH=~/.npm-global/bin:$PATH</code>
                  </div>
                </div>
              </details>
            </div>

            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <p className="text-blue-800 dark:text-blue-200">
                더 많은 문제 해결 방법은 <a href="/use-cases" className="font-medium hover:underline">문제 해결 가이드</a>를 참고하세요.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}