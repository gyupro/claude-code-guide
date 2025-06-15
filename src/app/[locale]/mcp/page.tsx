import { type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import MCPClient from './MCPClient';

interface MCPPageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function MCPPage({ params }: MCPPageProps) {
  try {
    const { locale } = await params;
    const dictionary = await getDictionary(locale);
    
    // Debug log
    console.log('MCP Page - Locale:', locale);
    console.log('MCP Page - Dictionary loaded:', !!dictionary);
    console.log('MCP Page - Dictionary has mcp:', !!dictionary?.mcp);
    console.log('MCP Page - Dictionary keys:', dictionary ? Object.keys(dictionary) : 'undefined');

    // Ensure dictionary is fully loaded before rendering
    if (!dictionary || typeof dictionary !== 'object') {
      console.error('Dictionary is not an object:', typeof dictionary);
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Loading...</h1>
            <p className="text-gray-600">Dictionary is being loaded</p>
          </div>
        </div>
      );
    }

    return <MCPClient locale={locale} dictionary={dictionary} />;
  } catch (error) {
    console.error('MCP Page Error:', error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Error loading page</h1>
          <p className="text-gray-600">Please try refreshing the page</p>
        </div>
      </div>
    );
  }
}