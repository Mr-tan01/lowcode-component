<template>
    <div class="demo-tooltip">
        <Container title="词云" description="基础用法" rswidth="100%">
            <NSpace>
                <Container title="款词云-圆球" rswidth="450px" rs-height="450px">
                    <LcBubbleWordColud :data="wordCloudData">
                    </LcBubbleWordColud>
                </Container>
                <Container title="款词云-发光球" rswidth="450px" rs-height="450px">
                    <LcBubbleWordColud type="shadow" :enable-animate="true" :data="wordCloudData">
                    </LcBubbleWordColud>
                </Container>
                <Container title="款词云-文本" rswidth="450px" rs-height="450px">
                    <LcBubbleWordColud type="text" :maxWord="30" :data="wordCloudData">
                    </LcBubbleWordColud>
                </Container>
                <Container title="款词云-混合" rswidth="450px" rs-height="450px">
                    <LcBubbleWordColud type="text-circle" :maxWord="30" :data="wordCloudData">
                    </LcBubbleWordColud>
                </Container>
                <Container title="款词云-禁止自动动画" rswidth="450px" rs-height="450px">
                    <LcBubbleWordColud type="shadow" :enable-animate="false" :data="wordCloudData">
                    </LcBubbleWordColud>
                </Container>
            </NSpace>
        </Container>
    </div>
</template>

<script lang="ts" setup>
import Container from '@/demo/components/help/Container.vue';
import { LcBubbleWordColud } from '~/es/education/wordCloud';
import { NSpace } from 'naive-ui';

const wordCloudData = [
    { name: 'Java', value: 100 },
    { name: 'Python', value: 60 },
    { name: 'C++', value: 40 },
    { name: 'JavaScript', value: 80 },
    { name: 'Ruby', value: 20 },
    { name: 'Swift', value: 50 },
    { name: 'Go', value: 70 },
    { name: 'Kotlin', value: 30 },
    { name: 'PHP', value: 90 },
    { name: 'C#', value: 10 },
    { name: 'Rust', value: 50 },
    { name: 'Scala', value: 20 },
    { name: 'TypeScript', value: 80 },
    { name: 'Dart', value: 40 },
    { name: 'Haskell', value: 10 },
    { name: 'Elixir', value: 30 },
    { name: 'Erlang', value: 60 },
    { name: 'Julia', value: 70 },
    { name: 'R', value: 90 },
    { name: 'MATLAB', value: 50 },
    { name: 'Perl', value: 20 },
    { name: 'Fortran', value: 80 },
    { name: 'Clojure', value: 10 }
];
</script>

<style lang="scss" scoped></style>