<template>
    <div class="demo-map">
        <DemoHelpBox
            title="选项按钮"
            description="深圳教育项目-选项"
            rswidth="1210px"
            rs-height="auto"
            :code="demoCodes.code1"
        >
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
        </DemoHelpBox>
        <DemoHelpBox
            title="单选"
            description="深圳教育项目-单选"
            rswidth="1210px"
            rs-height="auto"
            :code="demoCodes.code2"
        >
            value: {{ radioValue }}
            <div class="size-box">
                <LcRadioGroup v-model:value="radioValue">
                    <n-space>
                        <LcRadio value="1"> Definitely Maybe </LcRadio>
                        <LcRadio value="2"> Definitely Maybe </LcRadio>
                    </n-space>
                </LcRadioGroup>
            </div>
        </DemoHelpBox>
    </div>
</template>
<script lang="ts" setup>
import { NSpace } from 'naive-ui'
import { DemoHelpBox } from '@/components/common/DemoHelpBox'
import { LcRadioButtonGroup } from '@/components/education/components/radio-button-group'
import { LcRadioButton } from '@/components/education/components/radio-button'
import { LcRadio, LcRadioGroup } from '@/components/education/components/radio'
import { ref } from 'vue'
import { demoCodes } from './demo-codes'
const radioButtonValue1 = ref('1')
const radioValue = ref('1')
</script>
