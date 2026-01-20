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

interface TipCardProps {
  number: number;
  title: string;
  description: string;
  practices: Record<string, string>;
  quote?: string;
  warning?: string;
  command?: string;
  setup?: string;
  claudeMdTip?: string;
  handoffPrompt?: string;
  gradient: string;
}

function TipCard({ number, title, description, practices, quote, warning, command, setup, claudeMdTip, handoffPrompt, gradient }: TipCardProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 sm:p-6 lg:p-8">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-lg flex items-center justify-center`}>
            <span className="text-white font-bold text-lg">{number}</span>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-4">
            {title}
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
              {description}
            </p>
            
            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2 text-sm">Best Practices:</h4>
              <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1">
                {Object.values(practices).map((practice, idx) => (
                  <li key={idx}>• {practice}</li>
                ))}
              </ul>
            </div>

            {command && (
              <div className="bg-slate-800 rounded-lg p-3 mb-4">
                <div className="flex items-center justify-between mb-2">
                  {setup && <span className="text-xs text-slate-400">{setup}</span>}
                  <button 
                    onClick={() => copyToClipboard(command)}
                    className="text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    {copied ? '✓ Copied!' : 'Copy'}
                  </button>
                </div>
                <code className="text-green-400 text-sm font-mono">{command}</code>
              </div>
            )}

            {handoffPrompt && (
              <CollapsibleSection title="Handoff Prompt Template">
                <div className="bg-slate-800 rounded p-3 text-sm font-mono text-slate-300">
                  <pre className="whitespace-pre-wrap">{handoffPrompt}</pre>
                </div>
              </CollapsibleSection>
            )}

            {claudeMdTip && (
              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-4">
                <p className="text-amber-800 dark:text-amber-200 text-sm">
                  <strong>CLAUDE.md Tip:</strong> {claudeMdTip}
                </p>
              </div>
            )}

            {warning && (
              <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4 mb-4">
                <p className="text-orange-800 dark:text-orange-200 text-sm">
                  <strong>⚠️ Warning:</strong> {warning}
                </p>
              </div>
            )}

            {quote && (
              <blockquote className="border-l-4 border-blue-500 pl-4 italic text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                &ldquo;{quote}&rdquo;
              </blockquote>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

interface TipsClientProps {
  locale: Locale;
  dictionary: any;
}

export default function TipsClient({ locale, dictionary }: TipsClientProps) {
  const { mobileMenu, helpers } = useNavigationMenu();
  const tips = dictionary.tips;

  const gradients = [
    'from-green-500 to-emerald-600',
    'from-blue-500 to-cyan-600',
    'from-purple-500 to-pink-600',
    'from-orange-500 to-red-600',
    'from-indigo-500 to-violet-600',
    'from-teal-500 to-cyan-600',
    'from-rose-500 to-pink-600',
    'from-amber-500 to-orange-600',
    'from-lime-500 to-green-600',
    'from-sky-500 to-blue-600',
    'from-fuchsia-500 to-purple-600',
  ];

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
              {tips.mainTitle}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              {tips.mainSubtitle}
            </p>
          </div>

          {/* Intro Section */}
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
                  {tips.detailSubtitle}
                </h3>
                <p className="text-sm sm:text-base text-blue-800 dark:text-blue-200 leading-relaxed">
                  {tips.detailDescription}
                </p>
                {tips.sourceCredit && (
                  <p className="text-xs text-blue-600 dark:text-blue-300 mt-2">
                    {tips.sourceCredit} • <a href="https://github.com/ykdojo/claude-code-tips" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800 dark:hover:text-blue-100">{tips.sourceLink}</a>
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* 11 Tips */}
          <div className="space-y-8">
            {tips.tip1 && (
              <TipCard
                number={1}
                title={tips.tip1.title}
                description={tips.tip1.description}
                practices={tips.tip1.practices}
                quote={tips.tip1.quote}
                gradient={gradients[0]}
              />
            )}

            {tips.tip2 && (
              <TipCard
                number={2}
                title={tips.tip2.title}
                description={tips.tip2.description}
                practices={tips.tip2.practices}
                quote={tips.tip2.quote}
                gradient={gradients[1]}
              />
            )}

            {tips.tip3 && (
              <TipCard
                number={3}
                title={tips.tip3.title}
                description={tips.tip3.description}
                practices={tips.tip3.practices}
                quote={tips.tip3.quote}
                gradient={gradients[2]}
              />
            )}

            {tips.tip4 && (
              <TipCard
                number={4}
                title={tips.tip4.title}
                description={tips.tip4.description}
                practices={tips.tip4.practices}
                warning={tips.tip4.warning}
                gradient={gradients[3]}
              />
            )}

            {tips.tip5 && (
              <TipCard
                number={5}
                title={tips.tip5.title}
                description={tips.tip5.description}
                practices={tips.tip5.practices}
                quote={tips.tip5.quote}
                gradient={gradients[4]}
              />
            )}

            {tips.tip6 && (
              <TipCard
                number={6}
                title={tips.tip6.title}
                description={tips.tip6.description}
                practices={tips.tip6.practices}
                claudeMdTip={tips.tip6.claudeMdTip}
                gradient={gradients[5]}
              />
            )}

            {tips.tip7 && (
              <TipCard
                number={7}
                title={tips.tip7.title}
                description={tips.tip7.description}
                practices={tips.tip7.practices}
                quote={tips.tip7.quote}
                gradient={gradients[6]}
              />
            )}

            {tips.tip8 && (
              <TipCard
                number={8}
                title={tips.tip8.title}
                description={tips.tip8.description}
                practices={tips.tip8.practices}
                handoffPrompt={tips.tip8.handoffPrompt}
                gradient={gradients[7]}
              />
            )}

            {tips.tip9 && (
              <TipCard
                number={9}
                title={tips.tip9.title}
                description={tips.tip9.description}
                practices={tips.tip9.practices}
                quote={tips.tip9.quote}
                gradient={gradients[8]}
              />
            )}

            {tips.tip10 && (
              <TipCard
                number={10}
                title={tips.tip10.title}
                description={tips.tip10.description}
                practices={tips.tip10.practices}
                quote={tips.tip10.quote}
                gradient={gradients[9]}
              />
            )}

            {tips.tip11 && (
              <TipCard
                number={11}
                title={tips.tip11.title}
                description={tips.tip11.description}
                practices={tips.tip11.practices}
                setup={tips.tip11.setup}
                command={tips.tip11.command}
                quote={tips.tip11.quote}
                gradient={gradients[10]}
              />
            )}

            {/* Bonus Tips */}
            {tips.bonusTips && (
              <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 sm:p-6 lg:p-8">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  {tips.bonusTips.title}
                </h2>
                
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {Object.values(tips.bonusTips.items).map((item: any, idx: number) => (
                    <div key={idx} className="p-3 sm:p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                      <h3 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white mb-2">
                        {['🎯', '🔄', '🧪', '🔍'][idx]} {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Conclusion */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 sm:p-6 lg:p-8 text-center">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {tips.conclusion}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                {tips.conclusionText}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={`/${locale}/getting-started`} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all">
                  {tips.getStarted}
                </Link>
                <Link href={`/${locale}/usage-guide`} className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 px-6 py-3 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  {tips.viewMoreGuides}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
