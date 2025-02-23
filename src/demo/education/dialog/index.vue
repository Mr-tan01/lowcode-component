<template>
    <div class="demo_dialog">
        <Container title="弹出窗" description="大尺寸弹窗" :code="code1">
            <button @click="show = true">弹窗</button>
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
        </Container>
        <Container title="弹出窗" description="中等尺寸弹窗"  :code="code2">
            <button @click="show2 = true">弹窗</button>
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
        </Container>
    </div>
</template>

<script lang="ts" setup>
import Container from '@/demo/components/help/Container.vue';
import { LcModal } from '~/es/education/modal';
import { ref } from 'vue';
import { code1, code2 } from './const';
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