<template>
    <div class="indicator-card-vice">
        <img src="./images/card/spot-bg.png" alt="" class="spot-img spot-top" />
        <img src="./images/card/spot-bg.png" alt="" class="spot-img spot-down" />
        <div class="indicator-card-vice__wrapper">
            <div class="indicator-card-vice__wrapper__label">{{ label }}</div>
            <div class="indicator-card-vice__wrapper__value">
                <div class="indicator-card-vice__wrapper__value__num">
                    <NNumberAnimation show-separator :from="0" :to="value" active :precision="0" />
                </div>
                <div class="indicator-card-vice__wrapper__img">
                    <img src="./images/card/big-substrate-bg.png" alt="" />
                </div>
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
    display: flex;
    justify-content: center;
    position: relative;
    height: 100%;
    &::before {
        content: '';
        width: 100%;
        height: 115px;
        background-image: url(./images/card/arrows-bg.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        position: absolute;
        top: 30px;
        left: 0;
    }

    &__wrapper {
        &__label {
            font-family: HarmonyOS_Sans_SC;
            font-size: 16px;
            color: #ffffff;
            line-height: 20px;
            text-align: left;
            font-style: normal;
            text-transform: none;
            margin-bottom: 10px;
        }
        &__value {
            position: relative;

            &__num {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                text-align: center;
                position: absolute;
                top: 0;
                font-family: HarmonyOS_Sans_SC_Medium;
                font-size: 80px;
                color: transparent;
                height: 115px;
                line-height: 100%;
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
            padding-top: 20px;
            text-align: center;
            img {
                width: 185px;
                height: 185px;
            }
        }
    }
    .spot-img {
        width: auto;
        height: auto;
        mix-blend-mode: screen;
    }
    .spot-top {
        position: absolute;
        top: 28px;
        right: 20px;
    }
    .spot-down {
        position: absolute;
        top: 140px;
        left: 20px;
    }
}
</style>
