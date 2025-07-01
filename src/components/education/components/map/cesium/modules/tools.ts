/**
 * 创建信息Canvas元素
 * @param info 信息对象
 * @param valueKey 值键名
 * @param labelType 文字键值
 * @returns Promise<{canvas: HTMLCanvasElement, cleanup: () => void}>
 */
import { VerticalOrigin } from 'cesium'
import primary from '../image/primary.png'
import success from '../image/success.png'
import warning from '../image/warning.png'
import danger from '../image/danger.png'
import primaryLabel from '../image/primary_label.png'
import successLabel from '../image/success_label.png'
import warningLabel from '../image/warning_label.png'
import dangerLabel from '../image/danger_label.png'
import iconPrimary from '../image/icon_primary.png'
import iconSuccess from '../image/icon_success.png'

interface fontStyle {
    size?: string
    family?: string
    color?: string
    width?: number
    weight?:
        | number // 100-900
        | 'normal' // 400
        | 'bold' // 700
        | 'bolder'
        | 'lighter'
}

interface canvasOption {
    width?: number
    height?: number
    fontStyle?: fontStyle
    textStyle?: fontStyle
}

const imageUrlOption: any = {
    primary: primary,
    success: success,
    warning: warning,
    danger: danger,
    primary_label: primaryLabel,
    success_label: successLabel,
    warning_label: warningLabel,
    danger_label: dangerLabel,
    icon_primary: iconPrimary,
    icon_success: iconSuccess,
}

export const changeIconOption: any = {
    icon_success: iconSuccess,
    icon_primary: iconPrimary,
}

const options = {
    width: 50,
    height: 75,
    fontStyle: {
        size: '24px',
        family: 'HarmonyOS Sans SC',
        color: '#fff',
        weight: 'bold',
    },
    textStyle: {
        size: '16px',
        family: 'HarmonyOS_Sans_SC_Medium',
        color: '#fff',
        weight: 'normal',
    },
} as canvasOption

interface reloadTextOption {
    info: any
    valueKey: string | undefined | boolean
    canvas: HTMLCanvasElement
    ctx: CanvasRenderingContext2D
    text: string
}

/**
 * 绘制文本信息
 * @param option 信息对象 reloadTextOption
 * @returns void
 */

const reloadText = (option: reloadTextOption): void => {
    const { info, valueKey, canvas, ctx, text } = option

    const valueFont = `
    ${info?.fontStyle?.weight ?? options?.fontStyle?.weight} 
    ${info?.fontStyle?.size ?? options?.fontStyle?.size}
    ${info?.fontStyle?.family ?? options?.fontStyle?.family}`

    const textFont = `
    ${info?.textStyle?.weight ?? options?.textStyle?.weight} 
    ${info?.textStyle?.size ?? options?.textStyle?.size}
    ${info?.textStyle?.family ?? options?.textStyle?.family}`

    // 绘制文本
    ctx.font = valueKey ? valueFont : textFont
    ctx.fillStyle = (valueKey ? info?.fontStyle?.color : info?.textStyle?.color) ?? options.fontStyle?.color
    ctx.textBaseline = 'middle'
    ctx.textAlign = 'left'
    const textX = valueKey ? (info?.textOffsetX ?? 13) : 46
    const textY = info?.textOffsetY ?? canvas.height / 2 - (valueKey ? 10 : 6)
    ctx.fillText(text, textX, textY)
}

/**
 * 擦除重叠部分
 * @param ctx canvas内容 CanvasRenderingContext2D
 * @returns void
 */
const eraseOverlapImage = (ctx: CanvasRenderingContext2D): void => {
    // 设置透明区域
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.lineTo(28, 0)
    ctx.quadraticCurveTo(30, 20, 20, 26)
    ctx.lineTo(0, 56)
    ctx.closePath()

    // 擦除区域
    ctx.globalCompositeOperation = 'destination-out'
    ctx.fillStyle = 'rgba(0,0,0,1)'
    ctx.fill()
    ctx.restore()
}

