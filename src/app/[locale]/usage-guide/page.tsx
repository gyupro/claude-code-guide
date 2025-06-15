import { type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import UsageGuideClient from './UsageGuideClient';

interface UsageGuidePageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function UsageGuidePage({ params }: UsageGuidePageProps) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return <UsageGuideClient locale={locale} dictionary={dictionary} />;
}