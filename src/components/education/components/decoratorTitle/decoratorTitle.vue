<template>
    <div class="lc-decorator-title" :class="[`lc-decorator-title--${dir}`]">
        <div class="lc-decorator-title__wrapper">
            <slot name="title">
                <div class="lc-decorator-title__wrapper__text" :title="text">
                    {{ formatedText }}
                </div>
            </slot>
            <div class="lc-decortator-title__slot" v-if="$slots.helper">
                <slot name="helper"></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, PropType } from "vue";
import { overflowStr } from "lowcode-share/es/share";
const {
    text = "",
    maxLength = 12,
    dir = "ltr",
} = defineProps({
    text: {
        type: String,
    },
    maxLength: {
        type: Number,
    },
    dir: {
        type: String as PropType<"ltr" | "rtl">,
    },
});
const formatedText = computed(() => {
    return overflowStr(text, maxLength);
});
</script>

<style lang="scss" scoped>
.lc-decorator-title {
    width: 100%;
    height: 100%;

    background-repeat: no-repeat;
    background-size: 100% 100%;

    &--ltr {
        background-image: url(./images/ltr-bg.png);
    }

    &--rtl {
        background-image: url(./images/rtl-bg.png);
        .lc-decorator-title {
            &__wrapper {
                padding-right: unset;
                margin-right: 27px;
                margin-left: unset;
                padding-left: 30%;
                flex-direction: row-reverse;
                &__text {
                    text-align: right;
                    padding-right: unset;
                }
            }
        }
    }

    &__wrapper {
        margin-left: 27px;
        padding-right: 28%;
        display: flex;
        gap: 7px;
        align-items: center;

        &__text {
            font-family: AlimamaFangYuanTiVF-SemiBold, AlimamaFangYuanTiVF-SemiBold;
            font-weight: 600;
            font-size: 18px;
            color: #ffffff;
            line-height: 18px;
            text-align: left;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
}
</style>
