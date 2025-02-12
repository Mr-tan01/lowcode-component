<template>
    <div class="demo-robot">
        <Container title="主入口机器人" description="深圳教育项目-主入口机器人" rswidth="806px" rs-height="966px">
            <LcMainRobot :animate="true"></LcMainRobot>
        </Container>
        <Container title="机器人图标" description="深圳教育项目-机器人图标" rswidth="1210px" rs-height="auto" :code="code1">
            <div class="size-box">
                <n-space>
                    <LcRobot value="s1"></LcRobot>
                    <LcRobot value="s2"></LcRobot>
                    <LcRobot value="s3"></LcRobot>
                    <LcRobot value="s4"></LcRobot>
                    <LcRobot src="https://b0.bdstatic.com/a6a0f12117cd6488ec39bb46d308b498.jpg@h_1280"></LcRobot>
                </n-space>
            </div>
        </Container>
        <Container title="机器人图标" description="深圳教育项目-机器人图标" rswidth="1210px" rs-height="auto" :code="code2">
            <NSpace>
                <LcRobot width="auto" height="147px" value="s4" trigger="focus" showPopup draggable></LcRobot>
                <LcRobot width="auto" height="147px" value="s4" trigger="focus" showPopup draggable position="absolute"></LcRobot>
                <LcRobot width="auto" height="147px" value="s4" trigger="focus" showPopup></LcRobot>
                <LcRobot width="auto" height="147px" value="s4" trigger="focus" hid-dir="rt" showPopup></LcRobot>
                <LcRobot width="auto" height="147px"
                    src="https://b0.bdstatic.com/2d43e63ca240bdf793814be0dbc9c3a5.jpg@h_1280" trigger="focus"
                    hid-dir="rt" showPopup></LcRobot>
            </NSpace>
        </Container>
    </div>
</template>
<script lang="ts" setup>
import { NSpace } from 'naive-ui';
import Container from '../components/help/Container.vue';
import { LcRobot, LcMainRobot } from '@/components/education/components/robot';
import { code1, code2 } from './const';
</script>

<style lang="scss" scoped>
.demo-robot {
    overflow: auto;
}
</style>