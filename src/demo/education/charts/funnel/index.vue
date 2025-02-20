<template>
    <div class="demo-charts">
        <Container title="气泡图" description="散点图主要包括单系列散点图、多系列散点图、" rswidth="1360px" rs-height="auto">

            <NSpace>
                <Container title="单气泡图" rswidth="520px" rs-height="306px">
                    <LcFunnelChart v-bind="useOptions()"></LcFunnelChart>
                </Container>
                <Container title="多气泡图(≥2类数据)" rswidth="520px" rs-height="306px">
                    <LcFunnelChart v-bind="useOptions()"></LcFunnelChart>
                </Container>
            </NSpace>
        </Container>
    </div>
</template>
<script lang="ts" setup>
import { NSpace } from 'naive-ui';
import Container from '@/demo/components/help/Container.vue';
import {
    LcFunnelChart,
} from '@/components/education/components/charts';
import { useOptions } from '../options/funnel-options';
</script>
<style lang="scss" scoped>
.demo-charts {
    overflow: auto;
}
</style>