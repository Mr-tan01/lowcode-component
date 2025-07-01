<template>
    <div class="indicator-card-vice">
        <img src="./images/card/spot-bg.png" alt="" class="spot-img spot-top" />
        <img
            src="./images/card/spot-bg.png"
            alt=""
            class="spot-img spot-down"
        />
        <div class="indicator-card-vice__wrapper">
            <div class="indicator-card-vice__wrapper__label">{{ label }}</div>
            <div class="indicator-card-vice__wrapper__value">
                <span class="indicator-card-vice__wrapper__value__num">
                    <NNumberAnimation
                        show-separator
                        :from="0"
                        :to="value"
                        active
                        :precision="0"
                /></span>
            </div>
            <div class="indicator-card-vice__wrapper__img">
                <img src="./images/card/big-substrate-bg.png" alt="" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { NNumberAnimation } from 'naive-ui/es/number-animation'

const { label = '已建成并投入运行设施(个)', value = 0 } = defineProps({
    label: {
        type: String,
    },
    value: {
        type: Number,
    },
})
</script>

<style lang="scss" scoped>
.indicator-card-vice {
    min-width: 391px;
    background-image: url(./images/card/arrows-bg.png);
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    position: relative;
    &__wrapper {
        margin-top: -36px;
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
            margin-top: -80px;
        }
    }
    .spot-img {
        width: auto;
        height: auto;
        mix-blend-mode: screen;
    }
    .spot-top {
        position: absolute;
        top: 0;
        right: 20px;
    }
    .spot-down {
        position: absolute;
        bottom: 55px;
        left: 20px;
    }
}
</style>
