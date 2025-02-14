<template>
    <div class="lc-szmap">
        <RawMap class="back-block-map level-map" :show-label="false" />
        <RawMap class="float-block-map level-map" fill-model="hover" :show-label="true" />
    </div>
</template>

<script lang="ts" setup>
import RawMap from './rawMap.vue';

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