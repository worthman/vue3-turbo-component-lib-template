<template>
  <a-space>
    <!-- 全局引入测试 -->
    <TButton>按钮</TButton>
    <TButton type="primary">按钮</TButton>
    <TButton type="success">按钮</TButton>
    <TButton type="warning">按钮</TButton>
    <TButton type="danger">按钮</TButton>
    <TButton type="info">按钮</TButton>
  </a-space>
</template>

<script setup lang="ts">
// import { TButton } from '~@worthman/ui'; // 本地实时调试，组件修改代码，立马能看到效果，不需要打包
// import { TButton } from '@worthman/ui'; // 从node_modules/@worthman/ui/dist/es里面引入的，需要打包ui库
// 导出类型测试
// import type { ButtonProps } from '@worthman/ui';
// const buttonProps: ButtonProps = {
//   type: 'primary',
// };
</script>
