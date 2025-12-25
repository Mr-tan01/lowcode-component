import { defineComponent, createElementBlock, openBlock, createElementVNode, createStaticVNode } from "vue";
const _hoisted_1 = {
  width: "11px",
  height: "14px",
  viewBox: "0 0 11 14",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
};
const _hoisted_2 = {
  id: "linearGradient-1",
  x1: "35.4484364%",
  y1: "-29.2626313%",
  x2: "50%",
  y2: "100%"
};
const _hoisted_3 = ["stop-color"];
const _hoisted_4 = ["stop-color"];
const _hoisted_5 = {
  id: "linearGradient-2",
  x1: "50%",
  y1: "0%",
  x2: "50%",
  y2: "100%"
};
const _hoisted_6 = ["stop-color"];
const _hoisted_7 = ["stop-color"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "icon",
  props: {
    color: { default: "#FB800F" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", _hoisted_1, [
        _cache[2] || (_cache[2] = createElementVNode(
          "title",
          null,
          "路径备份 7",
          -1
          /* CACHED */
        )),
        createElementVNode("defs", null, [
          createElementVNode("linearGradient", _hoisted_2, [
            createElementVNode("stop", {
              "stop-color": _ctx.color,
              offset: "0%"
            }, null, 8, _hoisted_3),
            createElementVNode("stop", {
              "stop-color": _ctx.color,
              offset: "100%"
            }, null, 8, _hoisted_4)
          ]),
          createElementVNode("linearGradient", _hoisted_5, [
            createElementVNode("stop", {
              "stop-color": _ctx.color,
              offset: "0%"
            }, null, 8, _hoisted_6),
            createElementVNode("stop", {
              "stop-color": _ctx.color,
              offset: "100%"
            }, null, 8, _hoisted_7)
          ]),
          _cache[0] || (_cache[0] = createElementVNode(
            "path",
            {
              id: "path-3",
              d: "M10.7170463,8.26873647 C10.7170463,10.364948 9.34620563,11.7354105 7.66992671,13.0237157 C6.82312165,13.6745282 6.17618217,14.9135097 5.72917376,16.7406762 C5.6877948,16.9095946 5.52691179,17.0178567 5.35848326,16.9975628 C5.19013448,17.0178567 5.02925147,16.9095946 4.9878725,16.7406762 C4.5408641,14.9135097 3.89392462,13.6745282 3.04711955,13.0237157 L2.89089576,12.9026767 C1.28650181,11.6490479 0,10.2994413 0,8.26873647 C0,5.35889367 2.39866845,3 5.35757595,3 C8.31837781,3 10.7170463,5.35889367 10.7170463,8.26873647 Z"
            },
            null,
            -1
            /* CACHED */
          )),
          _cache[1] || (_cache[1] = createElementVNode(
            "mask",
            {
              id: "mask-4",
              maskContentUnits: "userSpaceOnUse",
              maskUnits: "objectBoundingBox",
              x: "0",
              y: "0",
              width: "10.7170463",
              height: "14",
              fill: "white"
            },
            [
              createElementVNode("use", { "xlink:href": "#path-3" })
            ],
            -1
            /* CACHED */
          ))
        ]),
        _cache[3] || (_cache[3] = createStaticVNode('<g id="高质量发展中心-学前教育-学前教育数据概览【待确认】" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-dasharray="0,0"><g id="高质量发展中心-学前教育数据概览备份" transform="translate(-916, -910)" fill="url(#linearGradient-1)" stroke="url(#linearGradient-2)" stroke-width="2"><g id="编组-25" transform="translate(785, 897)"><g id="编组-10" transform="translate(131, 10)"><use id="路径备份-7" mask="url(#mask-4)" xlink:href="#path-3"></use></g></g></g></g>', 1))
      ]);
    };
  }
});
export {
  _sfc_main as default
};
