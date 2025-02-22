import { defineComponent as u, mergeDefaults as m, openBlock as e, createElementBlock as i, normalizeClass as h, createElementVNode as t, toDisplayString as s, createVNode as d, unref as k, normalizeStyle as f, withCtx as g, Fragment as b, renderList as y } from "vue";
import x from "./images/voice.png.js";
import { NScrollbar as C } from "naive-ui/es/scrollbar";
const v = { class: "lc-robot-chat-popup__content" }, q = { class: "lc-robot-chat-popup__content--inner" }, H = { class: "lc-robot-chat-popup__content--inner__sayhello" }, D = { class: "lc-robot-chat-popup__content--inner__quick" }, S = ["onClick"], F = { class: "lc-robot-chat-popup__content--inner__quick__item--text" }, E = /* @__PURE__ */ u({
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
  setup(o, { emit: r }) {
    const a = r;
    function _(c) {
      a("clickQuick", c);
    }
    return (c, n) => (e(), i(
      "div",
      {
        class: h(["lc-robot-chat-popup", [{
          "lc-robot-chat-popup--focus": o.isFocus
        }, `lc-robot-chat-popup__hide--${o.hidDir}`]])
      },
      [
        t("div", v, [
          t("div", q, [
            t(
              "div",
              H,
              s(o.aiConfig.sayHello),
              1
              /* TEXT */
            ),
            t("div", D, [
              d(k(C), {
                style: f({ maxHeight: o.maxHeight })
              }, {
                default: g(() => [
                  (e(!0), i(
                    b,
                    null,
                    y(o.aiConfig.quick, (l, p) => (e(), i("div", {
                      class: "lc-robot-chat-popup__content--inner__quick__item",
                      key: p,
                      onClick: (B) => _(l)
                    }, [
                      n[0] || (n[0] = t(
                        "img",
                        {
                          class: "lc-robot-chat-popup__content--inner__quick__item--img",
                          src: x,
                          alt: ""
                        },
                        null,
                        -1
                        /* HOISTED */
                      )),
                      t(
                        "div",
                        F,
                        s(l.text),
                        1
                        /* TEXT */
                      )
                    ], 8, S))),
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
  E as default
};
