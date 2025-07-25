const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/draggable.DmCS2j2n.js","assets/chunks/theme.DIFcUa3l.js","assets/chunks/framework.Qw9YW2RS.js","assets/chunks/custom-header.ClVR0hxv.js","assets/chunks/center.5qL1ZL72.js","assets/chunks/custom.DU3zhnyt.js","assets/chunks/basic.DTrMl0Xy.js"])))=>i.map(i=>d[i]);
import{D as s,v as u,ak as c,p as k,C as Q,c as w,o as B,aj as D,a2 as m,G as e,j as a,a3 as b,k as l,w as i,al as p,a as d}from"./chunks/framework.Qw9YW2RS.js";import{T as R}from"./chunks/basic.CPlkbhmb.js";import{O as h,E as f}from"./chunks/index.BrCmXWb_.js";const x=`<template>
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
<\/script>

<style scoped>
.dialog-demo {
  margin: 20px 0;
}
</style>
`,C=`<template>
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
<\/script>

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
`,G=`<template>
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
<\/script>

<style scoped>
.dialog-demo {
  margin: 20px 0;
}
</style>
`,V=`<template>
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
<\/script>

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
`,F=JSON.parse('{"title":"Dialog 对话框","description":"","frontmatter":{},"headers":[],"relativePath":"packages/ui/dialog.md","filePath":"zh/packages/ui/dialog.md","lastUpdated":1753425911000}'),A={name:"packages/ui/dialog.md"},O=Object.assign(A,{setup(j){const v=s();u(async()=>{v.value=(await c(async()=>{const{default:n}=await import("./chunks/draggable.DmCS2j2n.js");return{default:n}},__vite__mapDeps([0,1,2]))).default});const T=s();u(async()=>{T.value=(await c(async()=>{const{default:n}=await import("./chunks/custom-header.ClVR0hxv.js");return{default:n}},__vite__mapDeps([3,1,2]))).default});const g=s();u(async()=>{g.value=(await c(async()=>{const{default:n}=await import("./chunks/center.5qL1ZL72.js");return{default:n}},__vite__mapDeps([4,1,2]))).default});const _=s();u(async()=>{_.value=(await c(async()=>{const{default:n}=await import("./chunks/custom.DU3zhnyt.js");return{default:n}},__vite__mapDeps([5,1,2]))).default});const o=k(!0),y=s();return u(async()=>{y.value=(await c(async()=>{const{default:n}=await import("./chunks/basic.DTrMl0Xy.js");return{default:n}},__vite__mapDeps([6,1,2]))).default}),(n,t)=>{const r=Q("ClientOnly");return B(),w("div",null,[t[5]||(t[5]=D("",5)),m(e(l(h),null,null,512),[[b,o.value]]),e(r,null,{default:i(()=>[e(l(f),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{o.value=!1}),vueCode:l(R)},p({_:2},[y.value?{name:"vue",fn:i(()=>[e(l(y))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[6]||(t[6]=a("h2",{id:"自定义内容",tabindex:"-1"},[d("自定义内容 "),a("a",{class:"header-anchor",href:"#自定义内容","aria-label":'Permalink to "自定义内容"'},"​")],-1)),t[7]||(t[7]=a("p",null,"Dialog 组件的内容可以是任意的，甚至可以是表格或表单，下面是应用了自定义样式的表单的例子。",-1)),m(e(l(h),null,null,512),[[b,o.value]]),e(r,null,{default:i(()=>[e(l(f),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[1]||(t[1]=()=>{o.value=!1}),vueCode:l(V)},p({_:2},[_.value?{name:"vue",fn:i(()=>[e(l(_))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[8]||(t[8]=a("h2",{id:"居中布局",tabindex:"-1"},[d("居中布局 "),a("a",{class:"header-anchor",href:"#居中布局","aria-label":'Permalink to "居中布局"'},"​")],-1)),t[9]||(t[9]=a("p",null,"标题和底部可水平居中",-1)),m(e(l(h),null,null,512),[[b,o.value]]),e(r,null,{default:i(()=>[e(l(f),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[2]||(t[2]=()=>{o.value=!1}),vueCode:l(G)},p({_:2},[g.value?{name:"vue",fn:i(()=>[e(l(g))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[10]||(t[10]=a("h2",{id:"自定义头部",tabindex:"-1"},[d("自定义头部 "),a("a",{class:"header-anchor",href:"#自定义头部","aria-label":'Permalink to "自定义头部"'},"​")],-1)),t[11]||(t[11]=a("p",null,[d("可以通过 "),a("code",null,"header"),d(" 插槽来自定义标题区的内容。若使用 "),a("code",null,"header"),d(" 插槽，则 "),a("code",null,"title"),d(" 属性会被忽略。")],-1)),m(e(l(h),null,null,512),[[b,o.value]]),e(r,null,{default:i(()=>[e(l(f),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[3]||(t[3]=()=>{o.value=!1}),vueCode:l(C)},p({_:2},[T.value?{name:"vue",fn:i(()=>[e(l(T))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[12]||(t[12]=a("h2",{id:"可拖拽对话框",tabindex:"-1"},[d("可拖拽对话框 "),a("a",{class:"header-anchor",href:"#可拖拽对话框","aria-label":'Permalink to "可拖拽对话框"'},"​")],-1)),t[13]||(t[13]=a("p",null,[d("设置 "),a("code",null,"draggable"),d(" 属性为 "),a("code",null,"true"),d(" 即可使对话框可拖拽。")],-1)),m(e(l(h),null,null,512),[[b,o.value]]),e(r,null,{default:i(()=>[e(l(f),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[4]||(t[4]=()=>{o.value=!1}),vueCode:l(x)},p({_:2},[v.value?{name:"vue",fn:i(()=>[e(l(v))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[14]||(t[14]=D("",10))])}}});export{F as __pageData,O as default};
