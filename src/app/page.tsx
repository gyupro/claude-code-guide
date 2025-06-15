'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Check for stored language preference first
    const storedLocale = localStorage.getItem('preferredLanguage');
    if (storedLocale && ['en', 'ko', 'ja', 'zh', 'es', 'fr'].includes(storedLocale)) {
      router.replace(`/${storedLocale}`);
      return;
    }

    // Check browser language as fallback
    const browserLanguage = navigator.language.toLowerCase();
    
    // Language detection with priority order
    if (browserLanguage.startsWith('ko')) {
      router.replace('/ko');
    } else if (browserLanguage.startsWith('ja')) {
      router.replace('/ja');
    } else if (browserLanguage.startsWith('zh')) {
      router.replace('/zh');
    } else if (browserLanguage.startsWith('es')) {
      router.replace('/es');
    } else if (browserLanguage.startsWith('fr')) {
      router.replace('/fr');
    } else {
      // Default to English
      router.replace('/en');
    }
  }, [router]);

  // Loading state with minimal UI
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-zinc-100 dark:from-slate-900 dark:to-zinc-900">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-slate-600 dark:text-slate-300 text-sm">Loading...</p>
      </div>
    </div>
  );
}