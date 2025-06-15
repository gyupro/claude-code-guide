import Link from 'next/link'
import { type Dictionary } from '@/lib/i18n/dictionaries'
import { type Locale } from '@/lib/i18n/config'

interface FooterProps {
  dictionary: Dictionary
  locale: Locale
}

export default function Footer({ dictionary, locale }: FooterProps) {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* About section - full width on mobile, equal column on desktop */}
          <div className="lg:hidden">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {dictionary.footer.about.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {dictionary.footer.about.description}
            </p>
          </div>
          
          {/* Desktop: 3 equal columns, Mobile: Links and Resources side by side */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {/* About section - hidden on mobile, shown on desktop */}
            <div className="hidden lg:block">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {dictionary.footer.about.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {dictionary.footer.about.description}
              </p>
            </div>
            
            {/* Quick Links section */}
            <div className="flex flex-col justify-center items-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  {dictionary.footer.links.title}
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link href={`/${locale}/getting-started`} className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                      {dictionary.navigation.gettingStarted}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${locale}/usage-guide`} className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                      {dictionary.navigation.usageGuide}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${locale}/tutorials`} className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                      {dictionary.navigation.tutorials}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${locale}/community`} className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                      {dictionary.navigation.community}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Resources section */}
            <div className="flex flex-col justify-center items-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  {dictionary.footer.resources.title}
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a 
                      href="https://claude.ai/code" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    >
                      Claude Code
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://github.com/gyupro/claude-code-guide" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://docs.anthropic.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    >
                      {dictionary.footer.resources.documentation}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-600 dark:text-gray-400">
            {dictionary.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}