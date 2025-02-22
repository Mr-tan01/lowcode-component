import { defineComponent as n, computed as c, openBlock as m, createElementBlock as l, createVNode as _, unref as p, mergeProps as f, withCtx as u, createElementVNode as o, normalizeClass as d, toDisplayString as w } from "vue";
import b from "./carouseBox/index.js";
import { propsRaw as h } from "./carouseBox/props.js";
import { defSwitchTabList as v } from "./const.js";
const y = { class: "lc-switch-tabs" }, C = ["title"], g = /* @__PURE__ */ n({
  __name: "switch-tabs",
  props: h,
  setup(s) {
    const i = c(() => s.list ?? v);
    return (t, T) => (m(), l("div", y, [
      _(p(b), f({
        list: i.value,
        offsetAnimationTime: t.offsetAnimationTime,
        rowKey: t.rowKey
      }, t.$attrs), {
        default: u(({ isActive: r, isEven: a, record: { label: e } }) => [
          o(
            "button",
            {
              class: d(["lc-switch-tabs__wrapper__tabs--train__button", { active: r, "is-even": a }])
            },
            [
              o("div", {
                class: "lc-switch-tabs__wrapper__tabs--train__button--text",
                title: e
              }, w(e), 9, C)
            ],
            2
            /* CLASS */
          )
        ]),
        _: 1
        /* STABLE */
      }, 16, ["list", "offsetAnimationTime", "rowKey"])
    ]));
  }
});
export {
  g as default
};
