import { defineComponent, createElementBlock, openBlock, createElementVNode, createVNode, unref, toDisplayString } from "vue";
import { NNumberAnimation } from "naive-ui/es/number-animation";
import memoize from "lodash-es/memoize";
import { bigNumber, overflowStr } from "lowcode-share/es/share";
import './assets/headline/radiohead.css';import './assets/icon/iconCard.css';import './assets/icon/icon.css';import './assets/headline/headline.css';/* empty css               */
import LcSubhead from "./headline/subhead.js";
/* empty css            */
/* empty css              */
/* empty css                   */
const _hoisted_1 = { class: "lc-planning-indicators" };
const _hoisted_2 = { class: "lc-planning-indicators__header" };
const _hoisted_3 = { class: "lc-planning-indicators__item" };
const _hoisted_4 = { class: "lc-planning-indicators__item__left" };
const _hoisted_5 = { class: "lc-planning-indicators__item__title" };
const _hoisted_6 = { class: "lc-planning-indicators__item__left--value" };
const _hoisted_7 = { class: "lc-number-value" };
const _hoisted_8 = { class: "lc-number-unit" };
const _hoisted_9 = { class: "lc-planning-indicators__item__center" };
const _hoisted_10 = ["src"];
const _hoisted_11 = { class: "lc-planning-indicators__item__right" };
const _hoisted_12 = { class: "lc-planning-indicators__item__right" };
const _hoisted_13 = { class: "lc-planning-indicators__item__right--value" };
const _hoisted_14 = { class: "lc-number-value" };
const _hoisted_15 = { class: "lc-number-unit" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "planningIndicatorsCard",
  props: {
    unit: {},
    fixed: { type: Boolean, default: true },
    data: {}
  },
  setup(__props) {
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
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          createVNode(unref(LcSubhead), {
            text: (_a = _ctx.data) == null ? void 0 : _a.header,
            type: "center",
            "font-size": "12px",
            "max-length": 4
          }, null, 8, ["text"])
        ]),
        createElementVNode("div", _hoisted_3, [
          createElementVNode("div", _hoisted_4, [
            createElementVNode(
              "span",
              _hoisted_5,
              toDisplayString(formatedText((_c = (_b = _ctx.data) == null ? void 0 : _b.leftItem) == null ? void 0 : _c.title, (_e = (_d = _ctx.data) == null ? void 0 : _d.leftItem) == null ? void 0 : _e.maxLength)),
              1
              /* TEXT */
            ),
            createElementVNode("span", _hoisted_6, [
              createElementVNode("span", _hoisted_7, [
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
                _hoisted_8,
                toDisplayString(unref(renderUnit)((_i = _ctx.data) == null ? void 0 : _i.leftItem.value, (_j = _ctx.data) == null ? void 0 : _j.leftItem.unit, (_l = (_k = _ctx.data) == null ? void 0 : _k.leftItem) == null ? void 0 : _l.decimal)),
                1
                /* TEXT */
              )
            ])
          ]),
          createElementVNode("div", _hoisted_9, [
            createElementVNode("img", {
              src: (_m = _ctx.data) == null ? void 0 : _m.icon,
              alt: ""
            }, null, 8, _hoisted_10)
          ]),
          createElementVNode("div", _hoisted_11, [
            createElementVNode(
              "span",
              _hoisted_12,
              toDisplayString(formatedText((_o = (_n = _ctx.data) == null ? void 0 : _n.rightItem) == null ? void 0 : _o.title, (_q = (_p = _ctx.data) == null ? void 0 : _p.rightItem) == null ? void 0 : _q.maxLength)),
              1
              /* TEXT */
            ),
            createElementVNode("span", _hoisted_13, [
              createElementVNode("span", _hoisted_14, [
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
                _hoisted_15,
                toDisplayString(unref(renderUnit)((_w = (_v = _ctx.data) == null ? void 0 : _v.rightItem) == null ? void 0 : _w.value, (_y = (_x = _ctx.data) == null ? void 0 : _x.rightItem) == null ? void 0 : _y.unit, (_A = (_z = _ctx.data) == null ? void 0 : _z.rightItem) == null ? void 0 : _A.decimal)),
                1
                /* TEXT */
              )
            ])
          ])
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
