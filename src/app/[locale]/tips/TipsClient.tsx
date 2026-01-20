'use client';

import { useState } from 'react';
import Link from 'next/link';
import NavigationHeader from '@/components/NavigationHeader';
import MobileMenu from '@/components/MobileMenu';
import { useNavigationMenu } from '@/hooks/useNavigationMenu';
import { type Locale } from '@/lib/i18n/config';

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function CollapsibleSection({ title, children, defaultOpen = false }: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors flex items-center justify-between text-left"
      >
        <span className="font-medium text-slate-900 dark:text-white">{title}</span>
        <svg 
          className={`w-5 h-5 text-slate-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 bg-white dark:bg-slate-800">
          {children}
        </div>
      )}
    </div>
  );
}

interface TipsClientProps {
  locale: Locale;
  dictionary: any;
}

export default function TipsClient({ locale, dictionary }: TipsClientProps) {
  const { mobileMenu, helpers } = useNavigationMenu();

  const copyToClipboard = async (text: string, buttonElement: HTMLButtonElement) => {
    try {
      await navigator.clipboard.writeText(text);
      const originalText = buttonElement.textContent;
      buttonElement.textContent = dictionary.tips.copied;
      buttonElement.className = buttonElement.className.replace('text-slate-400', 'text-green-400');
      setTimeout(() => {
        buttonElement.textContent = originalText;
        buttonElement.className = buttonElement.className.replace('text-green-400', 'text-slate-400');
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const reflectionPrompt = `You are an expert in prompt engineering, specializing in optimizing AI code assistant instructions. Your task is to analyze and improve the instructions for Claude Code found in u/CLAUDE.md. Follow these steps carefully:

1. Analysis Phase:
Review the chat history in your context window.

Then, examine the current Claude instructions:
<claude_instructions>
u/CLAUDE.md
</claude_instructions>

Analyze the chat history and instructions to identify areas that could be improved. Look for:
- Inconsistencies in Claude's responses
- Misunderstandings of user requests
- Areas where Claude could provide more detailed or accurate information
- Opportunities to enhance Claude's ability to handle specific types of queries or tasks

2. Interaction Phase:
Present your findings and improvement ideas to the human. For each suggestion:
a) Explain the current issue you've identified
b) Propose a specific change or addition to the instructions
c) Describe how this change would improve Claude's performance

Wait for feedback from the human on each suggestion before proceeding. If the human approves a change, move it to the implementation phase. If not, refine your suggestion or move on to the next idea.

3. Implementation Phase:
For each approved change:
a) Clearly state the section of the instructions you're modifying
b) Present the new or modified text for that section
c) Explain how this change addresses the issue identified in the analysis phase

4. Output Format:
Present your final output in the following structure:

<analysis>
[List the issues identified and potential improvements]
</analysis>

<improvements>
[For each approved improvement:
1. Section being modified
2. New or modified instruction text
3. Explanation of how this addresses the identified issue]
</improvements>

<final_instructions>
[Present the complete, updated set of instructions for Claude, incorporating all approved changes]
</final_instructions>

