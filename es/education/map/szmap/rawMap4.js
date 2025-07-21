import { defineComponent as A, mergeDefaults as D, useCssVars as F, ref as B, onMounted as K, computed as d, openBlock as s, createElementBlock as u, createVNode as _, createElementVNode as v, Fragment as p, renderList as g, mergeProps as w, resolveDynamicComponent as R, createBlock as T, createCommentVNode as z, renderSlot as j, unref as x } from "vue";
import H from "./comp/sshzq.js";
import O from "./comp/baoan.js";
import Y from "./comp/dapeng.js";
import S from "./comp/futian.js";
import U from "./comp/guangming.js";
import W from "./comp/longgang.js";
import q from "./comp/luohu.js";
import J from "./comp/pingshan.js";
import Q from "./comp/yantian.js";
import Z from "./comp/nanshan.js";
import ee from "./comp/longhua.js";
import re from "./comp/defines.js";
import ae from "./comp/labels2.js";
import oe from "../mark/index2.js";
import { propsRaw as le } from "./props.js";
import { LabelModelEnum as y, defFloatLevelConfig as te, szBlockNames as l, defBlockLableMap as ne } from "./const.js";
import se from "lodash-es/merge";
const ue = { class: "lc-szmap-raw" }, ie = {
  class: "lc-szmap-raw__svg",
  viewBox: "0 0 922 527",
  version: "1.1"
}, ce = ["id"], me = {
  id: "页面-2",
  stroke: "none",
  "stroke-width": "1",
  fill: "none",
  "fill-rule": "evenodd"
}, fe = {
  id: "编组-76",
  transform: "translate(4, 0)"
}, de = {
  id: "编组",
  transform: "translate(0, 35)",
  "fill-rule": "nonzero"
}, ve = {
  key: 0,
  class: "lc-szmap-raw__mark-group"
}, Ie = /* @__PURE__ */ A({
  __name: "rawMap",
  props: /* @__PURE__ */ D(le, {
    showLabel: !0,
    showBorder: !0,
    levels: () => ({}),
    values: () => ({}),
    fillModel: "default",
    rotateX: 0,
    disabledGradient: !1,
    labelModel: () => y.DEFAULT
  }),
  emits: ["markClick", "markMouseover", "markMouseleave"],
  setup(i, { emit: N }) {
    F((e) => ({
      "09cd0749": E.value,
      d740f61c: I.value
    }));
    const k = {
      [l.光明]: U,
      [l.宝安]: O,
      [l.龙华]: ee,
      [l.南山]: Z,
      [l.福田]: S,
      [l.罗湖]: q,
      [l.盐田]: Q,
      [l.坪山]: J,
      [l.龙岗]: W,
      [l.大鹏新区]: Y,
      [l.深汕合作区]: H
    }, b = B(0), h = N, M = B("");
    function L(e) {
      const t = i.values[e] ?? { value: 0 }, o = c.value.findIndex(
        ([, a]) => (a == null ? void 0 : a.range) && t.value >= a.range[0] && t.value <= a.range[1]
      ), [, r] = c.value[o] ?? [];
      return {
        ...t,
        mapLabel: ne[e],
        style: {
          "--level-scale": b.value ? (r == null ? void 0 : r.scale) ?? 1 : b.value
        }
      };
    }
    function C(e) {
      h("markClick", L(e));
    }
    K(() => {
      setTimeout(() => {
        b.value = 1;
      }, 300);
    });
    const V = d(() => ["lc-szmap-raw__block", `visible--${i.fillModel}`]), c = d(() => Object.entries(se({}, te, i.levels)));
    function G(e) {
      const t = i.values[e];
      if (!t || i.disabledGradient) return;
      const o = c.value.findIndex(
        ([, f]) => (f == null ? void 0 : f.range) && t.value >= f.range[0] && t.value <= f.range[1]
      ), [r, a] = c.value[o] ?? [];
      let n = [], m = {};
      return a && r && (n.push("float-active"), typeof a.stop == "string" ? m["--linear-gradient-fill"] = a.stop : m["--linear-gradient-fill"] = `url(#linearGradient-float-${r})`), {
        class: n,
        style: m
      };
    }
    const E = d(() => `rotateX(${i.rotateX}deg)`), I = d(() => Math.abs(i.rotateX)), $ = (e) => ["lc-szmap-raw__mark-group--item", `mark-${e}`];
    function P(e) {
      i.labelModel === y.HOVER && (M.value = e, h("markMouseover", e));
    }
    const X = (e, t) => {
      const o = e.relatedTarget;
      o && o.closest(".lc-szmap-raw__mark-group") || (M.value = "", h("markMouseleave", t));
    };
    return (e, t) => (s(), u("div", ue, [
      (s(), u("svg", ie, [
        _(re),
        v("defs", null, [
          (s(!0), u(
            p,
            null,
            g(c.value, ([o, r], a) => (s(), u("linearGradient", {
              id: `linearGradient-float-${o}`,
              key: a
            }, [
              (s(!0), u(
                p,
                null,
                g(r == null ? void 0 : r.stop, (n, m) => (s(), u(
                  "stop",
                  w({ ref_for: !0 }, typeof n == "object" && !Array.isArray(n) ? n : {}, { key: m }),
                  null,
                  16
                  /* FULL_PROPS */
                ))),
                128
                /* KEYED_FRAGMENT */
              ))
            ], 8, ce))),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        v("g", me, [
          v("g", fe, [
            v("g", de, [
              (s(), u(
                p,
                null,
                g(k, (o, r, a) => _(R(o), w({
                  key: a,
                  class: V.value,
                  ref_for: !0
                }, G(r), {
                  "show-border": e.showBorder,
                  onMouseover: (n) => P(r),
                  onMouseleave: (n) => X(n, r),
                  onClick: (n) => C(r)
                }), null, 16, ["class", "show-border", "onMouseover", "onMouseleave", "onClick"])),
                64
                /* STABLE_FRAGMENT */
              )),
              e.showLabel ? (s(), T(ae, {
                key: 0,
                labels: e.labels,
                values: e.values
              }, null, 8, ["labels", "values"])) : z("v-if", !0)
            ])
          ])
        ])
      ])),
      e.showLabel ? (s(), u("div", ve, [
        j(e.$slots, "mapLabel", {
          blockList: k,
          labelClass: $,
          getVlaue: L,
          currentMapKey: M.value
        }, () => [
          (s(), u(
            p,
            null,
            g(k, (o, r) => _(x(oe), w({
              key: r,
              class: $(r),
              ref_for: !0
            }, L(r), {
              size: "small",
              onClick: (a) => C(r)
            }), null, 16, ["class", "onClick"])),
            64
            /* STABLE_FRAGMENT */
          ))
        ], !0)
      ])) : z("v-if", !0)
    ]));
  }
});
export {
  Ie as default
};
