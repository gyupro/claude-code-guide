import { i18n, type Locale } from './config'

export function isValidLocale(locale: string): locale is Locale {
  return i18n.locales.includes(locale as Locale)
}

export function getValidLocale(locale: string | undefined): Locale {
  if (locale && isValidLocale(locale)) {
    return locale
  }
  return i18n.defaultLocale
}

export function detectBrowserLocale(): Locale {
  if (typeof window === 'undefined') {
    return i18n.defaultLocale
  }

  // Get browser language preference
  const browserLang = navigator.language.split('-')[0]
  
  // Check if browser language is supported
  if (isValidLocale(browserLang)) {
    return browserLang
  }

  return i18n.defaultLocale
}

export function formatPathname(pathname: string, locale: Locale): string {
  // Remove existing locale from pathname
  const segments = pathname.split('/').filter(Boolean)
  if (isValidLocale(segments[0])) {
    segments.shift()
  }
  
  // Add new locale
  return `/${locale}/${segments.join('/')}`
}

export function removeLocaleFromPathname(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean)
  if (isValidLocale(segments[0])) {
    segments.shift()
  }
  return `/${segments.join('/')}`
}