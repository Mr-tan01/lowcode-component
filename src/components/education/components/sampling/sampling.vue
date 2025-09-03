<template>
    <div class="Lc-boder">
        <div v-for="(item, key) in list" :key class="Lc-boder-box" @click="$emit('handleChange', item, key)">
            <slot :record="item" :index="key">
                <img :src="getIcon(item.icon)" alt="" />
                <span class="Lc-boder-box-text">
                    {{ item.name }}
                </span>
            </slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { samplingStaticIcons } from './const'
import { type LcSamplingRecords } from './types'

const { list = [] } = defineProps<{
    list?: LcSamplingRecords[]
}>()

const $emit = defineEmits<{
    (e: 'handleChange', record: LcSamplingRecords, index: number): void
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
</style>
