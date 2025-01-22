<template>
    <div class="app">
        <LcBgCommon>
            <LcHeader></LcHeader>
            <RouterView></RouterView>
        </LcBgCommon>
    </div>
</template>

<script setup lang="ts">
import { LcBgCommon } from "@/components/education/components/BgCommon";
import { LcHeader } from "@/components/education/components/Header";

</script>


<style lang="scss" scoped>
.app {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
}
</style>
