import { type Metadata } from 'next';
import { type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import WebAppClient from './WebAppClient';

interface WebAppPageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: WebAppPageProps): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  const title = `${(dictionary.navigation as any)?.webApp || 'Web App'} | Claude Code`;
  const description = locale === 'ko'
    ? '설치 없이 브라우저에서 Claude Code를 사용하세요. 클라우드 워크스페이스, 실시간 협업, Git 통합 등을 제공합니다.'
    : 'Use Claude Code directly in your browser with zero installation. Cloud workspaces, real-time collaboration, Git integration, and more.';

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

export default async function WebAppPage({ params }: WebAppPageProps) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return <WebAppClient locale={locale} dictionary={dictionary} />;
}
