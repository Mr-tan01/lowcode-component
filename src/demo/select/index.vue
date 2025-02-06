<template>
    <div class="demo-select">
        <Container title="Select" description="基础用法" :code="code1">
            <div class="select-box">
                <LcSelect v-model:value="value" :options>
                </LcSelect>
            </div>
        </Container>
    </div>
</template>

<script lang="ts" setup>
import Container from '../components/help/Container.vue';
import { LcSelect } from '../../components/education/components/select';
import { ref } from 'vue';
import {
    code1,
} from './const';
const value = ref('song1')
const options = [
    {
        label: 'Drive My Car',
        value: 'song1'
    },
    {
        label: 'Norwegian Wood',
        value: 'song2'
    },
];
</script>

<style lang="scss" scoped>
.select-box {
    width: 200px;
}
</style>