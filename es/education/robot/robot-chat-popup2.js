import { defineComponent as h, mergeDefaults as m, openBlock as c, createElementBlock as i, normalizeClass as k, createElementVNode as t, toDisplayString as n, createVNode as f, unref as a, normalizeStyle as g, withCtx as r, Fragment as x, renderList as y, createBlock as b, createTextVNode as v } from "vue";
import C from "./images/voice.png.js";
import { NScrollbar as q, NMarquee as H } from "naive-ui/es";
const D = { class: "lc-robot-chat-popup__content" }, N = { class: "lc-robot-chat-popup__content--inner" }, S = { class: "lc-robot-chat-popup__content--inner__sayhello" }, B = { class: "lc-robot-chat-popup__content--inner__quick" }, F = ["onClick"], Q = { class: "lc-robot-chat-popup__content--inner__quick__item--text" }, V = { key: 1 }, w = /* @__PURE__ */ h({
  __name: "robot-chat-popup",
  props: /* @__PURE__ */ m({
    isFocus: {
      type: Boolean
    },
    hidDir: {
      type: String
    },
    aiConfig: {
      type: Object
    },
    maxHeight: {
      type: String
    }
  }, {
    isFocus: !1,
    hidDir: "rt",
    aiConfig: () => ({
      sayHello: "您好，我是智能客服机器人，请问您需要什么帮助？",
      quick: []
    }),
    maxHeight: "75px"
  }),
  emits: ["clickQuick"],
  setup(e, { emit: _ }) {
    const p = _;
    function u(l) {
      p("clickQuick", l);
    }
    return (l, s) => (c(), i(
      "div",
      {
        class: k(["lc-robot-chat-popup", [
          {
            "lc-robot-chat-popup--focus": e.isFocus
          },
          `lc-robot-chat-popup__hide--${e.hidDir}`
        ]])
      },
      [
        t("div", D, [
          t("div", N, [
            t(
              "div",
              S,
              n(e.aiConfig.sayHello),
              1
              /* TEXT */
            ),
            t("div", B, [
              f(a(q), {
                style: g({ maxHeight: e.maxHeight })
              }, {
                default: r(() => [
                  (c(!0), i(
                    x,
                    null,
                    y(e.aiConfig.quick, (o, d) => (c(), i("div", {
                      key: d,
                      class: "lc-robot-chat-popup__content--inner__quick__item",
                      onClick: (z) => u(o)
                    }, [
                      s[0] || (s[0] = t(
                        "img",
                        {
                          class: "lc-robot-chat-popup__content--inner__quick__item--img",
                          src: C,
                          alt: ""
                        },
                        null,
                        -1
                        /* HOISTED */
                      )),
                      t("div", Q, [
                        o.text.length > 10 ? (c(), b(
                          a(H),
                          {
                            key: 0,
                            speed: 25,
                            gradient: !1
                          },
                          {
                            default: r(() => [
                              v(
                                n(o.text) + "    " + n(o.text),
                                1
                                /* TEXT */
                              )
                            ]),
                            _: 2
                            /* DYNAMIC */
                          },
                          1024
                          /* DYNAMIC_SLOTS */
                        )) : (c(), i(
                          "div",
                          V,
                          n(o.text),
                          1
                          /* TEXT */
                        ))
                      ])
                    ], 8, F))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ]),
                _: 1
                /* STABLE */
              }, 8, ["style"])
            ])
          ])
        ])
      ],
      2
      /* CLASS */
    ));
  }
});
export {
  w as default
};
