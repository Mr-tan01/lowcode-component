import { defineComponent, ref, watch, computed, openBlock, createElementBlock, createElementVNode, Fragment, renderList, normalizeStyle, renderSlot, createVNode, unref, withCtx } from "vue";
import { NTooltip } from "naive-ui/es/tooltip";
const _hoisted_1 = { class: "lc-common-legend" };
const _hoisted_2 = { class: "lc-common-legend__wrapper__legend" };
const _hoisted_3 = ["onClick", "onMouseenter", "onMouseleave"];
const _hoisted_4 = { class: "lc-common-legend__trigger" };
const _hoisted_5 = ["innerHTML"];
const _hoisted_6 = ["innerHTML"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "legend",
  props: {
    options: { default: () => ({}) },
    legendLabel: { type: Function, default: (name) => name },
    disabled: { type: Boolean, default: false }
  },
  emits: ["legend:click", "legend:toggleSelect"],
  setup(__props, { emit: __emit }) {
    const legendSelectedMaps = ref(/* @__PURE__ */ new Map());
    watch(
      () => __props.options.series,
      () => {
        var _a, _b;
        legendSelectedMaps.value.clear();
        if (!Array.isArray(__props.options.series)) return;
        (_b = (_a = __props.options.series[0]) == null ? void 0 : _a.data) == null ? void 0 : _b.forEach((item) => {
          if (!item.name) {
            return window.console.warn("item.name is required");
          }
          legendSelectedMaps.value.set(item.name, {
            selected: true,
            ...item
          });
        });
      },
      {
        deep: 2,
        immediate: true
      }
    );
    const $emit = __emit;
    function dispatchAction(type, name) {
      $emit("legend:toggleSelect", {
        type,
        name
      });
    }
    function togggleLegendSelected(name) {
      if (!legendSelectedMaps.value.has(name) || __props.disabled) return;
      const record = legendSelectedMaps.value.get(name);
      dispatchAction((record == null ? void 0 : record.selected) ? "legendUnSelect" : "legendSelect", name);
      legendSelectedMaps.value.set(name, {
        ...record,
        selected: !(record == null ? void 0 : record.selected)
      });
    }
    function legendClick(record) {
      togggleLegendSelected(record.name);
      $emit("legend:click", record);
    }
    function getLegendStyle(index, record) {
      var _a;
      const { color = [] } = __props.options ?? {};
      return {
        "--item-color": color[index],
        "--unselect-color": !((_a = legendSelectedMaps.value.get(record.name)) == null ? void 0 : _a.selected) ? 0.5 : 1
      };
    }
    const customLegendData = computed(() => {
      var _a, _b, _c, _d;
      return ((_b = (_a = __props.options) == null ? void 0 : _a.series) == null ? void 0 : _b[0].data) ?? ((_d = (_c = __props.options) == null ? void 0 : _c.series) == null ? void 0 : _d.data) ?? [];
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(customLegendData.value, (item, key) => {
              return openBlock(), createElementBlock("div", {
                key,
                class: "lc-common-legend__wrapper__legend__item",
                style: normalizeStyle(getLegendStyle(key, item)),
                onClick: ($event) => legendClick(item),
                onMouseenter: ($event) => dispatchAction("highlight", item.name),
                onMouseleave: ($event) => dispatchAction("downplay", item.name)
              }, [
                renderSlot(_ctx.$slots, "legend", { record: item }, () => [
                  createVNode(
                    unref(NTooltip),
                    { delay: 800 },
                    {
                      trigger: withCtx(() => [
                        createElementVNode("div", _hoisted_4, [
                          _cache[0] || (_cache[0] = createElementVNode(
                            "div",
                            { class: "lc-common-legend__wrapper__legend__item__icon" },
                            null,
                            -1
                            /* HOISTED */
                          )),
                          createElementVNode("div", {
                            class: "lc-common-legend__wrapper__legend__item__label",
                            innerHTML: _ctx.legendLabel(item.name, item.value)
                          }, null, 8, _hoisted_5)
                        ])
                      ]),
                      default: withCtx(() => [
                        createElementVNode("span", {
                          innerHTML: _ctx.legendLabel(item.name, item.value)
                        }, null, 8, _hoisted_6)
                      ]),
                      _: 2
                      /* DYNAMIC */
                    },
                    1024
                    /* DYNAMIC_SLOTS */
                  )
                ], true)
              ], 44, _hoisted_3);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
