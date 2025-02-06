<template>
    <div class="lc-robot">
        <div class="lc-robot__wrapper" tabindex="-1">
            <img class="lc-robot__wrapper__image" :class="[imageLayoutClass]" :src="robotSrc" draggable="false" alt="">
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue';
import { robotBQMap, imageShowTrigger, type RobotBQMapKeys, type ImageShowTrigger, type ImageHideDir } from './const';

const {
    value = 's1',
    width = '219px',
    height = '233px',
    trigger = 'none',
    hidDir = 'lt'
} = defineProps({
    value: {
        type: String as PropType<RobotBQMapKeys>,
    },
    width: {
        type: String,
    },
    height: {
        type: String,
    },
    trigger: {
        type: String as PropType<ImageShowTrigger>,
    },
    hidDir: {
        type: String as PropType<ImageHideDir>,
    }
});
const robotSrc = computed(() => robotBQMap[value]);
const imageLayoutClass = computed(() => {

    return {
        [`lc-robot__wrapper__image--status-${hidDir}`]: trigger !== imageShowTrigger.none,
    }
});
</script>

<style lang="scss" scoped>
.lc-robot {

    &__wrapper {
        overflow: hidden;

        &:focus {
            .lc-robot__wrapper__image {
                transform: unset;
                overflow: unset;
            }
        }

        &__image {
            user-select: none;
            width: v-bind(width);
            height: v-bind(height);
            transition: transform linear 0.3s;

            &--status-lt {
                transform: translateX(-50%) rotate(30deg);
            }

            &--status-rt {
                transform: translateX(50%) rotate(-30deg);

            }
        }
    }
}
</style>