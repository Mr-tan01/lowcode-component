<template>
    <div class="lcc-bg__common">
        <div class="lcc-bg__common__bl-decoartor-bg"></div>
        <div class="lcc-bg__common__br-decoartor-bg"></div>
        <slot>

        </slot>
    </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import { bgImage } from './const';
const bgURL = computed(() => bgImage.url);
</script>
<style lang="scss" scoped>
.lcc-bg {
    &__common {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        background: v-bind(bgURL);
        background-size: cover;
        position: relative;

        &__bl-decoartor-bg {
            position: absolute;
            bottom: 0;
            left: 0;
            background: url('./images/bottom-left-bg.png') no-repeat;
            background-size: cover;
            width: 781px;
            height: 19px;
            z-index: 10;
        }

        &__br-decoartor-bg {
            width: 608px;
            height: 23px;
            position: absolute;
            border-bottom: 0;
            bottom: 0;
            right: 0;
            background: url('./images/bottom-right-bg.png') no-repeat;
            background-size: cover;
            z-index: 10;
        }
    }
}
</style>