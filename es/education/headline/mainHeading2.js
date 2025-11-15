import { defineComponent, mergeDefaults, createElementBlock, openBlock, createElementVNode, toDisplayString } from "vue";
import _imports_0 from "./images/main-heading-lft.png.js";
import _imports_1 from "./images/main-heading-rgt.png.js";
const _hoisted_1 = { class: "lc-main-heading" };
const _hoisted_2 = { class: "lc-main-heading__center" };
const _hoisted_3 = { class: "lc-main-heading__center__title" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "mainHeading",
  props: /* @__PURE__ */ mergeDefaults({
    title: String
  }, {
    title: "标题"
  }),
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          _cache[0] || (_cache[0] = createElementVNode(
            "div",
            { class: "lc-main-heading__center__lft" },
            [
              createElementVNode("img", {
                src: _imports_0,
                alt: ""
              })
            ],
            -1
            /* CACHED */
          )),
          createElementVNode(
            "div",
            _hoisted_3,
            toDisplayString(__props.title),
            1
            /* TEXT */
          ),
          _cache[1] || (_cache[1] = createElementVNode(
            "div",
            { class: "lc-main-heading__center__rgt" },
            [
              createElementVNode("img", {
                src: _imports_1,
                alt: ""
              })
            ],
            -1
            /* CACHED */
          ))
        ]),
        _cache[2] || (_cache[2] = createElementVNode(
          "div",
          { class: "lc-main-heading__pedestal" },
          null,
          -1
          /* CACHED */
        ))
      ]);
    };
  }
});
export {
  _sfc_main as default
};
