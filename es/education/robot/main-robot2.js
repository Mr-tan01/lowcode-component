import { defineComponent as Z, mergeModels as M, mergeDefaults as ee, computed as b, watchEffect as te, ref as ae, useModel as ne, openBlock as i, createElementBlock as s, createElementVNode as r, withDirectives as k, createTextVNode as re, toDisplayString as w, unref as u, vShow as le, vModelText as oe, Fragment as y, renderList as T, normalizeStyle as _, createVNode as ie } from "vue";
import se from "./images/main-robot.png.js";
import ue from "./images/voice.png.js";
import me from "./images/microphone.png.js";
import { useSpeech as ce } from "./speech.js";
import de from "./icon/index.js";
import { defStarData as N } from "./const.js";
import { useStarRotate as fe } from "./main-robot-hook.js";
import _e from "lodash-es/memoize";
import { useMessage as pe } from "naive-ui";
const ve = { class: "lc-main-robot" }, ge = { class: "lc-main-robot__wrapper" }, be = { class: "lc-main-robot__wrapper__inner-input" }, we = { class: "lc-main-robot__wrapper__inner-input--content" }, he = { class: "lc-main-robot__wrapper__inner-input--help" }, xe = ["placeholder", "disabled"], Ae = { class: "lc-main-robot__wrapper__inner-input--content__suffix" }, Ce = { class: "lc-main-robot__wrapper__star-wrap--star__meta" }, Se = ["title", "onClick"], Me = ["title", "onClick"], Ie = /* @__PURE__ */ Z({
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
    const D = pe(), { start: E, stop: $, output: p, on: z } = ce();
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
      angleOffset: c,
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
      e < 0 || N.slice(e * -1).forEach((n, l) => {
        const o = f.value.length - e + l;
        O.value.push(o);
      });
    });
    const H = b(() => 360 / a.duration), J = b(() => 1e3 / a.duration), m = ae(a.animate);
    let A;
    function K(e) {
      window.requestAnimationFrame ? window.requestAnimationFrame.call(this, e) : e();
    }
    function v() {
      m.value && setTimeout(() => {
        m.value && K(() => {
          c.value += H.value, c.value >= 360 && (c.value = 0), v();
        });
      }, J.value);
    }
    m.value && v();
    const C = R;
    function S(e, t) {
      c.value = x.value * t * -1, C("click", e, t);
    }
    function P(e, t) {
      c.value = x.value * t * -1, C("itemClick", e, t);
    }
    function Q() {
      clearTimeout(A), m.value = !1;
    }
    function X() {
      A = setTimeout(() => {
        m.value || (m.value = a.animate, v());
      }, 2e3);
    }
    const g = ne(a, "value");
    return z("result", () => {
      var e;
      g.value = ((e = p.value) == null ? void 0 : e.textContent) || "";
    }), (e, t) => (i(), s("div", ve, [
      r("div", ge, [
        t[2] || (t[2] = r(
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
        r("div", be, [
          r("div", we, [
            k(r(
              "div",
              he,
              [
                t[1] || (t[1] = r(
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
            k(r("input", {
              type: "text",
              placeholder: a.placeholder,
              "onUpdate:modelValue": t[0] || (t[0] = (n) => g.value = n),
              disabled: a.forbidden,
              class: "lc-main-robot__wrapper__inner-input--content__input"
            }, null, 8, xe), [
              [oe, g.value]
            ]),
            r("div", Ae, [
              r(
                "img",
                {
                  class: "lc-main-robot__wrapper__inner-input--content__suffix--img",
                  src: me,
                  draggable: "false",
                  onMousedown: F,
                  onMouseup: I,
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
            ref: B
          },
          [
            (i(!0), s(
              y,
              null,
              T(f.value, (n, l) => (i(), s(
                "div",
                {
                  class: "lc-main-robot__wrapper__star-wrap--star",
                  style: _(u(V)(l)),
                  key: n.key ?? l,
                  ref_for: !0,
                  ref_key: "starElRefs",
                  ref: L,
                  onMouseenter: Q,
                  onMouseleave: X
                },
                [
                  ie(u(de), {
                    onClick: (o) => S(n, l),
                    domain: n.domain,
                    name: n.name,
                    size: n.size
                  }, null, 8, ["onClick", "domain", "name", "size"]),
                  r("div", Ce, [
                    (i(!0), s(
                      y,
                      null,
                      T(n.meta, (o, d) => (i(), s(
                        "div",
                        {
                          class: "lc-main-robot__wrapper__star-wrap--star__meta--item",
                          key: d,
                          style: _({ "--left-offset-number": d, "--left-reverse-offset-number": u(G)(n.meta.length, d) })
                        },
                        [
                          d === 0 ? (i(), s("div", {
                            key: 0,
                            class: "lc-main-robot__wrapper__star-wrap--star__meta--item--text",
                            title: o.label,
                            style: _(u(h)(l)),
                            onClick: (Y) => S(n, l)
                          }, w(o.label), 13, Se)) : (i(), s("div", {
                            key: 1,
                            class: "lc-main-robot__wrapper__star-wrap--star__meta--item--text",
                            title: o.label,
                            style: _(u(h)(l)),
                            onClick: (Y) => P(o, d)
                          }, w(o.label), 13, Me))
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
  Ie as default
};
