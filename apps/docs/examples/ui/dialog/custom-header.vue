<template>
  <div class="dialog-demo">
    <TButton @click="open = true">自定义头部</TButton>
    <TDialog v-model:open="open" width="50%" :show-footer="true">
      <template #header>
        <div class="custom-header">
          <h3>自定义标题</h3>
          <small>这是一个小提示</small>
        </div>
      </template>
      <span>这是对话框的内容</span>
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

.custom-header {
  display: flex;
  flex-direction: column;
}

.custom-header h3 {
  margin: 0;
  font-size: 18px;
  color: #303133;
}

.custom-header small {
  margin-top: 5px;
  font-size: 12px;
  color: #909399;
}
</style>
