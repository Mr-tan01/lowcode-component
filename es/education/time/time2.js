import { defineComponent as s, useCssVars as i, computed as m, ref as l, openBlock as n, createElementBlock as r, createCommentVNode as u, createVNode as f, unref as d } from "vue";
import { NTime as p } from "naive-ui/es/time";
import _ from "./images/time.png.js";
const g = { class: "lctime" }, v = ["src"], b = /* @__PURE__ */ s({
  __name: "time",
  props: {
    icon: { default: "" },
    color: { default: "#fff" },
    fontSize: { default: "20px" }
  },
  setup(c) {
    i((e) => ({
      "160b8000": e.color,
      edb6219a: e.fontSize
    }));
    const a = m(() => c.icon || _), t = l();
    function o() {
      t.value = Date.now(), setTimeout(o, 1e3);
    }
    return o(), (e, h) => (n(), r("div", g, [
      e.isShowIcon ? (n(), r("img", {
        key: 0,
        class: "img",
        src: a.value,
        draggable: "false"
      }, null, 8, v)) : u("v-if", !0),
      f(d(p), {
        time: t.value,
        class: "n-time-class"
      }, null, 8, ["time"])
    ]));
  }
});
export {
  b as default
};
