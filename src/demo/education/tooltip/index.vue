<template>
    <div class="demo-tooltip">
        <DemoHelpBox title="Tooltip" description="基础用法" rswidth="1000px" :code="code1">
            <LcTooltip>
                如果它长得像鸭子，走起来像鸭子，叫起来也像鸭子，那它一定是个鸭子 <a>查看详情</a>。
            </LcTooltip>
            <LcTooltip title="数据说明：XXXXXXXXXXXXXXX">
                如果它长得像鸭子，走起来像鸭子，叫起来也像鸭子，那它一定是个鸭子 <a>查看详情</a>。
            </LcTooltip>
        </DemoHelpBox>
    </div>
</template>

<script lang="ts" setup>
import { DemoHelpBox } from '@/components/common/DemoHelpBox';
import { LcTooltip } from '@/components/education/components/tooltip';
import {
    code1,
} from './demo-codes';
</script>

<style lang="scss" scoped>

</style>