<template>
    <div class="lc-szmap-raw">
        <svg viewBox="0 0 922 527" version="1.1">
            <Defines></Defines>
            <g id="页面-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="编组-76" transform="translate(4, 0)">
                    <g id="编组" transform="translate(0, 35)" fill-rule="nonzero">
                        <Sshzq :class="blockClass"></Sshzq>
                        <Longgang :class="blockClass"></Longgang>
                        <Dapeng :class="blockClass"></Dapeng>
                        <Pingshan :class="blockClass"></Pingshan>
                        <Guangming :class="blockClass"></Guangming>
                        <Luohu :class="blockClass"></Luohu>
                        <Futian :class="blockClass"></Futian>
                        <Yantian :class="blockClass"></Yantian>
                        <Baoan :class="blockClass"></Baoan>
                        <Nanshan :class="blockClass"></Nanshan>
                        <Longhua :class="blockClass"></Longhua>
                        <labels v-if="showLabel"></labels>
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
import labels from './comp/labels.vue';
import { computed } from 'vue';

const {
    showLabel = true,
    fillModel = 'default',
} = defineProps<{
    showLabel?: boolean;
    fillModel?: 'hover' | 'default';
}>();

const blockClass = computed(() => {
    return ['lc-szmap-raw__block', `visible--${fillModel}`];
});
</script>

<style lang="scss" scoped>
.lc-szmap-raw {
    width: 100%;

    &__block {
        transition: opacity 0.3s linear;
        will-change: opacity;
        &:hover {
            fill: url(#linearGradient-hover);
        }

        &.visible {
            &--default {
                opacity: 1;
            }

            &--hover {
                opacity: 0;

                &:hover {
                    opacity: 1;
                }
            }
        }
    }

    &>svg {
        width: 100%;
    }
}
</style>