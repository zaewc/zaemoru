<img width="431" height="77" alt="zaemoru" src="https://github.com/user-attachments/assets/4272f711-2c4f-474e-8aa5-b18d1369b38e" />

---

# zaemoru

zaemoru는 여러 프레임워크에서 같은 UI를 쓸 수 있게 돕는 디자인 시스템이에요. Web Components를 중심에 두고, React, Vue, Angular, Svelte, Solid, Qwik, Lit, Preact, Astro, Alpine.js, HTMX, Ember에서 같은 `zm-*` 컴포넌트를 사용할 수 있어요.

zaemoru는 또렷한 텍스트, 충분한 간격, 분명한 상태 표현, 안정적인 인터랙션 영역을 중요하게 봐요. 컴포넌트 예시와 사용 코드는 [docs](https://moru-phi.vercel.app/)에서 확인할 수 있어요.

## 패키지

| 패키지              | 역할                                                                  |
| ------------------- | --------------------------------------------------------------------- |
| `@zaemoru/tokens`   | CSS 변수 기반 디자인 토큰을 제공해요.                                 |
| `@zaemoru/elements` | Lit 기반 `zm-*` Web Components를 등록해요.                            |
| `@zaemoru/react`    | React에서 타입이 있는 컴포넌트로 사용할 수 있어요.                    |
| `@zaemoru/vue`      | Vue 앱에서 `zm-*` 요소와 태그 상수를 사용할 수 있어요.                |
| `@zaemoru/angular`  | Angular 앱에서 `zm-*` 요소와 Angular용 헬퍼를 사용할 수 있어요.       |
| `@zaemoru/svelte`   | Svelte 앱에서 `zm-*` 요소와 태그 상수를 사용할 수 있어요.             |
| `@zaemoru/solid`    | Solid 앱에서 `zm-*` 요소와 태그 상수를 사용할 수 있어요.              |
| `@zaemoru/qwik`     | Qwik 앱에서 `zm-*` 요소와 태그 상수를 사용할 수 있어요.               |
| `@zaemoru/lit`      | Lit 앱에서 elements 전체 export와 Lit용 attr 헬퍼를 사용할 수 있어요. |
| `@zaemoru/preact`   | Preact 앱에서 `zm-*` 요소와 태그 상수를 사용할 수 있어요.             |
| `@zaemoru/astro`    | Astro 페이지와 아일랜드에서 `zm-*` 요소를 사용할 수 있어요.           |
| `@zaemoru/alpine`   | Alpine.js 화면에서 `zm-*` 요소를 사용할 수 있어요.                    |
| `@zaemoru/htmx`     | HTMX 속성과 함께 `zm-*` 요소를 사용할 수 있어요.                      |
| `@zaemoru/ember`    | Ember 앱에서 `zm-*` 요소를 사용할 수 있어요.                          |

## 설치

필요한 프레임워크 어댑터와 토큰을 함께 설치해요.

```bash
pnpm add @zaemoru/tokens @zaemoru/elements
pnpm add @zaemoru/react
```

다른 프레임워크를 쓴다면 `@zaemoru/react` 대신 필요한 어댑터를 설치해요.

```txt
@zaemoru/vue
@zaemoru/angular
@zaemoru/svelte
@zaemoru/solid
@zaemoru/qwik
@zaemoru/lit
@zaemoru/preact
@zaemoru/astro
@zaemoru/alpine
@zaemoru/htmx
@zaemoru/ember
```

## 기본 사용법

프레임워크와 관계없이 토큰 CSS를 먼저 불러와요.

```ts
import "@zaemoru/tokens/index.css";
```

Web Components만 사용할 때는 elements 패키지를 불러온 뒤 `zm-*` 태그를 그대로 써요.

```ts
import "@zaemoru/tokens/index.css";
import "@zaemoru/elements";
```

```html
<zm-button size="large">계속하기</zm-button>
<zm-badge size="small" color="blue" variant="fill">신규</zm-badge>
<zm-text-field label="이름" placeholder="이름을 입력해요"></zm-text-field>
```

## 프레임워크

### React

React는 타입이 있는 컴포넌트를 export해요. React 패키지를 import하면 내부에서 `zm-*` custom element도 등록돼요.

```tsx
import "@zaemoru/tokens/index.css";
import { Badge, Button, TextField } from "@zaemoru/react";

export function App() {
  return (
    <form>
      <Badge size="small" color="blue" variant="fill">
        신규
      </Badge>
      <TextField label="이름" placeholder="이름을 입력해요" />
      <Button size="large">계속하기</Button>
    </form>
  );
}
```

### Vue

```ts
import "@zaemoru/tokens/index.css";
import "@zaemoru/vue";
```

```vue
<template>
  <zm-button size="large">계속하기</zm-button>
  <zm-badge size="small" color="green" variant="weak">완료</zm-badge>
</template>
```

### Angular

Angular에서는 adapter를 한 번 import하고, Angular 설정에 custom elements schema를 추가해서 `zm-*` 태그를 허용해요.

```ts
import "@zaemoru/tokens/index.css";
import "@zaemoru/angular";
import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-root",
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <zm-button size="large">계속하기</zm-button>
    <zm-badge size="small" color="teal" variant="fill">진행중</zm-badge>
  `,
})
export class AppComponent {}
```

### Svelte

```svelte
<script lang="ts">
  import "@zaemoru/tokens/index.css";
  import "@zaemoru/svelte";
