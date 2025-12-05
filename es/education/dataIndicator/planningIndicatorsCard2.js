import { defineComponent, useCssVars, computed, createElementBlock, openBlock, createElementVNode, createVNode, unref, normalizeClass, toDisplayString } from "vue";
import { NNumberAnimation } from "naive-ui/es/number-animation";
import memoize from "lodash-es/memoize";
import { bigNumber, overflowStr } from "lowcode-share/es/share";
import './assets/headline/mainHeading.css';import './assets/headline/radiohead.css';import './assets/icon/iconCard.css';import './assets/icon/icon.css';import './assets/headline/headline.css';/* empty css               */
import LcSubhead from "./headline/subhead.js";
/* empty css            */
/* empty css              */
/* empty css                   */
/* empty css                     */
const _hoisted_1 = { class: "lc-planning-indicators" };
const _hoisted_2 = { class: "lc-planning-indicators__header" };
const _hoisted_3 = { class: "lc-planning-indicators__item__title" };
const _hoisted_4 = ["title"];
const _hoisted_5 = { class: "lc-number-value" };
const _hoisted_6 = { class: "lc-number-unit" };
const _hoisted_7 = { class: "lc-planning-indicators__item__center" };
const _hoisted_8 = ["src"];
const _hoisted_9 = { class: "lc-planning-indicators__item__title" };
const _hoisted_10 = ["title"];
const _hoisted_11 = { class: "lc-number-value" };
const _hoisted_12 = { class: "lc-number-unit" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "planningIndicatorsCard",
  props: {
    unit: {},
    fixed: { type: Boolean, default: true },
    direction: { default: "center" },
    data: {}
  },
  setup(__props) {
    useCssVars((_ctx) => ({
      "cc2487c6": leftOrderValue.value,
      "b836a3aa": centerOrderValue.value,
      "2aeb826c": rightOrderValue.value
    }));
    const renderValue = memoize(
      (value, decimal = 0) => {
        if (__props.fixed) {
          const { result } = bigNumber(value ?? 0, decimal);
          return result;
        }
        return value;
      },
      (value, decimal) => `${value}_${decimal}`
    );
    const renderUnit = memoize(
      (value, unit, decimal = 0) => {
        if (__props.fixed) {
          const { unit: numUnit } = bigNumber(value ?? 0, decimal);
          return `${numUnit}${unit ?? ""}`;
        }
        return unit ?? "";
      },
      (value, unit, decimal) => `${value}_${unit}_${decimal}`
    );
    const formatedText = (text, maxLength) => {
      if (!text) return "-";
      return overflowStr(text, maxLength);
    };
    const orderCSSValues = computed(() => {
      if (__props.direction === "left") return [2, 1, 3];
      if (__props.direction === "right") return [1, 3, 2];
      return [0, 0, 0];
    });
    const leftOrderValue = computed(() => {
      return orderCSSValues.value[0];
    });
    const centerOrderValue = computed(() => {
      return orderCSSValues.value[1];
    });
    const rightOrderValue = computed(() => {
      return orderCSSValues.value[2];
    });
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          createVNode(unref(LcSubhead), {
            text: (_a = _ctx.data) == null ? void 0 : _a.header,
            type: "center",
            "font-size": "12px",
            "max-length": _ctx.data.header.length ?? 4
          }, null, 8, ["text", "max-length"])
        ]),
        createElementVNode(
          "div",
          {
            class: normalizeClass(["lc-planning-indicators__item", [`dir-${_ctx.direction}`]])
          },
          [
            createElementVNode(
              "div",
              {
                class: normalizeClass(["lc-planning-indicators__item__left", [`dir-${_ctx.direction}`]])
              },
              [
                createElementVNode(
                  "span",
                  _hoisted_3,
                  toDisplayString(formatedText((_c = (_b = _ctx.data) == null ? void 0 : _b.leftItem) == null ? void 0 : _c.title, (_e = (_d = _ctx.data) == null ? void 0 : _d.leftItem) == null ? void 0 : _e.maxLength)),
                  1
                  /* TEXT */
                ),
                createElementVNode("span", {
                  class: "lc-planning-indicators__item__left--value",
                  title: String(_ctx.data.leftItem.value)
                }, [
                  createElementVNode("span", _hoisted_5, [
                    createVNode(unref(NNumberAnimation), {
                      "show-separator": "",
                      from: 0,
                      to: unref(renderValue)((_f = _ctx.data) == null ? void 0 : _f.leftItem.value, (_g = _ctx.data) == null ? void 0 : _g.leftItem.decimal),
                      active: "",
                      precision: (_h = _ctx.data) == null ? void 0 : _h.leftItem.decimal
                    }, null, 8, ["to", "precision"])
                  ]),
                  createElementVNode(
                    "span",
                    _hoisted_6,
                    toDisplayString(unref(renderUnit)((_i = _ctx.data) == null ? void 0 : _i.leftItem.value, (_j = _ctx.data) == null ? void 0 : _j.leftItem.unit, (_l = (_k = _ctx.data) == null ? void 0 : _k.leftItem) == null ? void 0 : _l.decimal)),
                    1
                    /* TEXT */
                  )
                ], 8, _hoisted_4)
              ],
              2
              /* CLASS */
            ),
            createElementVNode("div", _hoisted_7, [
              createElementVNode("img", {
                src: (_m = _ctx.data) == null ? void 0 : _m.icon,
                alt: ""
              }, null, 8, _hoisted_8)
            ]),
            createElementVNode(
              "div",
              {
                class: normalizeClass(["lc-planning-indicators__item__right", [`dir-${_ctx.direction}`]])
              },
              [
                createElementVNode(
                  "span",
                  _hoisted_9,
                  toDisplayString(formatedText((_o = (_n = _ctx.data) == null ? void 0 : _n.rightItem) == null ? void 0 : _o.title, (_q = (_p = _ctx.data) == null ? void 0 : _p.rightItem) == null ? void 0 : _q.maxLength)),
                  1
                  /* TEXT */
                ),
                createElementVNode("span", {
                  class: "lc-planning-indicators__item__right--value",
                  title: String(_ctx.data.rightItem.value)
                }, [
                  createElementVNode("span", _hoisted_11, [
                    createVNode(unref(NNumberAnimation), {
                      "show-separator": "",
                      from: 0,
                      to: unref(renderValue)((_r = _ctx.data) == null ? void 0 : _r.rightItem.value, (_t = (_s = _ctx.data) == null ? void 0 : _s.rightItem) == null ? void 0 : _t.decimal),
                      active: "",
                      precision: (_u = _ctx.data) == null ? void 0 : _u.rightItem.decimal
                    }, null, 8, ["to", "precision"])
                  ]),
                  createElementVNode(
                    "span",
                    _hoisted_12,
                    toDisplayString(unref(renderUnit)((_w = (_v = _ctx.data) == null ? void 0 : _v.rightItem) == null ? void 0 : _w.value, (_y = (_x = _ctx.data) == null ? void 0 : _x.rightItem) == null ? void 0 : _y.unit, (_A = (_z = _ctx.data) == null ? void 0 : _z.rightItem) == null ? void 0 : _A.decimal)),
                    1
                    /* TEXT */
                  )
                ], 8, _hoisted_10)
              ],
              2
              /* CLASS */
            )
          ],
          2
          /* CLASS */
        )
      ]);
    };
  }
});
export {
  _sfc_main as default
};
