# Claude Code Guide 프로젝트 검토 리포트

**검토일**: 2026년 1월 19일  
**공식 문서 기준**: https://code.claude.com/docs/en/  
**검토자**: AI Assistant

---

## 1. 검토 요약

### 1.1 전체 현황
| 항목 | 상태 | 비고 |
|------|------|------|
| 설치 방법 | ✅ 최신 | GettingStartedClient.tsx에 Native Install 권장으로 업데이트됨 |
| 서브에이전트 | ⚠️ 부분 업데이트 필요 | 새 frontmatter 필드, /agents 명령어 추가 필요 |
| 훅스 | ⚠️ 대규모 업데이트 필요 | 새 이벤트 타입 4개, Prompt-Based Hooks 추가 필요 |
| 플러그인 | ⚠️ 업데이트 필요 | LSP 서버 지원, Skills 폴더 추가됨 |
| MCP | ⚠️ 대규모 업데이트 필요 | HTTP transport, MCP Tool Search, 리소스 멘션 등 |
| Skills | ❌ 신규 페이지 필요 | /docs/en/skills 새 기능 |
| Desktop App | ❌ 신규 페이지 필요 | /docs/en/desktop 새 기능 |
| Chrome Extension | ❌ 신규 페이지 필요 | /docs/en/chrome 베타 기능 |
| Slack Integration | ❌ 신규 페이지 필요 | /docs/en/slack 새 기능 |
| Output Styles | ❌ 신규 페이지 필요 | /docs/en/output-styles 새 기능 |

### 1.2 우선순위 분류

#### P0 - 즉시 수정 필요 (오류 정보)
- [ ] CLAUDE.md의 npm 설치 방법이 "deprecated" 표시 없음

#### P1 - 높은 우선순위 (누락된 핵심 기능)
- [ ] Hooks 페이지 - 새 이벤트 타입 4개 추가
- [ ] MCP 페이지 - HTTP transport (SSE deprecated) 업데이트
- [ ] Skills 페이지 신규 생성

#### P2 - 중간 우선순위 (새 기능 추가)
- [ ] Subagents 페이지 업데이트
- [ ] Plugins 페이지 업데이트
- [ ] Desktop App 페이지 신규 생성
- [ ] Chrome Extension 페이지 신규 생성

#### P3 - 낮은 우선순위 (부가 기능)
- [ ] Slack Integration 페이지
- [ ] Output Styles 페이지
- [ ] GitLab CI/CD 가이드

---

## 2. 페이지별 상세 분석

### 2.1 시작하기 (Getting Started) ✅

**현재 상태**: 최신 상태

**확인된 정보**:
- Native Install 권장 (npm은 deprecated) ✅
- macOS/Linux: `curl -fsSL https://claude.ai/install.sh | bash` ✅
- Windows PowerShell: `irm https://claude.ai/install.ps1 | iex` ✅
- Homebrew: `brew install --cask claude-code` ✅
- WinGet: `winget install Anthropic.ClaudeCode` ✅
- VS Code Extension 안내 ✅

**수정 불필요**

---

### 2.2 서브에이전트 (Subagents) ⚠️

**현재 상태**: 부분 업데이트 필요

**누락된 정보**:

1. **새 frontmatter 필드**:
```yaml
---
model: opus  # or sonnet, haiku, inherit
skills:
  - skill-name
hooks:
  - hook-name
permissionMode: inherit  # or default, bypassPermissions
apiKeyEnvVar: CUSTOM_API_KEY
enableUndo: false
tools:
  - Read
  - Edit
  - Write
---
```

2. **/agents 명령어**: 서브에이전트 관리 명령어 추가
   - `/agents` - 사용 가능한 에이전트 목록
   - `/agents <name>` - 특정 에이전트 호출

3. **새 built-in agents**:
   - `bash` - Bash 전문가
   - `statusline-setup` - Status line 설정 도우미
   - 기존: `general-purpose`, `explore`, `plan`

