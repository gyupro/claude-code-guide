import { type Metadata } from 'next';
import NavigationHeader from '@/components/NavigationHeader';
import MobileMenu from '@/components/MobileMenu';
import { type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import HomePageClient from './HomePageClient';

interface HomePageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ 
  params 
}: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);
  
  return {
    title: dictionary.home?.heroTitle || dictionary.metadata?.title || 'Claude Code Guide',
    description: dictionary.home?.heroSubtitle || dictionary.metadata?.description || 'Master AI-assisted coding with Claude Code',
    openGraph: {
      title: dictionary.home?.heroTitle || 'Claude Code Guide',
      description: dictionary.home?.heroSubtitle || 'Master AI-assisted coding with Claude Code',
      images: ['/banner.png'],
    },
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return <HomePageClient locale={locale} dictionary={dictionary} />;
}