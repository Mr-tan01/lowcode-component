import { defineComponent, mergeDefaults, createElementBlock, openBlock, createElementVNode, toDisplayString, createVNode, unref } from "vue";
import _imports_0 from "./images/card/spot-bg.png.js";
import _imports_1 from "./images/card/big-substrate-bg.png.js";
import { NNumberAnimation } from "naive-ui/es/number-animation";
const _hoisted_1 = { class: "indicator-card-vice" };
const _hoisted_2 = { class: "indicator-card-vice__wrapper" };
const _hoisted_3 = { class: "indicator-card-vice__wrapper__label" };
const _hoisted_4 = { class: "indicator-card-vice__wrapper__value" };
const _hoisted_5 = { class: "indicator-card-vice__wrapper__value__num" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "indicatorCardArrows",
  props: /* @__PURE__ */ mergeDefaults({
    label: {
      type: String
    },
    value: {
      type: Number
    }
  }, {
    label: "已建成并投入运行设施(个)",
    value: 0
  }),
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _cache[1] || (_cache[1] = createElementVNode(
          "img",
          {
            src: _imports_0,
            alt: "",
            class: "spot-img spot-top"
          },
          null,
          -1
          /* CACHED */
        )),
        _cache[2] || (_cache[2] = createElementVNode(
          "img",
          {
            src: _imports_0,
            alt: "",
            class: "spot-img spot-down"
          },
          null,
          -1
          /* CACHED */
        )),
        createElementVNode("div", _hoisted_2, [
          createElementVNode(
            "div",
            _hoisted_3,
            toDisplayString(__props.label),
            1
            /* TEXT */
          ),
          createElementVNode("div", _hoisted_4, [
            createElementVNode("span", _hoisted_5, [
              createVNode(unref(NNumberAnimation), {
                "show-separator": "",
                from: 0,
                to: __props.value,
                active: "",
                precision: 0
              }, null, 8, ["to"])
            ]),
            _cache[0] || (_cache[0] = createElementVNode(
              "div",
              { class: "indicator-card-vice__wrapper__img" },
              [
                createElementVNode("img", {
                  src: _imports_1,
                  alt: ""
                })
              ],
              -1
              /* CACHED */
            ))
          ])
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
