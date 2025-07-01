<template>
    <div class="demo-mapButton">
        <DemoBox title="mapButton" description="基础用法" rswidth="500px" :code="code1">
            <LcMapButton></LcMapButton>
        </DemoBox>
        <DemoBox title="legendProgress" description="基础用法" rswidth="500px" :code="code1">
            <LcLegendProgress
                :data="[0.16, 0.029, 0.32, 0.06, 0.21, 0.21, 0.23, 0.3, 0.02, 0.22, 0.55]"
                @update-stops="console.log($event)"
            ></LcLegendProgress>
        </DemoBox>
    </div>
</template>
<script lang="ts" setup>
import { DemoBox } from 'lowcode-share/es/demo'
import { LcMapButton, LcLegendProgress } from '@/components/education/components/mapButton'
import { code1 } from './const'
</script>
