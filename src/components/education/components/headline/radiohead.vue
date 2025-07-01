<template>
    <div class="lc-radiohead">
        <template v-if="$slots.icon">
            <slot name="icon"></slot>
        </template>
        <template v-else>
            <LcIconCard v-bind="$attrs" />
        </template>
        <div class="lc-radiohead__title" :title="text">{{ formatedText }}</div>
    </div>
</template>
<script lang="ts" setup>
import { LcIconCard } from '@/components/education/components/icon/index'
import { computed, toRefs } from 'vue'
import { overflowStr } from 'lowcode-share/es/share'
const props = withDefaults(
    defineProps<{
        text?: string
        maxLength?: number
        fontSize?: number | string
    }>(),
    {
        text: '',
        maxLength: 15,
        fontSize: 16,
    },
)
const { text, maxLength, fontSize } = toRefs(props)

const formatedText = computed(() => {
    return overflowStr(text.value, maxLength.value)
})
const resultFontSize = computed(() => (typeof fontSize.value === 'number' ? `${fontSize.value}px` : fontSize.value))
</script>
<style lang="scss" scoped>
.lc-radiohead {
    display: flex;
    align-items: flex-end;
    &__title {
        padding: 12px 16px 12px 8px;
        font-family: AlimamaFangYuanTiVF-SemiBold, AlimamaFangYuanTiVF-SemiBold;
        font-weight: normal;
        font-size: v-bind(resultFontSize);
        color: #ffffff;
        line-height: 16px;
        text-align: left;
        font-style: normal;
        border-radius: 0 32px 32px 0;
        background: linear-gradient(90deg, rgba(0, 96, 163, 0) 0%, #007fce 100%);
        position: relative;
        bottom: 4px;
    }
}
</style>
