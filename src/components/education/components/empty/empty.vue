<template>
    <div class="lc-empty">
        <NEmpty v-bind="$attrs">
            <template #icon>
                <img src="./empty_image.svg" alt="" />
            </template>
        </NEmpty>
    </div>
</template>
<script lang="ts" setup>
import { NEmpty } from "naive-ui/es/empty";
</script>
<style lang="scss" scoped>
.lc-empty {
    :deep(.n-empty__icon) {
        width: 181px;
        height: 106px;
        .image {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>
