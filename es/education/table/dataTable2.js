import { defineComponent, ref, computed, createElementBlock, openBlock, createVNode, unref, mergeProps, withCtx } from "vue";
import { NDataTable } from "naive-ui";
import LcEmpty from "./empty/index.js";
const _hoisted_1 = { class: "lc-data-table" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "dataTable",
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    },
    pageSize: {
      type: Number,
      default: void 0
    },
    showPagination: {
      type: Boolean,
      default: true
    }
  },
  emits: ["sort"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const dataTableRef = ref(null);
    const pagination = computed(() => props.showPagination ? { pageSize: props.pageSize || 10 } : false);
    const handleSorterChange = (state) => {
      emit("sort", state);
    };
    __expose({
      getInstance: () => dataTableRef.value
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(NDataTable), mergeProps({
          ref_key: "dataTableRef",
          ref: dataTableRef,
          columns: __props.columns,
          data: __props.data,
          pagination: pagination.value,
          style: { height: "100%" },
          "flex-height": ""
        }, _ctx.$attrs, { "onUpdate:sorter": handleSorterChange }), {
          empty: withCtx(() => [
            createVNode(unref(LcEmpty))
          ]),
          _: 1
          /* STABLE */
        }, 16, ["columns", "data", "pagination"])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
