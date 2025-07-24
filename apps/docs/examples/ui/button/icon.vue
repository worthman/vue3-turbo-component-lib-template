<template>
  <div class="demo-button">
    <TButton type="primary" icon="search">搜索</TButton>
    <TButton type="success" icon="check">成功</TButton>
    <TButton type="warning" icon="exclamation">警告</TButton>
    <TButton type="danger" icon="delete">删除</TButton>
    <TButton type="info" icon="info">信息</TButton>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.demo-button {
  display: flex;
  gap: 16px;
}
</style>
