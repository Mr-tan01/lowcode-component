<template>
    <div class="lc-szmap">
        <RawMap class="back-block-map level-map" :show-label="false" :disabledGradient :rotateX :levels :values v-bind="$attrs" />
        <RawMap class="float-block-map level-map" fill-model="hover" :disabledGradient :rotateX :show-label="true" :levels :values v-bind="$attrs">
            <template #mapLabel="{ blockList, labelClass, getVlaue }">
                <slot name="mapLabel" :blockList="blockList" :labelClass="labelClass" :getVlaue="getVlaue"> </slot>
            </template>
        </RawMap>
    </div>
</template>

<script lang="ts" setup>
import { propsRaw } from "./props";
import RawMap from "./rawMap.vue";

const { levels, rotateX } = defineProps(propsRaw);
</script>

<style lang="scss" scoped>
.lc-szmap {
    position: relative;

    .float-block-map {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -51%) scale(0.98);
    }
}
</style>