</script>

<zm-button size="large">계속하기</zm-button>
<zm-badge size="small" color="red" variant="weak">주의</zm-badge>
```

### Solid

```tsx
import "@zaemoru/tokens/index.css";
import "@zaemoru/solid";

export function App() {
  return (
    <>
      <zm-button size="large">계속하기</zm-button>
      <zm-badge size="small" color="yellow" variant="fill">
        알림
      </zm-badge>
    </>
  );
}
```

### Qwik

```tsx
import "@zaemoru/tokens/index.css";
import "@zaemoru/qwik";
import { component$ } from "@builder.io/qwik";

export default component$(() => (
  <>
    <zm-button size="large">계속하기</zm-button>
    <zm-badge size="small" color="elephant" variant="weak">
      정보
    </zm-badge>
  </>
));
```

### Lit

`@zaemoru/lit`은 `@zaemoru/elements`를 다시 export하고, Lit에서 attribute 객체를 만들 수 있는 `createZaemoruLitAttrs`도 제공해요.

```ts
import "@zaemoru/tokens/index.css";
import { html } from "lit";
import "@zaemoru/lit";

export const view = html`
  <zm-button size="large">계속하기</zm-button>
  <zm-badge size="small" color="blue" variant="fill">신규</zm-badge>
`;
```

### Preact

```tsx
import "@zaemoru/tokens/index.css";
import "@zaemoru/preact";

export function App() {
  return (
    <>
      <zm-button size="large">계속하기</zm-button>
      <zm-badge size="small" color="green" variant="weak">
        완료
      </zm-badge>
    </>
  );
}
```

### Astro

```astro
---
import "@zaemoru/tokens/index.css";
import "@zaemoru/astro";
---

<zm-button size="large">계속하기</zm-button>
<zm-badge size="small" color="blue" variant="fill">신규</zm-badge>
```

### Alpine.js

```html
<script type="module">
  import "@zaemoru/tokens/index.css";
  import "@zaemoru/alpine";
</script>

<div x-data="{ label: '계속하기' }">
  <zm-button size="large" x-text="label"></zm-button>
  <zm-badge size="small" color="teal" variant="fill">진행중</zm-badge>
</div>
```

### HTMX

```html
<script type="module">
  import "@zaemoru/tokens/index.css";
  import "@zaemoru/htmx";
</script>

