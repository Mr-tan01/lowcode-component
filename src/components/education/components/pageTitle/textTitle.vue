<template>
    <div class="lc-page__texthead">
        <div class="lc-page__texthead__bg"></div>
        <div class="lc-page__texthead__text" :title="text">
            {{ formatedText }}
        </div>
    </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import { overflowStr } from '../../common/utils/formate';

const {
    text = '',
    maxLength = 15,
} = defineProps({
    text: {
        type: String,
    },
    maxLength: {
        type: Number,
    }
});
const formatedText = computed(() => {
    return overflowStr(text, maxLength);
});
</script>

<style lang="scss" scoped>
.lc-page__texthead {
    width: fit-content;
    position: relative;
    padding: 7px 30px;
    box-sizing: border-box;

    &__bg {
        position: absolute;
        inset: 0;
        --gradient: linear-gradient(to right, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 1));
        mask: var(--gradient);
        -webkit-mask: var(--gradient);
        background: linear-gradient(to right, rgba(0, 96, 163, 0) 0%, #007FCE 100%);
        border-radius: 2px;
        border: 1px solid rgba(15, 194, 251, 1);
        z-index: 0;

        &::after {
            content: '';
            backdrop-filter: blur(1.44px);
            position: absolute;
            inset: 0;
            z-index: -1;
        }

    }

    &__text {
        font-family: HarmonyOS_Sans_SC;
        font-size: 16px;
        color: #FFFFFF;
        line-height: 26px;
        text-align: left;
        font-style: normal;
        text-transform: none;
        position: relative;
        z-index: 2;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}
</style>