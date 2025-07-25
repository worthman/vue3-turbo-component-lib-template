<template>
  <div class="dialog-demo">
    <TButton @click="open = true">自定义内容</TButton>
    <TDialog v-model:open="open" title="表单" width="30%" :show-footer="true">
      <div class="custom-form">
        <div class="form-item">
          <label>姓名</label>
          <input type="text" placeholder="请输入姓名" />
        </div>
        <div class="form-item">
          <label>邮箱</label>
          <input type="email" placeholder="请输入邮箱" />
        </div>
        <div class="form-item">
          <label>备注</label>
          <textarea placeholder="请输入备注信息" />
        </div>
      </div>
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

.custom-form {
  padding: 10px;
}

.form-item {
  margin-bottom: 15px;
}

.form-item label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-item input,
.form-item textarea {
  box-sizing: border-box;
  width: 100%;
  padding: 8px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
}

.form-item textarea {
  height: 80px;
  resize: vertical;
}
</style>
