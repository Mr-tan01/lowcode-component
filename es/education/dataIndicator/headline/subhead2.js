import { defineComponent, mergeDefaults, useCssVars, computed, openBlock, createElementBlock, createElementVNode, createCommentVNode, renderSlot, toDisplayString } from "vue";
import _imports_0 from "./images/subhead-lft.png.js";
import _imports_1 from "./images/subhead-rgt.png.js";
import _imports_2 from "./images/subhead-lgt.png.js";
import { overflowStr } from "lowcode-share/es/share";
const _hoisted_1 = { class: "lc-subhead" };
const _hoisted_2 = {
  key: 0,
  class: "lc-subhead__imglft lc-subhead__img"
};
const _hoisted_3 = {
  key: 1,
  class: "lc-subhead__imglgt lc-subhead__img"
};
const _hoisted_4 = {
  key: 2,
  class: "lc-subhead__icon-left"
};
const _hoisted_5 = ["title"];
const _hoisted_6 = {
  key: 3,
  class: "lc-subhead__icon-right"
};
const _hoisted_7 = {
  key: 4,
  class: "lc-subhead__imgrft lc-subhead__img"
};
const _hoisted_8 = {
  key: 5,
  class: "lc-subhead__imgrgt lc-subhead__img"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "subhead",
  props: /* @__PURE__ */ mergeDefaults({
    text: {
      type: String
    },
    maxLength: {
      type: Number
    },
    fontSize: {
      type: String
    },
    type: {
      type: String
    },
    hideRadioIcon: {
      type: Boolean
    }
  }, {
    text: "",
    maxLength: 15,
    fontSize: "18px",
    type: "left",
    hideRadioIcon: false
  }),
  setup(__props) {
    useCssVars((_ctx) => ({
      "20d45b36": __props.fontSize
    }));
    const direction = {
      right: "right",
      center: "center",
      left: "left"
    };
    const formatedText = computed(() => {
      return overflowStr(__props.text, __props.maxLength);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        __props.type === direction.left && !__props.hideRadioIcon ? (openBlock(), createElementBlock("div", _hoisted_2, _cache[0] || (_cache[0] = [
          createElementVNode(
            "img",
            {
              src: _imports_0,
              alt: ""
            },
            null,
            -1
            /* HOISTED */
          )
        ]))) : createCommentVNode("v-if", true),
        __props.type === direction.right || __props.type === direction.center ? (openBlock(), createElementBlock("div", _hoisted_3, _cache[1] || (_cache[1] = [
          createElementVNode(
            "img",
            {
              src: _imports_1,
              alt: ""
            },
            null,
            -1
            /* HOISTED */
          )
        ]))) : createCommentVNode("v-if", true),
        _ctx.$slots["icon-left"] ? (openBlock(), createElementBlock("div", _hoisted_4, [
          renderSlot(_ctx.$slots, "icon-left", {}, void 0, true)
        ])) : createCommentVNode("v-if", true),
        createElementVNode("div", {
          class: "lc-subhead__text",
          title: __props.text
        }, toDisplayString(formatedText.value), 9, _hoisted_5),
        _ctx.$slots["icon-right"] ? (openBlock(), createElementBlock("div", _hoisted_6, [
          renderSlot(_ctx.$slots, "icon-right", {}, void 0, true)
        ])) : createCommentVNode("v-if", true),
        __props.type === direction.right && !__props.hideRadioIcon ? (openBlock(), createElementBlock("div", _hoisted_7, _cache[2] || (_cache[2] = [
          createElementVNode(
            "img",
            {
              src: _imports_0,
              alt: ""
            },
            null,
            -1
            /* HOISTED */
          )
        ]))) : createCommentVNode("v-if", true),
        __props.type === direction.left || __props.type === direction.center ? (openBlock(), createElementBlock("div", _hoisted_8, _cache[3] || (_cache[3] = [
          createElementVNode(
            "img",
            {
              src: _imports_2,
              alt: ""
            },
            null,
            -1
            /* HOISTED */
          )
        ]))) : createCommentVNode("v-if", true)
      ]);
    };
  }
});
export {
  _sfc_main as default
};
