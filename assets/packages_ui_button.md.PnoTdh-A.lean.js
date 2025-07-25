const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/size.KJldlU1z.js","assets/chunks/framework.Qw9YW2RS.js","assets/chunks/loading.C2Tii5cF.js","assets/chunks/icon.BZ6VhXuk.js","assets/chunks/link.Bet7Pts4.js","assets/chunks/basic.DTIR7vSO.js"])))=>i.map(i=>d[i]);
import{D as u,v as r,ak as c,p as Q,C as R,c as w,o as g,aj as k,a2 as b,G as e,j as a,a3 as p,k as l,w as i,al as m,a as d}from"./chunks/framework.Qw9YW2RS.js";import{T as D}from"./chunks/basic.BenyAQmf.js";import{O as T,E as h}from"./chunks/index.BrCmXWb_.js";const X=`<template>
  <div class="demo-button-size">
    <TButton size="small" type="primary">小型按钮</TButton>
    <TButton size="medium" type="primary">中型按钮</TButton>
    <TButton size="large" type="primary">大型按钮</TButton>
  </div>
</template>

<script setup lang="ts"><\/script>

<style scoped>
.demo-button-size {
  display: flex;
  gap: 12px;
}
</style>
`,A=`<template>
  <div class="demo-button-loading">
    <TButton loading type="primary">加载中</TButton>
    <TButton loading type="success">加载中</TButton>
    <TButton loading type="warning">加载中</TButton>
    <TButton loading type="danger">加载中</TButton>
    <TButton loading type="info">加载中</TButton>
  </div>
</template>

<script setup lang="ts"><\/script>

<style scoped>
.demo-button-loading {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 16px;
}
</style>
`,E=`<template>
  <div class="demo-button">
    <TButton type="primary" icon="search">搜索</TButton>
    <TButton type="success" icon="check">成功</TButton>
    <TButton type="warning" icon="exclamation">警告</TButton>
    <TButton type="danger" icon="delete">删除</TButton>
    <TButton type="info" icon="info">信息</TButton>
  </div>
</template>

<script setup lang="ts"><\/script>

<style scoped>
.demo-button {
  display: flex;
  gap: 16px;
}
</style>
`,G=`<template>
  <div class="demo-button">
    <TButton type="link">默认链接按钮</TButton>
    <TButton type="link" disabled>禁用链接按钮</TButton>
    <TButton type="link" icon="search">带图标链接按钮</TButton>
  </div>
</template>

<script setup lang="ts"><\/script>

<style scoped>
.demo-button {
  display: flex;
  gap: 16px;
}
</style>
`,I=JSON.parse('{"title":"Button 按钮","description":"","frontmatter":{},"headers":[],"relativePath":"packages/ui/button.md","filePath":"zh/packages/ui/button.md","lastUpdated":1753346778000}'),C={name:"packages/ui/button.md"},q=Object.assign(C,{setup(x){const y=u();r(async()=>{y.value=(await c(async()=>{const{default:o}=await import("./chunks/size.KJldlU1z.js");return{default:o}},__vite__mapDeps([0,1]))).default});const v=u();r(async()=>{v.value=(await c(async()=>{const{default:o}=await import("./chunks/loading.C2Tii5cF.js");return{default:o}},__vite__mapDeps([2,1]))).default});const f=u();r(async()=>{f.value=(await c(async()=>{const{default:o}=await import("./chunks/icon.BZ6VhXuk.js");return{default:o}},__vite__mapDeps([3,1]))).default});const _=u();r(async()=>{_.value=(await c(async()=>{const{default:o}=await import("./chunks/link.Bet7Pts4.js");return{default:o}},__vite__mapDeps([4,1]))).default});const n=Q(!0),B=u();return r(async()=>{B.value=(await c(async()=>{const{default:o}=await import("./chunks/basic.DTIR7vSO.js");return{default:o}},__vite__mapDeps([5,1]))).default}),(o,t)=>{const s=R("ClientOnly");return g(),w("div",null,[t[5]||(t[5]=k("",5)),b(e(l(T),null,null,512),[[p,n.value]]),e(s,null,{default:i(()=>[e(l(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{n.value=!1}),vueCode:l(D)},m({_:2},[B.value?{name:"vue",fn:i(()=>[e(l(B))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[6]||(t[6]=k("",6)),b(e(l(T),null,null,512),[[p,n.value]]),e(s,null,{default:i(()=>[e(l(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[1]||(t[1]=()=>{n.value=!1}),vueCode:l(G)},m({_:2},[_.value?{name:"vue",fn:i(()=>[e(l(_))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[7]||(t[7]=a("h2",{id:"图标按钮",tabindex:"-1"},[d("图标按钮 "),a("a",{class:"header-anchor",href:"#图标按钮","aria-label":'Permalink to "图标按钮"'},"​")],-1)),t[8]||(t[8]=a("p",null,[d("使用 "),a("code",null,"icon"),d(" 属性为按钮添加图标，也可以单独使用图标按钮。")],-1)),b(e(l(T),null,null,512),[[p,n.value]]),e(s,null,{default:i(()=>[e(l(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[2]||(t[2]=()=>{n.value=!1}),vueCode:l(E)},m({_:2},[f.value?{name:"vue",fn:i(()=>[e(l(f))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[9]||(t[9]=a("h2",{id:"加载状态",tabindex:"-1"},[d("加载状态 "),a("a",{class:"header-anchor",href:"#加载状态","aria-label":'Permalink to "加载状态"'},"​")],-1)),t[10]||(t[10]=a("p",null,[d("通过设置 "),a("code",null,"loading"),d(" 属性为 "),a("code",null,"true"),d(" 来显示加载中状态。")],-1)),b(e(l(T),null,null,512),[[p,n.value]]),e(s,null,{default:i(()=>[e(l(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[3]||(t[3]=()=>{n.value=!1}),vueCode:l(A)},m({_:2},[v.value?{name:"vue",fn:i(()=>[e(l(v))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[11]||(t[11]=a("h2",{id:"调整尺寸",tabindex:"-1"},[d("调整尺寸 "),a("a",{class:"header-anchor",href:"#调整尺寸","aria-label":'Permalink to "调整尺寸"'},"​")],-1)),t[12]||(t[12]=a("p",null,[d("使用 "),a("code",null,"size"),d(" 属性配置尺寸，可使用 "),a("code",null,"large"),d(" 和 "),a("code",null,"small"),d(" 两种值。")],-1)),b(e(l(T),null,null,512),[[p,n.value]]),e(s,null,{default:i(()=>[e(l(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[4]||(t[4]=()=>{n.value=!1}),vueCode:l(X)},m({_:2},[y.value?{name:"vue",fn:i(()=>[e(l(y))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[13]||(t[13]=k("",5))])}}});export{I as __pageData,q as default};
