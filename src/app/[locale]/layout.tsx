import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_KR } from "next/font/google";
import Script from "next/script";
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
  params: Promise<{ locale: Locale }> 
}): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);
  
  // SEO optimized locale mapping
  const localeMap: Record<Locale, string> = {
    'en': 'en_US',
    'ko': 'ko_KR',
    'ja': 'ja_JP',
    'zh': 'zh_CN',
  };

  const baseUrl = 'https://claude.develop-on.co.kr';
  const currentUrl = `${baseUrl}/${locale}`;
  
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: dictionary.metadata?.title || "Claude Code Guide",
      template: `%s | ${dictionary.metadata?.title || "Claude Code Guide"}`
    },
    description: dictionary.metadata?.description || "Master Claude Code with comprehensive guides and tutorials.",
    keywords: dictionary.metadata?.keywords || "Claude Code, AI coding, terminal, development tools",
    authors: [{ name: 'Claude Code Guide Team' }],
    creator: 'gyupro89',
    publisher: 'Claude Code Guide',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title: dictionary.metadata?.title || "Claude Code Guide",
      description: dictionary.metadata?.description || "Master Claude Code with comprehensive guides and tutorials.",
      type: 'website',
      locale: localeMap[locale],
      url: currentUrl,
      siteName: "Claude Code Guide",
      images: [
        {
          url: '/banner.png',
          width: 1200,
          height: 630,
          alt: dictionary.metadata?.title || "Claude Code Guide",
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: dictionary.metadata?.title || "Claude Code Guide",
      description: dictionary.metadata?.description || "Master Claude Code with comprehensive guides and tutorials.",
      images: ['/banner.png'],
      creator: '@gyupro89',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: currentUrl,
      languages: {
        'en': `${baseUrl}/en`,
        'ko': `${baseUrl}/ko`,
        'ja': `${baseUrl}/ja`,
        'zh': `${baseUrl}/zh`,
        'x-default': `${baseUrl}/en`,
      },
    },
    manifest: '/manifest.json',
    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-icon.png' },
      ],
    },
    verification: {
      google: 'google-site-verification-code',
      yandex: 'yandex-verification-code',
      yahoo: 'yahoo-verification-code',
    },
    category: 'technology',
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);
  
  // JSON-LD Structured Data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: dictionary.metadata?.title || 'Claude Code Guide',
    description: dictionary.metadata?.description || 'Master Claude Code with comprehensive guides and tutorials',
    url: `https://claude.develop-on.co.kr/${locale}`,
    inLanguage: locale,
    author: {
      '@type': 'Person',
      name: 'gyupro89',
      email: 'gyupro89@gmail.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Claude Code Guide',
      logo: {
        '@type': 'ImageObject',
        url: 'https://claude.develop-on.co.kr/banner.png'
      }
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `https://claude.develop-on.co.kr/${locale}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    },
    hasPart: [
      {
        '@type': 'WebPage',
        name: dictionary.navigation?.gettingStarted || 'Getting Started',
        url: `https://claude.develop-on.co.kr/${locale}/getting-started`
      },
      {
        '@type': 'WebPage',
        name: dictionary.navigation?.usageGuide || 'Usage Guide',
        url: `https://claude.develop-on.co.kr/${locale}/usage-guide`
      },
      {
        '@type': 'WebPage',
        name: dictionary.navigation?.tutorials || 'Tutorials',
        url: `https://claude.develop-on.co.kr/${locale}/tutorials`
      },
      {
        '@type': 'WebPage',
        name: dictionary.navigation?.mcp || 'MCP Protocol',
        url: `https://claude.develop-on.co.kr/${locale}/mcp`
      }
    ]
  };

  // Breadcrumb JSON-LD
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: dictionary.navigation?.home || 'Home',
        item: `https://claude.develop-on.co.kr/${locale}`
      }
    ]
  };
  
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="alternate" hrefLang="x-default" href="https://claude.develop-on.co.kr/en" />
        <link rel="alternate" hrefLang="en" href="https://claude.develop-on.co.kr/en" />
        <link rel="alternate" hrefLang="ko" href="https://claude.develop-on.co.kr/ko" />
        <link rel="alternate" hrefLang="ja" href="https://claude.develop-on.co.kr/ja" />
        <link rel="alternate" hrefLang="zh" href="https://claude.develop-on.co.kr/zh" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${notoSansKR.variable} antialiased`} suppressHydrationWarning>
        <Script id="theme-script" strategy="beforeInteractive">
          {`try {
            const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
            if (theme === 'dark') {
              document.documentElement.classList.add('dark');
            }
          } catch {}`}
        </Script>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6992232389489218"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VX16G6RCVS"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-VX16G6RCVS');`}
        </Script>
        <ClientLayout dictionary={dictionary} locale={locale}>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}