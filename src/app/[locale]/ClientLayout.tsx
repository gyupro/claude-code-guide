'use client';

import { ThemeProvider } from '@/contexts/ThemeContext';
import Footer from '@/components/Footer';
import NavigationHeader from '@/components/NavigationHeader';
import MobileMenu from '@/components/MobileMenu';
import { useNavigationMenu } from '@/hooks/useNavigationMenu';
import { useEffect } from 'react';
import { type Dictionary } from '@/lib/i18n/dictionaries';
import { type Locale } from '@/lib/i18n/config';

interface ClientLayoutProps {
  children: React.ReactNode;
  dictionary: Dictionary;
  locale: Locale;
}

export default function ClientLayout({ children, dictionary, locale }: ClientLayoutProps) {
  const { mobileMenu, helpers } = useNavigationMenu();

  // Ensure theme is applied on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const theme = savedTheme || systemTheme;

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
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

        <div className="flex-grow">
          {children}
        </div>
        <Footer dictionary={dictionary} locale={locale} />
      </div>
    </ThemeProvider>
  );
}