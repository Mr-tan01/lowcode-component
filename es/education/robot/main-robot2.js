import { defineComponent as Y, mergeModels as C, mergeDefaults as Z, computed as g, watchEffect as ee, ref as te, useModel as ae, openBlock as l, createElementBlock as o, createElementVNode as r, withDirectives as S, createTextVNode as ne, toDisplayString as w, unref as d, vShow as re, vModelText as le, Fragment as k, renderList as M, normalizeStyle as y, createVNode as oe } from "vue";
import ie from "./images/main-robot.png.js";
import se from "./images/voice.png.js";
import ue from "./images/microphone.png.js";
import { useSpeech as me } from "./speech.js";
import ce from "./icon/index.js";
import { defStarData as N } from "./const.js";
import { useStarRotate as de } from "./main-robot-hook.js";
import fe from "lodash-es/memoize";
import { useMessage as _e } from "naive-ui";
const pe = { class: "lc-main-robot" }, ve = { class: "lc-main-robot__wrapper" }, ge = { class: "lc-main-robot__wrapper__inner-input" }, we = { class: "lc-main-robot__wrapper__inner-input--content" }, be = { class: "lc-main-robot__wrapper__inner-input--help" }, he = ["placeholder", "disabled"], xe = { class: "lc-main-robot__wrapper__inner-input--content__suffix" }, Ae = { class: "lc-main-robot__wrapper__star-wrap--star__meta" }, Ce = ["onClick"], Se = ["onClick"], Fe = /* @__PURE__ */ Y({
  __name: "main-robot",
  props: /* @__PURE__ */ C(/* @__PURE__ */ Z({
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
  emits: /* @__PURE__ */ C(["click", "itemClick"], ["update:value"]),
  setup(a, { emit: R }) {
    const T = _e(), { start: D, stop: E, output: _, on: $ } = me();
    function z() {
      a.forbidden ? T.warning("此功能敬请期待") : D();
    }
    function F() {
      a.forbidden || E();
    }
    const {
      starWrapperRef: I,
      customRotateStyle: B,
      starLneght: V,
      starElRefs: q,
      angleOffset: m,
      averageAngle: b,
      startAngle: L,
      starMaxShowCount: U,
      displayAlternately: W,
      fullAngle: O
    } = de(), j = fe(
      (e, t) => e - (t + 1),
      (e, t) => `${e}-${t}`
    ), f = g(() => {
      var e;
      return (e = a.stars) != null && e.length ? a.stars : N;
    });
    ee(() => {
      var t;
      V.value = ((t = f.value) == null ? void 0 : t.length) || 0, L.value = a.startAngle, U.value = a.maxShowCount, O.value = a.fullAngle;
      const e = f.value.length - a.maxShowCount;
      e < 0 || N.slice(e * -1).forEach((n, s) => {
        const u = f.value.length - e + s;
        W.value.push(u);
      });
    });
    const G = g(() => 360 / a.duration), H = g(() => 1e3 / a.duration), i = te(a.animate);
    let h;
    function J(e) {
      window.requestAnimationFrame ? window.requestAnimationFrame.call(this, e) : e();
    }
    function p() {
      i.value && setTimeout(() => {
        i.value && J(() => {
          m.value += G.value, m.value >= 360 && (m.value = 0), p();
        });
      }, H.value);
    }
    i.value && p();
    const x = R;
    function A(e, t) {
      m.value = b.value * t * -1, x("click", e, t);
    }
    function K(e, t) {
      m.value = b.value * t * -1, x("itemClick", e, t);
    }
    function P() {
      clearTimeout(h), i.value = !1;
    }
    function Q() {
      h = setTimeout(() => {
        i.value || (i.value = a.animate, p());
      }, 2e3);
    }
    const v = ae(a, "value");
    return $("result", () => {
      var e;
      v.value = ((e = _.value) == null ? void 0 : e.textContent) || "";
    }), (e, t) => (l(), o("div", pe, [
      r("div", ve, [
        t[2] || (t[2] = r(
          "img",
          {
            class: "lc-main-robot__img",
            src: ie,
            draggable: "false",
            alt: ""
          },
          null,
          -1
          /* HOISTED */
        )),
        r("div", ge, [
          r("div", we, [
            S(r(
              "div",
              be,
              [
                t[1] || (t[1] = r(
                  "img",
                  {
                    class: "lc-main-robot__wrapper__inner-input--help--voice",
                    src: se,
                    draggable: "false",
                    alt: ""
                  },
                  null,
                  -1
                  /* HOISTED */
                )),
                ne(
                  " " + w(d(_).helpText),
                  1
                  /* TEXT */
                )
              ],
              512
              /* NEED_PATCH */
            ), [
              [re, d(_).helpText]
            ]),
            S(r("input", {
              type: "text",
              placeholder: a.placeholder,
              "onUpdate:modelValue": t[0] || (t[0] = (n) => v.value = n),
              disabled: a.forbidden,
              class: "lc-main-robot__wrapper__inner-input--content__input"
            }, null, 8, he), [
              [le, v.value]
            ]),
            r("div", xe, [
              r(
                "img",
                {
                  class: "lc-main-robot__wrapper__inner-input--content__suffix--img",
                  src: ue,
                  draggable: "false",
                  onMousedown: z,
                  onMouseup: F,
                  alt: ""
                },
                null,
                32
                /* NEED_HYDRATION */
              )
            ])
          ])
        ]),
        r(
          "div",
          {
            class: "lc-main-robot__wrapper__star-wrap",
            ref_key: "starWrapperRef",
            ref: I
          },
          [
            (l(!0), o(
              k,
              null,
              M(f.value, (n, s) => (l(), o(
                "div",
                {
                  class: "lc-main-robot__wrapper__star-wrap--star",
                  style: y(d(B)(s)),
                  key: n.key ?? s,
                  ref_for: !0,
                  ref_key: "starElRefs",
                  ref: q,
                  onMouseenter: P,
                  onMouseleave: Q
                },
                [
                  oe(d(ce), {
                    onClick: (u) => A(n, s),
                    domain: n.domain,
                    name: n.name,
                    size: n.size
                  }, null, 8, ["onClick", "domain", "name", "size"]),
                  r("div", Ae, [
                    (l(!0), o(
                      k,
                      null,
                      M(n.meta, (u, c) => (l(), o(
                        "div",
                        {
                          class: "lc-main-robot__wrapper__star-wrap--star__meta--item",
                          key: c,
                          style: y({ "--left-offset-number": c, "--left-reverse-offset-number": d(j)(n.meta.length, c) })
                        },
                        [
                          c === 0 ? (l(), o("div", {
                            key: 0,
                            class: "lc-main-robot__wrapper__star-wrap--star__meta--item--text",
                            onClick: (X) => A(n, s)
                          }, w(u.label), 9, Ce)) : (l(), o("div", {
                            key: 1,
                            class: "lc-main-robot__wrapper__star-wrap--star__meta--item--text",
                            onClick: (X) => K(u, c)
                          }, w(u.label), 9, Se))
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
  Fe as default
};
