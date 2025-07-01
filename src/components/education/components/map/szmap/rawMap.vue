<template>
    <div class="lc-szmap-raw">
        <svg class="lc-szmap-raw__svg" viewBox="0 0 922 527" version="1.1">
            <Defines></Defines>
            <defs>
                <linearGradient
                    v-for="([type, item], key) in levelsList"
                    :id="`linearGradient-float-${type}`"
                    :key
                >
                    <stop
                        v-for="(el, index) in item?.stop"
                        v-bind="
                            typeof el === 'object' && !Array.isArray(el)
                                ? el
                                : {}
                        "
                        :key="index"
                    ></stop>
                </linearGradient>
            </defs>
            <g
                id="页面-2"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
            >
                <g id="编组-76" transform="translate(4, 0)">
                    <g
                        id="编组"
                        transform="translate(0, 35)"
                        fill-rule="nonzero"
                    >
                        <component
                            :is
                            v-for="(is, key, index) in blockList"
                            :key="index"
                            :class="blockClass"
                            v-bind="getBlockProperties(key)"
                            :show-border="showBorder"
                            @mouseover="getHoverMapKey(key)"
                            @mouseleave="hidePopver($event, key)"
                            @click="markClick(key)"
                        ></component>
                        <Labels v-if="showLabel" :labels :values></Labels>
                    </g>
                </g>
            </g>
        </svg>
        <div v-if="showLabel" class="lc-szmap-raw__mark-group">
            <slot
                name="mapLabel"
                :block-list="blockList"
                :label-class="labelClass"
                :get-vlaue="getMarkProp"
                :current-map-key="currentMapKey"
            >
                <LcMark
                    v-for="(_, key) in blockList"
                    :key
                    :class="labelClass(key)"
                    v-bind="getMarkProp(key)"
                    size="small"
                    @click="markClick(key)"
                ></LcMark>
            </slot>
        </div>
    </div>
</template>
<script lang="ts" setup>
import Sshzq from './comp/sshzq.vue'
import Baoan from './comp/baoan.vue'
import Dapeng from './comp/dapeng.vue'
import Futian from './comp/futian.vue'
import Guangming from './comp/guangming.vue'
import Longgang from './comp/longgang.vue'
import Luohu from './comp/luohu.vue'
import Pingshan from './comp/pingshan.vue'
import Yantian from './comp/yantian.vue'
import Nanshan from './comp/nanshan.vue'
import Longhua from './comp/longhua.vue'
import Defines from './comp/defines.vue'
import Labels from './comp/labels.vue'
import { LcMark } from '@/components/education/components/mark'
import { type Component, computed, onMounted, ref } from 'vue'
import { type Levels, propsRaw } from './props'
import {
    defFloatLevelConfig,
    LabelModelEnum,
    type BlockName,
    szBlockNames,
    defBlockLableMap,
} from './const'
import merge from 'lodash-es/merge'
import { EducationMarkProps } from '../../mark/props'

const {
    labels,
    showLabel = true,
    showBorder = true,
    levels = {},
    values = {},
    fillModel = 'default',
    rotateX = 0,
    disabledGradient = false,
    labelModel = LabelModelEnum.DEFAULT,
} = defineProps(propsRaw)

const blockList: Record<BlockName, Component> = {
    [szBlockNames['光明']]: Guangming,
    [szBlockNames['宝安']]: Baoan,
    [szBlockNames['龙华']]: Longhua,
    [szBlockNames['南山']]: Nanshan,
    [szBlockNames['福田']]: Futian,
    [szBlockNames['罗湖']]: Luohu,
    [szBlockNames['盐田']]: Yantian,
    [szBlockNames['坪山']]: Pingshan,
    [szBlockNames['龙岗']]: Longgang,
    [szBlockNames['大鹏新区']]: Dapeng,
    [szBlockNames['深汕合作区']]: Sshzq,
}

const labelAnimateNum = ref(0)
const $emits = defineEmits<{
    (e: 'markClick', value: EducationMarkProps): void
    (e: 'markMouseover', value: BlockName): void
    (e: 'markMouseleave', value: BlockName): void
}>()

const currentMapKey = ref('')
function getMarkProp(key: BlockName) {
    const markMate = values[key] ?? { value: 0 }
    const currentLevelIndex = levelsList.value.findIndex(
        ([, item]) =>
            item?.range &&
            markMate.value >= item.range[0] &&
            markMate.value <= item.range[1],
    )
    const [, currentLevelConf] = levelsList.value[currentLevelIndex] ?? []
    return {
        ...markMate,
        mapLabel: defBlockLableMap[key],
        style: {
            '--level-scale': labelAnimateNum.value
                ? (currentLevelConf?.scale ?? 1)
                : labelAnimateNum.value,
        },
    }
}
function markClick(key: BlockName) {
    // 点击事件处理
    $emits('markClick', getMarkProp(key))
}
onMounted(() => {
    // 显示动画
    setTimeout(() => {
        labelAnimateNum.value = 1
    }, 300)
})

