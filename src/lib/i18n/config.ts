export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'ko'],
} as const

export type Locale = (typeof i18n)['locales'][number]

export const localeNames: Record<Locale, string> = {
  en: 'English',
  ko: '한국어',
}

export const localeFlags: Record<Locale, string> = {
  en: '🇺🇸',
  ko: '🇰🇷',
}