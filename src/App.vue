<template>
    <div class="app">
        <Docx></Docx>
    </div>
</template>

<script setup lang="ts">
import Docx from './docx/index.vue';
</script>


<style lang="scss" scoped>
.app {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
}
</style>
<style lang="scss">
* {
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

}
</style>
