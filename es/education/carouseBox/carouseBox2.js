import { defineComponent as oe, mergeModels as q, mergeDefaults as ne, useCssVars as re, ref as x, useModel as O, computed as v, shallowRef as A, watch as le, nextTick as N, onMounted as X, openBlock as d, createElementBlock as m, createElementVNode as f, unref as g, createCommentVNode as B, normalizeClass as j, normalizeStyle as se, Fragment as ie, renderList as ue, renderSlot as G, mergeProps as ce, toDisplayString as fe } from "vue";
import ve from "./images/lt-arrow.png.js";
import de from "./images/rt-arrow.png.js";
import me from "./images/top-arrow.png.js";
import I from "lodash-es/throttle";
import be from "lodash-es/debounce";
import { propsRaw as pe } from "./props.js";
const _e = { class: "lc-carouse-box" }, ge = { class: "lc-carouse-box__wrapper" }, we = ["onClick"], Ce = ["title"], he = {
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
      "24ca7a73": t.gap,
      "67b6a43b": t.offsetAnimationTime
    }));
    const l = x(0), b = x(!0), p = O(n, "index"), R = O(n, "value"), u = v(() => n.list ?? []), W = v(() => !n.disabled);
    p.value === -1 && (p.value = ((L = u.value) == null ? void 0 : L.findIndex((t) => n.rowKey(t) === R.value)) ?? 0);
    const Q = J, i = x({
      before: [],
      after: [],
      appendCount: 0
    }), w = v(() => {
      const t = u.value ?? [];
      return [...i.value.before, ...t, ...i.value.after];
    }), M = v(() => l.value % 2 === 0);
    function E() {
      l.value = p.value;
    }
    E();
    function D(t) {
      return I(() => {
        let e = l.value + t;
        e < 0 ? e = w.value.length - 1 : e >= w.value.length && (e = 0), H(w.value[e], e);
      }, n.offsetAnimationTime);
    }
    const K = D(-1), $ = D(1), C = A([]), _ = A(), k = A(), z = x(0);
    le(() => n.list, () => {
      V(), N(T);
    }, {
      deep: 1
    }), X(T);
    function T() {
      if (!h.value) return;
      const { maxAppendCount: t } = h.value, e = t;
      if (e === 0) return;
      if (i.value.appendCount = e, E(), l.value += e, n.disabled) {
        i.value.before = [], i.value.after = [];
        return;
      }
      const a = u.value ?? [];
      i.value.before = a.slice(-e).map(S), i.value.after = a.slice(0, e).map(S);
    }
    function S(t, e) {
      return {
        ...t,
        value: n.rowKey(t) + "_clone_" + e + "_" + Date.now()
      };
    }
    function V() {
      z.value++;
    }
    function U() {
      if (!window.ResizeObserver || !_.value) return;
      new ResizeObserver(be(() => {
        V(), T();
      }, n.offsetAnimationTime)).observe(_.value);
    }
    X(U);
    const h = v(() => {
      var P;
      if (z.value++, !_.value || !C.value || !k.value) return;
      const { width: t } = _.value.getBoundingClientRect(), e = {
        normal: 0,
        active: 0
      };
      for (let y = 0; y <= C.value.length; y++) {
        const c = C.value[y];
        if ((P = c == null ? void 0 : c.classList) != null && P.contains("active") ? e.active = c.offsetWidth : e.normal = c == null ? void 0 : c.offsetWidth, e.active && e.normal)
          break;
      }
      const a = e.normal, o = e.active, r = t / a, s = r, te = n.disabled ? 0 : Math.ceil(r), ae = k.value.offsetWidth;
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
    function F(t) {
      ee(() => {
        b.value = !1, l.value = t;
      }, !1);
    }
    const H = I((t, e) => {
      if (n.disabled) return;
      b.value || (b.value = !0);
      const a = i.value.appendCount;
      let o = e - a;
      if (p.value == o) return;
      l.value = e, o < 0 ? (F(u.value.length + o + a), o = u.value.length - 1) : o >= u.value.length && (F(a), o = 0), p.value = o;
      const r = u.value[o];
      R.value = r == null ? void 0 : r.value;
      const s = {
        index: o,
        label: r == null ? void 0 : r.label,
        value: r == null ? void 0 : r.value,
        data: r
      };
      Q("change", s);
    }, n.offsetAnimationTime);
    return (t, e) => (d(), m("div", _e, [
      f("div", ge, [
        W.value ? (d(), m("div", {
          key: 0,
          class: "lc-carouse-box__wrapper__arrow arrow--left",
          onClick: e[0] || (e[0] = //@ts-ignore
          (...a) => g(K) && g(K)(...a))
        }, e[2] || (e[2] = [
          f(
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
        ]))) : B("v-if", !0),
        f(
          "div",
          {
            class: "lc-carouse-box__wrapper__tabs",
            ref_key: "tabButtonParentElRef",
            ref: _
          },
          [
            f(
              "div",
              {
                class: j(["lc-carouse-box__wrapper__tabs--train", { "is-transition": b.value }]),
                style: se({ "--carousel-offset": `translateX(${Y.value}px)` }),
                ref_key: "carouselTrainElRef",
                ref: k
              },
              [
                (d(!0), m(
                  ie,
                  null,
                  ue(w.value, (a, o) => (d(), m("button", {
                    class: j(["lc-carouse-box__wrapper__tabs--train__button", { active: l.value === o, "is-even": M.value }]),
                    key: t.rowKey(a),
                    onClick: (r) => g(H)(a, o),
                    ref_for: !0,
                    ref_key: "tabButtonRef",
                    ref: C
                  }, [
                    G(t.$slots, "default", ce({ ref_for: !0 }, { record: a, isActive: l.value === o, isEven: M.value, isTransition: b.value, index: o }), () => [
                      f("div", {
                        class: "lc-carouse-box__wrapper__tabs--train__button--text",
                        title: a.label
                      }, fe(a.label), 9, Ce)
                    ], !0)
                  ], 10, we))),
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
        W.value ? (d(), m("div", {
          key: 1,
          class: "lc-carouse-box__wrapper__arrow arrow--right",
          onClick: e[1] || (e[1] = //@ts-ignore
          (...a) => g($) && g($)(...a))
        }, e[3] || (e[3] = [
          f(
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
        ]))) : B("v-if", !0)
      ]),
      t.showTrack ? (d(), m("div", he, [
        G(t.$slots, "track", {}, () => [
          e[4] || (e[4] = f(
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
      ])) : B("v-if", !0)
    ]));
  }
});
export {
  We as default
};
