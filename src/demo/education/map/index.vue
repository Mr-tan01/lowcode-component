<template>
    <div class="demo-map">
        <Container title="深圳地图" description="深圳教育项目-深圳地图" rswidth="962px">
            <div class="size-box">
                <LcMap></LcMap>
            </div>
        </Container>
    </div>
</template>
<script lang="ts" setup>
import Container from '@/demo/components/help/Container.vue';
import { LcMap } from '@/components/education/components/map';
</script>
