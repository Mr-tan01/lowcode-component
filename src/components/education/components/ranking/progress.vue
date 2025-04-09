<template>
    <div class="lc-progress">
        <LcElasticScrollbar>
            <div class="lc-progress__wrapper">
                <div class="lc-progress__wrapper__item" v-for="(item, key) in dataList" :key>
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
                    <div class="lc-progress__wrapper__item__right" :title="item.tootal.toString()">
                        <span>{{ renderValue(item.tootal) }}</span>
                        <span>{{ item.unit }}</span>
                    </div>
                </div>
            </div>
        </LcElasticScrollbar>
    </div>
</template>
<script lang="ts" setup>
import { LcElasticScrollbar } from "@/components/education/components/elasticScrollbar";
import { bigNumber } from "lowcode-share/es/share";
import { PropType } from "vue";

export type ProgereeDataList = {
    label: string; // 类目名称
    value: number; // 百分比值
    unit: string; // 单位
    color: string; // 颜色值
    tootal: number; // 总量
};
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
});

const renderValue = (tootal) => {
    if (fixed) {
        const { result, unit } = bigNumber(tootal, decimal);
        return `${result}${unit}`;
    }
    return tootal;
};
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
                    content: "";
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
                    font-family: HarmonyOS_Sans_SC_Medium;
                    font-size: 14px;
                    color: #ffffff;
                    line-height: 20px;
                }
            }
            &__right {
                margin-right: 6px;
                text-align: right;
                width: 80px;
            }
        }
    }
}
</style>
