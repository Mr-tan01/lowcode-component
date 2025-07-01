<template>
    <div class="bubble-demo">
        <DemoHelpBox title="气泡图" description="基本用法" rswidth="1000px" rs-height="500px">
            <LcBubble :data="newData" />
        </DemoHelpBox>
    </div>
</template>

<script lang="ts" setup>
import { DemoHelpBox } from '@/components/common/DemoHelpBox'
import { LcBubble } from '@/components/education/components/bubble'
const data = [
    { label: '专利授权(件)', value: 1000 },
    { label: '省级科学技术奖(人)', value: 7000 },
    { label: '市级科学技术奖(人)', value: 30 },
    { label: '知识产权授权(件)', value: 50 },
    { label: 'CNS论文(篇)', value: 70 },
    { label: '省级以上人文社科奖(项)', value: 70 },
    { label: '国家科学技术奖(项)', value: 70 },
]
const option = {
    startX: 200, // 起始x坐标
    gapX: 250, // 每个节点x方向间隔
    centerY: 250, // 居中y坐标
    gapY: 80, // y方向偏移量
}
const newData = data.map((item, index) => {
    const { startX, gapX, centerY, gapY } = option
    let x = startX + index * gapX
    let y = index ? centerY + (index % 2 === 1 ? gapY : -gapY) : centerY
    return {
        ...item,
        x,
        y,
    }
})
</script>

<style lang="scss" scoped></style>
