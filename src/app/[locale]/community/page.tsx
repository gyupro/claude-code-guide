import { type Metadata } from 'next';
import NavigationHeader from '@/components/NavigationHeader';
import MobileMenu from '@/components/MobileMenu';
import { type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import CommunityClient from './CommunityClient';

interface CommunityPageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: CommunityPageProps): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);
  
  const title = `${dictionary.navigation.community} | Claude Code`;
  const description = locale === 'ko' 
    ? 'Claude Code 커뮤니티에 참여하세요. 다른 개발자들과 경험을 공유하고, 질문하고, 함께 성장하는 공간입니다. Discord, GitHub, 포럼에서 만나보세요.'
    : 'Join the Claude Code community. Share experiences with other developers, ask questions, and grow together. Connect on Discord, GitHub, and forums.';
  
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

export default async function CommunityPage({ params }: CommunityPageProps) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return <CommunityClient locale={locale} dictionary={dictionary} />;
}