<img width="431" height="77" alt="zaemoru" src="https://github.com/user-attachments/assets/4272f711-2c4f-474e-8aa5-b18d1369b38e" />

---

# zaemoru

zaemoru는 여러 프레임워크에서 같은 UI를 쓸 수 있게 돕는 디자인 시스템이에요. zaemoru는 또렷한 텍스트, 충분한 간격, 분명한 상태 표현, 안정적인 인터렉션 영역을 중요하게 봐요.

Web Components를 중심에 두고, React, Vue, Angular, Svelte, Solid, Qwik, Lit, Preact, Astro, Alpine.js, HTMX, Ember에서 자연스럽게 연결해요.

## 이렇게 쓸 수 있어요

- 토큰으로 색상, 글꼴, 간격, 그림자, 모서리 값을 맞춰요.
- Web Components로 버튼, 입력, 내비게이션, 피드백, 데이터 표시 UI를 만들어요.
- 각 프레임워크 어댑터로 같은 컴포넌트를 익숙한 방식으로 불러와요.
- [docs](https://moru-phi.vercel.app/)에서 컴포넌트 예시와 사용 코드를 바로 확인해요.

## 패키지

| 패키지              | 역할                                              |
| ------------------- | ------------------------------------------------- |
| `@zaemoru/tokens`   | CSS 변수로 디자인 토큰을 제공해요.                |
| `@zaemoru/elements` | Lit 기반 `zm-*` Web Components를 제공해요.        |
| `@zaemoru/react`    | React에서 타입이 있는 컴포넌트로 쓸 수 있게 해요. |
| `@zaemoru/vue`      | Vue 앱에서 Web Components를 등록해요.             |
| `@zaemoru/angular`  | Angular 앱에서 `zm-*` 요소를 쓸 수 있게 해요.     |
| `@zaemoru/svelte`   | Svelte 앱에서 Web Components를 불러와요.          |
| `@zaemoru/solid`    | Solid 앱에서 Web Components를 불러와요.           |
| `@zaemoru/qwik`     | Qwik 앱에서 Web Components를 불러와요.            |
| `@zaemoru/lit`      | Lit 앱에서 같은 요소를 바로 써요.                 |
| `@zaemoru/preact`   | Preact 앱에서 Web Components를 불러와요.          |
| `@zaemoru/astro`    | Astro 페이지와 아일랜드에서 쓸 수 있게 해요.      |
| `@zaemoru/alpine`   | Alpine.js 화면에서 `zm-*` 요소를 쓸 수 있게 해요. |
| `@zaemoru/htmx`     | HTMX 속성과 함께 쓸 수 있게 해요.                 |
| `@zaemoru/ember`    | Ember 앱에서 Web Components를 등록해요.           |

## 기본 사용법

먼저 토큰과 Web Components를 불러와요.

```ts
import "@zaemoru/tokens/index.css";
import "@zaemoru/elements";
```

HTML에서는 `zm-*` 요소를 바로 써요.

```html
<zm-button size="large">계속하기</zm-button>
<zm-text-field label="이름" placeholder="이름을 입력해요"></zm-text-field>
```

## React에서 쓰기

```tsx
import "@zaemoru/tokens/index.css";
import { Button, TextField } from "@zaemoru/react";

export function App() {
  return (
    <form>
      <TextField label="이름" placeholder="이름을 입력해요" />
      <Button size="large">계속하기</Button>
    </form>
  );
}
```

## 다른 프레임워크에서 쓰기

어댑터를 한 번 불러온 뒤 `zm-*` 요소를 써요.

```ts
import "@zaemoru/tokens/index.css";
import "@zaemoru/vue";
```

```html
<zm-button size="large">계속하기</zm-button>
```

프레임워크에 맞는 패키지를 선택해요.

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
