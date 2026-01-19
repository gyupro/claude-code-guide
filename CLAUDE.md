# CLAUDE.md

This file provides comprehensive guidance to Claude Code (claude.ai/code) when working with this repository.

## Project Overview

**Claude Code 사용 가이드** is a multilingual developer guide website focused on Claude Code education, tutorials, and best practices. It serves as the primary learning resource for developers wanting to master AI-assisted coding with Claude Code.

### Key Characteristics
- **Target Audience**: Global developers learning Claude Code, with primary focus on Korean and English speakers
- **Content Focus**: Educational guides, practical tutorials, and community resources
- **Language**: Multilingual support (Korean, English) with seamless language switching
- **Community-Driven**: Designed to foster knowledge sharing and collaboration across language barriers

## Project Structure

This is a Next.js 15 application with dual deployment strategy and advanced GitHub automation:

```
claude-code-guide/
├── src/app/                    # Next.js App Router with i18n support
│   └── [locale]/              # Dynamic locale routing (en, ko)
│       ├── page.tsx           # Homepage with hero section
│       ├── layout.tsx         # Root layout with i18n fonts
│       ├── getting-started/   # 시작하기 - Getting started guide
│       ├── usage-guide/       # 사용법 가이드 - Usage guides
│       ├── subagents/         # 서브에이전트 - Subagents (specialized AI assistants)
│       ├── plugins/           # 플러그인 - Plugins (extensibility system)
│       ├── hooks/             # 훅스 - Hooks (event handlers & automation)
│       ├── tutorials/         # 튜토리얼 - Tutorials
│       ├── tips/              # 실전 팁 - Practical tips
│       ├── mcp/               # MCP 프로토콜 - MCP Protocol guide
│       ├── use-cases/         # 활용 사례 - Use cases
│       └── community/         # 커뮤니티 - Community
├── src/components/            # React components with i18n support
│   ├── NavigationHeader.tsx   # Main navigation with language switcher
│   ├── MobileMenu.tsx         # Mobile navigation with i18n
│   └── LanguageSwitcher.tsx   # Language selection component
├── src/lib/i18n/              # Internationalization system
│   ├── config.ts              # Locale configuration (en, ko)
│   ├── dictionaries.ts        # Dictionary loader
│   ├── utils.ts               # i18n utility functions
│   └── dictionaries/          # Translation files
│       ├── en.json            # English translations
│       └── ko.json            # Korean translations
├── src/constants/             # Configuration constants
│   └── navigation.tsx         # Navigation structure with i18n keys
├── src/hooks/                 # Custom React hooks
├── middleware.ts              # Language detection & routing
├── public/                    # Static assets
│   ├── banner.png            # Main hero banner image
│   ├── robots.txt            # SEO + AI bot blocking
│   └── *.svg                 # UI icons
├── .github/workflows/         # GitHub Actions automation
│   ├── claude-code.yml       # Claude Code integration (@claude mentions)
│   ├── claude-review.yml     # Automated PR reviews
│   ├── issue-triage.yml      # Issue management automation
│   └── deploy.yml           # GitHub Pages deployment
├── wrangler.toml             # Cloudflare Workers configuration
└── CLAUDE.md                 # This file - Claude Code guidance
```

## Deployment Strategy

### Primary Deployment: Custom Domain
- **Platform**: GitHub Pages with static export  
- **URL**: `https://claude.develop-on.co.kr/`
- **Fallback URL**: `https://gyupro.github.io/claude-code-guide/`
- **Trigger**: Automatic on push to `main` branch
- **Build**: Static export with `output: 'export'` in Next.js config

### Secondary Deployment: Cloudflare Workers (Optional)
- **Platform**: Cloudflare Workers via OpenNext.js
- **Commands**: 
  - `pnpm preview` - Local Cloudflare preview
  - `pnpm deploy` - Deploy to Cloudflare
- **Configuration**: `wrangler.toml` with Node.js compatibility

## Development Commands

### Primary Development
- `pnpm dev` - Start development server with Turbopack (preferred for speed)
- `pnpm build` - Production build (for both deployment types)
- `pnpm start` - Start production server locally
- `pnpm lint` - Run ESLint with strict TypeScript rules

### Export Commands  
- `pnpm export` - Build static export for GitHub Pages deployment
- **Note**: Next.js 15 uses `output: 'export'` config instead of deprecated `next export`

## Technology Stack

### Core Framework
- **Framework**: Next.js 15 with App Router
- **React**: v19 (latest)
- **TypeScript**: Strict configuration enabled
- **Node.js**: v20 (specified in GitHub Actions)

### Styling & UI
- **CSS Framework**: Tailwind CSS v4 (latest)
- **PostCSS**: Configured for Tailwind processing  
- **Fonts**: Geist Sans and Geist Mono (Google Fonts)
- **Responsive**: Mobile-first design with Korean text optimization

### Build & Performance
- **Dev Server**: Turbopack for fast development builds
- **Package Manager**: pnpm (preferred, evidenced by pnpm-lock.yaml)
- **Optimization**: Next.js Image component with `unoptimized: true` for static export
- **Caching**: GitHub Actions cache for faster builds

