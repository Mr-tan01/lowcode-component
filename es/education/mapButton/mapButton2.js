import { defineComponent, mergeModels, useModel, computed, createElementBlock, openBlock, createElementVNode, createVNode, unref, mergeProps, withCtx, renderSlot, createCommentVNode, createBlock, Fragment, renderList, normalizeClass, toDisplayString } from "vue";
import { NPopover } from "naive-ui";
import zoomin from "./images/zoom-in.png.js";
import zoomOut from "./images/zoom-out.png.js";
import MapBlock from "./comp/mapBlock.js";
import { defaultImageryLayerList } from "./const.js";
const _hoisted_1 = { class: "lcmapbutton" };
const _hoisted_2 = { class: "Lcswitch-map__tabs" };
const _hoisted_3 = { class: "popover-content" };
const _hoisted_4 = { class: "lcmapbutton-upside" };
const _hoisted_5 = ["title"];
const _hoisted_6 = { class: "lcmapbutton-imagery-panel" };
const _hoisted_7 = ["onClick"];
const _hoisted_8 = ["src", "alt"];
const _hoisted_9 = { class: "lcmapbutton-imagery-card__label" };
const _hoisted_10 = ["src", "alt", "onClick"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "mapButton",
  props: /* @__PURE__ */ mergeModels({
    placement: { default: "left-start" },
    imageryPlacement: { default: "left-start" },
    imageryLayerList: { default: () => defaultImageryLayerList }
  }, {
    "imageryLayer": {},
    "imageryLayerModifiers": {},
    "imageryLayerPopoverVisible": { type: Boolean, ...{ default: false } },
    "imageryLayerPopoverVisibleModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["iconClicked", "imageryLayerChange"], ["update:imageryLayer", "update:imageryLayerPopoverVisible"]),
  setup(__props, { emit: __emit }) {
    const images = [
      { src: zoomin, alt: "ZoomIn" },
      { src: zoomOut, alt: "ZoomOut" }
    ];
    const currentImageryLayer = useModel(__props, "imageryLayer");
    const imageryLayerPopoverVisible = useModel(__props, "imageryLayerPopoverVisible");
    const emit = __emit;
    const currentImageryLayerIndex = computed(() => {
      return Math.max(
        __props.imageryLayerList.findIndex((item) => item.value === currentImageryLayer.value),
        0
      );
    });
    const currentImageryLayerLabel = computed(() => {
      var _a;
      return ((_a = __props.imageryLayerList[currentImageryLayerIndex.value]) == null ? void 0 : _a.label) ?? "切换图层";
    });
    const handleClick = (alt) => {
      emit("iconClicked", alt);
    };
    const handleMapBlockItemClick = (item) => {
      emit("iconClicked", item);
    };
    const switchImageryLayer = (item) => {
      currentImageryLayer.value = item.value;
      imageryLayerPopoverVisible.value = false;
      emit("imageryLayerChange", item);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          createVNode(unref(NPopover), mergeProps(_ctx.$attrs, {
            placement: _ctx.placement,
            "show-arrow": false
          }), {
            trigger: withCtx(() => [
              renderSlot(_ctx.$slots, "trigger", {}, () => [
                createCommentVNode(' <img  src="./images/layer.png" alt="" /> '),
                _cache[1] || (_cache[1] = createElementVNode(
                  "div",
                  { class: "lcmapbutton-map-icon" },
                  null,
                  -1
                  /* CACHED */
                ))
              ], true)
            ]),
            default: withCtx(() => [
              createElementVNode("div", _hoisted_3, [
                renderSlot(_ctx.$slots, "content", {}, () => [
                  createVNode(MapBlock, { onItemClick: handleMapBlockItemClick })
                ], true)
              ])
            ]),
            _: 3
            /* FORWARDED */
          }, 16, ["placement"])
        ]),
        createElementVNode("div", _hoisted_4, [
          _ctx.imageryLayerList.length ? (openBlock(), createBlock(unref(NPopover), {
            key: 0,
            trigger: "hover",
            placement: _ctx.imageryPlacement,
            "show-arrow": false,
            show: imageryLayerPopoverVisible.value,
            "onUpdate:show": _cache[0] || (_cache[0] = ($event) => imageryLayerPopoverVisible.value = $event)
          }, {
            trigger: withCtx(() => [
              createElementVNode("button", {
                type: "button",
                class: "lcmapbutton-imagery-icon",
                title: currentImageryLayerLabel.value
              }, [..._cache[2] || (_cache[2] = [
                createElementVNode(
                  "span",
                  { class: "lcmapbutton-imagery-icon__image" },
                  null,
                  -1
                  /* CACHED */
                )
              ])], 8, _hoisted_5)
            ]),
            default: withCtx(() => [
              createElementVNode("div", _hoisted_6, [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList(_ctx.imageryLayerList, (item) => {
                    return openBlock(), createElementBlock("button", {
                      key: item.value,
                      type: "button",
                      class: normalizeClass(["lcmapbutton-imagery-card", { active: item.value === currentImageryLayer.value }]),
                      onClick: ($event) => switchImageryLayer(item)
                    }, [
                      item.preview ? (openBlock(), createElementBlock("img", {
                        key: 0,
                        class: "lcmapbutton-imagery-card__thumb",
                        src: item.preview,
                        alt: item.label
                      }, null, 8, _hoisted_8)) : createCommentVNode("v-if", true),
                      _cache[3] || (_cache[3] = createElementVNode(
                        "span",
                        { class: "lcmapbutton-imagery-card__mask" },
                        null,
                        -1
                        /* CACHED */
                      )),
                      createElementVNode(
                        "span",
                        _hoisted_9,
                        toDisplayString(item.label),
                        1
                        /* TEXT */
                      )
                    ], 10, _hoisted_7);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["placement", "show"])) : createCommentVNode("v-if", true),
          (openBlock(), createElementBlock(
            Fragment,
            null,
            renderList(images, (image, index) => {
              return createElementVNode("img", {
                key: index,
                class: "lcmapbutton-upside-icon",
                src: image.src,
                alt: image.alt,
                onClick: ($event) => handleClick(image.alt)
              }, null, 8, _hoisted_10);
            }),
            64
            /* STABLE_FRAGMENT */
          ))
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
