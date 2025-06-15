# Claude Code Guide 🚀

<div align="center">

![Claude Code Guide Banner](./public/banner.png)

**A comprehensive multilingual guide for mastering Claude Code**

[English](#english) | [한국어](#한국어) | [日本語](#日本語) | [中文](#中文) | [Español](#español) | [Français](#français)

[![Deploy Status](https://github.com/gyupro/claude-code-guide/actions/workflows/deploy.yml/badge.svg)](https://github.com/gyupro/claude-code-guide/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Powered by Next.js](https://img.shields.io/badge/Powered%20by-Next.js%2015-black)](https://nextjs.org/)

🌐 **Live Site**: [https://claude.develop-on.co.kr/](https://claude.develop-on.co.kr/)  
🌐 **Fallback URL**: [https://gyupro.github.io/claude-code-guide/](https://gyupro.github.io/claude-code-guide/)

</div>

---

## English

### 🌟 Overview

Claude Code Guide is a multilingual educational platform designed to help developers master AI-assisted coding with Claude Code. Built with Next.js 15 and supporting 6 languages, it provides comprehensive tutorials, best practices, and real-world examples.

### ✨ Key Features

- **🌍 Multilingual Support**: Available in English, Korean, Japanese, Chinese, Spanish, and French
- **📚 Comprehensive Guides**: From getting started to advanced techniques
- **🔧 MCP Protocol Documentation**: Learn to extend Claude Code with Model Context Protocol
- **💡 Real-World Examples**: Practical use cases and workflow automation
- **🎯 Interactive Tutorials**: Step-by-step learning paths
- **🌙 Dark Mode**: Eye-friendly dark theme support
- **📱 Mobile Responsive**: Optimized for all devices
- **🚀 Fast Performance**: Static site generation with Next.js 15

### 🛠️ Technology Stack

- **Framework**: Next.js 15 (App Router, Static Export)
- **Styling**: Tailwind CSS v4
- **Languages**: TypeScript, React 19
- **Deployment**: GitHub Pages (primary), Cloudflare Workers (optional)
- **CI/CD**: GitHub Actions with automated deployments
- **Package Manager**: pnpm
- **Font**: Geist Sans & Geist Mono

### 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/gyupro/claude-code-guide.git
cd claude-code-guide

# Install dependencies (pnpm recommended)
pnpm install

# Start development server with Turbopack
pnpm dev

# Open http://localhost:3000 in your browser
```

### 📦 Available Scripts

```bash
pnpm dev          # Start development server (Turbopack)
pnpm build        # Production build
pnpm export       # Static export for GitHub Pages
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm preview      # Preview with Cloudflare (optional)
pnpm deploy       # Deploy to Cloudflare Workers (optional)
```

### 📁 Project Structure

```
claude-code-guide/
├── src/
│   ├── app/
│   │   └── [locale]/          # Dynamic locale routing
│   │       ├── page.tsx       # Homepage
│   │       ├── getting-started/
│   │       ├── usage-guide/
│   │       ├── tutorials/
│   │       ├── tips/
│   │       ├── mcp/           # MCP Protocol guide
│   │       ├── use-cases/
│   │       └── community/
│   ├── components/            # Reusable React components
│   ├── lib/i18n/             # Internationalization
│   │   ├── config.ts         # Locale configuration
│   │   ├── dictionaries.ts   # Dictionary loader
│   │   └── dictionaries/     # Translation files (6 languages)
│   ├── contexts/             # React contexts (Theme, etc.)
│   └── hooks/                # Custom React hooks
├── public/                   # Static assets
├── .github/workflows/        # GitHub Actions
│   ├── deploy.yml           # Auto-deploy to GitHub Pages
│   ├── claude-code.yml      # Claude integration
│   ├── claude-review.yml    # Automated PR reviews
│   └── issue-triage.yml     # Issue management
└── CLAUDE.md                # Claude Code instructions
```

### 🌐 Internationalization

The project supports 6 languages with automatic locale detection:

- 🇺🇸 English (en) - Default
- 🇰🇷 Korean (ko)
- 🇯🇵 Japanese (ja)
- 🇨🇳 Chinese (zh)
- 🇪🇸 Spanish (es)
- 🇫🇷 French (fr)

### 🤖 GitHub Automation

This project features advanced GitHub automation:

1. **Automated Deployment**: Push to `main` triggers deployment to GitHub Pages
2. **Claude Code Integration**: Mention @claude in issues/PRs for AI assistance
3. **Automated PR Reviews**: AI-powered code reviews on all pull requests
4. **Issue Triage**: Automatic labeling and categorization of issues

### 🔒 Security Features

- Comprehensive security headers
- Bot protection (blocks AI training bots)
- HTTPS enforcement
- XSS and clickjacking prevention

---

## 한국어

### 🌟 개요

Claude Code Guide는 개발자들이 Claude Code를 활용한 AI 코딩을 마스터할 수 있도록 돕는 다국어 교육 플랫폼입니다. Next.js 15로 구축되었으며 6개 언어를 지원하고, 포괄적인 튜토리얼, 모범 사례, 실제 사례를 제공합니다.

### ✨ 주요 기능

- **🌍 다국어 지원**: 한국어, 영어, 일본어, 중국어, 스페인어, 프랑스어 지원
- **📚 포괄적인 가이드**: 시작하기부터 고급 기술까지
- **🔧 MCP 프로토콜 문서**: Model Context Protocol로 Claude Code 확장하기
- **💡 실제 사례**: 실용적인 사용 사례와 워크플로우 자동화
- **🎯 인터랙티브 튜토리얼**: 단계별 학습 경로
- **🌙 다크 모드**: 눈에 편안한 다크 테마 지원
- **📱 모바일 반응형**: 모든 기기에 최적화
- **🚀 빠른 성능**: Next.js 15의 정적 사이트 생성

### 🛠️ 기술 스택

- **프레임워크**: Next.js 15 (App Router, Static Export)
- **스타일링**: Tailwind CSS v4
- **언어**: TypeScript, React 19
- **배포**: GitHub Pages (기본), Cloudflare Workers (선택사항)
- **CI/CD**: GitHub Actions 자동 배포
- **패키지 매니저**: pnpm
- **폰트**: Geist Sans & Geist Mono

### 🚀 시작하기

```bash
# 저장소 클론
git clone https://github.com/gyupro/claude-code-guide.git
cd claude-code-guide

# 의존성 설치 (pnpm 권장)
pnpm install

# Turbopack으로 개발 서버 시작
pnpm dev

# 브라우저에서 http://localhost:3000 열기
```

### 📦 사용 가능한 스크립트

```bash
pnpm dev          # 개발 서버 시작 (Turbopack)
pnpm build        # 프로덕션 빌드
pnpm export       # GitHub Pages용 정적 내보내기
pnpm start        # 프로덕션 서버 시작
pnpm lint         # ESLint 실행
pnpm preview      # Cloudflare 미리보기 (선택사항)
pnpm deploy       # Cloudflare Workers 배포 (선택사항)
```

---

## 日本語

### 🌟 概要

Claude Code Guideは、開発者がClaude Codeを使用したAIコーディングをマスターするための多言語教育プラットフォームです。Next.js 15で構築され、6言語をサポートし、包括的なチュートリアル、ベストプラクティス、実例を提供します。

---

## 中文

### 🌟 概述

Claude Code Guide 是一个多语言教育平台，旨在帮助开发者掌握使用 Claude Code 进行 AI 辅助编码。基于 Next.js 15 构建，支持 6 种语言，提供全面的教程、最佳实践和实际案例。

---

## Español

### 🌟 Resumen

Claude Code Guide es una plataforma educativa multilingüe diseñada para ayudar a los desarrolladores a dominar la codificación asistida por IA con Claude Code. Construido con Next.js 15 y compatible con 6 idiomas, proporciona tutoriales completos, mejores prácticas y ejemplos del mundo real.

---

## Français

### 🌟 Aperçu

Claude Code Guide est une plateforme éducative multilingue conçue pour aider les développeurs à maîtriser le codage assisté par IA avec Claude Code. Construit avec Next.js 15 et prenant en charge 6 langues, il fournit des tutoriels complets, des bonnes pratiques et des exemples concrets.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Commit Convention

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code formatting
- `refactor:` Code refactoring
- `test:` Test additions
- `chore:` Build tasks, package manager changes

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 🙏 Credits

This project is based on the open-source project from [hellovibe.io](https://hellovibe.io/). We appreciate their excellent design and architecture.

## 📞 Contact

- **Maintainer**: gyupro89@gmail.com
- **GitHub**: [https://github.com/gyupro/claude-code-guide](https://github.com/gyupro/claude-code-guide)
- **Website**: [https://claude.develop-on.co.kr/](https://claude.develop-on.co.kr/)

---

<div align="center">

**Built with ❤️ for the global developer community**

[Claude Code Official Docs](https://docs.anthropic.com/en/docs/claude-code) | [Claude Code GitHub](https://github.com/anthropics/claude-code) | [Anthropic Discord](https://www.anthropic.com/discord)

</div>