export const createInfoCanvas = (info: any, valueKey?: string, labelType?: string): Promise<{ canvas: HTMLCanvasElement; cleanup: () => void }> => {
    return new Promise((resolve, reject) => {
        // 创建canvas元素
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        if (!ctx) {
            reject(new Error('Could not get canvas context'))
            return
        }

        // 设置canvas尺寸
        canvas.width = info?.width ?? options.width
        canvas.height = info?.height ?? options.height

        const { iconType, textIconType } = info
        const icons = {
            icon: iconType ? imageUrlOption[iconType] : imageUrlOption['primary'],
            textIcon: textIconType ? imageUrlOption[textIconType] : imageUrlOption[(labelType ? 'success' : 'primary') + '_label'],
        }

        // 绘制背景
        const bgImageUrl = icons?.[valueKey ? 'icon' : 'textIcon']

        const text = info?.[valueKey ?? 'text'] || ''

        // 清理dom中的canvas
        const cleanup = () => {
            ctx.setTransform(1, 0, 0, 1, 0, 0) // 重置变换
            ctx.clearRect(0, 0, canvas.width, canvas.height)
        }

        reloadText({
            info: info,
            valueKey: valueKey,
            canvas: canvas,
            ctx: ctx,
            text: text,
        })

        if (bgImageUrl) {
            const image = new Image()
            image.crossOrigin = 'Anonymous'
            image.src = bgImageUrl
            image.onload = () => {
                // 先绘制文本 获取添加文字后的宽高
                reloadText({
                    info: info,
                    valueKey: valueKey,
                    canvas: canvas,
                    ctx: ctx,
                    text: text,
                })

                canvas.width = valueKey ? (info?.width ?? image.width) : ctx.measureText(text).width + 80
                canvas.height = info?.height ?? image.height

                // 绘制图片到画布 宽高为获取后的值
                ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height)

                if (!valueKey) {
                    eraseOverlapImage(ctx)
                }

                // 重新绘制文本 绘制图片会清空画布
                reloadText({
                    info: info,
                    valueKey: valueKey,
                    canvas: canvas,
                    ctx: ctx,
                    text: text,
                })

                resolve({ canvas, cleanup })
            }

            image.onerror = () => {
                reject(new Error('Failed to load image'))
            }
        } else {
            reloadText({
                info: info,
                valueKey: valueKey,
                canvas: canvas,
                ctx: ctx,
                text: text,
            })
            resolve({ canvas, cleanup })
        }
    })
}

/**
 *  创建图片元素
 * @param url 图片链接
 * @returns Promise<HTMLImageElement>
 */

const loadImage = (url: string): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
        const image = new Image()
        image.crossOrigin = 'Anonymous'
        image.onload = () => resolve(image)
        image.onerror = reject
        image.src = url
    })
}

/**
 *  图片转canvas
 * @param url 图片链接
 * @returns Promise<HTMLCanvasElement>
 */

async function drawImageCanvas(imgSrc: string): Promise<HTMLCanvasElement> {
    return new Promise((resolve, reject) => {
        const image = new Image()
        image.crossOrigin = 'anonymous'
        image.src = imgSrc
        image.onload = () => {
            try {
                const canvas = document.createElement('canvas')
                const ctx = canvas.getContext('2d')
                if (!ctx) return reject(new Error('无法获取2D上下文'))
                canvas.width = image.naturalWidth
                canvas.height = image.naturalHeight
                ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
                resolve(canvas)
            } catch (e) {
                reject(new Error('画布创建失败', { cause: e }))
            }
        }
    })
}

