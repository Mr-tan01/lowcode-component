<template>
    <div class="lc-common-legend">
        <div class="lc-common-legend__wrapper__legend">
            <div class="lc-common-legend__wrapper__legend__item" v-for="(item, key) in customLegendData" :key
                :style="getLegendStyle(key, item)" @click="legendClick(item)"
                @mouseenter="dispatchAction('highlight', item.name)"
                @mouseleave="dispatchAction('downplay', item.name)">
                <slot name="legend" :record="item">
                    <n-tooltip :delay="800">
                        <template #trigger>
                            <div class="lc-common-legend__trigger">
                                <div class="lc-common-legend__wrapper__legend__item__icon"></div>
                                <div class="lc-common-legend__wrapper__legend__item__label"
                                    v-html="legendLabel(item.name, item.value)">
                                </div>
                            </div>
                        </template>
                        <span v-html="legendLabel(item.name, item.value)"></span>
                    </n-tooltip>
                </slot>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { type EChartsCoreOption, type EChartsOption, } from 'echarts';
import { computed, ref, watch } from 'vue';
import { type LegendDataRecord, type LegendDataSelectRecord, type LegendActiveType, type LegendSelectParams } from './types';
import { NTooltip } from 'naive-ui/es/tooltip';

const {
    options = {},
    legendLabel = (name) => name,
    disabled = false,
} = defineProps<{
    options: EChartsOption | EChartsCoreOption;
    legendLabel?: ((name: string, value: number) => string);
    disabled?: boolean;
}>();
const legendSelectedMaps = ref(new Map<string | number, LegendDataSelectRecord>());


watch(() => options.series, () => {
    legendSelectedMaps.value.clear();

    if (!Array.isArray(options.series)) return;
    (options.series[0]?.data as LegendDataRecord[])?.forEach((item) => {
        if (!item.name) {
            return window.console.warn('item.name is required');
        }
        legendSelectedMaps.value.set(item.name, {
            selected: true,
            ...item as LegendDataRecord,
        });
    });
}, {
    deep: 2,
    immediate: true,
});
const $emit = defineEmits<{
    (e: 'legend:click', d: LegendDataRecord): void;
    (e: 'legend:toggleSelect', value: LegendSelectParams): void;
}>();

function dispatchAction(type: LegendActiveType, name: LegendDataRecord['name']) {
    $emit('legend:toggleSelect', {
        type,
        name,
    });
}

function togggleLegendSelected(name: LegendDataRecord['name']) {
    if (!legendSelectedMaps.value.has(name) || disabled) return;
    const record = legendSelectedMaps.value.get(name);
    dispatchAction(record?.selected ? 'legendUnSelect' : 'legendSelect', name);
    legendSelectedMaps.value.set(name, {
        ...record as LegendDataRecord,
        selected: !(record?.selected),
    });
}

function legendClick(record: LegendDataRecord) {
    togggleLegendSelected(record.name);
    $emit('legend:click', record);
}

function getLegendStyle(index: number, record: LegendDataRecord) {
    const { color = [] } = options ?? {};
    return {
        '--item-color': color[index],
        '--unselect-color': !legendSelectedMaps.value.get(record.name)?.selected ? 0.5 : 1,
    }
}


const customLegendData = computed(() => {
    // @ts-ignore
    return options?.series?.[0].data ?? options?.series?.data ?? [];
});
</script>

<style lang="scss" scoped>
.lc-common-legend {
    &__trigger {
        display: flex;
        align-items: center;
        gap: 8px;
    }
    &__wrapper {
        &__legend {
            max-width: var(--legendWidth, 128px);
            min-width: var(--legendWidth, 128px);
            flex: 1;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 8px;
            overflow: auto;
            height: 100%;
            z-index: 2;

            // 美化滚动条样式
            &::-webkit-scrollbar {
                width: 6px;
                height: 6px;
            }

            &::-webkit-scrollbar-track {
                background: transparent;
                border-radius: 10px;
            }

            &::-webkit-scrollbar-thumb {
                background: rgba(0, 127, 206, 0.1);
                border-radius: 10px;
            }

            &::-webkit-scrollbar-thumb:hover {
                background: rgba(0, 127, 206, 0.5);
            }

            &__item {
                font-family: HarmonyOS_Sans_SC;
                font-size: 14px;
                color: #FFFFFF;
                line-height: 20px;
                text-align: left;
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 5px 12px;
                background: linear-gradient(270deg, rgba(34, 118, 252, 0) 0%, #2276fc22 100%);
                position: relative;
                opacity: var(--unselect-color, 1);

                &:hover {
                    cursor: pointer;
                    background: linear-gradient(270deg, rgba(34, 118, 252, 0) 0%, #2276fc6d 100%);
                }

                &::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    z-index: 1;
                    width: 4px;
                    height: 4px;
                    background: url(./images/arrow.png) no-repeat 100% / 100%;
                }

                &__icon {
                    width: 12px;
                    height: 12px;
                    background: var(--item-color, '#0FFBF8');
                }

                &__label {
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
        }

    }
}
</style>