import { type Metadata } from 'next';
import { type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import GettingStartedClient from './GettingStartedClient';

interface GettingStartedPageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: GettingStartedPageProps): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);
  
  const title = dictionary.gettingStarted.title;
  const description = dictionary.gettingStarted.subtitle;
  
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

export default async function GettingStartedPage({ params }: GettingStartedPageProps) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return <GettingStartedClient locale={locale} dictionary={dictionary} />;
}