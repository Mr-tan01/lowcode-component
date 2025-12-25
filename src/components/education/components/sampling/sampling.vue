<template>
    <NCheckboxGroup class="lc-checkbox-group" v-bind="$attrs">
        <div class="Lc-boder">
            <div v-for="(item, key) in list" :key class="Lc-boder-box">
                <slot :record="item" :index="key">
                    <NCheckbox v-if="showCheckbox" :value="item[valueKey]" class="lc-checkbox"></NCheckbox>
                    <div class="Lc-boder-box-icon">
                        <slot name="icon" :item="item">
                            <img :src="getIcon(item.icon)" alt="" />
                        </slot>
                    </div>
                    <span class="Lc-boder-box-text">
                        {{ item.name }}
                    </span>
                </slot>
            </div>
        </div>
    </NCheckboxGroup>
</template>

<script setup lang="ts">
import { NCheckboxGroup, NCheckbox } from 'naive-ui/es/checkbox'
import { samplingStaticIcons } from './const'
import { type LcSamplingRecords } from './types'
const {
    list = [],
    showCheckbox = false,
    valueKey = 'name',
} = defineProps<{
    list?: LcSamplingRecords[]
    showCheckbox?: boolean
    valueKey?: string
}>()

function getIcon(p?: string) {
    if (!p) return
    return samplingStaticIcons[p] ?? p
}
</script>

<style scoped lang="scss">
.Lc-boder {
    width: fit-content;
    background: rgba(8, 68, 113, 0.75);
    border-radius: 8px;
    border: 1px solid #0ffbf8;
    backdrop-filter: blur(3px);
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 9px 21px;
    gap: 25px;

    &-box {
        display: flex;
        align-items: center;
        gap: 7px;

        img {
            width: 11px;
            height: 16px;
            object-fit: contain;
        }
        &-icon {
            display: flex;
            align-items: center;
        }
        &-text {
            font-family:
                PingFangSC,
                PingFang SC;
            font-weight: 400;
            font-size: 14px;
            color: '#fff';
            line-height: 20px;
            text-align: center;
            font-style: normal;
        }
    }
}
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