const blockClass = computed(() => {
    return ['lc-szmap-raw__block', `visible--${fillModel}`]
})

const levelsList = computed<Array<[string, Levels]>>(() => {
    return Object.entries(
        merge({}, defFloatLevelConfig, levels),
    ) as unknown as [string, Levels][]
})

function getBlockProperties(key: BlockName) {
    const currentValueConf = values[key]
    if (!currentValueConf || disabledGradient) return
    const currentLevelIndex = levelsList.value.findIndex(
        ([, item]) =>
            item?.range &&
            currentValueConf.value >= item.range[0] &&
            currentValueConf.value <= item.range[1],
    )
    const [type, currentLevelConf] = levelsList.value[currentLevelIndex] ?? []

    let className: string[] = []
    let styles = {}
    if (currentLevelConf && type) {
        className.push('float-active')
        if (typeof currentLevelConf.stop === 'string') {
            styles['--linear-gradient-fill'] = currentLevelConf.stop
        } else {
            styles['--linear-gradient-fill'] =
                `url(#linearGradient-float-${type})`
        }
    }
    return {
        class: className,
        style: styles,
    }
}
const mapRotateX = computed(() => `rotateX(${rotateX}deg)`)
const labelWrapInsetY = computed(() => Math.abs(rotateX))
const labelClass = (key) => {
    return ['lc-szmap-raw__mark-group--item', `mark-${key}`]
}

function getHoverMapKey(key: BlockName) {
    if (labelModel !== LabelModelEnum.HOVER) return
    currentMapKey.value = key
    $emits('markMouseover', key)
}

const hidePopver = (event: MouseEvent, key: BlockName) => {
    const target = event.relatedTarget as HTMLElement | null
    if (target && target.closest('.lc-szmap-raw__mark-group')) {
        return
    }
    currentMapKey.value = ''
    $emits('markMouseleave', key)
}
</script>

<style lang="scss" scoped>
.lc-szmap-raw {
    width: 100%;
    position: relative;
    perspective: 3000px;

    &__svg {
        transform: v-bind(mapRotateX);
        width: 100%;
    }

    &__mark-group {
        position: absolute;
        inset: calc(v-bind(labelWrapInsetY) * 1px) 0;
        pointer-events: none;
    }

    &__block {
        transition: 0.3s linear;
        will-change: opacity;

        &.float-active {
            &.visible {
                &--default {
                    opacity: 1;
                }

                &--hover {
                    opacity: 1;
                    fill: var(--linear-gradient-fill);

                    :deep(path) {
                        stroke: var(--linear-gradient-fill);
                    }

                    &:hover {
                        opacity: 1;
                        fill: url(#linearGradient-hover);
                    }
                }
            }
        }

        &.visible {
            &--default {
                opacity: 1;
            }

            &--hover {
                opacity: 0;

                &:hover {
                    opacity: 1;
                    fill: url(#linearGradient-hover);
                }
            }
        }
    }
}
</style>

<style lang="scss">
.lc-szmap-raw {
    .lc-szmap-raw__mark-group--item {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, calc(-50% * var(--level-scale, 1)))
            scale(var(--level-scale, 1));
        will-change: transform;
        pointer-events: auto;
        transition: transform 0.2s;

        &:hover {
            cursor: pointer;
        }

        &.mark-guangming {
            left: 20%;
            top: 22%;
        }

        &.mark-baoan {
            left: 13%;
            top: 48%;
        }

        &.mark-longhua {
            left: 32%;
            top: 39%;
        }

        &.mark-nanshan {
            left: 24%;
            top: 62%;
        }

        &.mark-futian {
            left: 34%;
            top: 70%;
        }

        &.mark-luohu {
            left: 47%;
            top: 61%;
        }

        &.mark-yantian {
            left: 59%;
            top: 56%;
        }

        &.mark-pingshan {
            left: 70%;
            top: 41%;
        }

        &.mark-longgang {
            left: 59%;
            top: 32%;
        }

        &.mark-dapeng {
            left: 81%;
            top: 53%;
        }

        &.mark-shenshan {
            left: 90%;
            top: 10%;
        }
    }
}
</style>
