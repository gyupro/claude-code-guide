'use client';

import { ThemeProvider } from '@/contexts/ThemeContext';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import { type Dictionary } from '@/lib/i18n/dictionaries';
import { type Locale } from '@/lib/i18n/config';

interface ClientLayoutProps {
  children: React.ReactNode;
  dictionary: Dictionary;
  locale: Locale;
}

export default function ClientLayout({ children, dictionary, locale }: ClientLayoutProps) {
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
        <div className="flex-grow">
          {children}
        </div>
        {/* Temporarily disable Footer to debug
        <Footer dictionary={dictionary} locale={locale} />
        */}
      </div>
    </ThemeProvider>
  );
}