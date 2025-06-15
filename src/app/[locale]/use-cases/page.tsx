import { type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import UseCasesClient from './UseCasesClient';

interface UseCasesPageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function UseCasesPage({ params }: UseCasesPageProps) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return <UseCasesClient locale={locale} dictionary={dictionary} />;
}