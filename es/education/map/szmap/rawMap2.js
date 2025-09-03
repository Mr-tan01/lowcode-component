import { defineComponent, mergeDefaults, useCssVars, computed, ref, onMounted, createElementBlock, openBlock, createCommentVNode, createVNode, createElementVNode, Fragment, renderList, mergeProps, createBlock, resolveDynamicComponent, renderSlot, unref } from "vue";
import _sfc_main$2 from "./comp/sshzq.js";
import Baoan from "./comp/baoan.js";
import Dapeng from "./comp/dapeng.js";
import Futian from "./comp/futian.js";
import Guangming from "./comp/guangming.js";
import Longgang from "./comp/longgang.js";
import Luohu from "./comp/luohu.js";
import Pingshan from "./comp/pingshan.js";
import Yantian from "./comp/yantian.js";
import Nanshan from "./comp/nanshan.js";
import Longhua from "./comp/longhua.js";
import _sfc_main$1 from "./comp/defines.js";
import Labels from "./comp/labels2.js";
import LcMark from "../mark/index2.js";
import { propsRaw } from "./props.js";
import { defFloatLevelConfig, LabelModelEnum, szBlockNames, defBlockLableMap } from "./const.js";
import merge from "lodash-es/merge";
const _hoisted_1 = { class: "lc-szmap-raw" };
const _hoisted_2 = {
  class: "lc-szmap-raw__svg",
  viewBox: "0 0 922 527",
  version: "1.1"
};
const _hoisted_3 = ["id"];
const _hoisted_4 = {
  id: "页面-2",
  stroke: "none",
  "stroke-width": "1",
  fill: "none",
  "fill-rule": "evenodd"
};
const _hoisted_5 = {
  id: "编组-76",
  transform: "translate(4, 0)"
};
const _hoisted_6 = {
  id: "编组",
  transform: "translate(0, 35)",
  "fill-rule": "nonzero"
};
const _hoisted_7 = {
  key: 0,
  class: "lc-szmap-raw__mark-group"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "rawMap",
  props: /* @__PURE__ */ mergeDefaults(propsRaw, {
    showLabel: true,
    showBorder: true,
    levels: () => ({}),
    values: () => ({}),
    fillModel: "default",
    rotateX: 0,
    disabledGradient: false,
    labelModel: () => LabelModelEnum.DEFAULT
  }),
  emits: ["markClick", "markMouseover", "markMouseenter", "markMouseleave"],
  setup(__props, { emit: __emit }) {
    useCssVars((_ctx) => ({
      "56fab9ce": mapRotateX.value,
      "1ce59d8d": labelWrapInsetY.value
    }));
    const blockList = {
      [szBlockNames["光明"]]: Guangming,
      [szBlockNames["宝安"]]: Baoan,
      [szBlockNames["龙华"]]: Longhua,
      [szBlockNames["南山"]]: Nanshan,
      [szBlockNames["福田"]]: Futian,
      [szBlockNames["罗湖"]]: Luohu,
      [szBlockNames["盐田"]]: Yantian,
      [szBlockNames["坪山"]]: Pingshan,
      [szBlockNames["龙岗"]]: Longgang,
      [szBlockNames["大鹏新区"]]: Dapeng,
      [szBlockNames["深汕合作区"]]: _sfc_main$2
    };
    const labelAnimateNum = ref(0);
    const $emits = __emit;
    const currentMapKey = ref("");
    function getMarkProp(key) {
      const markMate = __props.values[key] ?? { value: 0 };
      const currentLevelIndex = levelsList.value.findIndex(
        ([, item]) => (item == null ? void 0 : item.range) && markMate.value >= item.range[0] && markMate.value <= item.range[1]
      );
      const [, currentLevelConf] = levelsList.value[currentLevelIndex] ?? [];
      return {
        ...markMate,
        mapLabel: defBlockLableMap[key],
        style: {
          "--level-scale": labelAnimateNum.value ? (currentLevelConf == null ? void 0 : currentLevelConf.scale) ?? 1 : labelAnimateNum.value
        }
      };
    }
    function markClick(key) {
      $emits("markClick", getMarkProp(key));
    }
    onMounted(() => {
      setTimeout(() => {
        labelAnimateNum.value = 1;
      }, 300);
    });
    const blockClass = computed(() => {
      return ["lc-szmap-raw__block", `visible--${__props.fillModel}`];
    });
    const levelsList = computed(() => {
      return Object.entries(merge({}, defFloatLevelConfig, __props.levels));
    });
    function getBlockProperties(key) {
      const currentValueConf = __props.values[key];
      if (!currentValueConf || __props.disabledGradient) return;
      const currentLevelIndex = levelsList.value.findIndex(
        ([, item]) => (item == null ? void 0 : item.range) && currentValueConf.value >= item.range[0] && currentValueConf.value <= item.range[1]
      );
      const [type, currentLevelConf] = levelsList.value[currentLevelIndex] ?? [];
      let className = [];
      let styles = {};
      if (currentLevelConf && type) {
        className.push("float-active");
        if (typeof currentLevelConf.stop === "string") {
          styles["--linear-gradient-fill"] = currentLevelConf.stop;
        } else {
          styles["--linear-gradient-fill"] = `url(#linearGradient-float-${type})`;
        }
      }
      return {
        class: className,
        style: styles
      };
    }
    const mapRotateX = computed(() => `rotateX(${__props.rotateX}deg)`);
    const labelWrapInsetY = computed(() => Math.abs(__props.rotateX));
    const labelClass = (key) => {
      return ["lc-szmap-raw__mark-group--item", `mark-${key}`];
    };
    function onMouseoverMapkey(key) {
      if (__props.labelModel !== LabelModelEnum.HOVER) return;
      currentMapKey.value = key;
      $emits("markMouseover", key);
    }
    function onMouseenterMapkey(key) {
      if (__props.labelModel !== LabelModelEnum.HOVER) return;
      currentMapKey.value = key;
      $emits("markMouseenter", key);
    }
    const hidePopver = (event, key) => {
      const target = event.relatedTarget;
      if (target && target.closest(".lc-szmap-raw__mark-group")) {
        return;
      }
      currentMapKey.value = "";
      $emits("markMouseleave", key);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        (openBlock(), createElementBlock("svg", _hoisted_2, [
          createVNode(_sfc_main$1),
          createElementVNode("defs", null, [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(levelsList.value, ([type, item], key) => {
                return openBlock(), createElementBlock("linearGradient", {
                  id: `linearGradient-float-${type}`,
                  key
                }, [
                  (openBlock(true), createElementBlock(
                    Fragment,
                    null,
                    renderList(item == null ? void 0 : item.stop, (el, index) => {
                      return openBlock(), createElementBlock(
                        "stop",
                        mergeProps({ ref_for: true }, typeof el === "object" && !Array.isArray(el) ? el : {}, { key: index }),
                        null,
                        16
                        /* FULL_PROPS */
                      );
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ], 8, _hoisted_3);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          createElementVNode("g", _hoisted_4, [
            createElementVNode("g", _hoisted_5, [
              createElementVNode("g", _hoisted_6, [
                (openBlock(), createElementBlock(
                  Fragment,
                  null,
                  renderList(blockList, (is, key, index) => {
                    return createVNode(resolveDynamicComponent(is), mergeProps({
                      key: index,
                      class: blockClass.value
                    }, { ref_for: true }, getBlockProperties(key), {
                      "show-border": _ctx.showBorder,
                      onMouseenter: ($event) => onMouseoverMapkey(key),
                      onMouseover: ($event) => onMouseenterMapkey(key),
                      onMouseleave: ($event) => hidePopver($event, key),
                      onClick: ($event) => markClick(key)
                    }), null, 16, ["class", "show-border", "onMouseenter", "onMouseover", "onMouseleave", "onClick"]);
                  }),
                  64
                  /* STABLE_FRAGMENT */
                )),
                _ctx.showLabel ? (openBlock(), createBlock(Labels, {
                  key: 0,
                  labels: _ctx.labels,
                  values: _ctx.values
                }, null, 8, ["labels", "values"])) : createCommentVNode("v-if", true)
              ])
            ])
          ])
        ])),
        _ctx.showLabel ? (openBlock(), createElementBlock("div", _hoisted_7, [
          renderSlot(_ctx.$slots, "mapLabel", {
            blockList,
            labelClass,
            getVlaue: getMarkProp,
            currentMapKey: currentMapKey.value
          }, () => [
            (openBlock(), createElementBlock(
              Fragment,
              null,
              renderList(blockList, (_, key) => {
                return createVNode(unref(LcMark), mergeProps({
                  key,
                  class: labelClass(key)
                }, { ref_for: true }, getMarkProp(key), {
                  size: "small",
                  onClick: ($event) => markClick(key)
                }), null, 16, ["class", "onClick"]);
              }),
              64
              /* STABLE_FRAGMENT */
            ))
          ], true)
        ])) : createCommentVNode("v-if", true)
      ]);
    };
  }
});
export {
  _sfc_main as default
};
