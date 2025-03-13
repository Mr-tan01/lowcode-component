<template>
    <div class="lc-tianditu">
        <div class="lc-tianditu__map" ref="tiandituCanvasEl"></div>
    </div>
</template>

<script lang="ts" setup>
import { useScriptTag, } from '@vueuse/core';
import { shallowRef, useTemplateRef } from 'vue';
import normalMarker from '@/components/education/components/mark/images/normal.png';
import hoverMarker from '@/components/education/components/mark/images/mark2.png';

const {
    tk = '',
    apiSrc = 'http://api.tianditu.gov.cn/api?v=4.0&tk='
} = defineProps<{
    tk: string;
    apiSrc?: string;
}>();
const tiandituApi = shallowRef();
const tiandituInstance = shallowRef();
const tiandituCanvasElRef = useTemplateRef("tiandituCanvasEl");
const { load } = useScriptTag(`${apiSrc}${tk}`, void 0, {
    async: false,
    defer: true,
    noModule: false,
});

function initTianditu() {
    tiandituInstance.value = new tiandituApi.value.Map(tiandituCanvasElRef.value);
    tiandituInstance.value.centerAndZoom(new tiandituApi.value.LngLat(116.40769, 39.89945), 12);
}


function addMark() {
    const T = tiandituApi.value;
    //创建图片对象
    const icon = new T.Icon({
        iconUrl: normalMarker,
        iconSize: new T.Point(50, 75),
        iconAnchor: new T.Point(10, 25)
    });
    // icon.img.addEventListener('mouseenter', function () {
    //     icon.setIconUrl(hoverMarker);
    // });
    // icon.img.addEventListener('mouseleave', function () {
    //     icon.setIconUrl(normalMarker);
    // });
    //向地图上添加自定义标注
    const marker = new T.Marker(
        new T.LngLat(116.411794, 39.9068),
        { icon },
    );

    const point = new T.LngLat(116.40438, 39.87877);
    tiandituInstance.value.addOverLay(marker);
}

async function init() {
    await load();
    // @ts-ignore
    tiandituApi.value = window.T!;
    initTianditu();
    addMark();
}

init();
</script>

<style lang="scss" scoped>
.lc-tianditu {
    width: 100%;
    height: 100%;
    box-sizing: border-box;

    &__map {
        width: 100%;
        height: 100%;
    }
}
</style>