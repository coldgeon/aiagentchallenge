# Lumio — 제품 소개 랜딩 페이지

> 빛, 다시 디자인하다.
> 서카디안 리듬에 맞춰 색과 밝기를 조율하는 스마트 데스크 램프, **Lumio**의 브랜드 랜딩 페이지입니다.

---

## 1. 프로젝트 구조

```
landing-page/
├── index.html           # 한국어 메인 페이지
├── en/
│   └── index.html       # 영문 페이지 (English)
├── css/
│   └── style.css        # 반응형 스타일시트
├── js/
│   └── main.js          # 인터랙션 (네비, 스크롤 리빌, 모드 전환)
├── assets/
│   ├── hero-lamp.png        # 히어로 제품 이미지 (AI 생성)
│   ├── lifestyle-warm.png   # 라이프스타일 - 따뜻한 빛
│   └── lifestyle-cool.png   # 라이프스타일 - 시원한 빛
├── .nojekyll            # GitHub Pages 빌드 설정
├── package.json         # gh-pages 배포 스크립트
└── README.md
```

## 2. 사용된 기술

- **HTML5** (시맨틱 마크업, 다국어 지원)
- **CSS3** (CSS Variables, Grid, Flexbox, 반응형 미디어 쿼리)
- **Vanilla JavaScript** (IntersectionObserver, 모바일 메뉴, 폼 처리)
- **Google Fonts** (Cormorant Garamond + Inter + Pretendard + Noto Serif KR)

빌드 도구 없이 그대로 정적 호스팅에 배포할 수 있습니다.

## 3. 주요 기능

- 풀스크린 **히어로 섹션**과 자동 색온도 모드 표시 칩
- **6가지 제품 특징** 카드 (서카디안, 아이케어, 앱, 소재, 센서, 에너지)
- **디자인 쇼케이스** 및 **브랜드 스토리** 섹션
- 다크 톤 **테크 스펙** 그리드
- **사전예약 폼** (프론트엔드 검증, 데모 동작)
- **반응형 네비게이션** (햄버거 메뉴 / 모바일 풀스크린)
- 스크롤 진입 시 **리빌 애니메이션**
- **다국어 페이지** (한국어 ↔ English 전환)
- `prefers-reduced-motion` 대응

## 4. 로컬에서 실행

별도의 빌드 없이 어떤 정적 서버로도 실행할 수 있습니다.

```bash
# 옵션 1) Node가 설치된 경우
npx serve .

# 옵션 2) Python 3가 설치된 경우
python -m http.server 8000

# 옵션 3) VS Code Live Server 확장 사용
```

브라우저에서 `http://localhost:3000` (또는 `:8000`) 접속.

---

## 5. GitHub Pages 배포 (권장)

### 방법 A — `main` 브랜치에 바로 배포 (가장 쉬움)

1. GitHub 에서 새 저장소를 만듭니다. 예: `lumio-landing`
2. 이 폴더(`landing-page/`)를 저장소 루트로 푸시합니다.
   ```bash
   cd landing-page
   git init
   git add .
   git commit -m "feat: lumio landing page"
   git branch -M main
   git remote add origin https://github.com/<USERNAME>/<REPO>.git
   git push -u origin main
   ```
3. GitHub 저장소 → **Settings → Pages** 로 이동
4. **Source** 를 `Deploy from a branch` 로 선택
5. **Branch** 를 `main` / `/ (root)` 로 설정 후 **Save**
6. 1~2분 후 다음 주소에서 접속 가능:
   `https://<USERNAME>.github.io/<REPO>/`
   영문 페이지: `https://<USERNAME>.github.io/<REPO>/en/`

### 방법 B — `gh-pages` npm 패키지로 자동 배포

1. 저장소를 만들고 푸시한 뒤, 한 번만 의존성 설치:
   ```bash
   cd landing-page
   npm install
   ```
2. 배포:
   ```bash
   npm run deploy
   ```
   `gh-pages` 브랜치가 자동으로 생성/갱신되고, 그 브랜치가 GitHub Pages 의 소스가 됩니다.
3. GitHub 저장소 **Settings → Pages** 에서 Source 를 `gh-pages` / `/ (root)` 로 지정.

### 방법 C — 사용자 페이지(`<username>.github.io`)에 배포
1. 저장소 이름을 `<username>.github.io` 로 만듭니다.
2. 이 폴더의 내용을 그대로 푸시 → 자동으로 `https://<username>.github.io/` 에 배포됩니다.

---

## 6. 제출용 정보 (예시)

```
[실습 제출] : 대학교_성명_핸드폰뒷4자리.txt
- 배포된 도메인 주소 : https://<USERNAME>.github.io/<REPO>/
```

위 텍스트 파일을 만들어 함께 제출하시면 됩니다.

---

## 7. 커스터마이즈 팁

- 색상 팔레트는 `css/style.css` 상단의 `:root` 변수에서 한 번에 변경 가능합니다.
- 제품명·카피는 `index.html` / `en/index.html` 의 텍스트만 수정하면 됩니다.
- 새 이미지는 `assets/` 에 추가하고 HTML 의 `src=` 만 갈아끼우면 됩니다.

---

© 2026 Lumio Studio · Made with care in Seoul.
