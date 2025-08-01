import { defineComponent as D, mergeDefaults as F, useCssVars as R, ref as z, onMounted as O, computed as p, openBlock as s, createElementBlock as i, createVNode as w, createElementVNode as g, Fragment as M, renderList as k, mergeProps as _, resolveDynamicComponent as T, createBlock as j, createCommentVNode as V, renderSlot as x, unref as H } from "vue";
import K from "./comp/sshzq.js";
import Y from "./comp/baoan.js";
import S from "./comp/dapeng.js";
import U from "./comp/futian.js";
import W from "./comp/guangming.js";
import q from "./comp/longgang.js";
import J from "./comp/luohu.js";
import Q from "./comp/pingshan.js";
import Z from "./comp/yantian.js";
import ee from "./comp/nanshan.js";
import re from "./comp/longhua.js";
import oe from "./comp/defines.js";
import ae from "./comp/labels2.js";
import le from "../mark/index2.js";
import { propsRaw as te } from "./props.js";
import { LabelModelEnum as C, defFloatLevelConfig as ne, szBlockNames as t, defBlockLableMap as se } from "./const.js";
import ue from "lodash-es/merge";
const ie = { class: "lc-szmap-raw" }, ce = {
  class: "lc-szmap-raw__svg",
  viewBox: "0 0 922 527",
  version: "1.1"
}, me = ["id"], fe = {
  id: "页面-2",
  stroke: "none",
  "stroke-width": "1",
  fill: "none",
  "fill-rule": "evenodd"
}, de = {
  id: "编组-76",
  transform: "translate(4, 0)"
}, ve = {
  id: "编组",
  transform: "translate(0, 35)",
  "fill-rule": "nonzero"
}, pe = {
  key: 0,
  class: "lc-szmap-raw__mark-group"
}, Pe = /* @__PURE__ */ D({
  __name: "rawMap",
  props: /* @__PURE__ */ F(te, {
    showLabel: !0,
    showBorder: !0,
    levels: () => ({}),
    values: () => ({}),
    fillModel: "default",
    rotateX: 0,
    disabledGradient: !1,
    labelModel: () => C.DEFAULT
  }),
  emits: ["markClick", "markMouseover", "markMouseenter", "markMouseleave"],
  setup(u, { emit: y }) {
    R((e) => ({
      "4ad76962": G.value,
      "61a8eb0e": I.value
    }));
    const b = {
      [t.光明]: W,
      [t.宝安]: Y,
      [t.龙华]: re,
      [t.南山]: ee,
      [t.福田]: U,
      [t.罗湖]: J,
      [t.盐田]: Z,
      [t.坪山]: Q,
      [t.龙岗]: q,
      [t.大鹏新区]: S,
      [t.深汕合作区]: K
    }, h = z(0), d = y, v = z("");
    function L(e) {
      const n = u.values[e] ?? { value: 0 }, a = c.value.findIndex(
        ([, o]) => (o == null ? void 0 : o.range) && n.value >= o.range[0] && n.value <= o.range[1]
      ), [, r] = c.value[a] ?? [];
      return {
        ...n,
        mapLabel: se[e],
        style: {
          "--level-scale": h.value ? (r == null ? void 0 : r.scale) ?? 1 : h.value
        }
      };
    }
    function $(e) {
      d("markClick", L(e));
    }
    O(() => {
      setTimeout(() => {
        h.value = 1;
      }, 300);
    });
    const N = p(() => ["lc-szmap-raw__block", `visible--${u.fillModel}`]), c = p(() => Object.entries(ue({}, ne, u.levels)));
    function E(e) {
      const n = u.values[e];
      if (!n || u.disabledGradient) return;
      const a = c.value.findIndex(
        ([, f]) => (f == null ? void 0 : f.range) && n.value >= f.range[0] && n.value <= f.range[1]
      ), [r, o] = c.value[a] ?? [];
      let l = [], m = {};
      return o && r && (l.push("float-active"), typeof o.stop == "string" ? m["--linear-gradient-fill"] = o.stop : m["--linear-gradient-fill"] = `url(#linearGradient-float-${r})`), {
        class: l,
        style: m
      };
    }
    const G = p(() => `rotateX(${u.rotateX}deg)`), I = p(() => Math.abs(u.rotateX)), B = (e) => ["lc-szmap-raw__mark-group--item", `mark-${e}`];
    function P(e) {
      u.labelModel === C.HOVER && (v.value = e, d("markMouseover", e));
    }
    function X(e) {
      u.labelModel === C.HOVER && (v.value = e, d("markMouseenter", e));
    }
    const A = (e, n) => {
      const a = e.relatedTarget;
      a && a.closest(".lc-szmap-raw__mark-group") || (v.value = "", d("markMouseleave", n));
    };
    return (e, n) => (s(), i("div", ie, [
      (s(), i("svg", ce, [
        w(oe),
        g("defs", null, [
          (s(!0), i(
            M,
            null,
            k(c.value, ([a, r], o) => (s(), i("linearGradient", {
              id: `linearGradient-float-${a}`,
              key: o
            }, [
              (s(!0), i(
                M,
                null,
                k(r == null ? void 0 : r.stop, (l, m) => (s(), i(
                  "stop",
                  _({ ref_for: !0 }, typeof l == "object" && !Array.isArray(l) ? l : {}, { key: m }),
                  null,
                  16
                  /* FULL_PROPS */
                ))),
                128
                /* KEYED_FRAGMENT */
              ))
            ], 8, me))),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        g("g", fe, [
          g("g", de, [
            g("g", ve, [
              (s(), i(
                M,
                null,
                k(b, (a, r, o) => w(T(a), _({
                  key: o,
                  class: N.value,
                  ref_for: !0
                }, E(r), {
                  "show-border": e.showBorder,
                  onMouseenter: (l) => P(r),
                  onMouseover: (l) => X(r),
                  onMouseleave: (l) => A(l, r),
                  onClick: (l) => $(r)
                }), null, 16, ["class", "show-border", "onMouseenter", "onMouseover", "onMouseleave", "onClick"])),
                64
                /* STABLE_FRAGMENT */
              )),
              e.showLabel ? (s(), j(ae, {
                key: 0,
                labels: e.labels,
                values: e.values
              }, null, 8, ["labels", "values"])) : V("v-if", !0)
            ])
          ])
        ])
      ])),
      e.showLabel ? (s(), i("div", pe, [
        x(e.$slots, "mapLabel", {
          blockList: b,
          labelClass: B,
          getVlaue: L,
          currentMapKey: v.value
        }, () => [
          (s(), i(
            M,
            null,
            k(b, (a, r) => w(H(le), _({
              key: r,
              class: B(r),
              ref_for: !0
            }, L(r), {
              size: "small",
              onClick: (o) => $(r)
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
  Pe as default
};
