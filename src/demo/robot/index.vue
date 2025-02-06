<template>
    <div class="demo-map">
        <Container title="机器人图标" description="深圳教育项目-机器人图标" rswidth="1210px" rs-height="300px" :code="code1">
            <div class="size-box">
                <n-space>
                    <LcRobot value="s1"></LcRobot>
                    <LcRobot value="s2"></LcRobot>
                    <LcRobot value="s3"></LcRobot>
                    <LcRobot value="s4"></LcRobot>
                </n-space>
            </div>
        </Container>
    </div>
</template>
<script lang="ts" setup>
import { NSpace } from 'naive-ui';
import Container from '../components/help/Container.vue';
import { LcRobot } from '@/components/education/components/robot';
import { code1 } from './const';
</script>
