<template>
    <div class="lc-szmap">
        <RawMap class="back-block-map level-map" :show-label="false" :disabled-gradient :rotate-x :label-model :levels :values v-bind="$attrs" />
        <RawMap
            class="float-block-map level-map"
            fill-model="hover"
            :disabled-gradient
            :rotate-x
            :label-model
            :show-label="true"
            :levels
            :values
            v-bind="$attrs"
            :show-border="false"
        >
            <template #mapLabel="{ blockList, labelClass, getVlaue, currentMapKey }">
                <slot name="mapLabel" :block-list="blockList" :label-class="labelClass" :get-vlaue="getVlaue" :current-map-key="currentMapKey">
                </slot>
            </template>
        </RawMap>
    </div>
</template>

<script lang="ts" setup>
import { propsRaw } from './props'
import RawMap from './rawMap.vue'
import { LabelModelEnum } from './const'
const { levels, rotateX, labelModel = LabelModelEnum.DEFAULT } = defineProps(propsRaw)
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
