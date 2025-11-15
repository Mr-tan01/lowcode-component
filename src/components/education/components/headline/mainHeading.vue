<template>
    <div class="lc-main-heading">
        <div class="lc-main-heading__center">
            <div class="lc-main-heading__center__lft"><img src="./images/main-heading-lft.png" alt="" /></div>
            <div class="lc-main-heading__center__title">{{ title }}</div>
            <div class="lc-main-heading__center__rgt"><img src="./images/main-heading-rgt.png" alt="" /></div>
        </div>
        <div class="lc-main-heading__pedestal"></div>
    </div>
</template>

<script setup lang="ts">
const { title = '标题' } = defineProps({
    title: String,
})
</script>

<style scoped lang="scss">
.lc-main-heading {
    width: fit-content;
    &__center,
    &__pedestal {
        width: 100%;
    }
    &__center {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 35px;
        font-family: AlimamaFangYuanTiVF-SemiBold, AlimamaFangYuanTiVF-SemiBold;
        font-weight: normal;
        font-size: 26px;
        color: #26f5ff;
        line-height: 31px;
        text-shadow: 0px 1px 16px rgba(38, 245, 255, 0.63);
        text-align: center;
        font-style: normal;
    }
    &__pedestal {
        width: 100%;
        height: 19px;
        background: url(./images/main-heading-btn.png) no-repeat;
        background-size: 100% 100%;
    }
}
</style>
