import { defineComponent as l, openBlock as n, createElementBlock as i, createVNode as p, unref as a, mergeProps as c, withCtx as r, renderSlot as s, createElementVNode as t } from "vue";
import { NTooltip as d } from "naive-ui/es/tooltip";
const g = { class: "lc-tooltip" }, m = { class: "lc-tooltip__content" }, h = /* @__PURE__ */ l({
  __name: "tooltip",
  setup(w) {
    return (e, o) => (n(), i("div", g, [
      p(
        a(d),
        c({
          trigger: "hover",
          class: "lc-n-tooltip",
          "arrow-class": "lc-tooltip-arrow-class"
        }, e.$attrs),
        {
          trigger: r(() => [
            s(e.$slots, "trigger", {}, () => [
              o[0] || (o[0] = t(
                "div",
                { class: "lc-tooltip__trigger_icon" },
                [
                  t("svg", {
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                    x: "0px",
                    y: "0px",
                    viewBox: "0 0 512 512",
                    "enable-background": "new 0 0 512 512",
                    "xml:space": "preserve"
                  }, [
                    t("path", { d: `M256,90c44.3,0,86,17.3,117.4,48.6C404.7,170,422,211.7,422,256s-17.3,86-48.6,117.4C342,404.7,300.3,422,256,422\r
	s-86-17.3-117.4-48.6C107.3,342,90,300.3,90,256s17.3-86,48.6-117.4C170,107.3,211.7,90,256,90 M256,48C141.1,48,48,141.1,48,256\r
	s93.1,208,208,208s208-93.1,208-208S370.9,48,256,48L256,48z` }),
                    t("g", null, [
                      t("path", { d: "M277,360h-42V235h42V360z M277,194h-42v-42h42V194z" })
                    ])
                  ])
                ],
                -1
                /* HOISTED */
              ))
            ], !0)
          ]),
          default: r(() => [
            t("div", m, [
              s(e.$slots, "default", {}, void 0, !0)
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
  h as default
};
