<template>
    <div class="lc-tooltip">
        <n-tooltip trigger="hover" class="lc-n-tooltip" arrow-class="lc-tooltip-arrow-class" v-bind="$attrs">
            <template #trigger>
                <slot name="trigger">
                    <div class="lc-tooltip__trigger">
                        <div class="lc-tooltip__trigger_icon">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
                                enable-background="new 0 0 512 512" xml:space="preserve">
                                <path d="M256,90c44.3,0,86,17.3,117.4,48.6C404.7,170,422,211.7,422,256s-17.3,86-48.6,117.4C342,404.7,300.3,422,256,422
	s-86-17.3-117.4-48.6C107.3,342,90,300.3,90,256s17.3-86,48.6-117.4C170,107.3,211.7,90,256,90 M256,48C141.1,48,48,141.1,48,256
	s93.1,208,208,208s208-93.1,208-208S370.9,48,256,48L256,48z"></path>
                                <g>
                                    <path d="M277,360h-42V235h42V360z M277,194h-42v-42h42V194z"></path>
                                </g>
                            </svg>
                        </div>
                        <div class="lc-tooltip__trigger--text">
                            {{ title }}
                        </div>
                    </div>
                </slot>
            </template>
            <div class="lc-tooltip__content">
                <slot></slot>
            </div>
        </n-tooltip>
    </div>
</template>
<script lang="ts" setup>
import { NTooltip } from 'naive-ui/es/tooltip';
const {
    title = '',
} = defineProps<{
    title?: string;
}>();
</script>

<style lang="scss">
.lc-n-tooltip {
    --border-color: rgba(14, 121, 188, 1);
    --n-color: rgba(6, 56, 94, 1) !important;
    border: 1px solid var(--border-color) !important;

    .lc-tooltip-arrow-class {
        border: 1px solid var(--border-color);
    }
}
</style>
<style lang="scss" scoped>
.lc-tooltip {
    &__trigger_icon {
        width: 24px;
        fill: rgba(15, 251, 248, 1);
        display: flex;
        align-items: center;
    }

    &__trigger {
        display: flex;
        gap: 6px;
        align-items: center;

        &--text {
            color: rgba(15, 251, 248, 1);
            font-family: HarmonyOS_Sans_SC_Medium;
            font-size: 12px;
            color: #0FFBF8;
            line-height: 14px;
        }
    }

    &__content {
        font-size: 16px;

        :deep(a) {
            color: rgba(15, 251, 248, 1);
            text-decoration: underline;
        }
    }
}
</style>