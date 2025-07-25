<template>
  <div class="dialog-demo">
    <TButton @click="open = true">居中布局</TButton>
    <TDialog v-model:open="open" title="提示" width="50%" center :show-footer="true">
      <span>居中布局的对话框内容</span>
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
