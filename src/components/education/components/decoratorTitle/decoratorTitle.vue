<template>
    <div class="lc-decorator-title">
        <div class="lc-decorator-title__wrapper">
            <div class="lc-decorator-title__wrapper__text">
                {{ title }}
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    title: {
        type: String,
    }
});
</script>

<style lang="scss" scoped>
.lc-decorator-title {
    width: 100%;
    height: 100%;
    background: url(./images/bg.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: -1px center;

    &__wrapper {
        margin-left: 27px;

        &__text {
            font-family: AlimamaFangYuanTiVF-SemiBold, AlimamaFangYuanTiVF-SemiBold;
            font-weight: normal;
            font-size: 20px;
            color: #FFFFFF;
            line-height: 18px;
            text-shadow: 0px 7px 21px #00284C, 0px 2px 4px rgba(0, 0, 0, 0.5);
            text-align: left;
        }
    }
}
</style>