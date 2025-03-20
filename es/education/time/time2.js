import { defineComponent as n, useCssVars as r, computed as s, ref as i, openBlock as l, createElementBlock as m, createElementVNode as u, createVNode as f, unref as d } from "vue";
import { NTime as p } from "naive-ui/es/time";
import _ from "./images/time.png.js";
const g = { class: "lctime" }, v = ["src"], S = /* @__PURE__ */ n({
  __name: "time",
  props: {
    icon: { default: "" },
    color: { default: "#fff" },
    fontSize: { default: "20px" }
  },
  setup(c) {
    r((e) => ({
      "17620c4a": e.color,
      a465b910: e.fontSize
    }));
    const a = s(() => c.icon || _), t = i();
    function o() {
      t.value = Date.now(), setTimeout(o, 1e3);
    }
    return o(), (e, T) => (l(), m("div", g, [
      u("img", {
        class: "img",
        src: a.value,
        draggable: "false"
      }, null, 8, v),
      f(d(p), {
        time: t.value,
        class: "n-time-class"
      }, null, 8, ["time"])
    ]));
  }
});
export {
  S as default
};
