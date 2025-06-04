<template>
    <div class="bimodal-index">
        <div class="bimodal-index__indicator">
            <div class="bimodal-index__indicator__lable">
                <span v-for="label in label"> {{ label }}</span>
            </div>
            <div class="bimodal-index__indicator__value">
                <span v-for="value in value" :title="value.toString()"> {{ value }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { PropType, computed } from "vue";

type Data = {
    label?: string;
    value?: number | string;
};
const { data = [], empty = "-" } = defineProps({
    data: {
        type: Array as PropType<Data[]>,
    },
    empty: {
        type: String,
    },
});
const list = computed(() => {
    return data.slice(0, 2);
});
const label = computed(() => {
    return list.value.map((item) => item.label);
});
const value = computed(() => {
    return list.value.map((item) => item.value || empty);
});
</script>

<style scoped lang="scss">
.bimodal-index {
    min-width: 390px;
    padding: 15px 30px 26px 30px;
    background: url("./images/skew/tile-bg.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    &__indicator {
        display: flex;
        align-items: center;
        gap: 25px;

        &__lable {
            flex-shrink: 0;
            display: flex;
            flex-direction: column;
            gap: 22px;
            font-family: HarmonyOS_Sans_SC;
            font-size: 14px;
            color: #ffffff;
            line-height: 20px;
            text-align: right;
            font-style: normal;
            text-transform: none;
        }

        &__value {
            flex: 1;
            width: 100%;
            display: flex;
            flex-direction: column;
            font-family: HarmonyOS_Sans_SC_Medium;
            font-size: 24px;
            color: #ffffff;
            line-height: 42px;
            text-align: left;
            font-style: normal;
            text-transform: none;
            overflow: hidden;
            span {
                display: inline-block;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
            }
        }
    }

    &:hover {
        background-image: url("./images/skew/tile-selected-bg.png");
    }
}
</style>
