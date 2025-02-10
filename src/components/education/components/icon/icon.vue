<template>
    <div class="lc-icon">
        <img class="lc-icon__img" v-if="imageSrc" :src="imageSrc" @mouseenter="isHover = true"
            @mouseleave="isHover = false" alt=" ">
        <span class="lc-icon__span">
            <slot></slot>
        </span>
    </div>
</template>

<script lang="ts" setup>
import { computed, PropType, ref } from 'vue';
import { NameTypeFunc, useImage, type Domains } from './icons';

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
        type: String as PropType<NameTypeFunc<'event'> | NameTypeFunc<'func'>>,
    },
    size: {
        type: Number,
    },
    ext: {
        type: String as PropType<'.png'>,
    },
    selected: {
        type: Boolean,
    }
});
const isHover = ref(false);
const { src, selectedSrc } = useImage(domain as Domains, name as NameTypeFunc<Domains>, ext);

const imageSrc = computed(() => {
    if (selected === void 0) {
        return isHover.value && selectedSrc.value ? selectedSrc.value : src.value;
    }
    return selected ? selectedSrc.value : src.value;
});
</script>

<style lang="scss" scoped>
.lc-icon {
    width: fit-content;
    display: inline-flex;
    align-items: center;

    &__img {
        width: calc(v-bind(size) * 1px);
        height: calc(v-bind(size) * 1px);
        object-fit: contain;
    }

    &__span {
        font-size: 12px;
        color: #fff;
    }
}
</style>