import { defineComponent as P, mergeDefaults as x, useCssVars as A, ref as D, onMounted as F, computed as d, openBlock as t, createElementBlock as s, createVNode as L, createElementVNode as p, Fragment as v, renderList as g, mergeProps as C, resolveDynamicComponent as j, createBlock as E, createCommentVNode as M, renderSlot as R, unref as S } from "vue";
import Y from "./comp/sshzq.js";
import q from "./comp/baoan.js";
import O from "./comp/dapeng.js";
import T from "./comp/futian.js";
import W from "./comp/guangming.js";
import H from "./comp/longgang.js";
import J from "./comp/luohu.js";
import K from "./comp/pingshan.js";
import Q from "./comp/yantian.js";
import U from "./comp/nanshan.js";
import Z from "./comp/longhua.js";
import ee from "./comp/defines.js";
import re from "./comp/labels2.js";
import le from "../mark/index2.js";
import { propsRaw as ae } from "./props.js";
import { defFloatLevelConfig as oe, szBlockNames as o, defBlockLableMap as te } from "./const.js";
import ne from "lodash-es/merge";
const se = { class: "lc-szmap-raw" }, ue = {
  class: "lc-szmap-raw__svg",
  viewBox: "0 0 922 527",
  version: "1.1"
}, ie = ["id"], ce = {
  id: "页面-2",
  stroke: "none",
  "stroke-width": "1",
  fill: "none",
  "fill-rule": "evenodd"
}, fe = {
  id: "编组-76",
  transform: "translate(4, 0)"
}, me = {
  id: "编组",
  transform: "translate(0, 35)",
  "fill-rule": "nonzero"
}, de = {
  key: 0,
  class: "lc-szmap-raw__mark-group"
}, Ie = /* @__PURE__ */ P({
  __name: "rawMap",
  props: /* @__PURE__ */ x(ae, {
    showLabel: !0,
    levels: () => ({}),
    values: () => ({}),
    fillModel: "default",
    rotateX: 0,
    disabledGradient: !1
  }),
  emits: ["markClick"],
  setup(c, { emit: $ }) {
    A((e) => ({
      "923b8a96": I.value,
      e844d5f4: X.value
    }));
    const k = {
      [o.光明]: W,
      [o.宝安]: q,
      [o.龙华]: Z,
      [o.南山]: U,
      [o.福田]: T,
      [o.罗湖]: J,
      [o.盐田]: Q,
      [o.坪山]: K,
      [o.龙岗]: H,
      [o.大鹏新区]: O,
      [o.深汕合作区]: Y
    }, b = D(0), B = $;
    function _(e) {
      const u = c.values[e] ?? { value: 0 }, i = m.value.findIndex(([f, a]) => {
        var h, n;
        return u.value >= ((h = a == null ? void 0 : a.range) == null ? void 0 : h[0]) && u.value <= ((n = a == null ? void 0 : a.range) == null ? void 0 : n[1]);
      }), [r, l] = m.value[i] ?? [];
      return {
        ...u,
        mapLabel: te[e],
        style: {
          "--level-scale": b.value ? (l == null ? void 0 : l.scale) ?? 1 : b.value
        }
      };
    }
    function N(e) {
      B("markClick", _(e));
    }
    F(() => {
      setTimeout(() => {
        b.value = 1;
      }, 300);
    });
    const G = d(() => ["lc-szmap-raw__block", `visible--${c.fillModel}`]), m = d(() => Object.entries(ne({}, oe, c.levels)));
    function V(e) {
      const u = c.values[e];
      if (!u || c.disabledGradient) return {};
      const i = m.value.findIndex(([h, n]) => {
        var y, z;
        return u.value >= ((y = n == null ? void 0 : n.range) == null ? void 0 : y[0]) && u.value <= ((z = n == null ? void 0 : n.range) == null ? void 0 : z[1]);
      }), [r, l] = m.value[i] ?? [];
      let f = [], a = {};
      return l && r && (f.push("float-active"), typeof l.stop == "string" ? a["--linear-gradient-fill"] = l.stop : a["--linear-gradient-fill"] = `url(#linearGradient-float-${r})`), {
        class: f,
        style: a
      };
    }
    const I = d(() => `rotateX(${c.rotateX}deg)`), X = d(() => Math.abs(c.rotateX)), w = (e) => ["lc-szmap-raw__mark-group--item", `mark-${e}`];
    return (e, u) => (t(), s("div", se, [
      (t(), s("svg", ue, [
        L(ee),
        p("defs", null, [
          (t(!0), s(
            v,
            null,
            g(m.value, ([i, r], l) => (t(), s("linearGradient", {
              key: l,
              id: `linearGradient-float-${i}`
            }, [
              (t(!0), s(
                v,
                null,
                g(r == null ? void 0 : r.stop, (f, a) => (t(), s(
                  "stop",
                  C({ ref_for: !0 }, typeof f == "object" && !Array.isArray(f) ? f : {}, { key: a }),
                  null,
                  16
                  /* FULL_PROPS */
                ))),
                128
                /* KEYED_FRAGMENT */
              ))
            ], 8, ie))),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        p("g", ce, [
          p("g", fe, [
            p("g", me, [
              (t(), s(
                v,
                null,
                g(k, (i, r, l) => L(j(i), C({
                  class: G.value,
                  key: l,
                  ref_for: !0
                }, V(r)), null, 16, ["class"])),
                64
                /* STABLE_FRAGMENT */
              )),
              e.showLabel ? (t(), E(re, {
                key: 0,
                labels: e.labels,
                values: e.values
              }, null, 8, ["labels", "values"])) : M("v-if", !0)
            ])
          ])
        ])
      ])),
      e.showLabel ? (t(), s("div", de, [
        R(e.$slots, "mapLabel", {
          blockList: k,
          labelClass: w,
          getVlaue: _
        }, () => [
          (t(), s(
            v,
            null,
            g(k, (i, r) => L(S(le), C({
              key: r,
              class: w(r),
              ref_for: !0
            }, _(r), {
              size: "small",
              onClick: (l) => N(r)
            }), null, 16, ["class", "onClick"])),
            64
            /* STABLE_FRAGMENT */
          ))
        ], !0)
      ])) : M("v-if", !0)
    ]));
  }
});
export {
  Ie as default
};
