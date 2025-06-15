import { type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import MCPClient from './MCPClient';

interface MCPPageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function MCPPage({ params }: MCPPageProps) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return <MCPClient locale={locale} dictionary={dictionary} />;
}