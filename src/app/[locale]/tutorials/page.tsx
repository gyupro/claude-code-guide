import { type Metadata } from 'next';
import { type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import TutorialsClient from './TutorialsClient';

interface TutorialsPageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: TutorialsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);
  
  const title = `${dictionary.navigation.tutorials} | Claude Code`;
  const description = locale === 'ko' 
    ? '실제 프로젝트를 통해 Claude Code 활용법을 배우세요. 웹 개발, API 구축, 자동화 스크립트 작성 등 다양한 튜토리얼을 제공합니다.'
    : 'Learn Claude Code through real projects. Various tutorials covering web development, API building, automation scripts, and more.';
  
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

export default async function TutorialsPage({ params }: TutorialsPageProps) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return <TutorialsClient locale={locale} dictionary={dictionary} />;
}