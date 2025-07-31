import { defineComponent as O, ref as l, computed as c, onMounted as h, onBeforeUnmount as y, openBlock as z, createElementBlock as D } from "vue";
import f from "./images/default.png.js";
import k from "./images/hover_image.png.js";
import { useResizeObserver as B } from "@vueuse/core";
import { merge as C, debounce as I } from "lodash-es";
import { baseOptions as R } from "./options.js";
import { init as T } from "echarts";
const U = /* @__PURE__ */ O({
  __name: "bubble",
  props: {
    data: { default: () => [] },
    debounceTime: { default: 300 },
    chartOptions: { default: () => ({}) }
  },
  setup(n) {
    const a = l(), o = l(), r = c(() => n.data.map((e) => ({
      name: e.label,
      symbolSize: [180, 129],
      draggable: !0,
      symbol: `image://${f}`,
      ...e
    }))), b = c(() => C(
      {},
      R,
      {
        series: [
          {
            data: r.value
          }
        ]
      },
      n.chartOptions
    )), d = () => {
      var e, u;
      o.value = T(a.value), o.value.setOption(b.value, !0), (e = o.value) == null || e.on("mouseover", function(t) {
        var i;
        if (t.dataType === "node") {
          const g = r.value.map((m) => {
            var s;
            return {
              ...m,
              symbol: m.name === ((s = t == null ? void 0 : t.data) == null ? void 0 : s.name) ? `image://${k}` : `image://${f}`,
              symbolSize: m.name === t.data.name ? [200, 150] : [180, 129]
            };
          });
          (i = o.value) == null || i.setOption({
            series: [
              {
                data: g
              }
            ]
          });
        }
      }), (u = o.value) == null || u.on("mouseout", function() {
        var t;
        (t = o.value) == null || t.setOption({
          series: [
            {
              data: r.value
            }
          ]
        });
      });
    }, v = () => {
      var e;
      (e = o.value) == null || e.resize();
    }, { stop: p } = B(a, I(v, n.debounceTime));
    return h(d), y(p), (e, u) => (z(), D(
      "div",
      {
        ref_key: "bubbleDomRef",
        ref: a,
        class: "bubble"
      },
      null,
      512
      /* NEED_PATCH */
    ));
  }
});
export {
  U as default
};
