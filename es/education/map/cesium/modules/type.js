import shenZhen from "./深圳市（各区）.json.js";
const areaData = {
  深圳市: { lng: 114.063109, lat: 22.544522, value: 440300, position: [] },
  光明区: {
    lng: 113.91634116522685,
    lat: 22.77147302900205,
    value: 440300,
    position: shenZhen.features[0]
  },
  坪山区: {
    lng: 114.35193598950553,
    lat: 22.688581371110487,
    value: 440311,
    position: shenZhen.features[1]
  },
  龙华区: {
    lng: 114.01646181978259,
    lat: 22.68598921119512,
    value: 440310,
    position: shenZhen.features[2]
  },
  盐田区: {
    lng: 114.26346681948235,
    lat: 22.604011992313712,
    value: 440309,
    position: shenZhen.features[3]
  },
  大鹏新区: {
    lng: 114.47102586735873,
    lat: 22.609556483035444,
    value: 440312,
    position: shenZhen.features[4]
  },
  宝安区: {
    lng: 113.86094318766183,
    lat: 22.67707802403516,
    value: 440306,
    position: shenZhen.features[6]
  },
  龙岗区: {
    lng: 114.22287589397995,
    lat: 22.69074582647359,
    value: 440307,
    position: shenZhen.features[5]
  },
  南山区: {
    lng: 113.93782045247285,
    lat: 22.564987074695313,
    value: 440305,
    position: shenZhen.features[7]
  },
  福田区: {
    lng: 114.04493542407288,
    lat: 22.551374363514963,
    value: 440304,
    position: shenZhen.features[8]
  },
  罗湖区: {
    lng: 114.14519824740296,
    lat: 22.58076759041863,
    value: 440303,
    position: shenZhen.features[9]
  },
  深汕特别合作区: {
    lng: 115.05755762333229,
    lat: 22.864619116888704,
    value: 440313,
    position: shenZhen.features[10]
  }
};
var CanvasMode = /* @__PURE__ */ ((CanvasMode2) => {
  CanvasMode2["Text"] = "text";
  CanvasMode2["Image"] = "image";
  return CanvasMode2;
})(CanvasMode || {});
var CanvasType = /* @__PURE__ */ ((CanvasType2) => {
  CanvasType2["Danger"] = "danger";
  CanvasType2["Success"] = "success";
  CanvasType2["Primary"] = "primary";
  CanvasType2["Warning"] = "warning";
  CanvasType2["Hover"] = "hover";
  return CanvasType2;
})(CanvasType || {});
export {
  CanvasMode,
  CanvasType,
  areaData
};
