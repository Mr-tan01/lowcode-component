<template>
    <div class="demo-map">
        <DemoBox title="复选框" description="深圳教育项目-复选框" rswidth="1210px" rs-height="auto">
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
        </DemoBox>
    </div>
</template>
<script lang="ts" setup>
import { NSpace } from 'naive-ui';
import { DemoBox } from 'lowcode-share/es/demo';
import { LcCheckbox, LcCheckboxGroup } from '@/components/education/components/checkbox';
import { ref } from 'vue';
const checkboxValue = ref(['1']);
</script>
