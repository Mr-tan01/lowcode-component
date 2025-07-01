import { useTemplateRef as s, watchEffect as c } from 'vue'
function a(r) {
    const t = s(r),
        e = {}
    return (
        c(() => {
            for (const o in e) Reflect.deleteProperty(e, o)
            const n = t.value ?? {}
            for (const o in n) e[o] = n[o]
        }),
        { exposes: e, baseChartRef: t }
    )
}
export { a as useCommonChartExpose }
