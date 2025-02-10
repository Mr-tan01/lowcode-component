<template>
    <div class="lc-main-robot">
        <div class="lc-main-robot__wrapper">
            <img class="lc-main-robot__img" src="./images/main-robot.png" draggable="false" alt="">
            <div class="lc-main-robot__wrapper__inner-input">
                <div class="lc-main-robot__wrapper__inner-input--content">
                    <input type="text" :placeholder class="lc-main-robot__wrapper__inner-input--content__input">
                    <div class="lc-main-robot__wrapper__inner-input--content__suffix">
                        <img class="lc-main-robot__wrapper__inner-input--content__suffix--img" src="./images/microphone.png" draggable="false" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const {
    placeholder = 'AI 智能问数',
} = defineProps({
    placeholder: String,
});
</script>

<style lang="scss" scoped>
.lc-main-robot {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    &__img {
        width: 100%;
        object-fit: contain;
    }

    &__wrapper {
        inset: 0;
        position: relative;

        &__inner-input {
            position: absolute;
            left: 50%;
            top: 47%;
            transform: translate(-50%, -50%);
            display: flex;
            width: 74%;
            height: 8%;

            &--content {
                flex: 1;
                position: relative;
                overflow: hidden;
                display: flex;
                align-items: center;
                padding: 2% 5%;

                &__input {
                    flex: 1;
                    width: 100%;
                    border: none;
                    background: transparent;
                    outline: none;
                    font-size: 24px;
                    padding: 0;
                    box-sizing: border-box;
                    color: #fff;
                    font-family: HarmonyOS Sans SC Medium;

                    &::placeholder {
                        font-size: inherit;
                        color: #fff;
                    }
                }

                &__suffix {
                    margin-left: 5%;
                    width: 5%;
                    &--img {
                        width: 100%;
                        object-fit: contain;
                        &:hover {
                            cursor: pointer;
                            opacity: 0.8;
                        }
                    }
                }
            }
        }
    }
}
</style>