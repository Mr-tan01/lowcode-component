<template>
    <div class="lc-progress">
        <LcElasticScrollbar>
            <div class="lc-progress__wrapper">
                <div v-for="(item, key) in dataList" :key class="lc-progress__wrapper__item">
                    <div
                        class="lc-progress__wrapper__item__left"
                        :style="{
                            '--progress': item.value,
                            '--bgColor': item.color,
                        }"
                    >
                        <span class="lc-progress__wrapper__item__left__label">
                            <span>{{ item.label }}</span>
                            <span>{{ item.value }}%</span>
                        </span>
                    </div>
                    <div ref="valueRef" class="lc-progress__wrapper__item__right" :style="{ width: maxWidth }" :title="item.tootal.toString()">
                        <span>{{ renderValue(item.tootal) }}</span>
                        <span>{{ renderUnit(item.tootal, item.unit) }}</span>
                    </div>
                </div>
            </div>
        </LcElasticScrollbar>
    </div>
</template>
<script lang="ts" setup>
import { LcElasticScrollbar } from '@/components/education/components/elasticScrollbar'
import { bigNumber } from 'lowcode-share/es/share'
import { PropType, useTemplateRef, computed } from 'vue'
import memoize from 'lodash-es/memoize'

export type ProgereeDataList = {
    label: string // 类目名称
    value: number // 百分比值
    unit: string // 单位
    color: string // 颜色值
    tootal: number // 总量
}
const {
    fixed = true,
    decimal = 2,
    dataList = [],
} = defineProps({
    fixed: {
        type: Boolean,
    },
    decimal: {
        type: Number,
    },
    dataList: {
        type: Array as PropType<ProgereeDataList[]>,
    },
})

const valueRefS = useTemplateRef('valueRef')
const maxWidth = computed(() => {
    if (valueRefS.value && Array.isArray(valueRefS.value)) {
        const widths = valueRefS.value.map(item => Math.floor(item.offsetWidth))
        const maxWidthValue = Math.max(...widths)
        return `${maxWidthValue}px`
    }
    return '100%'
})
const renderValue = tootal => {
    if (fixed) {
        const { result } = bigNumber(tootal, decimal)
        return result
    }
    return tootal
}
const renderUnit = memoize(
    (value, _unit) => {
        if (fixed) {
            const { unit: numUnit } = bigNumber(value, decimal)
            return `${numUnit}${_unit}`
        }
        return _unit
    },
    (value, _unit) => `${value}_${_unit}`,
)
</script>
<style lang="scss" scoped>
@keyframes progressAnimation {
    from {
        width: 0;
    }
    to {
        width: calc(var(--progress) * 1%);
    }
}

.lc-progress {
    display: flex;
    flex-direction: column;
    flex: 1;
    &__wrapper {
        display: flex;
        flex-direction: column;
        flex: 1;
        gap: 24px;
        &__item {
            display: flex;
            align-items: center;
            width: 100%;
            height: 26px;
            background: #113b77;
            border-radius: 32px;
            &__left {
                display: flex;
                align-items: center;
                flex: 1;
                width: 100%;
                height: 22px;
                background: #042b61;
                border-radius: 32px;
                position: relative;
                &::before {
                    position: absolute;
                    content: '';
                    top: 0;
                    left: 0;
                    width: calc(var(--progress) * 1%);
                    height: 100%;
                    border-radius: 32px;
                    background: var(--bgColor);
                    animation: progressAnimation 0.3s linear;
                }
                &__label {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    position: absolute;
                    left: 12px;
                    font-size: 14px;
                    color: #ffffff;
                    line-height: 20px;
                }
            }
            &__right {
                margin-right: 6px;
                text-align: right;
                padding-left: 8px;
                font-size: 14px;
                color: #ffffff;
            }
        }
    }
}
</style>
