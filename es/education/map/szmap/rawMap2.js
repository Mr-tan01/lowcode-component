import { defineComponent as x, mergeDefaults as G, useCssVars as P, ref as A, onMounted as D, computed as d, openBlock as t, createElementBlock as s, createVNode as b, createElementVNode as v, Fragment as p, renderList as g, mergeProps as h, resolveDynamicComponent as F, createBlock as j, createCommentVNode as z, unref as E } from "vue";
import R from "./comp/sshzq.js";
import Y from "./comp/baoan.js";
import q from "./comp/dapeng.js";
import O from "./comp/futian.js";
import S from "./comp/guangming.js";
import T from "./comp/longgang.js";
import W from "./comp/luohu.js";
import H from "./comp/pingshan.js";
import J from "./comp/yantian.js";
import K from "./comp/nanshan.js";
import Q from "./comp/longhua.js";
import U from "./comp/defines.js";
import Z from "./comp/labels2.js";
import ee from "../mark/index2.js";
import { propsRaw as re } from "./props.js";
import { defFloatLevelConfig as le, szBlockNames as o } from "./const.js";
import ae from "lodash-es/merge";
const oe = { class: "lc-szmap-raw" }, te = {
  class: "lc-szmap-raw__svg",
  viewBox: "0 0 922 527",
  version: "1.1"
}, ne = ["id"], se = {
  id: "页面-2",
  stroke: "none",
  "stroke-width": "1",
  fill: "none",
  "fill-rule": "evenodd"
}, ue = {
  id: "编组-76",
  transform: "translate(4, 0)"
}, ce = {
  id: "编组",
  transform: "translate(0, 35)",
  "fill-rule": "nonzero"
}, ie = {
  key: 0,
  class: "lc-szmap-raw__mark-group"
}, Ne = /* @__PURE__ */ x({
  __name: "rawMap",
  props: /* @__PURE__ */ G(re, {
    showLabel: !0,
    levels: () => ({}),
    values: () => ({}),
    fillModel: "default",
    rotateX: 0
  }),
  emits: ["markClick"],
  setup(f, { emit: M }) {
    P((a) => ({
      "2db2c736": V.value,
      ccb49db6: X.value
    }));
    const L = {
      [o.光明]: S,
      [o.宝安]: Y,
      [o.龙华]: Q,
      [o.南山]: K,
      [o.福田]: O,
      [o.罗湖]: W,
      [o.盐田]: J,
      [o.坪山]: H,
      [o.龙岗]: T,
      [o.大鹏新区]: q,
      [o.深汕合作区]: R
    }, k = A(0), $ = M;
    function w(a) {
      const u = f.values[a] ?? { value: 0 }, c = m.value.findIndex(([i, l]) => {
        var _, n;
        return u.value >= ((_ = l == null ? void 0 : l.range) == null ? void 0 : _[0]) && u.value <= ((n = l == null ? void 0 : l.range) == null ? void 0 : n[1]);
      }), [e, r] = m.value[c] ?? [];
      return {
        ...u,
        style: {
          "--level-scale": k.value ? (r == null ? void 0 : r.scale) ?? 1 : k.value
        }
      };
    }
    function B(a) {
      $("markClick", w(a));
    }
    D(() => {
      setTimeout(() => {
        k.value = 1;
      }, 300);
    });
    const N = d(() => ["lc-szmap-raw__block", `visible--${f.fillModel}`]), m = d(() => Object.entries(ae({}, le, f.levels)));
    function I(a) {
      const u = f.values[a];
      if (!u) return {};
      const c = m.value.findIndex(([_, n]) => {
        var C, y;
        return u.value >= ((C = n == null ? void 0 : n.range) == null ? void 0 : C[0]) && u.value <= ((y = n == null ? void 0 : n.range) == null ? void 0 : y[1]);
      }), [e, r] = m.value[c] ?? [];
      let i = [], l = {};
      return r && e && (i.push("float-active"), typeof r.stop == "string" ? l["--linear-gradient-fill"] = r.stop : l["--linear-gradient-fill"] = `url(#linearGradient-float-${e})`), {
        class: i,
        style: l
      };
    }
    const V = d(() => `rotateX(${f.rotateX}deg)`), X = d(() => Math.abs(f.rotateX));
    return (a, u) => (t(), s("div", oe, [
      (t(), s("svg", te, [
        b(U),
        v("defs", null, [
          (t(!0), s(
            p,
            null,
            g(m.value, ([c, e], r) => (t(), s("linearGradient", {
              key: r,
              id: `linearGradient-float-${c}`
            }, [
              (t(!0), s(
                p,
                null,
                g(e == null ? void 0 : e.stop, (i, l) => (t(), s(
                  "stop",
                  h({ ref_for: !0 }, typeof i == "object" && !Array.isArray(i) ? i : {}, { key: l }),
                  null,
                  16
                  /* FULL_PROPS */
                ))),
                128
                /* KEYED_FRAGMENT */
              ))
            ], 8, ne))),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        v("g", se, [
          v("g", ue, [
            v("g", ce, [
              (t(), s(
                p,
                null,
                g(L, (c, e, r) => b(F(c), h({
                  class: N.value,
                  key: r,
                  ref_for: !0
                }, I(e)), null, 16, ["class"])),
                64
                /* STABLE_FRAGMENT */
              )),
              a.showLabel ? (t(), j(Z, {
                key: 0,
                labels: a.labels,
                values: a.values
              }, null, 8, ["labels", "values"])) : z("v-if", !0)
            ])
          ])
        ])
      ])),
      a.showLabel ? (t(), s("div", ie, [
        (t(), s(
          p,
          null,
          g(L, (c, e) => b(E(ee), h({
            key: e,
            class: ["lc-szmap-raw__mark-group--item", `mark-${e}`],
            ref_for: !0
          }, w(e), {
            size: "small",
            onClick: (r) => B(e)
          }), null, 16, ["class", "onClick"])),
          64
          /* STABLE_FRAGMENT */
        ))
      ])) : z("v-if", !0)
    ]));
  }
});
export {
  Ne as default
};
