import{p as m,_ as i,c as d,o as a,j as o,k as t,t as V}from"./framework.DDBqVXhc.js";const y=`<template>
  <div class="demo">
    <button @click="increment">increment</button>
    <span>{{ count }}</span>
    <button @click="decrement">decrement</button>
  </div>
</template>

<script setup>
import { useCounter } from '@worthman/hooks';

const { count, increment, decrement } = useCounter();
<\/script>

<style scoped lang="scss">
.demo {
  display: flex;
  flex-direction: column;

  span {
    text-align: center;
  }
}
</style>
`;function b(r=0){const n=m(r);return{count:n,increment:()=>{n.value++},decrement:()=>{n.value--}}}const u={class:"demo"},p={__name:"basic",setup(r){const{count:n,increment:c,decrement:l}=b();return(C,e)=>(a(),d("div",u,[o("button",{onClick:e[0]||(e[0]=(...s)=>t(c)&&t(c)(...s))},"increment"),o("span",null,V(t(n)),1),o("button",{onClick:e[1]||(e[1]=(...s)=>t(l)&&t(l)(...s))},"decrement")]))}},G=i(p,[["__scopeId","data-v-ee6be8f7"]]);export{y as T,G as a};
