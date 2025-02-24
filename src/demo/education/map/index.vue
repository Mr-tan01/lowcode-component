<template>
    <div class="demo-map">
        <DemoBox title="深圳地图" description="深圳教育项目-深圳地图" rswidth="962px">
            <div class="size-box">
                <Szmap :values></Szmap>
            </div>
        </DemoBox>
        <DemoBox title="深圳地图" description="深圳教育项目-深圳地图" rswidth="962px">
            <div class="size-box">
                <Szmap :values :rotate-x="-30"></Szmap>
            </div>
        </DemoBox>
    </div>
</template>
<script lang="ts" setup>
import { DemoBox } from 'lowcode-share/es/demo';
import { Szmap, type SZMapMarkProps } from '@/components/education/components/map';

const values: SZMapMarkProps = {
    guangming: {
        value: 1,
        unit: '人'
    },
    longgang: {
        value: 10000,
        unit: '人'
    },
}

</script>
