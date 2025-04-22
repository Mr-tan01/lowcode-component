import { defineComponent as x, mergeDefaults as K, useCssVars as R, ref as $, onMounted as T, computed as d, openBlock as s, createElementBlock as i, createVNode as M, createElementVNode as v, Fragment as p, renderList as g, mergeProps as w, resolveDynamicComponent as j, createBlock as H, createCommentVNode as B, renderSlot as O, unref as S } from "vue";
import Y from "./comp/sshzq.js";
import q from "./comp/baoan.js";
import U from "./comp/dapeng.js";
import W from "./comp/futian.js";
import J from "./comp/guangming.js";
import Q from "./comp/longgang.js";
import Z from "./comp/luohu.js";
import ee from "./comp/pingshan.js";
import re from "./comp/yantian.js";
import le from "./comp/nanshan.js";
import ae from "./comp/longhua.js";
import oe from "./comp/defines.js";
import te from "./comp/labels2.js";
import ne from "../src/components/education/components/mark/index2.js";
import { propsRaw as se } from "./props.js";
import { LabelModelEnum as N, defFloatLevelConfig as ue, szBlockNames as t, defBlockLableMap as ie } from "./const.js";
import ce from "lodash-es/merge";
const fe = { class: "lc-szmap-raw" }, me = {
  class: "lc-szmap-raw__svg",
  viewBox: "0 0 922 527",
  version: "1.1"
}, de = ["id"], ve = {
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
}, be = {
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
    labelModel: () => N.DEFAULT
  }),
  emits: ["markClick"],
  setup(c, { emit: V }) {
    R((e) => ({
      c37d54de: X.value,
      "3d48e3aa": A.value
    }));
    const b = {
      [t.光明]: J,
      [t.宝安]: q,
      [t.龙华]: ae,
      [t.南山]: le,
      [t.福田]: W,
      [t.罗湖]: Z,
      [t.盐田]: re,
      [t.坪山]: ee,
      [t.龙岗]: Q,
      [t.大鹏新区]: U,
      [t.深汕合作区]: Y
    }, k = $(0), G = V, L = $("");
    function _(e) {
      const l = c.values[e] ?? { value: 0 }, f = m.value.findIndex(([n, o]) => {
        var h, u;
        return l.value >= ((h = o == null ? void 0 : o.range) == null ? void 0 : h[0]) && l.value <= ((u = o == null ? void 0 : o.range) == null ? void 0 : u[1]);
      }), [r, a] = m.value[f] ?? [];
      return {
        ...l,
        mapLabel: ie[e],
        style: {
          "--level-scale": k.value ? (a == null ? void 0 : a.scale) ?? 1 : k.value
        }
      };
    }
    function E(e) {
      G("markClick", _(e));
    }
    T(() => {
      setTimeout(() => {
        k.value = 1;
      }, 300);
    });
    const I = d(() => ["lc-szmap-raw__block", `visible--${c.fillModel}`]), m = d(() => Object.entries(ce({}, ue, c.levels)));
    function P(e) {
      const l = c.values[e];
      if (!l || c.disabledGradient) return {};
      const f = m.value.findIndex(([h, u]) => {
        var y, z;
        return l.value >= ((y = u == null ? void 0 : u.range) == null ? void 0 : y[0]) && l.value <= ((z = u == null ? void 0 : u.range) == null ? void 0 : z[1]);
      }), [r, a] = m.value[f] ?? [];
      let n = [], o = {};
      return a && r && (n.push("float-active"), typeof a.stop == "string" ? o["--linear-gradient-fill"] = a.stop : o["--linear-gradient-fill"] = `url(#linearGradient-float-${r})`), {
        class: n,
        style: o
      };
    }
    const X = d(() => `rotateX(${c.rotateX}deg)`), A = d(() => Math.abs(c.rotateX)), C = (e) => ["lc-szmap-raw__mark-group--item", `mark-${e}`];
    function D(e) {
      c.labelModel === N.HOVER && (L.value = e);
    }
    const F = (e) => {
      const l = e.relatedTarget;
      l && l.closest(".lc-szmap-raw__mark-group") || (L.value = "");
    };
    return (e, l) => (s(), i("div", fe, [
      (s(), i("svg", me, [
        M(oe),
        v("defs", null, [
          (s(!0), i(
            p,
            null,
            g(m.value, ([f, r], a) => (s(), i("linearGradient", {
              key: a,
              id: `linearGradient-float-${f}`
            }, [
              (s(!0), i(
                p,
                null,
                g(r == null ? void 0 : r.stop, (n, o) => (s(), i(
                  "stop",
                  w({ ref_for: !0 }, typeof n == "object" && !Array.isArray(n) ? n : {}, { key: o }),
                  null,
                  16
                  /* FULL_PROPS */
                ))),
                128
                /* KEYED_FRAGMENT */
              ))
            ], 8, de))),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        v("g", ve, [
          v("g", pe, [
            v("g", ge, [
              (s(), i(
                p,
                null,
                g(b, (f, r, a) => M(j(f), w({
                  class: I.value,
                  key: a,
                  ref_for: !0
                }, P(r), {
                  onMouseover: (n) => D(r),
                  onMouseleave: l[0] || (l[0] = (n) => F(n))
                }), null, 16, ["class", "onMouseover"])),
                64
                /* STABLE_FRAGMENT */
              )),
              e.showLabel ? (s(), H(te, {
                key: 0,
                labels: e.labels,
                values: e.values
              }, null, 8, ["labels", "values"])) : B("v-if", !0)
            ])
          ])
        ])
      ])),
      e.showLabel ? (s(), i("div", be, [
        O(e.$slots, "mapLabel", {
          blockList: b,
          labelClass: C,
          getVlaue: _,
          currentMapKey: L.value
        }, () => [
          (s(), i(
            p,
            null,
            g(b, (f, r) => M(S(ne), w({
              key: r,
              class: C(r),
              ref_for: !0
            }, _(r), {
              size: "small",
              onClick: (a) => E(r)
            }), null, 16, ["class", "onClick"])),
            64
            /* STABLE_FRAGMENT */
          ))
        ], !0)
      ])) : B("v-if", !0)
    ]));
  }
});
export {
  Ae as default
};