Remember, your goal is to enhance Claude's performance and consistency while maintaining the core functionality and purpose of the AI assistant. Be thorough in your analysis, clear in your explanations, and precise in your implementations.`;

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

      <main className="pt-24 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {dictionary.tips.mainTitle}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              {dictionary.tips.mainSubtitle}
            </p>
          </div>

          {/* 인트로 섹션 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 sm:p-6 mb-8">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  {dictionary.tips.detailSubtitle}
                </h3>
                <p className="text-sm sm:text-base text-blue-800 dark:text-blue-200 leading-relaxed">
                  {dictionary.tips.detailDescription}
                </p>
              </div>
            </div>
          </div>

          {/* 핵심 팁들 */}
          <div className="space-y-8">
            
            {/* 팁 1: 계획 세우기 */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 sm:p-6 lg:p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    {dictionary.tips.planningTitle}
                  </h2>
                  <div className="prose dark:prose-invert max-w-none">
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                      {dictionary.tips.planningDescription}
                    </p>
                    
                    <CollapsibleSection title={dictionary.tips.planningPractical} defaultOpen={true}>
                      <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1">
                        <li>• {dictionary.tips.planningList.codebaseAnalysis}</li>
                        <li>• {dictionary.tips.planningList.implementationPlan}</li>
                        <li>• {dictionary.tips.planningList.nuanceUnderstanding}</li>
                        <li>• {dictionary.tips.planningList.structuredRoadmap}</li>
                      </ul>
                    </CollapsibleSection>

                    <blockquote className="border-l-4 border-green-500 pl-4 italic text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mt-4">
                      {dictionary.tips.planningNote}
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            {/* 팁 2: 규칙 설정 */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 sm:p-6 lg:p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    {dictionary.tips.rulesTitle}
                  </h2>
                  <div className="prose dark:prose-invert max-w-none">
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      {dictionary.tips.rulesDescription}
                    </p>

                    <CollapsibleSection title={dictionary.tips.rulesExample}>
                      <div className="bg-slate-800 rounded p-3 text-sm font-mono">
                        <code className="text-green-400">
                          {dictionary.tips.rulesExampleContent.title}<br/>
                          {dictionary.tips.rulesExampleContent.breakingChanges}<br/>
                          {dictionary.tips.rulesExampleContent.checkDocs}<br/>
                          {dictionary.tips.rulesExampleContent.noFakeSolutions}<br/>
                          {dictionary.tips.rulesExampleContent.focusReal}
                        </code>
                      </div>
                    </CollapsibleSection>

                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mt-4">
                      <p className="text-amber-800 dark:text-amber-200 text-sm">
                        <strong>💡 {dictionary.tips.rulesProTip}:</strong> {dictionary.tips.rulesProTipText}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 팁 3: /compact 활용 */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 sm:p-6 lg:p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    {dictionary.tips.compactTitle}
                  </h2>
                  <div className="prose dark:prose-invert max-w-none">
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      {dictionary.tips.compactDescription}
                    </p>

                    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3 sm:p-4">
                        <h4 className="text-sm sm:text-base font-semibold text-red-900 dark:text-red-100 mb-2">
                          ❌ {dictionary.tips.compactWrong}
                        </h4>
                        <ul className="text-xs sm:text-sm text-red-800 dark:text-red-200 space-y-1">
                          <li>• {dictionary.tips.compactWrongList.waitingAuto}</li>
                          <li>• {dictionary.tips.compactWrongList.reworkAfterLoss}</li>
                          <li>• {dictionary.tips.compactWrongList.regenerateCompleted}</li>
                        </ul>
                      </div>

                      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3 sm:p-4">
                        <h4 className="text-sm sm:text-base font-semibold text-green-900 dark:text-green-100 mb-2">
                          ✅ {dictionary.tips.compactCorrect}
                        </h4>
                        <ul className="text-xs sm:text-sm text-green-800 dark:text-green-200 space-y-1">
                          <li>• {dictionary.tips.compactCorrectList.manualEarly}</li>
                          <li>• {dictionary.tips.compactCorrectList.specifyGoals}</li>
                          <li>• {dictionary.tips.compactCorrectList.maintainWorkflow}</li>
                        </ul>
                      </div>
                    </div>

                    <blockquote className="border-l-4 border-purple-500 pl-4 italic text-slate-600 dark:text-slate-300">
                      {dictionary.tips.compactResult}
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            {/* 팁 4: 프로젝트 리플렉션 */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 sm:p-6 lg:p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">4</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    {dictionary.tips.optimizationTitle}
                  </h2>
                  <div className="prose dark:prose-invert max-w-none">
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      {dictionary.tips.optimizationDescription}
                    </p>

                    <CollapsibleSection title={dictionary.tips.optimizationReflection}>
                      <div className="relative">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold text-slate-900 dark:text-white">
                            {dictionary.tips.optimizationReflectionLabel}
                          </h4>
                          <button 
                            onClick={(event) => copyToClipboard(reflectionPrompt, event.currentTarget)}
                            className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors flex items-center gap-1 text-xs bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 px-2 py-1 rounded"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            {dictionary.tips.optimizationCopy}
                          </button>
                        </div>
                        <div className="bg-slate-800 rounded p-4 text-sm font-mono text-slate-300 overflow-x-auto max-h-96 overflow-y-auto">
                          <pre className="whitespace-pre-wrap">{reflectionPrompt}</pre>
                        </div>
                      </div>
                    </CollapsibleSection>

                    <CollapsibleSection title={dictionary.tips.optimizationExamples}>
                      <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-2">
                        <li>• {dictionary.tips.optimizationExamplesList.jiraIntegration}</li>
                        <li>• {dictionary.tips.optimizationExamplesList.docGeneration}</li>
                        <li>• {dictionary.tips.optimizationExamplesList.refactoringStrategy}</li>
                        <li>• {dictionary.tips.optimizationExamplesList.projectContext}</li>
                        <li>• {dictionary.tips.optimizationExamplesList.incrementalDev}</li>
                      </ul>
                    </CollapsibleSection>

                    <blockquote className="border-l-4 border-orange-500 pl-4 italic text-slate-600 dark:text-slate-300 mt-4">
                      {dictionary.tips.optimizationBenefit}
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            {/* NEW: 키보드 단축키 섹션 */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 sm:p-6 lg:p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">5</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white">
                      {dictionary.tips?.keyboardShortcuts || 'Keyboard Shortcuts & Vim Motions'}
                    </h2>
                    <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-semibold rounded-full">
                      NEW in 2.1
                    </span>
                  </div>
                  <div className="prose dark:prose-invert max-w-none">
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      {dictionary.tips?.keyboardShortcutsDescription || 'Claude Code 2.1 introduces enhanced keyboard shortcuts and Vim-style motions for power users. Customize keybindings with /keybindings command.'}
                    </p>

                    <CollapsibleSection title={dictionary.tips?.essentialShortcuts || 'Essential Shortcuts'} defaultOpen={true}>
                      <div className="space-y-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">{dictionary.tips?.navigationShortcuts || 'Navigation & Control'}</h4>
                            <div className="space-y-1 text-sm">
                              <div className="flex justify-between"><code className="bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded">Ctrl+C</code><span className="text-slate-600 dark:text-slate-300">{dictionary.tips?.cancelGeneration || 'Cancel generation'}</span></div>
                              <div className="flex justify-between"><code className="bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded">Escape</code><span className="text-slate-600 dark:text-slate-300">{dictionary.tips?.exitFocusInput || 'Exit / Focus input'}</span></div>
                              <div className="flex justify-between"><code className="bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded">↑ / ↓</code><span className="text-slate-600 dark:text-slate-300">{dictionary.tips?.promptHistory || 'Prompt history'}</span></div>
                              <div className="flex justify-between"><code className="bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded">Ctrl+L</code><span className="text-slate-600 dark:text-slate-300">{dictionary.tips?.clearScreen || 'Clear screen'}</span></div>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">{dictionary.tips?.newShortcuts || 'New in 2.1'}</h4>
                            <div className="space-y-1 text-sm">
                              <div className="flex justify-between"><code className="bg-indigo-100 dark:bg-indigo-900 px-1.5 py-0.5 rounded text-indigo-700 dark:text-indigo-300">Alt+T</code><span className="text-slate-600 dark:text-slate-300">{dictionary.tips?.toggleThinking || 'Toggle thinking mode'}</span></div>
                              <div className="flex justify-between"><code className="bg-indigo-100 dark:bg-indigo-900 px-1.5 py-0.5 rounded text-indigo-700 dark:text-indigo-300">Alt+P</code><span className="text-slate-600 dark:text-slate-300">{dictionary.tips?.switchModel || 'Switch model'}</span></div>
                              <div className="flex justify-between"><code className="bg-indigo-100 dark:bg-indigo-900 px-1.5 py-0.5 rounded text-indigo-700 dark:text-indigo-300">Ctrl+B</code><span className="text-slate-600 dark:text-slate-300">{dictionary.tips?.backgroundTask || 'Background task'}</span></div>
                              <div className="flex justify-between"><code className="bg-indigo-100 dark:bg-indigo-900 px-1.5 py-0.5 rounded text-indigo-700 dark:text-indigo-300">/keybindings</code><span className="text-slate-600 dark:text-slate-300">{dictionary.tips?.customizeKeys || 'Customize keys'}</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CollapsibleSection>

                    <CollapsibleSection title={dictionary.tips?.vimMotions || 'Vim Motions (NEW)'}>
                      <div className="space-y-3">
                        <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                          {dictionary.tips?.vimMotionsDescription || 'Navigate and edit like a pro with Vim-style motions in the input area.'}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">{dictionary.tips?.movement || 'Movement'}</h4>
                            <div className="space-y-1 text-sm font-mono">
                              <div><code className="text-green-600 dark:text-green-400">h j k l</code> - {dictionary.tips?.basicMovement || 'basic cursor movement'}</div>
                              <div><code className="text-green-600 dark:text-green-400">w b e</code> - {dictionary.tips?.wordMovement || 'word navigation'}</div>
                              <div><code className="text-green-600 dark:text-green-400">0 $ ^</code> - {dictionary.tips?.lineMovement || 'line start/end'}</div>
                              <div><code className="text-green-600 dark:text-green-400">f F t T</code> - {dictionary.tips?.findChar || 'find character'}</div>
                              <div><code className="text-green-600 dark:text-green-400">; ,</code> - {dictionary.tips?.repeatFind || 'repeat find next/prev'}</div>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">{dictionary.tips?.editing || 'Editing'}</h4>
                            <div className="space-y-1 text-sm font-mono">
                              <div><code className="text-orange-600 dark:text-orange-400">y yy Y</code> - {dictionary.tips?.yank || 'yank (copy)'}</div>
                              <div><code className="text-orange-600 dark:text-orange-400">p P</code> - {dictionary.tips?.paste || 'paste after/before'}</div>
                              <div><code className="text-orange-600 dark:text-orange-400">d dd D</code> - {dictionary.tips?.delete || 'delete'}</div>
                              <div><code className="text-orange-600 dark:text-orange-400">c cc C</code> - {dictionary.tips?.change || 'change'}</div>
                              <div><code className="text-orange-600 dark:text-orange-400">&gt;&gt; &lt;&lt;</code> - {dictionary.tips?.indent || 'indent/dedent'}</div>
                              <div><code className="text-orange-600 dark:text-orange-400">J</code> - {dictionary.tips?.joinLines || 'join lines'}</div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-3">
                          <h4 className="font-semibold text-slate-900 dark:text-white mb-2">{dictionary.tips?.textObjects || 'Text Objects'}</h4>
                          <div className="text-sm font-mono space-y-1">
                            <div><code className="text-purple-600 dark:text-purple-400">iw aw</code> - {dictionary.tips?.wordObject || 'inner/around word'}</div>
                            <div><code className="text-purple-600 dark:text-purple-400">i&quot; a&quot; i&apos; a&apos;</code> - {dictionary.tips?.quoteObject || 'inside/around quotes'}</div>
                            <div><code className="text-purple-600 dark:text-purple-400">i( a( i[ a[ i&#123; a&#123;</code> - {dictionary.tips?.bracketObject || 'inside/around brackets'}</div>
                          </div>
                        </div>
                      </div>
                    </CollapsibleSection>

                    <CollapsibleSection title={dictionary.tips?.promptSuggestions || 'Prompt Suggestions (NEW)'}>
                      <div className="space-y-3">
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                          {dictionary.tips?.promptSuggestionsDescription || 'Claude Code now offers intelligent prompt suggestions as you type.'}
                        </p>
                        <div className="bg-slate-100 dark:bg-slate-900 rounded-lg p-4">
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                              <code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded text-blue-700 dark:text-blue-300">Tab</code>
                              <span className="text-slate-600 dark:text-slate-300">{dictionary.tips?.acceptSuggestion || 'Accept suggestion'}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded text-blue-700 dark:text-blue-300">Enter</code>
                              <span className="text-slate-600 dark:text-slate-300">{dictionary.tips?.submitPrompt || 'Submit prompt directly'}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded text-blue-700 dark:text-blue-300">Escape</code>
                              <span className="text-slate-600 dark:text-slate-300">{dictionary.tips?.dismissSuggestion || 'Dismiss suggestion'}</span>
                            </div>
                          </div>
                        </div>
                        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
                          <p className="text-amber-800 dark:text-amber-200 text-sm">
                            <strong>💡 Tip:</strong> {dictionary.tips?.suggestionTip || 'Suggestions are context-aware and learn from your project patterns over time.'}
                          </p>
                        </div>
                      </div>
                    </CollapsibleSection>
                  </div>
                </div>
              </div>
            </div>

            {/* 추가 실전 팁들 */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 sm:p-6 lg:p-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-6">
                {dictionary.tips.additionalTips}
              </h2>
              
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-4">
                  <div className="p-3 sm:p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                    <h3 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white mb-2">
                      🎯 {dictionary.tips.clearInstructions}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {dictionary.tips.clearInstructionsText}
                    </p>
                  </div>
                  
                  <div className="p-3 sm:p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                      🔄 {dictionary.tips.incrementalDev}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      {dictionary.tips.incrementalDevText}
                    </p>
                  </div>
                  
                  <div className="p-3 sm:p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                      📝 {dictionary.tips.trackChanges}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      {dictionary.tips.trackChangesText}
                    </p>
                  </div>

                  <div className="p-3 sm:p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                      🔄 {dictionary.tips.continuousImprovement}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      {dictionary.tips.continuousImprovementText}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-3 sm:p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                      🧪 {dictionary.tips.testFirst}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      {dictionary.tips.testFirstText}
                    </p>
                  </div>
                  
                  <div className="p-3 sm:p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                      🔍 {dictionary.tips.codeReview}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      {dictionary.tips.codeReviewText}
                    </p>
                  </div>
                  
                  <div className="p-3 sm:p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                      📋 {dictionary.tips.projectContext}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      {dictionary.tips.projectContextText}
                    </p>
                  </div>

                  <div className="p-3 sm:p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                      🎯 {dictionary.tips.toolIntegration}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      {dictionary.tips.toolIntegrationText}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 마무리 섹션 */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 sm:p-6 lg:p-8 text-center">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {dictionary.tips.conclusion}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                {dictionary.tips.conclusionText}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={`/getting-started`} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all">
                  {dictionary.tips.getStarted}
                </Link>
                <Link href={`/usage-guide`} className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 px-6 py-3 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  {dictionary.tips.viewMoreGuides}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}