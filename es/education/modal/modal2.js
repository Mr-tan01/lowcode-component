import { defineComponent as g, mergeDefaults as p, computed as r, openBlock as w, createBlock as f, unref as n, normalizeProps as v, guardReactiveProps as z, withCtx as b, createElementVNode as e, normalizeStyle as x, renderSlot as i, createVNode as y, normalizeClass as M } from "vue";
import { NModal as k } from "naive-ui/es/modal";
import { options as o } from "./config.js";
import _ from "./decoratorTitle/index.js";
const S = { class: "lc-modal__header" }, N = { class: "lc-modal__wrapper" }, I = /* @__PURE__ */ g({
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
    const u = d;
    function a(l) {
      return r(() => o.size[l] || { width: t.width, height: t.height });
    }
    const m = r(() => `url(${o.bgImgs[t.sizeMode]}) no-repeat`), c = r(() => ({
      "--modal-width": a(t.sizeMode).value.width + "px",
      "--modal-height": a(t.sizeMode).value.height + "px",
      "--modal-bg": m.value
    }));
    function h() {
      u("update:show", !1);
    }
    return (l, s) => (w(), f(
      n(k),
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
              e("div", S, [
                i(l.$slots, "header", {}, () => [
                  y(n(_), { text: t.title }, null, 8, ["text"])
                ], !0)
              ]),
              e("div", N, [
                e(
                  "div",
                  {
                    class: M(["lc-modal__wrapper__closeable", {
                      [t.sizeMode]: !0
                    }])
                  },
                  [
                    i(l.$slots, "closeable", {}, () => [
                      e("button", {
                        class: "lc-modal__wrapper__closeable__button",
                        onClick: h
                      }, s[0] || (s[0] = [
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
                i(l.$slots, "default", {}, void 0, !0)
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
