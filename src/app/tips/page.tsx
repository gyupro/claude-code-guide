'use client';

import Link from 'next/link';
import NavigationHeader from '../../components/NavigationHeader';
import MobileMenu from '../../components/MobileMenu';
import { useNavigationMenu } from '@/hooks/useNavigationMenu';

export default function Tips() {
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

      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Claude Code 실전 팁
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              대규모 프로젝트에서 검증된 Claude Code 활용법
            </p>
          </div>

          {/* 인트로 섹션 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  실제 프로덕션 환경에서 검증된 팁들
                </h3>
                <p className="text-blue-800 dark:text-blue-200">
                  Claude Pro MAX 구독으로 일주일간 하루 12시간씩 대규모 웹앱 개편 프로젝트에서 
                  직접 검증된 생산성 향상 팁들을 공유합니다.
                </p>
              </div>
            </div>
          </div>

          {/* 핵심 팁들 */}
          <div className="space-y-8">
            
            {/* 팁 1: 계획 세우기 */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    계획, 계획, 그리고 또 계획
                  </h2>
                  <div className="prose dark:prose-invert max-w-none">
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      대규모 기능이나 변경사항을 구현할 때는 바로 코딩을 시작하지 마세요. 
                      Claude가 기존 코드나 문서를 분석하고 마크다운 파일로 계획을 작성하도록 하세요.
                    </p>
                    
                    <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 mb-4">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">실전 활용법:</h4>
                      <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                        <li>• 기존 코드베이스 구조 분석 요청</li>
                        <li>• 단계별 구현 계획 마크다운 작성</li>
                        <li>• OpenAI o3 모델과 병행하여 계획 단계에서 뉘앙스 파악</li>
                        <li>• 구조화된 로드맵을 바탕으로 작업 진행</li>
                      </ul>
                    </div>

                    <blockquote className="border-l-4 border-green-500 pl-4 italic text-slate-600 dark:text-slate-300">
                      "계획 단계에 투자한 시간은 구현 과정에서 10배로 돌아옵니다. 
                      구조화된 계획이 있을 때와 없을 때의 결과물 품질은 확연히 다릅니다."
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            {/* 팁 2: 규칙 설정 */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    규칙은 당신의 가장 좋은 친구
                  </h2>
                  <div className="prose dark:prose-invert max-w-none">
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      처음에는 Claude가 계속 같은 실수를 반복해서 답답했지만, 
                      CLAUDE.md 규칙 파일을 관리하기 시작하면서 모든 것이 바뀌었습니다.
                    </p>

                    <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 mb-4">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">CLAUDE.md 활용 예시:</h4>
                      <div className="bg-slate-800 rounded p-3 text-sm font-mono">
                        <code className="text-green-400">
                          # 패키지 관련 규칙<br/>
                          - 최신 버전 패키지의 Breaking Changes 주의<br/>
                          - 코드 작업 전 반드시 공식 문서 확인<br/>
                          - 가짜 솔루션(모킹, 임시 데이터) 생성 금지<br/>
                          - 실제 문제 해결에만 집중
                        </code>
                      </div>
                    </div>

                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                      <p className="text-amber-800 dark:text-amber-200 text-sm">
                        <strong>💡 프로 팁:</strong> # 명령어를 사용하면 CLAUDE.md 파일에 빠르게 규칙을 추가할 수 있습니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 팁 3: /compact 활용 */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    /compact를 자주, 일찍 사용하세요
                  </h2>
                  <div className="prose dark:prose-invert max-w-none">
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      대규모 기능 작업 중에 Claude가 자동 컴팩트 한계에 도달하면 
                      중요한 컨텍스트를 잃고 통제 불능 상태가 될 수 있습니다.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                        <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">❌ 잘못된 방법</h4>
                        <ul className="text-sm text-red-800 dark:text-red-200 space-y-1">
                          <li>• 자동 컴팩트까지 기다리기</li>
                          <li>• 컨텍스트 손실 후 재작업</li>
                          <li>• 이미 완료된 파일 재생성</li>
                        </ul>
                      </div>

                      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                        <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">✅ 올바른 방법</h4>
                        <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                          <li>• 수동으로 미리 /compact 실행</li>
                          <li>• 다음 목표 명확히 지시</li>
                          <li>• 일관된 작업 흐름 유지</li>
                        </ul>
                      </div>
                    </div>

                    <blockquote className="border-l-4 border-purple-500 pl-4 italic text-slate-600 dark:text-slate-300">
                      "이 세 가지 규칙만 따라도 전체 경험이 크게 개선됩니다. 
                      Claude Code를 논스톱으로 실행하면서도 놀라운 성과를 얻을 수 있었습니다."
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            {/* 추가 실전 팁들 */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                추가 실전 팁들
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">🎯 명확한 지시</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      "파일을 수정해줘" 대신 "User.tsx의 23번째 줄에서 useState 초기값을 null로 변경해줘"처럼 구체적으로 요청하세요.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">🔄 점진적 개발</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      한 번에 모든 것을 구현하려 하지 말고, 작은 단위로 나누어 점진적으로 개발하세요.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">📝 변경사항 추적</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      각 단계마다 무엇이 변경되었는지 확인하고, 예상과 다른 결과가 나오면 즉시 피드백하세요.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">🧪 테스트 우선</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      기능 구현 전에 테스트 케이스를 먼저 작성하도록 하면 더 안정적인 코드를 얻을 수 있습니다.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">🔍 코드 리뷰</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Claude가 생성한 코드를 항상 검토하고, 프로젝트의 코딩 스타일과 일치하는지 확인하세요.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">🔄 CLAUDE.md 지속 개선</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      정기적으로 `/project:reflection` 명령어를 실행하여 CLAUDE.md 파일을 분석하고 개선점을 찾아 적용하세요.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">📋 프로젝트 컨텍스트</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      CLAUDE.md에 현재 진행 중인 에픽, 프로젝트 목표, 비즈니스 컨텍스트를 포함하여 더 나은 결정을 내리도록 하세요.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">🎯 도구 통합 가이드</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Jira, Slack, 데이터베이스 등 사용하는 도구들의 MCP 연결 방법과 활용법을 명시하세요.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">⚡ 피드백 루프</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      각 작업 후 Claude의 성과를 평가하고, 개선점을 즉시 CLAUDE.md에 반영하여 지속적으로 발전시키세요.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 팁 4: 프로젝트 리플렉션 */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">4</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    프로젝트 리플렉션으로 CLAUDE.md 최적화
                  </h2>
                  <div className="prose dark:prose-invert max-w-none">
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      CLAUDE.md 파일 자체를 지속적으로 개선하는 강력한 방법을 발견했습니다. 
                      `/project:reflection` 명령어를 만들어서 Claude가 현재 지시사항을 분석하고 개선점을 제안하도록 합니다.
                    </p>

                    <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 mb-4">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">리플렉션 프롬프트 예시:</h4>
                      <div className="bg-slate-800 rounded p-3 text-sm font-mono text-slate-300">
                        <code>
                          당신은 프롬프트 엔지니어링 전문가입니다.<br/>
                          CLAUDE.md 파일의 지시사항을 분석하고 개선하세요.<br/><br/>
                          
                          1. 분석 단계: 채팅 기록과 현재 지시사항 검토<br/>
                          2. 개선점 식별: 불일치, 오해, 누락된 부분 찾기<br/>
                          3. 구체적 개선안 제시: 섹션별 수정 제안<br/>
                          4. 피드백 루프: 승인된 변경사항 구현
                        </code>
                      </div>
                    </div>

                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-4">
                      <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">실제 리플렉션 결과 예시:</h4>
                      <ul className="text-sm text-amber-800 dark:text-amber-200 space-y-1">
                        <li>• Jira/Atlassian 통합 지시사항 누락 발견</li>
                        <li>• 문서화 생성 가이드라인 부재</li>
                        <li>• 리팩토링 전략 지침 필요</li>
                        <li>• 프로젝트 컨텍스트 정보 부족</li>
                        <li>• 점진적 개발 프로세스 가이드 필요</li>
                      </ul>
                    </div>

                    <blockquote className="border-l-4 border-orange-500 pl-4 italic text-slate-600 dark:text-slate-300">
                      "각 리플렉션 사이클마다 코딩 어시스턴트가 프로젝트 요구사항을 
                      이해하는 능력이 측정 가능하게 향상됩니다."
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            {/* 마무리 섹션 */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Claude Code는 정말 강력한 도구입니다
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                대규모 작업도 쉽게 처리하고, 제대로 사용하면 믿을 수 없을 정도로 강력합니다. 
                이 팁들을 활용해서 여러분도 놀라운 생산성을 경험해보세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/getting-started" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all">
                  바로 시작하기
                </Link>
                <Link href="/usage-guide" className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 px-6 py-3 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  더 많은 가이드 보기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}