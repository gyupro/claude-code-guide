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

### 📁 프로젝트 구조

```
claude-code-guide/
├── src/
│   ├── app/
│   │   └── [locale]/          # 동적 로케일 라우팅
│   │       ├── page.tsx       # 홈페이지
│   │       ├── getting-started/
│   │       ├── usage-guide/
│   │       ├── tutorials/
│   │       ├── tips/
│   │       ├── mcp/           # MCP 프로토콜 가이드
│   │       ├── use-cases/
│   │       └── community/
│   ├── components/            # 재사용 가능한 React 컴포넌트
│   ├── lib/i18n/             # 국제화
│   │   ├── config.ts         # 로케일 설정
│   │   ├── dictionaries.ts   # 사전 로더
│   │   └── dictionaries/     # 번역 파일 (6개 언어)
│   ├── contexts/             # React 컨텍스트 (테마 등)
│   └── hooks/                # 커스텀 React 훅
├── public/                   # 정적 자산
├── .github/workflows/        # GitHub Actions
│   ├── deploy.yml           # GitHub Pages 자동 배포
│   ├── claude-code.yml      # Claude 통합
│   ├── claude-review.yml    # 자동 PR 리뷰
│   └── issue-triage.yml     # 이슈 관리
└── CLAUDE.md                # Claude Code 지침서
```

### 🌐 국제화

6개 언어 지원 및 자동 로케일 감지:

- 🇺🇸 영어 (en) - 기본값
- 🇰🇷 한국어 (ko)
- 🇯🇵 일본어 (ja)
- 🇨🇳 중국어 (zh)
- 🇪🇸 스페인어 (es)
- 🇫🇷 프랑스어 (fr)

### 🤖 GitHub 자동화

이 프로젝트는 고급 GitHub 자동화 기능을 제공합니다:

1. **자동 배포**: `main`으로 푸시하면 GitHub Pages에 자동 배포
2. **Claude Code 통합**: 이슈/PR에서 @claude 언급으로 AI 지원
3. **자동 PR 리뷰**: 모든 풀 리퀘스트에 AI 기반 코드 리뷰
4. **이슈 분류**: 자동 라벨링 및 카테고리 분류

### 🔒 보안 기능

- 포괄적인 보안 헤더
- 봇 보호 (AI 학습 봇 차단)
- HTTPS 강제 적용
- XSS 및 클릭재킹 방지

---

## 日本語

### 🌟 概要

Claude Code Guideは、開発者がClaude Codeを使用したAIコーディングをマスターするための多言語教育プラットフォームです。Next.js 15で構築され、6言語をサポートし、包括的なチュートリアル、ベストプラクティス、実例を提供します。

### ✨ 主な機能

- **🌍 多言語サポート**: 日本語、英語、韓国語、中国語、スペイン語、フランス語に対応
- **📚 包括的なガイド**: 入門から高度なテクニックまで
- **🔧 MCPプロトコルドキュメント**: Model Context ProtocolでClaude Codeを拡張
- **💡 実例**: 実践的なユースケースとワークフロー自動化
- **🎯 インタラクティブチュートリアル**: ステップバイステップの学習パス
- **🌙 ダークモード**: 目に優しいダークテーマサポート
- **📱 モバイルレスポンシブ**: すべてのデバイスに最適化
- **🚀 高速パフォーマンス**: Next.js 15による静的サイト生成

### 🛠️ 技術スタック

- **フレームワーク**: Next.js 15 (App Router、静的エクスポート)
- **スタイリング**: Tailwind CSS v4
- **言語**: TypeScript、React 19
- **デプロイ**: GitHub Pages（プライマリ）、Cloudflare Workers（オプション）
- **CI/CD**: GitHub Actionsによる自動デプロイ
- **パッケージマネージャー**: pnpm
- **フォント**: Geist Sans & Geist Mono

### 🚀 はじめに

```bash
# リポジトリのクローン
git clone https://github.com/gyupro/claude-code-guide.git
cd claude-code-guide

# 依存関係のインストール（pnpm推奨）
pnpm install

# Turbopackで開発サーバーを起動
pnpm dev

# ブラウザで http://localhost:3000 を開く
```

