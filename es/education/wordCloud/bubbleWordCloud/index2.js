import { defineComponent, ref, useTemplateRef, computed, openBlock, createElementBlock, normalizeClass, createElementVNode, unref, toDisplayString, Fragment, renderList, normalizeStyle } from "vue";
import { useResizeObserver } from "@vueuse/core";
import debounce from "lodash-es/debounce";
const _hoisted_1 = { class: "lc-word-cloud__wrapper__title" };
const _hoisted_2 = ["onClick"];
const _hoisted_3 = { class: "lc-word-cloud__wrapper__item__text" };
const _hoisted_4 = { class: "lc-word-cloud__wrapper__item__tooltip" };
const _hoisted_5 = { class: "lc-word-cloud__wrapper__item__tooltip__text" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "bubbleWordCloud",
  props: {
    gridSize: {},
    maxWord: { default: 50 },
    data: { default: () => [] },
    ballSize: { default: 30 },
    title: { default: "中心词汇" },
    tooltip: { default: () => ({
      formatter: (record) => record.name + " " + record.value
    }) },
    word: { default: () => ({
      formatter: (record) => record.name
    }) },
    enableAnimate: { type: Boolean, default: true },
    animateSpeed: { default: 100 },
    animateStep: { default: 0.05 },
    type: { default: "circle" }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const forceCompute = ref(0);
    const animateCount = ref(0);
    const wordCloudWrapperRef = useTemplateRef("wordCloudWrapper");
    useResizeObserver(wordCloudWrapperRef, () => {
      forceCompute.value++;
    });
    const renderData = computed(() => __props.data.sort((a, b) => a.value - b.value));
    const $emit = __emit;
    function wordClick(record, index) {
      $emit("click", record, index);
    }
    const wordCloudWrapperBounds = computed(() => {
      var _a;
      const { width = 0, height = 0 } = ((_a = wordCloudWrapperRef.value) == null ? void 0 : _a.getBoundingClientRect()) ?? {};
      return {
        width,
        height,
        radiusWidth: width / 2,
        radiusHeight: height / 2
      };
    });
    const dataLength = computed(() => renderData.value.length);
    const _baseAngle = Math.PI / 360;
    let speed = 1;
    const angleX = ref(speed * _baseAngle);
    const angleY = ref(-1 * _baseAngle);
    let x, y, z, cos, sin = 0;
    function rotateX() {
      cos = Math.cos(angleX.value);
      sin = Math.sin(angleX.value);
      y = y * cos - z * sin;
      z = z * cos + y * sin;
    }
    function rotateY() {
      cos = Math.cos(angleY.value);
      sin = Math.sin(angleY.value);
      x = x * cos - z * sin;
      z = z * cos + x * sin;
    }
    function customWordStyle(item, index) {
      const { radiusHeight, radiusWidth } = wordCloudWrapperBounds.value ?? {};
      if (!radiusHeight || !radiusWidth) return {};
      let angleA = Math.acos((2 * (index + 1) - 1) / dataLength.value - 1);
      let angleB = angleA * Math.sqrt(dataLength.value * Math.PI);
      z = radiusHeight * Math.cos(angleA);
      y = radiusHeight * Math.sin(angleA - animateCount.value) * Math.sin(angleB - animateCount.value);
      x = radiusHeight * Math.sin(angleA - animateCount.value) * Math.cos(angleB - animateCount.value);
      rotateX();
      rotateY();
      return {
        "left": `${x + radiusWidth}px`,
        "top": `${y + radiusHeight}px`,
        "transform": `translate(-50%, -50%, ${z}px)`,
        "transformOrigin": "50% 50%",
        "--word-ball-size": `${Math.max(item.value / __props.maxWord * __props.ballSize, 30)}px`,
        "--word-font-size": `${Math.max(item.value / __props.maxWord * 10, 12)}px`,
        "--word-opacity": 1,
        "---inset-shadow-color": z > 0 ? "#0FFBF8" : "transparent",
        "---background-color": "rgba(34, 118, 252, 0.2)",
        "--word-color": item.color ?? "#DBFAFF"
      };
    }
    const _autRotateAnimate = () => {
      animateCount.value += __props.animateStep;
      setTimeout(() => {
        requestAnimationFrame(autoRotate);
      }, __props.animateSpeed);
    };
    let autoRotate = _autRotateAnimate;
    if (__props.enableAnimate) {
      autoRotate();
    }
    const wrapperMosueMove = debounce((event) => {
      const { width, height } = wordCloudWrapperBounds.value ?? {};
      angleY.value = event.offsetX / width * 100 * speed * _baseAngle;
      angleX.value = event.offsetY / height * 100 * speed * _baseAngle;
      animateCount.value = 0;
      autoRotate = () => {
      };
    }, 10);
    function wrapperMosueLeave() {
      angleX.value = speed * _baseAngle;
      angleY.value = -1 * _baseAngle;
      if (__props.enableAnimate) {
        autoRotate = _autRotateAnimate;
        autoRotate();
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass(["lc-word-cloud", [`lc-word-cloud--${_ctx.type}`]])
        },
        [
          createElementVNode(
            "div",
            {
              ref: "wordCloudWrapper",
              class: "lc-word-cloud__wrapper",
              onMousemoveCapture: _cache[0] || (_cache[0] = //@ts-ignore
              (...args) => unref(wrapperMosueMove) && unref(wrapperMosueMove)(...args)),
              onMouseleaveCapture: wrapperMosueLeave
            },
            [
              createElementVNode(
                "div",
                _hoisted_1,
                toDisplayString(_ctx.title),
                1
                /* TEXT */
              ),
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(renderData.value, (item, index) => {
                  var _a, _b, _c, _d;
                  return openBlock(), createElementBlock("div", {
                    key: item.name,
                    class: "lc-word-cloud__wrapper__item",
                    style: normalizeStyle(customWordStyle(item, index)),
                    onClick: ($event) => wordClick(item, index)
                  }, [
                    createElementVNode(
                      "div",
                      _hoisted_3,
                      toDisplayString((_b = (_a = _ctx.word) == null ? void 0 : _a.formatter) == null ? void 0 : _b.call(_a, item, index)),
                      1
                      /* TEXT */
                    ),
                    createElementVNode("div", _hoisted_4, [
                      createElementVNode(
                        "div",
                        _hoisted_5,
                        toDisplayString((_d = (_c = _ctx.tooltip) == null ? void 0 : _c.formatter) == null ? void 0 : _d.call(_c, item, index)),
                        1
                        /* TEXT */
                      )
                    ])
                  ], 12, _hoisted_2);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ],
            544
            /* NEED_HYDRATION, NEED_PATCH */
          )
        ],
        2
        /* CLASS */
      );
    };
  }
});
export {
  _sfc_main as default
};
