import { defineComponent as f, shallowRef as o, useTemplateRef as p, openBlock as m, createElementBlock as v, createElementVNode as w } from "vue";
import { useScriptTag as _ } from "@vueuse/core";
import k from "../mark/images/normal.png.js";
const h = { class: "lc-tianditu" }, E = {
  ref: "tiandituCanvasEl",
  class: "lc-tianditu__map"
}, g = /* @__PURE__ */ f({
  __name: "tianditu",
  props: {
    tk: { default: "" },
    apiSrc: { default: "http://api.tianditu.gov.cn/api?v=4.0&tk=" }
  },
  setup(a) {
    const t = o(), e = o(), c = p("tiandituCanvasEl"), { load: l } = _(`${a.apiSrc}${a.tk}`, void 0, {
      async: !1,
      defer: !0,
      noModule: !1
    });
    function u() {
      e.value = new t.value.Map(c.value), e.value.centerAndZoom(new t.value.LngLat(116.40769, 39.89945), 12);
    }
    function r() {
      const n = t.value, i = new n.Icon({
        iconUrl: k,
        iconSize: new n.Point(50, 75),
        iconAnchor: new n.Point(10, 25)
      }), s = new n.Marker(new n.LngLat(116.411794, 39.9068), { icon: i });
      e.value.addOverLay(s);
    }
    async function d() {
      await l(), t.value = window.T, u(), r();
    }
    return d(), (n, i) => (m(), v("div", h, [
      w(
        "div",
        E,
        null,
        512
        /* NEED_PATCH */
      )
    ]));
  }
});
export {
  g as default
};
