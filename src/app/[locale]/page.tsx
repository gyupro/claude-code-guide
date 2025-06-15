import NavigationHeader from '@/components/NavigationHeader';
import MobileMenu from '@/components/MobileMenu';
import { type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import HomePageClient from './HomePageClient';

interface HomePageProps {
  params: { locale: Locale };
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return <HomePageClient locale={locale} dictionary={dictionary} />;
}