### 📦 利用可能なスクリプト

```bash
pnpm dev          # 開発サーバーの起動（Turbopack）
pnpm build        # プロダクションビルド
pnpm export       # GitHub Pages用の静的エクスポート
pnpm start        # プロダクションサーバーの起動
pnpm lint         # ESLintの実行
pnpm preview      # Cloudflareプレビュー（オプション）
pnpm deploy       # Cloudflare Workersへのデプロイ（オプション）
```

### 📁 プロジェクト構造

```
claude-code-guide/
├── src/
│   ├── app/
│   │   └── [locale]/          # 動的ロケールルーティング
│   │       ├── page.tsx       # ホームページ
│   │       ├── getting-started/
│   │       ├── usage-guide/
│   │       ├── tutorials/
│   │       ├── tips/
│   │       ├── mcp/           # MCPプロトコルガイド
│   │       ├── use-cases/
│   │       └── community/
│   ├── components/            # 再利用可能なReactコンポーネント
│   ├── lib/i18n/             # 国際化
│   │   ├── config.ts         # ロケール設定
│   │   ├── dictionaries.ts   # 辞書ローダー
│   │   └── dictionaries/     # 翻訳ファイル（6言語）
│   ├── contexts/             # Reactコンテキスト（テーマなど）
│   └── hooks/                # カスタムReactフック
├── public/                   # 静的アセット
├── .github/workflows/        # GitHub Actions
│   ├── deploy.yml           # GitHub Pagesへの自動デプロイ
│   ├── claude-code.yml      # Claude統合
│   ├── claude-review.yml    # 自動PRレビュー
│   └── issue-triage.yml     # イシュー管理
└── CLAUDE.md                # Claude Code指示書
```

### 🌐 国際化

6言語対応、自動ロケール検出：

- 🇺🇸 英語 (en) - デフォルト
- 🇰🇷 韓国語 (ko)
- 🇯🇵 日本語 (ja)
- 🇨🇳 中国語 (zh)
- 🇪🇸 スペイン語 (es)
- 🇫🇷 フランス語 (fr)

### 🤖 GitHub自動化

高度なGitHub自動化機能：

1. **自動デプロイ**: `main`へのプッシュでGitHub Pagesにデプロイ
2. **Claude Code統合**: イシュー/PRで@claudeメンションでAI支援
3. **自動PRレビュー**: すべてのプルリクエストにAIコードレビュー
4. **イシュートリアージ**: 自動ラベリングとカテゴリ分け

### 🔒 セキュリティ機能

- 包括的なセキュリティヘッダー
- ボット保護（AIトレーニングボットをブロック）
- HTTPS強制
- XSSとクリックジャッキング防止

---

## 中文

### 🌟 概述

Claude Code Guide 是一个多语言教育平台，旨在帮助开发者掌握使用 Claude Code 进行 AI 辅助编码。基于 Next.js 15 构建，支持 6 种语言，提供全面的教程、最佳实践和实际案例。

### ✨ 主要特性

- **🌍 多语言支持**：支持中文、英文、韩文、日文、西班牙文和法文
- **📚 全面的指南**：从入门到高级技巧
- **🔧 MCP 协议文档**：学习使用模型上下文协议扩展 Claude Code
- **💡 实际案例**：实用的用例和工作流自动化
- **🎯 交互式教程**：循序渐进的学习路径
- **🌙 深色模式**：护眼的深色主题支持
- **📱 移动响应式**：为所有设备优化
- **🚀 高性能**：使用 Next.js 15 进行静态站点生成

### 🛠️ 技术栈

- **框架**：Next.js 15（App Router、静态导出）
- **样式**：Tailwind CSS v4
- **语言**：TypeScript、React 19
- **部署**：GitHub Pages（主要）、Cloudflare Workers（可选）
- **CI/CD**：使用 GitHub Actions 自动部署
- **包管理器**：pnpm
- **字体**：Geist Sans & Geist Mono

### 🚀 快速开始

