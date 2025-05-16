<template>
    <div class="minitype-card">
        <div class="minitype-card__label">{{ label }}</div>
        <div class="minitype-card__value">
            <span class="minitype-card__value__num">
                <NNumberAnimation
                    show-separator
                    :from="0"
                    :to="value"
                    active
                    :precision="0"
            /></span>
        </div>
        <div class="minitype-card__img">
            <img src="./images/card/small-substrate-bg.png" alt="" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { NNumberAnimation } from "naive-ui/es/number-animation";

const { label = "已建成并投入运行设施(个)", value = 0 } = defineProps({
    label: {
        type: String,
    },
    value: {
        type: Number,
    },
});
</script>

<style lang="scss" scoped>
.minitype-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    &__label {
        font-family: HarmonyOS_Sans_SC;
        font-size: 16px;
        color: #ffffff;
        line-height: 20px;
        text-align: left;
        font-style: normal;
        text-transform: none;
    }
    &__value {
        display: flex;
        justify-content: center;
        margin-top: 10px;
        &__num {
            font-family: HarmonyOS_Sans_SC_Medium;
            font-size: 60px;
            color: transparent;
            line-height: 73px;
            text-shadow: 0px 0px 40px rgba(0, 129, 255, 0.4);
            text-align: center;
            font-style: normal;
            text-transform: none;
            background: linear-gradient(90deg, #ffffff 0%, #11bfff 100%);
            -webkit-background-clip: text;
            background-clip: text;
        }
    }
    &__img {
        margin-top: -60px;
    }
}
</style>
