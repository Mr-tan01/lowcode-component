import { type Entity, JulianDate, CallbackProperty, Cartesian3, Math as cesiumMath, Viewer, VerticalOrigin } from 'cesium'
import { defaultFontConfig, defaultCanvasConfig } from './const'
import { CanvasMode, CanvasType, type fontStyle, CanvasConfigOptions, EntityProperties, EntityConfig, pointType, TextModeConfig } from './type'
import { cloneDeep, merge } from 'lodash-es'
// 颜色辅助函数 - 加深颜色
function darkenColor(color, percent) {
    const num = parseInt(color.slice(1), 16)
    const amt = Math.round(2.55 * percent)
    let R = (num >> 16) - amt
    let G = ((num >> 8) & 0x00ff) - amt
    let B = (num & 0x0000ff) - amt

    R = R < 0 ? 0 : R
    G = G < 0 ? 0 : G
    B = B < 0 ? 0 : B

    return '#' + ((1 << 24) + (R << 16) + (G << 8) + B).toString(16).slice(1)
}

// 绘制文字
const drawText = (ctx: CanvasRenderingContext2D, fontSizeConfig: fontStyle, label: string) => {
    if (fontSizeConfig?.customCanvasText) {
        fontSizeConfig.customCanvasText(ctx, label)
        return
    }
    // 绘制文字
    const text = label || '-'
    ctx.font = `${fontSizeConfig.weight} ${fontSizeConfig.size} ${fontSizeConfig.family}`
    ctx.fillStyle = fontSizeConfig.color
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    fontSizeConfig.fillText ? fontSizeConfig.fillText(ctx) : ctx.fillText(text, 25, 25)
}

// 绘制水滴函数
function drawOnCanvas(options: CanvasConfigOptions & { canvas: HTMLCanvasElement; ctx: CanvasRenderingContext2D }): void {
    const { width = 60, height = 85, iconType = CanvasType.Primary, currentMode = CanvasMode.Text, fontConfig, canvas, ctx, customCanvas } = options
    // 如果不符合述求则自定义
    if (customCanvas) {
        customCanvas?.(canvas, ctx)
        return
    }
    // 获取文字
    const fontSizeConfig = merge(defaultFontConfig, fontConfig ?? {})
    // 获取颜色
    const { borderColor, backgroundColor } = merge(defaultCanvasConfig[iconType], options, {})
    // 清除画布
    ctx.clearRect(0, 0, width, height)
    canvas.width = width ? width : 60
    canvas.height = height ? height : 85
    // 设置缩放和平移
    ctx.save()
    ctx.translate(5, 5)
    // 创建渐变
    const gradient = ctx.createLinearGradient(0, 0, 0, 400)
    gradient.addColorStop(0, backgroundColor)
    gradient.addColorStop(1, darkenColor(backgroundColor, 20))

    // 绘制水滴路径
    ctx.beginPath()
    ctx.moveTo(50, 24.58)
    ctx.bezierCurveTo(50, 34.36, 43.6, 40.76, 35.78, 46.77)
    ctx.bezierCurveTo(31.83, 49.8, 28.81, 55.58, 26.73, 64.11)
    ctx.bezierCurveTo(26.54, 64.9, 25.79, 65.4, 25, 65.31)
    ctx.bezierCurveTo(24.21, 65.4, 23.46, 64.9, 23.27, 64.11)
    ctx.bezierCurveTo(21.19, 55.58, 18.17, 49.8, 14.22, 46.77)
    ctx.lineTo(13.49, 46.2)
    ctx.bezierCurveTo(6, 40.35, 0, 34.06, 0, 24.58)
    ctx.bezierCurveTo(0, 11, 11.19, 0, 25, 0)
    ctx.bezierCurveTo(38.81, 0, 50, 11, 50, 24.58)
    ctx.closePath()

    // 填充水滴
    ctx.fillStyle = gradient
    ctx.fill()

    // 绘制内容（图片或文字）
    ctx.save()
    // 使用裁剪路径限制绘制区域
    ctx.clip()

    if (currentMode === CanvasMode.Text) {
        const { label } = options as TextModeConfig
        // 绘制文字
        drawText(ctx, fontSizeConfig, label)
    } else if (currentMode === CanvasMode.Image) {
        // // 绘制图片
        // const size = parseInt(imageSize.value)
        // const x = 25 - size / 2
        // const y = 30 - size / 2
        // ctx.drawImage(uploadedImage, x, y, size, size)
    }

    ctx.restore()

    // 绘制描边
    ctx.strokeStyle = borderColor ?? backgroundColor
    ctx.lineWidth = 4
    ctx.stroke()

    // 绘制阴影椭圆
    ctx.beginPath()
    ctx.ellipse(25.52, 67.88, 7.88, 1.6, 0, 0, Math.PI * 2)

    // 添加阴影效果
    ctx.shadowColor = '#325581'
    ctx.shadowBlur = 5
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0

    ctx.fillStyle = '#325581'
    ctx.globalAlpha = 0.72
    ctx.fill()

    // 恢复上下文设置
    ctx.restore()
}

// 创建水滴或者悬浮popover
export const createInfoCanvas = (info: any): Promise<{ canvas: HTMLCanvasElement; cleanup: () => void }> => {
    return new Promise((resolve, reject) => {
        // 创建canvas元素
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        if (!ctx) {
            reject(new Error('Could not get canvas context'))
            return
        }

        // 清理dom中的canvas
        const cleanup = () => {
            ctx.setTransform(1, 0, 0, 1, 0, 0) // 重置变换
            ctx.clearRect(0, 0, canvas.width, canvas.height)
        }
        drawOnCanvas({ ...info.options, canvas, ctx })
        resolve({ canvas, cleanup })
    })
}

