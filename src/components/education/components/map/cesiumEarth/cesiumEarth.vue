<template>
    <NSpin :show="loading" :stroke="spinStroke" :style="spinStyle" size="large">
        <div id="cesium3D-box" class="lc-cesium-earth"></div>
        <template #description> 地图加载中... </template>
    </NSpin>
</template>
<script lang="ts" setup>
import {
    onMounted,
    ref,
    watch,
    onBeforeUnmount,
    computed,
    type PropType,
} from 'vue'
import { useInitPlanet, EchartsLayer } from './hooks'
import defaultEarth from './images/default.jpeg'
import { Cartesian3, Viewer } from 'cesium'
import { NSpin } from 'naive-ui'
const emit = defineEmits(['handle-click'])
const props = defineProps({
    echartsOptions: {
        type: Object,
        default: () => {},
    },
    cesiumOptions: {
        type: Object as PropType<Viewer.ConstructorOptions>,
        default: () => {},
    },
    spinStroke: { type: String as PropType<string>, default: '#046ab1' }, // spin图标颜色
    spinContainerBg: { type: String as PropType<string>, default: '#6C7E93' }, // spin遮挡背景
    spinDescriptionColor: {
        type: String as PropType<string>,
        default: '#046ab1',
    }, // spin文字颜色
    // 中心点
    centerPosition: {
        type: Object as PropType<Cartesian3>,
        default: () => Cartesian3.fromDegrees(116.4551, 40.2539, 20000000),
    },
    // 自动旋转速度
    rotateSpeed: {
        type: Number,
        default: 0.3,
    },
    // 默认是否开启自动旋转
    defaultRotate: {
        type: Boolean,
        default: true,
    },
    // 地图拼命曲率图地址
    baseUrl: {
        type: String,
        default: defaultEarth,
        require: true,
    },
})
const loading = defineModel<boolean>('loading', { default: false })
const echartsLayer = ref()
const { initViewer, destroyViewer, viewer, startRotation } =
    useInitPlanet(props)
const initEcharts = () => {
    echartsLayer.value = new EchartsLayer(viewer.value!, props.echartsOptions)
    echartsLayer.value?._overlay.on('click', (params) =>
        emit('handle-click', params),
    )
}
watch(
    () => props.echartsOptions,
    (val) => {
        if (val) {
            if (!echartsLayer.value) {
                initEcharts()
                startRotation()
                return
            }
            echartsLayer.value?.updateOverlay(val)
            startRotation()
        }
    },
)

const spinStyle = computed(() => {
    return {
        '--spin-container-bg': props.spinContainerBg ?? '#6C7E93',
        '--n-spin-description-color': props.spinDescriptionColor ?? '#046ab1',
    }
})
onMounted(async () => {
    await initViewer()
    window.addEventListener('resize', () => echartsLayer.value?.resize())
})

onBeforeUnmount(() => {
    destroyViewer()
    window.removeEventListener('resize', () => echartsLayer.value?.resize())
})
</script>
<style>
.lc-cesium-earth {
    position: relative;
    width: 100%;
    height: 100%;
}
</style>
