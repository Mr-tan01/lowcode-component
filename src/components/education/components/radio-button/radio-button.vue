<template>
    <div class="lc-radio-button" :class="{
        'lc-radio-button--focus': isFocus,
    }">
        <div class="lc-radio-button__wrapper">
            <button class="lc-radio-button__wrapper__button" @click="clickButton">
                <div class="lc-radio-button__wrapper__button--suffix" v-if="$slots.suffix">
                    <slot name="suffix"></slot>
                </div>
                <div class="lc-radio-button__wrapper__button--text">
                    {{ text }}
                </div>
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, inject } from 'vue';
import { radioButtonGroupProvideKey } from '@/components/education/components/radio-button-group/const';

const {
    text = '',
    value = '',
} = defineProps({
    text: {
        type: String,
    },
    value: {
        type: [String, Number],
    }
});
const radioButtonGroupInject = inject(radioButtonGroupProvideKey);
const isFocus = computed(() => radioButtonGroupInject?.value.value === value);

function clickButton() {
    radioButtonGroupInject?.value?.change(value);
}
</script>

<style lang="scss" scoped>
.lc-radio-button {
    background: #06385E;
    border-right: 1px solid #159AFF;
    backdrop-filter: blur(2.222222222222222px);
    box-sizing: border-box;

    &:nth-last-child(1) {
        border-right: 0;
    }

    &--focus {
        background: linear-gradient(180deg, rgba(15, 251, 248, 0) 0%, #0FFBF8 100%);
        border: 1px solid #0FFBF8;
    }

    &__wrapper {
        &__button {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            padding: 7px 20px;
            border: none;
            margin: 0;
            background: transparent;

            &:hover {
                cursor: pointer;
            }

            &--suffix {
                min-width: 18px;
                min-height: 18px;
            }

            &--text {
                font-family: HarmonyOS_Sans_SC;
                font-size: 16px;
                color: #FFFFFF;
                line-height: 26px;
                text-align: right;
                font-style: normal;
                text-transform: none;
            }
        }
    }
}
</style>