<template>
  <div class="dialog-demo">
    <TButton @click="open = true">可拖拽对话框</TButton>
    <TDialog v-model:open="open" title="可拖拽" width="30%" :draggable="true" :show-footer="true">
      <div>这是一个可以拖拽的对话框</div>
      <div>点击头部并拖动来移动此对话框</div>
    </TDialog>
  </div>
</template>

<script setup lang="ts">
import { TButton, TDialog } from '@worthman/ui';
import { ref } from 'vue';

const open = ref(false);
</script>

<style scoped>
.dialog-demo {
  margin: 20px 0;
}
</style>
