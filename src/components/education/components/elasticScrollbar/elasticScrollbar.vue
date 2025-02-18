<template>
    <div class="lc-elastic-scrollbar">
        <div class="lc-elastic-scrollbar__wrapper">
            <slot></slot>
        </div>
    </div>
</template>
<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.lc-elastic-scrollbar {
    position: relative;
    overflow: auto;
    display: flex;
    flex-direction: column;
    flex: 1;
    // 美化滚动条样式
    &::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }
    &::-webkit-scrollbar-track {
        background: transparent;
        border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background: rgba(0, 127, 206, 0.1);
        border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb:hover {
        background: rgba(0, 127, 206, 0.5);
    }


    &__wrapper {
        width: 100%;
        height: fit-content;
        position: absolute;
        left: 0;
        top: 0;
    }
}
</style>