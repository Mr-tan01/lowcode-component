import { useTemplateRef, watchEffect } from "vue";
import {
    type BaseChartInstanceType
} from '@/components/education/common/components/Charts';

export function useCommonChartExpose<T extends string>(key: T) {
    const baseChartRef = useTemplateRef<BaseChartInstanceType>(key);
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