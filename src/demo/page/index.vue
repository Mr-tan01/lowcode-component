<template>
    <div class="demo-page">
        <Container title="页面标题" description="基础用法" :code="pageTitle.code1">
            <div class="text-box">
                <LcPageTitle>
                    数据概览
                </LcPageTitle>
                <LcPageTitle>
                    基础教师队伍结构
                </LcPageTitle>
            </div>
        </Container>
    </div>
</template>

<script lang="ts" setup>
import Container from '../components/help/Container.vue';
import { LcPageTitle } from '../../components/education/components/PageTitle';
import * as pageTitle from './pageTitle';
</script>

<style lang="scss" scoped>
.text-box {
    
}
</style>