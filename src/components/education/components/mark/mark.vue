<template>
    <div
        v-if="show"
        class="lc-mark"
        :class="[`lc-mark--${model}`, `lc-mark--${size}`, `lc-mark--icon-${iconName}`]"
        :tabindex="-1"
        :style="customProperts"
    >
        <div class="lc-mark__wrapper" @click="clickMark">
            <div class="lc-mark__wrapper__image">
                <img class="lc-mark__wrapper__image__img" :src="imageIconSrc" alt=" " draggable="false" />
                <span class="lc-mark__wrapper__image__label">{{ label }}</span>
            </div>
            <div class="lc-mark__wrapper__rect">
                <slot>
                    <span class="lc-mark__wrapper__rect--value">
                        <NNumberAnimation :from="0" :to="value" :precision="precision"> </NNumberAnimation>
                    </span>
                    <span class="lc-mark__wrapper__rect--unit">
                        {{ unit }}
                    </span>
                </slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { NNumberAnimation } from 'naive-ui/es/number-animation'
import { computed } from 'vue'
import { EducationMarkProps } from './props'

const {
    value = 0,
    unit,
    model = 'default',
    meta = {},
    size = 'medium',
    iconName = 'mark',
    iconSrc = '',
    label = '',
    show = true,
    precision = 0,
} = defineProps<EducationMarkProps>()
const icons = import.meta.glob<string>('./images/**.png', {
    import: 'default',
    eager: true,
})

const $emit = defineEmits<{
    (e: 'mark:click', v: { value: number | string; meta: any }): void
}>()

const imageIconSrc = computed<string>(() => iconSrc || icons[`./images/${iconName}.png`])
const customProperts = computed(() => {
    return {
        '--mark-icon': `url(${icons[`./images/${iconName}.png`]})`,
        '--mark-icon-rect': `url(${icons[`./images/${iconName === 'normal' ? 'mark2' : iconName}-rect.png`]})`,
    }
})

function clickMark() {
    $emit('mark:click', {
        value,
        meta,
    })
}
</script>
<style lang="scss" scoped>
.lc-mark {
    width: fit-content;
    outline: none;

    @mixin rectModel() {
        .lc-mark {
            &__wrapper {
                &__rect {
                    @content;
                }
            }
        }
    }

    @mixin showRect {
        @include rectModel() {
            opacity: 1;
            pointer-events: auto;
        }
    }

    &--default {
        @include showRect;
    }

    &--focus {
        &:focus {
            @include showRect;
        }
    }

    &--hover {
        &:hover {
            @include showRect;
        }
    }

    &--small {
        .lc-mark {
            &__wrapper {
                img {
                    height: 40px;
                }

                &__rect {
                    padding: 0 20px;

                    &--value {
                        font-size: 18px;
                        line-height: 28px;
                    }

                    &--unit {
                        font-size: 14px;
                        line-height: 28px;
                    }
                }

                &__image {
                    &__label {
                        font-size: 18px;
                    }
                }
            }
        }
    }

    &--icon-normal {
        &:hover,
        &:focus {
            .lc-mark {
                &__wrapper {
                    &__image {
                        background-image: url(./images/mark2.png);
                    }
                    &__rect {
                        background-image: url(./images/mark2-rect.png);
                    }
                }
            }
        }
    }

    &__wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        &__image {
            position: relative;
            z-index: 2;
            background: var(--mark-icon) no-repeat;
            background-size: contain;
            background-position: center center;
            transition: background 0.3s linear;
            &__label {
                position: absolute;
                inset: 0;
                z-index: 2;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 60%;

                font-family: HarmonyOS_Sans_SC_Black;
                font-size: 24px;
                color: #ffffff;
                line-height: 29px;
                text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.5);
            }
        }

        img {
            object-fit: contain;
            height: 58px;
            position: relative;
            z-index: 2;
            opacity: 0;

            &:hover {
                cursor: pointer;
            }
        }

        &__rect {
            transition:
                opacity,
                background 0.3s linear;
            opacity: 0;
            pointer-events: none;
            position: absolute;
            z-index: 0;
            bottom: 30%;
            padding: 0 30px;
            left: 50%;
            background: var(--mark-icon-rect) no-repeat;
            background-size: 100% 100%;
            min-width: 80px;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: flex-end;
            backdrop-filter: blur(2px);

            &--value {
                font-family: HarmonyOS_Sans_SC_Medium;
                font-size: 27px;
                color: #ffffff;
                line-height: 40px;
                text-align: center;
                font-style: normal;
                text-transform: none;
            }

            &--unit {
                font-family: HarmonyOS_Sans_SC_Medium;
                font-size: 21px;
                line-height: 40px;
                color: #ffffff;
            }
        }
    }
}
</style>
