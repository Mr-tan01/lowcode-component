<template>
    <NCheckbox class="lc-checkbox" v-bind="$attrs">
        <slot></slot>
    </NCheckbox>
</template>

<script lang="ts" setup>
import { NCheckbox } from 'naive-ui/es/checkbox'
</script>

<style lang="scss" scoped>
.lc-checkbox {
    :deep(.n-checkbox-box-wrapper) {
        --n-box-shadow-active: inset 0 0 0 1px #0ffbf8;
        --n-border-focus: inset 0 0 0 1px #0ffbf8, 0 0 0 2px #0ffbf8;
        --n-box-shadow-hover: inset 0 0 0 1px #0ffbf8;
        --n-color-checked: #0ae0dd;
        --n-border-checked: 1px solid #0ae0dd;
        --n-color: #00203d;
        --n-box-shadow: inset 0 0 0 1px #005697;
        --n-border: 1px solid #0094ff;

        .n-checkbox-box {
            margin-top: 2px;
        }
    }

    :deep(.n-checkbox__label) {
        font-family: HarmonyOS_Sans_SC;
        font-size: 16px;
        --n-text-color: #ffffff;
        line-height: 26px;
        text-align: left;
        font-style: normal;
        text-transform: none;
    }
}
</style>
