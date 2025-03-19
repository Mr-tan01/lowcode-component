import { defineComponent as o, computed as c, openBlock as r, createElementBlock as m, createElementVNode as n, createVNode as a, unref as s } from "vue";
import { NTime as i } from "naive-ui/es/time";
import l from "./images/time.png.js";
const d = { class: "lctime" }, f = ["src"], N = /* @__PURE__ */ o({
  __name: "time",
  props: {
    icon: { default: "" }
  },
  setup(e) {
    const t = c(() => e.icon || l);
    return (p, u) => (r(), m("div", d, [
      n("img", {
        class: "img",
        src: t.value,
        draggable: "false"
      }, null, 8, f),
      a(s(i))
    ]));
  }
});
export {
  N as default
};
