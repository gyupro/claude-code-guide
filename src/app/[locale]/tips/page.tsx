import { type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import TipsClient from './TipsClient';

interface TipsPageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function TipsPage({ params }: TipsPageProps) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return <TipsClient locale={locale} dictionary={dictionary} />;
}