<template>
    <div class="lc-desc-list">
        <div class="lc-desc-list__wrapper">
            <div class="lc-desc-list__head" :style="{ paddingRight: hasScrollbar ? '6px' : '0' }">
                <div v-for="(thRecord, thIndex) in columns" :key="thIndex" :style="customRecordStyle(thRecord)" class="lc-desc-list__head--item">
                    <div class="lc-desc-list__head--item__cell" :title="getThCellNode(thRecord, thIndex)">
                        {{ getThCellNode(thRecord, thIndex) }}
                    </div>
                </div>
            </div>
            <LcElasticScrollbar v-show="data.length" ref="scrollbarRef">
                <div class="lc-desc-list__tbody">
                    <div v-for="(tdRecord, tdIndex) in data" :key="tdIndex" class="lc-desc-list__tbody__tr">
                        <div
                            v-for="(thRecord, thIndex) in columns"
                            :key="thIndex"
                            class="lc-desc-list__tbody__tr__cell"
                            :style="customRecordStyle(thRecord)"
                        >
                            <slot
                                :name="getTdCellSlotName(thRecord)"
                                :record="tdRecord"
                                :index="tdIndex"
                                :column="thRecord"
                                :col-index="thIndex"
                                :value="getTdCellNode(tdRecord, thRecord, tdIndex)"
                            >
                                <span class="lc-desc-list__tbody__tr__cell__span" :title="getTdCellNode(tdRecord, thRecord, tdIndex)">
                                    {{ getTdCellNode(tdRecord, thRecord, tdIndex) }}
                                </span>
                            </slot>
                        </div>
                    </div>
                </div>
            </LcElasticScrollbar>
            <div v-show="!data.length" class="lc-desc-list--empty">
                <slot name="empty">
                    <LcEmpty />
                </slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { PropType, ref, onMounted, watch, nextTick } from 'vue'
import memoize from 'lodash-es/memoize'
import { LcElasticScrollbar } from '@/components/education/components/elasticScrollbar'
import { LcEmpty } from '@/components/education/components/empty'

export interface Columns {
    title: string
    type?: 'index' | 'default'
    dataIndex?: string
    align?: string
    width?: string
    flex?: string | number
}
const { data = [] } = defineProps({
    columns: {
        type: Array as PropType<Columns[]>,
        default: () => [],
    },
    data: {
        type: Array as PropType<Record<string, any>[]>,
        default: () => [],
    },
})

const tdCellTypeMap = {
    index: (_tdRecord, _thRecord, _tdIndex: number) => {
        return _tdIndex + 1
    },
    default: (_tdRecord, _thRecord) => {
        const val = _tdRecord[_thRecord.dataIndex]
        return typeof val === 'number' ? val : val || '-'
    },
}

const hasScrollbar = ref(false)
const scrollbarRef = ref()

function checkScrollbar() {
    if (scrollbarRef.value) {
        hasScrollbar.value = scrollbarRef.value.$el.scrollHeight > scrollbarRef.value.$el.clientHeight
    }
}

onMounted(() => {
    checkScrollbar()
})

watch(
    () => data,
    () => {
        nextTick(() => {
            checkScrollbar()
        })
    },
    { deep: true },
)

const getThCellNode: (_record: Columns, _index: number) => string = memoize((_record: Columns) => {
    return _record.title
})

function createTdCellNode(_tdRecord, _thRecord: Columns, _tdIndex: number) {
    const renderHandler = _thRecord.type ? tdCellTypeMap[_thRecord.type] : tdCellTypeMap.default
    return renderHandler(_tdRecord, _thRecord, _tdIndex)
}
const getTdCellNode: typeof createTdCellNode = memoize(createTdCellNode, createTdCellNode)

const customRecordStyle: (_record: Columns) => Record<string, any> = memoize(thRecord => {
    return {
        '--text-align': thRecord.align ?? 'left',
        '--cell-flex': thRecord.flex ?? 1,
        '--cell-width': thRecord.width ?? 'auto',
    }
})

function getTdCellSlotName(_thRecord) {
    return _thRecord.dataIndex ?? 'default'
}
</script>

<style lang="scss" scoped>
.lc-desc-list {
    --headerHeight: 36px;

    @mixin scrollbar-flex {
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    @include scrollbar-flex;

    &__wrapper {
        position: relative;
        @include scrollbar-flex;
    }

    &__scrollbar-flex {
        @include scrollbar-flex;
    }

    &--empty {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    &__head {
        z-index: 9;
        background: linear-gradient(180deg, rgba(0, 96, 163, 0.1) 0%, rgba(0, 127, 206, 0.5) 100%);
        border: 1px solid;
        border-image: linear-gradient(180deg, rgba(49, 175, 255, 0.2), rgba(15, 194, 251, 0.8)) 1 1;
        backdrop-filter: blur(1.44px);
        display: flex;
        position: sticky;
        top: 0;

        &--item {
            flex: var(--cell-flex, none);
            width: var(--cell-width, auto);
            padding: 9px 11px;
            box-sizing: border-box;

            &__cell {
                font-family: HarmonyOS_Sans_SC;
                font-size: 14px;
                color: #ffffff;
                line-height: 20px;
                font-style: normal;

                text-align: var(--text-align, 'left');
            }
        }
    }

    &__tbody {
        .empty {
            position: absolute;
            inset: 0;
            display: flex;
            flex: 1;
            justify-content: center;
            align-items: center;
            color: #fff;
            font-size: 16px;
        }

        &__tr {
            background: rgba(0, 148, 255, 0.1);
            backdrop-filter: blur(2px);
            border: 1px solid transparent;
            display: flex;
            margin-top: 8px;
            position: relative;
            transition: background 0.3s linear;

            &::before {
                content: '';
                width: 14px;
                height: 20px;
                background: url(./images/right-arrow.png) no-repeat;
                background-size: contain;
                position: absolute;
                z-index: 9;
                left: 14px;
                top: 50%;
                transform: translateY(-50%);
                opacity: 0;
                transition: opacity 0.3s;
            }

            &:hover {
                background: linear-gradient(90deg, rgba(15, 251, 248, 0) 0%, rgba(15, 251, 248, 0.35) 100%);
                border: 1px solid;
                border-image: linear-gradient(90deg, rgba(34, 253, 252, 0), rgba(15, 251, 248, 1)) 1 1;
                &::before {
                    opacity: 1;
                }
            }

            &__cell {
                font-family: HarmonyOS_Sans_SC;
                font-size: 14px;
                color: #ffffff;
                line-height: 20px;
                font-style: normal;
                line-height: 26px;
                font-style: normal;
                padding: 11px;
                text-align: var(--text-align, 'center');
                flex: var(--cell-flex, 1);
                width: var(--cell-width, auto);
                --line-clamp: 2;
                box-sizing: border-box;
                &__span {
                    display: -webkit-box;
                    /* 必须设置display属性为-webkit-box */
                    overflow: hidden;
                    /* 超出部分隐藏 */
                    text-overflow: ellipsis;
                    /* 显示省略号 */
                    line-clamp: var(--line-clamp);
                    -webkit-line-clamp: var(--line-clamp);
                    -moz-line-clamp: var(--line-clamp);
                    -ms-line-clamp: var(--line-clamp);
                    -o-line-clamp: var(--line-clamp);
                    /* 限制显示两行 */
                    -webkit-box-orient: vertical;
                    /* 垂直方向上的换行 */
                }
            }
        }
    }
}
</style>
