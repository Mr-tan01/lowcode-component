<script lang="ts" setup>
import { ref, computed } from 'vue'
import { Repl, useStore, useVueImportMap } from '@vue/repl';
import Monaco from '@vue/repl/monaco-editor';
import { testCodeStr } from './const';
import { useRoute } from 'vue-router';

const $route = useRoute();
const demoCodeStr = sessionStorage.getItem('__sessionStorage__monacoEditId__' + decodeURIComponent($route.query?.id?.toString() || '')) || testCodeStr;

const {
    importMap: builtinImportMap,
    productionMode,
} = useVueImportMap({
    runtimeDev: '/cdn/runtime-dom.esm-browser.js',
    runtimeProd: '/cdn/runtime-dom.esm-browser.js',
    serverRenderer: '/cdn/server-renderer.esm-browser.js',
});


const store = useStore(
    {
        builtinImportMap: computed(() => {
            return {
                ...builtinImportMap.value,
                imports: {
                    ...builtinImportMap.value.imports,
                }
            };
        }),
        showOutput: ref(true),
        outputMode: ref('preview'),
    },
    location.search
);

store.setFiles({
    'App.vue': demoCodeStr,
});

productionMode.value = true;
const previewOptions = ref({
    headHTML: ``,
    bodyHTML: ``,
    placeholderHTML: `loading...`,
    customCode: {
        importCode: ``,
        useCode: ``,
    }
});
</script>

<template>
    <div class="repl">
        <Repl :store="store" :show-import-map="true" :preview-options="previewOptions" :editor="Monaco"
            :auto-resize="true" :ssr="false" :clearConsole="false" :showCompileOutput="true" theme="dark"
            preview-theme />
    </div>
</template>

<style lang="scss" scoped>
.repl {
    width: 100%;
    height: 100%;
}
</style>