import { defineComponent as s, useCssVars as i, computed as l, ref as m, openBlock as n, createElementBlock as r, createCommentVNode as u, createVNode as f, unref as d } from "vue";
import { NTime as p } from "naive-ui/es/time";
import _ from "./images/time.png.js";
const g = { class: "lctime" }, h = ["src"], T = /* @__PURE__ */ s({
  __name: "time",
  props: {
    icon: { default: "" },
    color: { default: "#fff" },
    fontSize: { default: "20px" },
    isShowIcon: { type: Boolean, default: !0 }
  },
  setup(a) {
    i((e) => ({
      "160b8000": e.color,
      edb6219a: e.fontSize
    }));
    const c = l(() => a.icon || _), o = m();
    function t() {
      o.value = Date.now(), setTimeout(t, 1e3);
    }
    return t(), (e, v) => (n(), r("div", g, [
      e.isShowIcon ? (n(), r("img", {
        key: 0,
        class: "img",
        src: c.value,
        draggable: "false"
      }, null, 8, h)) : u("v-if", !0),
      f(d(p), {
        time: o.value,
        class: "n-time-class"
      }, null, 8, ["time"])
    ]));
  }
});
export {
  T as default
};
