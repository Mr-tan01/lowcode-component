<template>
    <div class="lc-subhead">
        <div class="lc-subhead__imglft lc-subhead__img">
            <img src="./images/subhead-lft.png" alt="">
        </div>
        <div class="lc-subhead__text" :title="text">
            {{ formatedText }}
        </div>
        <div class="lc-subhead__imgrgt lc-subhead__img">
            <img src="./images/subhead-rgt.png" alt="">
        </div>
    </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import { overflowStr } from 'lowcode-share/es/share';

const {
    text = '',
    maxLength = 15,
    fontSize = '16px',
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
});
const formatedText = computed(() => {
    return overflowStr(text, maxLength);
});
</script>

<style lang="scss" scoped>
.lc-subhead {
    display: flex;
    &__imglft {
        margin-right: 6px;
    }
    &__imgrgt {
        margin-left: 4px;
    }
    &__img {
        display: flex;
        align-items: center;
    }

    &__text {
        font-family: AlimamaFangYuanTiVF-SemiBold, AlimamaFangYuanTiVF-SemiBold;
        font-weight: normal;
        font-size: v-bind(fontSize);
        color: #FFFFFF;
        line-height: v-bind(fontSize);
        text-align: left;
        font-style: normal;
    }
}
</style>