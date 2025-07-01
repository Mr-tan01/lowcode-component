import { computed, onMounted, ref, shallowRef } from 'vue'
import debounce from 'lodash-es/debounce'
import memoize from 'lodash-es/memoize'

const offsetAnimationTime = 300
export function useStarRotate() {
    const starWrapperRef = shallowRef<HTMLElement>()
    const starElRefs = shallowRef<HTMLElement[]>()
    const startAngle = ref(90) // 起始角度
    const fullAngle = ref(360) // 完整的角度
    const starMaxShowCount = ref(7) // 星星的最大显示数量
    const circleRadius = ref({
        x: 0,
        y: 0,
    }) // 圆的半径
    const starLneght = ref(0) // 星星的数量
    const starRadius = ref({ x: 0 }) // 星星的半径
    const angleOffset = ref(0) // 旋转偏移量
    const displayAlternately = ref<number[]>([]) // 交替显示的索引

    const initElRadius = debounce(() => {
        const starWrapper = starWrapperRef.value
        if (!starWrapper || !starElRefs.value) return
        const { width, height } = starWrapper.getBoundingClientRect()
        circleRadius.value.x = width / 2
        circleRadius.value.y = height / 2
        const { width: starWidth } = starElRefs.value[0].getBoundingClientRect()
        starRadius.value.x = starWidth / 2 // 星星的半径
    })
    function onParentElResize() {
        if (!window.ResizeObserver || !starWrapperRef.value) return
        const observer = new ResizeObserver(
            debounce(() => {
                initElRadius()
            }, offsetAnimationTime),
        )
        observer.observe(starWrapperRef.value)
    }
    onMounted(() => {
        onParentElResize()
        setTimeout(() => initElRadius)
    })

    // 平均角度
    const averageAngle = computed(() => {
        const len = starLneght.value >= starMaxShowCount.value ? starMaxShowCount.value : starLneght.value
        return fullAngle.value / len
    })

    const getAngleDeg = memoize((index: number) => {
        return averageAngle.value * index + startAngle.value
    })

    const updateDisplayAlternately = debounce(index => {
        displayAlternately.value.pop()
        displayAlternately.value.unshift(index)
    }, 300)

    const offset = memoize(
        (_angleDeg: number, radiusX: number, radiusY: number, appedYOffset: number) => {
            const angleRad = _angleDeg * (Math.PI / 180) // 转换为弧度

            // 计算当前点的坐标
            const x = radiusX + radiusX * Math.cos(angleRad)
            const y = radiusY + radiusY * Math.sin(angleRad) + appedYOffset
            return {
                x,
                y,
            }
        },
        (_angleDeg, radiusX, radiusY, appedYOffset) => `${_angleDeg}-${radiusX}-${radiusY}-${appedYOffset}`,
    )

    function decay(dir: number, y: number, yOffset: number, radiusY: number) {
        // 获取上部分的距离，并计算衰减效果
        return y / (yOffset - radiusY) - dir
    }
    function getTextStyle(index: number) {
        // 计算当前点的角度（360 度均匀分布）
        const layoutIndex = index >= starMaxShowCount.value ? 0 : index
        const angleDeg = getAngleDeg(layoutIndex) + angleOffset.value // 角度
        const yOffset = circleRadius.value.y
        const radiusX = circleRadius.value.x
        const radiusY = circleRadius.value.y / 3.2
        const appedYOffset = +yOffset / 1.1
        const { x } = offset(angleDeg, radiusX, radiusY, appedYOffset)
        const isRightHalf = x > circleRadius.value.x
        let transform = ''
        if (isRightHalf) {
            transform += ' rotateY(180deg)' // 翻转标签
        }
        return {
            transform,
        }
    }
    function customRotateStyle(index: number) {
        // 计算当前点的角度（360 度均匀分布）
        const layoutIndex = index >= starMaxShowCount.value ? 0 : index
        const angleDeg = getAngleDeg(layoutIndex) + angleOffset.value // 角度
        const yOffset = circleRadius.value.y
        const radiusX = circleRadius.value.x
        const radiusY = circleRadius.value.y / 3.2
        const appedYOffset = +yOffset / 1.1

        const endAngleDeg = getAngleDeg(averageAngle.value + 1) // 获取起的对立角度
        const { y: endY } = offset(endAngleDeg, radiusX, radiusY, appedYOffset)
        const { x, y } = offset(angleDeg, radiusX, radiusY, appedYOffset)
        if (!x || !y || !circleRadius.value.y)
            return {
                left: '50%',
                top: '50%',
                opacity: 0,
                zIndex: 0,
            }

        // 判断是否在正面，
        const isBlockNode = y > 0 && y > circleRadius.value.y + radiusY / 2
        let opacity = isBlockNode ? 1 : decay(1, y, yOffset, radiusY)
        let scale = isBlockNode ? 1 : decay(1, y, yOffset, radiusY)
        const zIndex = isBlockNode ? 10 : 0
        // 判断是否在右半圆
        const isRightHalf = x > circleRadius.value.x
        let transform = `translate(-50%, -50%) scale(${scale})`

        if (isRightHalf) {
            transform += ' rotateY(180deg)' // 翻转标签
        }

        let isHideBlock = displayAlternately.value.includes(index)
        if (starLneght.value > starMaxShowCount.value && !isHideBlock && y <= endY && layoutIndex === 0) {
            updateDisplayAlternately(index)
            isHideBlock = displayAlternately.value.includes(index)
        }
        if (isHideBlock) {
            scale = 0
            opacity = 0
        }
        return {
            'left': x + 'px',
            'top': y + 'px',
            transform,
            opacity,
            '--z-index-number': zIndex,
        }
    }
    return {
        getTextStyle,
        starLneght,
        starWrapperRef,
        angleOffset,
        customRotateStyle,
        starElRefs,
        averageAngle,
        startAngle,
        starMaxShowCount,
        displayAlternately,
        fullAngle,
    }
}
