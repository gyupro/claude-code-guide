import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n, type Locale } from './src/lib/i18n/config';
import { isValidLocale } from './src/lib/i18n/utils';

function getLocale(request: NextRequest): Locale {
  // Check if there's a locale in the pathname
  const pathname = request.nextUrl.pathname;
  const pathnameLocale = pathname.split('/')[1];
  
  if (isValidLocale(pathnameLocale)) {
    return pathnameLocale;
  }

  // Check for stored language preference in cookies
  const storedLocale = request.cookies.get('preferredLanguage')?.value;
  if (storedLocale && isValidLocale(storedLocale)) {
    return storedLocale;
  }

  // Check Accept-Language header
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    const browserLocales = acceptLanguage
      .split(',')
      .map(lang => lang.split(';')[0].split('-')[0].trim());
    
    for (const locale of browserLocales) {
      if (isValidLocale(locale)) {
        return locale;
      }
    }
  }

  return i18n.defaultLocale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Check if the pathname already includes a valid locale
  const pathnameLocale = pathname.split('/')[1];
  const pathnameHasLocale = isValidLocale(pathnameLocale);

  // Special handling for root path
  if (pathname === '/') {
    const locale = getLocale(request);
    const redirectUrl = new URL(`/${locale}`, request.url);
    
    // Set cookie for language preference
    const response = NextResponse.redirect(redirectUrl);
    response.cookies.set('preferredLanguage', locale, {
      maxAge: 60 * 60 * 24 * 365, // 1 year
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/'
    });
    
    return response;
  }

  // If pathname doesn't have a locale, redirect to add one
  if (!pathnameHasLocale) {
    const locale = getLocale(request);
    const redirectUrl = new URL(`/${locale}${pathname}`, request.url);
    
    const response = NextResponse.redirect(redirectUrl);
    response.cookies.set('preferredLanguage', locale, {
      maxAge: 60 * 60 * 24 * 365, // 1 year
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/'
    });
    
    return response;
  }

  // If pathname has a valid locale, continue normally
  if (pathnameHasLocale) {
    // Update cookie if different from current locale
    const currentLocale = pathnameLocale as Locale;
    const storedLocale = request.cookies.get('preferredLanguage')?.value;
    
    if (storedLocale !== currentLocale) {
      const response = NextResponse.next();
      response.cookies.set('preferredLanguage', currentLocale, {
        maxAge: 60 * 60 * 24 * 365, // 1 year
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/'
      });
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  // Match all paths except for:
  // - API routes
  // - Static files (images, fonts, etc.)
  // - Next.js internals
  // - PWA icons and manifest files
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|manifest.json|icon-.*\\.png|apple-icon.*\\.png|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'
  ]
};