<zm-button hx-post="/submit" hx-target="#result" size="large">제출하기</zm-button>
<div id="result"></div>
```

### Ember

```ts
import "@zaemoru/tokens/index.css";
import "@zaemoru/ember";
```

```hbs
<zm-button size="large">계속하기</zm-button>
<zm-badge size="small" color="red" variant="weak">주의</zm-badge>
```

## 어댑터 공통 API

React를 제외한 프레임워크 어댑터는 `@zaemoru/elements`를 등록하고, 공통 메타데이터와 태그 상수를 다시 export해요.

```ts
import { Button, Badge, zaemoruComponents, zaemoruComponentTags } from "@zaemoru/vue";

console.log(Button); // "zm-button"
console.log(Badge); // "zm-badge"
console.log(zaemoruComponentTags.Button); // "zm-button"
console.log(zaemoruComponents.length); // 97
```

공통 export:

```txt
applyZaemoruProps
defineZaemoruElements
getZaemoruComponent
isZaemoruElement
toZaemoruAttributes
zaemoruComponents
zaemoruComponentTags
```

## 컴포넌트

현재 `@zaemoru/elements` 기준 97개 컴포넌트를 제공해요.

| 컴포넌트               | 태그                       | 설명                                                       |
| ---------------------- | -------------------------- | ---------------------------------------------------------- |
| `Agreement`            | `zm-agreement`             | 약관 동의 묶음을 만들어요.                                 |
| `AlphabetKeypad`       | `zm-alphabet-keypad`       | 알파벳 키패드를 만들어요.                                  |
| `Asset`                | `zm-asset`                 | 이미지, 이니셜, 시각 자산을 표시해요.                      |
| `Badge`                | `zm-badge`                 | 상태나 분류를 짧게 강조해요.                               |
| `BarChart`             | `zm-bar-chart`             | 막대 차트를 표시해요.                                      |
| `BoardRow`             | `zm-board-row`             | 게시판형 행 UI를 만들어요.                                 |
| `Border`               | `zm-border`                | 구분선을 표시해요.                                         |
| `BottomCta`            | `zm-bottom-cta`            | 하단 CTA 영역을 만들어요.                                  |
| `BottomInfo`           | `zm-bottom-info`           | 하단 안내 메시지를 표시해요.                               |
| `BottomSheet`          | `zm-bottom-sheet`          | 하단에서 열리는 시트를 만들어요.                           |
| `Bubble`               | `zm-bubble`                | 말풍선형 안내를 표시해요.                                  |
| `Button`               | `zm-button`                | 주요 버튼을 만들어요.                                      |
| `Card`                 | `zm-card`                  | 콘텐츠를 묶는 표면을 만들어요.                             |
| `Checkbox`             | `zm-checkbox`              | 체크박스 입력을 만들어요.                                  |
| `Dialog`               | `zm-dialog`                | alert/confirm 대화상자를 만들어요.                         |
| `GridList`             | `zm-grid-list`             | 그리드 목록을 만들어요.                                    |
| `Heading`              | `zm-heading`               | 제목 텍스트를 표시해요.                                    |
| `Highlight`            | `zm-highlight`             | 텍스트나 영역을 강조해요.                                  |
| `IconButton`           | `zm-icon-button`           | 아이콘 버튼을 만들어요.                                    |
| `ListFooter`           | `zm-list-footer`           | 목록 하단 안내를 표시해요.                                 |
| `ListHeader`           | `zm-list-header`           | 목록 상단 제목과 설명을 표시해요.                          |
| `ListRow`              | `zm-list-row`              | 일반 목록 행을 만들어요.                                   |
| `Loader`               | `zm-loader`                | 로딩 상태를 표시해요.                                      |
| `Menu`                 | `zm-menu`                  | 선택 가능한 메뉴를 만들어요.                               |
| `Modal`                | `zm-modal`                 | 중앙 모달을 만들어요.                                      |
| `NumberKeypad`         | `zm-number-keypad`         | 숫자 키패드를 만들어요.                                    |
| `NumericSpinner`       | `zm-numeric-spinner`       | 숫자 증감 입력을 만들어요.                                 |
| `Paragraph`            | `zm-paragraph`             | 본문 문단을 표시해요.                                      |
| `Post`                 | `zm-post`                  | 포스트형 콘텐츠 블록을 만들어요.                           |
| `ProgressBar`          | `zm-progress-bar`          | 진행률 막대를 표시해요.                                    |
| `ProgressStepper`      | `zm-progress-stepper`      | 단계 진행 상태를 표시해요.                                 |
| `Rating`               | `zm-rating`                | 별점 입력이나 표시를 만들어요.                             |
| `Result`               | `zm-result`                | 완료, 오류, 빈 상태 같은 결과 화면을 만들어요.             |
| `SearchField`          | `zm-search-field`          | 검색 입력을 만들어요.                                      |
| `Section`              | `zm-section`               | 화면 섹션을 묶어요.                                        |
| `SecureKeypad`         | `zm-secure-keypad`         | 보안 키패드를 만들어요.                                    |
| `SegmentedControl`     | `zm-segmented-control`     | 세그먼트 선택 컨트롤을 만들어요.                           |
| `Skeleton`             | `zm-skeleton`              | 로딩 자리 표시자를 표시해요.                               |
| `Slider`               | `zm-slider`                | 단일 값 슬라이더를 만들어요.                               |
| `Spinner`              | `zm-spinner`               | 스피너 로딩 상태를 표시해요.                               |
| `SplitTextField`       | `zm-split-text-field`      | 분리된 텍스트 입력을 만들어요.                             |
| `Stepper`              | `zm-stepper`               | 단계형 숫자 입력을 만들어요.                               |
| `Switch`               | `zm-switch`                | 켜짐/꺼짐 입력을 만들어요.                                 |
| `Tab`                  | `zm-tab`                   | 탭 선택 UI를 만들어요.                                     |
| `TableRow`             | `zm-table-row`             | 표 형태의 행을 표시해요.                                   |
| `Text`                 | `zm-text`                  | 기본 텍스트를 표시해요.                                    |
| `TextArea`             | `zm-text-area`             | 여러 줄 텍스트 입력을 만들어요.                            |
| `TextButton`           | `zm-text-button`           | 텍스트형 버튼을 만들어요.                                  |
| `TextField`            | `zm-text-field`            | 한 줄 텍스트 입력을 만들어요.                              |
| `Toast`                | `zm-toast`                 | 토스트 알림을 표시해요.                                    |
| `Tooltip`              | `zm-tooltip`               | 보조 설명 툴팁을 표시해요.                                 |
| `Top`                  | `zm-top`                   | 상단 헤더 영역을 만들어요.                                 |
| `Masthead`             | `zm-masthead`              | 큰 상단 소개 영역을 만들어요.                              |
| `Identifier`           | `zm-identifier`            | 식별 정보 블록을 만들어요.                                 |
| `Header`               | `zm-header`                | 헤더 레이아웃을 만들어요.                                  |
| `Footer`               | `zm-footer`                | 푸터 레이아웃을 만들어요.                                  |
| `SkipLink`             | `zm-skip-link`             | 접근성용 바로가기 링크를 만들어요.                         |
| `MainMenu`             | `zm-main-menu`             | 주요 메뉴 영역을 만들어요.                                 |
| `Breadcrumb`           | `zm-breadcrumb`            | 경로 탐색을 표시해요.                                      |
| `SideNavigation`       | `zm-side-navigation`       | 측면 내비게이션을 만들어요.                                |
| `InPageNavigation`     | `zm-in-page-navigation`    | 페이지 내부 내비게이션을 만들어요.                         |
| `Pagination`           | `zm-pagination`            | 페이지 이동 컨트롤을 만들어요.                             |
| `StructuredList`       | `zm-structured-list`       | 구조화된 목록을 표시해요.                                  |
| `CriticalAlert`        | `zm-critical-alert`        | 중요한 경고를 표시해요.                                    |
| `Calendar`             | `zm-calendar`              | 캘린더 UI를 만들어요.                                      |
| `Disclosure`           | `zm-disclosure`            | 접고 펼치는 정보 영역을 만들어요.                          |
| `Accordion`            | `zm-accordion`             | 아코디언 목록을 만들어요.                                  |
| `Image`                | `zm-image`                 | 이미지를 표시해요.                                         |
| `Carousel`             | `zm-carousel`              | 캐러셀을 만들어요.                                         |
| `Table`                | `zm-table`                 | 표를 표시해요.                                             |
| `TextList`             | `zm-text-list`             | 텍스트 목록을 표시해요.                                    |
| `Favicon`              | `zm-favicon`               | 파비콘/아이콘 표시를 만들어요.                             |
| `Link`                 | `zm-link`                  | 링크 UI를 만들어요.                                        |
| `Fab`                  | `zm-fab`                   | 플로팅 액션 버튼을 만들어요.                               |
| `RadioButton`          | `zm-radio-button`          | 라디오 버튼 입력을 만들어요.                               |
| `Select`               | `zm-select`                | 선택 입력을 만들어요.                                      |
| `Tag`                  | `zm-tag`                   | 태그 UI를 표시해요.                                        |
| `ToggleSwitch`         | `zm-toggle-switch`         | 토글 스위치 UI를 만들어요.                                 |
| `StepIndicator`        | `zm-step-indicator`        | 단계 표시기를 만들어요.                                    |
| `HelpPanel`            | `zm-help-panel`            | 도움말 패널을 표시해요.                                    |
| `TutorialPanel`        | `zm-tutorial-panel`        | 튜토리얼 패널을 표시해요.                                  |
| `ContextualHelp`       | `zm-contextual-help`       | 맥락형 도움말을 표시해요.                                  |
| `CoachMark`            | `zm-coach-mark`            | 기능 안내 코치마크를 표시해요.                             |
| `Tts`                  | `zm-tts`                   | TTS 관련 UI를 만들어요.                                    |
| `DateInput`            | `zm-date-input`            | 날짜 입력을 만들어요.                                      |
| `TextInput`            | `zm-text-input`            | 텍스트 입력을 만들어요.                                    |
| `FileUpload`           | `zm-file-upload`           | 파일 업로드 입력을 만들어요.                               |
| `LanguageSwitcher`     | `zm-language-switcher`     | 언어 전환 UI를 만들어요.                                   |
| `Resize`               | `zm-resize`                | 크기 조절 UI를 만들어요.                                   |
| `AccessibleMultimedia` | `zm-accessible-multimedia` | 접근성 보조 멀티미디어 영역을 만들어요.                    |
| `VisuallyHidden`       | `zm-visually-hidden`       | 시각적으로 숨기고 보조기술에는 노출하는 콘텐츠를 만들어요. |
| `RangeSlider`          | `zm-range-slider`          | 범위 슬라이더를 만들어요.                                  |
| `BackButton`           | `zm-back-button`           | 뒤로가기 버튼을 만들어요.                                  |
| `QuantityToggle`       | `zm-quantity-toggle`       | 수량 조절 UI를 만들어요.                                   |
| `Snackbar`             | `zm-snackbar`              | 스낵바 알림을 표시해요.                                    |
| `TabBars`              | `zm-tab-bars`              | 탭 바 내비게이션을 만들어요.                               |
| `SplashScreen`         | `zm-splash-screen`         | 스플래시 화면을 만들어요.                                  |

## 개발 명령어

```bash
pnpm dev
pnpm build
pnpm typecheck
pnpm lint
pnpm format
```

## 릴리스

패키지 변경 사항을 배포할 때는 Changesets를 써요.

```bash
pnpm changeset
```

의미 있는 변경을 만든 뒤 changeset을 추가해요.
