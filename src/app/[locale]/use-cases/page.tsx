import { type Metadata } from 'next';
import { type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import UseCasesClient from './UseCasesClient';

interface UseCasesPageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: UseCasesPageProps): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);
  
  const title = `${dictionary.navigation.useCases} | Claude Code`;
  const description = locale === 'ko' 
    ? 'Claude Code의 실제 활용 사례를 확인하세요. 코드 리뷰, 테스트 생성, 문서화, 디버깅 등 다양한 개발 시나리오에서의 활용법을 소개합니다.'
    : 'Explore real-world use cases of Claude Code. Discover how to leverage it for code review, test generation, documentation, debugging, and various development scenarios.';
  
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

export default async function UseCasesPage({ params }: UseCasesPageProps) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return <UseCasesClient locale={locale} dictionary={dictionary} />;
}