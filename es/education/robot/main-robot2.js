import { defineComponent as Q, mergeModels as w, mergeDefaults as X, computed as g, watchEffect as Y, ref as Z, useModel as ee, openBlock as s, createElementBlock as i, createElementVNode as n, withDirectives as b, createTextVNode as te, toDisplayString as x, unref as u, vShow as ae, vModelText as ne, Fragment as A, renderList as S, normalizeStyle as M, createVNode as re } from "vue";
import oe from "./images/main-robot.png.js";
import le from "./images/voice.png.js";
import se from "./images/microphone.png.js";
import { useSpeech as ie } from "./speech.js";
import ue from "./icon/index.js";
import { defStarData as y } from "./const.js";
import { useStarRotate as me } from "./main-robot-hook.js";
import ce from "lodash-es/memoize";
import { useMessage as de } from "naive-ui";
const fe = { class: "lc-main-robot" }, _e = { class: "lc-main-robot__wrapper" }, pe = { class: "lc-main-robot__wrapper__inner-input" }, ve = { class: "lc-main-robot__wrapper__inner-input--content" }, ge = { class: "lc-main-robot__wrapper__inner-input--help" }, he = ["placeholder", "disabled"], we = { class: "lc-main-robot__wrapper__inner-input--content__suffix" }, be = ["onClick"], xe = { class: "lc-main-robot__wrapper__star-wrap--star__meta" }, Ae = { class: "lc-main-robot__wrapper__star-wrap--star__meta--item--text" }, ze = /* @__PURE__ */ Q({
  __name: "main-robot",
  props: /* @__PURE__ */ w(/* @__PURE__ */ X({
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
  emits: /* @__PURE__ */ w(["click"], ["update:value"]),
  setup(a, { emit: C }) {
    const k = de(), { start: N, stop: R, output: f, on: T } = ie();
    function D() {
      a.forbidden ? k.warning("此功能敬请期待") : N();
    }
    function E() {
      a.forbidden || R();
    }
    const {
      starWrapperRef: z,
      customRotateStyle: F,
      starLneght: B,
      starElRefs: I,
      angleOffset: m,
      averageAngle: V,
      startAngle: $,
      starMaxShowCount: q,
      displayAlternately: L,
      fullAngle: U
    } = me(), W = ce((e, t) => e - (t + 1), (e, t) => `${e}-${t}`), c = g(() => {
      var e;
      return (e = a.stars) != null && e.length ? a.stars : y;
    });
    Y(() => {
      var t;
      B.value = ((t = c.value) == null ? void 0 : t.length) || 0, $.value = a.startAngle, q.value = a.maxShowCount, U.value = a.fullAngle;
      const e = c.value.length - a.maxShowCount;
      e < 0 || y.slice(e * -1).forEach((r, l) => {
        const d = c.value.length - e + l;
        L.value.push(d);
      });
    });
    const O = g(() => 360 / a.duration), j = g(() => 1e3 / a.duration), o = Z(a.animate);
    let h;
    function G(e) {
      window.requestAnimationFrame ? window.requestAnimationFrame.call(this, e) : e();
    }
    function _() {
      o.value && setTimeout(() => {
        o.value && G(() => {
          m.value += O.value, m.value >= 360 && (m.value = 0), _();
        });
      }, j.value);
    }
    o.value && _();
    const H = C;
    function J(e, t) {
      m.value = V.value * t * -1, H("click", e, t);
    }
    function K() {
      clearTimeout(h), o.value = !1;
    }
    function P() {
      h = setTimeout(() => {
        o.value || (o.value = a.animate, _());
      }, 2e3);
    }
    const p = ee(a, "value");
    return T("result", () => {
      var e;
      p.value = ((e = f.value) == null ? void 0 : e.textContent) || "";
    }), (e, t) => (s(), i("div", fe, [
      n("div", _e, [
        t[2] || (t[2] = n(
          "img",
          {
            class: "lc-main-robot__img",
            src: oe,
            draggable: "false",
            alt: ""
          },
          null,
          -1
          /* HOISTED */
        )),
        n("div", pe, [
          n("div", ve, [
            b(n(
              "div",
              ge,
              [
                t[1] || (t[1] = n(
                  "img",
                  {
                    class: "lc-main-robot__wrapper__inner-input--help--voice",
                    src: le,
                    draggable: "false",
                    alt: ""
                  },
                  null,
                  -1
                  /* HOISTED */
                )),
                te(
                  " " + x(u(f).helpText),
                  1
                  /* TEXT */
                )
              ],
              512
              /* NEED_PATCH */
            ), [
              [ae, u(f).helpText]
            ]),
            b(n("input", {
              type: "text",
              placeholder: a.placeholder,
              "onUpdate:modelValue": t[0] || (t[0] = (r) => p.value = r),
              disabled: a.forbidden,
              class: "lc-main-robot__wrapper__inner-input--content__input"
            }, null, 8, he), [
              [ne, p.value]
            ]),
            n("div", we, [
              n(
                "img",
                {
                  class: "lc-main-robot__wrapper__inner-input--content__suffix--img",
                  src: se,
                  draggable: "false",
                  onMousedown: D,
                  onMouseup: E,
                  alt: ""
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
            class: "lc-main-robot__wrapper__star-wrap",
            ref_key: "starWrapperRef",
            ref: z
          },
          [
            (s(!0), i(
              A,
              null,
              S(c.value, (r, l) => (s(), i("div", {
                class: "lc-main-robot__wrapper__star-wrap--star",
                style: M(u(F)(l)),
                key: r.key ?? l,
                ref_for: !0,
                ref_key: "starElRefs",
                ref: I,
                onMouseenter: K,
                onMouseleave: P,
                onClick: (d) => J(r, l)
              }, [
                re(u(ue), {
                  domain: r.domain,
                  name: r.name,
                  size: r.size
                }, null, 8, ["domain", "name", "size"]),
                n("div", xe, [
                  (s(!0), i(
                    A,
                    null,
                    S(r.meta, (d, v) => (s(), i(
                      "div",
                      {
                        class: "lc-main-robot__wrapper__star-wrap--star__meta--item",
                        key: v,
                        style: M({ "--left-offset-number": v, "--left-reverse-offset-number": u(W)(r.meta.length, v) })
                      },
                      [
                        n(
                          "div",
                          Ae,
                          x(d.label),
                          1
                          /* TEXT */
                        )
                      ],
                      4
                      /* STYLE */
                    ))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])
              ], 44, be))),
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
  ze as default
};
