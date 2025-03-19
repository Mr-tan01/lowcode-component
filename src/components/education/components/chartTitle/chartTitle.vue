<template>
    <div class="lc-chart-title " :class="[`lc-chart-title--${dir}`]">
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
import { computed, PropType } from 'vue';
import { overflowStr } from 'lowcode-share/es/share';
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
    }
});
const formatedText = computed(() => {
    return overflowStr(text, maxLength);
});
</script>

<style lang="scss" scoped>
.lc-chart-title {
    width: fit-content;
    background-repeat: no-repeat;
    box-sizing: border-box;
    padding: 5px 5px;

    background-size: 100% 100%;

    &--ltr {
        width: fit-content;
        background-image: url(./images/ltr-bg.png);
        .lc-chart-title {
            &__wrapper {
                position: relative;
                &__text  {
                    text-align: right;
                    padding-right: unset;
                    font-size: 18px;
                    margin-right: 40px;
                }
                &__icon {
                    position: absolute;
                    right: 10px; 
                    top: 60%;
                    right: 3%;
                    transform: translateY(-50%);
                    img {
                        width: 30px; 
                        height: 30px; 
                    }
                } 
            }
        }
    }

    &--rtl {
        width: fit-content;
        background-image: url(./images/rtl-bg.png);
        .lc-chart-title {
            &__wrapper {
                position: relative;
                &__text  {
                    text-align: right;
                    padding-right: unset;
                    font-size: 18px;
                    margin-left: 40px;
                } 
                &__icon {
                    position: absolute;
                    right: 10px; 
                    top: 60%;
                    left: 3%;
                    transform: translateY(-50%);
                    img {
                        width: 30px; 
                        height: 30px; 
                    }
                } 
            }
        }
    }
}
</style>