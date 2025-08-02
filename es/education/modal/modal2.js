import { defineComponent as g, computed as a, openBlock as p, createBlock as w, unref as s, normalizeProps as f, guardReactiveProps as v, withCtx as x, createElementVNode as t, normalizeStyle as z, renderSlot as r, createVNode as b, normalizeClass as M } from "vue";
import { NModal as k } from "naive-ui/es/modal";
import { options as d } from "./config.js";
import y from "./decoratorTitle/index.js";
const _ = { class: "lc-modal__header" }, $ = { class: "lc-modal__wrapper" }, N = /* @__PURE__ */ g({
  __name: "modal",
  props: {
    width: { default: "1500px" },
    height: { default: "685px" },
    sizeMode: { default: "large" },
    title: { default: "" },
    maxLength: { default: 12 }
  },
  emits: ["update:show"],
  setup(l, { emit: i }) {
    const u = i;
    function o(e) {
      return a(() => d.size[e]);
    }
    const m = a(() => `url(${d.bgImgs[l.sizeMode]}) no-repeat`), c = a(() => ({
      "--modal-width": l.width || o(l.sizeMode).value.width,
      "--modal-height": l.height || o(l.sizeMode).value.height,
      "--modal-bg": m.value,
      "--header-width": o(l.sizeMode).value.headerWidth
    }));
    function h() {
      u("update:show", !1);
    }
    return (e, n) => (p(), w(
      s(k),
      f(v(e.$attrs)),
      {
        default: x(() => [
          t(
            "div",
            {
              class: "lc-modal",
              style: z(c.value)
            },
            [
              t("div", _, [
                r(e.$slots, "header", {}, () => [
                  b(s(y), {
                    "max-length": e.maxLength,
                    text: e.title
                  }, null, 8, ["max-length", "text"])
                ], !0)
              ]),
              t("div", $, [
                t(
                  "div",
                  {
                    class: M(["lc-modal__wrapper__closeable", {
                      [e.sizeMode]: !0
                    }])
                  },
                  [
                    r(e.$slots, "closeable", {}, () => [
                      t("button", {
                        class: "lc-modal__wrapper__closeable__button",
                        onClick: h
                      }, n[0] || (n[0] = [
                        t(
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
                            t("g", null, [
                              t("g", null, [
                                t("polygon", { points: `405,136.798 375.202,107 256,226.202 136.798,107 107,136.798 226.202,256 107,375.202 136.798,405 256,285.798 
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
                r(e.$slots, "default", {}, void 0, !0)
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
  N as default
};
