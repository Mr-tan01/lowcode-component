<template>
    <div class="lc-tree">
        <n-tree v-bind="$attrs" :render-switcher-icon="renderSwitcherIconWithExpaned">
            <template #empty>
                <LcEmpty></LcEmpty>
            </template>
        </n-tree>
    </div>
</template>
<script setup lang="ts">
import { NTree } from 'naive-ui/es/tree'
import { LcIcon, type NameTypes } from '@/components/education/components/icon/index'
import { h, toRefs } from 'vue'
import { LcEmpty } from '../empty'
const props = withDefaults(
    defineProps<{
        expandedIcon?: NameTypes
        collapsedIcon?: NameTypes
    }>(),
    {
        expandedIcon: 'expand',
        collapsedIcon: 'retract',
    },
)
const { expandedIcon, collapsedIcon } = toRefs(props)
const renderSwitcherIconWithExpaned = ({ expanded }: { expanded: boolean }) => {
    return h(LcIcon, {
        name: expanded ? collapsedIcon.value : expandedIcon.value,
    })
}
</script>
<style lang="scss" scoped>
.lc-tree {
    :deep(.n-tree-node-indent.n-tree-node-indent--show-line) {
        &::before {
            border-left: 1px dashed #005c86;
        }
    }
    :deep(.n-checkbox-box) {
        --n-border: 1px solid rgba(0, 148, 255, 0.5);
        --n-color-checked: #0ae0dd;
        --n-check-mark-color: #ffffff;
    }
    :deep(.n-tree-node-content__text) {
        font-family: HarmonyOS Sans SC;
        line-height: 26px;
        font-size: 16px;
        color: #ffffff;
    }
    :deep(.n-tree-node-switcher--expanded) {
        transform: rotate(0);
    }
}
</style>
