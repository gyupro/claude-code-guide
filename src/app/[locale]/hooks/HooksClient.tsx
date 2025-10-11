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

interface HooksClientProps {
  locale: Locale;
  dictionary: any;
}

export default function HooksClient({ locale, dictionary }: HooksClientProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-zinc-100 dark:from-slate-900 dark:to-zinc-900">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {dictionary.hooks?.title || 'Hooks'}
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            {dictionary.hooks?.subtitle || 'Customize Claude Code behavior by responding to lifecycle events'}
          </p>
        </div>

        {/* What are Hooks? */}
        <section className="mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              {dictionary.hooks?.whatAreHooks?.title || 'What are Hooks?'}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
              {dictionary.hooks?.whatAreHooks?.description ||
                'Hooks are JavaScript functions that execute in response to specific events in Claude Code. They allow you to customize behavior, enforce policies, integrate external tools, and automate workflows.'}
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    {dictionary.hooks?.whatAreHooks?.eventDriven || 'Event-Driven'}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {dictionary.hooks?.whatAreHooks?.eventDrivenDesc ||
                      'Respond to specific lifecycle events automatically'}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    {dictionary.hooks?.whatAreHooks?.customizable || 'Fully Customizable'}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {dictionary.hooks?.whatAreHooks?.customizableDesc ||
                      'Write JavaScript to customize any behavior'}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    {dictionary.hooks?.whatAreHooks?.policiesEnforcement || 'Policy Enforcement'}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {dictionary.hooks?.whatAreHooks?.policiesEnforcementDesc ||
                      'Enforce team standards and security policies'}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    {dictionary.hooks?.whatAreHooks?.integrations || 'External Integrations'}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {dictionary.hooks?.whatAreHooks?.integrationsDesc ||
                      'Connect to external services and tools'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Available Hook Events */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
            {dictionary.hooks?.availableHooks?.title || 'Available Hook Events'}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* PreToolUse */}
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                  PreToolUse
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                {dictionary.hooks?.availableHooks?.preToolUse?.desc ||
                  'Fired before Claude uses any tool. Validate, modify, or block tool usage.'}
              </p>
              <div className="text-xs text-slate-500 dark:text-slate-500">
                {dictionary.hooks?.availableHooks?.preToolUse?.useCase || 'Use case: Security validation, file protection'}
              </div>
            </div>

            {/* PostToolUse */}
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                  PostToolUse
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                {dictionary.hooks?.availableHooks?.postToolUse?.desc ||
                  'Fired after a tool completes. Process results, trigger notifications, or log actions.'}
              </p>
              <div className="text-xs text-slate-500 dark:text-slate-500">
                {dictionary.hooks?.availableHooks?.postToolUse?.useCase || 'Use case: Auto-formatting, logging, metrics'}
              </div>
            </div>

            {/* UserPromptSubmit */}
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                  UserPromptSubmit
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                {dictionary.hooks?.availableHooks?.userPromptSubmit?.desc ||
                  'Fired when user submits a prompt. Modify prompts, add context, or trigger workflows.'}
              </p>
              <div className="text-xs text-slate-500 dark:text-slate-500">
                {dictionary.hooks?.availableHooks?.userPromptSubmit?.useCase || 'Use case: Context injection, prompt enhancement'}
              </div>
            </div>

            {/* Notification */}
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                  Notification
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                {dictionary.hooks?.availableHooks?.notification?.desc ||
                  'Fired when Claude sends a notification. Customize notification behavior.'}
              </p>
              <div className="text-xs text-slate-500 dark:text-slate-500">
                {dictionary.hooks?.availableHooks?.notification?.useCase || 'Use case: Custom alerts, team notifications'}
              </div>
            </div>

            {/* SessionStart */}
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-cyan-100 dark:bg-cyan-900 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                  SessionStart
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                {dictionary.hooks?.availableHooks?.sessionStart?.desc ||
                  'Fired when a Claude session starts. Initialize resources or load context.'}
              </p>
              <div className="text-xs text-slate-500 dark:text-slate-500">
                {dictionary.hooks?.availableHooks?.sessionStart?.useCase || 'Use case: Session setup, environment checks'}
              </div>
            </div>

            {/* SessionEnd */}
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                  SessionEnd
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                {dictionary.hooks?.availableHooks?.sessionEnd?.desc ||
                  'Fired when a session ends. Clean up resources or save session data.'}
              </p>
              <div className="text-xs text-slate-500 dark:text-slate-500">
                {dictionary.hooks?.availableHooks?.sessionEnd?.useCase || 'Use case: Cleanup, analytics, session reports'}
              </div>
            </div>
          </div>
        </section>

        {/* Hook Examples */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
            {dictionary.hooks?.examples?.title || 'Practical Examples'}
          </h2>

          {/* Example 1: Code Formatting */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200 dark:border-blue-800 p-8 mb-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              {dictionary.hooks?.examples?.autoFormat?.title || 'Auto-Format Code After Edits'}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              {dictionary.hooks?.examples?.autoFormat?.desc ||
                'Automatically run Prettier on files after Claude edits them'}
            </p>
            <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-slate-400 font-mono">hooks/post-tool-use.js</span>
                <CopyButton
                  text={`// Auto-format files after Edit tool
export async function postToolUse({ tool, result }) {
  if (tool.name === 'Edit' && result.success) {
    const { execSync } = require('child_process');
    try {
      execSync(\`prettier --write "\${tool.params.file_path}"\`);
      console.log('✓ Formatted', tool.params.file_path);
    } catch (error) {
      console.error('Format failed:', error.message);
    }
  }
}`}
                  dictionary={dictionary}
                />
              </div>
              <pre className="text-sm text-green-400 font-mono overflow-x-auto">
{`// Auto-format files after Edit tool
export async function postToolUse({ tool, result }) {
  if (tool.name === 'Edit' && result.success) {
    const { execSync } = require('child_process');
    try {
      execSync(\`prettier --write "\${tool.params.file_path}"\`);
      console.log('✓ Formatted', tool.params.file_path);
    } catch (error) {
      console.error('Format failed:', error.message);
    }
  }
}`}
              </pre>
            </div>
          </div>

          {/* Example 2: File Protection */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200 dark:border-purple-800 p-8 mb-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              {dictionary.hooks?.examples?.fileProtection?.title || 'Protect Sensitive Files'}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              {dictionary.hooks?.examples?.fileProtection?.desc ||
                'Prevent Claude from editing critical configuration files'}
            </p>
            <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-slate-400 font-mono">hooks/pre-tool-use.js</span>
                <CopyButton
                  text={`// Protect sensitive files
export async function preToolUse({ tool }) {
  const protectedFiles = [
    '.env',
    'credentials.json',
    'package-lock.json'
  ];

  if (['Edit', 'Write'].includes(tool.name)) {
    const filePath = tool.params.file_path;
    if (protectedFiles.some(f => filePath.includes(f))) {
      return {
        allow: false,
        reason: \`Cannot modify protected file: \${filePath}\`
      };
    }
  }

  return { allow: true };
}`}
                  dictionary={dictionary}
                />
              </div>
              <pre className="text-sm text-green-400 font-mono overflow-x-auto">
{`// Protect sensitive files
export async function preToolUse({ tool }) {
  const protectedFiles = [
    '.env',
    'credentials.json',
    'package-lock.json'
  ];

  if (['Edit', 'Write'].includes(tool.name)) {
    const filePath = tool.params.file_path;
    if (protectedFiles.some(f => filePath.includes(f))) {
      return {
        allow: false,
        reason: \`Cannot modify protected file: \${filePath}\`
      };
    }
  }

  return { allow: true };
}`}
              </pre>
            </div>
          </div>

          {/* Example 3: Slack Notifications */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-800 p-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              {dictionary.hooks?.examples?.slackNotify?.title || 'Send Slack Notifications'}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              {dictionary.hooks?.examples?.slackNotify?.desc ||
                'Notify team when deployment happens'}
            </p>
            <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-slate-400 font-mono">hooks/post-tool-use.js</span>
                <CopyButton
                  text={`// Notify team on deployment
export async function postToolUse({ tool, result }) {
  if (tool.name === 'Bash' &&
      tool.params.command.includes('deploy')) {
    const webhook = process.env.SLACK_WEBHOOK;
    await fetch(webhook, {
      method: 'POST',
      body: JSON.stringify({
        text: \`🚀 Deployment completed!
Success: \${result.success}
Command: \${tool.params.command}\`
      })
    });
  }
}`}
                  dictionary={dictionary}
                />
              </div>
              <pre className="text-sm text-green-400 font-mono overflow-x-auto">
{`// Notify team on deployment
export async function postToolUse({ tool, result }) {
  if (tool.name === 'Bash' &&
      tool.params.command.includes('deploy')) {
    const webhook = process.env.SLACK_WEBHOOK;
    await fetch(webhook, {
      method: 'POST',
      body: JSON.stringify({
        text: \`🚀 Deployment completed!
Success: \${result.success}
Command: \${tool.params.command}\`
      })
    });
  }
}`}
              </pre>
            </div>
          </div>
        </section>

        {/* Security Considerations */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-xl border border-red-200 dark:border-red-800 p-8">
            <div className="flex items-start mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {dictionary.hooks?.security?.title || 'Security Considerations'}
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {dictionary.hooks?.security?.description ||
                    'Hooks execute arbitrary JavaScript code. Follow these security best practices:'}
                </p>
              </div>
            </div>
            <div className="space-y-3 ml-16">
              <div className="flex items-start">
                <span className="text-red-600 dark:text-red-400 mr-2 mt-1">⚠</span>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {dictionary.hooks?.security?.item1 || 'Never store secrets in hook files - use environment variables'}
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-red-600 dark:text-red-400 mr-2 mt-1">⚠</span>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {dictionary.hooks?.security?.item2 || 'Validate all inputs before executing external commands'}
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-red-600 dark:text-red-400 mr-2 mt-1">⚠</span>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {dictionary.hooks?.security?.item3 || 'Review hooks from external sources before using them'}
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-red-600 dark:text-red-400 mr-2 mt-1">⚠</span>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {dictionary.hooks?.security?.item4 || 'Use try-catch blocks to handle errors gracefully'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              {dictionary.hooks?.bestPractices?.title || 'Best Practices'}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    {dictionary.hooks?.bestPractices?.keepSimple?.title || 'Keep Hooks Simple'}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {dictionary.hooks?.bestPractices?.keepSimple?.desc ||
                      'Each hook should do one thing well. Complex logic can slow down Claude.'}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-green-600 dark:text-green-400 font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    {dictionary.hooks?.bestPractices?.errorHandling?.title || 'Handle Errors Gracefully'}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {dictionary.hooks?.bestPractices?.errorHandling?.desc ||
                      'Always use try-catch blocks and provide meaningful error messages.'}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-purple-600 dark:text-purple-400 font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    {dictionary.hooks?.bestPractices?.async?.title || 'Use Async/Await'}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {dictionary.hooks?.bestPractices?.async?.desc ||
                      'Hooks support async functions for external API calls and file operations.'}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-orange-600 dark:text-orange-400 font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    {dictionary.hooks?.bestPractices?.testing?.title || 'Test Your Hooks'}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {dictionary.hooks?.bestPractices?.testing?.desc ||
                      'Test hooks thoroughly before deploying to avoid disrupting workflows.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              {dictionary.hooks?.cta?.title || 'Ready to Customize Your Workflow?'}
            </h2>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              {dictionary.hooks?.cta?.description ||
                'Start creating hooks to automate your team workflows and enforce your development standards'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`/${locale}/getting-started`}
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-purple-50 transition-colors"
              >
                {dictionary.common?.getStarted || 'Get Started'}
              </a>
              <a
                href={`/${locale}/plugins`}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                {dictionary.navigation?.plugins || 'Learn About Plugins'}
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
