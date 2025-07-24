<template>
  <div class="demo-button">
    <TButton type="link">默认链接按钮</TButton>
    <TButton type="link" disabled>禁用链接按钮</TButton>
    <TButton type="link" icon="search">带图标链接按钮</TButton>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.demo-button {
  display: flex;
  gap: 16px;
}
</style>
