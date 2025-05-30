import t from "./深圳市（各区）.json.js";
const a = {
  深圳市: { lng: 114.063109, lat: 22.544522, position: [] },
  光明区: { lng: 113.91634116522685, lat: 22.77147302900205, position: t.features[0] },
  坪山区: { lng: 114.35193598950553, lat: 22.688581371110487, position: t.features[1] },
  龙华区: { lng: 114.01646181978259, lat: 22.68598921119512, position: t.features[2] },
  盐田区: { lng: 114.26346681948235, lat: 22.604011992313712, position: t.features[3] },
  大鹏新区: { lng: 114.47102586735873, lat: 22.609556483035444, position: t.features[4] },
  宝安区: { lng: 113.86094318766183, lat: 22.67707802403516, position: t.features[6] },
  龙岗区: { lng: 114.22287589397995, lat: 22.69074582647359, position: t.features[5] },
  南山区: { lng: 113.93782045247285, lat: 22.564987074695313, position: t.features[7] },
  福田区: { lng: 114.04493542407288, lat: 22.551374363514963, position: t.features[8] },
  罗湖区: { lng: 114.14519824740296, lat: 22.58076759041863, position: t.features[9] }
};
export {
  a as areaData
};
