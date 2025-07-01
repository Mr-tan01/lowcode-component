<template>
    <n-radio class="lc-radio" v-bind="$attrs">
        <slot></slot>
    </n-radio>
</template>

<script lang="ts" setup>
import { NRadio } from 'naive-ui/es/radio'
</script>

<style lang="scss" scoped>
.lc-radio {
    --n-box-shadow-active: inset 0 0 0 1px #0ffbf8 !important;
    --n-box-shadow-focus:
        inset 0 0 0 1px #0ffbf8, 0 0 0 2px rgba(24, 160, 88, 0.2) !important;
    --n-box-shadow-hover: inset 0 0 0 1px #0ffbf8 !important;
    --n-dot-color-active: #0ffbf8 !important;
    --n-color: #00203d !important;
    --n-box-shadow: inset 0 0 0 1px #005697 !important;

    &:hover {
        --n-color: linear-gradient(
            180deg,
            rgba(15, 251, 248, 0) 0%,
            #0ffbf7c1 100%
        ) !important;
    }

    :deep(.n-radio__dot-wrapper) {
        .n-radio__dot {
            margin-top: 2px;
        }
    }

    :deep(.n-radio__label) {
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
