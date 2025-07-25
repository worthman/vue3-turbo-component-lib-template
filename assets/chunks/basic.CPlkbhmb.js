const n=`<template>
  <div class="dialog-demo">
    <TButton @click="open = true">点击打开对话框</TButton>
    <TDialog v-model:open="open" title="提示" :show-footer="true">
      <span>这是一段内容</span>
    </TDialog>
  </div>
</template>

<script setup lang="ts">
import { TButton, TDialog } from '@worthman/ui';
import { ref } from 'vue';

const open = ref(false);
<\/script>

<style scoped>
.dialog-demo {
  margin: 20px 0;
}
</style>
`;export{n as T};
