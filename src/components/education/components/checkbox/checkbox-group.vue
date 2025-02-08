<template>
    <NCheckboxGroup class="lc-checkbox-group" v-bind="$attrs">
        <slot></slot>
    </NCheckboxGroup>
</template>

<script lang="ts" setup>
import { NCheckboxGroup } from 'naive-ui/es/checkbox';
</script>

<style lang="scss" scoped></style>