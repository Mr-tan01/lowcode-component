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