// 创建聚合点图标
export const createClusterBillboard = (count: number, primaryType: string): HTMLCanvasElement => {
    const canvas = document.createElement('canvas')
    canvas.width = 80
    canvas.height = 80
    const ctx = canvas.getContext('2d')

    if (!ctx) return canvas

    // 设置背景颜色
    let colorFill = '#1E9EFA'
    let colorStroke = '#167bca'

    switch (primaryType) {
        case 'primary':
            colorFill = '#1E9EFA'
            colorStroke = '#167bca'
            break
        case 'success':
            colorFill = '#67C23A'
            colorStroke = '#529a2e'
            break
        case 'warning':
            colorFill = '#E6A23C'
            colorStroke = '#b87d2f'
            break
        case 'danger':
            colorFill = '#E41F1F'
            colorStroke = '#C01A1A'
            break
    }

    // 绘制圆形背景
    ctx.beginPath()
    ctx.arc(40, 40, 35, 0, Math.PI * 2, true)
    ctx.fillStyle = colorFill
    ctx.fill()

    // 绘制边框
    ctx.lineWidth = 4
    ctx.strokeStyle = colorStroke
    ctx.stroke()

    // 绘制文本
    ctx.fillStyle = 'white'
    ctx.font = 'bold 32px Arial'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(count.toString(), 40, 40)

    return canvas
}

import { type Entity, JulianDate, CallbackProperty, Cartesian2, Cartesian3, Math as cesiumMath } from 'cesium'
import { EntityConfig, pointType } from './type'
import { EntityProperties } from './type'

/**
 * 修改entity信息
 */

export async function updateViewerEntityInfo(info: any, entity: Entity | undefined, type?: string) {
    if (entity?.billboard && entity.properties) {
        const currentTime = JulianDate.now() // 获取当前时间戳
        const changeState = entity.properties?.getValue(currentTime).changeState // 直接访问属性
        const valueIcon = changeState ? (info?.iconType ?? 'primary') : (info?.changeIconType ?? 'success')
        const textIcon = changeState ? (info?.textIconType ?? 'primary_label') : (info?.changeTextIconType ?? 'success_label')
        let valueInfo = entity.billboard.image?.getValue()
        valueInfo = typeof valueInfo === 'string' ? await drawImageCanvas(valueInfo) : valueInfo
        const ctx = valueInfo.getContext('2d')
        const image = await loadImage(imageUrlOption[type ? valueIcon : textIcon])
        ctx?.clearRect(0, 0, valueInfo.width, valueInfo.height)
        ctx.drawImage(image, 0, 0, valueInfo.width, valueInfo.height)
        if (!type) {
            eraseOverlapImage(ctx)
        }
        reloadText({
            info: info,
            valueKey: type,
            canvas: valueInfo,
            ctx: ctx,
            text: type ? info.value : info.text,
        })
        entity.billboard.image = valueInfo.toDataURL('image/png')
        // 动态修改changeState属性
        entity.properties.changeState = new CallbackProperty(() => {
            return !changeState
        }, false)
    }
}

/**
 * 创建entity信息
 * @returns EntityConfig
 */
export const createEntityConfig = async (point: pointType, valueInfo: HTMLCanvasElement, type?: string): Promise<EntityConfig> => {
    // 没有type就是label
    const commonProperties: EntityProperties = {
        value: point?.value,
        text: point?.text,
        changeState: false,
        type: point?.iconType ?? 'primary',
        position: [point.lng, point.lat],
        name: type ? point.name : `${point.name}Label`,
    }

    const commonBillboard = {
        image: valueInfo,
        pixelOffset: type ? new Cartesian2(0, 0) : new Cartesian2(valueInfo.width / 2.1, valueInfo.height / 2),
        disableDepthTestDistance: type ? undefined : Number.POSITIVE_INFINITY,
        verticalOrigin: type ? VerticalOrigin.CENTER : VerticalOrigin.BOTTOM,
    }

    return {
        position: Cartesian3.fromDegrees(point.lng, point.lat, 50),
        name: type ? point.name : `${point.name}Label`,
        properties: commonProperties,
        billboard: commonBillboard,
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
    '0.00': '#0c29ce',
    '0.25': '#09d3d0',
    '0.50': '#91fa68',
    '0.75': '#fca22c',
    '1.00': '#fb0f0f',
}
