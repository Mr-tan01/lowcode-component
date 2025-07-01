<template>
    <DemoBox :code>
        <slot v-for="(item, key) in $slots" :name="key" v-bind="item"></slot>
        <template #header-extra>
            <div class="header-extra">
                <slot name="header-extra">
                    <NButton size="small" @click="toReplPage">在线运行</NButton>
                </slot>
            </div>
        </template>
    </DemoBox>
</template>
<script lang="ts" setup>
import { DemoBox } from 'lowcode-share/es/demo'
import { NButton } from 'naive-ui'
import { useId } from 'vue'
import { useRouter } from 'vue-router'
const $router = useRouter()

const { code = '' } = defineProps<{
    code?: string
}>()

const id = useId()
function toReplPage() {
    sessionStorage.setItem('__sessionStorage__monacoEditId__' + id, code)
    $router.push({
        path: '/edit/monacoEdit',
        query: {
            id,
        },
    })
}
</script>

<style lang="scss" scoped>
.header-extra {
    margin-left: 15px;
}
</style>
