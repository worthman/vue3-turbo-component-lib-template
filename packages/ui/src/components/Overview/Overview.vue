<template>
  <div class="overview-container">
    <h1>组件总览</h1>
    <p>以下是当前提供的所有组件。</p>

    <section class="component-category">
      <h2>基础组件</h2>
      <div class="component-list">
        <div class="component-item">
          <h3>Button 按钮</h3>
          <p>用于触发操作的按钮组件。</p>
          <div class="component-demo">
            <VButton type="primary">主要按钮</VButton>
            <VButton>默认按钮</VButton>
            <VButton type="text">文本按钮</VButton>
          </div>
        </div>

        <div class="component-item">
          <h3>Dialog 对话框</h3>
          <p>用于显示重要信息或请求用户确认的对话框。</p>
          <div class="component-demo">
            <VButton @click="showDialog = true">打开对话框</VButton>
            <VDialog v-model:visible="showDialog" title="对话框标题">
              <p>这是对话框内容</p>
            </VDialog>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VButton } from '../Button';
import { VDialog } from '../Dialog';

const showDialog = ref(false);
</script>

<style scoped>
.overview-container {
  padding: 20px;
}

.component-category {
  margin-top: 30px;
}

.component-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 15px;
}

.component-item {
  border: 1px solid #eaeaea;
  border-radius: 8px;
  padding: 20px;
  transition: all 0.3s;
}

.component-item:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.component-demo {
  margin-top: 15px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
</style>