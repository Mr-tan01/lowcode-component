import { defineComponent as h, mergeDefaults as p, computed as a, openBlock as g, createBlock as w, unref as s, normalizeProps as f, guardReactiveProps as v, withCtx as z, createElementVNode as e, normalizeStyle as x, createVNode as y, normalizeClass as _, renderSlot as n } from "vue";
import { NModal as b } from "naive-ui/es/modal";
import { options as o } from "./config.js";
import M from "./decoratorTitle/index.js";
const k = { class: "lc-modal__header" }, S = { class: "lc-modal__wrapper" }, D = /* @__PURE__ */ h({
  __name: "modal",
  props: /* @__PURE__ */ p({
    width: {
      type: Number
    },
    height: {
      type: Number
    },
    sizeMode: {
      type: String
    },
    title: {
      type: String
    }
  }, {
    width: () => o.size.large.width,
    height: () => o.size.large.height,
    sizeMode: "large",
    title: ""
  }),
  emits: ["update:show"],
  setup(t, { emit: d }) {
    const m = d;
    function i(l) {
      return a(() => o.size[l] || { width: t.width, height: t.height });
    }
    const u = a(() => ({
      "--modal-width": i(t.sizeMode).value.width + "px",
      "--modal-height": i(t.sizeMode).value.height + "px"
    }));
    function c() {
      m("update:show", !1);
    }
    return (l, r) => (g(), w(
      s(b),
      f(v(l.$attrs)),
      {
        default: z(() => [
          e(
            "div",
            {
              class: "lc-modal",
              style: x(u.value)
            },
            [
              e("div", k, [
                y(s(M), { title: t.title }, null, 8, ["title"])
              ]),
              e("div", S, [
                e(
                  "div",
                  {
                    class: _(["lc-modal__wrapper__closeable", {
                      [t.sizeMode]: !0
                    }])
                  },
                  [
                    n(l.$slots, "closeable", {}, () => [
                      e("button", {
                        class: "lc-modal__wrapper__closeable__button",
                        onClick: c
                      }, r[0] || (r[0] = [
                        e(
                          "svg",
                          {
                            version: "1.1",
                            xmlns: "http://www.w3.org/2000/svg",
                            "xmlns:xlink": "http://www.w3.org/1999/xlink",
                            x: "0px",
                            y: "0px",
                            viewBox: "0 0 512 512",
                            "enable-background": "new 0 0 512 512",
                            "xml:space": "preserve"
                          },
                          [
                            e("g", null, [
                              e("g", null, [
                                e("polygon", { points: `405,136.798 375.202,107 256,226.202 136.798,107 107,136.798 226.202,256 107,375.202 136.798,405 256,285.798 \r
                                375.202,405 405,375.202 285.798,256` })
                              ])
                            ])
                          ],
                          -1
                          /* HOISTED */
                        )
                      ]))
                    ], !0)
                  ],
                  2
                  /* CLASS */
                ),
                n(l.$slots, "default", {}, void 0, !0)
              ])
            ],
            4
            /* STYLE */
          )
        ]),
        _: 3
        /* FORWARDED */
      },
      16
      /* FULL_PROPS */
    ));
  }
});
export {
  D as default
};
