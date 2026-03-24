import { type Metadata } from 'next';
import { type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import AgentTeamsClient from './AgentTeamsClient';

interface AgentTeamsPageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: AgentTeamsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  const title = `${(dictionary.navigation as any)?.agentTeams || 'Agent Teams'} | Claude Code`;
  const description = locale === 'ko'
    ? 'Claude Code 에이전트 팀으로 복잡한 작업을 여러 에이전트가 협업하여 처리하세요. 팀 아키텍처, 설정, 디스플레이 모드, 활용 사례를 알아보세요.'
    : 'Coordinate multiple Claude Code agents working together on complex tasks. Learn about team architecture, setup, display modes, and use cases.';

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

export default async function AgentTeamsPage({ params }: AgentTeamsPageProps) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return <AgentTeamsClient locale={locale} dictionary={dictionary} />;
}
