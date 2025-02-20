<template>
    <div class="lc-icon" :style="{
        '--img-src': `url(${src})`,
        '--img-selected-src': `url(${selectedSrc})`,
    }" :class="{ 
        'lc-icon--selected': selected,
         }">
        <div class="lc-icon__image" :class="{
            'lc-icon__image--enhover': !!selectedSrc,
        }">
            <img class="lc-icon__img" :src="src" draggable="false" alt="">
        </div>
        <span class="lc-icon__span">
            <slot></slot>
        </span>
    </div>
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue';
import { NameTypeFunc, useImage, type Domains, type NameTypes } from './icons';

const {
    domain = 'func',
    name = 'add',
    size = 16,
    ext = '.png',
    selected = void 0,
} = defineProps({
    domain: {
        type: String as PropType<Domains>,
    },
    name: {
        type: String as PropType<NameTypes>,
    },
    size: {
        type: [Number, String] as PropType<number | string>,
    },
    ext: {
        type: String as PropType<'.png'>,
    },
    selected: {
        type: Boolean,
    }
});
const { src, selectedSrc } = useImage(domain as Domains, name as NameTypeFunc<Domains>, ext);
const iconWidth = computed(() => typeof size === 'number' ? `${size}px` : size);
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