```bash
# 克隆仓库
git clone https://github.com/gyupro/claude-code-guide.git
cd claude-code-guide

# 安装依赖（推荐使用 pnpm）
pnpm install

# 使用 Turbopack 启动开发服务器
pnpm dev

# 在浏览器中打开 http://localhost:3000
```

### 📦 可用脚本

```bash
pnpm dev          # 启动开发服务器（Turbopack）
pnpm build        # 生产构建
pnpm export       # 为 GitHub Pages 静态导出
pnpm start        # 启动生产服务器
pnpm lint         # 运行 ESLint
pnpm preview      # Cloudflare 预览（可选）
pnpm deploy       # 部署到 Cloudflare Workers（可选）
```

### 📁 项目结构

```
claude-code-guide/
├── src/
│   ├── app/
│   │   └── [locale]/          # 动态语言路由
│   │       ├── page.tsx       # 主页
│   │       ├── getting-started/
│   │       ├── usage-guide/
│   │       ├── tutorials/
│   │       ├── tips/
│   │       ├── mcp/           # MCP 协议指南
│   │       ├── use-cases/
│   │       └── community/
│   ├── components/            # 可重用的 React 组件
│   ├── lib/i18n/             # 国际化
│   │   ├── config.ts         # 语言配置
│   │   ├── dictionaries.ts   # 字典加载器
│   │   └── dictionaries/     # 翻译文件（6 种语言）
│   ├── contexts/             # React 上下文（主题等）
│   └── hooks/                # 自定义 React 钩子
├── public/                   # 静态资源
├── .github/workflows/        # GitHub Actions
│   ├── deploy.yml           # 自动部署到 GitHub Pages
│   ├── claude-code.yml      # Claude 集成
│   ├── claude-review.yml    # 自动 PR 审查
│   └── issue-triage.yml     # 问题管理
└── CLAUDE.md                # Claude Code 说明
```

### 🌐 国际化

项目支持 6 种语言，带自动语言检测：

- 🇺🇸 英文 (en) - 默认
- 🇰🇷 韩文 (ko)
- 🇯🇵 日文 (ja)
- 🇨🇳 中文 (zh)
- 🇪🇸 西班牙文 (es)
- 🇫🇷 法文 (fr)

### 🤖 GitHub 自动化

本项目具有先进的 GitHub 自动化功能：

1. **自动部署**：推送到 `main` 触发部署到 GitHub Pages
2. **Claude Code 集成**：在问题/PR 中提及 @claude 获得 AI 协助
3. **自动 PR 审查**：所有拉取请求的 AI 代码审查
4. **问题分类**：自动标记和分类问题

### 🔒 安全功能

- 全面的安全标头
- 机器人保护（阻止 AI 训练机器人）
- HTTPS 强制执行
- XSS 和点击劫持防护

---

## Español

### 🌟 Resumen

Claude Code Guide es una plataforma educativa multilingüe diseñada para ayudar a los desarrolladores a dominar la codificación asistida por IA con Claude Code. Construido con Next.js 15 y compatible con 6 idiomas, proporciona tutoriales completos, mejores prácticas y ejemplos del mundo real.

### ✨ Características Principales

- **🌍 Soporte Multilingüe**: Disponible en español, inglés, coreano, japonés, chino y francés
- **📚 Guías Completas**: Desde principiantes hasta técnicas avanzadas
- **🔧 Documentación del Protocolo MCP**: Aprende a extender Claude Code con Model Context Protocol
- **💡 Ejemplos del Mundo Real**: Casos de uso prácticos y automatización de flujos de trabajo
- **🎯 Tutoriales Interactivos**: Rutas de aprendizaje paso a paso
- **🌙 Modo Oscuro**: Soporte de tema oscuro amigable con los ojos
- **📱 Responsive Móvil**: Optimizado para todos los dispositivos
- **🚀 Alto Rendimiento**: Generación de sitios estáticos con Next.js 15

### 🛠️ Stack Tecnológico

