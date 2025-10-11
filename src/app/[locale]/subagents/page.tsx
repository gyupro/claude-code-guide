import { type Metadata } from 'next';
import { type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import SubagentsClient from './SubagentsClient';

interface SubagentsPageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: SubagentsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  const title = `${(dictionary.navigation as any)?.subagents || 'Subagents'} | Claude Code`;
  const description = locale === 'ko'
    ? 'Claude Code의 서브에이전트 시스템으로 특화된 AI 작업을 자동화하세요. 코드 리뷰, 디버깅, 테스트 자동화 등 다양한 전문 에이전트를 활용하는 방법을 배워보세요.'
    : 'Automate specialized AI tasks with Claude Code subagents. Learn how to use expert agents for code review, debugging, test automation, and more.';

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

export default async function SubagentsPage({ params }: SubagentsPageProps) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return <SubagentsClient locale={locale} dictionary={dictionary} />;
}
