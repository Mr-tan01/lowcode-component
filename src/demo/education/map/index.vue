<template>
    <div class="demo-map">
        <Container title="深圳地图" description="深圳教育项目-深圳地图" rswidth="962px">
            <div class="size-box">
                <Szmap :values></Szmap>
            </div>
        </Container>
    </div>
</template>
<script lang="ts" setup>
import Container from '@/demo/components/help/Container.vue';
import { Szmap } from '@/components/education/components/map';

const values = {
    光明: {
        value: 1,
    },
    龙岗: {
        value: 10000,
    },
}

</script>
