import { defineComponent, ref, computed, watch, createElementBlock, openBlock, createElementVNode, toDisplayString, Fragment, renderList, normalizeStyle, withDirectives, vShow } from "vue";
const _hoisted_1 = { class: "legend-progress" };
const _hoisted_2 = { class: "legend-progress__label" };
const _hoisted_3 = { class: "legend-progress__center" };
const _hoisted_4 = { class: "legend-progress__center__min-value sample-text" };
const _hoisted_5 = ["onMouseenter"];
const _hoisted_6 = { class: "legend-progress__center__max-value sample-text" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "legendProgress",
  props: {
    label: {
      type: String,
      default: "预警人数占比"
    },
    data: {
      type: Array,
      required: true,
      validator: (value) => value.every((item) => item >= 0 && item <= 1)
    }
  },
  emits: ["update-stops"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const activeTooltip = ref({
      value: null,
      x: 0
    });
    const tooltipStyle = computed(() => {
      var _a;
      return {
        left: `${Math.min(Math.max(activeTooltip.value.x, 0), ((_a = progressBar.value) == null ? void 0 : _a.clientWidth) || 0)}px`
      };
    });
    const showTooltip = (value, event) => {
      if (!progressBar.value) return;
      const rect = progressBar.value.getBoundingClientRect();
      activeTooltip.value = {
        value,
        x: event.clientX - rect.left
      };
    };
    const hideTooltip = () => {
      activeTooltip.value = { value: null, x: 0 };
    };
    const roundMin = (value) => {
      const decimal = value * 100 % 10;
      return decimal < 1 ? Math.floor(value * 1e3) / 10 : Math.ceil(value * 1e3) / 10;
    };
    const roundMax = (value) => {
      return Math.round(value * 100);
    };
    const processedData = computed(() => {
      const unique = [...new Set(props.data)];
      return unique.sort((a, b) => a - b);
    });
    const displayMin = computed(() => {
      return processedData.value.length > 0 ? roundMin(processedData.value[0]) : 0;
    });
    const displayMax = computed(() => {
      return processedData.value.length > 0 ? roundMax(processedData.value[processedData.value.length - 1]) : 0;
    });
    const formattedMin = computed(() => displayMin.value.toFixed(1));
    const formattedMax = computed(() => displayMax.value.toFixed(1));
    const generateColors = (count) => {
      if (count === 0) return [];
      const colors = [];
      const hueStart = 240;
      const hueEnd = 60;
      const hueStep = (hueEnd - hueStart) / Math.max(1, count - 1);
      for (let i = 0; i < count - 1; i++) {
        const hue = hueStart + i * hueStep;
        const saturation = 80 + Math.random() * 15;
        const lightness = 45 + Math.random() * 15;
        const hslToRgb = (h, s, l) => {
          s /= 100;
          l /= 100;
          const k = (n) => (n + h / 30) % 12;
          const a = s * Math.min(l, 1 - l);
          const f = (n) => l - a * Math.max(Math.min(k(n) - 3, 9 - k(n), 1), -1);
          const r = Math.round(f(0) * 255);
          const g = Math.round(f(8) * 255);
          const b = Math.round(f(4) * 255);
          return `rgba(${r}, ${g}, ${b}, 1)`;
        };
        colors.push(hslToRgb(hue, saturation, lightness));
      }
      if (count > 0) {
        colors.push("rgba(255, 80, 80, 1)");
      }
      return colors;
    };
    const segments = computed(() => {
      if (processedData.value.length === 0) return [];
      const colors = generateColors(processedData.value.length);
      const segmentWidth = 100 / processedData.value.length;
      return processedData.value.map((value, index) => ({
        value,
        style: {
          width: `${segmentWidth}%`,
          background: colors[index]
        }
      }));
    });
    const outputStops = computed(() => {
      return segments.value.map((segment, index) => ({
        range: [segment.value],
        stop: [
          {
            "stop-color": segment.style.background,
            "stop-opacity": 1,
            "offset": `${index / segments.value.length * 100}%`
          }
        ]
      }));
    });
    watch(
      outputStops,
      (val) => {
        emit("update-stops", val);
      },
      { immediate: true, deep: true }
    );
    const progressBar = ref(null);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode(
          "div",
          _hoisted_2,
          toDisplayString(__props.label),
          1
          /* TEXT */
        ),
        createElementVNode("div", _hoisted_3, [
          createElementVNode(
            "div",
            _hoisted_4,
            toDisplayString(formattedMin.value) + "%",
            1
            /* TEXT */
          ),
          createElementVNode(
            "div",
            {
              ref_key: "progressBar",
              ref: progressBar,
              class: "legend-progress__center__progress-bar"
            },
            [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(segments.value, (segment, index) => {
                  return openBlock(), createElementBlock("div", {
                    key: index,
                    class: "progress-segment",
                    style: normalizeStyle(segment.style),
                    onMouseenter: ($event) => showTooltip(segment.value, $event),
                    onMouseleave: hideTooltip
                  }, [
                    withDirectives(createElementVNode(
                      "div",
                      {
                        class: "segment-tooltip",
                        style: normalizeStyle(tooltipStyle.value)
                      },
                      toDisplayString((segment.value * 100).toFixed(1)) + "% ",
                      5
                      /* TEXT, STYLE */
                    ), [
                      [vShow, activeTooltip.value.value === segment.value]
                    ])
                  ], 44, _hoisted_5);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ],
            512
            /* NEED_PATCH */
          ),
          createElementVNode(
            "div",
            _hoisted_6,
            toDisplayString(formattedMax.value) + "%",
            1
            /* TEXT */
          )
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
