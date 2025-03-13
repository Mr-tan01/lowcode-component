<template>
    <div class="demo-map">
        <DemoHelpBox title="深圳地图" description="深圳教育项目-深圳地图" rswidth="962px" rs-height="560px">
            <LcTianditu tk="a7a093036e0140d5a8dd309f33f1e382"></LcTianditu>
        </DemoHelpBox>
        <DemoHelpBox title="深圳地图" description="深圳教育项目-深圳地图" rswidth="962px" :code="demoCodes.code1">
            <div class="size-box">
                <Szmap :values></Szmap>
            </div>
        </DemoHelpBox>
        <DemoHelpBox title="深圳地图" description="深圳教育项目-深圳地图" rswidth="962px" :code="demoCodes.code2">
            <div class="size-box">
                <Szmap :values :rotate-x="-30"></Szmap>
            </div>
        </DemoHelpBox>
    </div>
</template>
<script lang="ts" setup>
import { DemoHelpBox } from '@/components/common/DemoHelpBox';
import { Szmap, type SZMapMarkProps, LcTianditu } from '@/components/education/components/map';
import { demoCodes } from './demo-codes';

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
