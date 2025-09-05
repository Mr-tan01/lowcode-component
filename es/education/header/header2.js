import { defineComponent, mergeModels, useModel, computed, ref, useTemplateRef, watch, openBlock, createElementBlock, createElementVNode, renderSlot, createVNode, unref, withCtx, normalizeClass, mergeProps, toDisplayString, Fragment, renderList, normalizeStyle, createCommentVNode } from "vue";
import _imports_0 from "./images/right-arrow.png.js";
import { NPopover } from "naive-ui/es/popover";
import { scale } from "mmjs-core";
import LcCarouseBox from "./carouseBox/index.js";
const _hoisted_1 = { class: "lcc-header__prefix-slot" };
const _hoisted_2 = { class: "lcc-header__wrapper" };
const _hoisted_3 = { class: "lcc-header__wrapper__navs" };
const _hoisted_4 = ["onClick", "onMouseover"];
const _hoisted_5 = {
  key: 0,
  class: "lcc-header__wrapper__navs__drop"
};
const _hoisted_6 = { class: "lcc-header__wrapper__navs__drop__group__label" };
const _hoisted_7 = ["title"];
const _hoisted_8 = { class: "lcc-header__wrapper__navs__drop__group__item__group" };
const _hoisted_9 = ["onClick"];
const _hoisted_10 = { class: "lcc-header__suffix-slot" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "header",
  props: /* @__PURE__ */ mergeModels({
    navDatas: {},
    hideArrow: { type: Boolean },
    menuItemWidth: { default: "fixed" },
    highlightHandler: { type: Function, default: null }
  }, {
    "selectedKey": { default: "" },
    "selectedKeyModifiers": {},
    "index": { default: 0 },
    "indexModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["jump", "scroll", "handleMouseover", "handleMouseleave"], ["update:selectedKey", "update:index"]),
  setup(__props, { emit: __emit }) {
    const selectedKey = useModel(__props, "selectedKey");
    const modelIndex = useModel(__props, "index");
    const listSource = computed(() => {
      return __props.navDatas === void 0 ? [] : __props.navDatas;
    });
    const maxWidth = ref(0);
    const fontSize = ref(16);
    const headerRef = useTemplateRef("headerRef");
    function calculateTextWidth(text) {
      const chineseCharRegex = /[\u4e00-\u9fa5]/g;
      const englishCharRegex = /[a-zA-Z]/g;
      const chineseCount = (text.match(chineseCharRegex) || []).length;
      const englishCount = (text.match(englishCharRegex) || []).length;
      const width = chineseCount * fontSize.value + englishCount * fontSize.value * 0.5;
      return scale(width);
    }
    const popoverW = computed(() => {
      const screenWidth = document.body.clientWidth;
      return `${scale(screenWidth / 1.8)}px`;
    });
    const popoverH = computed(() => {
      let headerDistTop = 0;
      if (headerRef.value) {
        headerDistTop = headerRef.value.getBoundingClientRect().top;
      }
      const screenHeight = document.body.clientWidth;
      return `${scale(screenHeight / 2.3 - Number(headerDistTop.toFixed(0)))}px`;
    });
    watch(
      () => __props.navDatas,
      (newVal) => {
        if (newVal == null ? void 0 : newVal.length) {
          const allChildren = newVal.flatMap((item) => {
            var _a;
            return ((_a = item.list) == null ? void 0 : _a.flatMap((el) => el.children)) || [];
          });
          const allLabels = [...newVal.map((item) => item.label), ...allChildren.map((child) => child.label)];
          if (__props.menuItemWidth === "fixed") {
            const widths = allLabels.map((label) => calculateTextWidth(label));
            maxWidth.value = Math.max(...widths);
          } else {
            maxWidth.value = 0;
          }
        }
      },
      { immediate: true, deep: true }
    );
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
    function handleMouseover(record, index) {
      $emit("handleMouseover", { item: record, modelIndex: modelIndex.value, index });
    }
    function handleMouseleave() {
      $emit("handleMouseleave");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          ref_key: "headerRef",
          ref: headerRef,
          class: "lcc-header"
        },
        [
          createElementVNode("div", _hoisted_1, [
            renderSlot(_ctx.$slots, "prefix", {}, void 0, true)
          ]),
          createElementVNode("div", _hoisted_2, [
            createElementVNode("div", _hoisted_3, [
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
                      createVNode(unref(NPopover), mergeProps({ trigger: "hover" }, _ctx.$attrs, {
                        placement: "bottom",
                        "arrow-class": "header-arrow-class",
                        class: "header-popover-class",
                        style: { "--popover-w": popoverW.value, "--popover-h": popoverH.value }
                      }), {
                        trigger: withCtx(() => [
                          createElementVNode("a", {
                            class: "lcc-header__wrapper__navs__item__link",
                            onClick: ($event) => jump({
                              item: record,
                              index
                            }),
                            onMouseover: ($event) => handleMouseover(record, index),
                            onMouseleave: handleMouseleave
                          }, toDisplayString(record.label), 41, _hoisted_4)
                        ]),
                        default: withCtx(() => {
                          var _a;
                          return [
                            ((_a = record.list) == null ? void 0 : _a.length) ? (openBlock(), createElementBlock("div", _hoisted_5, [
                              (openBlock(true), createElementBlock(
                                Fragment,
                                null,
                                renderList(record.list, (el, key) => {
                                  return openBlock(), createElementBlock(
                                    "div",
                                    {
                                      key,
                                      class: "lcc-header__wrapper__navs__drop__group",
                                      style: normalizeStyle({
                                        "--group-min-width": _ctx.menuItemWidth === "fixed" ? maxWidth.value + "px" : "auto"
                                      })
                                    },
                                    [
                                      createElementVNode("div", _hoisted_6, [
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
                                          /* HOISTED */
                                        )),
                                        createElementVNode("div", {
                                          class: "lcc-header__wrapper__navs__drop__group__label--text",
                                          title: el.label,
                                          style: normalizeStyle({ "--font-size": fontSize.value + "px" })
                                        }, toDisplayString(el.label), 13, _hoisted_7)
                                      ]),
                                      createElementVNode("div", _hoisted_8, [
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
                                            }, toDisplayString(child.label), 11, _hoisted_9);
                                          }),
                                          128
                                          /* KEYED_FRAGMENT */
                                        ))
                                      ])
                                    ],
                                    4
                                    /* STYLE */
                                  );
                                }),
                                128
                                /* KEYED_FRAGMENT */
                              ))
                            ])) : createCommentVNode("v-if", true)
                          ];
                        }),
                        _: 2
                        /* DYNAMIC */
                      }, 1040, ["style"])
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
          createElementVNode("div", _hoisted_10, [
            renderSlot(_ctx.$slots, "suffix", {}, void 0, true)
          ])
        ],
        512
        /* NEED_PATCH */
      );
    };
  }
});
export {
  _sfc_main as default
};
