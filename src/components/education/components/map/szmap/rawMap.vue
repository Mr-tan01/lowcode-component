<template>
    <div class="lc-szmap-raw">
        <svg viewBox="0 0 922 527" version="1.1">
            <Defines></Defines>
            <defs>
                <linearGradient v-for="([type, item], key) in levelsList" :key :id="`linearGradient-float-${type}`">
                    <stop v-for="(el, index) in item?.stop"
                        v-bind="typeof el === 'object' && !Array.isArray(el) ? el : {}" :key="index">
                    </stop>
                </linearGradient>
            </defs>
            <g id="页面-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="编组-76" transform="translate(4, 0)">
                    <g id="编组" transform="translate(0, 35)" fill-rule="nonzero">
                        <component :class="blockClass" v-for="(is, key, index) in blockList" :key="index" :is
                            v-bind="getBlockProperties(key)"></component>
                        <Labels v-if="showLabel" :labels :values></Labels>
                    </g>
                </g>
            </g>
        </svg>
    </div>
</template>
<script lang="ts" setup>
import Sshzq from './comp/sshzq.vue';
import Baoan from './comp/baoan.vue';
import Dapeng from './comp/dapeng.vue';
import Futian from './comp/futian.vue';
import Guangming from './comp/guangming.vue';
import Longgang from './comp/longgang.vue';
import Luohu from './comp/luohu.vue';
import Pingshan from './comp/pingshan.vue';
import Yantian from './comp/yantian.vue';
import Nanshan from './comp/nanshan.vue';
import Longhua from './comp/longhua.vue';
import Defines from './comp/defines.vue';
import Labels from './comp/labels.vue';
import { type Component, computed } from 'vue';
import { type Levels, propsRaw } from './props';
import { defFloatLevelConfig, type BlockName } from './const';
import merge from 'lodash-es/merge';

const {
    labels,
    showLabel = true,
    levels = {},
    values = {},
    fillModel = 'default',
} = defineProps(propsRaw);

const blockList: Record<BlockName, Component> = {
    光明: Guangming,
    宝安: Baoan,
    龙华: Longhua,
    南山: Nanshan,
    福田: Futian,
    罗湖: Luohu,
    盐田: Yantian,
    坪山: Pingshan,
    龙岗: Longgang,
    大鹏新区: Dapeng,
    深汕合作区: Sshzq,
}

const blockClass = computed(() => {
    return ['lc-szmap-raw__block', `visible--${fillModel}`];
});

const levelsList = computed<Array<[string, Levels]>>(() => {
    return Object.entries(merge({}, levels, defFloatLevelConfig));
});

function getBlockProperties(key: BlockName) {
    const currentValueConf = values[key];

    if (!currentValueConf) return {};
    const currentLevelIndex = levelsList.value.findIndex(([_, item]) => currentValueConf.value >= item?.range?.[0]! && currentValueConf.value <= item?.range?.[1]!);
    const [type, currentLevelConf] = levelsList.value[currentLevelIndex] ?? [];

    let className: string[] = [];
    let styles = {};
    if (currentLevelConf && type) {
        className.push('float-active');
        if (typeof currentLevelConf.stop === 'string') {
            styles['--linear-gradient-fill'] = currentLevelConf.stop;
        } else {
            styles['--linear-gradient-fill'] = `url(#linearGradient-float-${type})`;
        }
    }
    return {
        class: className,
        style: styles,
    }
}
</script>

<style lang="scss" scoped>
.lc-szmap-raw {
    width: 100%;

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

    &>svg {
        width: 100%;
    }
}
</style>