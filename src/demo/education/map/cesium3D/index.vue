<template>
    <LcCesiumEarth :echartsOptions="data" v-model:loading="loading" @handle-click="handleClick" />
</template>
<script lang="ts" setup>
import { LcCesiumEarth } from "@/components/education/components/map";
import { options } from "./const";
import { onMounted, ref } from "vue";
const loading = ref(false);
const data = ref();
const getMockPointData = async (): Promise<any> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(options);
        }, 5000); // 模拟1秒的网络延迟
    });
};
onMounted(() => {
    loading.value = true;
    getMockPointData().then((res) => {
        data.value = res;
        loading.value = false;
    });
});
const handleClick = (params) => {
    console.log(params, "===》");
};
</script>
<style></style>
