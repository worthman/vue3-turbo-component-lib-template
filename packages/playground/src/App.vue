<script setup>
import { watchEffect, ref } from 'vue';
import { Repl, useStore, useVueImportMap } from '@vue/repl';
import Monaco from '@vue/repl/monaco-editor';

function setVH() {
  document.documentElement.style.setProperty('--vh', window.innerHeight + `px`)
}

window.addEventListener('resize', setVH)
setVH()

// retrieve some configuration options from the URL
const query = new URLSearchParams(location.search);

const {
  importMap: builtinImportMap,
  vueVersion,
  productionMode,
} = useVueImportMap({
  // specify the default URL to import Vue runtime from in the sandbox
  // default is the CDN link from jsdelivr.com with version matching Vue's version
  // from peerDependency
  runtimeDev: 'cdn link to vue.runtime.esm-browser.js',
  runtimeProd: 'cdn link to vue.runtime.esm-browser.prod.js',
  serverRenderer: 'cdn link to server-renderer.esm-browser.js',
});

const store = useStore(
  {
    // pre-set import map
    builtinImportMap,
    vueVersion,
    // starts on the output pane (mobile only) if the URL has a showOutput query
    showOutput: ref(query.has('showOutput')),
    // starts on a different tab on the output pane if the URL has a outputMode query
    // and default to the "preview" tab
    outputMode: ref(query.get('outputMode') || 'preview'),
  },
  // initialize repl with previously serialized state
  location.hash,
);

// persist state to URL hash
watchEffect(() => history.replaceState({}, '', store.serialize()));

// use a specific version of Vue
vueVersion.value = '3.2.8';
// production mode is enabled
productionMode.value = true;
</script>

<template>
  <Repl
    :store="store"
    :editor="Monaco"
    :showCompileOutput="true"
    :auto-resize="true"
    :clear-console="false"
    @keydown.ctrl.s.prevent
    @keydown.meta.s.prevent
  />
</template>
