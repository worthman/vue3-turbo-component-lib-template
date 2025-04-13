# Quick Start

## Introduction

mylib-template is a component library and toolkit template project based on Vue3, consisting of the following parts:

- UI Component Library: Provides commonly used UI components
- Utility Functions: Offers common utility functions
- Hooks: Provides reusable composable functions
- Directives: Offers commonly used directives

## Installation

Install using a package manager:

::: code-group

```bash [npm]
npm install @worthman/ui @worthman/utils @worthman/hooks @worthman/directives
```

```bash [yarn]
yarn add @worthman/ui @worthman/utils @worthman/hooks @worthman/directives
```

```bash [pnpm]
pnpm add @worthman/ui @worthman/utils @worthman/hooks @worthman/directives
```

```bash [bun]
bun add @worthman/ui @worthman/utils @worthman/hooks @worthman/directives
```

:::

## Usage

### UI Components

```ts
// Global import
import { createApp } from 'vue';
import UI from '@worthman/ui';
import '@worthman/ui/style.css';
const app = createApp(App);
app.use(UI);
// Additionally, add the following configuration to tsconfig.json for type hints:
// "types": ["@worthman/ui/global.d.ts"]

// Import on demand
import { Button } from '@worthman/ui';
import '@worthman/ui/style.css';
const app = createApp(App);
app.use(Button);
```

### Utility Functions

```ts
import { isString } from '@worthman/utils';
console.log(isString('hello')); // true
```

### Hooks

```ts
import { useCounter } from '@worthman/hooks';
const { count, increment, decrement } = useCounter();
```

### Directives

```ts
import { vFocus } from '@worthman/directives';
// Global import
app.directive('focus', vFocus);

// Import on demand
import { vFocus } from '@worthman/directives';
app.directive('focus', vFocus);
```
