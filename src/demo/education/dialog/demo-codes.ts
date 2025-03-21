export const code1 = `
<template>
<LcModal v-model:show="show" title="弹窗标题">
    <div class="text">
        这里是内容区域，这里是内容区域，这里是内容区域，这里是内容区域，这里是内容区域，这里是内容区域，这里是内容区域，这里是内容区域，这里是内容区域，这里是内容区域，这里是内容
    </div>
</LcModal>
</template>

<script lang="ts" setup>
    import { ref } from 'vue';
    const show = ref(false);
</script>
`;

export const code2 = `
<template>
    <LcModal v-model:show="show" size-mode="medium" title="弹窗标题">
        <div class="text">
            这里是内容区域，这里是内容区域，这里是内容区域，这里是内容区域，
            这里是内容区域，这里是内容区域，这里是内容区域，这里是内容区域，这里是内容区域，这里是内容区域，这里是内容
        </div>
    </LcModal>
</template>

<script lang="ts" setup>
    import { ref } from 'vue';
    const show = ref(false);
</script>
`;