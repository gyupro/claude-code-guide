import NavigationHeader from '@/components/NavigationHeader';
import MobileMenu from '@/components/MobileMenu';
import { type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import CommunityClient from './CommunityClient';

interface CommunityPageProps {
  params: { locale: Locale };
}

export default async function CommunityPage({ params }: CommunityPageProps) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return <CommunityClient locale={locale} dictionary={dictionary} />;
}