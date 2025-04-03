<template>
    <div class="lc-radiohead">
        <template v-if="$slots.icon">
            <slot name="icon"></slot>
        </template>
        <template v-else>
            <LcIcon v-bind="$attrs" />
        </template>
        <div class="lc-radiohead__title" :title="text">{{ formatedText }}</div>
    </div>
</template>
<script lang="ts" setup>
import { LcIcon } from "@/components/education/components/icon/index";
import { computed } from "vue";
import { overflowStr } from "lowcode-share/es/share";
const props = withDefaults(
    defineProps<{
        text: string;
        maxLength?: number;
    }>(),
    {
        text: "",
        maxLength: 15,
    }
);
const formatedText = computed(() => {
    return overflowStr(props.text, props.maxLength);
});
</script>
<style lang="scss" scoped>
.lc-radiohead {
    display: flex;
    align-items: center;
    &__title {
        margin-left: -4px;
        padding: 8px 16px 8px 8px;
        font-family: AlimamaFangYuanTiVF-SemiBold, AlimamaFangYuanTiVF-SemiBold;
        font-weight: normal;
        font-size: 16px;
        color: #ffffff;
        line-height: 16px;
        text-align: left;
        font-style: normal;
        border-radius: 0 32px 32px 0;
        background: linear-gradient(
            90deg,
            rgba(0, 96, 163, 0) 0%,
            #007fce 100%
        );
    }
}
</style>
