'use client';

import { MutableRefObject } from 'react';
import Link from 'next/link';
import { NAVIGATION_ITEMS, EXTERNAL_LINKS, GitHubIcon } from '@/constants/navigation';
import { type Locale } from '@/lib/i18n/config';

interface MobileMenuProps {
  isOpen: boolean;
  onLinkClick: () => void;
  getLinkClassName: (href: string, baseClasses: string) => string;
  menuRef: MutableRefObject<HTMLDivElement | null>;
  locale: Locale;
  dictionary: any;
}

export default function MobileMenu({
  isOpen,
  onLinkClick,
  getLinkClassName,
  menuRef,
  locale,
  dictionary
}: MobileMenuProps) {
  const baseLinkClasses = 'block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors';

  return (
    <>
      {/* Overlay backdrop */}
      <div 
        className={`md:hidden fixed inset-0 bg-black/20 z-30 transition-opacity duration-300 top-16 ${
          isOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={onLinkClick}
        aria-hidden="true"
      />
      
      {/* Mobile menu */}
      <div 
        ref={menuRef}
        className={`md:hidden fixed left-0 right-0 top-16 z-40 transition-all duration-300 ease-in-out bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 ${
          isOpen 
            ? 'max-h-screen opacity-100 pointer-events-auto' 
            : 'max-h-0 opacity-0 pointer-events-none overflow-hidden'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-slate-200 dark:border-slate-700 max-h-[calc(100vh-4rem)] overflow-y-auto">
        {NAVIGATION_ITEMS.map((item) => (
          <Link 
            key={item.href}
            href={`/${locale}${item.href}`} 
            className={getLinkClassName(`/${locale}${item.href}`, baseLinkClasses)} 
            onClick={onLinkClick}
          >
            {dictionary.navigation[item.key] || item.label}
          </Link>
        ))}
        
        <a 
          href={EXTERNAL_LINKS.github.href} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" 
          onClick={onLinkClick}
        >
          <GitHubIcon className="w-5 h-5 mr-2" />
          {EXTERNAL_LINKS.github.label}
        </a>
      </div>
    </div>
    </>
  );
}