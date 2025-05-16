import { defineComponent as h, ref as c, computed as f, onMounted as y, onBeforeUnmount as z, openBlock as D, createElementBlock as X } from "vue";
import b from "./images/default.png.js";
import Y from "./images/hover_image.png.js";
import { useResizeObserver as k } from "@vueuse/core";
import { merge as B, debounce as C } from "lodash-es";
import { baseOptions as I } from "./options.js";
import { init as R } from "echarts";
const U = /* @__PURE__ */ h({
  __name: "bubble",
  props: {
    data: { default: () => [] },
    options: { default: () => ({
      startX: 200,
      // 起始x坐标
      gapX: 250,
      // 每个节点x方向间隔
      centerY: 250,
      // 居中y坐标
      gapY: 80
      // y方向偏移量
    }) },
    debounceTime: { default: 300 },
    chartOptions: {}
  },
  setup(u) {
    const l = c(), a = c(), i = f(() => {
      const { startX: e, gapX: r, centerY: t, gapY: o } = u.options;
      return u.data.map((m, n) => {
        let s = e + n * r, O = n ? t + (n % 2 === 1 ? o : -o) : t;
        return {
          name: m.label,
          value: m.value,
          symbolSize: [180, 129],
          draggable: !0,
          symbol: `image://${b}`,
          x: s,
          y: O
        };
      });
    }), d = f(() => B(
      {},
      I,
      {
        series: [
          {
            data: i.value
          }
        ]
      },
      u.chartOptions
    )), p = () => {
      var e, r;
      a.value = R(l.value), a.value.setOption(d.value, !0), (e = a.value) == null || e.on("mouseover", function(t) {
        var o;
        if (t.dataType === "node") {
          const m = i.value.map((n) => {
            var s;
            return {
              ...n,
              symbol: n.name === ((s = t == null ? void 0 : t.data) == null ? void 0 : s.name) ? `image://${Y}` : `image://${b}`,
              symbolSize: n.name === t.data.name ? [200, 150] : [180, 129]
            };
          });
          (o = a.value) == null || o.setOption({
            series: [
              {
                data: m
              }
            ]
          });
        }
      }), (r = a.value) == null || r.on("mouseout", function(t) {
        var o;
        (o = a.value) == null || o.setOption({
          series: [
            {
              data: i.value
            }
          ]
        });
      });
    }, v = () => {
      var e;
      (e = a.value) == null || e.resize();
    }, { stop: g } = k(l, C(v, u.debounceTime));
    return y(p), z(g), (e, r) => (D(), X(
      "div",
      {
        ref_key: "bubbleDomRef",
        ref: l,
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
