import { type Metadata } from 'next';
import { type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import TipsClient from './TipsClient';

interface TipsPageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: TipsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);
  
  const title = `${dictionary.navigation.tips} | Claude Code`;
  const description = locale === 'ko' 
    ? 'Claude Code를 더 효율적으로 사용하는 실전 팁과 고급 기법을 배우세요. 프롬프트 엔지니어링, 성능 최적화, 워크플로우 개선 방법을 소개합니다.'
    : 'Learn practical tips and advanced techniques for using Claude Code more efficiently. Covers prompt engineering, performance optimization, and workflow improvements.';
  
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

export default async function TipsPage({ params }: TipsPageProps) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return <TipsClient locale={locale} dictionary={dictionary} />;
}