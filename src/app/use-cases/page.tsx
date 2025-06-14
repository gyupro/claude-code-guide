'use client';

import NavigationHeader from '../../components/NavigationHeader';
import MobileMenu from '../../components/MobileMenu';
import { useNavigationMenu } from '@/hooks/useNavigationMenu';

export default function UseCases() {
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

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-16">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            실전 활용 사례 모음
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            다양한 팀과 프로젝트에서 Claude Code를 활용하여 
            개발 생산성과 업무 효율성을 극대화한 실제 사례들을 소개합니다.
          </p>
        </div>

        {/* Teams Grid */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-16">
          
          {/* Data Infrastructure Team */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white">백엔드 개발팀</h2>
            </div>
            
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              서버 인프라와 데이터베이스 관리에서 Claude Code를 활용한 혁신적인 워크플로우
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-2">주요 성과</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>복잡한 SQL 쿼리를 자연어로 생성 및 최적화</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>API 엔드포인트 자동 생성 및 문서화</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>서버 로그 분석으로 성능 병목점 자동 감지</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">핵심 팁</h4>
                <p className="text-blue-700 dark:text-blue-300 text-sm">
                  데이터베이스 스키마와 비즈니스 로직을 CLAUDE.md에 명시하고, MCP 연동으로 안전하게 DB 작업을 자동화하세요.
                </p>
              </div>
            </div>
          </div>

          {/* Product Development Team */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">프론트엔드 개발팀</h2>
            </div>
            
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              사용자 인터페이스와 사용자 경험 개발에서 Claude Code로 달성한 혁신적 성과
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-2">주요 성과</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>디자인 시안을 코드로 자동 변환</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>반응형 레이아웃과 애니메이션 구현 자동화</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>컴포넌트 라이브러리 일관성 유지 및 확장</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">핵심 팁</h4>
                <p className="text-green-700 dark:text-green-300 text-sm">
                  스크린샷과 디자인 파일을 적극 활용하고, 스타일 가이드를 CLAUDE.md에 명시하여 일관된 UI를 유지하세요.
                </p>
              </div>
            </div>
          </div>

          {/* Security Engineering Team */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">DevOps 팀</h2>
            </div>
            
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              CI/CD 파이프라인과 인프라 자동화에서 Claude Code를 활용한 혁신적 접근법
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-2">주요 성과</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>Kubernetes 배포 스크립트 자동 생성</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>모니터링 알람 설정 및 장애 대응 자동화</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>인프라 코드 리뷰 및 보안 검사 자동화</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg">
                <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">핵심 팁</h4>
                <p className="text-orange-700 dark:text-orange-300 text-sm">
                  인프라 구성과 배포 패턴을 CLAUDE.md에 문서화하고, GitHub Actions와 연동하여 완전 자동화를 구현하세요.
                </p>
              </div>
            </div>
          </div>

          {/* Inference Team */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">데이터 분석팀</h2>
            </div>
            
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              데이터 분석과 머신러닝 프로젝트에서 Claude Code를 활용한 효율적인 워크플로우
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-2">주요 성과</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>복잡한 데이터 전처리 파이프라인 자동 생성</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>데이터 시각화 차트 코드 자동 작성</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>모델 성능 분석 리포트 자동 생성</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
                <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">핵심 팁</h4>
                <p className="text-purple-700 dark:text-purple-300 text-sm">
                  데이터셋 스키마와 분석 목표를 명확히 하고, Jupyter 노트북과 연동하여 인터랙티브한 분석 환경을 구축하세요.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* More Teams Section */}
        <section className="mb-8 sm:mb-16">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-6 sm:mb-8 text-center">
            다양한 직무별 활용 사례
          </h2>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Data Science Team */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-4">QA 테스트팀</h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mb-4 leading-relaxed">
                테스트 케이스 자동 생성과 버그 리포트 작성을 통해 품질 관리 효율성을 크게 향상
              </p>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                <strong>핵심 성과:</strong> 엣지 케이스 발견과 회귀 테스트 자동화
              </div>
            </div>

            {/* API Knowledge Team */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 sm:p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">기술 문서팀</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                API 문서, 개발자 가이드, 튜토리얼 작성을 자동화하여 문서 품질과 생산성을 동시에 향상
              </p>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                <strong>핵심 성과:</strong> 코드 예제와 문서 동기화 자동화
              </div>
            </div>

            {/* Growth Marketing Team */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 sm:p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">스타트업 팀</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                적은 인력으로도 빠른 프로토타이핑과 MVP 개발을 통해 시장 진입 시간을 대폭 단축
              </p>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                <strong>핵심 성과:</strong> 1인 개발자도 풀스택 개발 역량 확보
              </div>
            </div>

            {/* Product Design Team */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 sm:p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">UX 디자인팀</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                디자인 시안을 실제 동작하는 프로토타입으로 빠르게 변환하여 사용자 테스트 효율성 향상
              </p>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                <strong>핵심 성과:</strong> 디자인-개발 간 커뮤니케이션 비용 최소화
              </div>
            </div>

            {/* RL Engineering Team */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 sm:p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">개인 개발자</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                혼자서도 복잡한 웹 애플리케이션을 구축하고, 새로운 기술 스택을 빠르게 학습하여 적용
              </p>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                <strong>핵심 성과:</strong> 러닝 커브 단축과 생산성 10배 향상
              </div>
            </div>

            {/* Legal Team */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 sm:p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">교육기관</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                프로그래밍 교육과 과제 자동 평가 시스템 구축으로 교육 품질과 효율성을 동시에 개선
              </p>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                <strong>핵심 성과:</strong> 개인 맞춤형 학습 경로 및 피드백 제공
              </div>
            </div>
          </div>
        </section>

        {/* Key Insights Section */}
        <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-800 p-4 sm:p-6 lg:p-8">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            성공적인 활용을 위한 핵심 전략
          </h2>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-4">🚀 생산성 향상 패턴</h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">1</span>
                  <span><strong>명확한 목표 설정:</strong> 해결하려는 문제를 구체적으로 정의</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">2</span>
                  <span><strong>단계별 진행:</strong> 작은 단위로 나누어 점진적 구현</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">3</span>
                  <span><strong>피드백 루프:</strong> 결과 확인 후 즉시 개선 적용</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">4</span>
                  <span><strong>문서화 습관:</strong> 학습한 패턴을 재사용 가능하게 기록</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-4">💡 팀별 활용 전략</h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>개발팀:</strong> 코드 리뷰, 리팩토링, 자동화</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>디자인팀:</strong> 프로토타이핑, UI 구현</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>데이터팀:</strong> 분석 스크립트, 시각화</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>QA팀:</strong> 테스트 케이스, 자동화</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>개인:</strong> 학습 가속화, 생산성 향상</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mt-8 sm:mt-16">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 sm:p-6 lg:p-8">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-4">
              지금 바로 Claude Code를 시작해보세요
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto leading-relaxed">
              Anthropic 팀들의 혁신적인 활용 사례를 참고하여 여러분의 업무에도 Claude Code를 적용해보세요. 
              개발자부터 비개발자까지, 모든 팀이 생산성을 극대화할 수 있습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/getting-started" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all">
                Claude Code 시작하기
              </a>
              <a href="/usage-guide" className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 px-8 py-3 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                사용법 가이드
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}