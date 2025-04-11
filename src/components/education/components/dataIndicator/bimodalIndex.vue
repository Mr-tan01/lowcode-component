<template>
    <div class="bimodal-index">
        <div class="bimodal-index__indicator" v-for="(item, key) in data" :key>
            <div class="bimodal-index__indicator__lable">
                {{ item.label }}
            </div>
            <div class="bimodal-index__indicator__value">
                {{ item.value }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { PropType, watch } from "vue";

type Data = {
    label?: string;
    value?: number | string;
};
const { data = [] } = defineProps({
    data: {
        type: Array as PropType<Data[]>,
    },
});

watch(
    () => data,
    (newValue) => {
        if (newValue.length > 2) {
            data.splice(2);
        }
    },
    { immediate: true, deep: true }
);
</script>

<style scoped lang="scss">
.bimodal-index {
    width: 390px;
    height: 125px;
    background-image: url("./images/skew/tile-bg.png");
    display: flex;
    flex-direction: column;

    &__indicator {
        display: flex;
        height: 40%;
        align-items: center;
        gap: 25px;
        padding: 0 30px;

        &__lable {
            font-family: HarmonyOS_Sans_SC;
            font-size: 14px;
            color: #ffffff;
            line-height: 20px;
            text-align: right;
            font-style: normal;
            text-transform: none;
        }

        &__value {
            font-family: HarmonyOS_Sans_SC_Medium;
            font-size: 24px;
            color: #ffffff;
            line-height: 42px;
            text-align: left;
            font-style: normal;
            text-transform: none;
        }
    }

    &__indicator:nth-child(2) {
        padding: 0 44px;
    }

    &:hover {
        background-image: url("./images/skew/tile-selected-bg.png");
    }
}
</style>
