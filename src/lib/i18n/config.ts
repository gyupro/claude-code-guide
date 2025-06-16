export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'ko', 'ja', 'zh', 'es', 'fr'],
} as const

export type Locale = (typeof i18n)['locales'][number]

export const localeNames: Record<Locale, string> = {
  en: 'English',
  ko: '한국어',
  ja: '日本語', 
  zh: '中文',
  es: 'Español',
  fr: 'Français',
}

export const localeFlags: Record<Locale, string> = {
  en: '🇺🇸',
  ko: '🇰🇷',
  ja: '🇯🇵',
  zh: '🇨🇳',
  es: '🇪🇸',
  fr: '🇫🇷',
}