<template>
    <div class="demo-toolbar">
        <h2>#LcToolbarSlot</h2>
        <NSpace>
            <DemoHelpBox title="工具栏" rswidth="500px" rs-height="200px" description="基础用法">
                <LcToolbarSlot>
                    <div class="content">我是内容休息休息嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻</div>
                </LcToolbarSlot>
            </DemoHelpBox>
            <DemoHelpBox title="工具栏-浮动" rswidth="500px" rs-height="200px" description="基础用法">
                <LcToolbarSlot float>
                    <div class="content float">
                        我要加内边距、我是内容休息休息嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻
                    </div>
                </LcToolbarSlot>
            </DemoHelpBox>
            <DemoHelpBox title="工具栏-弹性" rswidth="500px" rs-height="200px" description="基础用法">
                <LcToolbarSlot flex>
                    <div class="content flex">
                        我要加内边距、我是内容休息休息嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻
                    </div>
                </LcToolbarSlot>
            </DemoHelpBox>
        </NSpace>
    </div>
</template>

<script lang="ts" setup>
import { DemoHelpBox } from '@/components/common/DemoHelpBox'
import { LcToolbarSlot } from '@/components/education/components/toolbarSlot'
import { NSpace } from 'naive-ui'
</script>

<style lang="scss" scoped>
.demo-toolbar {
    padding: 20px;
}
.content {
    border: 1px solid #2ea552;

    &.float {
        padding-top: 30px;
    }

    &.flex {
        flex: 1;
    }
}
</style>
