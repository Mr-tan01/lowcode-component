import { defineComponent as oe, mergeModels as O, mergeDefaults as re, useCssVars as le, ref as x, useModel as N, computed as d, shallowRef as B, watch as X, nextTick as j, onMounted as G, openBlock as m, createElementBlock as b, createElementVNode as f, unref as C, createCommentVNode as R, normalizeClass as I, normalizeStyle as ue, Fragment as se, renderList as ie, renderSlot as J, mergeProps as ce, toDisplayString as fe } from "vue";
import ve from "./images/lt-arrow.png.js";
import de from "./images/rt-arrow.png.js";
import me from "./images/top-arrow.png.js";
import Q from "lodash-es/throttle";
import be from "lodash-es/debounce";
import { propsRaw as Ce } from "./props.js";
const pe = { class: "lc-carouse-box" }, we = { class: "lc-carouse-box__wrapper" }, ge = ["onClick"], he = ["title"], ke = {
  key: 0,
  class: "lc-carouse-box__track"
}, We = /* @__PURE__ */ oe({
  __name: "carouseBox",
  props: /* @__PURE__ */ O(/* @__PURE__ */ re(Ce, {
    offsetAnimationTime: 250,
    rowKey: (a) => a.value ?? Math.random(),
    __skip_rowKey: !0,
    showTrack: !0,
    gap: 10,
    disabled: !1,
    backCenter: !0
  }), {
    index: { default: -1 },
    indexModifiers: {},
    value: { default: "" },
    valueModifiers: {}
  }),
  emits: /* @__PURE__ */ O(["change"], ["update:index", "update:value"]),
  setup(a, { emit: U }) {
    var P;
    le((t) => ({
      "0cbcbb43": t.gap,
      "2d2d450b": t.offsetAnimationTime
    }));
    const l = x(0), p = x(!0), v = N(a, "index"), W = N(a, "value"), i = d(() => a.list ?? []), M = d(() => !a.disabled);
    v.value === -1 && (v.value = ((P = i.value) == null ? void 0 : P.findIndex((t) => a.rowKey(t) === W.value)) ?? 0);
    const Y = U, s = x({
      before: [],
      after: [],
      appendCount: 0
    }), g = d(() => {
      const t = i.value ?? [];
      return [...s.value.before, ...t, ...s.value.after];
    }), E = d(() => l.value % 2 === 0);
    function D() {
      l.value = v.value;
    }
    D();
    function K(t) {
      return Q(() => {
        let e = l.value + t;
        e < 0 ? e = g.value.length - 1 : e >= g.value.length && (e = 0), T(g.value[e], e);
      }, a.offsetAnimationTime);
    }
    const $ = K(-1), z = K(1), h = B([]), w = B(), _ = B(), S = x(0);
    X(
      () => a.list,
      () => {
        F(), j(A);
      },
      {
        deep: 1
      }
    ), X(
      () => v.value,
      () => {
        H();
      }
    ), G(A);
    function A() {
      if (!k.value) return;
      const { maxAppendCount: t } = k.value, e = t;
      if (e === 0) return;
      if (s.value.appendCount = e, D(), l.value += e, a.disabled) {
        s.value.before = [], s.value.after = [];
        return;
      }
      const n = i.value ?? [];
      s.value.before = n.slice(-e).map(V), s.value.after = n.slice(0, e).map(V);
    }
    function V(t, e) {
      return {
        ...t,
        value: a.rowKey(t) + "_clone_" + e + "_" + Date.now()
      };
    }
    function F() {
      S.value++;
    }
    function H() {
      if (!window.ResizeObserver || !w.value) return;
      new ResizeObserver(
        be(() => {
          F(), A();
        }, a.offsetAnimationTime)
      ).observe(w.value);
    }
    G(H);
    const k = d(() => {
      var q;
      if (S.value++, !w.value || !h.value || !_.value) return;
      const t = w.value.offsetWidth, e = {
        normal: 0,
        active: 0
      };
      for (let y = 0; y <= h.value.length; y++) {
        const c = h.value[y];
        if ((q = c == null ? void 0 : c.classList) != null && q.contains("active") ? e.active = c.offsetWidth : e.normal = c == null ? void 0 : c.offsetWidth, e.active && e.normal)
          break;
      }
      const n = e.normal, o = e.active, r = t / n, u = r, ae = a.disabled ? 0 : Math.round(r), ne = _.value.offsetWidth;
      return {
        normalButtonWidth: a.backCenter ? n : 0,
        maxButtonCount: a.backCenter ? u : 0,
        carouselWidth: a.backCenter ? ne : 0,
        maxAppendCount: a.backCenter ? ae : 0,
        offset: a.backCenter ? o / 2 : 0
        // 加上选中的按钮宽度一半, 让选中的按钮在中心点
      };
    }), Z = d(() => {
      if (k.value) {
        const { normalButtonWidth: t, maxButtonCount: e, offset: n, carouselWidth: o } = k.value, r = e / 2;
        let u = (t * (l.value - r) + n) * -1;
        return u >= 0 ? u = 0 : u <= -o + t * e && (u = -o + t * e), u;
      }
      return 0;
    });
    function ee(t) {
      window.requestAnimationFrame ? window.requestAnimationFrame(t) : t();
    }
    function te(t, e = !0) {
      ee(() => {
        e ? j(setTimeout.bind(null, t, a.offsetAnimationTime)) : setTimeout(t, a.offsetAnimationTime);
      });
    }
    function L(t) {
      te(() => {
        p.value = !1, l.value = t;
      }, !1);
    }
    const T = Q((t, e) => {
      if (a.disabled) return;
      p.value || (p.value = !0);
      const n = s.value.appendCount;
      let o = e - n;
      if (v.value == o) return;
      l.value = e, o < 0 ? (L(i.value.length + o + n), o = i.value.length - 1) : o >= i.value.length && (L(n), o = 0), v.value = o;
      const r = i.value[o];
      W.value = r == null ? void 0 : r.value;
      const u = {
        index: o,
        label: r == null ? void 0 : r.label,
        value: r == null ? void 0 : r.value,
        data: r
      };
      Y("change", u);
    }, a.offsetAnimationTime);
    return (t, e) => (m(), b("div", pe, [
      f("div", we, [
        M.value ? (m(), b("div", {
          key: 0,
          class: "lc-carouse-box__wrapper__arrow arrow--left",
          onClick: e[0] || (e[0] = //@ts-ignore
          (...n) => C($) && C($)(...n))
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
        ]))) : R("v-if", !0),
        f(
          "div",
          {
            class: "lc-carouse-box__wrapper__tabs",
            ref_key: "tabButtonParentElRef",
            ref: w
          },
          [
            f(
              "div",
              {
                class: I(["lc-carouse-box__wrapper__tabs--train", { "is-transition": p.value }]),
                style: ue({ "--carousel-offset": `translateX(${Z.value}px)` }),
                ref_key: "carouselTrainElRef",
                ref: _
              },
              [
                (m(!0), b(
                  se,
                  null,
                  ie(g.value, (n, o) => (m(), b("button", {
                    class: I(["lc-carouse-box__wrapper__tabs--train__button", { active: l.value === o, "is-even": E.value }]),
                    key: t.rowKey(n),
                    onClick: (r) => C(T)(n, o),
                    ref_for: !0,
                    ref_key: "tabButtonRef",
                    ref: h
                  }, [
                    J(t.$slots, "default", ce({ ref_for: !0 }, { record: n, isActive: l.value === o, isEven: E.value, isTransition: p.value, index: o, handleClick: C(T) }), () => [
                      f("div", {
                        class: "lc-carouse-box__wrapper__tabs--train__button--text",
                        title: n.label
                      }, fe(n.label), 9, he)
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
          (...n) => C(z) && C(z)(...n))
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
        ]))) : R("v-if", !0)
      ]),
      t.showTrack ? (m(), b("div", ke, [
        J(t.$slots, "track", {}, () => [
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
      ])) : R("v-if", !0)
    ]));
  }
});
export {
  We as default
};
