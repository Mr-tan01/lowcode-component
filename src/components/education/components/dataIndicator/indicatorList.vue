<template>
    <div class="lc-indicator-list">
        <div class="lc-indicator-list__wrapper">
            <div class="lc-indicator-list__wrapper__image">
                <img
                    class="lc-indicator-list__wrapper__image--img"
                    :src="icon"
                    alt=""
                />
            </div>
            <div class="lc-indicator-list__wrapper__info">
                <div class="lc-indicator-list__wrapper__info--nickname">
                    {{ name }}
                </div>
                <div class="lc-indicator-list__wrapper__info--msg">
                    <div
                        v-for="(item, key) in msg"
                        :key
                        class="lc-indicator-list__wrapper__info--msg__item"
                    >
                        <div
                            class="lc-indicator-list__wrapper__info--msg__item--label"
                        >
                            {{ item.label }}
                        </div>
                        <div
                            class="lc-indicator-list__wrapper__info--msg__item--value"
                        >
                            {{ item.value }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'

type ListType = {
    label: string
    value: string
}
const {
    icon = '',
    name = '-',
    msg = [],
} = defineProps({
    icon: {
        type: String,
    },
    name: {
        type: String,
    },
    msg: {
        type: Array as PropType<ListType[]>,
    },
})
</script>

<style lang="scss" scoped>
.lc-indicator-list {
    width: fit-content;
    background: url(./images/list/normal-bg.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    min-width: 300px;
    padding: 16px 20px;
    box-shadow: 0px 4px 9px 0px #080a0b53;

    &:hover {
        background-image: url(./images/list/hover-bg.png);
    }

    &__wrapper {
        display: flex;
        align-items: center;

        &__image {
            display: flex;
            align-items: center;
            &--img {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                object-fit: contain;
                margin-right: 12px;
            }
        }

        &__info {
            display: flex;
            align-items: center;
            gap: 16px;

            &--nickname {
                font-family: HarmonyOS_Sans_SC_Bold;
                font-size: 14px;
                color: #ffffff;
                line-height: 20px;
                text-align: left;
            }

            &--msg {
                &__item {
                    display: flex;
                    align-items: center;
                    font-family:
                        PingFangSC,
                        PingFang SC;
                    font-weight: 400;
                    color: #f2f3f4;
                    line-height: 24px;
                    text-align: left;

                    &--label {
                        font-size: 12px;
                        opacity: 0.9;
                    }

                    &--value {
                        font-size: 14px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
            }
        }
    }
}
</style>
