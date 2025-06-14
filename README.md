# Claude Code 사용 가이드

한국 개발자를 위한 Claude Code 사용법 가이드 웹사이트입니다. AI 코딩 도구 Claude Code의 활용법과 실전 팁을 제공합니다.

🌐 **Website**: [https://claude.develop-on.co.kr/](https://claude.develop-on.co.kr/)  
📧 **Contact**: gyupro89@gmail.com  
📚 **GitHub**: [https://github.com/gyupro/claude-code-guide](https://github.com/gyupro/claude-code-guide)

## 🚀 프로젝트 개요

이 프로젝트는 Next.js 15와 Tailwind CSS v4를 사용하여 구축된 정적 웹사이트입니다. GitHub Pages를 통해 무료로 호스팅되며, Claude Code 사용자들을 위한 체계적인 학습 자료를 제공합니다.

### 주요 기능

- **📖 학습 가이드**: Claude Code 기본 사용법부터 고급 기능까지
- **🛠️ 실전 팁**: 실제 프로젝트에서 활용할 수 있는 팁과 트릭
- **💡 활용 사례**: 다양한 개발 시나리오별 활용 방법
- **🔧 CLI 명령어**: 효율적인 개발을 위한 명령어 가이드
- **🚀 자동 배포**: GitHub Actions를 통한 자동 배포

## 🛠️ 기술 스택

- **프레임워크**: Next.js 15 (App Router, Static Export)
- **스타일링**: Tailwind CSS v4
- **폰트**: Geist Sans & Geist Mono
- **배포**: GitHub Pages
- **패키지 매니저**: pnpm
- **CI/CD**: GitHub Actions

## 🏃‍♂️ 시작하기

### 개발 환경 설정

```bash
# 저장소 클론
git clone https://github.com/gyupro/claude-code-guide.git
cd claude-code-guide

# 의존성 설치
pnpm install

# 개발 서버 실행 (Turbopack 사용)
pnpm dev

# 브라우저에서 http://localhost:3000 접속
```

### 주요 명령어

```bash
# 개발
pnpm dev          # 개발 서버 시작 (Turbopack)
pnpm build        # 프로덕션 빌드
pnpm start        # 프로덕션 서버 실행
pnpm lint         # ESLint 실행

# 정적 사이트 생성
pnpm export       # 정적 사이트 빌드 (GitHub Pages용)

# Cloudflare 배포 (선택사항)
pnpm preview      # 로컬에서 Cloudflare 미리보기
pnpm deploy       # Cloudflare에 배포
```

## 📁 프로젝트 구조

```
claude-code-guide/
├── src/app/                    # Next.js App Router 페이지
│   ├── getting-started/       # 시작하기 가이드
│   ├── usage-guide/           # 사용법 가이드
│   │   ├── basic-commands/    # 기본 명령어
│   │   ├── cli-commands/      # CLI 명령어
│   │   ├── core-workflows/    # 핵심 워크플로우
│   │   └── advanced-features/ # 고급 기능
│   ├── tutorials/             # 튜토리얼
│   │   └── github-actions/    # GitHub Actions 연동
│   ├── tips/                  # 실전 팁
│   ├── use-cases/             # 활용 사례
│   ├── community/             # 커뮤니티
│   └── mcp/                   # MCP 서버 가이드
├── src/components/            # React 컴포넌트
├── public/                    # 정적 자산
│   ├── banner.png            # 메인 배너 이미지
│   ├── robots.txt            # SEO 설정
│   └── *.svg                 # 아이콘들
├── .github/workflows/         # GitHub Actions 워크플로우
│   └── deploy.yml            # 자동 배포 스크립트
└── CLAUDE.md                 # Claude Code 프로젝트 지침
```

## 🚀 GitHub Pages 배포

이 프로젝트는 GitHub Actions를 통해 자동으로 GitHub Pages에 배포됩니다.

### 자동 배포 프로세스

1. `main` 브랜치에 푸시하면 자동으로 빌드 및 배포
2. GitHub Actions가 Next.js 정적 사이트 생성
3. `out` 디렉토리의 내용을 GitHub Pages에 배포

### 수동 배포

```bash
# 정적 사이트 빌드
pnpm export

# 빌드된 파일은 out/ 디렉토리에 생성됨
```

## 🎨 커스터마이징

### 콘텐츠 수정

- 각 페이지는 `src/app/` 디렉토리 내의 해당 폴더에 있습니다
- Markdown 스타일의 컴포넌트로 구성되어 있어 쉽게 수정 가능

### 스타일 수정

- Tailwind CSS v4를 사용하여 스타일링
- 다크 모드 지원 (`dark:` 클래스 사용)
- 반응형 디자인 구현

## 🤝 기여하기

1. 이 저장소를 포크합니다
2. 기능 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋합니다 (`git commit -m 'feat: Add amazing feature'`)
4. 브랜치에 푸시합니다 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성합니다

### 커밋 메시지 컨벤션

- `feat:` 새로운 기능 추가
- `fix:` 버그 수정
- `docs:` 문서 수정
- `style:` 코드 포맷팅, 세미콜론 누락 등
- `refactor:` 코드 리팩토링
- `test:` 테스트 추가
- `chore:` 빌드 업무 수정, 패키지 매니저 수정 등

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 공개되어 있습니다. 코드와 컨텐츠 모두 자유롭게 사용, 수정, 배포할 수 있습니다. 자세한 내용은 [LICENSE](./LICENSE) 파일을 참조하세요.

## 🙏 크레딧

이 프로젝트는 [hellovibe.io](https://hellovibe.io/)의 오픈소스 프로젝트를 기반으로 제작되었습니다. 
원본 프로젝트의 뛰어난 설계와 구조에 감사드립니다.

## 📞 연락처

- **메인테이너**: gyupro89@gmail.com
- **GitHub**: [https://github.com/gyupro/claude-code-guide](https://github.com/gyupro/claude-code-guide)
- **웹사이트**: [https://claude.develop-on.co.kr/](https://claude.develop-on.co.kr/)

---

💡 **Claude Code에 대해 더 알고 싶다면?**

- [Claude Code 공식 문서](https://docs.anthropic.com/en/docs/claude-code)
- [Claude Code GitHub](https://github.com/anthropics/claude-code)
- [Anthropic Discord](https://www.anthropic.com/discord)