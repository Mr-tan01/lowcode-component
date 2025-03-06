
const dataCodeStr = `
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
`;
export const demoCodes = {
    code1: `
<template>
    <LcBubbleWordColud :data="wordCloudData"></LcBubbleWordColud>
</template>

<script lang="ts" setup>
import { LcBubbleWordColud } from 'lowcode-component/es/education/wordCloud';
${dataCodeStr}
</script>
    `,
    code2: `
<template>
        <LcBubbleWordColud type="shadow" :enable-animate="true" :data="wordCloudData"></LcBubbleWordColud>
</template>

<script lang="ts" setup>
import { LcBubbleWordColud } from 'lowcode-component/es/education/wordCloud';
${dataCodeStr}
</script>
    `,
    code3: `
<template>
    <LcBubbleWordColud type="text" :maxWord="30" :data="wordCloudData"></LcBubbleWordColud>
</template>

<script lang="ts" setup>
import { LcBubbleWordColud } from 'lowcode-component/es/education/wordCloud';
${dataCodeStr}
</script>
    `,
    code4: `
<template>
    <LcBubbleWordColud type="text-circle" :maxWord="30" :data="wordCloudData"></LcBubbleWordColud>
</template>

<script lang="ts" setup>
import { LcBubbleWordColud } from 'lowcode-component/es/education/wordCloud';
${dataCodeStr}
</script>
    `,
    code5: `
<template>
    <LcBubbleWordColud type="shadow" :enable-animate="false" :data="wordCloudData"></LcBubbleWordColud>
</template>

<script lang="ts" setup>
import { LcBubbleWordColud } from 'lowcode-component/es/education/wordCloud';
${dataCodeStr}
</script>
    `,
}