import{V as a}from"./theme.CLzddzTR.js";import{d as o,p as s,c,o as V,F as p,G as i,j as n,k as m,w as r,_ as b}from"./framework.DDBqVXhc.js";const N=`<template>
  <VDialog v-model:open="open">
    <div>弹窗测试2222</div>
  </VDialog>
  <button @click="open = true">弹窗</button>
</template>

<script setup lang="ts">
import { VDialog } from '@worthman/ui';
import { ref } from 'vue';
const open = ref(false);
<\/script>
<style scoped lang="scss">
button {
  all: revert;
}
</style>
`,d=o({__name:"basic",setup(u){const l=s(!1);return(Q,t)=>(V(),c(p,null,[i(m(a),{open:l.value,"onUpdate:open":t[0]||(t[0]=e=>l.value=e)},{default:r(()=>t[2]||(t[2]=[n("div",null,"弹窗测试2222",-1)])),_:1},8,["open"]),n("button",{onClick:t[1]||(t[1]=e=>l.value=!0)},"弹窗")],64))}}),W=b(d,[["__scopeId","data-v-ba5cef3b"]]);export{N as T,W as a};