### Deployment & Infrastructure
- **Primary**: Cloudflare Workers with OpenNext.js adapter
- **Secondary**: GitHub Pages with static export
- **CDN**: Cloudflare global edge network
- **SSL**: Automatic SSL/TLS certificates

## Configuration Notes

### Next.js Configuration (`next.config.ts`)
```typescript
const nextConfig: NextConfig = {
  output: 'export',           // Static export for GitHub Pages
  trailingSlash: true,        // Required for static hosting
  images: { unoptimized: true }, // No server-side image optimization
  basePath: process.env.NODE_ENV === 'production' ? '/claude-code-guide' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/claude-code-guide/' : '',
  // Comprehensive security headers
  async headers() { /* Security headers for XSS, clickjacking prevention */ }
}
```

### Key Features
- **Dual Environment Support**: Handles both Cloudflare and GitHub Pages deployment
- **Security Headers**: Comprehensive protection against XSS, clickjacking, etc.
- **Korean Font Loading**: Optimized Korean typography with Geist fonts
- **Static Export**: Full static site generation capability

## GitHub Actions Automation

### Navigation Structure (`src/constants/navigation.tsx`)
```typescript
export const NAVIGATION_ITEMS = [
  { href: '/', label: '홈' },                    // Home
  { href: '/getting-started', label: '시작하기' }, // Getting Started
  { href: '/usage-guide', label: '사용법 가이드' }, // Usage Guide
  { href: '/subagents', label: '서브에이전트' },   // Subagents
  { href: '/plugins', label: '플러그인' },        // Plugins
  { href: '/hooks', label: '훅스' },              // Hooks
  { href: '/tutorials', label: '튜토리얼' },      // Tutorials
  { href: '/tips', label: '실전 팁' },            // Practical Tips
  { href: '/mcp', label: 'MCP 프로토콜' },        // MCP Protocol
  { href: '/community', label: '커뮤니티' },      // Community
  { href: '/use-cases', label: '활용 사례' },     // Use Cases
]
```

### Component Architecture
- **Composition Pattern**: NavigationHeader + MobileMenu separation
- **Responsive Design**: Mobile-first with hamburger menu
- **State Management**: Custom hooks for navigation state
- **TypeScript**: Strict typing for all components

## Security & SEO

### Robots.txt Configuration
The project includes comprehensive bot management in `public/robots.txt`:

**Allowed Bots**: Googlebot, Bingbot, DuckDuckBot, Baiduspider, YandexBot, social media crawlers
**Blocked Bots**: AI training bots (GPTBot, ChatGPT, CCBot, OpenAI), SEO crawlers (SemrushBot, AhrefsBot), data scrapers

**Key Blocking Rules**:
```
User-agent: GPTBot
Disallow: /

User-agent: ChatGPT-User  
Disallow: /

User-agent: CCBot
Disallow: /
```

### Security Headers
- **X-Frame-Options**: DENY (clickjacking prevention)
- **X-Content-Type-Options**: nosniff (MIME type sniffing prevention)  
- **Referrer-Policy**: strict-origin-when-cross-origin
- **Permissions-Policy**: Restrictive camera/microphone/geolocation policies

## Development Guidelines

### Code Style
- **TypeScript**: Strict mode enabled, no implicit any
- **React**: Functional components with hooks
- **Styling**: Tailwind utility classes, responsive design
- **Naming**: Korean comments for business logic, English for technical code

### Component Patterns
```typescript
// Navigation component pattern
interface NavigationItem {
  href: string;
  label: string;        // Korean labels
  external?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
}
```

### File Organization
- **Pages**: One folder per major section (`/usage-guide/`, `/tutorials/`)
- **Components**: Reusable UI components in `/src/components/`
- **Constants**: Configuration and navigation in `/src/constants/`
- **Hooks**: Custom React hooks in `/src/hooks/`

## Troubleshooting & Common Issues

### Static Export Issues
- **API Routes**: Not supported with `output: 'export'` - use static files instead
- **Image Optimization**: Disabled with `unoptimized: true` for static hosting
- **Dynamic Routes**: Limited support - prefer static paths

### Deployment Issues
- **basePath**: Different for development vs production (GitHub Pages needs `/claude-code-guide`)
- **Asset Paths**: Use Next.js `Image` component for automatic basePath handling
- **Build Cache**: Clear `.next` and `out` directories if builds fail

### GitHub Actions
- **Token Permissions**: Ensure `workflow` scope for modifying `.github/workflows/`
- **pnpm Cache**: Configured for faster builds, may need clearing if corrupted  
- **Node Version**: Pinned to Node.js 20 for consistency

## Latest Claude Code Features (2025)

### Core Features Documented
1. **Subagents** - Specialized AI assistants with independent context windows
   - Custom system prompts for specific tasks
   - Tool access control and permissions
   - Model selection (inherit, sonnet, opus, haiku)
   - Project and user-level configurations

2. **Plugins** - Extensibility system for custom functionality
   - Custom slash commands
   - Specialized agents bundled in plugins
   - Event-driven hooks
   - MCP server integration
   - Plugin marketplaces for distribution

