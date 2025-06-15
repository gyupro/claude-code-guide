import { type Metadata } from 'next';
import { type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import UsageGuideClient from './UsageGuideClient';

interface UsageGuidePageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: UsageGuidePageProps): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);
  
  const title = `${dictionary.navigation.usageGuide} | Claude Code`;
  const description = locale === 'ko' 
    ? 'Claude Code의 핵심 기능과 명령어를 체계적으로 학습하세요. 프로젝트 관리, 코드 작성, 디버깅 등 실무에 필요한 모든 사용법을 다룹니다.'
    : 'Learn the core features and commands of Claude Code systematically. Covers all practical usage including project management, code writing, and debugging.';
  
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

export default async function UsageGuidePage({ params }: UsageGuidePageProps) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return <UsageGuideClient locale={locale} dictionary={dictionary} />;
}