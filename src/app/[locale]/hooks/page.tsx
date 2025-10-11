import { type Metadata } from 'next';
import { type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import HooksClient from './HooksClient';

interface HooksPageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: HooksPageProps): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  const title = `${dictionary.navigation.hooks} | Claude Code`;
  const description = locale === 'ko'
    ? 'Claude Code의 이벤트 훅으로 워크플로우를 커스터마이즈하세요. 코드 포맷팅, 알림, 보안 검증 등을 자동화하는 방법을 배워보세요.'
    : 'Customize your workflow with Claude Code event hooks. Learn how to automate code formatting, notifications, security validation, and more.';

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

export default async function HooksPage({ params }: HooksPageProps) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return <HooksClient locale={locale} dictionary={dictionary} />;
}
