import { defineComponent as r, openBlock as i, createElementBlock as n, createVNode as p, unref as a, mergeProps as c, withCtx as s, renderSlot as l, createElementVNode as t, normalizeStyle as d, toDisplayString as g } from "vue";
import { NTooltip as _ } from "naive-ui/es/tooltip";
const h = { class: "lc-tooltip" }, m = { class: "lc-tooltip__trigger" }, u = { class: "lc-tooltip__trigger--text" }, w = { class: "lc-tooltip__content" }, C = /* @__PURE__ */ r({
  __name: "tooltip",
  props: {
    title: { default: "" },
    size: { default: "18" }
  },
  setup(v) {
    return (e, o) => (i(), n("div", h, [
      p(
        a(_),
        c({
          trigger: "hover",
          class: "lc-n-tooltip",
          "arrow-class": "lc-tooltip-arrow-class"
        }, e.$attrs),
        {
          trigger: s(() => [
            l(e.$slots, "trigger", {}, () => [
              t("div", m, [
                t(
                  "div",
                  {
                    class: "lc-tooltip__trigger_icon",
                    style: d({ width: `${e.size}px` })
                  },
                  o[0] || (o[0] = [
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
                        t("path", { d: `M256,90c44.3,0,86,17.3,117.4,48.6C404.7,170,422,211.7,422,256s-17.3,86-48.6,117.4C342,404.7,300.3,422,256,422
	s-86-17.3-117.4-48.6C107.3,342,90,300.3,90,256s17.3-86,48.6-117.4C170,107.3,211.7,90,256,90 M256,48C141.1,48,48,141.1,48,256
	s93.1,208,208,208s208-93.1,208-208S370.9,48,256,48L256,48z` }),
                        t("g", null, [
                          t("path", { d: "M277,360h-42V235h42V360z M277,194h-42v-42h42V194z" })
                        ])
                      ],
                      -1
                      /* HOISTED */
                    )
                  ]),
                  4
                  /* STYLE */
                ),
                t(
                  "div",
                  u,
                  g(e.title),
                  1
                  /* TEXT */
                )
              ])
            ], !0)
          ]),
          default: s(() => [
            t("div", w, [
              l(e.$slots, "default", {}, void 0, !0)
            ])
          ]),
          _: 3
          /* FORWARDED */
        },
        16
        /* FULL_PROPS */
      )
    ]));
  }
});
export {
  C as default
};