- **Framework**: Next.js 15 (App Router, Exportación Estática)
- **Estilos**: Tailwind CSS v4
- **Lenguajes**: TypeScript, React 19
- **Despliegue**: GitHub Pages (principal), Cloudflare Workers (opcional)
- **CI/CD**: GitHub Actions con despliegues automatizados
- **Gestor de Paquetes**: pnpm
- **Fuentes**: Geist Sans & Geist Mono

### 🚀 Comenzar

```bash
# Clonar el repositorio
git clone https://github.com/gyupro/claude-code-guide.git
cd claude-code-guide

# Instalar dependencias (se recomienda pnpm)
pnpm install

# Iniciar servidor de desarrollo con Turbopack
pnpm dev

# Abrir http://localhost:3000 en tu navegador
```

### 📦 Scripts Disponibles

```bash
pnpm dev          # Iniciar servidor de desarrollo (Turbopack)
pnpm build        # Construcción de producción
pnpm export       # Exportación estática para GitHub Pages
pnpm start        # Iniciar servidor de producción
pnpm lint         # Ejecutar ESLint
pnpm preview      # Vista previa con Cloudflare (opcional)
pnpm deploy       # Desplegar a Cloudflare Workers (opcional)
```

### 📁 Estructura del Proyecto

```
claude-code-guide/
├── src/
│   ├── app/
│   │   └── [locale]/          # Enrutamiento dinámico de idioma
│   │       ├── page.tsx       # Página principal
│   │       ├── getting-started/
│   │       ├── usage-guide/
│   │       ├── tutorials/
│   │       ├── tips/
│   │       ├── mcp/           # Guía del Protocolo MCP
│   │       ├── use-cases/
│   │       └── community/
│   ├── components/            # Componentes React reutilizables
│   ├── lib/i18n/             # Internacionalización
│   │   ├── config.ts         # Configuración de idiomas
│   │   ├── dictionaries.ts   # Cargador de diccionarios
│   │   └── dictionaries/     # Archivos de traducción (6 idiomas)
│   ├── contexts/             # Contextos React (Tema, etc.)
│   └── hooks/                # Hooks React personalizados
├── public/                   # Activos estáticos
├── .github/workflows/        # GitHub Actions
│   ├── deploy.yml           # Auto-despliegue a GitHub Pages
│   ├── claude-code.yml      # Integración Claude
│   ├── claude-review.yml    # Revisiones PR automatizadas
│   └── issue-triage.yml     # Gestión de issues
└── CLAUDE.md                # Instrucciones Claude Code
```

### 🌐 Internacionalización

El proyecto soporta 6 idiomas con detección automática:

- 🇺🇸 Inglés (en) - Por defecto
- 🇰🇷 Coreano (ko)
- 🇯🇵 Japonés (ja)
- 🇨🇳 Chino (zh)
- 🇪🇸 Español (es)
- 🇫🇷 Francés (fr)

### 🤖 Automatización GitHub

Este proyecto cuenta con automatización avanzada de GitHub:

1. **Despliegue Automatizado**: Push a `main` activa el despliegue a GitHub Pages
2. **Integración Claude Code**: Menciona @claude en issues/PRs para asistencia AI
3. **Revisiones PR Automatizadas**: Revisiones de código con AI en todos los pull requests
4. **Triaje de Issues**: Etiquetado y categorización automática

### 🔒 Características de Seguridad

- Encabezados de seguridad completos
- Protección contra bots (bloquea bots de entrenamiento AI)
- Aplicación de HTTPS
- Prevención de XSS y clickjacking

---

## Français

### 🌟 Aperçu

Claude Code Guide est une plateforme éducative multilingue conçue pour aider les développeurs à maîtriser le codage assisté par IA avec Claude Code. Construit avec Next.js 15 et prenant en charge 6 langues, il fournit des tutoriels complets, des bonnes pratiques et des exemples concrets.

### ✨ Caractéristiques Principales

