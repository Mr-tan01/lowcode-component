import { useTemplateRef, watchEffect } from 'vue'
import { type BaseChartInstanceType } from '@/components/education/common/components/Charts'

// @ts-expect-error
import { scale } from 'mmjs-core/utils/scale'

export function useCommonChartExpose<T extends string>(key: T) {
    const baseChartRef = useTemplateRef<BaseChartInstanceType>(key)
    const exposes = {}
    watchEffect(() => {
        for (const key in exposes) {
            Reflect.deleteProperty(exposes, key)
        }
        const obj = baseChartRef.value ?? {}
        for (const key in obj) {
            exposes[key] = obj[key]
        }
    })
    return { exposes, baseChartRef }
}

/**
 * 计算最大字符串宽度（中文字符算 2，英文字符算 1）
 * @param strings - 字符串数组
 * @returns 最大宽度
 */
export function getMaxStringWidth(strings: string[]): number {
    return strings.reduce((maxWidth, str) => {
        const strWidth = str.split('').reduce((width, char) => {
            return width + (char.charCodeAt(0) > 255 ? 2 : 1)
        }, 0)
        return Math.max(maxWidth, strWidth)
    }, 0)
}

/**
 * 对齐字符串（考虑中英文字符宽度）
 * @param str - 原始字符串
 * @param maxLen - 对齐后的最大长度（以英文字符宽度为单位）
 * @returns 对齐后的字符串
 */
export function alignString(str: string, maxLen: number): string {
    // 计算字符串的实际宽度（中文字符算 2，英文字符算 1）
    const getStrWidth = (s: string) => {
        return s.split('').reduce((width, char) => width + (char.charCodeAt(0) > 255 ? 2 : 1), 0)
    }

    const strWidth = getStrWidth(str)

    // 如果字符串宽度已经大于等于 maxLen，直接返回原字符串
    if (strWidth >= maxLen) {
        return str
    }

    // 计算需要补齐的空格数量
    const padLen = maxLen - strWidth

    // 补齐空格
    return `${str}${' '.repeat(padLen)}`
}

// 将echarts中的配置对象转换为使用比例转换后得值
export const adaptEChartsConfig = config => {
    // 递归处理配置对象
    const transform = (obj: any) => {
        if (!obj) return obj

        return Object.entries(obj).reduce(
            (acc, [key, value]: any) => {
                // 处理需要转换的数值属性
                const sizeKeys = [
                    'axisLabel',
                    'axisTick',
                    'splitLine',
                    'fontSize',
                    'itemWidth',
                    'itemHeight',
                    'symbolSize',
                    'borderWidth',
                    'barWidth',
                    'barGap',
                    'barCategoryGap',
                    'radius',
                    'padding',
                    'left',
                    'right',
                    'top',
                    'bottom',
                    'margin',
                    'lineHeight',
                    'itemGap',
                    'width',
                    'height',
                ]
                // 特殊处理grid配置
                if (key === 'grid') {
                    acc[key] = Object.entries(value).reduce((grid, [prop, val]) => {
                        grid[prop] = typeof val === 'number' ? scale(val) : val
                        return grid
                    }, {})
                    return acc
                }

                // 转换数值型配置
                if (sizeKeys.includes(key) && typeof value === 'number') {
                    acc[key] = scale(value)
                }
                // 递归处理嵌套对象
                else if (typeof value === 'object' && !Array.isArray(value)) {
                    acc[key] = transform(value)
                }
                // 处理数组中的配置对象（如series）
                else if (Array.isArray(value)) {
                    acc[key] = value.map(item =>
                        typeof item === 'object' ? transform(item) : typeof item === 'number' && sizeKeys.includes(key) ? scale(item) : item,
                    )
                } else {
                    acc[key] = value
                }

                return acc
            },
            Array.isArray(obj) ? [] : {},
        )
    }

    return transform(config)
}
