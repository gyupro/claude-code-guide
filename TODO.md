# Claude Code 가이드 프로젝트 업데이트 TODO

## 📋 프로젝트 개요
Claude Code 공식 문서(https://docs.claude.com/en/docs/claude-code/overview)의 최신 정보를 기반으로 프로젝트 전체 콘텐츠를 업데이트합니다.

---

## ✅ 완료된 작업

### 1. 정보 수집 및 분석 (완료)
- [x] Claude Code 공식 문서 수집
  - Overview 페이지 분석
  - Quickstart 가이드 수집
  - Subagents 문서 전체 수집
  - Plugins 문서 전체 수집
  - Hooks 관련 정보 확인
- [x] 프로젝트 현황 파악
  - 번역 파일 분석 (ko.json, en.json)
  - 기존 페이지 구조 파악
  - 누락된 기능 식별

### 2. Navigation 구조 업데이트 (완료)
- [x] `/src/constants/navigation.tsx` 수정
  - Subagents 항목 추가
  - Plugins 항목 추가
  - Hooks 항목 추가
  - 순서: Home → Getting Started → Usage Guide → **Subagents** → **Plugins** → **Hooks** → Tutorials → Tips → MCP → Community → Use Cases

### 3. 새로운 페이지 생성 (진행 중)
- [x] **Subagents 페이지** (완료)
  - `/src/app/[locale]/subagents/page.tsx` 생성
  - `/src/app/[locale]/subagents/SubagentsClient.tsx` 생성
  - 주요 섹션:
    - What are Subagents?
    - Key Benefits (Context preservation, Specialized expertise, Reusability, Flexible permissions)
    - Quick Start (4-step guide)
    - Example Subagents (Code Reviewer, Debugger, Test Automation)
    - Best Practices
    - CTA section

---

## 🔄 현재 진행 중인 작업

### 4. Plugins 페이지 생성
- [ ] `/src/app/[locale]/plugins/page.tsx` 생성 필요
- [ ] `/src/app/[locale]/plugins/PluginsClient.tsx` 생성 필요
- **필요한 섹션:**
  - What are Plugins?
  - Plugin Components (Commands, Agents, Hooks, MCP servers)
  - Quick Start (Create your first plugin)
  - Plugin Structure Overview
  - Install and Manage Plugins
  - Example Plugins
  - Best Practices
  - CTA

### 5. Hooks 페이지 생성
- [ ] `/src/app/[locale]/hooks/page.tsx` 생성 필요
- [ ] `/src/app/[locale]/hooks/HooksClient.tsx` 생성 필요
- **필요한 섹션:**
  - What are Hooks?
  - Hook Types (tool-call hooks, prompt-submit hooks, etc.)
  - Quick Start
  - Configuration Examples
  - Common Use Cases
  - Best Practices
  - CTA

---

## 📝 앞으로 해야 할 작업

### 6. Getting Started 페이지 업데이트
- [ ] **Native Install 섹션 추가**
  - macOS/Linux/WSL 설치 명령어
  - Windows PowerShell 설치 명령어
  - Windows CMD 설치 명령어
- [ ] NPM Install vs Native Install 비교 설명
- [ ] VS Code Extension (Beta) 안내 추가

### 7. 번역 파일 업데이트

#### 7.1 한글 번역 (`/src/lib/i18n/dictionaries/ko.json`)
- [ ] **navigation 섹션 추가:**
  ```json
  "subagents": "서브에이전트",
  "plugins": "플러그인",
  "hooks": "훅스"
  ```

- [ ] **subagents 섹션 추가:**
  ```json
  "subagents": {
    "title": "서브에이전트",
    "subtitle": "작업별 특화된 AI 어시스턴트 생성",
    "whatAreSubagents": {
      "title": "서브에이전트란?",
      "description": "...",
      ...
    },
    "quickStart": { ... },
    "examples": { ... },
    "bestPractices": { ... },
    "cta": { ... }
  }
  ```

- [ ] **plugins 섹션 추가:**
  ```json
  "plugins": {
    "title": "플러그인",
    "subtitle": "커스텀 명령어, 에이전트, 훅, MCP 서버로 Claude Code 확장",
    ...
  }
  ```

- [ ] **hooks 섹션 추가:**
  ```json
  "hooks": {
    "title": "훅스",
    "subtitle": "이벤트 핸들러로 워크플로우 자동화",
    ...
  }
  ```

- [ ] **getting-started 섹션 업데이트:**
  - nativeInstall 관련 번역 추가
  - vsCodeExtension 안내 번역 추가

#### 7.2 영문 번역 (`/src/lib/i18n/dictionaries/en.json`)
- [ ] 위와 동일한 구조로 영문 번역 추가

### 8. 기존 페이지 업데이트
- [ ] **Usage Guide 페이지**
  - 최신 명령어 추가
  - Subagents/Plugins/Hooks 활용법 추가
- [ ] **MCP 섹션**
  - 최신 MCP 서버 목록 업데이트
  - 새로운 통합 예제 추가

### 9. 테스트 및 검증
- [ ] 모든 새 페이지 로드 테스트
- [ ] 한글/영문 번역 확인
- [ ] 모바일 반응형 확인
- [ ] 네비게이션 링크 동작 확인
- [ ] 코드 복사 버튼 동작 확인
- [ ] Dark mode 지원 확인

---

## 🎯 발견된 주요 신규 기능들

### 완전히 새로운 기능 (프로젝트에 없음)
1. **Subagents** ⭐
   - 특화된 AI 서브 에이전트 시스템
   - 독립적인 context window
   - 커스텀 system prompt
   - 도구 접근 권한 설정

2. **Plugins** ⭐
   - 확장 가능한 플러그인 시스템
   - 커스텀 slash commands
   - 에이전트 정의
   - Hooks 통합
   - MCP 서버 번들링

3. **Hooks** ⭐
   - 이벤트 기반 자동화
   - tool-call hooks
   - prompt-submit hooks
   - 커스텀 워크플로우

4. **Native Install** ⭐
   - curl 기반 설치 (macOS/Linux/WSL)
   - PowerShell 설치 (Windows)
   - CMD 설치 (Windows)

5. **VS Code Extension (Beta)** ⭐
   - IDE 네이티브 통합
   - 사이드바 UI
   - 터미널 불필요

6. **기타 새 기능들**
   - Output Styles
   - Headless Mode
   - Checkpointing
   - GitLab CI/CD
   - Status Line Configuration
   - Memory Management
   - Model Configuration

---

## 📊 우선순위

### High Priority (이번 주)
1. ✅ Subagents 페이지 완성
2. 🔄 Plugins 페이지 생성
3. 🔄 Hooks 페이지 생성
4. 🔄 번역 파일 업데이트 (기본 콘텐츠)

### Medium Priority (다음 주)
5. Getting Started 페이지 Native Install 추가
6. 모든 번역 콘텐츠 완성
7. 테스트 및 검증

### Low Priority (향후)
8. Usage Guide 상세 업데이트
9. MCP 섹션 확장
10. 추가 예제 및 튜토리얼

---

## 🔗 참고 링크
- 공식 문서: https://docs.claude.com/en/docs/claude-code/overview
- Subagents 문서: https://docs.claude.com/en/docs/claude-code/sub-agents
- Plugins 문서: https://docs.claude.com/en/docs/claude-code/plugins
- Hooks 문서: https://docs.claude.com/en/docs/claude-code/hooks-guide

---

## 📝 작업 노트

### 기술 스택
- Next.js 15 with App Router
- TypeScript (Strict mode)
- Tailwind CSS v4
- i18n (한글/영문)
- Static Export (GitHub Pages)

### 파일 구조 패턴
```
src/app/[locale]/[page-name]/
├── page.tsx              # Server Component (Metadata)
└── [PageName]Client.tsx  # Client Component (UI)
```

### 컴포넌트 패턴
- NavigationHeader + MobileMenu
- CopyButton for code snippets
- Responsive design (mobile-first)
- Dark mode support
- i18n dictionary lookup

---

**Last Updated:** 2025-01-11
**Status:** 🔄 In Progress (40% Complete)
