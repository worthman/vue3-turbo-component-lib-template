<!--
 * @Author: 'worthman' renth3@asiainfo.com
 * @Date: 2025-04-11 14:52:36
 * @LastEditors: 'worthman' renth3@asiainfo.com
 * @LastEditTime: 2025-07-24 10:44:32
 * @FilePath: \vue3-turbo-component-lib-template\packages\ui\README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

# @worthman/ui

Vue 3 组件库，基于 Vue 3 + TypeScript 构建的现代化组件库。

## 特性

- 🚀 基于 Vue 3 + TypeScript 构建
- 📦 支持按需引入
- 💪 使用 Monorepo + pnpm 工作区管理
- 📝 完整的类型定义
- 🔧 完善的开发工具链

## 安装

```bash
npm install @worthman/ui

yarn add @worthman/ui

pnpm add @worthman/ui
```

## 快速开始

### 全局引入

```ts
// main.ts
import { createApp } from 'vue';
import App from './App.vue';

import VUI from '@worthman/ui';
import '@worthman/ui/style.css';

const app = createApp(App);
app.use(VUI);
app.mount('#app');
```

### 按需引入

```ts
// main.ts
import { createApp } from 'vue';
import App from './App.vue';

import { Button } from '@worthman/ui';
import '@worthman/ui/style.css';

const app = createApp(App);
app.use(Button);
app.mount('#app');
```

## 使用示例

```vue
<template>
  <TButton @click="open = true">弹窗</TButton>
  <TButton type="primary">按钮</TButton>
  <TButton type="success">按钮</TButton>
  <TButton type="warning">按钮</TButton>
  <TButton type="danger">按钮</TButton>
  <TButton type="info">按钮</TButton>
  <TDialog v-model:open="open">
    <div>弹窗测试2222</div>
  </TDialog>
</template>

<script setup lang="ts">
import { TButton, TDialog } from '@worthman/ui';
import { ref } from 'vue';
const open = ref(false);
</script>
```
