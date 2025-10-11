'use client';

import { ReactNode, useState } from 'react';
import Link from 'next/link';
import { NAVIGATION_ITEMS, EXTERNAL_LINKS, GitHubIcon } from '../constants/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';
import { type Locale } from '@/lib/i18n/config';

interface NavigationHeaderProps {
  isMobileMenuOpen: boolean;
  onMobileMenuToggle: () => void;
  getLinkClassName: (href: string, baseClasses: string) => string;
  children?: ReactNode; // MobileMenu를 children으로 받음
  locale: Locale;
  dictionary: any;
}

export default function NavigationHeader({
  isMobileMenuOpen,
  onMobileMenuToggle,
  getLinkClassName,
  children,
  locale,
  dictionary
}: NavigationHeaderProps) {
  const desktopLinkClasses = 'transition-colors';
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 dark:border-slate-700 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href={`/${locale}`} className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-slate-900 dark:text-white">Claude Code</span>
              <span className="text-xs text-slate-600 dark:text-slate-400">
                {dictionary?.navigation?.subtitle || 'Usage Guide'}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {NAVIGATION_ITEMS.map((item) => {
              // Check if item has children (dropdown)
              if (item.children && item.children.length > 0) {
                return (
                  <div
                    key={item.key}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.key)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={`flex items-center space-x-1 ${desktopLinkClasses} text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400`}
                    >
                      <span>{dictionary.navigation[item.key] || item.label}</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Dropdown menu */}
                    <div
                      className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-slate-800 ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                        openDropdown === item.key
                          ? 'opacity-100 visible translate-y-0'
                          : 'opacity-0 invisible -translate-y-2'
                      }`}
                    >
                      <div className="py-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.key}
                            href={`/${locale}${child.href}`}
                            className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                          >
                            {dictionary.navigation[child.key] || child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              // Regular link without dropdown
              return (
                <Link
                  key={item.key}
                  href={`/${locale}${item.href}`}
                  className={getLinkClassName(`/${locale}${item.href}`, desktopLinkClasses)}
                >
                  {dictionary.navigation[item.key] || item.label}
                </Link>
              );
            })}

            <LanguageSwitcher currentLocale={locale} dictionary={dictionary} />

            <ThemeToggle />

            <a
              href={EXTERNAL_LINKS.github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <GitHubIcon />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Language Switcher */}
            <div className="relative">
              <LanguageSwitcher currentLocale={locale} dictionary={dictionary} />
            </div>
            
            <ThemeToggle />
            
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onMobileMenuToggle();
              }}
              className="relative z-50 inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 touch-manipulation"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 
                (dictionary?.navigation?.closeMenu || "Close menu") : 
                (dictionary?.navigation?.openMenu || "Open menu")}
            >
              <span className="sr-only">{isMobileMenuOpen ? 
                (dictionary?.navigation?.closeMenu || "Close menu") : 
                (dictionary?.navigation?.openMenu || "Open menu")}</span>
              {!isMobileMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu (컴포지션 패턴으로 children 렌더링) */}
        {children}
      </nav>
    </header>
  );
}