<template>
  <div class="demo-button-loading">
    <TButton loading type="primary">加载中</TButton>
    <TButton loading type="success">加载中</TButton>
    <TButton loading type="warning">加载中</TButton>
    <TButton loading type="danger">加载中</TButton>
    <TButton loading type="info">加载中</TButton>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.demo-button-loading {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 16px;
}
</style>
