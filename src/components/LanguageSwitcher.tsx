'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { i18n, type Locale, localeNames, localeFlags } from '@/lib/i18n/config';
import { formatPathname } from '@/lib/i18n/utils';

interface LanguageSwitcherProps {
  currentLocale: Locale;
  dictionary: {
    common: {
      selectLanguage: string;
    };
  };
}

export default function LanguageSwitcher({ currentLocale, dictionary }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const handleLanguageChange = (locale: Locale) => {
    setIsOpen(false);
    
    // Store the selected language in localStorage and cookie for consistency
    localStorage.setItem('preferredLanguage', locale);
    
    // Set cookie for server-side middleware
    document.cookie = `preferredLanguage=${locale}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
    
    // Navigate to the new locale
    const newPath = formatPathname(pathname, locale);
    router.push(newPath);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 md:space-x-1.5 px-2 md:px-2.5 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition-all duration-200 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 touch-manipulation"
        aria-label={dictionary.common.selectLanguage}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="text-base">{localeFlags[currentLocale]}</span>
        <span className="hidden sm:inline text-xs font-normal">{localeNames[currentLocale]}</span>
        <svg 
          className={`w-3 h-3 md:w-3.5 md:h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Backdrop for mobile */}
          <div className="fixed inset-0 z-40 md:hidden" aria-hidden="true" />
          
          {/* Dropdown */}
          <div className="absolute right-0 mt-1 w-44 sm:w-48 max-w-[calc(100vw-2rem)] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg shadow-xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="py-1" role="listbox" aria-label={dictionary.common.selectLanguage}>
              {i18n.locales.map((locale) => (
                <button
                  key={locale}
                  onClick={() => handleLanguageChange(locale)}
                  role="option"
                  aria-selected={locale === currentLocale}
                  className={`w-full flex items-center space-x-3 px-3 py-2.5 text-sm text-left transition-colors duration-150 touch-manipulation ${
                    locale === currentLocale 
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300' 
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700'
                  }`}
                >
                  <span className="text-base flex-shrink-0">{localeFlags[locale]}</span>
                  <span className="flex-1 font-medium truncate">{localeNames[locale]}</span>
                  {locale === currentLocale && (
                    <svg 
                      className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}