- **🌍 Support Multilingue**: Disponible en français, anglais, coréen, japonais, chinois et espagnol
- **📚 Guides Complets**: Des bases aux techniques avancées
- **🔧 Documentation du Protocole MCP**: Apprenez à étendre Claude Code avec le Model Context Protocol
- **💡 Exemples Concrets**: Cas d'utilisation pratiques et automatisation des flux de travail
- **🎯 Tutoriels Interactifs**: Parcours d'apprentissage étape par étape
- **🌙 Mode Sombre**: Support du thème sombre pour le confort des yeux
- **📱 Responsive Mobile**: Optimisé pour tous les appareils
- **🚀 Haute Performance**: Génération de site statique avec Next.js 15

### 🛠️ Stack Technique

- **Framework**: Next.js 15 (App Router, Export Statique)
- **Styles**: Tailwind CSS v4
- **Langages**: TypeScript, React 19
- **Déploiement**: GitHub Pages (principal), Cloudflare Workers (optionnel)
- **CI/CD**: GitHub Actions avec déploiements automatisés
- **Gestionnaire de Paquets**: pnpm
- **Polices**: Geist Sans & Geist Mono

### 🚀 Démarrage Rapide

```bash
# Cloner le dépôt
git clone https://github.com/gyupro/claude-code-guide.git
cd claude-code-guide

# Installer les dépendances (pnpm recommandé)
pnpm install

# Démarrer le serveur de développement avec Turbopack
pnpm dev

# Ouvrir http://localhost:3000 dans votre navigateur
```

### 📦 Scripts Disponibles

```bash
pnpm dev          # Démarrer le serveur de développement (Turbopack)
pnpm build        # Build de production
pnpm export       # Export statique pour GitHub Pages
pnpm start        # Démarrer le serveur de production
pnpm lint         # Exécuter ESLint
pnpm preview      # Aperçu avec Cloudflare (optionnel)
pnpm deploy       # Déployer sur Cloudflare Workers (optionnel)
```

### 📁 Structure du Projet

```
claude-code-guide/
├── src/
│   ├── app/
│   │   └── [locale]/          # Routage dynamique des langues
│   │       ├── page.tsx       # Page d'accueil
│   │       ├── getting-started/
│   │       ├── usage-guide/
│   │       ├── tutorials/
│   │       ├── tips/
│   │       ├── mcp/           # Guide du Protocole MCP
│   │       ├── use-cases/
│   │       └── community/
│   ├── components/            # Composants React réutilisables
│   ├── lib/i18n/             # Internationalisation
│   │   ├── config.ts         # Configuration des langues
│   │   ├── dictionaries.ts   # Chargeur de dictionnaires
│   │   └── dictionaries/     # Fichiers de traduction (6 langues)
│   ├── contexts/             # Contextes React (Thème, etc.)
│   └── hooks/                # Hooks React personnalisés
├── public/                   # Ressources statiques
├── .github/workflows/        # GitHub Actions
│   ├── deploy.yml           # Déploiement auto vers GitHub Pages
│   ├── claude-code.yml      # Intégration Claude
│   ├── claude-review.yml    # Revues PR automatisées
│   └── issue-triage.yml     # Gestion des issues
└── CLAUDE.md                # Instructions Claude Code
```

### 🌐 Internationalisation

Le projet prend en charge 6 langues avec détection automatique :

- 🇺🇸 Anglais (en) - Par défaut
- 🇰🇷 Coréen (ko)
- 🇯🇵 Japonais (ja)
- 🇨🇳 Chinois (zh)
- 🇪🇸 Espagnol (es)
- 🇫🇷 Français (fr)

### 🤖 Automatisation GitHub

Ce projet dispose d'une automatisation GitHub avancée :

1. **Déploiement Automatisé** : Push vers `main` déclenche le déploiement sur GitHub Pages
2. **Intégration Claude Code** : Mentionnez @claude dans les issues/PRs pour l'assistance IA
3. **Revues PR Automatisées** : Revues de code par IA sur toutes les pull requests
4. **Triage des Issues** : Étiquetage et catégorisation automatique

### 🔒 Fonctionnalités de Sécurité

- En-têtes de sécurité complets
- Protection contre les bots (bloque les bots d'entraînement IA)
- Application HTTPS
- Prévention XSS et clickjacking

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