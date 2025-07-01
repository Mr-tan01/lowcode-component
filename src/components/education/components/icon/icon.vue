<template>
    <div
        class="lc-icon"
        :style="{
            '--img-src': `url(${src})`,
            '--img-selected-src': `url(${selectedSrc})`,
        }"
        :class="{
            'lc-icon--selected': selected,
        }"
    >
        <div
            class="lc-icon__image"
            :class="{
                'lc-icon__image--enhover': !!selectedSrc,
            }"
        >
            <img class="lc-icon__img" :src="src" draggable="false" alt="" />
        </div>
        <span class="lc-icon__span">
            <slot></slot>
        </span>
    </div>
</template>

<script lang="ts" setup>
import { computed, Ref, toRefs } from 'vue'
import { NameTypeFunc, useImage, type Domains, type NameTypes } from './icons'
const props = withDefaults(
    defineProps<{
        domain?: Domains
        name?: NameTypes
        size?: number | string
        ext?: string
        selected?: boolean
    }>(),
    {
        domain: 'func',
        name: 'add',
        size: 32,
        ext: '.png',
        selected: void 0,
    },
)

const { domain, name, size, ext, selected } = toRefs(props)
const { src, selectedSrc } = useImage(domain as Ref<Domains>, name as Ref<NameTypeFunc<Domains>>, ext)

const iconWidth = computed(() => (typeof size.value === 'number' ? `${size.value}px` : size.value))
</script>

<style lang="scss" scoped>
.lc-icon {
    width: fit-content;
    display: inline-flex;
    align-items: center;

    &--selected {
        .lc-icon {
            &__image {
                background-image: var(--img-selected-src);
            }
        }
    }

    &__image {
        background: var(--img-src) no-repeat;
        background-size: 100%;
        background-position: center center;
        transition: background 0.3s linear;

        &--enhover {
            &:hover {
                background-image: var(--img-selected-src);
            }
        }
    }

    &__img {
        width: v-bind(iconWidth);
        height: v-bind(iconWidth);
        object-fit: contain;
        opacity: 0;
    }

    &__span {
        font-size: 12px;
        color: #fff;
    }
}
</style>
