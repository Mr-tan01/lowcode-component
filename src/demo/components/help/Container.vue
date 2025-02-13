<template>
    <div class="help-container">
        <h1>{{ title }}</h1>
        <div class="help-container__desc">
            {{ description }}
        </div>

        <div class="help-container__wrapper">
            <vue-resizable class="vue-resize" :width="rswidth" :height="rsHeight">
                <div class="pad-box">
                    <slot></slot>
                </div>
            </vue-resizable>
        </div>
        <n-collapse class="n-collapse"  v-if="code">
            <n-collapse-item title="查看用法" name="code">
                <div class="help-container__code" :style="{ maxWidth: rswidth, }">
                    <n-code language="javascript" :code="code" word-wrap :hljs="Highlight">
                    </n-code>
                </div>
            </n-collapse-item>
        </n-collapse>
    </div>
</template>
<script lang="ts" setup>
import { PropType } from 'vue';
import Highlight from 'highlight.js';
import VueResizable from 'vue-resizable'
import 'highlight.js/styles/lightfair.min.css';
import { NCode, NCollapse, NCollapseItem } from 'naive-ui';

const {
    code = '',
    rsHeight = 'auto',
} = defineProps({
    title: {
        type: String as PropType<string>,
    },
    description: {
        type: String as PropType<string>,
    },
    code: {
        type: String as PropType<string>,
    },
    rswidth: {
        type: [String, Number],
    },
    rsHeight: {
        type: [String, Number],
    }
});
</script>

<style lang="scss" scoped>
.help-container {
    display: flex;
    flex-direction: column;
    margin: 20px auto;
    width: fit-content;
    min-width: 200px;

    .n-collapse {
        width: 100%;
        --n-title-text-color: #fff !important;
        :deep(.n-base-icon) {
            svg {
                color: white;
            }
        }
    }


    h1 {
        color: white;
        font-size: 20px;
        margin-bottom: 0;
    }

    &__code {
        margin-top: 5px;
        background: rgb(10, 10, 15);
        padding: 10px;
        border-radius: 5px;
        overflow-x: auto;
        white-space: pre-wrap;
        font-family: monospace;
        line-height: 1.5;
        border: 1px solid #a1a1a1;
        margin-bottom: 10px;
        color: #fff;
    }

    &__desc {
        color: #999;
        margin-bottom: 15px;
    }

    &__wrapper {
        display: flex;
        flex-direction: column;
        border: 1px dotted #30b4dc;
        border-radius: 5px;

        .vue-resize {
            padding: 20px;
            box-sizing: border-box;
        }

        .pad-box {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            border: 1px dashed #ffffff35;
        }
    }
}
</style>