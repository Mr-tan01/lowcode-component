<template>
    <div class="help-container">
        <h1>{{ title }}</h1>
        <div class="help-container__desc">
            {{ description }}
        </div>
        <div class="help-container__wrapper">
            <slot></slot>
        </div>
        <div class="help-container__code" v-if="highlightCode">
            <pre>
                <code :contenteditable="true">
                    <div v-html="highlightCode"></div>
                </code>
            </pre>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { computed, PropType } from 'vue';
import Highlight from 'highlight.js';
import 'highlight.js/styles/lightfair.min.css';

const {
    code = '',
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
});

const highlightCode = computed(() => {
    return Highlight.highlight(code, {
        language: 'typescript',
    }).value;
});

</script>

<style lang="scss" scoped>
.help-container {
    display: flex;
    flex-direction: column;
    margin: 20px auto;
    width: fit-content;

    h1 {
        color: white;
        font-size: 20px;
        margin-bottom: 0;
    }

    &__code {
        margin-top: 5px;
        background: #222;
        padding: 10px;
        border-radius: 5px;
        overflow-x: auto;
        white-space: pre-wrap;
        font-family: monospace;
        line-height: 1.5;
        border: 1px solid #a1a1a1;
        margin-bottom: 10px;

        pre {
            margin: 0;
        }

        code {
            color: #fff;
            font-size: 16px;
            white-space: pre-wrap;
            word-wrap: break-word;
            margin: 0;
            outline: none;
        }
    }

    &__desc {
        color: #999;
        margin-bottom: 15px;
    }

    &__wrapper {
        display: flex;
        flex-direction: column;
        padding: 20px;
        border: 1px dotted #fff;
        border-radius: 5px;
    }
}
</style>