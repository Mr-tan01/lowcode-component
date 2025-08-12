import { defineComponent, computed, ref, onMounted, openBlock, createElementBlock, createVNode, unref, withCtx, createElementVNode, Fragment, renderList, normalizeClass, normalizeStyle, toDisplayString, createCommentVNode } from "vue";
import LcElasticScrollbar from "./elasticScrollbar/index.js";
const _hoisted_1 = { class: "lc-ranking" };
const _hoisted_2 = { class: "lc-ranking__wrapper" };
const _hoisted_3 = { class: "lc-ranking__wrapper__item__top" };
const _hoisted_4 = { class: "lc-ranking__wrapper__item__top__start" };
const _hoisted_5 = { class: "lc-ranking__wrapper__item__top__start__index" };
const _hoisted_6 = { class: "lc-ranking__wrapper__item__top__start__label" };
const _hoisted_7 = { class: "lc-ranking__wrapper__item__top__end" };
const _hoisted_8 = { class: "lc-ranking__wrapper__item__top__end__value" };
const _hoisted_9 = { class: "lc-ranking__wrapper__item__top__end__unit" };
const _hoisted_10 = { class: "lc-ranking__wrapper__item__inner" };
const _hoisted_11 = {
  key: 0,
  class: "lc-ranking__wrapper__item__inner__ball"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ranking",
  props: {
    list: {},
    sort: { default: "order" },
    animateIndex: { default: 0 },
    type: { default: "ranking" },
    showBall: { type: Boolean, default: true }
  },
  setup(__props) {
    function complierTotal(data) {
      return data.reduce((pre, cur) => pre += cur.value, 0);
    }
    const total = computed(() => complierTotal(__props.list));
    const isAnimate = ref(__props.animateIndex);
    function getCurrentProportion(value) {
      if (!value) return 0;
      return value / total.value * 100 * isAnimate.value;
    }
    function getPreProportion(i) {
      return complierTotal(renderList$1.value.slice(0, i)) / total.value * 100 * isAnimate.value;
    }
    function fromValue(item) {
      if (typeof item.formatter === "function") {
        return item.formatter(item);
      }
      switch (item.formatter) {
        case "{b}":
          return (item.value / total.value * 100).toFixed(2);
        case "{a}":
          return item.value * total.value;
        default:
          return item.value;
      }
    }
    const renderList$1 = computed(() => {
      switch (__props.sort) {
        case "none":
          return __props.list;
        case "order":
          return __props.list.sort((a, b) => b.value - a.value);
        case "reverse":
          return __props.list.sort((a, b) => a.value - b.value);
        default:
          return __props.list;
      }
    });
    onMounted(() => {
      isAnimate.value = 1;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(LcElasticScrollbar), null, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_2, [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(renderList$1.value, (item, key) => {
                  return openBlock(), createElementBlock(
                    "div",
                    {
                      key,
                      class: normalizeClass(["lc-ranking__wrapper__item", [`lc-ranking__wrapper__item--${_ctx.type}`]]),
                      style: normalizeStyle({
                        "--proportion": getCurrentProportion(item.value),
                        "--ranking-num": key,
                        "--pre-proportion": getPreProportion(key)
                      })
                    },
                    [
                      createElementVNode("div", _hoisted_3, [
                        createElementVNode("div", _hoisted_4, [
                          createElementVNode(
                            "div",
                            _hoisted_5,
                            toDisplayString(key + 1),
                            1
                            /* TEXT */
                          ),
                          createElementVNode(
                            "div",
                            _hoisted_6,
                            toDisplayString(item.label),
                            1
                            /* TEXT */
                          )
                        ]),
                        createElementVNode("div", _hoisted_7, [
                          createElementVNode(
                            "div",
                            _hoisted_8,
                            toDisplayString(fromValue(item)),
                            1
                            /* TEXT */
                          ),
                          createElementVNode(
                            "div",
                            _hoisted_9,
                            toDisplayString(item.unit),
                            1
                            /* TEXT */
                          )
                        ])
                      ]),
                      createElementVNode("div", _hoisted_10, [
                        _cache[0] || (_cache[0] = createElementVNode(
                          "div",
                          { class: "lc-ranking__wrapper__item__inner__bar" },
                          null,
                          -1
                          /* HOISTED */
                        )),
                        _ctx.showBall ? (openBlock(), createElementBlock("div", _hoisted_11)) : createCommentVNode("v-if", true)
                      ])
                    ],
                    6
                    /* CLASS, STYLE */
                  );
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ]),
          _: 1
          /* STABLE */
        })
      ]);
    };
  }
});
export {
  _sfc_main as default
};
