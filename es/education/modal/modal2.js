import { defineComponent as p, mergeDefaults as w, computed as o, openBlock as h, createBlock as f, unref as n, normalizeProps as v, guardReactiveProps as z, withCtx as b, createElementVNode as e, normalizeStyle as x, renderSlot as r, createVNode as y, normalizeClass as M } from "vue";
import { NModal as S } from "naive-ui/es/modal";
import { options as s } from "./config.js";
import k from "./decoratorTitle/index.js";
const _ = { class: "lc-modal__header" }, $ = { class: "lc-modal__wrapper" }, I = /* @__PURE__ */ p({
  __name: "modal",
  props: /* @__PURE__ */ w({
    width: {
      type: String
    },
    height: {
      type: String
    },
    sizeMode: {
      type: String
    },
    title: {
      type: String
    }
  }, {
    sizeMode: "large",
    title: ""
  }),
  emits: ["update:show"],
  setup(t, { emit: d }) {
    const u = d;
    function a(l) {
      return o(() => s.size[l]);
    }
    const m = o(() => `url(${s.bgImgs[t.sizeMode]}) no-repeat`), c = o(() => ({
      "--modal-width": t.width || a(t.sizeMode).value.width,
      "--modal-height": t.width || a(t.sizeMode).value.height,
      "--modal-bg": m.value
    }));
    function g() {
      u("update:show", !1);
    }
    return (l, i) => (h(), f(
      n(S),
      v(z(l.$attrs)),
      {
        default: b(() => [
          e(
            "div",
            {
              class: "lc-modal",
              style: x(c.value)
            },
            [
              e("div", _, [
                r(l.$slots, "header", {}, () => [
                  y(n(k), { text: t.title }, null, 8, ["text"])
                ], !0)
              ]),
              e("div", $, [
                e(
                  "div",
                  {
                    class: M(["lc-modal__wrapper__closeable", {
                      [t.sizeMode]: !0
                    }])
                  },
                  [
                    r(l.$slots, "closeable", {}, () => [
                      e("button", {
                        class: "lc-modal__wrapper__closeable__button",
                        onClick: g
                      }, i[0] || (i[0] = [
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
                r(l.$slots, "default", {}, void 0, !0)
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
  I as default
};
