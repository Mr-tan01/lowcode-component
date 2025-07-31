import { defineComponent as ne, mergeModels as O, mergeDefaults as re, useCssVars as le, ref as x, useModel as N, computed as m, shallowRef as B, watch as X, nextTick as j, onMounted as G, openBlock as b, createElementBlock as C, createElementVNode as f, unref as v, createCommentVNode as R, normalizeClass as I, normalizeStyle as se, Fragment as ue, renderList as ie, renderSlot as J, mergeProps as ce, toDisplayString as fe } from "vue";
import ve from "./images/lt-arrow.png.js";
import de from "./images/rt-arrow.png.js";
import me from "./images/top-arrow.png.js";
import { scale as be } from "../../../../../node_modules/.pnpm/mmjs-core@0.13.4_vue@3.5.13_typescript@5.6.3_/node_modules/mmjs-core/dist/es/utils/scale.js";
import Q from "lodash-es/throttle";
import Ce from "lodash-es/debounce";
import { propsRaw as pe } from "./props.js";
const we = { class: "lc-carouse-box" }, ge = { class: "lc-carouse-box__wrapper" }, he = ["onClick"], ke = ["title"], xe = {
  key: 0,
  class: "lc-carouse-box__track"
}, Ee = /* @__PURE__ */ ne({
  __name: "carouseBox",
  props: /* @__PURE__ */ O(/* @__PURE__ */ re(pe, {
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
      "38887a9a": t.gap,
      ed55133c: t.offsetAnimationTime
    }));
    const l = x(0), p = x(!0), d = N(a, "index"), W = N(a, "value"), i = m(() => a.list ?? []), M = m(() => !a.disabled);
    d.value === -1 && (d.value = ((P = i.value) == null ? void 0 : P.findIndex((t) => a.rowKey(t) === W.value)) ?? 0);
    const Y = U, u = x({
      before: [],
      after: [],
      appendCount: 0
    }), g = m(() => {
      const t = i.value ?? [];
      return [...u.value.before, ...t, ...u.value.after];
    }), E = m(() => l.value % 2 === 0);
    function D() {
      l.value = d.value;
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
      () => d.value,
      () => {
        H();
      }
    ), G(A);
    function A() {
      if (!k.value) return;
      const { maxAppendCount: t } = k.value, e = t;
      if (e === 0) return;
      if (u.value.appendCount = e, D(), l.value += e, a.disabled) {
        u.value.before = [], u.value.after = [];
        return;
      }
      const o = i.value ?? [];
      u.value.before = o.slice(-e).map(V), u.value.after = o.slice(0, e).map(V);
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
        Ce(() => {
          F(), A();
        }, a.offsetAnimationTime)
      ).observe(w.value);
    }
    G(H);
    const k = m(() => {
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
      const o = e.normal, n = e.active, r = t / o, s = r, ae = a.disabled ? 0 : Math.round(r), oe = _.value.offsetWidth;
      return {
        normalButtonWidth: a.backCenter ? o : 0,
        maxButtonCount: a.backCenter ? s : 0,
        carouselWidth: a.backCenter ? oe : 0,
        maxAppendCount: a.backCenter ? ae : 0,
        offset: a.backCenter ? n / 2 : 0
        // 加上选中的按钮宽度一半, 让选中的按钮在中心点
      };
    }), Z = m(() => {
      if (k.value) {
        const { normalButtonWidth: t, maxButtonCount: e, offset: o, carouselWidth: n } = k.value, r = e / 2;
        let s = (t * (l.value - r) + o) * -1;
        return s >= 0 ? s = 0 : s <= -n + t * e && (s = -n + t * e), s;
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
      const o = u.value.appendCount;
      let n = e - o;
      if (d.value == n) return;
      l.value = e, n < 0 ? (L(i.value.length + n + o), n = i.value.length - 1) : n >= i.value.length && (L(o), n = 0), d.value = n;
      const r = i.value[n];
      W.value = r == null ? void 0 : r.value;
      const s = {
        index: n,
        label: r == null ? void 0 : r.label,
        value: r == null ? void 0 : r.value,
        data: r
      };
      Y("change", s);
    }, a.offsetAnimationTime);
    return (t, e) => (b(), C("div", we, [
      f("div", ge, [
        M.value ? (b(), C("div", {
          key: 0,
          class: "lc-carouse-box__wrapper__arrow arrow--left",
          onClick: e[0] || (e[0] = //@ts-ignore
          (...o) => v($) && v($)(...o))
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
            ref_key: "tabButtonParentElRef",
            ref: w,
            class: "lc-carouse-box__wrapper__tabs"
          },
          [
            f(
              "div",
              {
                ref_key: "carouselTrainElRef",
                ref: _,
                class: I(["lc-carouse-box__wrapper__tabs--train", { "is-transition": p.value }]),
                style: se({
                  "--carousel-offset": `translateX(${v(be)(Z.value)}px)`
                })
              },
              [
                (b(!0), C(
                  ue,
                  null,
                  ie(g.value, (o, n) => (b(), C("button", {
                    key: t.rowKey(o),
                    ref_for: !0,
                    ref_key: "tabButtonRef",
                    ref: h,
                    class: I(["lc-carouse-box__wrapper__tabs--train__button", {
                      active: l.value === n,
                      "is-even": E.value
                    }]),
                    onClick: (r) => v(T)(o, n)
                  }, [
                    J(t.$slots, "default", ce({ ref_for: !0 }, {
                      record: o,
                      isActive: l.value === n,
                      isEven: E.value,
                      isTransition: p.value,
                      index: n,
                      handleClick: v(T)
                    }), () => [
                      f("div", {
                        class: "lc-carouse-box__wrapper__tabs--train__button--text",
                        title: o.label
                      }, fe(o.label), 9, ke)
                    ], !0)
                  ], 10, he))),
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
        M.value ? (b(), C("div", {
          key: 1,
          class: "lc-carouse-box__wrapper__arrow arrow--right",
          onClick: e[1] || (e[1] = //@ts-ignore
          (...o) => v(z) && v(z)(...o))
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
      t.showTrack ? (b(), C("div", xe, [
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
  Ee as default
};
