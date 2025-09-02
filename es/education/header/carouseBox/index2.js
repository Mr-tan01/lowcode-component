import { defineComponent, mergeModels, useCssVars, ref, useModel, computed, shallowRef, watch, nextTick, onMounted, createElementBlock, openBlock, createElementVNode, createCommentVNode, unref, normalizeStyle, normalizeClass, Fragment, renderList, renderSlot, mergeProps, toDisplayString, mergeDefaults } from "vue";
import _imports_0 from "./images/lt-arrow.png.js";
import _imports_1 from "./images/rt-arrow.png.js";
import _imports_2 from "./images/top-arrow.png.js";
import throttle from "lodash-es/throttle";
import debounce from "lodash-es/debounce";
import { propsRaw } from "./props.js";
const _hoisted_1 = { class: "lc-carouse-box" };
const _hoisted_2 = { class: "lc-carouse-box__wrapper" };
const _hoisted_3 = ["onClick"];
const _hoisted_4 = ["title"];
const _hoisted_5 = {
  key: 0,
  class: "lc-carouse-box__track"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "carouseBox",
  props: /* @__PURE__ */ mergeModels(/* @__PURE__ */ mergeDefaults(propsRaw, {
    offsetAnimationTime: 250,
    rowKey: (item) => item.value ?? Math.random(),
    __skip_rowKey: true,
    showTrack: true,
    gap: 10,
    disabled: false,
    backCenter: true
  }), {
    "index": { default: -1 },
    "indexModifiers": {},
    "value": { default: "" },
    "valueModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["change"], ["update:index", "update:value"]),
  setup(__props, { emit: __emit }) {
    var _a;
    useCssVars((_ctx) => ({
      "6883b170": _ctx.gap,
      "b3b77d90": _ctx.offsetAnimationTime
    }));
    const carouseIndex = ref(0);
    const _isTransition = ref(true);
    const modelIndex = useModel(__props, "index");
    const modelValue = useModel(__props, "value");
    const listSource = computed(() => {
      return __props.list ?? [];
    });
    const showArrow = computed(() => !__props.disabled);
    if (modelIndex.value === -1) {
      modelIndex.value = ((_a = listSource.value) == null ? void 0 : _a.findIndex((item) => __props.rowKey(item) === modelValue.value)) ?? 0;
    }
    const $emit = __emit;
    const beforeAfterTempData = ref({
      before: [],
      after: [],
      appendCount: 0
    });
    const renderList$1 = computed(() => {
      const listClone = listSource.value ?? [];
      return [...beforeAfterTempData.value.before, ...listClone, ...beforeAfterTempData.value.after];
    });
    const isEven = computed(() => carouseIndex.value % 2 === 0);
    function initCarouseIndex() {
      carouseIndex.value = modelIndex.value;
    }
    initCarouseIndex();
    function createStepHandler(dir) {
      return throttle(() => {
        let currentIndex = carouseIndex.value + dir;
        if (currentIndex < 0) {
          currentIndex = renderList$1.value.length - 1;
        } else if (currentIndex >= renderList$1.value.length) {
          currentIndex = 0;
        }
        handleClick(renderList$1.value[currentIndex], currentIndex);
      }, __props.offsetAnimationTime);
    }
    const leftHandler = createStepHandler(-1);
    const rightHandler = createStepHandler(1);
    const tabButtonRef = shallowRef([]);
    const tabButtonParentElRef = shallowRef();
    const carouselTrainElRef = shallowRef();
    const forceCompile = ref(0);
    watch(
      () => __props.list,
      () => {
        updateCompile();
        nextTick(appendBeforeAfterData);
      },
      {
        deep: 1
      }
    );
    watch(
      () => modelIndex.value,
      () => {
        onParentElResize();
      }
    );
    onMounted(appendBeforeAfterData);
    function appendBeforeAfterData() {
      if (!clientRect.value) return;
      const { maxAppendCount } = clientRect.value;
      const appendCount = maxAppendCount;
      if (appendCount === 0) return;
      beforeAfterTempData.value.appendCount = appendCount;
      initCarouseIndex();
      carouseIndex.value += appendCount;
      if (__props.disabled) {
        beforeAfterTempData.value.before = [];
        beforeAfterTempData.value.after = [];
        return;
      }
      const listClone = listSource.value ?? [];
      beforeAfterTempData.value.before = listClone.slice(-appendCount).map(uuCloneKey);
      beforeAfterTempData.value.after = listClone.slice(0, appendCount).map(uuCloneKey);
    }
    function uuCloneKey(item, index) {
      return {
        ...item,
        value: __props.rowKey(item) + "_clone_" + index + "_" + Date.now()
      };
    }
    function updateCompile() {
      forceCompile.value++;
    }
    function onParentElResize() {
      if (!window.ResizeObserver || !tabButtonParentElRef.value) return;
      const observer = new ResizeObserver(
        debounce(() => {
          updateCompile();
          appendBeforeAfterData();
        }, __props.offsetAnimationTime)
      );
      observer.observe(tabButtonParentElRef.value);
    }
    onMounted(onParentElResize);
    const clientRect = computed(() => {
      var _a2;
      forceCompile.value++;
      if (!tabButtonParentElRef.value || !tabButtonRef.value || !carouselTrainElRef.value) return;
      const width = tabButtonParentElRef.value.offsetWidth;
      const buttonMapsWidth = {
        normal: 0,
        active: 0
      };
      for (let i = 0; i <= tabButtonRef.value.length; i++) {
        const buttonEl = tabButtonRef.value[i];
        if ((_a2 = buttonEl == null ? void 0 : buttonEl.classList) == null ? void 0 : _a2.contains("active")) {
          buttonMapsWidth.active = buttonEl.offsetWidth;
        } else {
          buttonMapsWidth.normal = buttonEl == null ? void 0 : buttonEl.offsetWidth;
        }
        if (buttonMapsWidth.active && buttonMapsWidth.normal) {
          break;
        }
      }
      const normalButtonWidth = buttonMapsWidth.normal;
      const activeButtonWidth = buttonMapsWidth.active;
      const maxCount = width / normalButtonWidth;
      const maxButtonCount = maxCount;
      const maxAppendCount = __props.disabled ? 0 : Math.round(maxCount);
      const carouselWidth = carouselTrainElRef.value.offsetWidth;
      return {
        normalButtonWidth: __props.backCenter ? normalButtonWidth : 0,
        maxButtonCount: __props.backCenter ? maxButtonCount : 0,
        carouselWidth: __props.backCenter ? carouselWidth : 0,
        maxAppendCount: __props.backCenter ? maxAppendCount : 0,
        offset: __props.backCenter ? activeButtonWidth / 2 : 0
        // 加上选中的按钮宽度一半, 让选中的按钮在中心点
      };
    });
    const carouselOffset = computed(() => {
      if (clientRect.value) {
        const { normalButtonWidth, maxButtonCount, offset, carouselWidth } = clientRect.value;
        const maxButtonCountHalf = maxButtonCount / 2;
        let offsetValue = (normalButtonWidth * (carouseIndex.value - maxButtonCountHalf) + offset) * -1;
        if (offsetValue >= 0) {
          offsetValue = 0;
        } else if (offsetValue <= -carouselWidth + normalButtonWidth * maxButtonCount) {
          offsetValue = -carouselWidth + normalButtonWidth * maxButtonCount;
        }
        return offsetValue;
      }
      return 0;
    });
    function requestAnimationFrame(callback) {
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(callback);
      } else {
        callback();
      }
    }
    function transitionCallabck(callback, isNextTick = true) {
      requestAnimationFrame(() => {
        if (isNextTick) {
          nextTick(setTimeout.bind(null, callback, __props.offsetAnimationTime));
        } else {
          setTimeout(callback, __props.offsetAnimationTime);
        }
      });
    }
    function transitionCallabckLoop(index) {
      transitionCallabck(() => {
        _isTransition.value = false;
        carouseIndex.value = index;
      }, false);
    }
    const handleClick = throttle((_item, index) => {
      if (__props.disabled) return;
      if (!_isTransition.value) {
        _isTransition.value = true;
      }
      const appendCount = beforeAfterTempData.value.appendCount;
      let _index = index - appendCount;
      if (modelIndex.value == _index) return;
      carouseIndex.value = index;
      if (_index < 0) {
        transitionCallabckLoop(listSource.value.length + _index + appendCount);
        _index = listSource.value.length - 1;
      } else if (_index >= listSource.value.length) {
        transitionCallabckLoop(appendCount);
        _index = 0;
      }
      modelIndex.value = _index;
      const _newItem = listSource.value[_index];
      modelValue.value = _newItem == null ? void 0 : _newItem.value;
      const _newChangeEventData = {
        index: _index,
        label: _newItem == null ? void 0 : _newItem.label,
        value: _newItem == null ? void 0 : _newItem.value,
        data: _newItem
      };
      $emit("change", _newChangeEventData);
    }, __props.offsetAnimationTime);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          showArrow.value ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "lc-carouse-box__wrapper__arrow arrow--left",
            onClick: _cache[0] || (_cache[0] = //@ts-ignore
            (...args) => unref(leftHandler) && unref(leftHandler)(...args))
          }, [..._cache[2] || (_cache[2] = [
            createElementVNode(
              "img",
              {
                class: "lc-carouse-box__wrapper__arrow--image",
                src: _imports_0,
                draggable: "false",
                alt: ""
              },
              null,
              -1
              /* CACHED */
            )
          ])])) : createCommentVNode("v-if", true),
          createElementVNode(
            "div",
            {
              ref_key: "tabButtonParentElRef",
              ref: tabButtonParentElRef,
              class: "lc-carouse-box__wrapper__tabs"
            },
            [
              createElementVNode(
                "div",
                {
                  ref_key: "carouselTrainElRef",
                  ref: carouselTrainElRef,
                  class: normalizeClass(["lc-carouse-box__wrapper__tabs--train", { "is-transition": _isTransition.value }]),
                  style: normalizeStyle({
                    "--carousel-offset": `translateX(${carouselOffset.value}px)`
                  })
                },
                [
                  (openBlock(true), createElementBlock(
                    Fragment,
                    null,
                    renderList(renderList$1.value, (item, index) => {
                      return openBlock(), createElementBlock("button", {
                        key: _ctx.rowKey(item),
                        ref_for: true,
                        ref_key: "tabButtonRef",
                        ref: tabButtonRef,
                        class: normalizeClass(["lc-carouse-box__wrapper__tabs--train__button", {
                          "active": carouseIndex.value === index,
                          "is-even": isEven.value
                        }]),
                        onClick: ($event) => unref(handleClick)(item, index)
                      }, [
                        renderSlot(_ctx.$slots, "default", mergeProps({ ref_for: true }, {
                          record: item,
                          isActive: carouseIndex.value === index,
                          isEven: isEven.value,
                          isTransition: _isTransition.value,
                          index,
                          handleClick: unref(handleClick)
                        }), () => [
                          createElementVNode("div", {
                            class: "lc-carouse-box__wrapper__tabs--train__button--text",
                            title: item.label
                          }, toDisplayString(item.label), 9, _hoisted_4)
                        ], true)
                      ], 10, _hoisted_3);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ],
                6
                /* CLASS, STYLE */
              )
            ],
            512
            /* NEED_PATCH */
          ),
          showArrow.value ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: "lc-carouse-box__wrapper__arrow arrow--right",
            onClick: _cache[1] || (_cache[1] = //@ts-ignore
            (...args) => unref(rightHandler) && unref(rightHandler)(...args))
          }, [..._cache[3] || (_cache[3] = [
            createElementVNode(
              "img",
              {
                class: "lc-carouse-box__wrapper__arrow--image",
                src: _imports_1,
                draggable: "false",
                alt: ""
              },
              null,
              -1
              /* CACHED */
            )
          ])])) : createCommentVNode("v-if", true)
        ]),
        _ctx.showTrack ? (openBlock(), createElementBlock("div", _hoisted_5, [
          renderSlot(_ctx.$slots, "track", {}, () => [
            _cache[4] || (_cache[4] = createElementVNode(
              "img",
              {
                class: "lc-carouse-box__track__image--pointer",
                src: _imports_2,
                draggable: "false",
                alt: ""
              },
              null,
              -1
              /* CACHED */
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
