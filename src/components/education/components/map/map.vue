<template>
    <div class="lc-map">
        <Szmap v-bind="$attrs"></Szmap>
    </div>
</template>

<script lang="ts" setup>
import { Szmap } from './szmap';
</script>

<style lang="scss" scoped>
.lc-map {
    width: 100%;
}
</style>