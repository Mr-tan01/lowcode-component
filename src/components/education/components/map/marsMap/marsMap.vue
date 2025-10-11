<template>
    <div :id="withKeyId" class="mars2d-container"></div>
</template>
<script lang="ts" setup>
/**
 * 地图渲染组件
 */
import { computed, onBeforeUnmount, onMounted } from 'vue'
import * as mars2d from 'mars2d'
import { defaultMapOptions } from './const'
const props = withDefaults(
    defineProps<{
        mapKey?: string
        options?: mars2d.Map.Options
    }>(),
    {
        mapKey: 'default',
        options: () => ({
            ...defaultMapOptions,
        }),
    },
)

// 用于存放地球组件实例
let map: mars2d.Map | null // 地图对象

// 使用用户传入的 mapKey 拼接生成 withKeyId 作为当前显示容器的id
const withKeyId = computed(() => `mars2d-container-${props.mapKey}`)

onMounted(() => {
    initMars3d({
        ...defaultMapOptions,
        // ...props.options,
    })
})

// onload事件将在地图渲染后触发
const emit = defineEmits(['onload'])
const initMars3d = (option: mars2d.Map.Options) => {
    map = new mars2d.Map(withKeyId.value, option)
    emit('onload', map)
}

// 组件卸载之前销毁mars2d实例
onBeforeUnmount(() => {
    if (map) {
        map.destroy()
        map = null
    }
    console.log('map销毁完成', map)
})
</script>

<style>
.mars2d-container {
    height: 100%;
    overflow: hidden;
}
</style>
