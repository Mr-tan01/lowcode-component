<template>
    <div ref="containerRef" class="lc-szmap">
        <RawMap class="back-block-map level-map" :show-label="false" :disabled-gradient :rotate-x :label-model :levels :values v-bind="$attrs" />
        <RawMap
            class="float-block-map level-map"
            fill-model="hover"
            :disabled-gradient
            :rotate-x
            :label-model
            :show-label="true"
            :levels
            :values
            v-bind="$attrs"
            :show-border="false"
        >
            <template #mapLabel="{ blockList, labelClass, getValue, currentMapKey }">
                <slot name="mapLabel" :block-list="blockList" :label-class="labelClass" :get-value="getValue" :current-map-key="currentMapKey">
                </slot>
            </template>
        </RawMap>
    </div>
</template>

<script lang="ts" setup>
import { propsRaw } from './props'
import RawMap from './rawMap.vue'
import { LabelModelEnum } from './const'
import { ref, onBeforeUnmount, onUnmounted } from 'vue'

const { levels, rotateX, labelModel = LabelModelEnum.DEFAULT } = defineProps(propsRaw)

const containerRef = ref<HTMLElement>()

// 清理函数
function cleanup() {
    // 强制清理子组件（通过强制重绘）
    if (containerRef.value) {
        // 移除所有子元素的样式和变换
        const allElements = containerRef.value.querySelectorAll('*')
        allElements.forEach(el => {
            if (el instanceof HTMLElement || el instanceof SVGElement) {
                el.style.transition = ''
                el.style.transform = ''
                el.style.perspective = ''

                // 清理动画
                const animations = (el as any).getAnimations?.()
                if (animations) {
                    animations.forEach((anim: Animation) => anim.cancel())
                }
            }
        })
    }
}

// 组件销毁前清理
onBeforeUnmount(() => {
    cleanup()
})

// 组件卸载时再次清理
onUnmounted(() => {
    cleanup()
})
</script>

<style lang="scss" scoped>
.lc-szmap {
    position: relative;

    .float-block-map {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -51%) scale(0.98);
    }
}
</style>
