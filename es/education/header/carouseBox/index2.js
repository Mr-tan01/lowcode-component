import { defineComponent as oe, mergeModels as q, mergeDefaults as ne, useCssVars as re, ref as x, useModel as O, computed as v, shallowRef as B, watch as le, nextTick as N, onMounted as X, openBlock as d, createElementBlock as m, createElementVNode as c, unref as b, createCommentVNode as R, normalizeClass as j, normalizeStyle as se, Fragment as ie, renderList as ue, renderSlot as G, mergeProps as fe, toDisplayString as ce } from "vue";
import ve from "./images/lt-arrow.png.js";
import de from "./images/rt-arrow.png.js";
import me from "./images/top-arrow.png.js";
import I from "lodash-es/throttle";
import be from "lodash-es/debounce";
import { propsRaw as pe } from "./props.js";
const _e = { class: "lc-carouse-box" }, we = { class: "lc-carouse-box__wrapper" }, ge = ["onClick"], Ce = ["title"], he = {
  key: 0,
  class: "lc-carouse-box__track"
}, We = /* @__PURE__ */ oe({
  __name: "carouseBox",
  props: /* @__PURE__ */ q(/* @__PURE__ */ ne(pe, {
    offsetAnimationTime: 250,
    rowKey: (n) => n.value ?? Math.random(),
    __skip_rowKey: !0,
    showTrack: !0,
    gap: 10,
    disabled: !1
  }), {
    index: { default: -1 },
    indexModifiers: {},
    value: { default: "" },
    valueModifiers: {}
  }),
  emits: /* @__PURE__ */ q(["change"], ["update:index", "update:value"]),
  setup(n, { emit: J }) {
    var L;
    re((t) => ({
      a2e84c96: t.gap,
      "24a53f7d": t.offsetAnimationTime
    }));
    const l = x(0), p = x(!0), _ = O(n, "index"), W = O(n, "value"), u = v(() => n.list ?? []), M = v(() => !n.disabled);
    _.value === -1 && (_.value = ((L = u.value) == null ? void 0 : L.findIndex((t) => n.rowKey(t) === W.value)) ?? 0);
    const Q = J, i = x({
      before: [],
      after: [],
      appendCount: 0
    }), g = v(() => {
      const t = u.value ?? [];
      return [...i.value.before, ...t, ...i.value.after];
    }), E = v(() => l.value % 2 === 0);
    function D() {
      l.value = _.value;
    }
    D();
    function K(t) {
      return I(() => {
        let e = l.value + t;
        e < 0 ? e = g.value.length - 1 : e >= g.value.length && (e = 0), y(g.value[e], e);
      }, n.offsetAnimationTime);
    }
    const $ = K(-1), z = K(1), C = B([]), w = B(), k = B(), S = x(0);
    le(
      () => n.list,
      () => {
        F(), N(T);
      },
      {
        deep: 1
      }
    ), X(T);
    function T() {
      if (!h.value) return;
      const { maxAppendCount: t } = h.value, e = t;
      if (e === 0) return;
      if (i.value.appendCount = e, D(), l.value += e, n.disabled) {
        i.value.before = [], i.value.after = [];
        return;
      }
      const a = u.value ?? [];
      i.value.before = a.slice(-e).map(V), i.value.after = a.slice(0, e).map(V);
    }
    function V(t, e) {
      return {
        ...t,
        value: n.rowKey(t) + "_clone_" + e + "_" + Date.now()
      };
    }
    function F() {
      S.value++;
    }
    function U() {
      if (!window.ResizeObserver || !w.value) return;
      new ResizeObserver(
        be(() => {
          F(), T();
        }, n.offsetAnimationTime)
      ).observe(w.value);
    }
    X(U);
    const h = v(() => {
      var P;
      if (S.value++, !w.value || !C.value || !k.value) return;
      const t = w.value.offsetWidth, e = {
        normal: 0,
        active: 0
      };
      for (let A = 0; A <= C.value.length; A++) {
        const f = C.value[A];
        if ((P = f == null ? void 0 : f.classList) != null && P.contains("active") ? e.active = f.offsetWidth : e.normal = f == null ? void 0 : f.offsetWidth, e.active && e.normal)
          break;
      }
      const a = e.normal, o = e.active, r = t / a, s = r, te = n.disabled ? 0 : Math.round(r), ae = k.value.offsetWidth;
      return {
        normalButtonWidth: a,
        maxButtonCount: s,
        carouselWidth: ae,
        maxAppendCount: te,
        offset: o / 2
        // 加上选中的按钮宽度一半, 让选中的按钮在中心点
      };
    }), Y = v(() => {
      if (h.value) {
        const { normalButtonWidth: t, maxButtonCount: e, offset: a, carouselWidth: o } = h.value, r = e / 2;
        let s = (t * (l.value - r) + a) * -1;
        return s >= 0 ? s = 0 : s <= -o + t * e && (s = -o + t * e), s;
      }
      return 0;
    });
    function Z(t) {
      window.requestAnimationFrame ? window.requestAnimationFrame(t) : t();
    }
    function ee(t, e = !0) {
      Z(() => {
        e ? N(setTimeout.bind(null, t, n.offsetAnimationTime)) : setTimeout(t, n.offsetAnimationTime);
      });
    }
    function H(t) {
      ee(() => {
        p.value = !1, l.value = t;
      }, !1);
    }
    const y = I((t, e) => {
      if (n.disabled) return;
      p.value || (p.value = !0);
      const a = i.value.appendCount;
      let o = e - a;
      if (_.value == o) return;
      l.value = e, o < 0 ? (H(u.value.length + o + a), o = u.value.length - 1) : o >= u.value.length && (H(a), o = 0), _.value = o;
      const r = u.value[o];
      W.value = r == null ? void 0 : r.value;
      const s = {
        index: o,
        label: r == null ? void 0 : r.label,
        value: r == null ? void 0 : r.value,
        data: r
      };
      Q("change", s);
    }, n.offsetAnimationTime);
    return (t, e) => (d(), m("div", _e, [
      c("div", we, [
        M.value ? (d(), m("div", {
          key: 0,
          class: "lc-carouse-box__wrapper__arrow arrow--left",
          onClick: e[0] || (e[0] = //@ts-ignore
          (...a) => b($) && b($)(...a))
        }, e[2] || (e[2] = [
          c(
            "img",
            {
              class: "lc-carouse-box__wrapper__arrow--image",
              src: ve,
              draggable: "false",
              alt: ""
            },
            null,
            -1
            /* HOISTED */
          )
        ]))) : R("v-if", !0),
        c(
          "div",
          {
            class: "lc-carouse-box__wrapper__tabs",
            ref_key: "tabButtonParentElRef",
            ref: w
          },
          [
            c(
              "div",
              {
                class: j(["lc-carouse-box__wrapper__tabs--train", { "is-transition": p.value }]),
                style: se({ "--carousel-offset": `translateX(${Y.value}px)` }),
                ref_key: "carouselTrainElRef",
                ref: k
              },
              [
                (d(!0), m(
                  ie,
                  null,
                  ue(g.value, (a, o) => (d(), m("button", {
                    class: j(["lc-carouse-box__wrapper__tabs--train__button", { active: l.value === o, "is-even": E.value }]),
                    key: t.rowKey(a),
                    onClick: (r) => b(y)(a, o),
                    ref_for: !0,
                    ref_key: "tabButtonRef",
                    ref: C
                  }, [
                    G(t.$slots, "default", fe({ ref_for: !0 }, { record: a, isActive: l.value === o, isEven: E.value, isTransition: p.value, index: o, handleClick: b(y) }), () => [
                      c("div", {
                        class: "lc-carouse-box__wrapper__tabs--train__button--text",
                        title: a.label
                      }, ce(a.label), 9, Ce)
                    ], !0)
                  ], 10, ge))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ],
              6
              /* CLASS, STYLE */
            )
          ],
          512
          /* NEED_PATCH */
        ),
        M.value ? (d(), m("div", {
          key: 1,
          class: "lc-carouse-box__wrapper__arrow arrow--right",
          onClick: e[1] || (e[1] = //@ts-ignore
          (...a) => b(z) && b(z)(...a))
        }, e[3] || (e[3] = [
          c(
            "img",
            {
              class: "lc-carouse-box__wrapper__arrow--image",
              src: de,
              draggable: "false",
              alt: ""
            },
            null,
            -1
            /* HOISTED */
          )
        ]))) : R("v-if", !0)
      ]),
      t.showTrack ? (d(), m("div", he, [
        G(t.$slots, "track", {}, () => [
          e[4] || (e[4] = c(
            "img",
            {
              class: "lc-carouse-box__track__image--pointer",
              src: me,
              draggable: "false",
              alt: ""
            },
            null,
            -1
            /* HOISTED */
          ))
        ], !0)
      ])) : R("v-if", !0)
    ]));
  }
});
export {
  We as default
};
