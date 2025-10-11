'use client';

import { MutableRefObject, useState } from 'react';
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
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const toggleSection = (key: string) => {
    setExpandedSections((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      return newSet;
    });
  };

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
          {NAVIGATION_ITEMS.map((item) => {
            // Check if item has children (collapsible section)
            if (item.children && item.children.length > 0) {
              const isExpanded = expandedSections.has(item.key);

              return (
                <div key={item.key} className="space-y-1">
                  {/* Section header */}
                  <button
                    onClick={() => toggleSection(item.key)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors`}
                  >
                    <span>{dictionary.navigation[item.key] || item.label}</span>
                    <svg
                      className={`w-5 h-5 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Collapsible children */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isExpanded ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="pl-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.key}
                          href={`/${locale}${child.href}`}
                          className={`block px-3 py-2 rounded-md text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors`}
                          onClick={onLinkClick}
                        >
                          {dictionary.navigation[child.key] || child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            // Regular link without children
            return (
              <Link
                key={item.key}
                href={`/${locale}${item.href}`}
                className={getLinkClassName(`/${locale}${item.href}`, baseLinkClasses)}
                onClick={onLinkClick}
              >
                {dictionary.navigation[item.key] || item.label}
              </Link>
            );
          })}

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