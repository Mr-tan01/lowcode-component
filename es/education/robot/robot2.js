import { defineComponent as B, mergeModels as P, mergeDefaults as H, useCssVars as M, unref as t, useModel as k, computed as s, toRefs as F, openBlock as g, createElementBlock as $, normalizeClass as m, createElementVNode as c, createBlock as h, mergeProps as b, createCommentVNode as p } from "vue";
import { robotBQMap as V, imageShowTrigger as E, imageHideDir as v } from "./const.js";
import x from "./robot-chat-popup.js";
import { useDragRobotPosition as N } from "./drag.js";
const O = ["draggable"], R = ["src"], L = /* @__PURE__ */ B({
  __name: "robot",
  props: /* @__PURE__ */ P(/* @__PURE__ */ H({
    src: {
      type: String
    },
    value: {
      type: String
    },
    width: {
      type: String
    },
    height: {
      type: String
    },
    trigger: {
      type: String
    },
    hidDir: {
      type: String
    },
    showPopup: {
      type: Boolean
    },
    aiConfig: {
      type: Object
    },
    popupContextMaxH: {
      type: String
    },
    draggable: {
      type: Boolean
    },
    position: {
      type: String
    }
  }, {
    value: "s1",
    width: "219px",
    height: "233px",
    trigger: "none",
    hidDir: "lt",
    showPopup: !1,
    src: "",
    aiConfig: () => ({
      sayHello: "Hi，我是小教！ 您可以试着说",
      quick: [
        {
          text: "部门汇报模式"
        },
        {
          text: "任务查看模式"
        },
        {
          text: "智能问答模式"
        },
        {
          text: "智能问答模式"
        }
      ]
    }),
    draggable: !1,
    position: "fixed"
  }), {
    isShow: { default: !1 },
    isShowModifiers: {}
  }),
  emits: ["update:isShow"],
  setup(e) {
    M((i) => ({
      "401aba4f": e.position,
      "6e8f5cd8": t(S),
      "309fe340": e.width,
      "16fa7866": e.height
    }));
    const a = k(e, "isShow"), C = s(() => e.src || V[e.value]), { isDraging: D, startDrag: l, stopDrag: u, robotOffset: y, xAdsorptionDir: d } = N(), n = s(() => e.draggable ? d.value : e.hidDir), w = s(() => ({
      [`lc-robot__wrapper__image--status-${n.value}`]: e.trigger !== E.none
    }));
    function f(i) {
      return s(() => e.showPopup && n.value === i).value;
    }
    const {
      y: S
    } = F(y);
    return (i, o) => (g(), $("div", {
      class: m(["lc-robot", [{
        "lc-robot--draggable": e.draggable,
        "lc-robot--draging": t(D)
      }, `lc-robot--dir-${t(d)}`]]),
      draggable: e.draggable,
      onDragstart: o[2] || (o[2] = //@ts-ignore
      (...r) => t(l) && t(l)(...r)),
      onDragend: o[3] || (o[3] = //@ts-ignore
      (...r) => t(u) && t(u)(...r))
    }, [
      c(
        "div",
        {
          class: "lc-robot__wrapper",
          tabindex: "-1",
          onFocus: o[0] || (o[0] = (r) => a.value = !0),
          onBlur: o[1] || (o[1] = (r) => a.value = !1)
        },
        [
          f(t(v).rt) ? (g(), h(x, b({
            key: 0,
            "max-height": e.popupContextMaxH,
            aiConfig: e.aiConfig,
            isFocus: a.value,
            hidDir: n.value
          }, i.$attrs), null, 16, ["max-height", "aiConfig", "isFocus", "hidDir"])) : p("v-if", !0),
          c("img", {
            class: m(["lc-robot__wrapper__image", [w.value]]),
            src: C.value,
            draggable: "false",
            alt: ""
          }, null, 10, R),
          f(t(v).lt) ? (g(), h(x, b({
            key: 1,
            "max-height": e.popupContextMaxH,
            aiConfig: e.aiConfig,
            isFocus: a.value,
            hidDir: n.value
          }, i.$attrs), null, 16, ["max-height", "aiConfig", "isFocus", "hidDir"])) : p("v-if", !0)
        ],
        32
        /* NEED_HYDRATION */
      )
    ], 42, O));
  }
});
export {
  L as default
};
