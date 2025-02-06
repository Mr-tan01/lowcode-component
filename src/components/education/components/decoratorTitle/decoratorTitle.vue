<template>
    <div class="lc-decorator-title" :class="[`lc-decorator-title--${dir}`]">
        <div class="lc-decorator-title__wrapper">
            <div class="lc-decorator-title__wrapper__text" :title="text">
                {{ formatedText }}
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue';
import { overflowStr } from '../../common/utils/formate';

const {
    text = '',
    maxLength = 12,
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
                margin-right: 27px;
                margin-left: unset;
                &__text  {
                    text-align: right;
                    padding-right: unset;
                    padding-left: 35%;
                } 
            }
        }
    }

    &__wrapper {
        margin-left: 27px;

        &__text {
            font-family: AlimamaFangYuanTiVF-SemiBold, AlimamaFangYuanTiVF-SemiBold;
            font-weight: normal;
            font-size: 18px;
            color: #FFFFFF;
            line-height: 18px;
            text-align: left;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            padding-right: 35%;
        }
    }
}
</style>