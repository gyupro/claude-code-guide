import { type Metadata } from 'next';
import { type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import ThirdPartyToolsClient from './ThirdPartyToolsClient';

interface ThirdPartyToolsPageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: ThirdPartyToolsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  const title = `${(dictionary.navigation as Record<string, string>)?.thirdPartyTools || 'Third-Party Tools'} | Claude Code`;
  const description = locale === 'ko'
    ? 'OpenCode와 Oh My OpenCode 등 Claude Code 생태계의 서드파티 도구들을 알아보세요. 오픈소스 대안과 확장 도구들을 비교하고 선택하세요.'
    : 'Explore third-party tools in the Claude Code ecosystem like OpenCode and Oh My OpenCode. Compare open-source alternatives and extension tools.';

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

export default async function ThirdPartyToolsPage({ params }: ThirdPartyToolsPageProps) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return <ThirdPartyToolsClient locale={locale} dictionary={dictionary} />;
}
