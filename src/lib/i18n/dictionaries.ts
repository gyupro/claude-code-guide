import { type Locale } from './config'

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  ko: () => import('./dictionaries/ko.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => {
  // 로컬 개발 환경에서의 안전장치
  if (!(locale in dictionaries)) {
    console.warn(`Dictionary for locale "${locale}" not found, falling back to English`)
    return dictionaries.en()
  }
  
  try {
    console.log(`Loading dictionary for locale: ${locale}`);
    const dictionary = await dictionaries[locale]()
    
    // 딕셔너리가 비어있거나 필수 구조가 없는 경우 영어로 폴백
    if (!dictionary || !dictionary.metadata || !dictionary.navigation || !dictionary.home) {
      console.warn(`Dictionary for locale "${locale}" is missing critical structure, falling back to English`)
      console.warn('Dictionary structure:', {
        hasDictionary: !!dictionary,
        hasMetadata: !!dictionary?.metadata,
        hasNavigation: !!dictionary?.navigation,
        hasHome: !!dictionary?.home
      });
      return dictionaries.en()
    }
    
    console.log(`Successfully loaded dictionary for locale: ${locale}`);
    return dictionary
  } catch (error) {
    console.error(`Failed to load dictionary for locale "${locale}":`, error)
    // 로드 실패 시 영어로 폴백
    return dictionaries.en()
  }
}

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>