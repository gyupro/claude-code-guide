import { type Metadata } from 'next';
import { type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import BestPracticesClient from './BestPracticesClient';

interface BestPracticesPageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: BestPracticesPageProps): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  const title = `${(dictionary.navigation as any)?.bestPractices || 'Best Practices'} | Claude Code`;
  const description = locale === 'ko'
    ? 'Claude Code를 최대한 활용하기 위한 모범 사례. 컨텍스트 관리, 검증, 플랜 모드, 프롬프트 엔지니어링, 확장 전략을 배워보세요.'
    : 'Best practices for getting the most out of Claude Code. Learn about context management, verification, plan mode, prompt engineering, and scaling strategies.';

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

export default async function BestPracticesPage({ params }: BestPracticesPageProps) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return <BestPracticesClient locale={locale} dictionary={dictionary} />;
}
