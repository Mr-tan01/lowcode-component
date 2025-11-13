<template>
    <div class="demo-robot">
        <DemoHelpBox title="主入口机器人" description="深圳教育项目-主入口机器人" rswidth="806px" rs-height="966px" :code="codeStr0">
            <LcMainRobot :animate="false" :forbidden="true"></LcMainRobot>
        </DemoHelpBox>
        <DemoHelpBox title="机器人图标" description="深圳教育项目-机器人图标" rswidth="1210px" rs-height="auto" :code="code1">
            <div class="size-box">
                <n-space>
                    <LcRobot value="s1"></LcRobot>
                    <LcRobot value="s2"></LcRobot>
                    <LcRobot value="s3"></LcRobot>
                    <LcRobot value="s4"></LcRobot>
                </n-space>
            </div>
        </DemoHelpBox>
        <DemoHelpBox title="机器人图标" description="深圳教育项目-机器人图标" rswidth="1210px" rs-height="auto" :code="code2">
            <NSpace>
                <LcRobot width="auto" height="147px" value="s4" trigger="focus" show-popup draggable></LcRobot>
                <LcRobot width="auto" height="147px" value="s4" trigger="focus" show-popup draggable position="absolute"></LcRobot>
                <LcRobot width="auto" height="147px" value="s4" trigger="focus" show-popup></LcRobot>
                <LcRobot width="auto" height="147px" value="s4" trigger="focus" hid-dir="rt" show-popup></LcRobot>
                <LcRobot
                    width="auto"
                    height="147px"
                    src="https://b0.bdstatic.com/2d43e63ca240bdf793814be0dbc9c3a5.jpg@h_1280"
                    trigger="focus"
                    hid-dir="rt"
                    show-popup
                ></LcRobot>
                <LcRobot width="auto" height="147px" value="s5" trigger="focus" :show-popup="true" :popup-size="popupSize" :draggable="true">
                    <template #center>
                        <div @click="handle">点我切换大小</div>
                    </template>
                </LcRobot>
            </NSpace>
        </DemoHelpBox>
    </div>
</template>
<script lang="ts" setup>
import { NSpace } from 'naive-ui'
import { DemoHelpBox } from '@/components/common/DemoHelpBox'
import { LcRobot, LcMainRobot } from '@/components/education/components/robot'
import { code1, code2, codeStr0 } from './demo-codes'
import { ref } from 'vue'

const popupSize = ref<'small' | 'medium' | 'large'>('large')
function handle() {
    if (popupSize.value === 'small') {
        popupSize.value = 'medium'
    } else if (popupSize.value === 'medium') {
        popupSize.value = 'large'
    } else {
        popupSize.value = 'small'
    }
}
</script>

<style lang="scss" scoped>
.demo-robot {
    overflow: auto;
}
</style>
