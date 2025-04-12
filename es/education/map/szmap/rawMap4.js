import { defineComponent as F, mergeDefaults as K, useCssVars as j, ref as z, onMounted as E, computed as d, openBlock as t, createElementBlock as s, createVNode as M, createElementVNode as v, Fragment as p, renderList as g, mergeProps as C, resolveDynamicComponent as R, createBlock as S, createCommentVNode as B, renderSlot as Y, unref as q } from "vue";
import H from "./comp/sshzq.js";
import O from "./comp/baoan.js";
import T from "./comp/dapeng.js";
import W from "./comp/futian.js";
import J from "./comp/guangming.js";
import Q from "./comp/longgang.js";
import U from "./comp/luohu.js";
import Z from "./comp/pingshan.js";
import ee from "./comp/yantian.js";
import re from "./comp/nanshan.js";
import ae from "./comp/longhua.js";
import le from "./comp/defines.js";
import oe from "./comp/labels2.js";
import te from "../mark/index2.js";
import { propsRaw as ne } from "./props.js";
import { defFloatLevelConfig as se, szBlockNames as o, defBlockLableMap as ue } from "./const.js";
import ie from "lodash-es/merge";
const ce = { class: "lc-szmap-raw" }, fe = {
  class: "lc-szmap-raw__svg",
  viewBox: "0 0 922 527",
  version: "1.1"
}, me = ["id"], de = {
  id: "页面-2",
  stroke: "none",
  "stroke-width": "1",
  fill: "none",
  "fill-rule": "evenodd"
}, ve = {
  id: "编组-76",
  transform: "translate(4, 0)"
}, pe = {
  id: "编组",
  transform: "translate(0, 35)",
  "fill-rule": "nonzero"
}, ge = {
  key: 0,
  class: "lc-szmap-raw__mark-group"
}, xe = /* @__PURE__ */ F({
  __name: "rawMap",
  props: /* @__PURE__ */ K(ne, {
    showLabel: !0,
    levels: () => ({}),
    values: () => ({}),
    fillModel: "default",
    rotateX: 0,
    disabledGradient: !1
  }),
  emits: ["markClick"],
  setup(f, { emit: N }) {
    j((e) => ({
      "0212d4cf": X.value,
      "954989a8": x.value
    }));
    const k = {
      [o.光明]: J,
      [o.宝安]: O,
      [o.龙华]: ae,
      [o.南山]: re,
      [o.福田]: W,
      [o.罗湖]: U,
      [o.盐田]: ee,
      [o.坪山]: Z,
      [o.龙岗]: Q,
      [o.大鹏新区]: T,
      [o.深汕合作区]: H
    }, b = z(0), G = N, _ = z("");
    function h(e) {
      const u = f.values[e] ?? { value: 0 }, i = m.value.findIndex(([c, l]) => {
        var L, n;
        return u.value >= ((L = l == null ? void 0 : l.range) == null ? void 0 : L[0]) && u.value <= ((n = l == null ? void 0 : l.range) == null ? void 0 : n[1]);
      }), [r, a] = m.value[i] ?? [];
      return {
        ...u,
        mapLabel: ue[e],
        style: {
          "--level-scale": b.value ? (a == null ? void 0 : a.scale) ?? 1 : b.value
        }
      };
    }
    function V(e) {
      G("markClick", h(e));
    }
    E(() => {
      setTimeout(() => {
        b.value = 1;
      }, 300);
    });
    const I = d(() => ["lc-szmap-raw__block", `visible--${f.fillModel}`]), m = d(() => Object.entries(ie({}, se, f.levels)));
    function P(e) {
      const u = f.values[e];
      if (!u || f.disabledGradient) return {};
      const i = m.value.findIndex(([L, n]) => {
        var y, $;
        return u.value >= ((y = n == null ? void 0 : n.range) == null ? void 0 : y[0]) && u.value <= (($ = n == null ? void 0 : n.range) == null ? void 0 : $[1]);
      }), [r, a] = m.value[i] ?? [];
      let c = [], l = {};
      return a && r && (c.push("float-active"), typeof a.stop == "string" ? l["--linear-gradient-fill"] = a.stop : l["--linear-gradient-fill"] = `url(#linearGradient-float-${r})`), {
        class: c,
        style: l
      };
    }
    const X = d(() => `rotateX(${f.rotateX}deg)`), x = d(() => Math.abs(f.rotateX)), w = (e) => ["lc-szmap-raw__mark-group--item", `mark-${e}`];
    function A(e) {
      _.value = e;
    }
    const D = () => {
      _.value = "";
    };
    return (e, u) => (t(), s("div", ce, [
      (t(), s("svg", fe, [
        M(le),
        v("defs", null, [
          (t(!0), s(
            p,
            null,
            g(m.value, ([i, r], a) => (t(), s("linearGradient", {
              key: a,
              id: `linearGradient-float-${i}`
            }, [
              (t(!0), s(
                p,
                null,
                g(r == null ? void 0 : r.stop, (c, l) => (t(), s(
                  "stop",
                  C({ ref_for: !0 }, typeof c == "object" && !Array.isArray(c) ? c : {}, { key: l }),
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
        v("g", de, [
          v("g", ve, [
            v("g", pe, [
              (t(), s(
                p,
                null,
                g(k, (i, r, a) => M(R(i), C({
                  class: I.value,
                  key: a,
                  ref_for: !0
                }, P(r), {
                  onMouseover: (c) => A(r),
                  onMouseleave: D
                }), null, 16, ["class", "onMouseover"])),
                64
                /* STABLE_FRAGMENT */
              )),
              e.showLabel ? (t(), S(oe, {
                key: 0,
                labels: e.labels,
                values: e.values
              }, null, 8, ["labels", "values"])) : B("v-if", !0)
            ])
          ])
        ])
      ])),
      e.showLabel ? (t(), s("div", ge, [
        Y(e.$slots, "mapLabel", {
          blockList: k,
          labelClass: w,
          getVlaue: h,
          currentMapKey: _.value
        }, () => [
          (t(), s(
            p,
            null,
            g(k, (i, r) => M(q(te), C({
              key: r,
              class: w(r),
              ref_for: !0
            }, h(r), {
              size: "small",
              onClick: (a) => V(r)
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
  xe as default
};
