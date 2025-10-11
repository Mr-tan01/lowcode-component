const defaultMapOptions = {
  crs: {
    code: "EPSG:4490",
    // http://epsg.io/4490
    proj: "+proj=longlat +ellps=GRS80 +no_defs +type=crs",
    resolutions: [
      9517824987671182e-19,
      4758912493835591e-19,
      35691843703766936e-20,
      23794562469177955e-20,
      11897281234588977e-20,
      4758912493835591e-20,
      23794562469177957e-21,
      11897281234588978e-21,
      4758912493835591e-21,
      23794562469177955e-22,
      11897281234588977e-22
    ],
    origin: [108.881786092927, 25.6193899129869]
    // [x,y]
  },
  minZoom: 2,
  maxZoom: 10,
  zoom: 2,
  center: { lng: 111.473371, lat: 24.142145 },
  // center不是arcgis里面的值，此处正常标准经纬度就行
  basemaps: [
    {
      name: "深圳底图",
      type: "xyz",
      url: "https://jysl.sz.edu.cn:8314/service/api/a466c72ef1ea4f93aae5af7f6ab5b56e/igs/rest/services/SZMAP_Blue_DT_ZW_2024_Q2_4490/WMTSServer?tilematrix={z}&layer=SZMAP_Blue_DT_ZW_2024_Q2_4490&style=default&tilerow={y}&tilecol={x}&tilematrixset=EPSG%3A4490_SZMAP_Blue_DT_ZW_2024_Q2_44900_028mm_GB&format=image%2Fpng&service=WMTS&version=1.0.0&request=GetTile&client_id=74109f7095974ab1a5e930c8e998580d&access_token=3c0c73ce32454df284580dbc242e5cec",
      show: true
    }
  ],
  operationallayers: [],
  control: {
    scale: true,
    locationBar: {
      template: "<div>经度:{lng}</div> <div>纬度:{lat}</div> <div>层级:{level}</div>"
    },
    zoom: { position: "bottomleft" },
    toolBar: { position: "bottomleft" }
  }
};
export {
  defaultMapOptions
};
