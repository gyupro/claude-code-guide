import { type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import TutorialsClient from './TutorialsClient';

interface TutorialsPageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function TutorialsPage({ params }: TutorialsPageProps) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return <TutorialsClient locale={locale} dictionary={dictionary} />;
}