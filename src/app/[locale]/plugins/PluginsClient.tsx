'use client';

import { useState } from 'react';
import { type Locale } from '@/lib/i18n/config';

function CopyButton({ text, dictionary }: { text: string; dictionary?: any }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error(dictionary?.common?.copyError || 'Copy failed:', err);
    }
  };

  return (
    <button
      onClick={copyToClipboard}
      className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
      title="Copy to clipboard"
    >
      {copied ? (
        <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )}
    </button>
  );
}

interface PluginsClientProps {
  locale: Locale;
  dictionary: any;
}

export default function PluginsClient({ locale, dictionary }: PluginsClientProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-zinc-100 dark:from-slate-900 dark:to-zinc-900">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {dictionary.plugins?.title || 'Plugins'}
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            {dictionary.plugins?.subtitle || 'Extend Claude Code with custom commands, agents, hooks, and MCP servers'}
          </p>
        </div>

        {/* What are Plugins? */}
        <section className="mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              {dictionary.plugins?.whatArePlugins?.title || 'What are Plugins?'}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
              {dictionary.plugins?.whatArePlugins?.description ||
                'Plugins allow you to extend Claude Code with custom functionality that can be shared across your team or the entire community. Create reusable commands, specialized agents, event hooks, and MCP server integrations.'}
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    {dictionary.plugins?.whatArePlugins?.customCommands || 'Custom Commands'}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {dictionary.plugins?.whatArePlugins?.customCommandsDesc ||
                      'Create reusable slash commands for common workflows'}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    {dictionary.plugins?.whatArePlugins?.teamSharing || 'Team Sharing'}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {dictionary.plugins?.whatArePlugins?.teamSharingDesc ||
                      'Share plugins across your organization'}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    {dictionary.plugins?.whatArePlugins?.eventHooks || 'Event Hooks'}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {dictionary.plugins?.whatArePlugins?.eventHooksDesc ||
                      'Respond to events in Claude Code lifecycle'}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    {dictionary.plugins?.whatArePlugins?.mcpIntegration || 'MCP Integration'}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {dictionary.plugins?.whatArePlugins?.mcpIntegrationDesc ||
                      'Bundle MCP servers with your plugins'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Plugin Structure */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200 dark:border-blue-800 p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              {dictionary.plugins?.pluginStructure?.title || 'Plugin Structure'}
            </h2>
            <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-6 mb-6 overflow-x-auto">
              <pre className="text-sm text-green-400 font-mono">
{`my-plugin/
├── .claude-plugin/
│   └── plugin.json      # Required: Plugin manifest
├── commands/            # Optional: Slash commands
│   ├── review.md
│   └── deploy.md
├── agents/              # Optional: Custom subagents
│   └── code-reviewer/
│       └── agent.md
├── skills/              # Optional: Agent Skills (NEW)
│   └── my-skill/
│       └── SKILL.md
├── hooks/               # Optional: Event handlers
│   └── hooks.json
├── .mcp.json            # Optional: MCP servers
└── .lsp.json            # Optional: LSP servers (NEW)`}
              </pre>
            </div>
            <div className="space-y-4">
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center">
                  <span className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded flex items-center justify-center text-blue-600 dark:text-blue-400 text-xs mr-2">1</span>
                  {dictionary.plugins?.pluginStructure?.step1 || 'plugin.json - Plugin Manifest'}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 ml-8">
                  {dictionary.plugins?.pluginStructure?.step1Desc ||
                    'Define your plugin name, version, description, and what it provides'}
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center">
                  <span className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded flex items-center justify-center text-green-600 dark:text-green-400 text-xs mr-2">2</span>
                  {dictionary.plugins?.pluginStructure?.step2 || 'commands/ - Reusable Commands'}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 ml-8">
                  {dictionary.plugins?.pluginStructure?.step2Desc ||
                    'Create markdown files that define custom slash commands'}
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center">
                  <span className="w-6 h-6 bg-purple-100 dark:bg-purple-900 rounded flex items-center justify-center text-purple-600 dark:text-purple-400 text-xs mr-2">3</span>
                  {dictionary.plugins?.pluginStructure?.step3 || 'agents/ - Specialized Agents'}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 ml-8">
                  {dictionary.plugins?.pluginStructure?.step3Desc ||
                    'Bundle pre-configured subagents with specific expertise'}
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center">
                  <span className="w-6 h-6 bg-orange-100 dark:bg-orange-900 rounded flex items-center justify-center text-orange-600 dark:text-orange-400 text-xs mr-2">4</span>
                  {dictionary.plugins?.pluginStructure?.step4 || 'hooks/ - Event Handlers'}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 ml-8">
                  {dictionary.plugins?.pluginStructure?.step4Desc ||
                    'JavaScript files that respond to Claude Code events'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Creating a Plugin */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
            {dictionary.plugins?.creatingPlugin?.title || 'Creating Your First Plugin'}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Example: Custom Command */}
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                {dictionary.plugins?.creatingPlugin?.customCommand?.title || 'Custom Command'}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                {dictionary.plugins?.creatingPlugin?.customCommand?.desc ||
                  'Create a /deploy command for your team'}
              </p>
              <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-3">
                <pre className="text-xs text-green-400 font-mono overflow-x-auto">
{`# commands/deploy.md
Run tests, build, and deploy to production.
Ensure all checks pass before deployment.`}
                </pre>
              </div>
            </div>

            {/* Example: Plugin Manifest */}
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                {dictionary.plugins?.creatingPlugin?.manifest?.title || 'Plugin Manifest'}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                {dictionary.plugins?.creatingPlugin?.manifest?.desc ||
                  'Define plugin metadata in plugin.json'}
              </p>
              <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-3">
                <pre className="text-xs text-green-400 font-mono overflow-x-auto">
{`{
  "name": "team-workflows",
  "version": "1.0.0",
  "description": "Team deployment workflows",
  "author": "Your Team"
}`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Plugin Distribution */}
        <section className="mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              {dictionary.plugins?.distribution?.title || 'Plugin Distribution'}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  {dictionary.plugins?.distribution?.project?.title || 'Project-Level'}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {dictionary.plugins?.distribution?.project?.desc ||
                    'Check into version control with your project'}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  {dictionary.plugins?.distribution?.team?.title || 'Team Registry'}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {dictionary.plugins?.distribution?.team?.desc ||
                    'Share across your organization'}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  {dictionary.plugins?.distribution?.marketplace?.title || 'Plugin Marketplace'}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {dictionary.plugins?.distribution?.marketplace?.desc ||
                    'Publish to the community marketplace'}
                </p>
              </div>
            </div>

            {/* Plugin CLI Commands - NEW */}
            <div className="mt-8 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg border-2 border-green-500 dark:border-green-400 relative">
              <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded">NEW</div>
              <h3 className="text-lg font-semibold text-green-900 dark:text-green-300 mb-4">
                {dictionary.plugins?.distribution?.cli?.title || 'Plugin Marketplace CLI'}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-900 dark:bg-slate-800 rounded p-3">
                  <code className="text-green-400 font-mono text-sm">claude plugins search &lt;query&gt;</code>
                  <p className="text-slate-400 text-xs mt-1">Search plugins</p>
                </div>
                <div className="bg-slate-900 dark:bg-slate-800 rounded p-3">
                  <code className="text-green-400 font-mono text-sm">claude plugins install &lt;name&gt;</code>
                  <p className="text-slate-400 text-xs mt-1">Install plugin</p>
                </div>
                <div className="bg-slate-900 dark:bg-slate-800 rounded p-3">
                  <code className="text-green-400 font-mono text-sm">claude plugins list</code>
                  <p className="text-slate-400 text-xs mt-1">List installed</p>
                </div>
                <div className="bg-slate-900 dark:bg-slate-800 rounded p-3">
                  <code className="text-green-400 font-mono text-sm">claude plugins update</code>
                  <p className="text-slate-400 text-xs mt-1">Update all</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LSP Server Support - NEW Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border-2 border-blue-500 dark:border-blue-400 p-8 relative">
            <div className="absolute -top-3 -right-3 bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-medium">NEW</div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              {dictionary.plugins?.lspSupport?.title || 'LSP Server Support'}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              {dictionary.plugins?.lspSupport?.description || 'Plugins can now bundle Language Server Protocol (LSP) servers for enhanced language support.'}
            </p>
            <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-slate-400 font-mono">.lsp.json</span>
                <CopyButton text={`{
  "servers": {
    "typescript": {
      "command": "typescript-language-server",
      "args": ["--stdio"]
    },
    "python": {
      "command": "pylsp"
    }
  }
}`} dictionary={dictionary} />
              </div>
              <pre className="text-sm text-green-400 font-mono overflow-x-auto">
{`{
  "servers": {
    "typescript": {
      "command": "typescript-language-server",
      "args": ["--stdio"]
    },
    "python": {
      "command": "pylsp"
    }
  }
}`}
              </pre>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Auto-completion</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Enhanced code suggestions</p>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Diagnostics</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Real-time error detection</p>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Go to Definition</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Navigate codebase easily</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
            {dictionary.plugins?.useCases?.title || 'Plugin Use Cases'}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border border-blue-200 dark:border-blue-800 p-6">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">
                {dictionary.plugins?.useCases?.teamWorkflows?.title || 'Team Workflows'}
              </h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  {dictionary.plugins?.useCases?.teamWorkflows?.item1 || 'Standardized deployment procedures'}
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  {dictionary.plugins?.useCases?.teamWorkflows?.item2 || 'Code review templates'}
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  {dictionary.plugins?.useCases?.teamWorkflows?.item3 || 'Documentation generation'}
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200 dark:border-purple-800 p-6">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">
                {dictionary.plugins?.useCases?.domainExperts?.title || 'Domain Experts'}
              </h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  {dictionary.plugins?.useCases?.domainExperts?.item1 || 'Security audit specialists'}
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  {dictionary.plugins?.useCases?.domainExperts?.item2 || 'Database optimization agents'}
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  {dictionary.plugins?.useCases?.domainExperts?.item3 || 'API documentation generators'}
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              {dictionary.plugins?.bestPractices?.title || 'Best Practices'}
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    {dictionary.plugins?.bestPractices?.documentation?.title || 'Document Thoroughly'}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {dictionary.plugins?.bestPractices?.documentation?.desc ||
                      'Provide clear README files explaining what your plugin does and how to use it'}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-green-600 dark:text-green-400 font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    {dictionary.plugins?.bestPractices?.versioning?.title || 'Use Semantic Versioning'}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {dictionary.plugins?.bestPractices?.versioning?.desc ||
                      'Follow semantic versioning (major.minor.patch) for better compatibility management'}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-purple-600 dark:text-purple-400 font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    {dictionary.plugins?.bestPractices?.testing?.title || 'Test Your Plugins'}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {dictionary.plugins?.bestPractices?.testing?.desc ||
                      'Validate plugins in different scenarios before sharing with your team'}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-orange-600 dark:text-orange-400 font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    {dictionary.plugins?.bestPractices?.security?.title || 'Security First'}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {dictionary.plugins?.bestPractices?.security?.desc ||
                      'Never include secrets in plugins. Use environment variables for sensitive data'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              {dictionary.plugins?.cta?.title || 'Ready to Create Your First Plugin?'}
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              {dictionary.plugins?.cta?.description ||
                'Start building custom functionality and share it with your team or the entire community'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`/${locale}/getting-started`}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                {dictionary.common?.getStarted || 'Get Started'}
              </a>
              <a
                href={`/${locale}/hooks`}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                {dictionary.navigation?.hooks || 'Learn About Hooks'}
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
