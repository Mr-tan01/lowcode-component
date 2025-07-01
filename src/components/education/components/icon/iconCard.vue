<template>
    <div
        class="lc-icon-card"
        :style="{
            '--img-src': `url(${bgSrc})`,
            '--img-selected-src': `url(${bgSelectedSrc})`,
        }"
        :class="{
            'lc-icon-card--selected': selected,
        }"
    >
        <div
            class="lc-icon-card__image"
            :class="{
                'lc-icon-card__image--enhover': !!bgSelectedSrc,
            }"
        >
            <img class="lc-icon-card__img" :src="iconSrc" draggable="false" alt="" />
        </div>
        <span class="lc-icon-card__span">
            <slot></slot>
        </span>
    </div>
</template>

<script lang="ts" setup>
import { computed, Ref, toRefs, ref } from 'vue'
import { NameTypeFunc, useImage, type Domains, type NameTypes } from './icons'
const props = withDefaults(
    defineProps<{
        bagName?: 'booth' | 'pedestal'
        domain?: Domains
        name?: NameTypes
        size?: number | string // 整体大小
        iconSize?: number | string // 图标大小
        gap?: number | string
        ext?: string
        selected?: boolean
    }>(),
    {
        bagName: 'pedestal',
        domain: 'func',
        name: 'add',
        size: 74,
        iconSize: 46,
        gap: 16,
        ext: '.png',
        selected: void 0,
    },
)

const { bagName, domain, name, size, iconSize, gap, ext } = toRefs(props)
const bagImg = ref('baseSupport')
const bgSrcData = useImage(bagImg as Ref<Domains>, bagName as Ref<NameTypeFunc<Domains>>, ext)
const srcData = useImage(domain as Ref<Domains>, name as Ref<NameTypeFunc<Domains>>, ext)
const { src: bgSrc, selectedSrc: bgSelectedSrc } = bgSrcData
const { src: iconSrc } = srcData

const imageWidth = computed(() => (typeof size.value === 'number' ? `${size.value}px` : size.value))
const iconWidth = computed(() => (typeof iconSize.value === 'number' ? `${iconSize.value}%` : iconSize.value + '%'))
const iconGap = computed(() => {
    const baseGap = typeof gap.value === 'number' ? gap.value : Number(gap.value)
    return bagName.value === 'booth' ? `${baseGap + 16}%` : `${baseGap}%`
})
</script>

<style lang="scss" scoped>
.lc-icon-card {
    width: fit-content;
    display: inline-flex;
    align-items: center;

    &--selected {
        .lc-icon-card {
            &__image {
                background-image: var(--img-selected-src);
            }
        }
    }

    &__image {
        position: relative;
        width: v-bind(imageWidth);
        height: v-bind(imageWidth);
        background: var(--img-src) no-repeat center / contain;
        transition: background 0.3s linear;
        display: grid;
        place-items: center;

        &--enhover {
            &:hover {
                background-image: var(--img-selected-src);
            }
        }
    }

    &__img {
        max-width: v-bind(iconWidth);
        padding-bottom: v-bind(iconGap);
        object-fit: contain;
    }

    &__span {
        font-size: 12px;
        color: #fff;
    }
}
</style>
