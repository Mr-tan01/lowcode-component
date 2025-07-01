export const code = `
<template>
    <div class="watermark">
        <div>单条水印</div>
            <LcWatermark text="示例数据" mode="single" :fontSize="18" color="#fff" :rotate="-30" :opacity="0.15"/>
        </div>
    <div class="watermark">
        <div>多条水印</div>
        <LcWatermark text="示例数据" mode="multiple" :fontSize="18" color="#fff" :rotate="-30" :opacity="0.15"/>
    </div>
</template>

<style lang="scss" scoped>
.watermark {
    position: relative;
}
</style>
`
