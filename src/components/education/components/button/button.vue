<template>
    <button
        class="lc-button"
        :class="{
            'lc-button--primary': type === 'primary',
            'lc-button--normal': type === 'normal',
        }"
    >
        <div class="lc-button__wrapper">
            <div v-if="$slots.icon" class="lc-button__wrapper--icon">
                <slot name="icon"></slot>
            </div>
            <div class="lc-button__wrapper--content">
                <slot></slot>
            </div>
        </div>
    </button>
</template>

<script lang="ts" setup>
const { type = 'normal' } = defineProps<{
    type?: 'primary' | 'normal'
}>()
</script>

<style lang="scss" scoped>
.lc-button {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border-radius: 2px;
    backdrop-filter: blur(2.22px);

    &--primary {
        background: linear-gradient(to top, #0a758d 0%, #0ffbf8 100%);
        border: 1px solid #0ffbf8;

        &:hover {
            background: linear-gradient(to top, #137e96 0%, #0ffbf8 100%);
        }
    }

    &--normal {
        background: #06385e;
        border: 1px solid rgba(21, 154, 255, 1);

        &:hover {
            background: #084e84;
        }
    }

    &:hover {
        cursor: pointer;
    }

    &:active {
        opacity: 0.8;
    }

    &__wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 7px 20px;
        gap: 10px;

        &--icon {
            display: flex;
            align-items: center;
            height: 27px;
            color: #fff;
            fill: #fff;

            :deep(svg) {
                height: 16px;
                margin-bottom: -2px;
            }
        }

        &--content {
            font-family: HarmonyOS_Sans_SC_Bold;
            font-size: 16px;
            color: #ffffff;
            line-height: 27px;
            text-align: right;
            font-style: normal;
            text-transform: none;
        }
    }
}
</style>
