<template>
    <div class="lc-szmap">
        <RawMap class="back-block-map level-map" :show-label="false" :rotateX :levels :values />
        <RawMap class="float-block-map level-map" fill-model="hover" :rotateX :show-label="true" :levels :values />
    </div>
</template>

<script lang="ts" setup>
import { propsRaw } from './props';
import RawMap from './rawMap.vue';
const {
    levels,
    rotateX,
} = defineProps(propsRaw);
</script>

<style lang="scss" scoped>
.lc-szmap {
    position: relative;

    .back-block-map {
        z-index: 1;
    }

    .float-block-map {
        position: absolute;
        left: 50%;
        top: 50%;
        z-index: 2;
        transform: translate(-50%, -51%) scale(0.98);
    }
}
</style>