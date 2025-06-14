# CLAUDE.md

This file provides comprehensive guidance to Claude Code (claude.ai/code) when working with this repository.

## Project Overview

**Hello! Vibe - Claude Code Guide** is a Korean developer community website focused on Claude Code education, tutorials, and best practices. It serves as the primary learning resource for Korean developers wanting to master AI-assisted coding with Claude Code.

### Key Characteristics
- **Target Audience**: Korean developers learning Claude Code
- **Content Focus**: Educational guides, practical tutorials, and community resources
- **Language**: Primarily Korean with technical terms in English
- **Community-Driven**: Designed to foster knowledge sharing and collaboration

## Project Structure

This is a Next.js 15 application with dual deployment strategy and advanced GitHub automation:

```
claude-code-guide/
├── src/app/                    # Next.js App Router pages (Korean content)
│   ├── page.tsx               # Homepage with hero section
│   ├── layout.tsx             # Root layout with Korean fonts
│   ├── getting-started/       # 시작하기 - Getting started guide
│   ├── usage-guide/           # 사용법 가이드 - Usage guides
│   │   ├── basic-commands/    # 기본 명령어 - Basic commands
│   │   ├── cli-commands/      # CLI 명령어 - CLI commands  
│   │   ├── core-workflows/    # 핵심 워크플로우 - Core workflows
│   │   └── advanced-features/ # 고급 기능 - Advanced features
│   ├── tutorials/             # 튜토리얼 - Tutorials
│   │   └── github-actions/    # GitHub Actions integration
│   ├── tips/                  # 실전 팁 - Practical tips
│   ├── mcp/                   # MCP 프로토콜 - MCP Protocol guide
│   ├── use-cases/             # 활용 사례 - Use cases
│   └── community/             # 커뮤니티 - Community
├── src/components/            # React components
│   ├── NavigationHeader.tsx   # Main navigation (Korean labels)
│   └── MobileMenu.tsx         # Mobile navigation
├── src/constants/             # Configuration constants
│   └── navigation.tsx         # Navigation structure (Korean)
├── src/hooks/                 # Custom React hooks
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

### Primary Deployment: Cloudflare Workers (hellovibe.io)
- **Platform**: Cloudflare Workers via OpenNext.js
- **Domains**: `hellovibe.io`, `www.hellovibe.io`
- **Commands**: 
  - `pnpm preview` - Local Cloudflare preview
  - `pnpm deploy` - Deploy to Cloudflare
- **Configuration**: `wrangler.toml` with Node.js compatibility

### Secondary Deployment: GitHub Pages
- **Platform**: GitHub Pages with static export  
- **URL**: `https://gyupro.github.io/claude-code-guide/`
- **Trigger**: Automatic on push to `main` branch
- **Build**: Static export with `output: 'export'` in Next.js config

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

This project features sophisticated GitHub automation with 4 distinct workflows:

### 1. Claude Code Integration (`claude-code.yml`)
- **Trigger**: `@claude` mentions in issues/PRs/comments
- **Purpose**: Direct Claude Code assistance for development tasks
- **Capabilities**: Code analysis, bug fixes, feature implementation
- **Permissions**: Read repository content, interact with issues/PRs

### 2. Automated PR Reviews (`claude-review.yml`)  
- **Trigger**: Pull request creation/updates
- **Purpose**: Automated code review and quality assessment
- **Features**: Korean language feedback, best practices enforcement
- **Integration**: Uses MCP GitHub Server for advanced GitHub API access

### 3. Issue Triage (`issue-triage.yml`)
- **Trigger**: New issue creation
- **Purpose**: Automatic labeling, prioritization, duplicate detection
- **Features**: Korean language processing, intelligent categorization
- **Tools**: GitHub MCP Server for comprehensive issue management

### 4. Deployment (`deploy.yml`)
- **Trigger**: Push to `main` branch
- **Purpose**: Automated GitHub Pages deployment
- **Process**: pnpm install → static export → GitHub Pages upload
- **Optimizations**: pnpm caching, Node.js 20, Turbopack builds

## Content & Navigation

### Korean Localization
- **Navigation Labels**: All Korean (홈, 시작하기, 사용법 가이드, etc.)
- **Content Structure**: Organized for Korean developer learning patterns
- **Cultural Adaptation**: Tailored to Korean software development culture

### Navigation Structure (`src/constants/navigation.tsx`)
```typescript
export const NAVIGATION_ITEMS = [
  { href: '/', label: '홈' },                    // Home
  { href: '/getting-started', label: '시작하기' }, // Getting Started  
  { href: '/usage-guide', label: '사용법 가이드' }, // Usage Guide
  { href: '/tips', label: '실전 팁' },            // Practical Tips
  { href: '/mcp', label: 'MCP 프로토콜' },        // MCP Protocol
  { href: '/tutorials', label: '튜토리얼' },      // Tutorials
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

## MCP Integration

This project supports MCP (Model Context Protocol) for enhanced GitHub integration:
- **GitHub MCP Server**: Advanced GitHub API operations
- **Issue Management**: Automated triage and labeling
- **PR Reviews**: Intelligent code analysis and feedback
- **Repository Operations**: Comprehensive GitHub workflow automation

## Community Focus

Remember that this is a **Korean developer community project**:
- **Language**: Prioritize Korean explanations with English technical terms
- **Cultural Context**: Consider Korean software development practices
- **Learning Style**: Structured, step-by-step approach preferred in Korean education
- **Community Building**: Foster collaboration and knowledge sharing among Korean developers

---

This CLAUDE.md serves as the definitive guide for understanding and contributing to the Hello! Vibe Claude Code community project.