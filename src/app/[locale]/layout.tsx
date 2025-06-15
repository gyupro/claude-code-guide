import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_KR } from "next/font/google";
import "@/app/globals.css";
import { i18n, type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import ClientLayout from './ClientLayout';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  display: 'swap',
  weight: ['300', '400', '500', '700'],
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ 
  params 
}: { 
  params: { locale: Locale } 
}): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);
  
  return {
    title: dictionary.metadata?.title || "Claude Code Usage Guide",
    description: dictionary.metadata?.description || "Master Claude Code with comprehensive guides and tutorials.",
    keywords: dictionary.metadata?.keywords || "Claude Code, AI coding, terminal, development tools",
    openGraph: {
      title: dictionary.metadata?.title || "Claude Code Usage Guide",
      description: dictionary.metadata?.description || "Master Claude Code with comprehensive guides and tutorials.",
      type: 'website',
      locale: locale === 'zh' ? 'zh-CN' : locale,
      url: `https://claude.develop-on.co.kr/${locale}`,
      siteName: "Claude Code Usage Guide",
    },
    twitter: {
      card: 'summary_large_image',
      title: dictionary.metadata?.title || "Claude Code Usage Guide",
      description: dictionary.metadata?.description || "Master Claude Code with comprehensive guides and tutorials.",
    },
    alternates: {
      canonical: `https://claude.develop-on.co.kr/${locale}`,
      languages: {
        'en': 'https://claude.develop-on.co.kr/en',
        'ko': 'https://claude.develop-on.co.kr/ko',
        'ja': 'https://claude.develop-on.co.kr/ja',
        'zh': 'https://claude.develop-on.co.kr/zh',
        'es': 'https://claude.develop-on.co.kr/es',
        'fr': 'https://claude.develop-on.co.kr/fr',
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);
  
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} ${notoSansKR.variable}`} lang={locale}>
      <ClientLayout dictionary={dictionary} locale={locale}>
        {children}
      </ClientLayout>
    </div>
  );
}