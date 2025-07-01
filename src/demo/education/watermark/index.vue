<template>
    <div class="demo-watermark">
        <DemoHelpBox
            title="Watermark"
            description="基础用法"
            rswidth="1000px"
            :code="code"
        >
            <n-space>
                <div class="watermark">
                    <div>单条水印</div>
                    <LcWatermark
                        text="示例数据"
                        mode="single"
                        :font-size="18"
                        color="#fff"
                        :rotate="-30"
                        :opacity="0.15"
                    />
                </div>
                <div class="watermark">
                    <div>多条水印</div>
                    <LcWatermark
                        text="示例数据"
                        mode="multiple"
                        :font-size="18"
                        color="#fff"
                        :rotate="-30"
                        :opacity="0.15"
                        :gap="30"
                    />
                </div>
            </n-space>
        </DemoHelpBox>
    </div>
</template>

<script lang="ts" setup>
import { DemoHelpBox } from '@/components/common/DemoHelpBox'
import { LcWatermark } from '@/components/education/components/watermark'
import { NSpace } from 'naive-ui'
import { code } from './demo-codes'
</script>

<style lang="scss" scoped>
.watermark {
    width: 500px;
    height: 200px;
    position: relative;
}
</style>
