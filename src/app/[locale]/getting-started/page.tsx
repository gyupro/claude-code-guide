import { type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import GettingStartedClient from './GettingStartedClient';

interface GettingStartedPageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function GettingStartedPage({ params }: GettingStartedPageProps) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return <GettingStartedClient locale={locale} dictionary={dictionary} />;
}