4. **Permission Mode 설명**:
   - `inherit` - 부모 세션의 권한 상속
   - `default` - 기본 권한 모드
   - `bypassPermissions` - 권한 우회 (위험)

**추가 필요 콘텐츠**:
```markdown
## 서브에이전트 관리 명령어

### /agents 명령어
- `/agents` - 사용 가능한 모든 서브에이전트 목록 표시
- `/agents <name>` - 특정 서브에이전트 직접 호출

### 새로운 built-in 에이전트
| 에이전트 | 설명 |
|----------|------|
| general-purpose | 범용 작업 처리 |
| explore | 코드베이스 탐색 |
| plan | 작업 계획 수립 |
| bash | Bash 명령어 전문가 |
| statusline-setup | 상태 표시줄 설정 도우미 |
```

---

### 2.3 훅스 (Hooks) ⚠️ 대규모 업데이트 필요

**현재 상태**: 중요한 업데이트 다수 누락

**누락된 이벤트 타입**:

1. **PermissionRequest** (NEW)
   - 트리거: 권한 요청 시 (명령 실행 전)
   - 용도: 자동 승인/거부, 권한 요청 로깅
   ```json
   {
     "type": "PermissionRequest",
     "matcher": {
       "tool": "Bash"
     },
     "hooks": [
       {
         "type": "command",
         "command": "echo 'Permission requested for: $TOOL_NAME'"
       }
     ]
   }
   ```

2. **PreCompact** (NEW)
   - 트리거: 컨텍스트 압축 전
   - 용도: 압축 전 중요 정보 저장
   ```json
   {
     "type": "PreCompact",
     "hooks": [
       {
         "type": "command",
         "command": "save-context.sh"
       }
     ]
   }
   ```

3. **SubagentStart** (NEW)
   - 트리거: 서브에이전트 시작 시
   - 용도: 서브에이전트 모니터링
   ```json
   {
     "type": "SubagentStart",
     "matcher": {
       "agent": "explore"
     },
     "hooks": [
       {
         "type": "command",
         "command": "log-subagent-start.sh $AGENT_NAME"
       }
     ]
   }
   ```

4. **SubagentStop** (NEW)
   - 트리거: 서브에이전트 완료 시
   - 용도: 결과 로깅, 후속 작업 트리거

**누락된 기능 - Prompt-Based Hooks**:
```json
{
  "type": "PreToolUse",
  "matcher": {
    "tool": "Write"
  },
  "hooks": [
    {
      "type": "prompt",
      "prompt": "Review this file write operation. Should it proceed? Respond with 'allow' or 'deny' and reason."
    }
  ]
}
```

**Hook Output 구조 상세화**:
```json
// Hook이 반환해야 하는 JSON 형식
{
  "decision": "allow" | "deny" | "skip",
  "reason": "Optional explanation",
  "modifiedInput": { /* optional modified tool input */ }
}
```

**CLAUDE_ENV_FILE 환경 변수**:
- SessionStart 훅에서 환경 변수 파일 경로 지정 가능
- `export CLAUDE_ENV_FILE=/path/to/.env`

---

### 2.4 플러그인 (Plugins) ⚠️

**현재 상태**: 일부 업데이트 필요

**확인됨**: 
- 기본 구조 설명 ✅
- skills/ 폴더 이미 포함 ✅ (라인 153-155)

**누락된 정보**:

1. **LSP 서버 지원** (`.lsp.json`):
```json
{
  "servers": {
    "typescript": {
      "command": "typescript-language-server",
      "args": ["--stdio"]
    }
  }
}
```

2. **Plugin Marketplace 상세**:
   - `claude plugins search <query>` - 플러그인 검색
   - `claude plugins install <name>` - 플러그인 설치
   - `claude plugins list` - 설치된 플러그인 목록
   - `claude plugins update` - 플러그인 업데이트

3. **Managed Plugins**:
   - 조직 레벨 플러그인 관리
   - 플러그인 승인/거부 정책

---

### 2.5 MCP 프로토콜 ⚠️ 대규모 업데이트 필요

**현재 상태**: 중요 변경사항 누락

