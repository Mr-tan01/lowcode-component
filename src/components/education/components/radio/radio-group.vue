<template>
    <n-radio-group class="lc-radio-group" v-bind="$attrs">
        <slot></slot>
    </n-radio-group>
</template>

<script lang="ts" setup>
import { NRadioGroup } from 'naive-ui/es/radio'
</script>

<style lang="scss" scoped></style>
