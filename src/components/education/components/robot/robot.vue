<template>
    <div class="lc-robot">
        <img class="lc-robot__image" :src="robotSrc" draggable="false" alt="">
    </div>
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue';
import { robotBQMap, type RobotBQMapKeys } from './const';

const {
    value = 's1',
} = defineProps({
    value: {
        type: String as PropType<RobotBQMapKeys>
    },
});
const robotSrc = computed(() => robotBQMap[value]);
</script>

<style lang="scss" scoped>
.lc-robot {
    
    &__image {
        user-select: none;
        
        width: 219px;
        height: 233px;
    }
}
</style>