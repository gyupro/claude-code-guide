import { type Metadata } from 'next';
import { type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import DesktopAppClient from './DesktopAppClient';

interface DesktopAppPageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: DesktopAppPageProps): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  const title = `${(dictionary.navigation as any)?.desktopApp || 'Desktop App'} | Claude Code`;
  const description = locale === 'ko'
    ? 'Claude Code 데스크톱 앱으로 비주얼 디프, 다중 세션, 작업 스케줄링 등 네이티브 데스크톱 환경을 경험하세요.'
    : 'Experience Claude Code in a native desktop environment with visual diffs, multiple sessions, task scheduling, and more.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function DesktopAppPage({ params }: DesktopAppPageProps) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return <DesktopAppClient locale={locale} dictionary={dictionary} />;
}
