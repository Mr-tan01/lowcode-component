<template>
    <div class="demo_dialog">
        <DemoBox title="弹出窗" description="大尺寸弹窗" :code="code1">
            <NButton @click="show = true">点击弹窗</NButton>
            <LcModal v-model:show="show" title="弹窗标题">
                <template #header>
                    <div class="header">
                        弹窗标题
                    </div>
                </template>
                <template #default>
                    <div class="text">
                        {{ code1 }}
                    </div>
                </template>
            </LcModal>
        </DemoBox>
        <DemoBox title="弹出窗" description="中等尺寸弹窗"  :code="code2">
            <NButton @click="show2 = true">点击弹窗</NButton>
            <LcModal v-model:show="show2" size-mode="medium" title="弹窗标题">
                <template #header>
                    <div class="header">
                        弹窗标题
                    </div>
                </template>
                <template #default>
                    <div class="text">
                        这里是内容区域，这里是内容区域，这里是内容区域，这里是内容区域，这里是内容区域，这里是内容区域，这里是内容区域，这里是内容区域，这里是内容区域，这里是内容区域，这里是内容
                    </div>
                </template>
            </LcModal>
        </DemoBox>
    </div>
</template>

<script lang="ts" setup>
import { DemoBox } from 'lowcode-share/es/demo';
import { LcModal } from '@/components/education/components/modal';
import { ref } from 'vue';
import { code1, code2 } from './demo-codes';
import { NButton } from 'naive-ui';
const show = ref(false);
const show2 = ref(false);

</script>
<style lang="scss" scoped>
.demo_dialog {
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
}
.text {
    color: #fff;
}
</style>