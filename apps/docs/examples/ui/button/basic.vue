<template>
  <div class="demo-button">
    <TButton>按钮</TButton>
    <TButton type="primary">按钮</TButton>
    <TButton type="success">按钮</TButton>
    <TButton type="warning">按钮</TButton>
    <TButton type="danger">按钮</TButton>
    <TButton type="info">按钮</TButton>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.demo-button {
  display: flex;
  gap: 16px;
}
</style>
