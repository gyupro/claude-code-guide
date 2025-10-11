import { type Metadata } from 'next';
import { type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import PluginsClient from './PluginsClient';

interface PluginsPageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: PluginsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  const title = `${(dictionary.navigation as any)?.plugins || 'Plugins'} | Claude Code`;
  const description = locale === 'ko'
    ? 'Claude Code를 커스텀 명령어, 에이전트, 훅스, MCP 서버로 확장하세요. 플러그인 시스템으로 팀 전체의 생산성을 향상시키는 방법을 배워보세요.'
    : 'Extend Claude Code with custom commands, agents, hooks, and MCP servers. Learn how to boost team productivity with the plugin system.';

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

export default async function PluginsPage({ params }: PluginsPageProps) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return <PluginsClient locale={locale} dictionary={dictionary} />;
}
