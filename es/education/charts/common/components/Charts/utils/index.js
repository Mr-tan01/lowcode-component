import { useTemplateRef, watchEffect } from "vue";
import "mmjs-core/utils/scale";
function useCommonChartExpose(key) {
  const baseChartRef = useTemplateRef(key);
  const exposes = {};
  watchEffect(() => {
    for (const key2 in exposes) {
      Reflect.deleteProperty(exposes, key2);
    }
    const obj = baseChartRef.value ?? {};
    for (const key2 in obj) {
      exposes[key2] = obj[key2];
    }
  });
  return { exposes, baseChartRef };
}
export {
  useCommonChartExpose
};
