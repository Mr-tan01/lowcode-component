import { useTemplateRef, watchEffect } from "vue";

export function useCommonChartExpose() {
    const baseChartRef = useTemplateRef("baseChart");
    const exposes = {};
    watchEffect(() => {
        for (const key in exposes) {
            Reflect.deleteProperty(exposes, key);
        }
        const obj = baseChartRef.value ?? {};
        for (const key in obj) {
            exposes[key] = obj[key];
        }
    });
    return { exposes, baseChartRef };
}