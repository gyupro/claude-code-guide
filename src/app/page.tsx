'use client';

import Link from 'next/link';
import Image from 'next/image';
import NavigationHeader from '../components/NavigationHeader';
import MobileMenu from '../components/MobileMenu';
import { useNavigationMenu } from '@/hooks/useNavigationMenu';

export default function Home() {
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

      <main>
        {/* Hero Section */}
        <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[60vh] lg:min-h-[70vh]">
              {/* Left: Text Content */}
              <div className="text-center lg:text-left order-2 lg:order-1">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4 lg:mb-6 leading-tight">
                  터미널에서 만나는<br />
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AI 코딩 어시스턴트</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 mb-6 lg:mb-8 leading-relaxed">
                  Claude Code로 개발 워크플로우를 혁신하세요. 
                  자연어로 코드를 편집하고, 프로젝트를 분석하며, 복잡한 개발 작업을 자동화할 수 있습니다.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                  <Link href="/getting-started" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all text-center text-sm sm:text-base">
                    빠른 시작
                  </Link>
                  <Link href="/usage-guide" className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-center text-sm sm:text-base">
                    사용법 가이드
                  </Link>
                </div>
              </div>
              
              {/* Right: Banner Image */}
              <div className="flex justify-center lg:justify-end items-center order-1 lg:order-2">
                <div className="relative w-64 sm:w-80 md:w-96 lg:w-full lg:max-w-lg">
                  <Image 
                    src="/banner.png" 
                    alt="Claude Code 사용 예시" 
                    width={512}
                    height={512}
                    className="w-full h-auto object-cover rounded-full aspect-square"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-slate-900 dark:text-white mb-8 sm:mb-12">
              개발자를 위한 핵심 기능
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="p-4 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-2">코드 이해 & 편집</h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">프로젝트 전체를 분석하고 컨텍스트를 이해한 후, 자연어 명령으로 정확한 코드 수정을 실행합니다.</p>
              </div>
              <div className="p-4 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-100 dark:bg-cyan-900 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-2">외부 도구 연동</h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">MCP를 통해 GitHub, Slack, PostgreSQL 등 개발 도구들과 안전하게 연결하여 통합 워크플로우를 구현합니다.</p>
              </div>
              <div className="p-4 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-2">개발 워크플로우</h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">커밋 메시지 생성, PR 작성, 테스트 실행, 디버깅 등 일상적인 개발 작업을 자동화합니다.</p>
              </div>
            </div>
            
            {/* Additional MCP Features */}
            <div className="mt-8 sm:mt-12 flex justify-center">
              <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-2xl w-full">
                <div className="p-4 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-2">자동 테스팅</h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">테스트 케이스 생성, 실행 결과 분석, 실패한 테스트 자동 수정 등 품질 관리 업무를 효율화합니다.</p>
                </div>
                <div className="p-4 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-2">CI/CD 통합</h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">GitHub Actions, Docker 컨테이너, 배포 파이프라인과 연동하여 개발부터 운영까지 자동화합니다.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Install Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
              지금 바로 시작해보세요
            </h2>
            <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-6 text-left">
              <div className="flex items-center justify-between mb-4">
                <span className="text-slate-400 text-sm">설치 명령어</span>
                <button className="text-slate-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
              <code className="text-green-400 font-mono">
                npm install -g @anthropic-ai/claude-code
              </code>
            </div>
            <p className="text-slate-600 dark:text-slate-300 mt-4">
              설치 완료 후 터미널에서 <code className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-sm">claude</code> 명령어로 AI 코딩 어시스턴트를 실행하세요.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-xs">V</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-slate-900 dark:text-white">Hello! Vibe</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">Claude Code편</span>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                개발자를 위한 Claude Code 가이드
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4">학습 가이드</h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li><Link href="/getting-started" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">설치 및 시작하기</Link></li>
                <li><Link href="/usage-guide/basic-commands" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">기본 명령어</Link></li>
                <li><Link href="/mcp" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">MCP 프로토콜</Link></li>
                <li><Link href="/tutorials" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">실전 튜토리얼</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4">커뮤니티</h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li><Link href="/community" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">YouTube 학습 영상</Link></li>
                <li><Link href="/use-cases" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">팀별 활용 사례</Link></li>
                <li><Link href="/community" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">GitHub 오픈소스</Link></li>
                <li><Link href="/usage-guide/core-workflows" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">핵심 워크플로우</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4">링크</h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li><a href="https://docs.anthropic.com/en/docs/claude-code" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">공식 문서</a></li>
                <li><a href="https://github.com/anthropics/claude-code" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">GitHub</a></li>
                <li><a href="https://www.anthropic.com/discord" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Discord</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 dark:border-slate-700 mt-8 pt-8 text-center text-sm text-slate-600 dark:text-slate-300">
            <p>© 2025 gyupro89@gmail.com. All rights reserved.</p>
            <p className="mt-2 text-xs">
              MIT 라이선스 | 자유롭게 사용, 수정, 배포 가능
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
