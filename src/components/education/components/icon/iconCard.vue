<template>
    <div
        class="lc-icon-card"
        :style="{
            '--img-src': `url(${src})`,
            '--img-selected-src': `url(${selectedSrc})`,
        }"
    >
        <div class="lc-icon-card__img">
            <slot name="icon">
                <LcIcon :size="size" :domain :name></LcIcon>
            </slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Ref, toRefs, ref } from "vue";
import { LcIcon } from "@/components/education/components/icon";
import {
    NameTypeFunc,
    useImage,
    type Domains,
    type NameTypes,
} from "./icons";
const props = withDefaults(
    defineProps<{
        bagName?: "booth" | "pedestal";
        domain?: Domains;
        name: NameTypes;
        size?: number | string;
        ext?: string;
        selected?: boolean;
    }>(),
    {
        bagName: "pedestal",
        domain: "menus",
        name: "booth",
        size: 16,
        ext: ".png",
        selected: void 0,
    }
);

const { bagName, domain, name, size, ext } = toRefs(props);
const bagImg = ref("baseSupport");
const { src, selectedSrc } = useImage(
    bagImg as Ref<Domains>,
    bagName as Ref<NameTypeFunc<Domains>>,
    ext
);
</script>

<style lang="scss" scoped>
.lc-icon-card {
    min-width: 70px;
    min-height: 70px;
    width: fit-content;

    background: var(--img-src) no-repeat;
    background-size: contain;
    background-position: center center;
    transition: background 0.3s linear;

    &:hover {
        background-image: var(--img-selected-src);
        background-size: contain;
        background-position: center center;
    }

    &__img {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>
