import { defineComponent, mergeModels, useModel, computed, createElementBlock, openBlock, createElementVNode, renderSlot, createVNode, unref, withCtx, normalizeClass, createCommentVNode, Fragment, renderList, toDisplayString } from "vue";
import _imports_0 from "./images/right-arrow.png.js";
import { NPopover } from "naive-ui/es/popover";
import LcCarouseBox from "./carouseBox/index.js";
const _hoisted_1 = { class: "lcc-header" };
const _hoisted_2 = { class: "lcc-header__prefix-slot" };
const _hoisted_3 = { class: "lcc-header__wrapper" };
const _hoisted_4 = { class: "lcc-header__wrapper__navs" };
const _hoisted_5 = ["onClick"];
const _hoisted_6 = {
  key: 0,
  class: "lcc-header__wrapper__navs__drop"
};
const _hoisted_7 = { class: "lcc-header__wrapper__navs__drop__group__label" };
const _hoisted_8 = ["title"];
const _hoisted_9 = { class: "lcc-header__wrapper__navs__drop__group__item__group" };
const _hoisted_10 = ["onClick"];
const _hoisted_11 = { class: "lcc-header__suffix-slot" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "header",
  props: /* @__PURE__ */ mergeModels({
    navDatas: {},
    hideArrow: { type: Boolean },
    highlightHandler: { type: Function }
  }, {
    "selectedKey": { default: "" },
    "selectedKeyModifiers": {},
    "index": { default: 0 },
    "indexModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["jump", "scroll"], ["update:selectedKey", "update:index"]),
  setup(__props, { emit: __emit }) {
    const selectedKey = useModel(__props, "selectedKey");
    const modelIndex = useModel(__props, "index");
    const listSource = computed(() => {
      return __props.navDatas === void 0 ? [] : __props.navDatas;
    });
    const $emit = __emit;
    function jump({ parent, item, index, handleClick }) {
      var _a;
      selectedKey.value = ((_a = __props.highlightHandler) == null ? void 0 : _a.call(__props, item)) ?? item.path;
      if (parent && !__props.hideArrow && handleClick) {
        handleClick(parent, index);
      }
      $emit("jump", { parent, item, index });
    }
    function carouseChange(value) {
      $emit("scroll", value);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          renderSlot(_ctx.$slots, "prefix", {}, void 0, true)
        ]),
        createElementVNode("div", _hoisted_3, [
          createElementVNode("div", _hoisted_4, [
            createVNode(unref(LcCarouseBox), {
              index: modelIndex.value,
              "onUpdate:index": _cache[0] || (_cache[0] = ($event) => modelIndex.value = $event),
              disabled: _ctx.hideArrow,
              list: listSource.value,
              "show-track": false,
              onChange: carouseChange
            }, {
              default: withCtx(({ index, record, isActive, handleClick }) => [
                createElementVNode(
                  "div",
                  {
                    class: normalizeClass(["lcc-header__wrapper__navs__item", {
                      active: isActive
                    }])
                  },
                  [
                    createVNode(
                      unref(NPopover),
                      {
                        trigger: "hover",
                        "arrow-class": "header-arrow-class",
                        class: "header-popover-class"
                      },
                      {
                        trigger: withCtx(() => [
                          createElementVNode("a", {
                            class: "lcc-header__wrapper__navs__item__link",
                            onClick: ($event) => jump({
                              item: record,
                              index
                            })
                          }, toDisplayString(record.label), 9, _hoisted_5)
                        ]),
                        default: withCtx(() => {
                          var _a;
                          return [
                            ((_a = record.list) == null ? void 0 : _a.length) ? (openBlock(), createElementBlock("div", _hoisted_6, [
                              (openBlock(true), createElementBlock(
                                Fragment,
                                null,
                                renderList(record.list, (el, key) => {
                                  return openBlock(), createElementBlock("div", {
                                    key,
                                    class: "lcc-header__wrapper__navs__drop__group"
                                  }, [
                                    createElementVNode("div", _hoisted_7, [
                                      _cache[1] || (_cache[1] = createElementVNode(
                                        "div",
                                        { class: "lcc-header__wrapper__navs__drop__group__label--icon" },
                                        [
                                          createElementVNode("img", {
                                            class: "lcc-header__wrapper__navs__drop__group__label--icon--image",
                                            src: _imports_0,
                                            alt: ""
                                          })
                                        ],
                                        -1
                                        /* CACHED */
                                      )),
                                      createElementVNode("div", {
                                        class: "lcc-header__wrapper__navs__drop__group__label--text",
                                        title: el.label
                                      }, toDisplayString(el.label), 9, _hoisted_8)
                                    ]),
                                    createElementVNode("div", _hoisted_9, [
                                      (openBlock(true), createElementBlock(
                                        Fragment,
                                        null,
                                        renderList(el.children, (child, ckey) => {
                                          return openBlock(), createElementBlock("div", {
                                            key: ckey,
                                            class: normalizeClass(["lcc-header__wrapper__navs__drop__group__item__group__nav", {
                                              highlight: isActive && selectedKey.value === child.path || selectedKey.value === child.label
                                            }]),
                                            onClick: ($event) => jump({
                                              parent: el,
                                              item: child,
                                              index,
                                              handleClick
                                            })
                                          }, toDisplayString(child.label), 11, _hoisted_10);
                                        }),
                                        128
                                        /* KEYED_FRAGMENT */
                                      ))
                                    ])
                                  ]);
                                }),
                                128
                                /* KEYED_FRAGMENT */
                              ))
                            ])) : createCommentVNode("v-if", true)
                          ];
                        }),
                        _: 2
                        /* DYNAMIC */
                      },
                      1024
                      /* DYNAMIC_SLOTS */
                    )
                  ],
                  2
                  /* CLASS */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["index", "disabled", "list"])
          ])
        ]),
        createElementVNode("div", _hoisted_11, [
          renderSlot(_ctx.$slots, "suffix", {}, void 0, true)
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
