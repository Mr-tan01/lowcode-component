import { defineComponent as J, mergeModels as x, mergeDefaults as K, computed as g, watchEffect as P, ref as Q, useModel as X, openBlock as i, createElementBlock as u, createElementVNode as n, withDirectives as A, createTextVNode as Y, toDisplayString as S, unref as l, vShow as Z, vModelText as ee, Fragment as y, renderList as C, normalizeStyle as M, createVNode as te } from "vue";
import ae from "./images/main-robot.png.js";
import re from "./images/voice.png.js";
import ne from "./images/microphone.png.js";
import { useSpeech as le } from "./speech.js";
import oe from "./icon/index.js";
import { defStarData as k } from "./const.js";
import { useStarRotate as se } from "./main-robot-hook.js";
import ie from "lodash-es/memoize";
const ue = { class: "lc-main-robot" }, me = { class: "lc-main-robot__wrapper" }, ce = { class: "lc-main-robot__wrapper__inner-input" }, _e = { class: "lc-main-robot__wrapper__inner-input--content" }, fe = { class: "lc-main-robot__wrapper__inner-input--help" }, de = ["placeholder"], pe = { class: "lc-main-robot__wrapper__inner-input--content__suffix" }, ve = ["onClick"], ge = { class: "lc-main-robot__wrapper__star-wrap--star__meta" }, we = { class: "lc-main-robot__wrapper__star-wrap--star__meta--item--text" }, Ne = /* @__PURE__ */ J({
  __name: "main-robot",
  props: /* @__PURE__ */ x(/* @__PURE__ */ K({
    placeholder: String,
    stars: Array,
    duration: Number,
    animate: Boolean,
    startAngle: Number,
    maxShowCount: Number,
    fullAngle: Number
  }, {
    placeholder: "AI 智能问数",
    stars: () => {
    },
    duration: 1e3,
    animate: !0,
    startAngle: 90,
    maxShowCount: 7,
    fullAngle: 360
  }), {
    value: { default: "" },
    valueModifiers: {}
  }),
  emits: /* @__PURE__ */ x(["click"], ["update:value"]),
  setup(r, { emit: N }) {
    const { start: w, stop: h, output: f, on: R } = le(), {
      starWrapperRef: T,
      customRotateStyle: E,
      starLneght: z,
      starElRefs: D,
      angleOffset: m,
      averageAngle: F,
      startAngle: I,
      starMaxShowCount: V,
      displayAlternately: $,
      fullAngle: q
    } = se(), B = ie((t, e) => t - (e + 1), (t, e) => `${t}-${e}`), c = g(() => {
      var t;
      return (t = r.stars) != null && t.length ? r.stars : k;
    });
    P(() => {
      var e;
      z.value = ((e = c.value) == null ? void 0 : e.length) || 0, I.value = r.startAngle, V.value = r.maxShowCount, q.value = r.fullAngle;
      const t = c.value.length - r.maxShowCount;
      t < 0 || k.slice(t * -1).forEach((a, s) => {
        const _ = c.value.length - t + s;
        $.value.push(_);
      });
    });
    const L = g(() => 360 / r.duration), W = g(() => 1e3 / r.duration), o = Q(r.animate);
    let b;
    function O(t) {
      window.requestAnimationFrame ? window.requestAnimationFrame.call(this, t) : t();
    }
    function d() {
      o.value && setTimeout(() => {
        o.value && O(() => {
          m.value += L.value, m.value >= 360 && (m.value = 0), d();
        });
      }, W.value);
    }
    o.value && d();
    const U = N;
    function j(t, e) {
      m.value = F.value * e * -1, U("click", t, e);
    }
    function G() {
      clearTimeout(b), o.value = !1;
    }
    function H() {
      b = setTimeout(() => {
        o.value || (o.value = r.animate, d());
      }, 2e3);
    }
    const p = X(r, "value");
    return R("result", () => {
      var t;
      p.value = ((t = f.value) == null ? void 0 : t.textContent) || "";
    }), (t, e) => (i(), u("div", ue, [
      n("div", me, [
        e[4] || (e[4] = n(
          "img",
          {
            class: "lc-main-robot__img",
            src: ae,
            draggable: "false",
            alt: ""
          },
          null,
          -1
          /* HOISTED */
        )),
        n("div", ce, [
          n("div", _e, [
            A(n(
              "div",
              fe,
              [
                e[3] || (e[3] = n(
                  "img",
                  {
                    class: "lc-main-robot__wrapper__inner-input--help--voice",
                    src: re,
                    draggable: "false",
                    alt: ""
                  },
                  null,
                  -1
                  /* HOISTED */
                )),
                Y(
                  " " + S(l(f).helpText),
                  1
                  /* TEXT */
                )
              ],
              512
              /* NEED_PATCH */
            ), [
              [Z, l(f).helpText]
            ]),
            A(n("input", {
              type: "text",
              placeholder: r.placeholder,
              "onUpdate:modelValue": e[0] || (e[0] = (a) => p.value = a),
              class: "lc-main-robot__wrapper__inner-input--content__input"
            }, null, 8, de), [
              [ee, p.value]
            ]),
            n("div", pe, [
              n(
                "img",
                {
                  class: "lc-main-robot__wrapper__inner-input--content__suffix--img",
                  src: ne,
                  draggable: "false",
                  onMousedown: e[1] || (e[1] = //@ts-ignore
                  (...a) => l(w) && l(w)(...a)),
                  onMouseup: e[2] || (e[2] = //@ts-ignore
                  (...a) => l(h) && l(h)(...a)),
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
            ref: T
          },
          [
            (i(!0), u(
              y,
              null,
              C(c.value, (a, s) => (i(), u("div", {
                class: "lc-main-robot__wrapper__star-wrap--star",
                style: M(l(E)(s)),
                key: a.key ?? s,
                ref_for: !0,
                ref_key: "starElRefs",
                ref: D,
                onMouseenter: G,
                onMouseleave: H,
                onClick: (_) => j(a, s)
              }, [
                te(l(oe), {
                  domain: a.domain,
                  name: a.name,
                  size: a.size
                }, null, 8, ["domain", "name", "size"]),
                n("div", ge, [
                  (i(!0), u(
                    y,
                    null,
                    C(a.meta, (_, v) => (i(), u(
                      "div",
                      {
                        class: "lc-main-robot__wrapper__star-wrap--star__meta--item",
                        key: v,
                        style: M({ "--left-offset-number": v, "--left-reverse-offset-number": l(B)(a.meta.length, v) })
                      },
                      [
                        n(
                          "div",
                          we,
                          S(_.label),
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
              ], 44, ve))),
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
  Ne as default
};
