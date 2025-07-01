export const demoCodes = {
    code1: `
<template>
    <LcRadarChart :options></LcRadarChart>
</template>

<script lang="ts" setup>
import {
    LcRadarChart,
} from 'lowcode-component/es/education/charts';
const options =  {
    radar: {
        shape: 'circle',
        indicator: [
            { name: '类目一', max: 6500 },
            { name: '类目二', max: 1600 },
            { name: '类目三', max: 3000 },
            { name: '类目四', max: 3800 },
            { name: '类目五', max: 5200 },
            { name: '类目六', max: 2500 }
        ],
        axisName: {
            formatter: '{value}',
        }
    },
    legend: {
        show: true,
    },
    series: [
        {
            name: '雷达图',
            data: [
                {
                    value: [420, 300, 2000, 3500, 5000, 1800],
                    name: '类型一',
                },
            ],
        }
    ]
}
</script>
`,
    code2: `
<template>
    <LcRadarChart :options></LcRadarChart>
</template>

<script lang="ts" setup>
import {
    LcRadarChart,
} from 'lowcode-component/es/education/charts';
const options =  {
    radar: {
        shape: 'polygon',
        indicator: [
            { name: '类目一', max: 6500 },
            { name: '类目二', max: 1600 },
            { name: '类目三', max: 3000 },
            { name: '类目四', max: 3800 },
            { name: '类目五', max: 5200 },
            { name: '类目六', max: 2500 }
        ],
        axisName: {
            formatter: '{value}',
        }
    },
    legend: {
        show: true,
    },
    series: [
        {
            name: '雷达图',
            data: [
                {
                    value: [420, 300, 2000, 3500, 5000, 1800],
                    name: '类型一',
                },
            ],
        }
    ]
}
</script>
`,
    code3: `
<template>
    <LcRadarChart :options></LcRadarChart>
</template>

<script lang="ts" setup>
import {
    LcRadarChart,
} from 'lowcode-component/es/education/charts';
const options =  {
    radar: {
        shape: 'polygon',
        indicator: [
            { name: '类目一', max: 6500 },
            { name: '类目二', max: 1600 },
            { name: '类目三', max: 3000 },
            { name: '类目四', max: 3800 },
            { name: '类目五', max: 5200 },
        ],
        axisName: {
            formatter: '{value}',
        }
    },
    legend: {
        show: true,
    },
    series: [
        {
            name: '雷达图',
            data: [
                {
                    value: [420, 300, 2000, 3500, 5000, 1800],
                    name: '类型一',
                },
            ],
        }
    ]
}
</script>
`,
    code4: `
<template>
    <LcRadarChart :options></LcRadarChart>
</template>

<script lang="ts" setup>
import {
    LcRadarChart,
} from 'lowcode-component/es/education/charts';
const options =  {
    radar: {
        shape: 'polygon',
        indicator: [
            { name: '类目一', max: 6500 },
            { name: '类目二', max: 1600 },
            { name: '类目三', max: 3000 },
        ],
        axisName: {
            formatter: void 0,
        }
    },
    legend: {
        show: true,
    },
    series: [
        {
            name: '雷达图',
            data: [
                {
                    value: [420, 300, 2000, 3500, 5000, 1800],
                    name: '类型一',
                },
            ],
        }
    ]
}
</script>
`,
    code5: `
<template>
    <LcRadarChart :options></LcRadarChart>
</template>

<script lang="ts" setup>
import {
    LcRadarChart,
} from 'lowcode-component/es/education/charts';
const options =  {
    radar: {
        shape: 'circle',
        indicator: [
                    { name: '类目一', max: 6500 },
                    { name: '类目二', max: 1600 },
                    { name: '类目三', max: 3000 },
                    { name: '类目四', max: 3800 },
                    { name: '类目五', max: 5200 },
                    { name: '类目六', max: 2500 }
        ],
        axisName: {
            formatter: void 0,
        }
    },
    legend: {
        show: true,
    },
    series: [
        {
            name: '雷达图',
            data: [
                {
                    value: [420, 300, 2000, 3500, 5000, 1800],
                    name: '类型一',
                },
                {
                    value: [500, 1400, 2800, 2600, 4200, 2100],
                    name: '类型二'
                },
                {
                    value: [200, 400, 2020, 602, 220, 102],
                    name: '类型三'
                }
            ],
        }
    ]
}
</script>
`,
    code6: `
<template>
    <LcRadarChart :options></LcRadarChart>
</template>

<script lang="ts" setup>
import {
    LcRadarChart,
} from 'lowcode-component/es/education/charts';
const options =  {
    radar: {
        shape: 'polygon',
        indicator: [
            { name: '类目一', max: 6500 },
            { name: '类目二', max: 1600 },
            { name: '类目三', max: 3000 },
            { name: '类目四', max: 3800 },
            { name: '类目五', max: 5200 },
        ],
        axisName: {
            formatter: void 0,
        }
    },
    legend: {
        show: true,
    },
    series: [
        {
            name: '雷达图',
            data: [
                {
                    value: [420, 300, 2000, 3500, 5000, 1800],
                    name: '类型一',
                },
                {
                    value: [500, 1400, 2800, 2600, 4200, 2100],
                    name: '类型二'
                },
                {
                    value: [200, 400, 2020, 602, 220, 102],
                    name: '类型三'
                }
            ],
        }
    ]
}
</script>
`,
    code7: `
<template>
    <LcRadarChart :options></LcRadarChart>
</template>

<script lang="ts" setup>
import {
    LcRadarChart,
} from 'lowcode-component/es/education/charts';
const options =  {
    radar: {
        shape: 'polygon',
        indicator: [
            { name: '类目一', max: 6500 },
            { name: '类目二', max: 1600 },
            { name: '类目三', max: 3000 },
        ],
        axisName: {
            formatter: void 0,
        }
    },
    legend: {
        show: true,
    },
    series: [
        {
            name: '雷达图',
            data: [
                {
                    value: [420, 300, 2000, 3500, 5000, 1800],
                    name: '类型一',
                },
                {
                    value: [500, 1400, 2800, 2600, 4200, 2100],
                    name: '类型二'
                },
                {
                    value: [200, 400, 2020, 602, 220, 102],
                    name: '类型三'
                }
            ],
        }
    ]
}
</script>
`,
}