**확인됨**:
- MCP Tool Search Auto Mode 이미 포함 ✅ (라인 176-190)
- 주요 MCP 서버 소개 ✅

**누락된 정보**:

1. **HTTP Transport (SSE deprecated)**:
```json
// 새로운 방식 (HTTP)
{
  "mcpServers": {
    "my-server": {
      "url": "http://localhost:3000/mcp",
      "transport": "http"
    }
  }
}

// 기존 방식 (SSE) - DEPRECATED
{
  "mcpServers": {
    "my-server": {
      "url": "http://localhost:3000/sse",
      "transport": "sse"  // deprecated
    }
  }
}
```

2. **Managed MCP 설정**:
```json
{
  "managedMcp": {
    "servers": ["github", "supabase"],
    "autoUpdate": true
  }
}
```

3. **MCP 리소스 @ 멘션**:
```
claude> @database/users 테이블 구조를 분석해줘
claude> @github/issues 최근 이슈 목록 보여줘
```

4. **MCP 프롬프트를 슬래시 명령어로**:
   - MCP 서버의 프롬프트가 자동으로 슬래시 명령어로 등록
   - `/mcp-server-name/prompt-name` 형태로 사용

5. **새로운 MCP 서버 추가 방식**:
```bash
# 기존
claude mcp add supabase -e SUPABASE_ACCESS_TOKEN=...

# 새로운 방식 (URL 직접 지정)
claude mcp add my-server --url http://localhost:3000/mcp
```

---

### 2.6 Skills ❌ 신규 페이지 필요

**공식 문서**: /docs/en/skills

**주요 콘텐츠**:

1. **Skills란?**
   - SKILL.md 파일로 정의
   - 특정 도메인/기술에 대한 전문 지식
   - 프로젝트나 사용자 레벨에서 정의

2. **SKILL.md 구조**:
```markdown
---
name: react-testing
description: React 컴포넌트 테스트 전문가
triggers:
  - "test"
  - "testing"
  - "jest"
tools:
  - Read
  - Write
  - Bash
---

# React Testing Skill

이 스킬은 React 컴포넌트 테스트에 특화되어 있습니다.

## 테스트 작성 가이드
...
```

3. **Skills 위치**:
   - 프로젝트: `.claude/skills/`
   - 사용자: `~/.claude/skills/`

4. **Skills 명령어**:
   - `/skills` - 사용 가능한 스킬 목록
   - `/skills <name>` - 특정 스킬 활성화

5. **Hot-Reload**:
   - 스킬 파일 수정 시 세션 재시작 없이 즉시 반영

---

### 2.7 Desktop App ❌ 신규 페이지 필요

**공식 문서**: /docs/en/desktop

**주요 콘텐츠**:

1. **설치 방법**:
   - macOS: DMG 다운로드 또는 `brew install --cask claude-code`
   - Windows: MSI 설치 또는 WinGet
   - Linux: AppImage 또는 패키지 매니저

2. **주요 기능**:
   - 네이티브 GUI 환경
   - 시스템 트레이 통합
   - 파일 드래그 앤 드롭
   - 멀티 세션 지원

3. **키보드 단축키**:
   - `Cmd/Ctrl + N` - 새 세션
   - `Cmd/Ctrl + W` - 세션 닫기
   - `Cmd/Ctrl + ,` - 설정

---

### 2.8 Chrome Extension ❌ 신규 페이지 필요

**공식 문서**: /docs/en/chrome (Beta)

**주요 콘텐츠**:

1. **설치**:
   - Chrome Web Store에서 설치
   - 또는 소스에서 빌드

2. **주요 기능**:
   - 웹 페이지 컨텍스트에서 Claude Code 호출
   - 선택한 텍스트 분석
   - 웹 자동화 작업

3. **권한**:
   - 현재 탭 접근
   - 클립보드 읽기/쓰기

---

### 2.9 Slack Integration ❌ 신규 페이지 필요

**공식 문서**: /docs/en/slack

**주요 콘텐츠**:

