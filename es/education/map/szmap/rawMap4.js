import { defineComponent as x, mergeDefaults as K, useCssVars as R, ref as N, onMounted as T, computed as v, openBlock as u, createElementBlock as c, createVNode as C, createElementVNode as d, Fragment as p, renderList as g, mergeProps as w, resolveDynamicComponent as j, createBlock as H, createCommentVNode as V, renderSlot as O, unref as S } from "vue";
import Y from "./comp/sshzq.js";
import q from "./comp/baoan.js";
import U from "./comp/dapeng.js";
import W from "./comp/futian.js";
import J from "./comp/guangming.js";
import Q from "./comp/longgang.js";
import Z from "./comp/luohu.js";
import ee from "./comp/pingshan.js";
import re from "./comp/yantian.js";
import ae from "./comp/nanshan.js";
import le from "./comp/longhua.js";
import oe from "./comp/defines.js";
import te from "./comp/labels2.js";
import ne from "../mark/index2.js";
import { propsRaw as se } from "./props.js";
import { LabelModelEnum as G, defFloatLevelConfig as ue, szBlockNames as n, defBlockLableMap as ie } from "./const.js";
import ce from "lodash-es/merge";
const fe = { class: "lc-szmap-raw" }, me = {
  class: "lc-szmap-raw__svg",
  viewBox: "0 0 922 527",
  version: "1.1"
}, ve = ["id"], de = {
  id: "页面-2",
  stroke: "none",
  "stroke-width": "1",
  fill: "none",
  "fill-rule": "evenodd"
}, pe = {
  id: "编组-76",
  transform: "translate(4, 0)"
}, ge = {
  id: "编组",
  transform: "translate(0, 35)",
  "fill-rule": "nonzero"
}, ke = {
  key: 0,
  class: "lc-szmap-raw__mark-group"
}, Ae = /* @__PURE__ */ x({
  __name: "rawMap",
  props: /* @__PURE__ */ K(se, {
    showLabel: !0,
    levels: () => ({}),
    values: () => ({}),
    fillModel: "default",
    rotateX: 0,
    disabledGradient: !1,
    labelModel: () => G.DEFAULT
  }),
  emits: ["markClick", "markMouseover", "markMouseleave"],
  setup(f, { emit: E }) {
    R((e) => ({
      "73775af0": X.value,
      71406913: A.value
    }));
    const k = {
      [n.光明]: J,
      [n.宝安]: q,
      [n.龙华]: le,
      [n.南山]: ae,
      [n.福田]: W,
      [n.罗湖]: Z,
      [n.盐田]: re,
      [n.坪山]: ee,
      [n.龙岗]: Q,
      [n.大鹏新区]: U,
      [n.深汕合作区]: Y
    }, b = N(0), M = E, _ = N("");
    function h(e) {
      const s = f.values[e] ?? { value: 0 }, o = m.value.findIndex(([t, l]) => {
        var L, i;
        return s.value >= ((L = l == null ? void 0 : l.range) == null ? void 0 : L[0]) && s.value <= ((i = l == null ? void 0 : l.range) == null ? void 0 : i[1]);
      }), [r, a] = m.value[o] ?? [];
      return {
        ...s,
        mapLabel: ie[e],
        style: {
          "--level-scale": b.value ? (a == null ? void 0 : a.scale) ?? 1 : b.value
        }
      };
    }
    function $(e) {
      M("markClick", h(e));
    }
    T(() => {
      setTimeout(() => {
        b.value = 1;
      }, 300);
    });
    const I = v(() => ["lc-szmap-raw__block", `visible--${f.fillModel}`]), m = v(() => Object.entries(ce({}, ue, f.levels)));
    function P(e) {
      const s = f.values[e];
      if (!s || f.disabledGradient) return {};
      const o = m.value.findIndex(
        ([L, i]) => {
          var y, B;
          return s.value >= ((y = i == null ? void 0 : i.range) == null ? void 0 : y[0]) && s.value <= ((B = i == null ? void 0 : i.range) == null ? void 0 : B[1]);
        }
      ), [r, a] = m.value[o] ?? [];
      let t = [], l = {};
      return a && r && (t.push("float-active"), typeof a.stop == "string" ? l["--linear-gradient-fill"] = a.stop : l["--linear-gradient-fill"] = `url(#linearGradient-float-${r})`), {
        class: t,
        style: l
      };
    }
    const X = v(() => `rotateX(${f.rotateX}deg)`), A = v(() => Math.abs(f.rotateX)), z = (e) => ["lc-szmap-raw__mark-group--item", `mark-${e}`];
    function D(e) {
      f.labelModel === G.HOVER && (_.value = e, M("markMouseover", e));
    }
    const F = (e, s) => {
      const o = e.relatedTarget;
      o && o.closest(".lc-szmap-raw__mark-group") || (_.value = "", M("markMouseleave", s));
    };
    return (e, s) => (u(), c("div", fe, [
      (u(), c("svg", me, [
        C(oe),
        d("defs", null, [
          (u(!0), c(
            p,
            null,
            g(m.value, ([o, r], a) => (u(), c("linearGradient", {
              key: a,
              id: `linearGradient-float-${o}`
            }, [
              (u(!0), c(
                p,
                null,
                g(r == null ? void 0 : r.stop, (t, l) => (u(), c(
                  "stop",
                  w({ ref_for: !0 }, typeof t == "object" && !Array.isArray(t) ? t : {}, { key: l }),
                  null,
                  16
                  /* FULL_PROPS */
                ))),
                128
                /* KEYED_FRAGMENT */
              ))
            ], 8, ve))),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        d("g", de, [
          d("g", pe, [
            d("g", ge, [
              (u(), c(
                p,
                null,
                g(k, (o, r, a) => C(j(o), w({
                  class: I.value,
                  key: a,
                  ref_for: !0
                }, P(r), {
                  onMouseover: (t) => D(r),
                  onMouseleave: (t) => F(t, r),
                  onClick: (t) => $(r)
                }), null, 16, ["class", "onMouseover", "onMouseleave", "onClick"])),
                64
                /* STABLE_FRAGMENT */
              )),
              e.showLabel ? (u(), H(te, {
                key: 0,
                labels: e.labels,
                values: e.values
              }, null, 8, ["labels", "values"])) : V("v-if", !0)
            ])
          ])
        ])
      ])),
      e.showLabel ? (u(), c("div", ke, [
        O(e.$slots, "mapLabel", {
          blockList: k,
          labelClass: z,
          getVlaue: h,
          currentMapKey: _.value
        }, () => [
          (u(), c(
            p,
            null,
            g(k, (o, r) => C(S(ne), w({
              key: r,
              class: z(r),
              ref_for: !0
            }, h(r), {
              size: "small",
              onClick: (a) => $(r)
            }), null, 16, ["class", "onClick"])),
            64
            /* STABLE_FRAGMENT */
          ))
        ], !0)
      ])) : V("v-if", !0)
    ]));
  }
});
export {
  Ae as default
};