3. **Hooks** - Event handlers for workflow automation
   - PreToolUse, PostToolUse events
   - UserPromptSubmit, Notification events
   - SessionStart, SessionEnd lifecycle hooks
   - **PermissionRequest** - Trigger on permission requests (NEW)
   - **PreCompact** - Trigger before context compaction (NEW)
   - **SubagentStart** - Trigger when subagent starts (NEW)
   - **SubagentStop** - Trigger when subagent completes (NEW)
   - **Prompt-Based Hooks** - LLM-powered decision making (NEW)
   - Security considerations and best practices

4. **Installation Methods**
   - ~~NPM install: `npm install -g @anthropic-ai/claude-code`~~ **(DEPRECATED - Not Recommended)**
   - **Native Install (Recommended)**:
     - macOS/Linux/WSL: `curl -fsSL https://claude.ai/install.sh | bash`
     - Windows PowerShell: `irm https://claude.ai/install.ps1 | iex`
     - Homebrew: `brew install --cask claude-code`
     - WinGet: `winget install Anthropic.ClaudeCode`

5. **VS Code Extension (Beta)** - Native IDE integration
   - Graphical interface in VS Code sidebar
   - No terminal required
   - Direct marketplace installation

6. **Additional Features**
   - Output Styles for customized formatting
   - Headless Mode for automation
   - GitHub Actions & GitLab CI/CD integration
   - Checkpointing for conversation management
   - Memory Management system
   - Model Configuration options
   - Status Line Configuration
   - Plugin Marketplaces for team distribution

7. **New Features (2025-2026)**
   - **Skills** - Domain expertise defined via SKILL.md files
   - **Desktop App** - Native GUI environment (Preview)
   - **Chrome Extension (Beta)** - Browser automation and web context
   - **Slack Integration** - Delegate coding tasks from Slack
   - **MCP HTTP Transport** - HTTP recommended (SSE deprecated)
   - **MCP Resource Mentions** - Reference MCP resources with @ syntax
   - **MCP Tool Search** - Auto-deferred tools for context optimization

## MCP Integration

This project supports MCP (Model Context Protocol) for enhanced GitHub integration:
- **GitHub MCP Server**: Advanced GitHub API operations
- **Issue Management**: Automated triage and labeling
- **PR Reviews**: Intelligent code analysis and feedback
- **Repository Operations**: Comprehensive GitHub workflow automation
- **Custom MCP Servers**: Integrate with external tools and services

## Internationalization (i18n) System

This project implements a comprehensive multilingual system supporting Korean and English:

### Core i18n Architecture
- **Dynamic Routing**: Uses `[locale]` parameter for URL-based language switching
- **Middleware**: Automatic language detection based on browser preferences
- **Dictionary System**: JSON-based translation files for each locale
- **Browser Detection**: Automatic redirect to user's preferred language
- **Manual Selection**: Language switcher component for user choice

### Language Configuration
```typescript
// src/lib/i18n/config.ts
export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'ko'],
} as const

export const localeNames = {
  en: 'English',
  ko: '한국어',
}
```

### URL Structure
- **English**: `/en/getting-started`, `/en/usage-guide`
- **Korean**: `/ko/getting-started`, `/ko/usage-guide`  
- **Root Redirect**: `/` → `/en/` (default) or user's preferred language

### Content Translation Guidelines
- **Navigation**: Fully translated in both languages
- **Page Titles**: Complete translation for all major headings
- **Content**: Technical content with language-appropriate explanations
- **UI Elements**: All buttons, labels, and interactive elements translated
- **Fallback**: Graceful fallback to English if translation missing

### Adding New Languages
To add support for additional languages:
1. Add locale to `src/lib/i18n/config.ts`
2. Create new dictionary file in `src/lib/i18n/dictionaries/`
3. Update middleware language detection
4. Add locale-specific content in page components
5. Update metadata and SEO configurations

### Language-Specific Content Strategy
- **Korean (ko)**: 
  - Detailed explanations with Korean development culture context
  - Step-by-step tutorials with Korean learning preferences
  - Community-focused language and collaborative tone
- **English (en)**:
  - Concise, technical documentation style
  - International development practices focus
  - Clear, direct instructional language

## Community Focus

### Mobile Responsiveness
- **모바일 UI 고려사항**: 모든 페이지에 대해 모바일 레이아웃과 콘텐츠를 최적화
- **Responsive Design**: Ensure seamless user experience across mobile devices
- **Key Considerations**:
  - Adapt layout for smaller screens
  - Optimize content readability on mobile
  - Use mobile-first design principles
  - Implement responsive navigation (hamburger menu)
  - Test across various mobile device sizes and orientations

### Global Developer Community
This project serves a **global developer community** with multilingual support:
- **Language Accessibility**: Content available in Korean and English
- **Cultural Adaptation**: Respect for different learning styles and development practices
- **Technical Consistency**: Consistent technical information across all languages
- **Community Building**: Foster collaboration across language barriers
- **Documentation Standards**: Maintain high-quality content in all supported languages

---

This CLAUDE.md serves as the definitive guide for understanding and contributing to the Claude Code  User Guid project.