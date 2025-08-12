import { defineComponent, computed, openBlock, createElementBlock, Fragment, renderList, createElementVNode, toDisplayString, normalizeStyle } from "vue";
import { defaultFunnelTierOptions, defaultFunnelTierSeriesOptions } from "./themeConfig/funnelTier/index.js";
import merge from "lodash-es/merge";
const _hoisted_1 = { class: "lc-funnel-tier" };
const _hoisted_2 = { class: "lc-funnel-tier__serie__item__label" };
const _hoisted_3 = { class: "lc-funnel-tier__serie__item__bar__inner--text" };
const _hoisted_4 = { class: "lc-funnel-tier__serie__item__value" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "funnelTier",
  props: {
    options: {}
  },
  setup(__props) {
    const computedOptions = computed(() => {
      const newOptions = merge({}, defaultFunnelTierOptions, __props.options);
      newOptions.series = newOptions.series.map((serie) => {
        return merge({}, defaultFunnelTierSeriesOptions, serie);
      });
      return newOptions;
    });
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList((_a = computedOptions.value) == null ? void 0 : _a.series, (serie, key) => {
            return openBlock(), createElementBlock("div", {
              key,
              class: "lc-funnel-tier__serie"
            }, [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(serie == null ? void 0 : serie.data, (item, index) => {
                  var _a2;
                  return openBlock(), createElementBlock("div", {
                    key: index,
                    class: "lc-funnel-tier__serie__item"
                  }, [
                    createElementVNode(
                      "div",
                      _hoisted_2,
                      toDisplayString(item.name),
                      1
                      /* TEXT */
                    ),
                    createElementVNode(
                      "div",
                      {
                        class: "lc-funnel-tier__serie__item__bar",
                        style: normalizeStyle({
                          "--inner-color": computedOptions.value.color[index]
                        })
                      },
                      [
                        _cache[0] || (_cache[0] = createElementVNode(
                          "div",
                          { class: "lc-funnel-tier__serie__item__bar__line" },
                          null,
                          -1
                          /* HOISTED */
                        )),
                        createElementVNode(
                          "div",
                          {
                            class: "lc-funnel-tier__serie__item__bar__inner",
                            style: normalizeStyle({
                              "--inner-width": `${item.value / serie.max * 100}%`
                            })
                          },
                          [
                            createElementVNode(
                              "div",
                              _hoisted_3,
                              toDisplayString((_a2 = serie == null ? void 0 : serie.label) == null ? void 0 : _a2.call(serie, item, serie)),
                              1
                              /* TEXT */
                            )
                          ],
                          4
                          /* STYLE */
                        ),
                        _cache[1] || (_cache[1] = createElementVNode(
                          "div",
                          { class: "lc-funnel-tier__serie__item__bar__line" },
                          null,
                          -1
                          /* HOISTED */
                        ))
                      ],
                      4
                      /* STYLE */
                    ),
                    createElementVNode(
                      "div",
                      _hoisted_4,
                      toDisplayString(item.value),
                      1
                      /* TEXT */
                    )
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]);
    };
  }
});
export {
  _sfc_main as default
};
