import { defineComponent as A, mergeModels as _, mergeDefaults as y, useCssVars as V, ref as B, useModel as M, computed as F, watch as N, openBlock as d, createElementBlock as i, createElementVNode as r, createVNode as u, unref as n, withCtx as h, normalizeClass as m, createStaticVNode as S, Fragment as b, renderList as p, createBlock as Z, toDisplayString as D } from "vue";
import x from "./checkbox/index.js";
import E from "./checkbox/checkbox-group.js";
import './assets/headline/radiohead.css';import './assets/icon/icon.css';import './assets/headline/headline.css';/* empty css               */
import R from "./headline/subhead.js";
/* empty css           */
import "lowcode-share/es/share";
/* empty css                   */
const U = { class: "lc-checkbox-filter" }, $ = { class: "lc-checkbox-filter__check__all lc-checkbox-gaid" }, z = { class: "lc-checkbox-gaid" }, P = /* @__PURE__ */ A({
  __name: "checkoutbox-filter",
  props: /* @__PURE__ */ _(/* @__PURE__ */ y({
    row: {
      type: Number
    },
    dataList: {
      type: Array
    },
    isCheckAll: {
      type: Boolean
    }
  }, {
    row: 2,
    dataList: () => [],
    isCheckAll: !1
  }), {
    value: { default: [] },
    valueModifiers: {}
  }),
  emits: /* @__PURE__ */ _(["check"], ["update:value"]),
  setup(s, { emit: L }) {
    V((l) => ({
      "2dc0fdff": s.row
    }));
    const g = L, a = B(!1), c = M(s, "value"), f = F(() => s.dataList.reduce((l, e) => (e.children && l.push(...e.children.map((t) => t.value)), l), [])), v = (l) => {
      if (!l) {
        k();
        return;
      }
      c.value = f.value;
    }, k = () => {
      c.value = [], a.value = !1;
    }, C = () => {
      const l = f.value, e = c.value;
      a.value = l.every((t) => e.includes(t));
    };
    return s.isCheckAll && (a.value = !0, v(a.value)), N(c, (l) => {
      C(), g("check", l);
    }), (l, e) => (d(), i("div", U, [
      r("div", $, [
        u(n(x), {
          class: "lc-checkbox-gaid__row",
          checked: a.value,
          "onUpdate:checked": [
            e[0] || (e[0] = (t) => a.value = t),
            v
          ]
        }, {
          default: h(() => [
            r(
              "span",
              {
                class: m(["lc-checkbox-filter__check__label", { "lc-checkbox-filter__check__label--selected": a.value }])
              },
              "全选",
              2
              /* CLASS */
            )
          ]),
          _: 1
          /* STABLE */
        }, 8, ["checked"]),
        r("span", {
          class: "check-reset lc-checkbox-gaid__row",
          onClick: k
        }, e[2] || (e[2] = [
          S('<div class="check-reset__icon" data-v-bdbdbf63><svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-v-bdbdbf63><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" data-v-bdbdbf63><g transform="translate(-344, -220)" data-v-bdbdbf63><g id="编组-2" transform="translate(344, 218)" data-v-bdbdbf63><g id="refresh" transform="translate(0, 2)" data-v-bdbdbf63><path d="M0,0 L15.9565679,0 L15.9565679,16 L0,16 Z" id="refresh-(Background)" data-v-bdbdbf63></path><path d="M13.2174605,7.99868345 L14.1761871,7.99868345 C14.176188,4.54763269 11.4013631,1.75 7.97844137,1.75 C5.7481695,1.75 3.79304044,2.93771338 2.70135186,4.72001243 L2.70135174,2.64251906 L1.74524962,2.64251906 L1.74524955,5.74893761 C1.74524955,6.02507998 1.96910717,6.24893761 2.24524955,6.24893761 C2.24524957,6.24893761 2.24524959,6.24893761 2.24524962,6.24893761 L5.32227219,6.24893713 L5.32227219,6.24893713 L5.32227219,5.28497791 L3.48097946,5.28497815 C4.39709313,3.74210536 6.07039562,2.71133503 7.97844137,2.7113356 C10.8669382,2.7113364 13.2174614,5.07360196 13.2174605,7.99868345 Z M2.73941745,7.998631 C2.73941665,10.9237127 5.08993982,13.286026 7.97843804,13.286027 C9.88648247,13.286027 11.5597845,12.2552587 12.4758982,10.7123852 L10.634296,10.7123852 L10.634296,9.74842548 L13.7113183,9.74842548 C13.9874607,9.74842548 14.2113183,9.97228311 14.2113183,10.2484255 L14.2113183,13.3548441 L14.2113183,13.3548441 L13.2552167,13.3548441 L13.2552167,11.2778559 C12.1634682,13.0598733 10.2084988,14.2473631 7.97843756,14.2473631 C4.55551581,14.2473631 1.78068946,11.449683 1.78069137,7.998631 L2.73941745,7.998631 Z" fill="#0FFBF8" data-v-bdbdbf63></path></g></g></g></g></svg></div><span data-v-bdbdbf63>重置</span>', 2)
        ]))
      ]),
      u(n(E), {
        value: c.value,
        "onUpdate:value": e[1] || (e[1] = (t) => c.value = t)
      }, {
        default: h(() => [
          (d(!0), i(
            b,
            null,
            p(s.dataList, (t, w) => (d(), i(
              b,
              { key: w },
              [
                u(n(R), {
                  class: "lc-checkbox-filter__check__title",
                  hideRadioIcon: !0,
                  text: t.label
                }, null, 8, ["text"]),
                r("div", z, [
                  (d(!0), i(
                    b,
                    null,
                    p(t.children, (o) => (d(), Z(n(x), {
                      class: "lc-checkbox-gaid__row",
                      value: o.value,
                      key: o.value
                    }, {
                      default: h(() => [
                        r(
                          "span",
                          {
                            class: m(["lc-checkbox-filter__check__label", { "lc-checkbox-filter__check__label--selected": c.value.includes(o.value) }])
                          },
                          D(o.label),
                          3
                          /* TEXT, CLASS */
                        )
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1032, ["value"]))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])
              ],
              64
              /* STABLE_FRAGMENT */
            ))),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["value"])
    ]));
  }
});
export {
  P as default
};
