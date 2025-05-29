import { defineComponent as ne, mergeModels as O, mergeDefaults as re, useCssVars as le, ref as x, useModel as N, computed as d, shallowRef as B, watch as X, nextTick as j, onMounted as G, openBlock as m, createElementBlock as b, createElementVNode as c, unref as p, createCommentVNode as R, normalizeClass as I, normalizeStyle as se, Fragment as ie, renderList as ue, renderSlot as J, mergeProps as fe, toDisplayString as ce } from "vue";
import ve from "./images/lt-arrow.png.js";
import de from "./images/rt-arrow.png.js";
import me from "./images/top-arrow.png.js";
import Q from "lodash-es/throttle";
import be from "lodash-es/debounce";
import { propsRaw as pe } from "./props.js";
const _e = { class: "lc-carouse-box" }, we = { class: "lc-carouse-box__wrapper" }, ge = ["onClick"], Ce = ["title"], he = {
  key: 0,
  class: "lc-carouse-box__track"
}, We = /* @__PURE__ */ ne({
  __name: "carouseBox",
  props: /* @__PURE__ */ O(/* @__PURE__ */ re(pe, {
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
  emits: /* @__PURE__ */ O(["change"], ["update:index", "update:value"]),
  setup(n, { emit: U }) {
    var P;
    le((t) => ({
      "0b2dc919": t.gap,
      "37e3e6e1": t.offsetAnimationTime
    }));
    const l = x(0), _ = x(!0), v = N(n, "index"), W = N(n, "value"), u = d(() => n.list ?? []), M = d(() => !n.disabled);
    v.value === -1 && (v.value = ((P = u.value) == null ? void 0 : P.findIndex((t) => n.rowKey(t) === W.value)) ?? 0);
    const Y = U, i = x({
      before: [],
      after: [],
      appendCount: 0
    }), g = d(() => {
      const t = u.value ?? [];
      return [...i.value.before, ...t, ...i.value.after];
    }), E = d(() => l.value % 2 === 0);
    function D() {
      l.value = v.value;
    }
    D();
    function K(t) {
      return Q(() => {
        let e = l.value + t;
        e < 0 ? e = g.value.length - 1 : e >= g.value.length && (e = 0), y(g.value[e], e);
      }, n.offsetAnimationTime);
    }
    const $ = K(-1), z = K(1), C = B([]), w = B(), k = B(), S = x(0);
    X(
      () => n.list,
      () => {
        F(), j(T);
      },
      {
        deep: 1
      }
    ), X(
      () => v.value,
      () => {
        H();
      }
    ), G(T);
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
    function H() {
      if (!window.ResizeObserver || !w.value) return;
      new ResizeObserver(
        be(() => {
          F(), T();
        }, n.offsetAnimationTime)
      ).observe(w.value);
    }
    G(H);
    const h = d(() => {
      var q;
      if (S.value++, !w.value || !C.value || !k.value) return;
      const t = w.value.offsetWidth, e = {
        normal: 0,
        active: 0
      };
      for (let A = 0; A <= C.value.length; A++) {
        const f = C.value[A];
        if ((q = f == null ? void 0 : f.classList) != null && q.contains("active") ? e.active = f.offsetWidth : e.normal = f == null ? void 0 : f.offsetWidth, e.active && e.normal)
          break;
      }
      const a = e.normal, o = e.active, r = t / a, s = r, ae = n.disabled ? 0 : Math.round(r), oe = k.value.offsetWidth;
      return {
        normalButtonWidth: a,
        maxButtonCount: s,
        carouselWidth: oe,
        maxAppendCount: ae,
        offset: o / 2
        // 加上选中的按钮宽度一半, 让选中的按钮在中心点
      };
    }), Z = d(() => {
      if (h.value) {
        const { normalButtonWidth: t, maxButtonCount: e, offset: a, carouselWidth: o } = h.value, r = e / 2;
        let s = (t * (l.value - r) + a) * -1;
        return s >= 0 ? s = 0 : s <= -o + t * e && (s = -o + t * e), s;
      }
      return 0;
    });
    function ee(t) {
      window.requestAnimationFrame ? window.requestAnimationFrame(t) : t();
    }
    function te(t, e = !0) {
      ee(() => {
        e ? j(setTimeout.bind(null, t, n.offsetAnimationTime)) : setTimeout(t, n.offsetAnimationTime);
      });
    }
    function L(t) {
      te(() => {
        _.value = !1, l.value = t;
      }, !1);
    }
    const y = Q((t, e) => {
      if (n.disabled) return;
      _.value || (_.value = !0);
      const a = i.value.appendCount;
      let o = e - a;
      if (v.value == o) return;
      l.value = e, o < 0 ? (L(u.value.length + o + a), o = u.value.length - 1) : o >= u.value.length && (L(a), o = 0), v.value = o;
      const r = u.value[o];
      W.value = r == null ? void 0 : r.value;
      const s = {
        index: o,
        label: r == null ? void 0 : r.label,
        value: r == null ? void 0 : r.value,
        data: r
      };
      Y("change", s);
    }, n.offsetAnimationTime);
    return (t, e) => (m(), b("div", _e, [
      c("div", we, [
        M.value ? (m(), b("div", {
          key: 0,
          class: "lc-carouse-box__wrapper__arrow arrow--left",
          onClick: e[0] || (e[0] = //@ts-ignore
          (...a) => p($) && p($)(...a))
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
                class: I(["lc-carouse-box__wrapper__tabs--train", { "is-transition": _.value }]),
                style: se({ "--carousel-offset": `translateX(${Z.value}px)` }),
                ref_key: "carouselTrainElRef",
                ref: k
              },
              [
                (m(!0), b(
                  ie,
                  null,
                  ue(g.value, (a, o) => (m(), b("button", {
                    class: I(["lc-carouse-box__wrapper__tabs--train__button", { active: l.value === o, "is-even": E.value }]),
                    key: t.rowKey(a),
                    onClick: (r) => p(y)(a, o),
                    ref_for: !0,
                    ref_key: "tabButtonRef",
                    ref: C
                  }, [
                    J(t.$slots, "default", fe({ ref_for: !0 }, { record: a, isActive: l.value === o, isEven: E.value, isTransition: _.value, index: o, handleClick: p(y) }), () => [
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
        M.value ? (m(), b("div", {
          key: 1,
          class: "lc-carouse-box__wrapper__arrow arrow--right",
          onClick: e[1] || (e[1] = //@ts-ignore
          (...a) => p(z) && p(z)(...a))
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
      t.showTrack ? (m(), b("div", he, [
        J(t.$slots, "track", {}, () => [
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
