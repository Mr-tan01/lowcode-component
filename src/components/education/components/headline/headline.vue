<template>
    <div class="lc-headline">
        <div class="lc-headline__text">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.lc-headline {
    width: fit-content;
    background: url(./images/headline.png) center / 100% no-repeat !important;
    background-size: 100% 100%;
    padding: 5px 55px 5px 55px;
    box-sizing: border-box;

    &__text {
        font-size: 20px;
        line-height: 28px;
        color: #fff;
        margin-bottom: 10px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}
</style>