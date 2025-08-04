import { defineComponent as Z, mergeModels as M, mergeDefaults as ee, computed as b, watchEffect as te, ref as ae, useModel as ne, openBlock as i, createElementBlock as s, createElementVNode as n, withDirectives as k, createTextVNode as re, toDisplayString as w, unref as u, vShow as le, vModelText as oe, renderSlot as ie, Fragment as y, renderList as T, normalizeStyle as _, createVNode as se } from "vue";
import ue from "./images/main-robot.png.js";
import ce from "./images/voice.png.js";
import me from "./images/microphone.png.js";
import { useSpeech as de } from "./speech.js";
import fe from "./icon/index.js";
import './assets/icon/iconCard.css';/* empty css              */
import { defStarData as N } from "./const.js";
import { useStarRotate as _e } from "./main-robot-hook.js";
import pe from "lodash-es/memoize";
import { useMessage as ve } from "naive-ui";
const ge = { class: "lc-main-robot" }, be = { class: "lc-main-robot__wrapper" }, we = { class: "lc-main-robot__wrapper__inner-input" }, he = { class: "lc-main-robot__wrapper__inner-input--content" }, xe = { class: "lc-main-robot__wrapper__inner-input--help" }, Ae = ["placeholder", "disabled"], Ce = { class: "lc-main-robot__wrapper__inner-input--content__suffix" }, Se = { class: "lc-main-robot-icon" }, Me = { class: "lc-main-robot__wrapper__star-wrap--star__meta" }, ke = ["title", "onClick"], ye = ["title", "onClick"], qe = /* @__PURE__ */ Z({
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
    const $ = ve(), { start: D, stop: E, output: p, on: z } = de();
    function F() {
      a.forbidden ? $.warning("此功能敬请期待") : D();
    }
    function I() {
      a.forbidden || E();
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
    } = _e(), G = pe(
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
    }), (e, t) => (i(), s("div", ge, [
      n("div", be, [
        t[2] || (t[2] = n(
          "img",
          {
            class: "lc-main-robot__img",
            src: ue,
            draggable: "false",
            alt: ""
          },
          null,
          -1
          /* HOISTED */
        )),
        n("div", we, [
          n("div", he, [
            k(n(
              "div",
              xe,
              [
                t[1] || (t[1] = n(
                  "img",
                  {
                    class: "lc-main-robot__wrapper__inner-input--help--voice",
                    src: ce,
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
            }, null, 8, Ae), [
              [oe, g.value]
            ]),
            n("div", Ce, [
              ie(e.$slots, "input-suffix", {}, () => [
                n(
                  "img",
                  {
                    class: "lc-main-robot__wrapper__inner-input--content__suffix--img",
                    src: me,
                    draggable: "false",
                    alt: "",
                    onMousedown: F,
                    onMouseup: I
                  },
                  null,
                  32
                  /* NEED_HYDRATION */
                )
              ], !0)
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
                  n("div", Se, [
                    se(u(fe), {
                      class: "lc-main-robot-icon-center",
                      domain: r.domain,
                      name: r.name,
                      size: r.size,
                      onClick: (o) => S(r, l)
                    }, null, 8, ["domain", "name", "size", "onClick"])
                  ]),
                  n("div", Me, [
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
                          }, w(o.label), 13, ke)) : (i(), s("div", {
                            key: 1,
                            class: "lc-main-robot__wrapper__star-wrap--star__meta--item--text",
                            title: o.label,
                            style: _(u(h)(l)),
                            onClick: (Y) => P(o, d)
                          }, w(o.label), 13, ye))
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
  qe as default
};
