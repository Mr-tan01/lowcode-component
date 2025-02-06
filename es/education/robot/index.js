// css 
 import './css/index.css';
 // # end css mapping css/index.css 

import { defineComponent as c, mergeDefaults as a, computed as m, openBlock as n, createElementBlock as l, createElementVNode as _ } from "vue";
import { s as p } from "./assets/s1-DPIWGfHc.js";
import { s as i } from "./assets/s2-DBLzyVtL.js";
import { s as d } from "./assets/s3-DpTjJiCN.js";
import { s as f } from "./assets/s4-B9ptzqa9.js";
const g = {
  s1: p,
  s2: i,
  s3: d,
  s4: f
}, u = { class: "lc-robot" }, b = ["src"], v = /* @__PURE__ */ c({
  __name: "robot",
  props: /* @__PURE__ */ a({
    value: {
      type: String
    }
  }, {
    value: "s1"
  }),
  setup(o) {
    const t = m(() => g[o.value]);
    return (s, e) => (n(), l("div", u, [
      _("img", {
        class: "lc-robot__image",
        src: t.value,
        draggable: "false",
        alt: ""
      }, null, 8, b)
    ]));
  }
}), I = (o, t) => {
  const s = o.__vccOpts || o;
  for (const [e, r] of t)
    s[e] = r;
  return s;
}, E = /* @__PURE__ */ I(v, [["__scopeId", "data-v-ed9ce8ad"]]);
export {
  E as LcRobot,
  g as robotBQMap
};
