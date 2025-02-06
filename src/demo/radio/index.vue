<template>
    <div class="demo-map">
        <Container title="选项按钮" description="深圳教育项目-选项" rswidth="1210px" rs-height="auto">
            <div class="size-box">
                <n-space>
                    <LcRadioButtonGroup v-model="radioButtonValue1">
                        <LcRadioButton text="地图" value="1"></LcRadioButton>
                        <LcRadioButton text="图表" value="2"></LcRadioButton>
                        <LcRadioButton text="图表2" value="3"></LcRadioButton>
                        <LcRadioButton text="图表3" value="4"></LcRadioButton>
                        <LcRadioButton text="图表4" value="5"></LcRadioButton>
                    </LcRadioButtonGroup>
                </n-space>
            </div>
        </Container>
    </div>
</template>
<script lang="ts" setup>
import { NSpace } from 'naive-ui';
import Container from '../components/help/Container.vue';
import { LcRadioButtonGroup } from '@/components/education/components/radio-button-group';
import { LcRadioButton } from '@/components/education/components/radio-button';
import { ref } from 'vue';
const radioButtonValue1 = ref('1')
</script>
