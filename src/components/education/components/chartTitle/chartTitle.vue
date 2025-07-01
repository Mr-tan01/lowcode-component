<template>
    <div class="lc-chart-title" :class="[`lc-chart-title--${dir}`]">
        <div class="lc-chart-title__wrapper">
            <div class="lc-chart-title__wrapper__text" :title="text">
                {{ formatedText }}
            </div>
            <div class="lc-chart-title__wrapper__icon">
                <img src="./images/ltr-bz.png" alt="icon" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue'
import { overflowStr } from 'lowcode-share/es/share'
const {
    text = '',
    maxLength = 6,
    dir = 'ltr',
} = defineProps({
    text: {
        type: String,
    },
    maxLength: {
        type: Number,
    },
    dir: {
        type: String as PropType<'ltr' | 'rtl'>,
    },
})
const formatedText = computed(() => {
    return overflowStr(text, maxLength)
})
</script>

<style lang="scss" scoped>
.lc-chart-title {
    width: fit-content;
    background-repeat: no-repeat;
    box-sizing: border-box;
    min-width: 148px;
    height: 32px;
    background-size: 100% 100%;
    background-position: center center;
    display: flex;
    align-items: center;
    padding: 0 6px;

    &--ltr {
        justify-content: flex-end;
        background-image: url(./images/ltr-bg.png);
    }

    &--rtl {
        justify-content: flex-start;
        background-image: url(./images/rtl-bg.png);

        .lc-chart-title {
            &__wrapper {
                flex-direction: row-reverse;
            }
        }
    }

    &__wrapper {
        position: relative;
        display: flex;
        align-items: center;
        gap: 9px;

        &__text {
            font-family: HarmonyOS_Sans_SC;
            font-size: 16px;
            color: #ffffff;
            line-height: 18px;
        }

        &__icon {
            display: flex;

            img {
                width: 21px;
                height: 21px;
                object-fit: contain;
            }
        }
    }
}
</style>
