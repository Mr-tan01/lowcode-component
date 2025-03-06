
const levelsCodeString = `
const levels: Levels = {
    warning: {
        range: [50, 100],
        scale: 1.1,
        stop: [
            {
                'stop-color': 'rgba(225, 188, 75, 1)',
                'stop-opacity': 1,
                offset: '0%',
            },
            {
                'stop-color': 'rgba(225, 188, 75, 0)',
                'stop-opacity': 1,
                offset: '100%',
            }
        ],
    },
    series: {
        range: [101, 100000],
        scale: 1.2,
        stop: [
            {
                'stop-color': 'rgba(238, 111, 124, 1)',
                'stop-opacity': 1,
                offset: '0%',
            },
            {
                'stop-color': 'rgba(238, 111, 124, 0)',
                'stop-opacity': 1,
                offset: '100%',
            }
        ],
    },
}`;
const mapValuesCodeString = `
const values: SZMapMarkProps = {
    mappings: {
        guangming: {
            value: 1,
            unit: '人',
            meta: {
                key: 'guangming'
            },
        },
        longgang: {
            value: 10000,
            unit: '人',
            meta: {
                key: 'longgang'
            },
        },
        baoan: {
            value: 50,
            unit: '人',
            meta: {
                key: 'baoan'
            },
        },
        longhua: {
            value: 0,
            unit: '人',
            meta: {
                key: 'longhua'
            },
        },
        nanshan: {
            value: 0,
            unit: '人',
            meta: {
                key: 'nanshan'
            },
        },
        futian: {
            value: 0,
            unit: '人',
            meta: {
                key: 'futian'
            },
        },
        luohu: {
            value: 0,
            unit: '人',
            meta: {
                key: 'luohu'
            },
        },
        yantian: {
            value: 0,
            unit: '人',
            meta: {
                key: 'yantian'
            },
        },
        pingshan: {
            value: 0,
            unit: '人',
            meta: {
                key: 'pingshan'
            },
        },
        dapeng: {
            value: 0,
            unit: '人',
            meta: {
                key: 'dapeng'
            },
        },
        shenshan: {
            value: 0,
            unit: '人',
            meta: {
                key: 'shenshan'
            },
        }
    }
}
`;
export const demoCodes = {
    code1: `
<template>
    <Szmap :values></Szmap>
</template>

<script lang="ts" setup>
import { Szmap, type SZMapMarkProps, type Levels } from 'lowcode-component/es/education/map';

${levelsCodeString}
${mapValuesCodeString}
</script>
`,
    code2: `
<template>
    <Szmap :values :rotate-x="-30"></Szmap>
</template>

<script lang="ts" setup>
import { Szmap, type SZMapMarkProps, type Levels } from 'lowcode-component/es/education/map';

${levelsCodeString}
${mapValuesCodeString}
</script>
`,
};