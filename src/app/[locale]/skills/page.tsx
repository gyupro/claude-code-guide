import { type Metadata } from 'next';
import { type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import SkillsClient from './SkillsClient';

interface SkillsPageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: SkillsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  const title = `${(dictionary.navigation as any)?.skills || 'Skills'} | Claude Code`;
  const description = locale === 'ko'
    ? 'Claude Code Agent Skills로 Claude의 기능을 확장하세요. 마크다운 파일로 맞춤형 워크플로우를 만들고 자동으로 적용되는 전문 지식을 구성하세요.'
    : 'Extend Claude capabilities with Agent Skills. Create custom workflows with markdown files and configure specialized knowledge that Claude applies automatically.';

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

export default async function SkillsPage({ params }: SkillsPageProps) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return <SkillsClient locale={locale} dictionary={dictionary} />;
}
