<template>
    <div class="demo-mapButton">
        <DemoBox title="mapButton" description="基础用法" rswidth="500px" :code="code1">
                <LcMapButton></LcMapButton>
        </DemoBox>
        <DemoBox title="legendProgress" description="基础用法" rswidth="500px" :code="code1">
                <LcLegendProgress></LcLegendProgress>
        </DemoBox>
    </div>
</template>
<script lang="ts" setup>
import { DemoBox } from 'lowcode-share/es/demo';
import {
    LcMapButton,
    LcLegendProgress,
} from '@/components/education/components/mapButton';
import {
    code1,
} from './const';

</script>