1. **설정**:
   - Slack App 생성 및 연동
   - OAuth 토큰 설정

2. **사용법**:
   - DM으로 Claude Code 호출
   - 채널에서 @mention
   - 코드 스니펫 공유

---

### 2.10 Output Styles ❌ 신규 페이지 필요

**공식 문서**: /docs/en/output-styles

**주요 콘텐츠**:

1. **설정 방법**:
```json
{
  "outputStyle": "concise" | "detailed" | "technical"
}
```

2. **사용 가능한 스타일**:
   - `concise` - 간결한 응답
   - `detailed` - 상세한 설명 포함
   - `technical` - 기술적 세부사항 강조
   - `educational` - 학습 목적 설명

3. **커스텀 스타일**:
```json
{
  "customOutputStyle": {
    "name": "my-style",
    "rules": [
      "Always include code examples",
      "Use bullet points for lists"
    ]
  }
}
```

---

## 3. CLAUDE.md 업데이트 필요 사항

### 3.1 설치 방법 섹션
```markdown
### 4. Installation Methods (UPDATE NEEDED)
   - ~~NPM install: `npm install -g @anthropic-ai/claude-code`~~ **(DEPRECATED)**
   - Native install (Recommended):
```

### 3.2 새 기능 목록 추가
```markdown
### Latest Features (2025-2026)
- **Skills** - SKILL.md로 정의하는 도메인 전문 지식
- **Desktop App** - 네이티브 GUI 환경
- **Chrome Extension (Beta)** - 브라우저 자동화
- **Slack Integration** - Slack에서 코딩 작업
- **Output Styles** - 응답 스타일 커스터마이징
- **HTTP MCP Transport** - SSE deprecated, HTTP 권장
- **MCP Resource Mentions** - @resource 형태로 MCP 리소스 참조
```

---

## 4. 번역 파일 업데이트 필요 사항

### 4.1 ko.json 추가 필요 키
```json
{
  "skills": {
    "title": "스킬",
    "subtitle": "도메인 전문 지식을 SKILL.md로 정의하세요",
    ...
  },
  "hooks": {
    "eventTypes": {
      "permissionRequest": "권한 요청",
      "preCompact": "컨텍스트 압축 전",
      "subagentStart": "서브에이전트 시작",
      "subagentStop": "서브에이전트 종료"
    },
    "promptBasedHooks": {
      "title": "프롬프트 기반 훅",
      "description": "LLM을 사용하여 동적으로 결정"
    }
  }
}
```

### 4.2 en.json 추가 필요 키
```json
{
  "skills": {
    "title": "Skills",
    "subtitle": "Define domain expertise with SKILL.md",
    ...
  }
}
```

---

## 5. 권장 작업 순서

### Phase 1 - 긴급 수정 (1-2일)
1. [ ] CLAUDE.md의 npm deprecated 표시
2. [ ] Hooks 페이지 - 새 이벤트 타입 추가
3. [ ] MCP 페이지 - HTTP transport 업데이트

### Phase 2 - 핵심 기능 추가 (3-5일)
4. [ ] Skills 페이지 신규 생성
5. [ ] Subagents 페이지 업데이트
6. [ ] Plugins 페이지 업데이트

### Phase 3 - 부가 기능 추가 (5-7일)
7. [ ] Desktop App 페이지 생성
8. [ ] Chrome Extension 페이지 생성
9. [ ] Slack Integration 페이지 생성
10. [ ] Output Styles 페이지 생성

### Phase 4 - 번역 및 마무리 (2-3일)
11. [ ] ko.json 번역 파일 업데이트
12. [ ] en.json 번역 파일 업데이트
13. [ ] 네비게이션 메뉴 업데이트
14. [ ] 전체 테스트 및 검토

---

## 6. 참고 자료

- 공식 문서: https://code.claude.com/docs/en/
- GitHub: https://github.com/anthropics/claude-code
- MCP 서버 목록: https://glama.ai/mcp/servers

---

**보고서 작성 완료**: 2026-01-19T14:30:00+09:00
