<template>
    <div class="demo-tooltip">
        <Container title="Tooltip" description="基础用法" :code="code1">
            <LcTooltip>
                如果它长得像鸭子，走起来像鸭子，叫起来也像鸭子，那它一定是个鸭子 <a>查看详情</a>。
            </LcTooltip>
        </Container>
    </div>
</template>

<script lang="ts" setup>
import Container from '@/demo/components/help/Container.vue';
import { LcTooltip } from '@/components/education/components/tooltip';
import {
    code1,
} from './const';
</script>

<style lang="scss" scoped>

</style>