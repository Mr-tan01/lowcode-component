<template>
    <div class="lc-page_title">
        <div class="lc-page_title__text">
            <slot></slot>
        </div>
    </div>
</template>
<script lang="ts" setup></script>

<style lang="scss" scoped>
.lc-page_title {
    width: fit-content;
    background: url(./images/decorate-title-bg.png) no-repeat;
    background-size: 100% 100%;
    padding: 5px 55px;
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
