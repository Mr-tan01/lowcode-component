<template>
    <div class="demo-map">
        <NSpace>
            <DemoHelpBox title="树" rswidth="500px" rs-height="500px" description="基础用法" :code="code1">
                <LcTree :show-line="showLine" :default-expanded-keys="defaultExpandedKeys" :data="data" checkable expand-on-click selectable />
            </DemoHelpBox>
        </NSpace>
    </div>
</template>

<script lang="ts" setup>
import { DemoHelpBox } from '@/components/common/DemoHelpBox'
import { NSpace } from 'naive-ui'
import { LcTree } from '~/src/components/education/components/tree'
import { ref } from 'vue'
import { code1 } from './demo-codes'
function createData(level = 4, baseKey = '') {
    if (!level) return undefined
    return Array.from({ length: 6 - level }).map((_, index) => {
        const key = `${baseKey}${level}${index}`
        return {
            label: createLabel(level),
            key,
            children: createData(level - 1, key),
        }
    })
}

function createLabel(level: number): string {
    if (level === 4) return '道生一'
    if (level === 3) return '一生二'
    if (level === 2) return '二生三'
    if (level === 1) return '三生万物'
    return ''
}

const showLine = true
const data = createData(4)
const defaultExpandedKeys = ref(['40', '4030', '403020'])
</script>

<style lang="scss" scoped>
.demo-map {
    display: flex;
    justify-content: center;
    :deep(.pad-box) {
        overflow: auto;
    }
}
</style>
