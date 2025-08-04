import { defineComponent as Z, mergeModels as M, mergeDefaults as ee, computed as b, watchEffect as te, ref as ae, useModel as ne, openBlock as i, createElementBlock as s, createElementVNode as n, withDirectives as k, createTextVNode as re, toDisplayString as w, unref as u, vShow as le, vModelText as oe, Fragment as y, renderList as T, normalizeStyle as _, createVNode as ie } from "vue";
import se from "./images/main-robot.png.js";
import ue from "./images/voice.png.js";
import ce from "./images/microphone.png.js";
import { useSpeech as me } from "./speech.js";
import de from "./icon/index.js";
import './assets/icon/iconCard.css';/* empty css              */
import { defStarData as N } from "./const.js";
import { useStarRotate as fe } from "./main-robot-hook.js";
import _e from "lodash-es/memoize";
import { useMessage as pe } from "naive-ui";
const ve = { class: "lc-main-robot" }, ge = { class: "lc-main-robot__wrapper" }, be = { class: "lc-main-robot__wrapper__inner-input" }, we = { class: "lc-main-robot__wrapper__inner-input--content" }, he = { class: "lc-main-robot__wrapper__inner-input--help" }, xe = ["placeholder", "disabled"], Ae = { class: "lc-main-robot__wrapper__inner-input--content__suffix" }, Ce = { class: "lc-main-robot-icon" }, Se = { class: "lc-main-robot__wrapper__star-wrap--star__meta" }, Me = ["title", "onClick"], ke = ["title", "onClick"], Ve = /* @__PURE__ */ Z({
  __name: "main-robot",
  props: /* @__PURE__ */ M(/* @__PURE__ */ ee({
    placeholder: String,
    stars: Array,
    duration: Number,
    animate: Boolean,
    startAngle: Number,
    maxShowCount: Number,
    fullAngle: Number,
    forbidden: Boolean
  }, {
    placeholder: "AI 智能问数",
    stars: () => {
    },
    duration: 1e3,
    animate: !0,
    startAngle: 90,
    maxShowCount: 7,
    fullAngle: 360,
    forbidden: !1
  }), {
    value: { default: "" },
    valueModifiers: {}
  }),
  emits: /* @__PURE__ */ M(["click", "itemClick"], ["update:value"]),
  setup(a, { emit: R }) {
    const D = pe(), { start: E, stop: $, output: p, on: z } = me();
    function F() {
      a.forbidden ? D.warning("此功能敬请期待") : E();
    }
    function I() {
      a.forbidden || $();
    }
    const {
      starWrapperRef: B,
      customRotateStyle: V,
      getTextStyle: h,
      starLneght: q,
      starElRefs: L,
      angleOffset: m,
      averageAngle: x,
      startAngle: U,
      starMaxShowCount: W,
      displayAlternately: O,
      fullAngle: j
    } = fe(), G = _e(
      (e, t) => e - (t + 1),
      (e, t) => `${e}-${t}`
    ), f = b(() => {
      var e;
      return (e = a.stars) != null && e.length ? a.stars : N;
    });
    te(() => {
      var t;
      q.value = ((t = f.value) == null ? void 0 : t.length) || 0, U.value = a.startAngle, W.value = a.maxShowCount, j.value = a.fullAngle;
      const e = f.value.length - a.maxShowCount;
      e < 0 || N.slice(e * -1).forEach((r, l) => {
        const o = f.value.length - e + l;
        O.value.push(o);
      });
    });
    const H = b(() => 360 / a.duration), J = b(() => 1e3 / a.duration), c = ae(a.animate);
    let A;
    function K(e) {
      window.requestAnimationFrame ? window.requestAnimationFrame.call(this, e) : e();
    }
    function v() {
      c.value && setTimeout(() => {
        c.value && K(() => {
          m.value += H.value, m.value >= 360 && (m.value = 0), v();
        });
      }, J.value);
    }
    c.value && v();
    const C = R;
    function S(e, t) {
      m.value = x.value * t * -1, C("click", e, t);
    }
    function P(e, t) {
      m.value = x.value * t * -1, C("itemClick", e, t);
    }
    function Q() {
      clearTimeout(A), c.value = !1;
    }
    function X() {
      A = setTimeout(() => {
        c.value || (c.value = a.animate, v());
      }, 2e3);
    }
    const g = ne(a, "value");
    return z("result", () => {
      var e;
      g.value = ((e = p.value) == null ? void 0 : e.textContent) || "";
    }), (e, t) => (i(), s("div", ve, [
      n("div", ge, [
        t[2] || (t[2] = n(
          "img",
          {
            class: "lc-main-robot__img",
            src: se,
            draggable: "false",
            alt: ""
          },
          null,
          -1
          /* HOISTED */
        )),
        n("div", be, [
          n("div", we, [
            k(n(
              "div",
              he,
              [
                t[1] || (t[1] = n(
                  "img",
                  {
                    class: "lc-main-robot__wrapper__inner-input--help--voice",
                    src: ue,
                    draggable: "false",
                    alt: ""
                  },
                  null,
                  -1
                  /* HOISTED */
                )),
                re(
                  " " + w(u(p).helpText),
                  1
                  /* TEXT */
                )
              ],
              512
              /* NEED_PATCH */
            ), [
              [le, u(p).helpText]
            ]),
            k(n("input", {
              "onUpdate:modelValue": t[0] || (t[0] = (r) => g.value = r),
              type: "text",
              placeholder: a.placeholder,
              disabled: a.forbidden,
              class: "lc-main-robot__wrapper__inner-input--content__input"
            }, null, 8, xe), [
              [oe, g.value]
            ]),
            n("div", Ae, [
              n(
                "img",
                {
                  class: "lc-main-robot__wrapper__inner-input--content__suffix--img",
                  src: ce,
                  draggable: "false",
                  alt: "",
                  onMousedown: F,
                  onMouseup: I
                },
                null,
                32
                /* NEED_HYDRATION */
              )
            ])
          ])
        ]),
        n(
          "div",
          {
            ref_key: "starWrapperRef",
            ref: B,
            class: "lc-main-robot__wrapper__star-wrap"
          },
          [
            (i(!0), s(
              y,
              null,
              T(f.value, (r, l) => (i(), s(
                "div",
                {
                  key: r.key ?? l,
                  ref_for: !0,
                  ref_key: "starElRefs",
                  ref: L,
                  class: "lc-main-robot__wrapper__star-wrap--star",
                  style: _(u(V)(l)),
                  onMouseenter: Q,
                  onMouseleave: X
                },
                [
                  n("div", Ce, [
                    ie(u(de), {
                      class: "lc-main-robot-icon-center",
                      domain: r.domain,
                      name: r.name,
                      size: r.size,
                      onClick: (o) => S(r, l)
                    }, null, 8, ["domain", "name", "size", "onClick"])
                  ]),
                  n("div", Se, [
                    (i(!0), s(
                      y,
                      null,
                      T(r.meta, (o, d) => (i(), s(
                        "div",
                        {
                          key: d,
                          class: "lc-main-robot__wrapper__star-wrap--star__meta--item",
                          style: _({
                            "--left-offset-number": d,
                            "--left-reverse-offset-number": u(G)(r.meta.length, d)
                          })
                        },
                        [
                          d === 0 ? (i(), s("div", {
                            key: 0,
                            class: "lc-main-robot__wrapper__star-wrap--star__meta--item--text",
                            title: o.label,
                            style: _(u(h)(l)),
                            onClick: (Y) => S(r, l)
                          }, w(o.label), 13, Me)) : (i(), s("div", {
                            key: 1,
                            class: "lc-main-robot__wrapper__star-wrap--star__meta--item--text",
                            title: o.label,
                            style: _(u(h)(l)),
                            onClick: (Y) => P(o, d)
                          }, w(o.label), 13, ke))
                        ],
                        4
                        /* STYLE */
                      ))),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ])
                ],
                36
                /* STYLE, NEED_HYDRATION */
              ))),
              128
              /* KEYED_FRAGMENT */
            ))
          ],
          512
          /* NEED_PATCH */
        )
      ])
    ]));
  }
});
export {
  Ve as default
};
