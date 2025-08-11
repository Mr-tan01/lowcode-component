import { defineComponent, openBlock, createBlock, unref, withCtx, renderSlot } from "vue";
import { NConfigProvider } from "naive-ui/es/config-provider";
import { darkTheme } from "naive-ui/es/themes";
import { dateZhCN, zhCN } from "naive-ui/es/locales";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(NConfigProvider), {
        "date-locale": unref(dateZhCN),
        locale: unref(zhCN),
        theme: unref(darkTheme)
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["date-locale", "locale", "theme"]);
    };
  }
});
export {
  _sfc_main as default
};
