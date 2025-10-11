export const defaultMapOptions = {
    crs: {
        code: 'EPSG:4490', // http://epsg.io/4490
        proj: '+proj=longlat +ellps=GRS80 +no_defs +type=crs',
        resolutions: [
            0.0009517824987671182, 0.0004758912493835591, 0.00035691843703766936, 0.00023794562469177955, 0.00011897281234588977,
            0.00004758912493835591, 0.000023794562469177957, 0.000011897281234588978, 0.000004758912493835591, 0.0000023794562469177955,
            0.0000011897281234588977,
        ],
        origin: [108.881786092927, 25.6193899129869], // [x,y]
    },
    minZoom: 2,
    maxZoom: 10,
    zoom: 2,
    center: { lng: 111.473371, lat: 24.142145 }, // center不是arcgis里面的值，此处正常标准经纬度就行
    basemaps: [
        {
            name: '深圳底图',
            type: 'xyz',
            url: 'https://jysl.sz.edu.cn:8314/service/api/a466c72ef1ea4f93aae5af7f6ab5b56e/igs/rest/services/SZMAP_Blue_DT_ZW_2024_Q2_4490/WMTSServer?tilematrix={z}&layer=SZMAP_Blue_DT_ZW_2024_Q2_4490&style=default&tilerow={y}&tilecol={x}&tilematrixset=EPSG%3A4490_SZMAP_Blue_DT_ZW_2024_Q2_44900_028mm_GB&format=image%2Fpng&service=WMTS&version=1.0.0&request=GetTile&client_id=74109f7095974ab1a5e930c8e998580d&access_token=3c0c73ce32454df284580dbc242e5cec',
            show: true,
        },
    ],
    operationallayers: [],
    control: {
        scale: true,
        locationBar: {
            template: '<div>经度:{lng}</div> <div>纬度:{lat}</div> <div>层级:{level}</div>',
        },
        zoom: { position: 'bottomleft' },
        toolBar: { position: 'bottomleft' },
    },
}
