import { defineComponent, openBlock, createElementBlock, normalizeClass, createVNode, unref, withCtx, Fragment, renderList, createBlock, normalizeStyle, createElementVNode, toDisplayString } from "vue";
import { NGrid, NGi } from "naive-ui";
import LcElasticScrollbar from "./elasticScrollbar/index.js";
const _hoisted_1 = ["title"];
const _hoisted_2 = ["title"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "listBox",
  props: {
    rows: { default: () => [] },
    rowStyle: { default: () => ({}) },
    bordered: { type: Boolean, default: false },
    keyStyle: { default: () => ({
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }) },
    valueStyle: { default: () => ({
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }) },
    cellPadding: { default: "12px 15px" },
    defaultAlign: {},
    gap: { default: 0 },
    cols: { default: 2 }
  },
  setup(__props) {
    const getKeyCellStyle = (index) => {
      var _a;
      const style = {
        whiteSpace: "pre",
        flex: "4 1 0%",
        backgroundColor: "#063B6B",
        ...__props.keyStyle,
        padding: __props.cellPadding || "12px 15px",
        textAlign: __props.keyStyle.textAlign || "left",
        ...((_a = __props.rows[index]) == null ? void 0 : _a.keyStyle) || {}
      };
      if (__props.bordered) {
        style.borderLeft = "1px solid #07467a";
        style.borderTop = "1px solid #07467a";
        style.borderBottom = "1px solid #07467a";
        if (index === __props.rows.length - 1) {
          style.borderRight = "1px solid #07467a";
        }
      }
      return style;
    };
    const getValueCellStyle = (index) => {
      var _a;
      const style = {
        whiteSpace: "pre",
        flex: "6 1 0%",
        backgroundColor: "#063661",
        ...__props.valueStyle,
        padding: __props.cellPadding || "12px 15px",
        textAlign: __props.valueStyle.textAlign || "left",
        ...((_a = __props.rows[index]) == null ? void 0 : _a.valueStyle) || {}
      };
      if (__props.bordered) {
        style.borderTop = "1px solid #07467A";
        style.borderBottom = "1px solid #07467A";
        style.borderRight = "1px solid #07467A";
        style.borderLeft = "1px solid #07467A";
      }
      return style;
    };
    const getRowStyle = (index) => {
      const style = {
        display: "flex",
        width: "100%"
      };
      if (index % 2 === 0 && __props.rowStyle.even) {
        Object.assign(style, __props.rowStyle.even);
      } else if (index % 2 !== 0 && __props.rowStyle.odd) {
        Object.assign(style, __props.rowStyle.odd);
      }
      return style;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass(["dynamic-data-list", { "is-bordered": _ctx.bordered }])
        },
        [
          createVNode(unref(LcElasticScrollbar), null, {
            default: withCtx(() => [
              createVNode(unref(NGrid), {
                "x-gap": _ctx.gap,
                cols: _ctx.cols
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(
                    Fragment,
                    null,
                    renderList(_ctx.rows, (row, rowIndex) => {
                      return openBlock(), createBlock(unref(NGi), {
                        key: `row-${rowIndex}`,
                        class: "list-row",
                        style: normalizeStyle(getRowStyle(rowIndex))
                      }, {
                        default: withCtx(() => [
                          createElementVNode("div", {
                            class: "key-cell",
                            style: normalizeStyle(getKeyCellStyle(rowIndex)),
                            title: row.indicatorName
                          }, toDisplayString(row.indicatorName), 13, _hoisted_1),
                          createElementVNode("div", {
                            class: "value-cell",
                            style: normalizeStyle(getValueCellStyle(rowIndex)),
                            title: row.indicatorValue
                          }, toDisplayString(row.indicatorValue), 13, _hoisted_2)
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["style"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ]),
                _: 1
                /* STABLE */
              }, 8, ["x-gap", "cols"])
            ]),
            _: 1
            /* STABLE */
          })
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
