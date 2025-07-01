<template>
    <div class="lc-subhead">
        <div v-if="type === direction.left && !hideRadioIcon" class="lc-subhead__imglft lc-subhead__img">
            <img src="./images/subhead-lft.png" alt="" />
        </div>
        <div v-if="type === direction.right || type === direction.center" class="lc-subhead__imglgt lc-subhead__img">
            <img src="./images/subhead-rgt.png" alt="" />
        </div>
        <div v-if="$slots['icon-left']" class="lc-subhead__icon-left">
            <slot name="icon-left"></slot>
        </div>
        <div class="lc-subhead__text" :title="text">
            {{ formatedText }}
        </div>
        <div v-if="$slots['icon-right']" class="lc-subhead__icon-right">
            <slot name="icon-right"></slot>
        </div>
        <div v-if="type === direction.right && !hideRadioIcon" class="lc-subhead__imgrft lc-subhead__img">
            <img src="./images/subhead-lft.png" alt="" />
        </div>
        <div v-if="type === direction.left || type === direction.center" class="lc-subhead__imgrgt lc-subhead__img">
            <img src="./images/subhead-lgt.png" alt="" />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { computed, PropType } from 'vue'
import { overflowStr } from 'lowcode-share/es/share'
const direction = {
    right: 'right',
    center: 'center',
    left: 'left',
} as const
type DirectionType = typeof direction
const {
    text = '',
    maxLength = 15,
    fontSize = '18px',
    type = 'left',
    hideRadioIcon = false,
} = defineProps({
    text: {
        type: String,
    },
    maxLength: {
        type: Number,
    },
    fontSize: {
        type: String,
    },
    type: {
        type: String as PropType<DirectionType[keyof DirectionType]>,
    },
    hideRadioIcon: {
        type: Boolean,
    },
})
const formatedText = computed(() => {
    return overflowStr(text, maxLength)
})
</script>

<style lang="scss" scoped>
.lc-subhead {
    display: flex;
    &__imglft {
        margin-right: 6px;
    }
    &__imgrft {
        margin-left: 4px;
    }
    &__imglgt {
        margin-right: 6px;
    }
    &__imgrgt {
        margin-left: 6px;
    }
    &__img {
        display: flex;
        align-items: center;
    }

    &__text {
        white-space: pre;
        font-family: AlimamaFangYuanTiVF-SemiBold, AlimamaFangYuanTiVF-SemiBold;
        font-weight: 600;
        font-size: v-bind(fontSize);
        color: #ffffff;
        line-height: v-bind(fontSize);
        text-align: left;
        font-style: normal;
    }
    &__icon-left {
        margin-right: 3px;
        max-width: 15px;
        max-height: 15px;
    }
    &__icon-right {
        margin-left: 3px;
        max-width: 15px;
        max-height: 15px;
    }
}
</style>
