<template>
    <div class="demo-map">
        <DemoHelpBox title="复选框" description="深圳教育项目-复选框" rswidth="1210px" rs-height="auto" :code="demoCodes.code1">
            value: {{ checkboxValue }}
            <div class="size-box">
                <LcCheckboxGroup v-model:value="checkboxValue">
                    <n-space>
                        <LcCheckbox value="1">
                            Definitely Maybe
                        </LcCheckbox>
                        <LcCheckbox value="2">
                            Definitely Maybe
                        </LcCheckbox>
                    </n-space>
                </LcCheckboxGroup>

            </div>
        </DemoHelpBox>
    </div>
</template>
<script lang="ts" setup>
import { NSpace } from 'naive-ui';
import { DemoHelpBox } from '@/components/common/DemoHelpBox';
import { LcCheckbox, LcCheckboxGroup } from '@/components/education/components/checkbox';
import { demoCodes } from './demo-codes';
import { ref } from 'vue';
const checkboxValue = ref(['1']);
</script>
