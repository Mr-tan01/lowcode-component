<template>
    <div class="demo-map">
        <Container title="深圳地图" description="深圳教育项目-深圳地图" rswidth="962px">
            <div class="size-box">
                <Szmap :values></Szmap>
            </div>
        </Container>
        <Container title="深圳地图" description="深圳教育项目-深圳地图" rswidth="962px">
            <div class="size-box">
                <Szmap :values :rotate-x="-30"></Szmap>
            </div>
        </Container>
    </div>
</template>
<script lang="ts" setup>
import Container from '@/demo/components/help/Container.vue';
import { Szmap, type SZMapMarkProps } from '~/es/education/map';

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