// 创建聚合点图标
export function createClusterBillboard(
    count: number,
    primaryType: string,
    typeCount: Record<string, number> = {},
    typeColors: Record<string, string> = {},
): HTMLCanvasElement {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    if (!ctx) return canvas

    // 画布大小
    canvas.width = 50
    canvas.height = 50

    // 绘制背景
    if (typeCount && Object.keys(typeCount).length > 1) {
        ctx.fillStyle = 'rgba(40, 40, 40, 0.7)'
        ctx.beginPath()
        ctx.roundRect(0, 0, canvas.width, canvas.height, 15)
        ctx.fill()
    }

    // 如果有多个类型，绘制复合图标
    if (typeCount && Object.keys(typeCount).length > 1) {
        const types = Object.keys(typeCount)
        const angleStep = (Math.PI * 2) / types.length

        types.forEach((type, index) => {
            const angle = index * angleStep
            const radius = 15
            const x = canvas.width / 2 + Math.cos(angle) * radius
            const y = canvas.height / 2 + Math.sin(angle) * radius

            ctx.fillStyle = typeColors[type] || '#1E9EFA'
            ctx.beginPath()
            ctx.arc(x, y, 8, 0, Math.PI * 2)
            ctx.fill()

            ctx.fillStyle = 'white'
            ctx.font = 'bold 10px Arial'
            ctx.textAlign = 'center'
            ctx.textBaseline = 'middle'
            ctx.fillText(typeCount[type].toString(), x, y)
        })

        ctx.fillStyle = 'white'
        ctx.font = 'bold 14px Arial'
        ctx.fillText(count.toString(), canvas.width / 2, canvas.height / 2)
    } else {
        // 单一类型显示
        ctx.fillStyle = typeColors[primaryType] || '#1E9EFA'
        ctx.beginPath()
        ctx.arc(canvas.width / 2, canvas.height / 2, 20, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = 'white'
        ctx.font = 'bold 16px Arial'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(count.toString(), canvas.width / 2, canvas.height / 2)
    }

    return canvas
}

/**
 * 修改entity信息
 */

export async function updateViewerEntityInfo(info: any, entity: Entity | undefined) {
    if (entity?.billboard && entity.properties) {
        const currentTime = JulianDate.now() // 获取当前时间戳
        const changeState = entity.properties?.getValue(currentTime).changeState // 直接访问属性
        const canvasOptions = cloneDeep(info.options)
        const { canvas } = await createInfoCanvas({
            options: merge(canvasOptions, { iconType: !changeState ? CanvasType.Hover : (info.options?.iconType ?? CanvasType.Primary) }),
        })
        entity.billboard.image = canvas as any
        // // 动态修改changeState属性
        entity.properties.changeState = new CallbackProperty(() => {
            return !changeState
        }, false)
    }
}

/**
 * 创建entity信息
 * @returns EntityConfig
 */
export const createEntityConfig = async ({
    point,
    valueInfo,
    isPopoverEntity = false,
    viewer,
}: {
    point: pointType
    valueInfo: HTMLCanvasElement
    isPopoverEntity?: boolean
    viewer: Viewer
}): Promise<EntityConfig> => {
    const commonProperties: EntityProperties = {
        changeState: false,
        position: [point.lng, point.lat],
        options: point.options,
        valueInfo,
    }
    const commonBillboard = {
        image: valueInfo,
        disableDepthTestDistance: isPopoverEntity ? Number.POSITIVE_INFINITY : undefined,
        verticalOrigin: VerticalOrigin.BOTTOM,
        scale: new CallbackProperty(() => {
            const height = viewer.camera.positionCartographic.height
            // 修改为高度越大缩放越小，使用1.5作为基础值减去高度比例// 添加边界检查，确保缩放比例在合理范围内
            const scale = Math.max(0.3, Math.min(2, 1 - height / 100000))
            return scale
        }, false),
    }

    return {
        name: isPopoverEntity ? `${point.name}Label` : point.name,
        position: Cartesian3.fromDegrees(point.lng, point.lat, 50),
        properties: commonProperties,
        isPopoverEntity: isPopoverEntity,
        billboard: commonBillboard as any,
    }
}

/**
 * 转换笛卡尔坐标到经纬度
 * @returns Cartesian3
 */

export const convertCartographic = async (viewerData: any, cartesian: Cartesian3): Promise<Cartesian3> => {
    const cartographic = viewerData?.scene.globe.ellipsoid.cartesianToCartographic(cartesian)
    if (!cartographic) return new Cartesian3()
    const longitude = cesiumMath.toDegrees(cartographic.longitude)
    const latitude = cesiumMath.toDegrees(cartographic.latitude)
    return Cartesian3.fromDegrees(longitude, latitude, 30000)
}

/**
 * 热力图渐变色配置
 * 0.00 - 0.25 - 0.50 - 0.75 - 1.00
 * 蓝色 - 青色 - 绿色 - 橙色 - 红色
 */
export const heatmapGradient = {
    '0.00': '#0094ff',
    '0.25': '#09d3d0',
    '0.50': '#91fa68',
    '0.75': '#fca22c',
    '1.00': '#fb0f0f',
}
