<template>
    <div class="lc-cesium">
        <LcCesium v-bind="$attrs"></LcCesium>
    </div>
</template>

<script lang="ts" setup>
import LcCesium from "./component.vue";
</script>

<style lang="scss" scoped>
.lc-cesium {
    width: 100%;
}
</style>
