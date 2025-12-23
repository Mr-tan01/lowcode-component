import { defineComponent, mergeDefaults, useCssVars, computed, ref, onMounted, watch, nextTick, createElementBlock, openBlock, createElementVNode, withDirectives, normalizeStyle, Fragment, renderList, unref, toDisplayString, createVNode, withCtx, normalizeClass, renderSlot, vShow } from "vue";
import memoize from "lodash-es/memoize";
import LcElasticScrollbar from "./elasticScrollbar/index.js";
import LcEmpty from "./empty/index.js";
const _hoisted_1 = { class: "lc-desc-list" };
const _hoisted_2 = { class: "lc-desc-list__wrapper" };
const _hoisted_3 = ["title"];
const _hoisted_4 = { class: "lc-desc-list__tbody" };
const _hoisted_5 = ["title"];
const _hoisted_6 = { class: "lc-desc-list--empty" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "descTable",
  props: /* @__PURE__ */ mergeDefaults({
    columns: {
      type: Array,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    },
    // hoverTdIndex用于手动控制高亮的行，传入索引或索引数组
    hoverTdIndex: {
      type: Array
    },
    // 是否显示hover高亮左侧箭头
    showHoverArrow: {
      type: Boolean,
      default: true
    }
  }, {
    data: () => []
  }),
  setup(__props) {
    useCssVars((_ctx) => ({
      "feb06906": computedHoverArrowOpacity.value
    }));
    const tdCellTypeMap = {
      index: (_tdRecord, _thRecord, _tdIndex) => {
        return _tdIndex + 1;
      },
      default: (_tdRecord, _thRecord) => {
        const val = _tdRecord[_thRecord.dataIndex];
        return typeof val === "number" ? val : val || "-";
      }
    };
    const hasScrollbar = ref(false);
    const scrollbarRef = ref();
    function checkScrollbar() {
      if (scrollbarRef.value) {
        hasScrollbar.value = scrollbarRef.value.$el.scrollHeight > scrollbarRef.value.$el.clientHeight;
      }
    }
    onMounted(() => {
      checkScrollbar();
    });
    watch(
      () => __props.data,
      () => {
        nextTick(() => {
          checkScrollbar();
        });
      },
      { deep: true }
    );
    const getThCellNode = memoize((_record) => {
      return _record.title;
    });
    function createTdCellNode(_tdRecord, _thRecord, _tdIndex) {
      const renderHandler = _thRecord.type ? tdCellTypeMap[_thRecord.type] : tdCellTypeMap.default;
      return renderHandler(_tdRecord, _thRecord, _tdIndex);
    }
    const getTdCellNode = memoize(createTdCellNode, createTdCellNode);
    const customRecordStyle = memoize((thRecord) => {
      return {
        "--text-align": thRecord.align ?? "left",
        "--cell-flex": thRecord.flex ?? 1,
        "--cell-width": thRecord.width ?? "auto"
      };
    });
    function getTdCellSlotName(_thRecord) {
      return _thRecord.dataIndex ?? "default";
    }
    const computedHoverArrowOpacity = computed(() => {
      return __props.showHoverArrow ? "1" : "0";
    });
    function matchHoverTd(tdIndex) {
      if (__props.hoverTdIndex == null) return false;
      const hoverTdList = Array.isArray(__props.hoverTdIndex) ? __props.hoverTdIndex : [__props.hoverTdIndex];
      return hoverTdList == null ? void 0 : hoverTdList.some((i) => i === tdIndex);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          createElementVNode(
            "div",
            {
              class: "lc-desc-list__head",
              style: normalizeStyle({ paddingRight: hasScrollbar.value ? "6px" : "0" })
            },
            [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(__props.columns, (thRecord, thIndex) => {
                  return openBlock(), createElementBlock(
                    "div",
                    {
                      key: thIndex,
                      style: normalizeStyle(unref(customRecordStyle)(thRecord)),
                      class: "lc-desc-list__head--item"
                    },
                    [
                      createElementVNode("div", {
                        class: "lc-desc-list__head--item__cell",
                        title: unref(getThCellNode)(thRecord, thIndex)
                      }, toDisplayString(unref(getThCellNode)(thRecord, thIndex)), 9, _hoisted_3)
                    ],
                    4
                    /* STYLE */
                  );
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ],
            4
            /* STYLE */
          ),
          withDirectives(createVNode(
            unref(LcElasticScrollbar),
            {
              ref_key: "scrollbarRef",
              ref: scrollbarRef
            },
            {
              default: withCtx(() => [
                createElementVNode("div", _hoisted_4, [
                  (openBlock(true), createElementBlock(
                    Fragment,
                    null,
                    renderList(__props.data, (tdRecord, tdIndex) => {
                      return openBlock(), createElementBlock(
                        "div",
                        {
                          key: tdIndex,
                          class: normalizeClass(["lc-desc-list__tbody__tr", { "tr-hover": matchHoverTd(tdIndex) }])
                        },
                        [
                          (openBlock(true), createElementBlock(
                            Fragment,
                            null,
                            renderList(__props.columns, (thRecord, thIndex) => {
                              return openBlock(), createElementBlock(
                                "div",
                                {
                                  key: thIndex,
                                  class: "lc-desc-list__tbody__tr__cell",
                                  style: normalizeStyle(unref(customRecordStyle)(thRecord))
                                },
                                [
                                  renderSlot(_ctx.$slots, getTdCellSlotName(thRecord), {
                                    record: tdRecord,
                                    index: tdIndex,
                                    column: thRecord,
                                    colIndex: thIndex,
                                    value: unref(getTdCellNode)(tdRecord, thRecord, tdIndex)
                                  }, () => [
                                    createElementVNode("span", {
                                      class: "lc-desc-list__tbody__tr__cell__span",
                                      title: unref(getTdCellNode)(tdRecord, thRecord, tdIndex)
                                    }, toDisplayString(unref(getTdCellNode)(tdRecord, thRecord, tdIndex)), 9, _hoisted_5)
                                  ], true)
                                ],
                                4
                                /* STYLE */
                              );
                            }),
                            128
                            /* KEYED_FRAGMENT */
                          ))
                        ],
                        2
                        /* CLASS */
                      );
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])
              ]),
              _: 3
              /* FORWARDED */
            },
            512
            /* NEED_PATCH */
          ), [
            [vShow, __props.data.length]
          ]),
          withDirectives(createElementVNode(
            "div",
            _hoisted_6,
            [
              renderSlot(_ctx.$slots, "empty", {}, () => [
                createVNode(unref(LcEmpty))
              ], true)
            ],
            512
            /* NEED_PATCH */
          ), [
            [vShow, !__props.data.length]
          ])
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
