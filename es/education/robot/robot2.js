import { defineComponent as H, mergeModels as M, useCssVars as P, unref as o, useModel as S, computed as s, toRefs as k, openBlock as u, createElementBlock as $, normalizeClass as p, createElementVNode as m, createBlock as b, mergeProps as c, createCommentVNode as h } from "vue";
import { robotBQMap as V, imageShowTrigger as E, imageHideDir as v } from "./const.js";
import w from "./robot-chat-popup.js";
import { useDragRobotPosition as F } from "./drag.js";
const N = ["draggable"], R = ["src"], O = /* @__PURE__ */ H({
  __name: "robot",
  props: /* @__PURE__ */ M({
    src: { default: "" },
    value: { default: "s1" },
    width: { default: "219px" },
    height: { default: "233px" },
    trigger: { default: "none" },
    hidDir: { default: "lt" },
    showPopup: { type: Boolean, default: !1 },
    aiConfig: { default: () => ({
      sayHello: "Hi，我是小教！ 您可以试着说",
      quick: [
        {
          text: "部门汇报模式"
        },
        {
          text: "任务查看模式"
        },
        {
          text: "1974年，第一次在东南亚打自由搏击就得了冠军；1980年打赢了日本重炮手雷龙，接着连续三年打败所有日本空手道高手，赢得全日本自由搏击冠军……"
        },
        {
          text: "智能问答模式"
        }
      ]
    }) },
    popupContextMaxH: {},
    draggable: { type: Boolean, default: !1 },
    position: { default: "fixed" }
  }, {
    isShow: { type: Boolean, default: !1 },
    isShowModifiers: {}
  }),
  emits: ["update:isShow"],
  setup(a) {
    P((e) => ({
      "7e50c6b2": e.position,
      "4d3bd900": o(y),
      "5cae0b08": e.width,
      "1f445c25": e.height
    }));
    const r = S(a, "isShow"), C = s(() => a.src || V[a.value]), { isDraging: x, startDrag: n, stopDrag: d, robotOffset: D, xAdsorptionDir: g } = F(), l = s(() => a.draggable ? g.value : a.hidDir), B = s(() => ({
      [`lc-robot__wrapper__image--status-${l.value}`]: a.trigger !== E.none
    }));
    function f(e) {
      return s(() => a.showPopup && l.value === e).value;
    }
    const { y } = k(D);
    return (e, t) => (u(), $("div", {
      class: p(["lc-robot", [
        {
          "lc-robot--draggable": e.draggable,
          "lc-robot--draging": o(x)
        },
        `lc-robot--dir-${o(g)}`
      ]]),
      draggable: e.draggable,
      onDragstart: t[2] || (t[2] = //@ts-ignore
      (...i) => o(n) && o(n)(...i)),
      onDragend: t[3] || (t[3] = //@ts-ignore
      (...i) => o(d) && o(d)(...i))
    }, [
      m(
        "div",
        {
          class: "lc-robot__wrapper",
          tabindex: "-1",
          onFocus: t[0] || (t[0] = (i) => r.value = !0),
          onBlur: t[1] || (t[1] = (i) => r.value = !1)
        },
        [
          f(o(v).rt) ? (u(), b(w, c({
            key: 0,
            "max-height": e.popupContextMaxH,
            "ai-config": e.aiConfig,
            "is-focus": r.value,
            "hid-dir": l.value
          }, e.$attrs), null, 16, ["max-height", "ai-config", "is-focus", "hid-dir"])) : h("v-if", !0),
          m("img", {
            class: p(["lc-robot__wrapper__image", [B.value]]),
            src: C.value,
            draggable: "false",
            alt: ""
          }, null, 10, R),
          f(o(v).lt) ? (u(), b(w, c({
            key: 1,
            "max-height": e.popupContextMaxH,
            "ai-config": e.aiConfig,
            "is-focus": r.value,
            "hid-dir": l.value
          }, e.$attrs), null, 16, ["max-height", "ai-config", "is-focus", "hid-dir"])) : h("v-if", !0)
        ],
        32
        /* NEED_HYDRATION */
      )
    ], 42, N));
  }
});
export {
  O as default
};
